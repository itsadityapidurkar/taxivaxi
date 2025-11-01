// Cookie utility functions
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Booking state management
let isBooked = false;

const statusText = document.getElementById('statusText');
const bookingButton = document.getElementById('bookingButton');

function updateUI() {
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

function loadBookingState() {
    const savedState = getCookie('scootyBooked');
    if (savedState === 'true') {
        isBooked = true;
    } else {
        isBooked = false;
    }
    updateUI();
}

function toggleBooking() {
    isBooked = !isBooked;
    
    if (isBooked) {
        // Set cookie to expire in 24 hours
        setCookie('scootyBooked', 'true', 24);
    } else {
        // Delete cookie when released
        deleteCookie('scootyBooked');
    }
    
    updateUI();
}

// Initialize on page load
loadBookingState();

// Add event listener to booking button
bookingButton.addEventListener('click', toggleBooking);
