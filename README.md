# Zishann Jhumar Website - Image Upload Instructions

## 📁 Folder Structure
```
ZISHANN/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── products/
        │   ├── product1.jpg
        │   ├── product2.jpg
        │   ├── product3.jpg
        │   ├── product4.jpg
        │   ├── product5.jpg
        │   └── product6.jpg
        └── about.jpg
```

## 🖼️ How to Add Your Jhumar Images

### Step 1: Prepare Your Images
- Take high-quality photos of your jhumar products
- Recommended size: 800x800 pixels or larger
- Format: JPG, JPEG, or PNG
- Make sure images are well-lit and clear

### Step 2: Upload Product Images
1. Open the folder: `ZISHANN/assets/images/products/`
2. Copy your jhumar images to this folder
3. Rename them exactly as follows:
   - `product1.jpg` - Royal Crystal Jhumar
   - `product2.jpg` - Golden Empire Chandelier
   - `product3.jpg` - Modern Luxury Pendant
   - `product4.jpg` - Vintage Palace Jhumar
   - `product5.jpg` - Diamond Cascade Chandelier
   - `product6.jpg` - Classic Heritage Jhumar

### Step 3: Upload About Section Image
1. Open the folder: `ZISHANN/assets/images/`
2. Copy your showroom or featured jhumar image
3. Rename it to: `about.jpg`

### Step 4: Refresh Website
- Open `index.html` in your browser
- Press `Ctrl + F5` to hard refresh and see your new images

## 📝 Important Notes

### Image Naming
- **File names must be EXACTLY as shown above**
- Use lowercase letters
- Use `.jpg` extension (or change in script.js if using .png)

### Image Quality Tips
- Use high-resolution images (minimum 800x800px)
- Keep file size under 500KB for faster loading
- Use good lighting when photographing jhumars
- Clean background works best

### Changing Product Names
If you want to change product names:
1. Open `index.html`
2. Find the product card section
3. Edit the `<h3 class="product-name">` text
4. Edit the `<p class="product-description">` text
5. Edit the `<span class="product-price">` amount

### Adding More Products
To add more products:
1. Copy a product card in `index.html`
2. Change the product ID (product7, product8, etc.)
3. Add corresponding image in `assets/images/products/`
4. Update `script.js` productImages object

## 🎨 Customization

### Change Colors
Edit `style.css` and modify these variables:
```css
--primary-gold: #D4AF37;
--accent-gold: #FFD700;
```

### Change Contact Information
Edit `index.html` in the Contact Section:
- Phone numbers
- Email address
- Address

### Chatbot Responses
Edit `script.js` in the `getBotResponse()` function to customize chatbot replies.

## 🚀 Going Live

### Option 1: Free Hosting (GitHub Pages)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in settings

### Option 2: Paid Hosting
- Upload all files to your web hosting via FTP
- Make sure folder structure remains the same

## 📞 Support
For any issues or customization help, contact:
- Phone: +91 9639743712
- Phone: +91 9758968437

---
**Made with ❤️ for Zishann Luxury Lighting**
