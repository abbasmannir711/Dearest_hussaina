/* ==========================================
   HUSSAINA ROMANTIC WEBSITE
   JavaScript by JR_DEV_001 ❤️
========================================== */


/* ==========================================
   1. SELECT HTML ELEMENTS
========================================== */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const toggleIcon = document.getElementById("toggleIcon");

const toggleLabel = document.getElementById("toggleLabel");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const ambient = document.getElementById("ambient");

const year = document.getElementById("year");

const openLetter = document.getElementById("openLetter");

const noteModal = document.getElementById("noteModal");

const nextReason = document.getElementById("nextReason");

const reasonText = document.getElementById("reasonText");

const reasonCount = document.getElementById("reasonCount");

const finishButton = document.getElementById("finishButton");

const toast = document.getElementById("toast");


/* ==========================================
   2. THEME TOGGLE
========================================== */

// Restore saved theme.

const savedTheme = localStorage.getItem("hussaina-theme");

if (savedTheme === "midnight") {

    body.classList.add("midnight");

}


// Update theme button.

function updateThemeButton() {

    const isMidnight = body.classList.contains("midnight");

    toggleIcon.textContent = isMidnight ? "☀" : "☾";

    toggleLabel.textContent = isMidnight ? "Pink" : "Midnight";

    themeToggle.setAttribute("aria-pressed", isMidnight);

}


// Run once when page loads.

updateThemeButton();


// Change theme when clicked.

themeToggle.addEventListener("click", () => {

    body.classList.toggle("midnight");

    const isMidnight = body.classList.contains("midnight");

    localStorage.setItem(
        "hussaina-theme",
        isMidnight ? "midnight" : "pink"
    );

    updateThemeButton();

});


/* ==========================================
   3. MOBILE NAVIGATION
========================================== */

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a link.

navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* ==========================================
   4. FLOATING HEARTS ANIMATION
========================================== */

function createFloatingHeart() {

    const heart = document.createElement("span");

    const hearts = ["♥", "♡", "❤", "✦", "✿"];

    heart.classList.add("ambient-item");

    heart.textContent = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    // Random horizontal position.

    heart.style.left = Math.random() * 100 + "%";

    // Random animation duration.

    const duration = Math.random() * 6 + 7;

    heart.style.animationDuration = duration + "s";

    // Random size.

    heart.style.fontSize =
        Math.random() * 18 + 12 + "px";

    ambient.appendChild(heart);

    // Remove heart after animation.

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


// Create hearts periodically.

setInterval(createFloatingHeart, 850);


/* ==========================================
   5. SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Observe all reveal elements.

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==========================================
   6. LOVE LETTER MODAL
========================================== */

function showModal() {

    noteModal.classList.add("open");

    noteModal.setAttribute("aria-hidden", "false");

    body.style.overflow = "hidden";

}


function closeModal() {

    noteModal.classList.remove("open");

    noteModal.setAttribute("aria-hidden", "true");

    body.style.overflow = "";

}


// Open modal.

openLetter.addEventListener("click", showModal);


// Close modal using close buttons.

document.querySelectorAll("[data-close-modal]").forEach((button) => {

    button.addEventListener("click", closeModal);

});


// Close modal with Escape key.

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* ==========================================
   7. 100 REASONS WHY HUSSAINA IS SPECIAL
========================================== */

const reasons = [

    "Your smile can make an ordinary day feel brighter.",

    "You have your own unique personality.",

    "Your happiness matters to me.",

    "You deserve genuine love and respect.",

    "You make ordinary conversations memorable.",

    "Your presence can make moments special.",

    "You are someone worth appreciating.",

    "You deserve beautiful things in life.",

    "Your laughter is something worth remembering.",

    "You are uniquely yourself.",

    "You deserve patience and understanding.",

    "You have qualities that make you special.",

    "You deserve to be treated with kindness.",

    "Your dreams deserve encouragement.",

    "You bring your own beauty into the world.",

    "You deserve someone who listens to you.",

    "You are more than just your appearance.",

    "Your little achievements deserve celebration.",

    "You deserve peaceful and happy days.",

    "You are worth knowing beyond first impressions.",

    "Your thoughts and opinions matter.",

    "You deserve genuine communication.",

    "You have a story worth telling.",

    "You deserve to feel appreciated.",

    "Your kindness can make a difference.",

    "You deserve to grow into your best self.",

    "Your existence is worth celebrating.",

    "You deserve honesty.",

    "You deserve loyalty and consistency.",

    "Your happiness is worth celebrating.",

    "You have a beauty that is uniquely yours.",

    "You deserve someone who respects your boundaries.",

    "You deserve to be understood.",

    "You deserve encouragement on difficult days.",

    "Your dreams are important.",

    "You deserve thoughtful gestures.",

    "You deserve meaningful conversations.",

    "You have reasons to be proud of yourself.",

    "Your confidence is beautiful.",

    "You deserve to be celebrated.",

    "Your individuality makes you special.",

    "You deserve a peaceful heart.",

    "You deserve sincere compliments.",

    "Your efforts should never go unnoticed.",

    "You deserve someone who values your time.",

    "Your smile deserves countless reasons to appear.",

    "You deserve emotional maturity.",

    "Your feelings deserve consideration.",

    "You deserve respect in every situation.",

    "You deserve a future full of possibilities.",

    "Your little habits can be memorable.",

    "You deserve genuine friendship.",

    "You deserve a person who communicates honestly.",

    "Your ambitions deserve support.",

    "You deserve beautiful memories.",

    "You have the right to become whoever you dream of being.",

    "Your happiness should never feel like a burden.",

    "You deserve to be heard.",

    "You deserve kindness even on difficult days.",

    "Your presence is worth appreciating.",

    "You deserve someone who celebrates your growth.",

    "Your personality is one of a kind.",

    "You deserve thoughtful attention.",

    "You deserve to feel safe and respected.",

    "Your future can be incredibly beautiful.",

    "You deserve genuine affection.",

    "You deserve someone who appreciates the little things.",

    "Your voice deserves to be heard.",

    "You deserve a love that brings peace.",

    "You have so much potential.",

    "You deserve moments that make you genuinely happy.",

    "Your story is still being written.",

    "You deserve encouragement when things get difficult.",

    "You are worthy of appreciation.",

    "You deserve someone who respects your individuality.",

    "You deserve happiness without pretending.",

    "You deserve to be valued for who you are.",

    "Your dreams are worth pursuing.",

    "You deserve good things without having to beg for them.",

    "Your smile is a beautiful thing.",

    "You deserve someone who keeps their promises.",

    "You deserve a relationship built on trust.",

    "Your little victories matter.",

    "You deserve to be loved without losing yourself.",

    "You deserve respect in your absence too.",

    "Your happiness matters beyond special occasions.",

    "You deserve someone who supports your goals.",

    "You deserve understanding instead of unnecessary judgment.",

    "You have a beautiful journey ahead.",

    "You deserve to feel important.",

    "You deserve sincere efforts.",

    "You deserve someone who appreciates your uniqueness.",

    "You deserve a heart full of peace.",

    "You deserve to laugh freely.",

    "You deserve beautiful surprises.",

    "You deserve to be proud of your progress.",

    "You deserve a future filled with hope.",

    "You deserve genuine care.",

    "You are Hussaina, and that alone makes this little page special.",

    "Because you deserve to be reminded that you matter."

];


// Keep track of current reason.

let currentReason = 0;


// Display the first reason.

function displayReason() {

    reasonText.textContent = reasons[currentReason];

    reasonCount.textContent =

        `REASON ${String(currentReason + 1).padStart(2, "0")} / 100`;

}


// Show next reason.

nextReason.addEventListener("click", () => {

    currentReason++;

    if (currentReason >= reasons.length) {

        currentReason = 0;

    }

    displayReason();

});


// Initialize first reason.

displayReason();


/* ==========================================
   8. TOAST NOTIFICATION
========================================== */

let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* ==========================================
   9. FINAL SURPRISE
========================================== */

finishButton.addEventListener("click", () => {

    showToast("Thank you for being you, Hussaina! ❤️");

    // Create extra hearts.

    for (let i = 0; i < 25; i++) {

        setTimeout(createFloatingHeart, i * 100);

    }

});


/* ==========================================
   10. AUTOMATIC CURRENT YEAR
========================================== */

year.textContent = new Date().getFullYear();


/* ==========================================
   11. WELCOME MESSAGE
========================================== */

console.log(
    "%c❤️ Welcome to Hussaina's Romantic Website ❤️",
    "color: #ed4d9b; font-size: 18px; font-weight: bold;"
);

console.log(
    "%cBuilt with love and code by JR_DEV_001",
    "color: #a855f7; font-size: 13px;"
);
