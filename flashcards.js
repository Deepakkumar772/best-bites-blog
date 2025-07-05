// Flashcards JavaScript
let currentFlashcardSet = [];
let currentCardIndex = 0;
let isFlipped = false;
let autoPlayInterval = null;
let isAutoPlaying = false;
let cardStats = {
    known: 0,
    unknown: 0,
    remaining: 0
};

// Extended flashcard database
const flashcardDatabase = {
    biology: [
        {
            front: "Mitochondria",
            back: "Organelle responsible for ATP production through cellular respiration. Known as the powerhouse of the cell. Contains its own DNA and ribosomes.",
            premium: false
        },
        {
            front: "Photosynthesis",
            back: "Process by which plants convert light energy into chemical energy (glucose) using chlorophyll. Occurs in chloroplasts. 6CO2 + 6H2O + light → C6H12O6 + 6O2",
            premium: false
        },
        {
            front: "DNA Structure",
            back: "Double helix structure composed of nucleotides. Each nucleotide contains a sugar (deoxyribose), phosphate group, and nitrogenous base (A, T, G, C).",
            premium: false
        },
        {
            front: "Cell Membrane",
            back: "Phospholipid bilayer that controls what enters and exits the cell. Contains proteins for transport, enzymes, and receptors. Selectively permeable.",
            premium: false
        },
        {
            front: "Ribosomes",
            back: "Small organelles responsible for protein synthesis. Can be free-floating or attached to ER. Composed of rRNA and proteins.",
            premium: false
        },
        {
            front: "Meiosis",
            back: "Type of cell division that produces gametes (sex cells). Reduces chromosome number by half. Involves crossing over for genetic variation.",
            premium: false
        },
        {
            front: "Enzyme Function",
            back: "Biological catalysts that speed up chemical reactions by lowering activation energy. Specific to substrates due to lock-and-key mechanism.",
            premium: false
        },
        {
            front: "Homeostasis",
            back: "Process by which organisms maintain stable internal conditions despite external changes. Involves feedback mechanisms.",
            premium: false
        },
        {
            front: "Krebs Cycle",
            back: "Series of chemical reactions that generate energy through oxidation of acetyl-CoA. Produces ATP, NADH, and FADH2. Occurs in mitochondria.",
            premium: true
        },
        {
            front: "Transcription",
            back: "Process where DNA is used as template to create mRNA. Occurs in nucleus. RNA polymerase reads DNA template strand 3' to 5'.",
            premium: true
        },
        {
            front: "Translation",
            back: "Process where mRNA is used to create proteins. Occurs at ribosomes. tRNA brings amino acids based on codon sequence.",
            premium: true
        },
        {
            front: "Osmosis",
            back: "Passive transport of water across semi-permeable membrane from high to low water concentration. Important for cell volume regulation.",
            premium: false
        },
        {
            front: "Glycolysis",
            back: "First stage of cellular respiration. Breaks down glucose into pyruvate. Produces 2 ATP and 2 NADH. Occurs in cytoplasm.",
            premium: true
        },
        {
            front: "Alleles",
            back: "Different versions of the same gene. Can be dominant or recessive. Determine traits through gene expression.",
            premium: false
        },
        {
            front: "Phenotype vs Genotype",
            back: "Phenotype is observable characteristics. Genotype is genetic makeup. Environment can influence phenotype expression.",
            premium: false
        }
    ],
    chemistry: [
        {
            front: "Covalent Bond",
            back: "Chemical bond formed by sharing electrons between atoms. Stronger than ionic bonds. Can be single, double, or triple bonds.",
            premium: false
        },
        {
            front: "Ionic Bond",
            back: "Chemical bond formed by transfer of electrons from metal to non-metal. Results in electrostatic attraction between ions.",
            premium: false
        },
        {
            front: "Atomic Structure",
            back: "Nucleus contains protons and neutrons. Electrons orbit in shells. Atomic number = number of protons. Mass number = protons + neutrons.",
            premium: false
        },
        {
            front: "Periodic Table Trends",
            back: "Atomic radius decreases left to right, increases top to bottom. Ionization energy increases left to right. Electronegativity increases left to right.",
            premium: false
        },
        {
            front: "Acids and Bases",
            back: "Acids donate H+ ions (protons). Bases accept H+ ions. pH scale measures acidity. pH 7 is neutral, <7 acidic, >7 basic.",
            premium: false
        },
        {
            front: "Oxidation-Reduction",
            back: "Oxidation is loss of electrons. Reduction is gain of electrons. OIL RIG: Oxidation Is Loss, Reduction Is Gain. LEO GER: Lose Electrons Oxidation, Gain Electrons Reduction.",
            premium: false
        },
        {
            front: "Molecular Geometry",
            back: "3D arrangement of atoms in molecules. Determined by VSEPR theory. Common shapes: linear, trigonal planar, tetrahedral, trigonal bipyramidal, octahedral.",
            premium: true
        },
        {
            front: "Electronegativity",
            back: "Measure of atom's ability to attract electrons in chemical bond. Fluorine is most electronegative. Determines bond polarity.",
            premium: true
        },
        {
            front: "Hybridization",
            back: "Mixing of atomic orbitals to form new hybrid orbitals. sp3 (tetrahedral), sp2 (trigonal planar), sp (linear).",
            premium: true
        },
        {
            front: "Thermodynamics",
            back: "Study of energy changes in chemical reactions. Enthalpy (ΔH) measures heat change. Entropy (ΔS) measures disorder. Gibbs free energy (ΔG) predicts spontaneity.",
            premium: true
        },
        {
            front: "Reaction Rates",
            back: "Speed at which chemical reactions occur. Affected by temperature, concentration, surface area, and catalysts.",
            premium: false
        },
        {
            front: "Equilibrium",
            back: "State where forward and reverse reaction rates are equal. Le Chatelier's principle predicts shifts in equilibrium.",
            premium: true
        }
    ],
    physics: [
        {
            front: "Newton's First Law",
            back: "An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force. Also called law of inertia.",
            premium: false
        },
        {
            front: "Newton's Second Law",
            back: "Force equals mass times acceleration (F = ma). The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.",
            premium: false
        },
        {
            front: "Newton's Third Law",
            back: "For every action, there is an equal and opposite reaction. Forces always occur in pairs.",
            premium: false
        },
        {
            front: "Kinetic Energy",
            back: "Energy of motion. KE = ½mv². Depends on mass and velocity. Increases with square of velocity.",
            premium: false
        },
        {
            front: "Potential Energy",
            back: "Stored energy due to position or configuration. Gravitational PE = mgh. Elastic PE = ½kx².",
            premium: false
        },
        {
            front: "Wave Properties",
            back: "Waves transfer energy without transferring matter. Characteristics: amplitude, frequency, wavelength, speed. v = fλ",
            premium: false
        },
        {
            front: "Electric Field",
            back: "Region around charged object where electric force is exerted. E = F/q. Field lines point from positive to negative charges.",
            premium: true
        },
        {
            front: "Magnetic Field",
            back: "Region around magnet where magnetic force is exerted. Created by moving charges. Field lines form closed loops.",
            premium: true
        },
        {
            front: "Ohm's Law",
            back: "Voltage equals current times resistance (V = IR). Describes relationship between voltage, current, and resistance in electrical circuits.",
            premium: false
        },
        {
            front: "Momentum",
            back: "Product of mass and velocity (p = mv). Conserved in collisions. Impulse equals change in momentum.",
            premium: false
        }
    ]
};

// Initialize flashcards page
document.addEventListener('DOMContentLoaded', function() {
    setupFlashcardEventListeners();
    loadUserPreferences();
});

function setupFlashcardEventListeners() {
    // Setup theme toggle and login functionality from main script
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Load saved theme
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
}

function loadFlashcards(subject) {
    const cards = flashcardDatabase[subject] || [];
    const availableCards = cards.filter(card => isPremiumUser || !card.premium);
    
    if (availableCards.length === 0) {
        showNotification('No flashcards available for this subject. Sign up to access more content!', 'info');
        return;
    }
    
    currentFlashcardSet = availableCards;
    currentCardIndex = 0;
    isFlipped = false;
    
    // Reset stats
    cardStats = {
        known: 0,
        unknown: 0,
        remaining: currentFlashcardSet.length
    };
    
    // Show flashcard display
    document.getElementById('flashcardDisplay').style.display = 'block';
    document.getElementById('flashcardSubject').textContent = `${subject.charAt(0).toUpperCase() + subject.slice(1)} Flashcards`;
    
    // Scroll to flashcard display
    document.getElementById('flashcardDisplay').scrollIntoView({ behavior: 'smooth' });
    
    displayCurrentCard();
    updateProgressStats();
}

function displayCurrentCard() {
    if (currentFlashcardSet.length === 0) return;
    
    const card = currentFlashcardSet[currentCardIndex];
    
    // Update card content
    document.getElementById('flashcardFront').textContent = card.front;
    document.getElementById('flashcardBack').textContent = card.back;
    
    // Update counter
    document.getElementById('flashcardCounter').textContent = `${currentCardIndex + 1} / ${currentFlashcardSet.length}`;
    
    // Reset flip state
    isFlipped = false;
    const flashcardMain = document.getElementById('flashcardMain');
    flashcardMain.classList.remove('flipped');
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentCardIndex === 0;
    document.getElementById('nextBtn').disabled = currentCardIndex === currentFlashcardSet.length - 1;
    
    // Update progress bar
    const progress = ((currentCardIndex + 1) / currentFlashcardSet.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function flipCard() {
    const flashcardMain = document.getElementById('flashcardMain');
    isFlipped = !isFlipped;
    
    if (isFlipped) {
        flashcardMain.classList.add('flipped');
    } else {
        flashcardMain.classList.remove('flipped');
    }
}

function nextCard() {
    if (currentCardIndex < currentFlashcardSet.length - 1) {
        currentCardIndex++;
        displayCurrentCard();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCurrentCard();
    }
}

function markKnown() {
    cardStats.known++;
    cardStats.remaining--;
    
    // Remove current card from set
    currentFlashcardSet.splice(currentCardIndex, 1);
    
    // Adjust index if needed
    if (currentCardIndex >= currentFlashcardSet.length && currentFlashcardSet.length > 0) {
        currentCardIndex = currentFlashcardSet.length - 1;
    }
    
    updateProgressStats();
    
    if (currentFlashcardSet.length === 0) {
        showCompletionMessage();
    } else {
        displayCurrentCard();
    }
    
    showNotification('Card marked as known!', 'success');
}

function markUnknown() {
    cardStats.unknown++;
    cardStats.remaining--;
    
    // Move current card to end of set for review
    const card = currentFlashcardSet.splice(currentCardIndex, 1)[0];
    currentFlashcardSet.push(card);
    
    // Adjust index if needed
    if (currentCardIndex >= currentFlashcardSet.length && currentFlashcardSet.length > 0) {
        currentCardIndex = 0;
    }
    
    updateProgressStats();
    displayCurrentCard();
    showNotification('Card marked for review!', 'info');
}

function updateProgressStats() {
    document.getElementById('knownCount').textContent = cardStats.known;
    document.getElementById('unknownCount').textContent = cardStats.unknown;
    document.getElementById('remainingCount').textContent = cardStats.remaining;
}

function shuffleCards() {
    if (currentFlashcardSet.length === 0) return;
    
    // Fisher-Yates shuffle
    for (let i = currentFlashcardSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentFlashcardSet[i], currentFlashcardSet[j]] = [currentFlashcardSet[j], currentFlashcardSet[i]];
    }
    
    currentCardIndex = 0;
    displayCurrentCard();
    showNotification('Cards shuffled!', 'success');
}

function resetCards() {
    if (currentFlashcardSet.length === 0) return;
    
    // Reset to original state
    const subject = document.getElementById('flashcardSubject').textContent.split(' ')[0].toLowerCase();
    loadFlashcards(subject);
    showNotification('Cards reset!', 'info');
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        clearInterval(autoPlayInterval);
        isAutoPlaying = false;
        document.getElementById('autoPlayIcon').className = 'fas fa-play';
        showNotification('Auto-play stopped', 'info');
    } else {
        autoPlayInterval = setInterval(() => {
            if (!isFlipped) {
                flipCard();
            } else {
                if (currentCardIndex < currentFlashcardSet.length - 1) {
                    nextCard();
                } else {
                    toggleAutoPlay(); // Stop at end
                }
            }
        }, 3000);
        isAutoPlaying = true;
        document.getElementById('autoPlayIcon').className = 'fas fa-pause';
        showNotification('Auto-play started', 'success');
    }
}

function showCompletionMessage() {
    const completionHtml = `
        <div class="completion-message">
            <div class="completion-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <h2>Congratulations!</h2>
            <p>You've completed all flashcards in this set!</p>
            <div class="completion-stats">
                <div class="stat-item">
                    <span class="stat-number">${cardStats.known}</span>
                    <span class="stat-label">Cards Mastered</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${cardStats.unknown}</span>
                    <span class="stat-label">Need Review</span>
                </div>
            </div>
            <div class="completion-actions">
                <button class="btn btn-primary" onclick="location.reload()">Study Another Set</button>
                <button class="btn btn-outline" onclick="showReviewCards()">Review Missed Cards</button>
            </div>
        </div>
    `;
    
    document.getElementById('flashcardDisplay').innerHTML = completionHtml;
}

function showReviewCards() {
    // This would show only the cards marked as unknown
    showNotification('Review feature coming soon!', 'info');
}

function showPremiumRequired() {
    if (isPremiumUser) {
        showNotification('Premium flashcards unlocked!', 'success');
        return;
    }
    
    const premiumHtml = `
        <div class="premium-modal">
            <div class="premium-content">
                <h2>Premium Flashcards</h2>
                <p>Unlock access to advanced flashcards with detailed explanations and additional content.</p>
                <ul>
                    <li>50+ Premium flashcards</li>
                    <li>Detailed explanations</li>
                    <li>Advanced topics</li>
                    <li>Progress tracking</li>
                    <li>Offline access</li>
                </ul>
                <div class="premium-actions">
                    <button class="btn btn-premium" onclick="upgradeToPreimu()">Upgrade for PKR 200/month</button>
                    <button class="btn btn-outline" onclick="closeModal()">Maybe Later</button>
                </div>
            </div>
        </div>
    `;
    
    showModal('Premium Required', premiumHtml);
}

function loadUserPreferences() {
    // Load any saved flashcard preferences
    const savedPrefs = localStorage.getItem('flashcardPreferences');
    if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        // Apply preferences
    }
}

// Add additional CSS for flashcard-specific styling
const flashcardStyle = document.createElement('style');
flashcardStyle.textContent = `
    .hero-small {
        background: var(--gradient-primary);
        color: white;
        padding: 120px 0 60px;
        text-align: center;
        margin-top: 80px;
    }
    
    .hero-small h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    
    .hero-small p {
        font-size: 1.1rem;
        opacity: 0.9;
    }
    
    .flashcards-section {
        padding: 80px 0;
    }
    
    .flashcard-subjects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .flashcard-subject-card {
        background: var(--card-background);
        padding: 2rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
        transition: var(--transition);
        cursor: pointer;
        text-align: center;
        position: relative;
    }
    
    .flashcard-subject-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-hover);
    }
    
    .flashcard-subject-card.premium-card {
        border: 2px solid var(--premium-color);
    }
    
    .flashcard-count {
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        margin-top: 1rem;
        display: inline-block;
    }
    
    .premium-badge {
        position: absolute;
        top: -10px;
        right: -10px;
        background: var(--premium-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
    }
    
    .flashcard-display {
        background: var(--surface-color);
        padding: 2rem;
        border-radius: 16px;
        margin-top: 2rem;
    }
    
    .flashcard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .flashcard-controls {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .flashcard-controls .btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
    
    .flashcard-container {
        max-width: 600px;
        margin: 0 auto;
    }
    
    .flashcard-counter {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }
    
    .flashcard-main {
        perspective: 1000px;
        margin-bottom: 2rem;
    }
    
    .flashcard-inner {
        position: relative;
        width: 100%;
        height: 300px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        cursor: pointer;
    }
    
    .flashcard-main.flipped .flashcard-inner {
        transform: rotateY(180deg);
    }
    
    .flashcard-front, .flashcard-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: var(--card-background);
        border-radius: 16px;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
    }
    
    .flashcard-back {
        transform: rotateY(180deg);
    }
    
    .flashcard-front h3, .flashcard-back h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .flip-hint {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-top: 1rem;
    }
    
    .flashcard-actions {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    
    .flashcard-actions .btn {
        flex: 1;
        min-width: 120px;
    }
    
    .btn-secondary {
        background: #f44336;
        color: white;
    }
    
    .btn-secondary:hover {
        background: #d32f2f;
        transform: translateY(-2px);
    }
    
    .flashcard-progress {
        background: var(--card-background);
        padding: 1.5rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
    }
    
    .progress-stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-color);
    }
    
    .stat-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    
    .progress-bar {
        background: var(--surface-color);
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .progress-fill {
        background: var(--primary-color);
        height: 100%;
        width: 0%;
        transition: width 0.3s ease;
    }
    
    .study-tips-section {
        padding: 80px 0;
        background: var(--surface-color);
    }
    
    .tips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    
    .tip-card {
        background: var(--card-background);
        padding: 2rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
        text-align: center;
    }
    
    .tip-icon {
        font-size: 2.5rem;
        color: var(--accent-color);
        margin-bottom: 1rem;
    }
    
    .tip-card h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .completion-message {
        text-align: center;
        padding: 3rem;
    }
    
    .completion-icon {
        font-size: 4rem;
        color: var(--premium-color);
        margin-bottom: 1rem;
    }
    
    .completion-stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .completion-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .nav-link.active {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .flashcard-header {
            flex-direction: column;
            text-align: center;
        }
        
        .flashcard-controls {
            justify-content: center;
        }
        
        .flashcard-actions {
            flex-direction: column;
        }
        
        .flashcard-actions .btn {
            width: 100%;
        }
        
        .progress-stats {
            flex-direction: column;
            gap: 1rem;
        }
        
        .completion-actions {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(flashcardStyle);