# 🚀 Zishann Chatbot Setup Guide

## ✅ Website Changes Complete!

Aapki website mein yeh changes ho gaye hain:

### 1. **N8N Integration** ✅
- Chatbot ab n8n webhook se connect hoga
- Real-time AI responses milenge
- Fallback system hai agar n8n down ho

### 2. **Image Support** ✅
- AI agent jo bhi image URL bhejega, automatically display hoga
- Images clickable hain (new tab mein khulti hain)
- Smooth animations aur hover effects

### 3. **Typing Indicator** ✅
- Jab AI soch raha hoga, typing dots dikhenge
- Professional look

---

## 🔧 Ab Kya Karna Hai

### **STEP 1: N8N Webhook URL Update Karo**

1. **File kholo**: `script.js`
2. **Line 58 pe jao** aur yeh line dhundo:
   ```javascript
   const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';
   ```
3. **Replace karo** apne actual n8n webhook URL se:
   ```javascript
   const N8N_WEBHOOK_URL = 'https://n8n.srv1319269.hstgr.cloud/webhook/YOUR_WEBHOOK_PATH';
   ```

---

### **STEP 2: Google Sheets Setup**

#### **Sheet 1: Products** (READ - AI agent yahan se data lega)

| Product_Name | Price | Description | Image_URL | Stock |
|--------------|-------|-------------|-----------|-------|
| Royal Crystal Jhumar | 45999 | Golden finish, crystal work, 24-inch | https://i.ibb.co/abc123/royal.jpg | Available |
| Golden Empire Chandelier | 68999 | Multi-tier golden design | https://i.ibb.co/xyz456/golden.jpg | Available |

**Columns:**
- `Product_Name` - Product ka naam
- `Price` - Price (numbers only, no ₹ symbol)
- `Description` - Short description
- `Image_URL` - Image ka direct link
- `Stock` - Available/Out of Stock

---

#### **Sheet 2: Confirmed_Orders** (WRITE - Confirmed orders yahan save honge)

| Timestamp | Customer_Name | Phone | Address | City | Pincode | Product_Name | Price | Quantity | Total_Amount | Payment_Method | Status |
|-----------|---------------|-------|---------|------|---------|--------------|-------|----------|--------------|----------------|--------|
| 2026-02-07 22:30:00 | Rahul Sharma | 9876543210 | 123 Main St | Meerut | 250001 | Royal Crystal Jhumar | 45999 | 1 | 45999 | COD | Pending |

**Columns:**
- `Timestamp` - Order time
- `Customer_Name` - Customer ka naam
- `Phone` - Phone number
- `Address` - Full address
- `City` - City
- `Pincode` - Pincode
- `Product_Name` - Product name
- `Price` - Product price
- `Quantity` - Kitne pieces
- `Total_Amount` - Total amount
- `Payment_Method` - COD/Online
- `Status` - Pending/Confirmed/Delivered

---

#### **Sheet 3: General_Inquiries** (WRITE - General queries yahan save honge)

| Timestamp | Phone | Name | Query_Type | Message | Status | Follow_Up |
|-----------|-------|------|------------|---------|--------|-----------|
| 2026-02-07 22:35:00 | 9876543210 | Amit | Warranty | Warranty kitni hai? | New | Pending |

**Columns:**
- `Timestamp` - Query time
- `Phone` - Phone number
- `Name` - Customer name (optional)
- `Query_Type` - Warranty/Installation/Delivery/Other
- `Message` - Customer ka message
- `Status` - New/Contacted/Resolved
- `Follow_Up` - Pending/Done

---

### **STEP 3: Product Images Upload Karo**

Aapke paas **2 options** hain:

#### **Option A: ImgBB (Recommended - Free & Easy)**

1. **Website kholo**: https://imgbb.com
2. **"Start uploading"** pe click karo
3. **Images select karo** (apne jhumar products ki)
4. **Upload karo**
5. **Direct link copy karo** (right-click on image → Copy image address)
6. **Google Sheets mein paste karo** Image_URL column mein

**Example:**
```
https://i.ibb.co/abc123/royal-crystal-jhumar.jpg
```

#### **Option B: Cloudinary (Professional)**

1. **Sign up**: https://cloudinary.com (free)
2. **Upload images**
3. **Copy image URL**
4. **Paste in Google Sheets**

---

### **STEP 4: N8N Workflow Configuration**

Aapke n8n workflow mein yeh nodes hone chahiye:

```
1. Webhook (Trigger)
   ↓
2. AI Agent (with updated system message)
   ↓
3. Google Sheets (Lookup for products)
   ↓
4. IF Node (Check if confirmed order or general inquiry)
   ↓
5a. Google Sheets (Write to Confirmed_Orders)
   OR
5b. Google Sheets (Write to General_Inquiries)
   ↓
6. Respond to Webhook
```

#### **Webhook Node Settings:**
- **HTTP Method**: POST
- **Path**: `/webhook/zishann-chat` (ya jo bhi aap chahte ho)
- **Response Mode**: Respond to Webhook

#### **AI Agent Node Settings:**
- **System Message**: (Use the updated system message from previous response)
- **Memory**: Conversation Buffer Memory
- **Tools**: Google Sheets (all 3 sheets connected)

#### **Response Format:**
```json
{
  "response": "{{AI_AGENT_OUTPUT}}",
  "timestamp": "{{$now}}",
  "status": "success"
}
```

---

### **STEP 5: System Message Update**

N8N ke AI Agent node mein yeh system message paste karo:

```
You are Zishann Sales Assistant - a friendly lighting consultant for Zishann Jhumar Collection, Meerut.

CORE RULES:
1. Keep responses SHORT (2-3 lines max, unless showing products)
2. ALWAYS show product images when recommending
3. Be conversational, not salesy
4. Save to sheets ONLY when confirmed

When showing products from Google Sheets:

Format:
🏮 **[Product Name]** - ₹[Price]
[Description]
📸 [Image_URL]

Pasand aaya?

Example:
🏮 **Royal Crystal Jhumar** - ₹45,999
Golden finish, crystal work, 24-inch diameter
📸 https://i.ibb.co/abc123/royal-crystal.jpg

Interested? Ya aur options dekhna hai?

IMPORTANT: 
- Always fetch Image_URL from Google Sheets "Products" sheet
- Send image URL with every product recommendation
- Max 2 products with images at a time
- If image not available, mention "Image coming soon"

[... rest of system message from previous response ...]
```

---

## 🧪 Testing

### **Test 1: Basic Chat**
1. Website kholo
2. Chatbot icon pe click karo
3. Type karo: "Hello"
4. Response aana chahiye: "Namaste! 🙏 Zishann Lighting mein aapka swagat hai..."

### **Test 2: Product Inquiry**
1. Type karo: "Living room ke liye kuch dikhao"
2. AI agent product recommend karega WITH image
3. Image display honi chahiye chat mein

### **Test 3: Order Confirmation**
1. Product select karo
2. "Order karna hai" bolo
3. Details do (Name, Phone, Address)
4. Check karo Google Sheets "Confirmed_Orders" mein entry aayi ya nahi

### **Test 4: General Inquiry**
1. Type karo: "Warranty kitni hai?"
2. AI agent answer dega
3. Number share karo
4. Check karo Google Sheets "General_Inquiries" mein entry aayi ya nahi

---

## 🐛 Troubleshooting

### **Problem 1: Images nahi dikh rahi**
**Solution:**
- Check karo Image_URL valid hai ya nahi (browser mein paste karke dekho)
- Check karo URL mein spaces ya special characters toh nahi
- ImgBB/Cloudinary se direct link use karo, not Google Drive

### **Problem 2: N8N se response nahi aa raha**
**Solution:**
- Check karo webhook URL sahi hai ya nahi
- N8N workflow active hai ya nahi
- Browser console mein errors check karo (F12 press karo)
- Fallback responses aa rahe hain toh n8n connection issue hai

### **Problem 3: Data Google Sheets mein save nahi ho raha**
**Solution:**
- Check karo Google Sheets permissions (n8n ko edit access hai ya nahi)
- Column names exactly match kar rahe hain ya nahi
- N8N workflow mein Google Sheets nodes properly configured hain ya nahi

### **Problem 4: Typing indicator nahi dikh raha**
**Solution:**
- Browser cache clear karo (Ctrl + Shift + Delete)
- Hard refresh karo (Ctrl + F5)
- Check karo CSS properly load ho rahi hai ya nahi

---

## 📱 Mobile Testing

Mobile pe bhi test karo:
1. Chatbot icon properly dikh raha hai ya nahi
2. Chat window responsive hai ya nahi
3. Images mobile pe load ho rahi hain ya nahi
4. Typing smooth hai ya nahi

---

## 🎯 Next Steps (Optional Enhancements)

1. **WhatsApp Integration**: N8N se WhatsApp connect karo for direct messaging
2. **Payment Gateway**: Online payment option add karo
3. **Order Tracking**: Customer ko order status updates bhejo
4. **Analytics**: Google Analytics add karo to track conversions
5. **Email Notifications**: Order confirm hone pe email bhejo

---

## 📞 Support

Agar koi problem aaye toh:
1. Browser console check karo (F12)
2. N8N execution logs dekho
3. Google Sheets permissions verify karo
4. Webhook URL double-check karo

---

## ✅ Final Checklist

- [ ] `script.js` mein N8N webhook URL update kiya
- [ ] Google Sheets banaye (3 sheets with proper columns)
- [ ] Product images upload kiye (ImgBB/Cloudinary)
- [ ] Image URLs Google Sheets mein add kiye
- [ ] N8N workflow configure kiya
- [ ] System message update kiya
- [ ] Website test kiya (desktop + mobile)
- [ ] Sample order place karke test kiya
- [ ] Google Sheets mein data save ho raha hai verify kiya

---

**Sab kuch ready hai! 🎉**

Bas N8N webhook URL update karo aur test karo!
