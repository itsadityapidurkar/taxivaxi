# Firebase Setup Guide for TaxiVaxi

Follow these steps to enable real-time booking sync across all users:

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Name it: **TaxiVaxi** (or any name you prefer)
4. Click Continue
5. Disable Google Analytics (optional) and click **"Create project"**

## Step 2: Set Up Realtime Database

1. In your Firebase project, click **"Realtime Database"** from the left menu
2. Click **"Create Database"**
3. Choose location closest to you (e.g., `us-central1`)
4. Start in **"Test mode"** for now (we'll secure it later)
5. Click **"Enable"**

## Step 3: Get Your Firebase Config

1. Click the **Settings gear icon** (⚙️) → **"Project settings"**
2. Scroll down to **"Your apps"** section
3. Click the **Web icon** (`</>`)
4. Register app name: **TaxiVaxi Web**
5. Click **"Register app"**
6. Copy the `firebaseConfig` object (it looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAbc123...",
  authDomain: "taxivaxi-xxxxx.firebaseapp.com",
  databaseURL: "https://taxivaxi-xxxxx-default-rtdb.firebaseio.com",
  projectId: "taxivaxi-xxxxx",
  storageBucket: "taxivaxi-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 4: Update Your Code

1. Open `script.js`
2. Find this section at the top:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    // ... rest of the config
};
```

3. **Replace it** with your actual Firebase config from Step 3

## Step 5: Configure Database Rules (Security)

1. Go back to Firebase Console → **Realtime Database** → **Rules** tab
2. Replace the rules with:

```json
{
  "rules": {
    "taxivaxi": {
      "booking": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

3. Click **"Publish"**

> **Note:** These rules allow anyone to read/write. For production, you should add authentication.

## Step 6: Test It

1. Save all changes
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add Firebase real-time sync"
   git push
   ```
3. Wait 1-2 minutes for GitHub Pages to update
4. Open your site on **two different devices** or **two browser windows**
5. Click "Book Now" on one device
6. Watch it automatically update on the other device! ✨

## How It Works

- ✅ When anyone books, Firebase updates the database
- ✅ All users see the change instantly (real-time sync)
- ✅ Only one person can book at a time
- ✅ Auto-releases after 24 hours
- ✅ Works across all devices and browsers

## Troubleshooting

**If it's not working:**

1. Check browser console (F12) for errors
2. Verify your Firebase config is correct
3. Make sure database rules are published
4. Ensure `databaseURL` includes your project ID

**Common errors:**
- `permission-denied`: Check database rules
- `app/invalid-api-key`: Wrong API key
- `CORS error`: Make sure you're using HTTPS (GitHub Pages does this automatically)

## Need Help?

If you run into issues, let me know and I'll help debug!
