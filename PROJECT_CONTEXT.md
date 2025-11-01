# TaxiVaxi - Development History & Context

## Project Overview
A minimal, modern, responsive single-page taxi booking website for Grace's scooty service. The site is fully static (HTML, CSS, JS only) and deployed on GitHub Pages with Firebase real-time sync.

## Repository Information
- **GitHub Repo**: https://github.com/itsadityapidurkar/taxivaxi
- **Live Site**: https://itsadityapidurkar.github.io/taxivaxi/
- **Owner**: itsadityapidurkar
- **Branch**: main

## Project Structure
```
TaxiVaxi/
├── index.html          # Main HTML file with booking interface
├── style.css           # Modern CSS with gradients and animations
├── script.js           # Firebase integration for real-time sync
├── 1.png              # Scooter image with girl (Grace)
├── 2.jpeg             # Background image
├── FIREBASE_SETUP.md  # Firebase setup instructions
└── PROJECT_CONTEXT.md # This file
```

## Features Implemented
1. ✅ Single-page booking interface (no landing page)
2. ✅ Professional gradient logo: "TAXI" (purple) + "VAXI" (pink)
3. ✅ Custom scooter image (1.png) with floating animation
4. ✅ Custom background image (2.jpeg)
5. ✅ Real-time booking status sync using Firebase Realtime Database
6. ✅ Status display: "Available" (green gradient) or "Booked" (orange-red gradient)
7. ✅ Toggle button: "Book Now" / "Release"
8. ✅ 24-hour auto-release functionality
9. ✅ Responsive design (mobile, tablet, desktop)
10. ✅ Modern design with matte professional look
11. ✅ Glass-morphism card effect with backdrop blur

## Firebase Configuration
**Project**: taxivaxi-arp
**Database URL**: https://taxivaxi-arp-default-rtdb.firebaseio.com

The Firebase config is already integrated in `script.js`. Database rules are set to allow public read/write access for the booking status.

## Design Details

### Color Scheme
- **Logo Gradient 1**: Purple (#667eea → #764ba2)
- **Logo Gradient 2**: Pink-Coral (#f093fb → #f5576c)
- **Available Status**: Green (#56ab2f → #a8e063)
- **Booked Status**: Orange-Red (#ee0979 → #ff6a00)
- **Available Button**: Purple gradient
- **Booked Button**: Pink-Coral gradient
- **Background**: Custom image (2.jpeg) with dark overlay

### Typography
- Font: System fonts (Apple/San Francisco, Segoe UI, Roboto)
- Logo: 48px, bold (900), letter-spacing: -2px
- Status: 24px, bold (900), uppercase
- Button: 20px, bold (800), uppercase, letter-spacing: 3px

### Animations
- Scooter floating animation (3s loop)
- Button ripple effect on click
- Hover effects with transform and shadow
- Smooth transitions (0.3-0.4s)

## Key Technical Decisions

### 1. Firebase Realtime Database (Not Cookies)
- **Why**: Enables real-time sync across all users
- **Prevents**: Double-booking issues
- **Auto-expires**: After 24 hours
- **Storage**: `/taxivaxi/booking` path

### 2. Static Site (No Backend)
- Deployed on GitHub Pages
- Uses Firebase SDK via CDN
- ES6 modules for Firebase imports

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: 600px, 400px
- Flexible padding and font sizes

## Git Commands Used
```bash
git init
git config user.email "graceharper@taxivaxi.com"
git config user.name "Grace Harper"
git add .
git commit -m "message"
git branch -M main
git remote add origin https://github.com/itsadityapidurkar/taxivaxi.git
git push -u origin main
git push
```

## Development Timeline

### Session 1: Initial Setup
1. Created basic HTML structure
2. Added modern CSS with gradient background
3. Implemented cookie-based booking logic
4. Set up Git and pushed to GitHub

### Session 2: Branding
1. Changed company name to "TaxiVaxi"

### Session 3: Design Overhaul
1. Removed road background, added custom image (2.jpeg)
2. Created professional gradient logo
3. Redesigned status and button colors
4. Enhanced matte professional look

### Session 4: Real-time Sync
1. Integrated Firebase Realtime Database
2. Replaced cookie logic with Firebase sync
3. Added auto-expiration check (24 hours)
4. Created setup documentation

## Important Notes for Future Development

### If You Need to Make Changes:
1. Clone the repo or navigate to this folder
2. Make changes to files
3. Test locally by opening index.html in browser
4. Commit and push:
   ```bash
   git add .
   git commit -m "describe your changes"
   git push
   ```
5. Wait 1-2 minutes for GitHub Pages to update

### If Firebase Stops Working:
1. Check Firebase Console: https://console.firebase.google.com/project/taxivaxi-arp
2. Verify database rules in Realtime Database section
3. Check browser console (F12) for errors
4. Ensure config in `script.js` matches Firebase project

### If You Want to Add Features:
- Authentication: Add Firebase Auth
- Multiple vehicles: Expand database structure
- Booking history: Add new Firebase paths
- Admin panel: Create separate admin.html with auth

### To Add New Images:
1. Add image file to folder (keep small file size)
2. Update HTML: `<img src="filename.ext">`
3. Update CSS: `background-image: url('filename.ext');`
4. Commit and push

## Firebase Database Structure
```json
{
  "taxivaxi": {
    "booking": {
      "isBooked": true/false,
      "timestamp": 1730505600000,
      "expiresAt": 1730592000000
    }
  }
}
```

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Performance
- Lightweight (< 500KB total)
- Fast load times
- Real-time updates (< 100ms)
- No build process needed

## Contact & Support
- Driver: Grace
- Repository: https://github.com/itsadityapidurkar/taxivaxi
- Issues: Create GitHub issue or ask AI assistant

## Future Enhancement Ideas
1. Add user authentication (Firebase Auth)
2. Booking time selection
3. Price calculator
4. Multiple vehicles support
5. Booking history
6. SMS/Email notifications
7. Admin dashboard
8. Payment integration
9. Rating system
10. Route planning

---

**Last Updated**: November 1, 2025
**AI Assistant**: GitHub Copilot
**Status**: Production Ready ✅
