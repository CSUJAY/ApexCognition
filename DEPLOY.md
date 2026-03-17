# Deploy to Vercel

## Option A: Deploy from GitHub (recommended)

1. **Push your code to GitHub** (you already have https://github.com/CSUJAY/ApexCognition).

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub.

3. **Import project**
   - Click **Add New…** → **Project**
   - Select the **ApexCognition** repository (or **CSUJAY/ApexCognition**)
   - Click **Import**

4. **Configure (optional)**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** leave as `.`
   - **Build Command:** `npm run build` (default)
   - **Environment Variables:** add `GMAIL_APP_PASSWORD` if you want the contact form to send email (use the same value as in your `.env.local`)

5. **Deploy**  
   Click **Deploy**. Vercel will build and give you a live URL (e.g. `apexcognition.vercel.app`).

6. **Later**  
   Every push to the `main` branch will trigger a new deployment automatically.

---

## Option B: Deploy with Vercel CLI

```bash
# Install Vercel CLI (once)
npm i -g vercel

# From your project folder
cd "c:\Users\DELL\OneDrive\Desktop\Company Website"
vercel
```

Follow the prompts (log in if needed, link to a project or create new one).  
To add the Gmail env var via CLI:

```bash
vercel env add GMAIL_APP_PASSWORD
# Paste your app password when prompted, then redeploy
```

---

## Contact form on production

For the contact form to send email in production, set **Environment Variables** in the Vercel project:

- **Name:** `GMAIL_APP_PASSWORD`  
- **Value:** your Gmail app password (same as in `.env.local`)  
- **Environment:** Production (and Preview if you want)

Then redeploy (or let the next push trigger a new deploy).
