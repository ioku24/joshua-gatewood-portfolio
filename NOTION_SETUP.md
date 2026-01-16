# Notion Integration Setup

Your portfolio is now connected to Notion! You can edit your content in Notion and it will automatically update on your website.

## 🎉 What's Already Done

✅ Notion page "Portfolio Content" has been created with your current content
✅ Code is set up to fetch from Notion on every page load (instant updates!)
✅ Falls back to static content if Notion is unavailable

**Your Notion Page:** https://www.notion.so/2eae3fe480e5818ea5a6d2b423cc3a07

## 📋 Setup Steps (5 minutes)

### Step 1: Create Notion Integration (2 minutes)

1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Name it: "Portfolio Website"
4. Select your workspace
5. Click "Submit"
6. **Copy the "Internal Integration Token"** (starts with `secret_`)

### Step 2: Share Your Page with the Integration (1 minute)

1. Open your Portfolio Content page: https://www.notion.so/2eae3fe480e5818ea5a6d2b423cc3a07
2. Click "Share" in the top-right
3. Click "Invite"
4. Search for "Portfolio Website" (your integration name)
5. Click "Invite"

### Step 3: Add Token to Vercel (2 minutes)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Go to "Settings" → "Environment Variables"
4. Add a new variable:
   - **Name:** `NOTION_API_TOKEN`
   - **Value:** [paste the token from Step 1]
   - Select: Production, Preview, and Development
5. Click "Save"
6. Redeploy your site (or it will auto-deploy on next push)

### Step 4: Test It Works! (30 seconds)

1. Visit your website
2. Open your Notion page
3. Change one word in your bio
4. Refresh your website (may take ~30 seconds)
5. See the change appear! 🎉

## ✏️ How to Edit Your Portfolio

Just edit your Notion page: https://www.notion.so/2eae3fe480e5818ea5a6d2b423cc3a07

### To Update Your Bio
- Edit the text after "Bio:" in the ABOUT section

### To Change Your Tagline
- Edit the text after "Tagline:" in the ABOUT section

### To Add a New Project
Add a new section under PROJECTS:

```
## My New Project

✅ Live: Yes
🔗 Link: https://myproject.com
📝 Description: What the project does and why it's cool.
🖼️ Media:
- /assets/my-new-screenshot.png
- https://youtube.com/embed/VIDEO_ID
```

### To Update Project Images
1. Upload the new image to your `/public/assets/` folder
2. Update the path in your Notion page under Media
3. Or use an embed URL (YouTube, Descript, etc.)

### To Change Social Links
- Update the URLs in the LINKS section

## 🔧 Local Development

To test Notion integration locally:

1. Create a `.env` file in the root:
   ```bash
   NOTION_API_TOKEN=secret_your_token_here
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Your site will fetch from Notion on every page load

## 🐛 Troubleshooting

### "Failed to fetch from Notion"
- Check that you shared the page with your integration
- Verify the token is correct in Vercel environment variables
- Make sure the page ID in `api/notion-content.ts` is correct

### Content Not Updating
- Wait 30 seconds after editing (cache time)
- Clear your browser cache
- Check the browser console for errors

### Vercel Build Failing
- The API route needs the `NOTION_API_TOKEN` environment variable
- Make sure you added it to Vercel settings (Step 3 above)

## 📝 Content Format Reference

The Notion page uses this structure:

```
# 👤 ABOUT
Name: Your Name
Tagline: Your Tagline
Bio: Your bio paragraph...
Photo URL: /path/to/photo.jpg

# 🔗 LINKS
Cal.com: https://cal.com/username
Resume: https://drive.google.com/file/d/...
LinkedIn: https://linkedin.com/in/username
X: https://x.com/username
Instagram: https://instagram.com/username
YouTube: https://youtube.com/@username

# 📁 PROJECTS

## Project Name
✅ Live: Yes (or No)
🔗 Link: https://project-url.com
📍 Context: at Company Name (optional)
📝 Description: Project description here
🖼️ Media:
- /assets/screenshot1.png
- /assets/screenshot2.png
- https://youtube.com/embed/VIDEO_ID
- https://share.descript.com/embed/ID
```

## 🎨 Supported Media Types

- **Images**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- **Videos**: `.mp4`, `.mov`, `.avi`
- **Embeds**: YouTube, Descript, Loom URLs

## 🚀 That's It!

You can now edit your portfolio without touching code. Just update your Notion page and your website updates automatically!

Questions? Check the browser console for error messages or contact me.
