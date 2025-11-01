// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAwfTD9EP59tTAv2UyERzfP6Ng6DOM4ouM",
    authDomain: "taxivaxi-arp.firebaseapp.com",
    databaseURL: "https://taxivaxi-arp-default-rtdb.firebaseio.com",
    projectId: "taxivaxi-arp",
    storageBucket: "taxivaxi-arp.firebasestorage.app",
    messagingSenderId: "163103556321",
    appId: "1:163103556321:web:70802bf4ab2e8de0d2ada0",
    measurementId: "G-S97CVTMELC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const bookingRef = ref(database, 'taxivaxi/booking');

// UI Elements
const statusText = document.getElementById('statusText');
const bookingButton = document.getElementById('bookingButton');

// Update UI based on booking status
function updateUI(isBooked) {
    if (isBooked) {
        statusText.textContent = 'Booked';
        statusText.classList.remove('available');
        statusText.classList.add('booked');
        
        bookingButton.textContent = 'Release';
        bookingButton.classList.remove('available');
        bookingButton.classList.add('booked');
    } else {
        statusText.textContent = 'Available';
        statusText.classList.remove('booked');
        statusText.classList.add('available');
        
        bookingButton.textContent = 'Book Now';
        bookingButton.classList.remove('booked');
        bookingButton.classList.add('available');
    }
}

// Listen for real-time updates from Firebase
onValue(bookingRef, (snapshot) => {
    const data = snapshot.val();
    const isBooked = data ? data.isBooked : false;
    updateUI(isBooked);
});

// Toggle booking status
function toggleBooking() {
    // Get current status first
    onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();
        const currentStatus = data ? data.isBooked : false;
        
        // Toggle the status
        const newStatus = !currentStatus;
        const timestamp = Date.now();
        
        // Update Firebase (this will sync to all users)
        set(bookingRef, {
            isBooked: newStatus,
            timestamp: timestamp,
            expiresAt: timestamp + (24 * 60 * 60 * 1000) // 24 hours from now
        });
    }, { onlyOnce: true });
}

// Add event listener to booking button
bookingButton.addEventListener('click', toggleBooking);

// Auto-release after 24 hours
function checkExpiration() {
    onValue(bookingRef, (snapshot) => {
        const data = snapshot.val();
        if (data && data.isBooked && data.expiresAt) {
            const now = Date.now();
            if (now > data.expiresAt) {
                // Auto-release if expired
                set(bookingRef, {
                    isBooked: false,
                    timestamp: now,
                    expiresAt: null
                });
            }
        }
    }, { onlyOnce: true });
}

// Check expiration every minute
setInterval(checkExpiration, 60000);
checkExpiration(); // Check immediately on load
