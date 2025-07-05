// Mnemonics JavaScript
let currentMnemonics = [];
let filteredMnemonics = [];

// Extended mnemonics database
const mnemonicsDatabase = {
    biology: [
        {
            concept: "Mitosis Phases",
            mnemonic: "PMAT",
            fullMnemonic: "Please Make A Tea",
            explanation: "Prophase, Metaphase, Anaphase, Telophase - the four phases of mitosis in order",
            difficulty: "easy",
            category: "Cell Biology",
            tips: "Visualize making tea to remember the sequence",
            premium: false
        },
        {
            concept: "Taxonomic Classification",
            mnemonic: "King Philip Came Over For Good Soup",
            fullMnemonic: "Kingdom, Phylum, Class, Order, Family, Genus, Species",
            explanation: "The hierarchical classification system for living organisms",
            difficulty: "easy",
            category: "Classification",
            tips: "Picture a king enjoying soup to remember the hierarchy",
            premium: false
        },
        {
            concept: "DNA Bases",
            mnemonic: "A-T and G-C pairs",
            fullMnemonic: "Apple Tree, Green Car",
            explanation: "Adenine pairs with Thymine, Guanine pairs with Cytosine in DNA",
            difficulty: "easy",
            category: "Genetics",
            tips: "Think of an apple tree next to a green car",
            premium: false
        },
        {
            concept: "Photosynthesis Equation",
            mnemonic: "6CO2 + 6H2O + light → C6H12O6 + 6O2",
            fullMnemonic: "Six Carbon dioxide + Six Water + Light → Glucose + Six Oxygen",
            explanation: "The chemical equation for photosynthesis",
            difficulty: "medium",
            category: "Plant Biology",
            tips: "Remember: plants take in CO2 and water, release oxygen and make glucose",
            premium: false
        },
        {
            concept: "Essential Amino Acids",
            mnemonic: "PVT TIM HALL",
            fullMnemonic: "Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine",
            explanation: "The 10 essential amino acids that must be obtained from diet",
            difficulty: "hard",
            category: "Biochemistry",
            tips: "Private Tim Hall needs these amino acids from his diet",
            premium: false
        },
        {
            concept: "Cranial Nerves",
            mnemonic: "On Old Olympus Towering Top A Finn And German Viewed Some Hops",
            fullMnemonic: "Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Auditory, Glossopharyngeal, Vagus, Spinal, Hypoglossal",
            explanation: "The 12 cranial nerves in order",
            difficulty: "hard",
            category: "Anatomy",
            tips: "Picture the scene on top of Olympus with people viewing hops",
            premium: false
        },
        {
            concept: "Enzyme Cofactors",
            mnemonic: "Mighty Zn Can Make Iron",
            fullMnemonic: "Mg2+, Zn2+, Ca2+, Mn2+, Fe2+",
            explanation: "Common metal ions that act as enzyme cofactors",
            difficulty: "medium",
            category: "Biochemistry",
            tips: "Think of mighty metals helping enzymes work",
            premium: false
        },
        {
            concept: "Carbohydrate Structure",
            mnemonic: "Glucose Has Six Carbon Atoms",
            fullMnemonic: "C6H12O6",
            explanation: "The molecular formula for glucose",
            difficulty: "easy",
            category: "Biochemistry",
            tips: "Six carbons, twelve hydrogens, six oxygens",
            premium: false
        },
        {
            concept: "Protein Structure Levels",
            mnemonic: "Please Take Quarters Tomorrow",
            fullMnemonic: "Primary, Tertiary, Quaternary, Temporary",
            explanation: "The four levels of protein structure",
            difficulty: "medium",
            category: "Biochemistry",
            tips: "Build protein structure step by step",
            premium: true
        },
        {
            concept: "Electron Transport Chain",
            mnemonic: "Cute Cats Catch Mice",
            fullMnemonic: "Complex I, Complex II, Complex III, Complex IV",
            explanation: "The four complexes of the electron transport chain",
            difficulty: "hard",
            category: "Cellular Respiration",
            tips: "Follow the electron pathway like cats chasing mice",
            premium: true
        },
        {
            concept: "Hormone Functions",
            mnemonic: "Tigers In Australia Grow Oranges",
            fullMnemonic: "Thyroid, Insulin, Adrenaline, Growth, Oxytocin",
            explanation: "Major hormones and their primary functions",
            difficulty: "medium",
            category: "Endocrinology",
            tips: "Picture tigers in Australia growing orange trees",
            premium: true
        },
        {
            concept: "Blood Types",
            mnemonic: "All Blood Accepts Oxygen",
            fullMnemonic: "A, B, AB, O",
            explanation: "The four main blood types in the ABO system",
            difficulty: "easy",
            category: "Human Biology",
            tips: "Remember that all blood carries oxygen",
            premium: false
        },
        {
            concept: "Vitamins (Fat-Soluble)",
            mnemonic: "A DEK",
            fullMnemonic: "Vitamin A, D, E, K",
            explanation: "The fat-soluble vitamins",
            difficulty: "easy",
            category: "Nutrition",
            tips: "A deck of cards - fat-soluble vitamins stick together",
            premium: false
        },
        {
            concept: "Digestive Enzymes",
            mnemonic: "People Like Tacos",
            fullMnemonic: "Pepsin, Lipase, Trypsin",
            explanation: "Major digestive enzymes",
            difficulty: "medium",
            category: "Digestion",
            tips: "Think of people enjoying tacos with various enzymes breaking down food",
            premium: true
        },
        {
            concept: "Nucleotide Components",
            mnemonic: "Sugar, Phosphate, Base",
            fullMnemonic: "Every nucleotide has these three components",
            explanation: "The three parts that make up every nucleotide",
            difficulty: "easy",
            category: "Genetics",
            tips: "Like a sandwich with three layers",
            premium: false
        }
    ],
    chemistry: [
        {
            concept: "Periodic Table Groups",
            mnemonic: "Happy Little Berries Never Bite",
            fullMnemonic: "Hydrogen, Lithium, Beryllium, Sodium, Boron",
            explanation: "First few elements in their respective groups",
            difficulty: "easy",
            category: "Periodic Table",
            tips: "Picture happy berries that never bite",
            premium: false
        },
        {
            concept: "Electronegativity Order",
            mnemonic: "FONClBrISCH",
            fullMnemonic: "F > O > N > Cl > Br > I > S > C > H",
            explanation: "Electronegativity values in decreasing order",
            difficulty: "hard",
            category: "Chemical Bonding",
            tips: "Pronounced 'fonkel-brish' - fluorine is most electronegative",
            premium: false
        },
        {
            concept: "Polyatomic Ions",
            mnemonic: "Nick the Camel ate a Clam for Supper in Phoenix",
            fullMnemonic: "Nitrate, Carbonate, Chlorate, Sulfate, Phosphate",
            explanation: "Common polyatomic ions",
            difficulty: "medium",
            category: "Ions",
            tips: "Picture Nick the camel's dinner adventure",
            premium: false
        },
        {
            concept: "Acids (Strong)",
            mnemonic: "Hi I'll Send Clowns Bouncing Proudly",
            fullMnemonic: "HI, H2SO4, HCl, HClO4, HBr, HClO3",
            explanation: "The six strong acids",
            difficulty: "medium",
            category: "Acids and Bases",
            tips: "Strong acids make a bold statement",
            premium: false
        },
        {
            concept: "Noble Gases",
            mnemonic: "He Never Argues, Kristen's Xenophobic Reactions",
            fullMnemonic: "Helium, Neon, Argon, Krypton, Xenon, Radon",
            explanation: "The noble gases in order",
            difficulty: "easy",
            category: "Periodic Table",
            tips: "Noble gases are unreactive like someone who never argues",
            premium: false
        },
        {
            concept: "Organic Functional Groups",
            mnemonic: "All Cats Eat Mice",
            fullMnemonic: "Alcohol, Carboxylic acid, Ester, Methylamine",
            explanation: "Common organic functional groups",
            difficulty: "medium",
            category: "Organic Chemistry",
            tips: "Picture cats hunting mice with different functional groups",
            premium: false
        },
        {
            concept: "Alkane Names",
            mnemonic: "My Elephant Plays Ballroom Music",
            fullMnemonic: "Methane, Ethane, Propane, Butane, Methyl",
            explanation: "First few alkanes in order",
            difficulty: "easy",
            category: "Organic Chemistry",
            tips: "An elephant dancing to music",
            premium: false
        },
        {
            concept: "Thermodynamic Laws",
            mnemonic: "Every Good Boy Does Fine",
            fullMnemonic: "Energy, Entropy, Equilibrium, Enthalpy, Free Energy",
            explanation: "Key thermodynamic concepts",
            difficulty: "hard",
            category: "Thermodynamics",
            tips: "Like musical notes, each law builds on the previous",
            premium: true
        },
        {
            concept: "Oxidation Numbers",
            mnemonic: "OIL RIG",
            fullMnemonic: "Oxidation Is Loss, Reduction Is Gain",
            explanation: "Mnemonic for remembering oxidation and reduction",
            difficulty: "medium",
            category: "Redox Reactions",
            tips: "Picture an oil rig where electrons are lost and gained",
            premium: false
        },
        {
            concept: "Molecular Shapes",
            mnemonic: "Linda's Triangular Tetrahedral Tiger",
            fullMnemonic: "Linear, Trigonal planar, Tetrahedral, Trigonal bipyramidal",
            explanation: "Common molecular geometries",
            difficulty: "medium",
            category: "Molecular Geometry",
            tips: "Visualize each shape as you say the mnemonic",
            premium: true
        },
        {
            concept: "Transition Metals",
            mnemonic: "Scandium Through Zinc",
            fullMnemonic: "Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn",
            explanation: "The first-row transition metals",
            difficulty: "medium",
            category: "Periodic Table",
            tips: "Think of a scan from titanium to zinc",
            premium: true
        },
        {
            concept: "Chemical Bonds",
            mnemonic: "Cats In My House",
            fullMnemonic: "Covalent, Ionic, Metallic, Hydrogen",
            explanation: "Types of chemical bonds",
            difficulty: "easy",
            category: "Chemical Bonding",
            tips: "Different types of bonds like cats in different rooms",
            premium: false
        },
        {
            concept: "pH Scale",
            mnemonic: "Acid Base Neutral",
            fullMnemonic: "0-6 Acidic, 7 Neutral, 8-14 Basic",
            explanation: "pH scale ranges",
            difficulty: "easy",
            category: "Acids and Bases",
            tips: "Seven is neutral, like a lucky number in the middle",
            premium: false
        },
        {
            concept: "Gas Laws",
            mnemonic: "Boyle's Charles Gay-Lussac",
            fullMnemonic: "Pressure-Volume, Volume-Temperature, Pressure-Temperature",
            explanation: "The three main gas laws",
            difficulty: "medium",
            category: "Gas Laws",
            tips: "Three scientists studying three gas relationships",
            premium: true
        },
        {
            concept: "Solubility Rules",
            mnemonic: "No Alkali Metals Are Soluble",
            fullMnemonic: "Nitrates, Alkali metals, Ammonium are always soluble",
            explanation: "Basic solubility rules",
            difficulty: "medium",
            category: "Solutions",
            tips: "Remember the always-soluble compounds first",
            premium: true
        }
    ]
};

// Initialize mnemonics page
document.addEventListener('DOMContentLoaded', function() {
    setupMnemonicsEventListeners();
    setupSearchAndFilter();
});

function setupMnemonicsEventListeners() {
    // Setup theme toggle and login functionality
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

function setupSearchAndFilter() {
    const searchInput = document.getElementById('mnemonicSearch');
    const difficultyFilter = document.getElementById('difficultyFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterMnemonics);
    }
    
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', filterMnemonics);
    }
}

function loadMnemonics(subject) {
    const mnemonics = mnemonicsDatabase[subject] || [];
    const availableMnemonics = mnemonics.filter(mnemonic => isPremiumUser || !mnemonic.premium);
    
    if (availableMnemonics.length === 0) {
        showNotification('No mnemonics available for this subject. Sign up to access more content!', 'info');
        return;
    }
    
    currentMnemonics = availableMnemonics;
    filteredMnemonics = [...currentMnemonics];
    
    displayMnemonics();
    
    // Show controls and scroll to display
    document.querySelector('.mnemonic-controls').style.display = 'flex';
    document.getElementById('mnemonicsDisplay').scrollIntoView({ behavior: 'smooth' });
}

function displayMnemonics() {
    const displayContainer = document.getElementById('mnemonicsDisplay');
    
    if (filteredMnemonics.length === 0) {
        displayContainer.innerHTML = '<p class="no-results">No mnemonics found matching your criteria.</p>';
        return;
    }
    
    const mnemonicsHtml = filteredMnemonics.map((mnemonic, index) => `
        <div class="mnemonic-card ${mnemonic.premium ? 'premium' : ''}" data-index="${index}">
            <div class="mnemonic-header">
                <h3 class="mnemonic-concept">${mnemonic.concept}</h3>
                <div class="mnemonic-meta">
                    <span class="difficulty-badge difficulty-${mnemonic.difficulty}">${mnemonic.difficulty}</span>
                    <span class="category-badge">${mnemonic.category}</span>
                    ${mnemonic.premium ? '<span class="premium-badge">Premium</span>' : ''}
                </div>
            </div>
            
            <div class="mnemonic-content">
                <div class="mnemonic-phrase">
                    <i class="fas fa-quote-left"></i>
                    <span class="mnemonic-text">${mnemonic.mnemonic}</span>
                    <i class="fas fa-quote-right"></i>
                </div>
                
                <div class="mnemonic-full">
                    <strong>Full Form:</strong> ${mnemonic.fullMnemonic}
                </div>
                
                <div class="mnemonic-explanation">
                    <strong>Explanation:</strong> ${mnemonic.explanation}
                </div>
                
                <div class="mnemonic-tips">
                    <strong>Memory Tip:</strong> ${mnemonic.tips}
                </div>
            </div>
            
            <div class="mnemonic-actions">
                <button class="btn btn-outline btn-small" onclick="speakMnemonic(${index})">
                    <i class="fas fa-volume-up"></i>
                    Listen
                </button>
                <button class="btn btn-outline btn-small" onclick="practiceMnemonic(${index})">
                    <i class="fas fa-brain"></i>
                    Practice
                </button>
                <button class="btn btn-outline btn-small" onclick="saveMnemonic(${index})">
                    <i class="fas fa-bookmark"></i>
                    Save
                </button>
            </div>
        </div>
    `).join('');
    
    displayContainer.innerHTML = mnemonicsHtml;
}

function filterMnemonics() {
    const searchTerm = document.getElementById('mnemonicSearch').value.toLowerCase();
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    
    filteredMnemonics = currentMnemonics.filter(mnemonic => {
        const matchesSearch = mnemonic.concept.toLowerCase().includes(searchTerm) ||
                            mnemonic.mnemonic.toLowerCase().includes(searchTerm) ||
                            mnemonic.category.toLowerCase().includes(searchTerm);
        
        const matchesDifficulty = difficultyFilter === 'all' || mnemonic.difficulty === difficultyFilter;
        
        return matchesSearch && matchesDifficulty;
    });
    
    displayMnemonics();
}

function speakMnemonic(index) {
    const mnemonic = filteredMnemonics[index];
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(mnemonic.mnemonic);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
        showNotification('Speaking mnemonic...', 'info');
    } else {
        showNotification('Speech synthesis not supported in your browser', 'error');
    }
}

function practiceMnemonic(index) {
    const mnemonic = filteredMnemonics[index];
    
    const practiceHtml = `
        <div class="practice-container">
            <h3>Practice: ${mnemonic.concept}</h3>
            <div class="practice-content">
                <p><strong>Mnemonic:</strong> ${mnemonic.mnemonic}</p>
                <p><strong>Try to recall:</strong> ${mnemonic.fullMnemonic}</p>
                
                <div class="practice-input">
                    <input type="text" id="practiceInput" placeholder="Type what you remember..." class="practice-text">
                    <button class="btn btn-primary" onclick="checkPractice('${mnemonic.fullMnemonic}')">Check</button>
                </div>
                
                <div class="practice-result" id="practiceResult"></div>
            </div>
        </div>
    `;
    
    showModal('Practice Mode', practiceHtml);
    
    // Focus on input
    setTimeout(() => {
        document.getElementById('practiceInput').focus();
    }, 100);
}

function checkPractice(correctAnswer) {
    const userInput = document.getElementById('practiceInput').value.trim();
    const resultDiv = document.getElementById('practiceResult');
    
    const similarity = calculateSimilarity(userInput.toLowerCase(), correctAnswer.toLowerCase());
    
    if (similarity > 0.8) {
        resultDiv.innerHTML = `
            <div class="practice-correct">
                <i class="fas fa-check-circle"></i>
                <strong>Excellent!</strong> You got it right!
            </div>
        `;
        showNotification('Great job! You remembered correctly!', 'success');
    } else if (similarity > 0.5) {
        resultDiv.innerHTML = `
            <div class="practice-partial">
                <i class="fas fa-info-circle"></i>
                <strong>Close!</strong> The correct answer is: ${correctAnswer}
            </div>
        `;
        showNotification('Almost there! Keep practicing!', 'info');
    } else {
        resultDiv.innerHTML = `
            <div class="practice-incorrect">
                <i class="fas fa-times-circle"></i>
                <strong>Not quite.</strong> The correct answer is: ${correctAnswer}
            </div>
        `;
        showNotification('Keep trying! Practice makes perfect!', 'info');
    }
}

function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
}

function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

function saveMnemonic(index) {
    const mnemonic = filteredMnemonics[index];
    
    // Get saved mnemonics from localStorage
    let savedMnemonics = JSON.parse(localStorage.getItem('savedMnemonics')) || [];
    
    // Check if already saved
    const alreadySaved = savedMnemonics.some(saved => saved.concept === mnemonic.concept);
    
    if (alreadySaved) {
        showNotification('Mnemonic already saved!', 'info');
        return;
    }
    
    // Add to saved mnemonics
    savedMnemonics.push(mnemonic);
    localStorage.setItem('savedMnemonics', JSON.stringify(savedMnemonics));
    
    showNotification('Mnemonic saved successfully!', 'success');
    
    // Update button appearance
    const saveBtn = event.target.closest('.mnemonic-card').querySelector('.btn:last-child');
    saveBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    saveBtn.classList.add('saved');
}

function showSavedMnemonics() {
    const savedMnemonics = JSON.parse(localStorage.getItem('savedMnemonics')) || [];
    
    if (savedMnemonics.length === 0) {
        showNotification('No saved mnemonics found.', 'info');
        return;
    }
    
    const savedHtml = savedMnemonics.map((mnemonic, index) => `
        <div class="saved-mnemonic-item">
            <h4>${mnemonic.concept}</h4>
            <p><strong>Mnemonic:</strong> ${mnemonic.mnemonic}</p>
            <p><strong>Category:</strong> ${mnemonic.category}</p>
            <button class="btn btn-outline btn-small" onclick="removeSavedMnemonic(${index})">
                <i class="fas fa-trash"></i>
                Remove
            </button>
        </div>
    `).join('');
    
    showModal('Saved Mnemonics', `
        <div class="saved-mnemonics-container">
            ${savedHtml}
        </div>
    `);
}

function removeSavedMnemonic(index) {
    let savedMnemonics = JSON.parse(localStorage.getItem('savedMnemonics')) || [];
    savedMnemonics.splice(index, 1);
    localStorage.setItem('savedMnemonics', JSON.stringify(savedMnemonics));
    
    showNotification('Mnemonic removed from saved list.', 'info');
    showSavedMnemonics(); // Refresh the modal
}

function showPremiumRequired() {
    if (isPremiumUser) {
        showNotification('Premium mnemonics unlocked!', 'success');
        return;
    }
    
    const premiumHtml = `
        <div class="premium-modal">
            <div class="premium-content">
                <h2>Premium Mnemonics</h2>
                <p>Unlock access to advanced mnemonics with visual aids, audio pronunciations, and interactive practice modes.</p>
                <ul class="premium-features">
                    <li><i class="fas fa-check"></i> 50+ Additional mnemonics</li>
                    <li><i class="fas fa-check"></i> Visual memory aids</li>
                    <li><i class="fas fa-check"></i> Audio pronunciations</li>
                    <li><i class="fas fa-check"></i> Interactive practice modes</li>
                    <li><i class="fas fa-check"></i> Progress tracking</li>
                    <li><i class="fas fa-check"></i> Personalized recommendations</li>
                </ul>
                <div class="premium-actions">
                    <button class="btn btn-premium" onclick="upgradeToPreium()">Upgrade for PKR 200/month</button>
                    <button class="btn btn-outline" onclick="closeModal()">Maybe Later</button>
                </div>
            </div>
        </div>
    `;
    
    showModal('Premium Required', premiumHtml);
}

// Add mnemonic-specific styling
const mnemonicStyle = document.createElement('style');
mnemonicStyle.textContent = `
    .mnemonic-categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .category-card {
        background: var(--card-background);
        padding: 2rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
        transition: var(--transition);
        cursor: pointer;
        text-align: center;
        position: relative;
    }
    
    .category-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-hover);
    }
    
    .category-card.premium-card {
        border: 2px solid var(--premium-color);
    }
    
    .category-icon {
        font-size: 3rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .category-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .category-card p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
    }
    
    .mnemonic-count {
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
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
    
    .mnemonic-controls {
        display: none;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .search-container {
        position: relative;
        flex: 1;
        min-width: 200px;
    }
    
    .search-input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.5rem;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        background: var(--card-background);
        color: var(--text-primary);
        transition: var(--transition);
    }
    
    .search-input:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
    }
    
    .filter-select {
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        background: var(--card-background);
        color: var(--text-primary);
        cursor: pointer;
        transition: var(--transition);
    }
    
    .filter-select:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    .mnemonics-display {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .mnemonic-card {
        background: var(--card-background);
        border-radius: 16px;
        box-shadow: var(--shadow);
        overflow: hidden;
        transition: var(--transition);
    }
    
    .mnemonic-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-hover);
    }
    
    .mnemonic-card.premium {
        border: 2px solid var(--premium-color);
    }
    
    .mnemonic-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .mnemonic-concept {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .mnemonic-meta {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        align-items: center;
    }
    
    .difficulty-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
        color: white;
    }
    
    .difficulty-easy { background: #4CAF50; }
    .difficulty-medium { background: #FF9800; }
    .difficulty-hard { background: #f44336; }
    
    .category-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        background: var(--surface-color);
        color: var(--text-secondary);
    }
    
    .mnemonic-content {
        padding: 1.5rem;
    }
    
    .mnemonic-phrase {
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 600;
    }
    
    .mnemonic-text {
        margin: 0 0.5rem;
    }
    
    .mnemonic-full,
    .mnemonic-explanation,
    .mnemonic-tips {
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .mnemonic-full strong,
    .mnemonic-explanation strong,
    .mnemonic-tips strong {
        color: var(--primary-color);
    }
    
    .mnemonic-actions {
        padding: 1rem 1.5rem;
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .btn-small {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        flex: 1;
        min-width: 100px;
    }
    
    .btn.saved {
        background: var(--primary-color);
        color: white;
    }
    
    .how-to-use-section {
        padding: 80px 0;
        background: var(--surface-color);
    }
    
    .steps-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    
    .step-card {
        background: var(--card-background);
        padding: 2rem;
        border-radius: 16px;
        box-shadow: var(--shadow);
        text-align: center;
        transition: var(--transition);
    }
    
    .step-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-hover);
    }
    
    .step-number {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 auto 1rem;
    }
    
    .step-card h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .memory-tips-section {
        padding: 80px 0;
        background: var(--background-color);
    }
    
    .practice-container {
        max-width: 500px;
        margin: 0 auto;
    }
    
    .practice-content {
        padding: 1rem 0;
    }
    
    .practice-input {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .practice-text {
        flex: 1;
        padding: 0.75rem;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        background: var(--surface-color);
        color: var(--text-primary);
    }
    
    .practice-text:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    .practice-result {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
    }
    
    .practice-correct {
        background: #e8f5e8;
        color: #2e7d32;
        border: 1px solid #4caf50;
    }
    
    .practice-partial {
        background: #fff3e0;
        color: #f57c00;
        border: 1px solid #ff9800;
    }
    
    .practice-incorrect {
        background: #ffebee;
        color: #c62828;
        border: 1px solid #f44336;
    }
    
    .saved-mnemonics-container {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .saved-mnemonic-item {
        background: var(--surface-color);
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .saved-mnemonic-item h4 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .premium-features {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }
    
    .premium-features li {
        padding: 0.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .premium-features i {
        color: var(--primary-color);
    }
    
    .no-results {
        text-align: center;
        color: var(--text-secondary);
        font-size: 1.1rem;
        padding: 2rem;
    }
    
    @media (max-width: 768px) {
        .mnemonic-controls {
            flex-direction: column;
            align-items: stretch;
        }
        
        .search-container {
            min-width: auto;
        }
        
        .mnemonics-display {
            grid-template-columns: 1fr;
        }
        
        .mnemonic-actions {
            flex-direction: column;
        }
        
        .btn-small {
            min-width: auto;
        }
        
        .practice-input {
            flex-direction: column;
        }
        
        .steps-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(mnemonicStyle);