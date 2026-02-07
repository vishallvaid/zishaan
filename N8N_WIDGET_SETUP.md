# 🚀 N8N Chat Widget Setup Guide - Zishann Website

## ✅ SETUP COMPLETE!

Aapki website mein **n8n official chat widget** successfully integrate ho gaya hai!

---

## 📝 KYA HO GAYA HAI

### 1. **N8N Chat Widget Added** ✅
- Official n8n chat widget integrated
- Custom chatbot code removed (ab zarurat nahi)
- Automatic image support
- Built-in typing indicators
- Professional UI

### 2. **Files Updated** ✅
- `index.html` - N8N widget script added
- `script.js` - Simplified (chatbot code removed)
- `style.css` - Custom chatbot styles (ab use nahi honge, but kept for backup)

---

## 🔧 AB SIRF YEH KARNA HAI

### **STEP 1: Webhook URL Update Karo** (2 minutes)

1. **File kholo**: `index.html`
2. **Line 336 pe jao** (ya search karo: `YOUR_PRODUCTION_WEBHOOK_URL`)
3. **Replace karo** apne n8n webhook URL se:

```javascript
webhookUrl: 'https://n8n.srv1319269.hstgr.cloud/webhook/YOUR_WEBHOOK_PATH'
```

**Example:**
```javascript
webhookUrl: 'https://n8n.srv1319269.hstgr.cloud/webhook/zishann-chat'
```

---

### **STEP 2: N8N Workflow Setup**

#### **Workflow Structure:**

```
1. Webhook (Chat Trigger)
   ↓
2. AI Agent (with system message)
   ↓
3. Google Sheets (Lookup products)
   ↓
4. IF Node (Check order type)
   ↓
5a. Save to Confirmed_Orders
   OR
5b. Save to General_Inquiries
   ↓
6. Respond to Webhook
```

#### **Webhook Node Configuration:**

- **HTTP Method**: POST
- **Path**: `/webhook/zishann-chat` (ya jo bhi aap chahte ho)
- **Response Mode**: "Respond to Webhook"
- **Response Data**: `{{ $json }}`

#### **AI Agent Node Configuration:**

**System Message** (Copy this):

```
You are Zishann Sales Assistant - a friendly lighting consultant for Zishann Jhumar Collection, Meerut.

CORE RULES:
1. Keep responses SHORT (2-3 lines max, unless showing products)
2. ALWAYS show product images when recommending
3. Be conversational, not salesy
4. Save to sheets ONLY when confirmed

When showing products from Google Sheets:

Format:
🏮 **[Product_Name]** - ₹[Price]
[Description]
![Product Image]([Image_URL])

Pasand aaya?

Example:
🏮 **Royal Crystal Jhumar** - ₹45,999
Golden finish, crystal work, 24-inch
![Royal Crystal](https://i.ibb.co/abc123/royal.jpg)

Interested? Ya aur option dekhna hai?

IMPORTANT:
- Use markdown image format: ![alt](url)
- N8N widget automatically renders images
- Max 2 products at a time

[... rest of system message from AI_AGENT_SYSTEM_MESSAGE.txt ...]
```

**Tools**: 
- Google Sheets (all 3 sheets connected)

**Memory**: 
- Conversation Buffer Memory

---

### **STEP 3: Google Sheets Setup**

#### **Sheet 1: Products** (READ)

| Product_Name | Price | Description | Image_URL | Stock |
|--------------|-------|-------------|-----------|-------|
| Royal Crystal Jhumar | 45999 | Golden finish, crystal work | https://i.ibb.co/abc/royal.jpg | Available |
| Golden Empire Chandelier | 68999 | Multi-tier golden design | https://i.ibb.co/xyz/golden.jpg | Available |

#### **Sheet 2: Confirmed_Orders** (WRITE)

| Timestamp | Name | Phone | Address | City | Pincode | Product | Price | Quantity | Total | Status |
|-----------|------|-------|---------|------|---------|---------|-------|----------|-------|--------|
| 2026-02-07 23:00:00 | Rahul | 9876543210 | 123 Main St | Meerut | 250001 | Royal Crystal Jhumar | 45999 | 1 | 45999 | Pending |

#### **Sheet 3: General_Inquiries** (WRITE)

| Timestamp | Phone | Name | Query | Status |
|-----------|-------|------|-------|--------|
| 2026-02-07 23:05:00 | 9876543210 | Amit | Warranty info | New |

---

### **STEP 4: Upload Product Images**

#### **Option 1: ImgBB (Recommended)**

1. Go to: https://imgbb.com
2. Click "Start uploading"
3. Upload your jhumar images
4. Copy "Direct link"
5. Paste in Google Sheets `Image_URL` column

**Example URL:**
```
https://i.ibb.co/abc123/royal-crystal-jhumar.jpg
```

#### **Option 2: Cloudinary**

1. Sign up: https://cloudinary.com
2. Upload images
3. Copy image URL
4. Paste in Google Sheets

---

## 🎨 N8N Widget Customization (Optional)

Agar aap widget ka look customize karna chahte ho, toh `index.html` mein yeh options add kar sakte ho:

```javascript
createChat({
    webhookUrl: 'YOUR_WEBHOOK_URL',
    
    // Initial messages
    initialMessages: [
        'Namaste! 🙏 Welcome to Zishann Luxury Lighting.',
        'Main aapki madad ke liye yahaan hoon. Kaise help kar sakti hoon?'
    ],
    
    // UI customization
    i18n: {
        en: {
            title: 'Zishann Assistant',
            subtitle: 'Online',
            footer: '',
            getStarted: 'Start Chat',
            inputPlaceholder: 'Type your message...',
        }
    },
    
    // Theme (optional)
    theme: {
        primaryColor: '#D4AF37', // Gold color
    },
    
    // Position (optional)
    chatWindowPosition: 'right', // or 'left'
    
    // Auto-open (optional)
    showWelcomeScreen: true
});
```

---

## 🧪 Testing

### **Test 1: Basic Chat**
1. Website kholo
2. Chat icon pe click karo (bottom-right)
3. Type: "Hello"
4. Response milna chahiye

### **Test 2: Product with Image**
1. Type: "Living room ke liye kuch dikhao"
2. AI agent product recommend karega
3. **Image automatically display honi chahiye**

### **Test 3: Order Placement**
1. Product select karo
2. "Order karna hai" bolo
3. Details do
4. Google Sheets check karo

---

## 🐛 Troubleshooting

### **Problem 1: Chat widget nahi dikh raha**

**Solution:**
- Browser console check karo (F12)
- Check karo CDN links load ho rahi hain ya nahi
- Hard refresh karo (Ctrl + F5)

### **Problem 2: Images nahi dikh rahi**

**Solution:**
- Image URLs valid hain ya nahi check karo
- Markdown format sahi hai: `![alt](url)`
- ImgBB/Cloudinary direct links use karo

### **Problem 3: Messages send nahi ho rahe**

**Solution:**
- Webhook URL sahi hai ya nahi verify karo
- N8N workflow active hai ya nahi check karo
- Browser console mein errors dekho

### **Problem 4: Data save nahi ho raha**

**Solution:**
- Google Sheets permissions check karo
- Column names exactly match kar rahe hain
- N8N Google Sheets nodes properly configured hain

---

## 📱 Mobile Testing

- Chat widget automatically responsive hai
- Mobile pe test karo
- Images properly load ho rahi hain ya nahi check karo

---

## ✅ Final Checklist

- [ ] `index.html` mein webhook URL update kiya (Line 336)
- [ ] N8N workflow create kiya
- [ ] AI Agent system message add kiya
- [ ] Google Sheets banaye (3 sheets)
- [ ] Product images upload kiye (ImgBB)
- [ ] Image URLs Google Sheets mein add kiye
- [ ] Website test kiya (desktop + mobile)
- [ ] Sample conversation test kiya
- [ ] Images properly display ho rahi hain
- [ ] Google Sheets mein data save ho raha hai

---

## 🎯 N8N Widget vs Custom Chatbot

### **N8N Widget Benefits:**

✅ **Automatic image rendering** - Markdown images automatically show
✅ **Built-in typing indicators** - No custom code needed
✅ **Professional UI** - Pre-designed and tested
✅ **Mobile responsive** - Works perfectly on all devices
✅ **Easy updates** - Just update webhook URL
✅ **No maintenance** - n8n handles everything
✅ **Better performance** - Optimized by n8n team

---

## 📞 Support

Agar koi problem ho toh:

1. **Browser Console** check karo (F12 → Console tab)
2. **N8N Execution Logs** dekho
3. **Webhook URL** verify karo
4. **Google Sheets permissions** check karo

---

## 🚀 YOU'RE READY!

Bas **webhook URL update karo** aur test karo!

**Current Status:**
- ✅ N8N widget integrated
- ✅ HTML updated
- ✅ JavaScript simplified
- ✅ Ready to connect with n8n

**Next Step:**
Update `YOUR_PRODUCTION_WEBHOOK_URL` in `index.html` line 336!

---

**Happy Selling! 🎉**
