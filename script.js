// Binary Website JavaScript - Arthur Gervais

// Binary rain effect
function createBinaryRain() {
    const binaryRain = document.getElementById('binaryRain');
    const binaryChars = ['0', '1'];
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = i * 20 + 'px';
        column.style.top = '-100px';
        column.style.color = '#00ff00';
        column.style.fontFamily = 'Courier Prime, monospace';
        column.style.fontSize = '14px';
        column.style.opacity = '0.3';
        column.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let binaryString = '';
        for (let j = 0; j < 20; j++) {
            binaryString += binaryChars[Math.floor(Math.random() * 2)] + '<br>';
        }
        column.innerHTML = binaryString;
        
        binaryRain.appendChild(column);
    }
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% { transform: translateY(-100vh); opacity: 0; }
        10% { opacity: 0.3; }
        90% { opacity: 0.3; }
        100% { transform: translateY(100vh); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize binary rain
createBinaryRain();

// Riddle functionality
const riddles = [
    {
        question: `I speak in zeros and ones, yet I understand human lies.
I learn from patterns hidden, yet I see through disguise.
In networks I wander, seeking threats that hide in plain sight.
What am I?`,
        answers: ['ai', 'artificial intelligence', 'machine learning', 'neural network', 'ai security system'],
        response: '01000011 01101111 01110010 01110010 01100101 01100011 01110100! AI for Information Security - the digital guardian that never sleeps.'
    },
    {
        question: `I am the lock that has no key,
Built from math, strong as can be.
In blocks I store what can't be changed,
By cryptographic art arranged.
What am I?`,
        answers: ['blockchain', 'hash', 'cryptographic hash', 'merkle tree', 'crypto'],
        response: '01000101 01111000 01100011 01100101 01101100 01101100 01100101 01101110 01110100! Blockchain technology - the immutable ledger of trust.'
    },
    {
        question: `I hide in plain sight, disguised as friend,
Until the moment I strike and defend.
Through emails I travel, in files I hide,
What am I that makes systems collide?`,
        answers: ['malware', 'virus', 'trojan', 'cyber attack', 'phishing', 'ransomware'],
        response: '01010111 01100101 01101100 01101100 00100000 01100100 01101111 01101110 01100101! Malware - the digital threat that security researchers like me work to defeat.'
    }
];

let currentRiddleIndex = 0;

function loadRiddle() {
    const riddleText = document.querySelector('.riddle-text p');
    const riddleTitle = document.querySelector('#riddle h3');
    
    riddleTitle.textContent = `01000100 01100001 01101001 01101100 01111001 00100000 01000011 01101000 01100001 01101100 01101100 01100101 01101110 01100111 01100101 - ${currentRiddleIndex + 1}/3`;
    riddleText.textContent = riddles[currentRiddleIndex].question;
    
    document.getElementById('riddleAnswer').value = '';
    document.getElementById('riddleResult').classList.remove('show');
}

function checkRiddle() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase().trim();
    const resultDiv = document.getElementById('riddleResult');
    const currentRiddle = riddles[currentRiddleIndex];
    
    if (currentRiddle.answers.some(validAnswer => answer.includes(validAnswer))) {
        resultDiv.innerHTML = `
            <div style="color: #00ff00; font-weight: bold;">✓ ACCESS GRANTED</div>
            <div style="margin-top: 0.5rem;">${currentRiddle.response}</div>
            <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                Next challenge loading... <button onclick="nextRiddle()" style="background: #00ff00; color: black; border: none; padding: 0.2rem 0.5rem; cursor: pointer; margin-left: 0.5rem;">Continue</button>
            </div>
        `;
        resultDiv.classList.add('show');
    } else {
        resultDiv.innerHTML = `
            <div style="color: #ff0000; font-weight: bold;">✗ ACCESS DENIED</div>
            <div style="margin-top: 0.5rem;">Think like a cybersecurity expert. What digital guardian learns from patterns?</div>
        `;
        resultDiv.classList.add('show');
    }
}

function nextRiddle() {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    loadRiddle();
}

// Load first riddle
document.addEventListener('DOMContentLoaded', loadRiddle);

// Handle Enter key in riddle input
document.getElementById('riddleAnswer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkRiddle();
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality for cycling images
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    
    // Extract image number from src and convert to binary for caption
    const imageNum = imageSrc.match(/(\d+)\.jpg/)[1];
    const binaryNum = parseInt(imageNum).toString(2);
    modalCaption.innerHTML = `Cycling Adventure ${imageNum} - Binary: ${binaryNum}`;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Binary text conversion utility
function textToBinary(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

// Add binary conversion to console for fun
console.log('Welcome to Arthur Gervais\' Binary World!');
console.log('Try these commands:');
console.log('textToBinary("Hello") - Convert text to binary');
console.log('binaryToText("01001000 01100101 01101100 01101100 01101111") - Convert binary to text');

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated
        document.body.style.filter = 'hue-rotate(180deg)';
        alert('01000101 01100001 01110011 01110100 01100101 01110010 00100000 01100101 01100111 01100111 00100000 01100001 01100011 01110100 01101001 01110110 01100001 01110100 01100101 01100100 00100001');
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
        konamiCode = [];
    }
});

// Update binary rain periodically
setInterval(() => {
    const columns = document.querySelectorAll('#binaryRain div');
    columns.forEach(column => {
        if (Math.random() < 0.1) { // 10% chance to update
            let binaryString = '';
            for (let j = 0; j < 20; j++) {
                binaryString += (Math.random() < 0.5 ? '0' : '1') + '<br>';
            }
            column.innerHTML = binaryString;
        }
    });
}, 2000);