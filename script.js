// Global Variables
let currentUser = null;
let isPremiumUser = false;
let currentQuiz = null;
let quizScore = 0;
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
let currentSubject = null;
let currentTopic = null;

// MDCAT Exam Date (set to next year's expected date)
const mdcatExamDate = new Date('2024-11-15T09:00:00');

// Sample MCQ Database
const mcqDatabase = {
    biology: {
        'Cell Biology': [
            {
                question: "Which organelle is responsible for protein synthesis?",
                options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi Apparatus"],
                correct: 1,
                explanation: "Ribosomes are the cellular organelles responsible for protein synthesis by translating mRNA into proteins."
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic Reticulum"],
                correct: 1,
                explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP through cellular respiration."
            },
            {
                question: "Which process occurs in the nucleus?",
                options: ["Photosynthesis", "Protein synthesis", "DNA replication", "Cellular respiration"],
                correct: 2,
                explanation: "DNA replication occurs in the nucleus where the genetic material is stored and duplicated."
            }
        ],
        'Genetics': [
            {
                question: "What is the basic unit of heredity?",
                options: ["Chromosome", "Gene", "DNA", "RNA"],
                correct: 1,
                explanation: "A gene is the basic unit of heredity that contains instructions for specific traits."
            },
            {
                question: "How many chromosomes do humans have?",
                options: ["23", "44", "46", "48"],
                correct: 2,
                explanation: "Humans have 46 chromosomes (23 pairs) in their diploid cells."
            }
        ]
    },
    chemistry: {
        'Organic Chemistry': [
            {
                question: "What is the general formula for alkanes?",
                options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnH2n+1"],
                correct: 1,
                explanation: "Alkanes are saturated hydrocarbons with the general formula CnH2n+2."
            },
            {
                question: "Which functional group is present in alcohols?",
                options: ["-COOH", "-OH", "-CHO", "-CO-"],
                correct: 1,
                explanation: "Alcohols contain the hydroxyl functional group (-OH)."
            }
        ],
        'Inorganic Chemistry': [
            {
                question: "What is the atomic number of Carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1,
                explanation: "Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus."
            }
        ]
    },
    physics: {
        'Mechanics': [
            {
                question: "What is the SI unit of force?",
                options: ["Joule", "Newton", "Pascal", "Watt"],
                correct: 1,
                explanation: "The SI unit of force is Newton (N), named after Isaac Newton."
            },
            {
                question: "What is the acceleration due to gravity on Earth?",
                options: ["9.8 m/s²", "10 m/s²", "9.81 m/s²", "9.7 m/s²"],
                correct: 2,
                explanation: "The standard acceleration due to gravity on Earth is 9.81 m/s²."
            }
        ]
    },
    english: {
        'Grammar': [
            {
                question: "Which of the following is a conjunction?",
                options: ["Beautiful", "And", "Running", "Quickly"],
                correct: 1,
                explanation: "'And' is a coordinating conjunction that connects words, phrases, or clauses."
            }
        ]
    },
    logical: {
        'Pattern Recognition': [
            {
                question: "What comes next in the sequence: 2, 4, 8, 16, ?",
                options: ["20", "24", "32", "30"],
                correct: 2,
                explanation: "Each number is doubled: 2×2=4, 4×2=8, 8×2=16, 16×2=32."
            }
        ]
    }
};

// Premium MCQs (larger database)
const premiumMCQs = {
    biology: {
        'Cell Biology': [
            {
                question: "Which enzyme unwinds DNA during replication?",
                options: ["DNA polymerase", "Helicase", "Ligase", "Primase"],
                correct: 1,
                explanation: "Helicase unwinds and separates the DNA double helix during replication."
            }
        ]
    }
};

// Flashcards Database
const flashcards = {
    biology: [
        {
            front: "Mitochondria",
            back: "Organelle responsible for ATP production through cellular respiration. Known as the powerhouse of the cell.",
            premium: false
        },
        {
            front: "Photosynthesis",
            back: "Process by which plants convert light energy into chemical energy (glucose) using chlorophyll.",
            premium: false
        },
        {
            front: "Krebs Cycle",
            back: "Series of chemical reactions that generate energy through the oxidation of acetyl-CoA derived from carbohydrates, fats, and proteins.",
            premium: true
        }
    ],
    chemistry: [
        {
            front: "Covalent Bond",
            back: "Chemical bond formed by sharing electrons between atoms.",
            premium: false
        },
        {
            front: "Electronegativity",
            back: "Measure of an atom's ability to attract electrons in a chemical bond.",
            premium: true
        }
    ]
};

// Mnemonics Database
const mnemonics = {
    biology: [
        {
            concept: "Mitosis Phases",
            mnemonic: "PMAT - Prophase, Metaphase, Anaphase, Telophase",
            explanation: "Remember the phases of mitosis in order",
            premium: false
        },
        {
            concept: "Taxonomic Classification",
            mnemonic: "King Philip Came Over For Good Soup",
            explanation: "Kingdom, Phylum, Class, Order, Family, Genus, Species",
            premium: false
        },
        {
            concept: "DNA Bases",
            mnemonic: "A-T and G-C pairs - Apple Tree, Green Car",
            explanation: "Adenine pairs with Thymine, Guanine pairs with Cytosine",
            premium: true
        }
    ],
    chemistry: [
        {
            concept: "Electronegativity Order",
            mnemonic: "FONClBrISCH - F > O > N > Cl > Br > I > S > C > H",
            explanation: "Order of electronegativity for common elements",
            premium: true
        },
        {
            concept: "Polyatomic Ions",
            mnemonic: "Nick the Camel ate a Clam for Supper in Phoenix",
            explanation: "Nitrate, Carbonate, Chlorate, Sulfate, Phosphate",
            premium: false
        }
    ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startCountdownTimer();
    loadUserData();
    initializeAdSense();
});

function initializeApp() {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isPremiumUser = currentUser.isPremium || false;
        updateUIForLoggedUser();
    }
    
    // Hide premium content for free users
    if (!isPremiumUser) {
        showAdsForFreeUsers();
    }
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Modal controls
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    
    loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
    signupBtn.addEventListener('click', () => signupModal.style.display = 'block');
    closeLogin.addEventListener('click', () => loginModal.style.display = 'none');
    closeSignup.addEventListener('click', () => signupModal.style.display = 'none');
    
    // Forms
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    
    // Subject cards
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.dataset.subject;
            openSubjectQuiz(subject);
        });
    });
    
    // Premium buttons
    const upgradeBtn = document.getElementById('upgradeBtn');
    const jazzcashBtn = document.getElementById('jazzcashBtn');
    const easypaisaBtn = document.getElementById('easypaisaBtn');
    
    upgradeBtn.addEventListener('click', scrollToPremiumSection);
    jazzcashBtn.addEventListener('click', () => processPayment('jazzcash'));
    easypaisaBtn.addEventListener('click', () => processPayment('easypaisa'));
    
    // Start practice button
    const startPracticeBtn = document.getElementById('startPracticeBtn');
    startPracticeBtn.addEventListener('click', showSubjectSelection);
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === signupModal) signupModal.style.display = 'none';
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function startCountdownTimer() {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = mdcatExamDate.getTime() - now;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdownTimer').innerHTML = '<h3>MDCAT Exam has started!</h3>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Simulate login (in real app, this would be API call)
    if (email && password) {
        currentUser = {
            email: email,
            name: email.split('@')[0],
            isPremium: false,
            loginDate: new Date().toISOString()
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('loginModal').style.display = 'none';
        updateUIForLoggedUser();
        showNotification('Login successful!', 'success');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Simulate signup (in real app, this would be API call)
    if (name && email && password) {
        currentUser = {
            name: name,
            email: email,
            isPremium: false,
            signupDate: new Date().toISOString()
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('signupModal').style.display = 'none';
        updateUIForLoggedUser();
        showNotification('Account created successfully!', 'success');
    }
}

function updateUIForLoggedUser() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    loginBtn.textContent = currentUser.name;
    loginBtn.onclick = showUserProfile;
    signupBtn.style.display = 'none';
    
    if (isPremiumUser) {
        hideAdsForPremiumUsers();
    }
}

function openSubjectQuiz(subject) {
    currentSubject = subject;
    showTopicSelection(subject);
}

function showTopicSelection(subject) {
    const topics = Object.keys(mcqDatabase[subject] || {});
    
    if (topics.length === 0) {
        showNotification('Coming soon! This subject will be available shortly.', 'info');
        return;
    }
    
    const topicHtml = topics.map(topic => `
        <div class="topic-card" onclick="startQuiz('${subject}', '${topic}')">
            <h3>${topic}</h3>
            <p>${mcqDatabase[subject][topic].length} MCQs</p>
        </div>
    `).join('');
    
    showModal('Select Topic', `
        <div class="topics-grid">
            ${topicHtml}
        </div>
        <style>
            .topics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
            .topic-card { background: var(--surface-color); padding: 1rem; border-radius: 8px; cursor: pointer; text-align: center; transition: var(--transition); }
            .topic-card:hover { background: var(--primary-color); color: white; }
        </style>
    `);
}

function startQuiz(subject, topic) {
    currentSubject = subject;
    currentTopic = topic;
    
    let questions = mcqDatabase[subject][topic] || [];
    
    // Add premium questions if user is premium
    if (isPremiumUser && premiumMCQs[subject] && premiumMCQs[subject][topic]) {
        questions = [...questions, ...premiumMCQs[subject][topic]];
    }
    
    if (questions.length === 0) {
        showNotification('No questions available for this topic.', 'error');
        return;
    }
    
    currentQuiz = {
        questions: shuffleArray(questions),
        currentQuestion: 0,
        score: 0,
        userAnswers: []
    };
    
    closeModal();
    showQuizInterface();
}

function showQuizInterface() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    
    const quizHtml = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h2>${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} - ${currentTopic}</h2>
                <div class="quiz-progress">
                    <span>Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(currentQuiz.currentQuestion / currentQuiz.questions.length) * 100}%"></div>
                    </div>
                </div>
            </div>
            
            <div class="question-card">
                <h3>${question.question}</h3>
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" onclick="selectAnswer(${index})">${String.fromCharCode(65 + index)}. ${option}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="quiz-actions">
                <button class="btn btn-outline" onclick="skipQuestion()">Skip</button>
                <button class="btn btn-primary" onclick="submitAnswer()" id="submitBtn" disabled>Submit Answer</button>
            </div>
        </div>
        
        <style>
            .quiz-container { max-width: 800px; margin: 2rem auto; padding: 2rem; }
            .quiz-header { margin-bottom: 2rem; }
            .quiz-progress { margin-top: 1rem; }
            .progress-bar { background: var(--surface-color); height: 8px; border-radius: 4px; overflow: hidden; }
            .progress-fill { background: var(--primary-color); height: 100%; transition: width 0.3s ease; }
            .question-card { background: var(--card-background); padding: 2rem; border-radius: 16px; margin-bottom: 2rem; }
            .options-container { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
            .option-btn { background: var(--surface-color); border: 2px solid var(--border-color); padding: 1rem; border-radius: 8px; text-align: left; cursor: pointer; transition: var(--transition); }
            .option-btn:hover { background: var(--primary-color); color: white; }
            .option-btn.selected { background: var(--primary-color); color: white; border-color: var(--primary-color); }
            .quiz-actions { display: flex; justify-content: space-between; gap: 1rem; }
        </style>
    `;
    
    document.body.innerHTML = quizHtml;
}

let selectedAnswer = null;

function selectAnswer(index) {
    selectedAnswer = index;
    
    // Update button states
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    const isCorrect = selectedAnswer === question.correct;
    
    currentQuiz.userAnswers.push({
        question: question.question,
        userAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: isCorrect
    });
    
    if (isCorrect) {
        currentQuiz.score++;
    }
    
    showAnswerFeedback(isCorrect, question.explanation);
}

function showAnswerFeedback(isCorrect, explanation) {
    const feedbackHtml = `
        <div class="feedback-container">
            <div class="feedback-icon">
                <i class="fas fa-${isCorrect ? 'check-circle' : 'times-circle'}"></i>
            </div>
            <h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>
            <p class="explanation">${explanation}</p>
            <button class="btn btn-primary" onclick="nextQuestion()">
                ${currentQuiz.currentQuestion + 1 < currentQuiz.questions.length ? 'Next Question' : 'Finish Quiz'}
            </button>
        </div>
        
        <style>
            .feedback-container { text-align: center; max-width: 600px; margin: 2rem auto; padding: 2rem; }
            .feedback-icon { font-size: 4rem; margin-bottom: 1rem; color: ${isCorrect ? 'var(--primary-color)' : '#f44336'}; }
            .explanation { background: var(--surface-color); padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        </style>
    `;
    
    document.body.innerHTML = feedbackHtml;
}

function nextQuestion() {
    currentQuiz.currentQuestion++;
    selectedAnswer = null;
    
    if (currentQuiz.currentQuestion < currentQuiz.questions.length) {
        showQuizInterface();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
    
    // Save progress
    if (currentUser) {
        saveQuizProgress(currentSubject, currentTopic, currentQuiz.score, currentQuiz.questions.length);
    }
    
    const resultsHtml = `
        <div class="results-container">
            <div class="results-header">
                <h2>Quiz Complete!</h2>
                <div class="score-circle">
                    <span class="score-percentage">${percentage}%</span>
                    <span class="score-fraction">${currentQuiz.score}/${currentQuiz.questions.length}</span>
                </div>
            </div>
            
            <div class="performance-feedback">
                <h3>${getPerformanceMessage(percentage)}</h3>
                <p>${getPerformanceAdvice(percentage)}</p>
            </div>
            
            <div class="results-actions">
                <button class="btn btn-primary" onclick="retakeQuiz()">Retake Quiz</button>
                <button class="btn btn-outline" onclick="goToHomepage()">Back to Home</button>
                <button class="btn btn-premium" onclick="showPremiumUpgrade()">Get Premium for More</button>
            </div>
        </div>
        
        <style>
            .results-container { max-width: 600px; margin: 2rem auto; padding: 2rem; text-align: center; }
            .score-circle { background: var(--gradient-primary); color: white; width: 150px; height: 150px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 2rem auto; }
            .score-percentage { font-size: 2rem; font-weight: bold; }
            .score-fraction { font-size: 1rem; opacity: 0.8; }
            .performance-feedback { margin: 2rem 0; }
            .results-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        </style>
    `;
    
    document.body.innerHTML = resultsHtml;
}

function getPerformanceMessage(percentage) {
    if (percentage >= 90) return "Excellent! Outstanding performance!";
    if (percentage >= 80) return "Great job! Very good understanding!";
    if (percentage >= 70) return "Good work! You're on the right track!";
    if (percentage >= 60) return "Not bad! Keep practicing!";
    return "Keep studying! You'll improve with practice!";
}

function getPerformanceAdvice(percentage) {
    if (percentage >= 90) return "You have mastered this topic. Try more challenging questions!";
    if (percentage >= 80) return "You have a solid understanding. Review the questions you missed.";
    if (percentage >= 70) return "You're doing well. Focus on the areas where you made mistakes.";
    if (percentage >= 60) return "You need more practice. Review the concepts and try again.";
    return "Consider reviewing the topic thoroughly before attempting the quiz again.";
}

function saveQuizProgress(subject, topic, score, total) {
    if (!userProgress[subject]) {
        userProgress[subject] = {};
    }
    
    if (!userProgress[subject][topic]) {
        userProgress[subject][topic] = [];
    }
    
    userProgress[subject][topic].push({
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toISOString()
    });
    
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
}

function showFlashcards(subject) {
    const cards = flashcards[subject] || [];
    const availableCards = cards.filter(card => isPremiumUser || !card.premium);
    
    if (availableCards.length === 0) {
        showNotification('No flashcards available. Upgrade to premium for more content!', 'info');
        return;
    }
    
    let currentCard = 0;
    let showingFront = true;
    
    function displayCard() {
        const card = availableCards[currentCard];
        const cardHtml = `
            <div class="flashcard-container">
                <div class="flashcard-header">
                    <h2>Flashcards - ${subject.charAt(0).toUpperCase() + subject.slice(1)}</h2>
                    <span class="card-counter">${currentCard + 1} / ${availableCards.length}</span>
                </div>
                
                <div class="flashcard" onclick="flipCard()">
                    <div class="flashcard-content">
                        <div class="flashcard-side ${showingFront ? 'front' : 'back'}">
                            <h3>${showingFront ? card.front : card.back}</h3>
                            <p class="flip-hint">${showingFront ? 'Click to reveal answer' : 'Click to see question'}</p>
                        </div>
                    </div>
                </div>
                
                <div class="flashcard-actions">
                    <button class="btn btn-outline" onclick="previousCard()" ${currentCard === 0 ? 'disabled' : ''}>Previous</button>
                    <button class="btn btn-primary" onclick="nextCard()" ${currentCard === availableCards.length - 1 ? 'disabled' : ''}>Next</button>
                </div>
            </div>
            
            <style>
                .flashcard-container { max-width: 600px; margin: 2rem auto; padding: 2rem; }
                .flashcard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .flashcard { background: var(--card-background); border-radius: 16px; box-shadow: var(--shadow); min-height: 300px; cursor: pointer; transition: var(--transition); }
                .flashcard:hover { box-shadow: var(--shadow-hover); }
                .flashcard-content { padding: 2rem; height: 300px; display: flex; align-items: center; justify-content: center; text-align: center; }
                .flashcard-side { width: 100%; }
                .flashcard-side h3 { font-size: 1.5rem; margin-bottom: 1rem; }
                .flip-hint { color: var(--text-secondary); font-size: 0.9rem; }
                .flashcard-actions { display: flex; justify-content: space-between; margin-top: 2rem; }
            </style>
        `;
        
        document.body.innerHTML = cardHtml;
        
        // Add functions to global scope
        window.flipCard = () => {
            showingFront = !showingFront;
            displayCard();
        };
        
        window.nextCard = () => {
            if (currentCard < availableCards.length - 1) {
                currentCard++;
                showingFront = true;
                displayCard();
            }
        };
        
        window.previousCard = () => {
            if (currentCard > 0) {
                currentCard--;
                showingFront = true;
                displayCard();
            }
        };
    }
    
    displayCard();
}

function showMnemonics(subject) {
    const subjectMnemonics = mnemonics[subject] || [];
    const availableMnemonics = subjectMnemonics.filter(mnemonic => isPremiumUser || !mnemonic.premium);
    
    if (availableMnemonics.length === 0) {
        showNotification('No mnemonics available. Upgrade to premium for more content!', 'info');
        return;
    }
    
    const mnemonicsHtml = availableMnemonics.map(mnemonic => `
        <div class="mnemonic-card">
            <h3>${mnemonic.concept}</h3>
            <div class="mnemonic-text">${mnemonic.mnemonic}</div>
            <p class="mnemonic-explanation">${mnemonic.explanation}</p>
            ${mnemonic.premium ? '<span class="premium-badge">Premium</span>' : ''}
        </div>
    `).join('');
    
    showModal('Memory Mnemonics', `
        <div class="mnemonics-container">
            ${mnemonicsHtml}
        </div>
        <style>
            .mnemonics-container { max-height: 400px; overflow-y: auto; }
            .mnemonic-card { background: var(--surface-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem; position: relative; }
            .mnemonic-text { background: var(--primary-color); color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; font-weight: bold; }
            .mnemonic-explanation { color: var(--text-secondary); }
            .premium-badge { position: absolute; top: 10px; right: 10px; background: var(--premium-color); color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; }
        </style>
    `);
}

function processPayment(method) {
    if (!currentUser) {
        showNotification('Please login first to upgrade to premium.', 'error');
        return;
    }
    
    // Simulate payment process
    showNotification('Redirecting to payment gateway...', 'info');
    
    setTimeout(() => {
        // Simulate successful payment
        currentUser.isPremium = true;
        isPremiumUser = true;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        hideAdsForPremiumUsers();
        showNotification('Payment successful! You are now a premium member!', 'success');
        
        // Redirect to premium features
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }, 2000);
}

function showAdsForFreeUsers() {
    const adBanner = document.getElementById('adBanner');
    if (adBanner) {
        adBanner.style.display = 'block';
    }
}

function hideAdsForPremiumUsers() {
    const adBanner = document.getElementById('adBanner');
    if (adBanner) {
        adBanner.style.display = 'none';
    }
}

function initializeAdSense() {
    if (!isPremiumUser) {
        // Initialize Google AdSense
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--${type === 'success' ? 'primary' : type === 'error' ? 'accent' : 'premium'}-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 3000;
        box-shadow: var(--shadow);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${title}</h2>
            <div class="modal-body">${content}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.closeModal = () => {
        modal.remove();
    };
}

function goToHomepage() {
    window.location.reload();
}

function retakeQuiz() {
    startQuiz(currentSubject, currentTopic);
}

function showPremiumUpgrade() {
    scrollToPremiumSection();
}

function scrollToPremiumSection() {
    document.getElementById('premium').scrollIntoView({ behavior: 'smooth' });
}

function showSubjectSelection() {
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function loadUserData() {
    // Load user progress and preferences
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    }
}

function showUserProfile() {
    if (!currentUser) return;
    
    const profileHtml = `
        <div class="profile-container">
            <h2>User Profile</h2>
            <div class="profile-info">
                <p><strong>Name:</strong> ${currentUser.name}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Status:</strong> ${isPremiumUser ? 'Premium Member' : 'Free User'}</p>
                <p><strong>Member Since:</strong> ${new Date(currentUser.signupDate || currentUser.loginDate).toLocaleDateString()}</p>
            </div>
            
            <div class="profile-stats">
                <h3>Your Progress</h3>
                <div class="stats-grid">
                    ${Object.keys(userProgress).map(subject => `
                        <div class="stat-card">
                            <h4>${subject.charAt(0).toUpperCase() + subject.slice(1)}</h4>
                            <p>${Object.keys(userProgress[subject]).length} topics completed</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="profile-actions">
                <button class="btn btn-outline" onclick="logout()">Logout</button>
                ${!isPremiumUser ? '<button class="btn btn-premium" onclick="showPremiumUpgrade()">Upgrade to Premium</button>' : ''}
            </div>
        </div>
        
        <style>
            .profile-container { max-width: 600px; margin: 2rem auto; padding: 2rem; }
            .profile-info { background: var(--surface-color); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
            .stat-card { background: var(--card-background); padding: 1rem; border-radius: 8px; text-align: center; }
            .profile-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; }
        </style>
    `;
    
    showModal('User Profile', profileHtml);
    
    window.logout = () => {
        currentUser = null;
        isPremiumUser = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userProgress');
        window.location.reload();
    };
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-background);
        padding: 1rem;
        box-shadow: var(--shadow);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);