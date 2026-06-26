# BuildMart WhatsApp Automation - Setup Guide

## Overview
Your WhatsApp automation system consists of two parts:
1. **Website** - Directs customers to WhatsApp with product details
2. **Bot Server** - Automatically responds with product catalog on WhatsApp

---

## Part 1: Website Setup (✅ Already Updated)

Your `construction.html` now includes:
- Click handlers for "Contact Seller" buttons
- Pre-filled WhatsApp messages with product info
- Sends customers directly to WhatsApp chat

**To update your phone number:**
1. Open `construction.html`
2. Find the line: `const phoneNumber = "91XXXXXXXXXX";`
3. Replace `91XXXXXXXXXX` with your Indian number (e.g., `919876543210`)
   - Format: [country code][area code][number] without spaces or symbols
4. Save the file

---

## Part 2: WhatsApp Bot Setup

### Step 1: Create Twilio Account
1. Go to https://www.twilio.com/console
2. Sign up for a free account
3. Verify your phone number
4. You'll get a free trial credit ($15)

### Step 2: Enable WhatsApp Sandbox
1. In Twilio Console, go to **Messaging** → **Try it out** → **Send an SMS**
2. Click on **WhatsApp** in the left sidebar
3. Click **Sandbox Settings**
4. Copy your sandbox phone number (looks like `+14155238886`)
5. Keep the webhook URL field for later

### Step 3: Get Your Credentials
1. Go to Twilio Console home
2. Copy your:
   - **Account SID** (starts with AC...)
   - **Auth Token** (hidden, click "eye" icon to reveal)
3. Save these securely

### Step 4: Test WhatsApp Sandbox
1. Open WhatsApp on your phone
2. Message the sandbox number with: `join [your-sandbox-code]`
   - The sandbox code is shown on the Sandbox Settings page
3. You'll receive a confirmation message

### Step 5: Install Node.js (If not already installed)
- Download from https://nodejs.org/ (LTS version recommended)
- Verify installation: Open Command Prompt and type `node --version`

### Step 6: Install Bot Dependencies
1. Open Command Prompt
2. Navigate to your website directory: `cd d:\construction material website`
3. Run: `npm install`
4. This installs Express, Twilio SDK, and other dependencies

### Step 7: Set Up Webhook
You need to expose your local server to the internet using **ngrok**:

1. Download ngrok from https://ngrok.com/download
2. Extract it to your website folder
3. Open Command Prompt in the website folder
4. Run: `ngrok http 3000`
5. Copy the URL shown (looks like `https://abc123.ngrok.io`)

### Step 8: Configure Twilio Webhook
1. Go back to Twilio Console → WhatsApp → Sandbox Settings
2. Set **When a message comes in** webhook to:
   ```
   https://your-ngrok-url/whatsapp
   ```
   Replace `your-ngrok-url` with your ngrok URL from Step 7

3. Set **Status Callbacks** to:
   ```
   https://your-ngrok-url/whatsapp-status
   ```

4. Click **Save**

### Step 9: Start Your Bot Server
1. Open a NEW Command Prompt window
2. Navigate to your website folder: `cd d:\construction material website`
3. Set environment variables:
   ```
   set TWILIO_ACCOUNT_SID=your_account_sid
   set TWILIO_AUTH_TOKEN=your_auth_token
   set TWILIO_PHONE_NUMBER=whatsapp:+14155238886
   ```
   (Replace with your actual credentials)

4. Start the bot: `npm start`
5. You should see: "✅ WhatsApp Bot Server running on port 3000"

### Step 10: Test the System
1. Open WhatsApp on your phone
2. Message the Twilio sandbox number
3. The bot will respond with:
   - Welcome message 🎉
   - List of products
   - Product images
4. Type "list" to see full catalog
5. Type a number (1-6) to see product details

---

## Files Created

| File | Purpose |
|------|---------|
| `construction.html` | Updated website with WhatsApp buttons |
| `products.json` | Product database with prices and images |
| `bot-server.js` | Node.js WhatsApp bot |
| `package.json` | Dependencies for bot |
| `SETUP.md` | This setup guide |

---

## Quick Reference - Bot Commands

| User Sends | Bot Response |
|-----------|--------------|
| First message | Welcome message + instructions |
| "list" | Full product catalog |
| "1" - "6" | Detailed product info + image |
| Any other text | Generic helpful response |

---

## Troubleshooting

**Problem**: Bot not responding
- Solution: Check bot server is running (`npm start`)
- Check ngrok is running and showing your tunnel URL
- Verify webhook URL in Twilio matches ngrok URL exactly

**Problem**: "Twilio credentials not found"
- Solution: Set environment variables before running `npm start`
- On Windows: Use `set VARIABLE_NAME=value`
- On Mac/Linux: Use `export VARIABLE_NAME=value`

**Problem**: Images not showing on WhatsApp
- Solution: Check image URLs are valid in `products.json`
- Twilio requires HTTPS URLs

**Problem**: Port 3000 already in use
- Solution: Change port in `bot-server.js` line near end (PORT = 3000)
- Then run ngrok with new port: `ngrok http 3001`

---

## Going Live (When Ready with Real Phone Number)

1. Switch from WhatsApp Sandbox to WhatsApp Business Account
2. Update `TWILIO_PHONE_NUMBER` with your real number
3. Deploy bot to a hosting service (Heroku, AWS, etc.)
4. Update webhook URL to your production server
5. Update `construction.html` with your real phone number

---

## Support Files

- **products.json**: Edit this to add/update products, prices, and images
- **bot-server.js**: Contains all bot logic - customize messages here
- **construction.html**: Website front-end with WhatsApp integration

---

**Questions?** Check Twilio documentation: https://www.twilio.com/docs/whatsapp
