# 🆓 FREE Twilio Sandbox Testing Guide (When Ready)

## Good News: Twilio is COMPLETELY FREE for Testing!

You **DON'T need a credit card** to try Twilio. The sandbox is free forever.

---

## Why Twilio Sandbox?

```
Website Only:
└─ Customer clicks → WhatsApp opens → You respond manually

Website + Twilio Bot:
└─ Customer clicks → WhatsApp opens → Bot auto-responds with catalog!
```

Twilio adds **24/7 automation**.

---

## 📋 What You Get (Free)

✅ Test phone number (e.g., +14155238886)
✅ Incoming message handling
✅ Automatic responses
✅ Send images on WhatsApp
✅ No credit card needed
✅ No time limit
✅ Full feature testing

---

## 🚀 Step-by-Step: Create FREE Twilio Account

### Step 1: Sign Up (2 minutes)
1. Go to: https://www.twilio.com/console
2. Click "Sign Up" (top right)
3. Enter email and password
4. Click "Create Account"

### Step 2: Verify Your Phone (2 minutes)
1. Twilio asks: "What's your phone number?"
2. Enter your Indian number (with country code)
3. Click "Send Code"
4. You get SMS with 6-digit code
5. Enter the code
6. Click "Verify"

### Step 3: Choose Your Use Case (1 minute)
1. Twilio asks: "What do you want to build?"
2. Select: "WhatsApp"
3. Click "Continue"

### Step 4: You're In! (Done!)
1. You now have a FREE Twilio account
2. Your trial credit: $15 (never expires for sandboxing)
3. Access to WhatsApp sandbox

---

## 🔑 Get Your Credentials (3 minutes)

### Find Account SID & Auth Token
1. In Twilio Console, go to: **Home**
2. You'll see:
   ```
   Account SID: AC1234567890abcdef...
   Auth Token: abcdef1234567890...
   ```
3. Copy both and keep safe

### Get Sandbox Phone Number
1. Go to: **Messaging** → **Try it out** → **WhatsApp**
2. Click: **Sandbox Settings**
3. You'll see:
   ```
   Your WhatsApp Number: +14155238886
   Sandbox Code: join coffee-cream
   (or similar)
   ```
4. Copy the phone number
5. Copy the sandbox code

---

## 📱 Join the Sandbox (1 minute)

### From Your Phone
1. Open WhatsApp on your phone
2. Message: `+14155238886` (the Twilio sandbox number)
3. Send the exact message: `join coffee-cream` (your sandbox code)
4. You get confirmation from Twilio

✅ You're now connected to the sandbox!

---

## 🤖 Install & Run Bot (5 minutes)

### Install Node.js (if not done)
1. Download: https://nodejs.org (LTS version)
2. Install with default settings
3. Restart your computer

### Install Bot Dependencies
1. Open Command Prompt
2. Go to your folder:
   ```
   cd d:\construction material website
   ```
3. Run:
   ```
   npm install
   ```
4. Wait for completion (shows "added X packages")

### Start Bot Server
1. In same Command Prompt, run:
   ```
   set TWILIO_ACCOUNT_SID=your_account_sid_here
   set TWILIO_AUTH_TOKEN=your_auth_token_here
   set TWILIO_PHONE_NUMBER=whatsapp:+14155238886
   npm start
   ```
2. Replace with YOUR actual credentials from Twilio

3. You should see:
   ```
   ✅ WhatsApp Bot Server running on port 3000
   ```

✅ Bot is running!

---

## 🌐 Make Bot Public (ngrok)

### Download ngrok (1 minute)
1. Go to: https://ngrok.com/download
2. Download the Windows version
3. Extract to your website folder

### Start ngrok (1 minute)
1. Open Command Prompt
2. Go to folder:
   ```
   cd d:\construction material website
   ```
3. Run:
   ```
   ngrok http 3000
   ```

4. You'll see:
   ```
   Forwarding https://abc123xyz.ngrok.io -> localhost:3000
   ```

5. **Copy the HTTPS URL** (the one that looks like: `https://abc123xyz.ngrok.io`)

✅ Your bot is now public!

---

## 🔗 Connect to Twilio (2 minutes)

### Add Webhook to Twilio
1. Go back to Twilio Console
2. **Messaging** → **WhatsApp** → **Sandbox Settings**
3. Find: "When a message comes in"
4. Paste your ngrok URL:
   ```
   https://your-ngrok-url/whatsapp
   ```
   (Replace `your-ngrok-url` with the one from ngrok)

5. Find: "Status Callbacks"
6. Paste:
   ```
   https://your-ngrok-url/whatsapp-status
   ```

7. Click **Save**

✅ Webhook connected!

---

## 🧪 Test Your Bot!

### From Your Phone
1. Open WhatsApp
2. Message the Twilio sandbox number (+14155238886)
3. Send any message

### Expected Bot Response
```
🎉 Welcome to BuildMart Construction Store! 🎉

Welcome! We're excited to help you with all your 
construction material needs.

We offer high-quality construction materials:
✅ Cement
✅ Bricks
✅ Steel Rods
✅ Sand
✅ Paint
✅ Tiles

Type "list" to see our full product catalog!
```

✅ Bot responded!

### Test Product List
1. Send: `list`
2. Bot sends: All 6 products with prices
3. Then sends: Product images one by one

✅ Catalog works!

### Test Product Details
1. Send: `2` (for Bricks)
2. Bot sends: Bricks details + image

✅ Everything works!

---

## 📊 Testing Checklist

- [ ] Created free Twilio account (no credit card)
- [ ] Verified phone number
- [ ] Got Account SID & Auth Token
- [ ] Got sandbox phone number
- [ ] Joined sandbox (sent code via WhatsApp)
- [ ] Installed Node.js
- [ ] Ran npm install
- [ ] Downloaded ngrok
- [ ] Bot server running (npm start)
- [ ] ngrok tunnel running
- [ ] Webhook URL in Twilio set
- [ ] Sent message to sandbox
- [ ] Got bot response ✅
- [ ] Tested "list" command
- [ ] Tested product number command

---

## 🎯 What You've Now Achieved

✅ Website works (customers click → WhatsApp)
✅ Bot responds automatically
✅ Product catalog displays
✅ Images send via WhatsApp
✅ Professional automation

**You now have FULL WhatsApp sales automation!**

---

## 💡 Common Questions

**Q: Is this really free?**
A: Yes! Sandbox is free forever. $15 trial credit for testing.

**Q: Do I need a credit card?**
A: No! Phone number verification only.

**Q: How long can I test?**
A: As long as you want! No time limit.

**Q: Can real customers use this?**
A: Not yet - this is sandbox for testing. For real customers, upgrade to WhatsApp Business Account (paid).

**Q: What happens to my bot when I close the windows?**
A: Bot stops. Restart with `npm start` to run again.

---

## 🚀 Next Step: Go Live (Later)

When ready to go live with real customers:

1. Switch from Sandbox → WhatsApp Business Account
2. Add your real business phone number
3. Deploy bot to cloud (Heroku, AWS, etc.)
4. Enable real customer access

**But for now, test everything in this sandbox!**

---

## ❓ Quick Troubleshooting

**Bot not responding?**
- Check bot is running in Command Prompt (should show "✅ running")
- Check ngrok is running in another window
- Check webhook URL in Twilio matches ngrok URL

**Images not showing?**
- Check products.json has HTTPS image URLs
- Twilio requires HTTPS (not HTTP)

**Wrong number in message?**
- Edit construction.html line 217 with correct number

**Port 3000 in use?**
- Close other apps using port 3000
- Or change port in bot-server.js

---

## 📖 Full Guides

Once everything works:
- Read `COMPLETE_GUIDE.md` for details
- Read `SETUP.md` for production deployment
- Check `README.md` for reference

---

## 🎊 You're Ready!

Now you have:
✅ Website WhatsApp integration (working)
✅ Free Twilio sandbox (tested)
✅ WhatsApp bot (automated)
✅ Product catalog (displaying)

**Ready to launch? Your construction materials business just went digital!** 🏗️📱

---

**Next**: Test in sandbox, then move to production when ready!
