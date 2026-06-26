const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Load products
const productsPath = path.join(__dirname, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const products = productsData.products;

// Twilio credentials (add your credentials here)
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || 'whatsapp:+14155238886'; // Twilio sandbox number

const client = twilio(accountSid, authToken);

// Store customer state (first interaction)
const customerState = new Map();

// Webhook endpoint for incoming WhatsApp messages
app.post('/whatsapp', (req, res) => {
    const incomingMessage = req.body.Body?.toLowerCase().trim() || '';
    const customerPhone = req.body.From;
    
    console.log(`Message from ${customerPhone}: ${incomingMessage}`);
    
    // Check if this is a first-time customer
    if (!customerState.has(customerPhone)) {
        customerState.set(customerPhone, { state: 'greeted' });
        
        // Send welcome message
        sendWelcomeMessage(customerPhone);
    } else if (incomingMessage.includes('menu') || incomingMessage.includes('list')) {
        // Send product catalog
        sendProductCatalog(customerPhone);
    } else if (/^\d+$/.test(incomingMessage)) {
        // Handle product selection by number
        handleProductSelection(customerPhone, parseInt(incomingMessage));
    } else {
        // Generic response for other inputs
        sendGenericResponse(customerPhone);
    }
    
    // Send empty response to Twilio
    res.send('');
});

// Send welcome message
function sendWelcomeMessage(phoneNumber) {
    const message = `🎉 *Welcome to BuildMart Construction Store!* 🎉

Welcome! We're excited to help you with all your construction material needs.

We offer high-quality construction materials including:
✅ Cement
✅ Bricks
✅ Steel Rods
✅ Sand
✅ Paint
✅ Tiles

Type *"list"* to see our full product catalog with prices and images!
Type a product *number* (1-6) after seeing the list to get details.`;

    sendWhatsAppMessage(phoneNumber, message);
}

// Send product catalog
function sendProductCatalog(phoneNumber) {
    let catalogMessage = `📦 *Our Construction Materials - Price List*\n\n`;
    
    products.forEach((product, index) => {
        catalogMessage += `${index + 1}. *${product.name}*\n`;
        catalogMessage += `   Price: ${product.price}\n`;
        catalogMessage += `   ${product.description}\n\n`;
    });
    
    catalogMessage += `Reply with the product number (1-6) to get more details!\n`;
    catalogMessage += `Example: Type "1" for Cement Bags`;
    
    sendWhatsAppMessage(phoneNumber, catalogMessage);
    
    // Send product images
    products.forEach((product, index) => {
        setTimeout(() => {
            sendProductImage(phoneNumber, product);
        }, 1000 * (index + 1));
    });
}

// Send product details
function handleProductSelection(phoneNumber, productNumber) {
    if (productNumber > 0 && productNumber <= products.length) {
        const product = products[productNumber - 1];
        
        const detailMessage = `📋 *${product.name}*\n\n` +
            `💰 Price: ${product.price}\n` +
            `📝 ${product.description}\n` +
            `🏷️ Category: ${product.category}\n\n` +
            `Would you like to order this? Reply with quantity and we'll process your order!`;
        
        sendWhatsAppMessage(phoneNumber, detailMessage);
        sendProductImage(phoneNumber, product);
    } else {
        sendGenericResponse(phoneNumber);
    }
}

// Send generic response
function sendGenericResponse(phoneNumber) {
    const message = `Thanks for your message! 😊\n\n` +
        `Type "list" to see our product catalog\n` +
        `Or reply with a product number (1-6) for details!`;
    
    sendWhatsAppMessage(phoneNumber, message);
}

// Send WhatsApp text message
function sendWhatsAppMessage(phoneNumber, message) {
    client.messages
        .create({
            from: twilioPhoneNumber,
            to: phoneNumber,
            body: message
        })
        .then((msg) => console.log(`Message sent: ${msg.sid}`))
        .catch((err) => console.error(`Error sending message: ${err}`));
}

// Send product image
function sendProductImage(phoneNumber, product) {
    client.messages
        .create({
            from: twilioPhoneNumber,
            to: phoneNumber,
            mediaUrl: [product.image]
        })
        .then((msg) => console.log(`Image sent: ${msg.sid}`))
        .catch((err) => console.error(`Error sending image: ${err}`));
}

// Status webhook (optional, for message delivery tracking)
app.post('/whatsapp-status', (req, res) => {
    const messageStatus = req.body.MessageStatus;
    const messageSid = req.body.MessageSid;
    
    console.log(`Message ${messageSid} status: ${messageStatus}`);
    res.send('');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ WhatsApp Bot Server running on port ${PORT}`);
    console.log(`📱 Webhook URL: http://localhost:${PORT}/whatsapp`);
    console.log(`📊 Status URL: http://localhost:${PORT}/whatsapp-status`);
    console.log(`\n⚠️  Remember to set environment variables:`);
    console.log(`   - TWILIO_ACCOUNT_SID`);
    console.log(`   - TWILIO_AUTH_TOKEN`);
    console.log(`   - TWILIO_PHONE_NUMBER`);
});

module.exports = app;
