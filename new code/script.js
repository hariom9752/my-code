// ⭐ Rating System
const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("selected-rating");
let selectedRating = 4; // Default rating

stars.forEach(star => {
    star.addEventListener("click", function() {
        selectedRating = this.getAttribute("data-value");
        updateStars(selectedRating);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute("data-value") <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
    ratingText.innerHTML = `Your rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
}

function submitRating() {
    alert(`Thank you for rating us ${selectedRating} stars!`);
}

// ⭐ Table Booking System
function bookTable(event) {
    event.preventDefault();
    alert("Your table has been booked successfully!");
}

// 🍽️ Food Customization
function submitCustomization() {
    alert("Your customization has been saved!");
}

// 🚚 Order Tracking System
let orderStatus = ["Being Prepared", "Out for Delivery", "Delivered"];
let currentIndex = 0;

function updateOrderStatus() {
    if (currentIndex < orderStatus.length - 1) {
        currentIndex++;
        document.getElementById("order-status").innerText = `Your order is: ${orderStatus[currentIndex]}`;
    } else {
        alert("Your order has been delivered!");
    }
}

// 🎙️ Voice Ordering System
let recognition;
let isListening = false;

function toggleVoiceOrder() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("Voice recognition not supported in this browser. Try Chrome!");
        return;
    }

    if (!recognition) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";

        recognition.onresult = function(event) {
            let order = event.results[0][0].transcript;
            document.getElementById("order-result").innerText = "You ordered: " + order;
        };
    }

    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
    }
}


