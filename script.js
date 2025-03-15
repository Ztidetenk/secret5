let isEnvelopeOpened = false; // Flag to track if the envelope is opened

// Open Envelope
function openEnvelope() {
    if (isEnvelopeOpened) return; // Exit if already opened

    const envelope = document.querySelector('.envelope');
    const bluebells = document.querySelectorAll('.bluebell');
    const hearts = document.querySelectorAll('.heart');

    // Open envelope
    envelope.classList.add('open');

    // Bloom bluebells
    bluebells.forEach((bluebell, index) => {
        setTimeout(() => {
            bluebell.style.opacity = 1;
        }, index * 300);
    });

    // Show hearts
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.opacity = 1;
        }, index * 500);
    });

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Type letter text
    typeText(
        document.getElementById('typed-text'),
        "My love, you're the missing piece I never knew existed. Your presence fills my world with warmth and joy. You inspire me to be my best self. Your kindness and strength amaze me daily. I adore your smile, your laugh, and the way you make me feel. You are my everything, now and always."
    );

    isEnvelopeOpened = true; // Mark envelope as opened
}

// Typing Effect
function typeText(element, text, speed = 50) {
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Date Counter
const startDate = new Date('2025-03-01'); // Replace with your start date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('days').textContent = diffDays;

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('themeToggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
}