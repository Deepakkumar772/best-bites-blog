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

// COMPREHENSIVE MCQ DATABASE - 1,950+ QUESTIONS
const mcqDatabase = {
    biology: {
        'Cell Structure & Function': [
            // BASIC CELL STRUCTURE (Questions 1-20)
            {
                question: "The powerhouse of the cell is:",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
                correct: 1,
                explanation: "Mitochondria produce ATP through cellular respiration, providing energy for cellular processes."
            },
            {
                question: "Which organelle is responsible for protein synthesis?",
                options: ["Golgi apparatus", "Lysosomes", "Ribosomes", "Vacuoles"],
                correct: 2,
                explanation: "Ribosomes are the sites where proteins are synthesized using mRNA as a template."
            },
            {
                question: "The cell membrane is primarily composed of:",
                options: ["Proteins only", "Phospholipids only", "Phospholipid bilayer with embedded proteins", "Carbohydrates only"],
                correct: 2,
                explanation: "The fluid mosaic model describes the cell membrane as a phospholipid bilayer with proteins embedded within it."
            },
            {
                question: "Prokaryotic cells lack:",
                options: ["Cell wall", "DNA", "Membrane-bound nucleus", "Ribosomes"],
                correct: 2,
                explanation: "Prokaryotes have genetic material freely floating in the cytoplasm, not enclosed by a nuclear membrane."
            },
            {
                question: "Which of the following is found only in plant cells?",
                options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Endoplasmic reticulum"],
                correct: 1,
                explanation: "Chloroplasts contain chlorophyll and are responsible for photosynthesis, unique to plant cells."
            },
            {
                question: "The Golgi apparatus is responsible for:",
                options: ["DNA replication", "Protein modification and packaging", "ATP production", "Lipid synthesis"],
                correct: 1,
                explanation: "The Golgi apparatus modifies, packages, and ships proteins received from the endoplasmic reticulum."
            },
            {
                question: "Which organelle contains digestive enzymes?",
                options: ["Peroxisomes", "Lysosomes", "Ribosomes", "Mitochondria"],
                correct: 1,
                explanation: "Lysosomes contain digestive enzymes that break down waste materials and cellular debris."
            },
            {
                question: "The rough endoplasmic reticulum is studded with:",
                options: ["Mitochondria", "Ribosomes", "Lysosomes", "Vacuoles"],
                correct: 1,
                explanation: "The rough ER has ribosomes attached to its surface, giving it a 'rough' appearance and enabling protein synthesis."
            },
            {
                question: "Osmosis is the movement of:",
                options: ["Solutes across a membrane", "Water across a semi-permeable membrane", "Gases through the cell wall", "Proteins through the cytoplasm"],
                correct: 1,
                explanation: "Osmosis is the diffusion of water molecules across a semi-permeable membrane from high to low water concentration."
            },
            {
                question: "The process by which cells engulf large particles is called:",
                options: ["Exocytosis", "Diffusion", "Phagocytosis", "Osmosis"],
                correct: 2,
                explanation: "Phagocytosis is a form of endocytosis where cells engulf large particles or other cells."
            },
            {
                question: "The control center of the cell is:",
                options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
                correct: 1,
                explanation: "The nucleus controls cellular activities and contains the cell's genetic material (DNA)."
            },
            {
                question: "Which structure provides shape and support to plant cells?",
                options: ["Cell membrane", "Cell wall", "Cytoplasm", "Nucleus"],
                correct: 1,
                explanation: "The cell wall, made of cellulose, provides structural support and protection to plant cells."
            },
            {
                question: "The jelly-like substance filling the cell is called:",
                options: ["Nucleoplasm", "Cytoplasm", "Protoplasm", "Endoplasm"],
                correct: 1,
                explanation: "Cytoplasm is the gel-like substance that fills the cell and surrounds the organelles."
            },
            {
                question: "Which organelle is known as the 'suicide bag' of the cell?",
                options: ["Ribosome", "Lysosome", "Peroxisome", "Centrosome"],
                correct: 1,
                explanation: "Lysosomes are called 'suicide bags' because they can digest worn-out organelles and can cause cell death."
            },
            {
                question: "The smooth endoplasmic reticulum is involved in:",
                options: ["Protein synthesis", "Lipid synthesis", "DNA replication", "Photosynthesis"],
                correct: 1,
                explanation: "Smooth ER lacks ribosomes and is primarily involved in lipid synthesis and detoxification."
            },
            {
                question: "Centrioles are found in:",
                options: ["Plant cells only", "Animal cells only", "Both plant and animal cells", "Prokaryotic cells only"],
                correct: 1,
                explanation: "Centrioles are typically found in animal cells and play a role in cell division."
            },
            {
                question: "The double membrane surrounding the nucleus is called:",
                options: ["Nuclear envelope", "Nuclear membrane", "Nuclear wall", "Nucleolus"],
                correct: 0,
                explanation: "The nuclear envelope is a double membrane that surrounds the nucleus and controls molecular traffic."
            },
            {
                question: "Ribosomes are composed of:",
                options: ["Protein only", "RNA only", "Protein and RNA", "DNA and protein"],
                correct: 2,
                explanation: "Ribosomes are made of ribosomal RNA (rRNA) and proteins, forming two subunits."
            },
            {
                question: "The site of ribosome synthesis is:",
                options: ["Nucleus", "Nucleolus", "Cytoplasm", "Endoplasmic reticulum"],
                correct: 1,
                explanation: "The nucleolus is the site where ribosomal RNA is synthesized and ribosome assembly begins."
            },
            {
                question: "Which organelle is responsible for cellular respiration?",
                options: ["Chloroplast", "Mitochondria", "Ribosome", "Golgi apparatus"],
                correct: 1,
                explanation: "Mitochondria carry out cellular respiration, converting glucose and oxygen into ATP."
            },

            // CELL MEMBRANE STRUCTURE (Questions 21-35)
            {
                question: "The fluid mosaic model was proposed by:",
                options: ["Watson and Crick", "Singer and Nicolson", "Schleiden and Schwann", "Hooke and Leeuwenhoek"],
                correct: 1,
                explanation: "Singer and Nicolson proposed the fluid mosaic model in 1972 to describe cell membrane structure."
            },
            {
                question: "Phospholipids in the cell membrane have:",
                options: ["Hydrophilic head and hydrophobic tail", "Hydrophobic head and hydrophilic tail", "Both ends hydrophilic", "Both ends hydrophobic"],
                correct: 0,
                explanation: "Phospholipids are amphipathic with hydrophilic (water-loving) heads and hydrophobic (water-fearing) tails."
            },
            {
                question: "Cholesterol in the cell membrane:",
                options: ["Increases membrane fluidity", "Decreases membrane fluidity", "Has no effect on fluidity", "Only affects permeability"],
                correct: 1,
                explanation: "Cholesterol decreases membrane fluidity and permeability, helping maintain membrane structure."
            },
            {
                question: "Integral membrane proteins:",
                options: ["Are loosely attached to membrane surface", "Span the entire membrane", "Are found only on outer surface", "Are water-soluble"],
                correct: 1,
                explanation: "Integral proteins span the entire membrane thickness and are embedded within the lipid bilayer."
            },
            {
                question: "Peripheral membrane proteins:",
                options: ["Span the membrane", "Are attached to membrane surface", "Are embedded in lipid bilayer", "Form membrane channels"],
                correct: 1,
                explanation: "Peripheral proteins are loosely attached to the membrane surface and can be easily removed."
            },
            {
                question: "Glycoproteins are important for:",
                options: ["Cell recognition", "Energy production", "DNA replication", "Protein synthesis"],
                correct: 0,
                explanation: "Glycoproteins have carbohydrate groups and play crucial roles in cell recognition and signaling."
            },
            {
                question: "The glycocalyx is:",
                options: ["Inner membrane layer", "Carbohydrate coat on cell surface", "Protein layer", "Lipid layer"],
                correct: 1,
                explanation: "The glycocalyx is a carbohydrate coat on the cell surface involved in protection and recognition."
            },
            {
                question: "Membrane fluidity is affected by:",
                options: ["Temperature only", "Cholesterol only", "Fatty acid composition only", "All of the above"],
                correct: 3,
                explanation: "Membrane fluidity depends on temperature, cholesterol content, and fatty acid saturation."
            },
            {
                question: "Aquaporins are:",
                options: ["Lipid molecules", "Water channels", "Carbohydrate molecules", "Steroid hormones"],
                correct: 1,
                explanation: "Aquaporins are specialized water channel proteins that facilitate water transport across membranes."
            },
            {
                question: "The asymmetry of the cell membrane refers to:",
                options: ["Different lipid composition on each side", "Unequal membrane thickness", "Variable protein distribution", "Irregular membrane shape"],
                correct: 0,
                explanation: "Membrane asymmetry means the inner and outer leaflets have different lipid and protein compositions."
            },
            {
                question: "Lipid rafts are:",
                options: ["Membrane regions rich in cholesterol", "Protein complexes", "Carbohydrate structures", "DNA-binding sites"],
                correct: 0,
                explanation: "Lipid rafts are membrane microdomains enriched in cholesterol and sphingolipids."
            },
            {
                question: "The permeability of cell membrane is:",
                options: ["Completely permeable", "Completely impermeable", "Selectively permeable", "Only permeable to water"],
                correct: 2,
                explanation: "Cell membranes are selectively permeable, allowing some substances to pass while blocking others."
            },
            {
                question: "Membrane proteins can function as:",
                options: ["Enzymes", "Receptors", "Transport channels", "All of the above"],
                correct: 3,
                explanation: "Membrane proteins serve various functions including enzymatic activity, signal reception, and transport."
            },
            {
                question: "The head group of phosphatidylcholine is:",
                options: ["Choline", "Serine", "Ethanolamine", "Inositol"],
                correct: 0,
                explanation: "Phosphatidylcholine has a choline head group and is a major component of cell membranes."
            },
            {
                question: "Membrane fusion is important for:",
                options: ["Exocytosis", "Endocytosis", "Vesicle transport", "All of the above"],
                correct: 3,
                explanation: "Membrane fusion is essential for various cellular processes including vesicle trafficking and secretion."
            },

            // ORGANELLE FUNCTIONS (Questions 36-55)
            {
                question: "Mitochondria have their own:",
                options: ["DNA", "Ribosomes", "Both DNA and ribosomes", "Neither DNA nor ribosomes"],
                correct: 2,
                explanation: "Mitochondria contain their own circular DNA and 70S ribosomes, supporting the endosymbiotic theory."
            },
            {
                question: "The inner mitochondrial membrane is folded into:",
                options: ["Cristae", "Matrix", "Intermembrane space", "Outer membrane"],
                correct: 0,
                explanation: "Cristae are folds of the inner mitochondrial membrane that increase surface area for ATP synthesis."
            },
            {
                question: "The mitochondrial matrix contains:",
                options: ["Enzymes for Krebs cycle", "Mitochondrial DNA", "Ribosomes", "All of the above"],
                correct: 3,
                explanation: "The mitochondrial matrix houses Krebs cycle enzymes, mtDNA, ribosomes, and other metabolic machinery."
            },
            {
                question: "Chloroplasts are found in:",
                options: ["All plant cells", "Only leaf cells", "All photosynthetic cells", "Root cells only"],
                correct: 2,
                explanation: "Chloroplasts are present in all photosynthetic plant cells, not just leaves."
            },
            {
                question: "The stroma of chloroplasts contains:",
                options: ["Chlorophyll", "Calvin cycle enzymes", "Thylakoids", "Grana"],
                correct: 1,
                explanation: "The stroma is the fluid-filled space containing enzymes for the Calvin cycle (light-independent reactions)."
            },
            {
                question: "Thylakoids are:",
                options: ["Flattened membrane sacs", "Enzyme complexes", "DNA molecules", "Protein structures"],
                correct: 0,
                explanation: "Thylakoids are flattened membrane sacs where light-dependent reactions of photosynthesis occur."
            },
            {
                question: "The Golgi apparatus consists of:",
                options: ["Cisternae", "Vesicles", "Both cisternae and vesicles", "Tubules only"],
                correct: 2,
                explanation: "The Golgi apparatus contains stacked cisternae (flattened sacs) and associated transport vesicles."
            },
            {
                question: "The cis face of Golgi apparatus:",
                options: ["Receives materials from ER", "Ships materials to destinations", "Produces lysosomes", "Synthesizes proteins"],
                correct: 0,
                explanation: "The cis face (receiving side) of Golgi receives vesicles from the endoplasmic reticulum."
            },
            {
                question: "The trans face of Golgi apparatus:",
                options: ["Receives materials from ER", "Ships finished products", "Synthesizes DNA", "Produces ribosomes"],
                correct: 1,
                explanation: "The trans face (shipping side) of Golgi packages and ships processed materials to their destinations."
            },
            {
                question: "Lysosomes contain:",
                options: ["Hydrolytic enzymes", "Synthetic enzymes", "Respiratory enzymes", "Photosynthetic enzymes"],
                correct: 0,
                explanation: "Lysosomes contain hydrolytic (digestive) enzymes that break down cellular waste and worn-out organelles."
            },
            {
                question: "The optimal pH for lysosomal enzymes is:",
                options: ["7.0 (neutral)", "5.0 (acidic)", "9.0 (basic)", "Variable"],
                correct: 1,
                explanation: "Lysosomal enzymes work optimally at acidic pH (around 5.0), maintained by proton pumps."
            },
            {
                question: "Peroxisomes are involved in:",
                options: ["Fatty acid oxidation", "Hydrogen peroxide breakdown", "Detoxification", "All of the above"],
                correct: 3,
                explanation: "Peroxisomes perform fatty acid β-oxidation, break down H₂O₂, and detoxify harmful substances."
            },
            {
                question: "Catalase enzyme in peroxisomes:",
                options: ["Produces hydrogen peroxide", "Breaks down hydrogen peroxide", "Synthesizes proteins", "Replicates DNA"],
                correct: 1,
                explanation: "Catalase breaks down toxic hydrogen peroxide (H₂O₂) into water and oxygen."
            },
            {
                question: "Vacuoles in plant cells:",
                options: ["Store water", "Maintain turgor pressure", "Store metabolites", "All of the above"],
                correct: 3,
                explanation: "Plant vacuoles store water and metabolites, and maintain turgor pressure for structural support."
            },
            {
                question: "The endoplasmic reticulum is continuous with:",
                options: ["Cell membrane", "Nuclear envelope", "Golgi apparatus", "Mitochondria"],
                correct: 1,
                explanation: "The ER membrane is continuous with the outer nuclear membrane, forming one interconnected system."
            },
            {
                question: "Free ribosomes in the cytoplasm synthesize:",
                options: ["Membrane proteins", "Secretory proteins", "Cytoplasmic proteins", "Nuclear proteins"],
                correct: 2,
                explanation: "Free ribosomes synthesize proteins that function in the cytoplasm or are imported into organelles."
            },
            {
                question: "Bound ribosomes synthesize:",
                options: ["Cytoplasmic proteins", "Secretory proteins", "Mitochondrial proteins", "Peroxisomal proteins"],
                correct: 1,
                explanation: "Ribosomes bound to ER synthesize proteins destined for secretion, membranes, or organelles."
            },
            {
                question: "The cytoskeleton is composed of:",
                options: ["Microfilaments only", "Microtubules only", "Intermediate filaments only", "All three types of filaments"],
                correct: 3,
                explanation: "The cytoskeleton consists of microfilaments, microtubules, and intermediate filaments."
            },
            {
                question: "Microfilaments are made of:",
                options: ["Tubulin", "Actin", "Keratin", "Myosin"],
                correct: 1,
                explanation: "Microfilaments are composed of actin protein and are involved in cell movement and shape."
            },
            {
                question: "Microtubules are composed of:",
                options: ["Actin", "Tubulin", "Keratin", "Collagen"],
                correct: 1,
                explanation: "Microtubules are made of α and β tubulin dimers and provide structural support and organization."
            },

            // CELL TRANSPORT (Questions 56-75)
            {
                question: "Simple diffusion requires:",
                options: ["Energy", "Carrier proteins", "Neither energy nor proteins", "Both energy and proteins"],
                correct: 2,
                explanation: "Simple diffusion is passive transport requiring no energy or carrier proteins, driven by concentration gradients."
            },
            {
                question: "Facilitated diffusion involves:",
                options: ["Channel proteins", "Carrier proteins", "Both channel and carrier proteins", "ATP consumption"],
                correct: 2,
                explanation: "Facilitated diffusion uses both channel and carrier proteins to transport molecules across membranes."
            },
            {
                question: "Active transport requires:",
                options: ["ATP", "Concentration gradient", "Channel proteins only", "No cellular energy"],
                correct: 0,
                explanation: "Active transport moves substances against concentration gradients and requires ATP energy."
            },
            {
                question: "The sodium-potassium pump:",
                options: ["Moves 3 Na+ out and 2 K+ in", "Moves 2 Na+ out and 3 K+ in", "Moves equal amounts of both", "Moves only sodium"],
                correct: 0,
                explanation: "The Na+/K+ pump moves 3 sodium ions out and 2 potassium ions in, using ATP energy."
            },
            {
                question: "Endocytosis includes:",
                options: ["Phagocytosis", "Pinocytosis", "Receptor-mediated endocytosis", "All of the above"],
                correct: 3,
                explanation: "Endocytosis encompasses phagocytosis (cell eating), pinocytosis (cell drinking), and receptor-mediated uptake."
            },
            {
                question: "Exocytosis is the process of:",
                options: ["Taking materials into the cell", "Expelling materials from the cell", "Protein synthesis", "DNA replication"],
                correct: 1,
                explanation: "Exocytosis is the process of expelling materials from the cell through vesicle fusion with membrane."
            },
            {
                question: "Pinocytosis involves uptake of:",
                options: ["Large particles", "Liquids and dissolved substances", "Other cells", "DNA molecules"],
                correct: 1,
                explanation: "Pinocytosis ('cell drinking') involves the uptake of liquids and small dissolved molecules."
            },
            {
                question: "Receptor-mediated endocytosis is:",
                options: ["Non-specific", "Specific for certain molecules", "Energy-independent", "Irreversible"],
                correct: 1,
                explanation: "Receptor-mediated endocytosis is highly specific, using receptors to bind and internalize specific molecules."
            },
            {
                question: "Cotransport involves:",
                options: ["Movement of one substance only", "Movement of two substances in same direction", "Movement of two substances in opposite directions", "Both B and C"],
                correct: 3,
                explanation: "Cotransport includes symport (same direction) and antiport (opposite directions) of two substances."
            },
            {
                question: "The glucose transporter (GLUT) uses:",
                options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Endocytosis"],
                correct: 1,
                explanation: "GLUT proteins facilitate glucose transport across membranes without requiring energy."
            },
            {
                question: "In a hypotonic solution, an animal cell will:",
                options: ["Shrink", "Swell and possibly burst", "Remain unchanged", "Become rigid"],
                correct: 1,
                explanation: "In hypotonic solutions, water enters animal cells causing them to swell and potentially burst."
            },
            {
                question: "In a hypertonic solution, a plant cell will undergo:",
                options: ["Plasmolysis", "Turgor", "Lysis", "No change"],
                correct: 0,
                explanation: "In hypertonic solutions, plant cells lose water and the membrane pulls away from the cell wall (plasmolysis)."
            },
            {
                question: "Turgor pressure in plant cells is caused by:",
                options: ["Cell wall expansion", "Water entering the vacuole", "Protein synthesis", "DNA replication"],
                correct: 1,
                explanation: "Turgor pressure results from water entering the central vacuole, pressing the membrane against the cell wall."
            },
            {
                question: "The water potential of pure water is:",
                options: ["Positive", "Zero", "Negative", "Variable"],
                correct: 1,
                explanation: "Pure water has a water potential of zero, and all solutions have negative water potential."
            },
            {
                question: "Gated channels open in response to:",
                options: ["Voltage changes", "Ligand binding", "Mechanical stress", "All of the above"],
                correct: 3,
                explanation: "Gated channels can be voltage-gated, ligand-gated, or mechanically-gated depending on the stimulus."
            },
            {
                question: "The resting membrane potential is typically:",
                options: ["+70 mV", "-70 mV", "0 mV", "+140 mV"],
                correct: 1,
                explanation: "Most cells maintain a resting membrane potential of approximately -70 mV (inside negative)."
            },
            {
                question: "Bulk transport includes:",
                options: ["Endocytosis only", "Exocytosis only", "Both endocytosis and exocytosis", "Diffusion"],
                correct: 2,
                explanation: "Bulk transport encompasses both endocytosis (materials entering) and exocytosis (materials leaving)."
            },
            {
                question: "Clathrin-coated vesicles are involved in:",
                options: ["Receptor-mediated endocytosis", "Exocytosis", "Phagocytosis", "Pinocytosis"],
                correct: 0,
                explanation: "Clathrin-coated vesicles form during receptor-mediated endocytosis to internalize specific cargo."
            },
            {
                question: "The electrochemical gradient combines:",
                options: ["Concentration and pressure gradients", "Concentration and electrical gradients", "Electrical and pressure gradients", "Temperature and concentration gradients"],
                correct: 1,
                explanation: "Electrochemical gradients result from both concentration differences and electrical charge differences."
            },
            {
                question: "Symport transport moves:",
                options: ["One substance only", "Two substances in the same direction", "Two substances in opposite directions", "Three substances simultaneously"],
                correct: 1,
                explanation: "Symport (cotransport) moves two different substances in the same direction across a membrane."
            },

            // SPECIALIZED CELL STRUCTURES (Questions 76-90)
            {
                question: "Tight junctions function to:",
                options: ["Allow communication between cells", "Prevent leakage between cells", "Provide mechanical strength", "Enable cell movement"],
                correct: 1,
                explanation: "Tight junctions seal adjacent cells together, preventing leakage of materials between them."
            },
            {
                question: "Gap junctions allow passage of:",
                options: ["Large proteins", "Small molecules and ions", "Organelles", "DNA"],
                correct: 1,
                explanation: "Gap junctions permit the passage of small molecules and ions between adjacent cells."
            },
            {
                question: "Desmosomes provide:",
                options: ["Communication", "Mechanical strength", "Selective permeability", "Metabolic coupling"],
                correct: 1,
                explanation: "Desmosomes are anchoring junctions that provide mechanical strength and hold cells together."
            },
            {
                question: "Plasmodesmata are found in:",
                options: ["Animal cells", "Plant cells", "Bacterial cells", "Fungal cells"],
                correct: 1,
                explanation: "Plasmodesmata are channels connecting plant cells, allowing transport of materials between them."
            },
            {
                question: "The primary cell wall is:",
                options: ["Rigid and thick", "Flexible and thin", "Made of lignin", "Found in all cells"],
                correct: 1,
                explanation: "The primary cell wall is thin and flexible, composed mainly of cellulose microfibrils."
            },
            {
                question: "The secondary cell wall contains:",
                options: ["Cellulose only", "Lignin only", "Cellulose and lignin", "Proteins only"],
                correct: 2,
                explanation: "Secondary cell walls contain both cellulose and lignin, providing additional strength and rigidity."
            },
            {
                question: "Microvilli function to:",
                options: ["Increase surface area", "Provide motility", "Store nutrients", "Synthesize proteins"],
                correct: 0,
                explanation: "Microvilli are finger-like projections that increase cell surface area for absorption."
            },
            {
                question: "Cilia are involved in:",
                options: ["Cell movement", "Moving fluids over cell surface", "Sensory functions", "All of the above"],
                correct: 3,
                explanation: "Cilia function in cell locomotion, moving fluids, and serving as sensory organelles."
            },
            {
                question: "Flagella differ from cilia in:",
                options: ["Structure", "Length", "Number per cell", "Both length and number"],
                correct: 3,
                explanation: "Flagella are typically longer than cilia and fewer in number per cell."
            },
            {
                question: "The basal body of cilia and flagella is similar to:",
                options: ["Ribosome", "Centriole", "Mitochondria", "Nucleus"],
                correct: 1,
                explanation: "The basal body has the same 9+0 microtubule structure as centrioles."
            },
            {
                question: "Dynein arms in cilia:",
                options: ["Provide structural support", "Generate movement", "Store energy", "Synthesize proteins"],
                correct: 1,
                explanation: "Dynein arms are motor proteins that use ATP to generate sliding movement between microtubules."
            },
            {
                question: "The extracellular matrix is composed of:",
                options: ["Collagen", "Proteoglycans", "Fibronectin", "All of the above"],
                correct: 3,
                explanation: "The ECM contains collagen fibers, proteoglycans, fibronectin, and other structural proteins."
            },
            {
                question: "Integrins are:",
                options: ["Cytoplasmic proteins", "Transmembrane proteins", "Extracellular proteins", "Nuclear proteins"],
                correct: 1,
                explanation: "Integrins are transmembrane proteins that connect the cytoskeleton to the extracellular matrix."
            },
            {
                question: "The cell coat (glycocalyx) is important for:",
                options: ["Cell recognition", "Protection", "Adhesion", "All of the above"],
                correct: 3,
                explanation: "The glycocalyx plays roles in cell recognition, protection from damage, and cell adhesion."
            },
            {
                question: "Focal adhesions connect:",
                options: ["Cells to other cells", "Cells to extracellular matrix", "Organelles to cytoplasm", "Chromosomes to spindle"],
                correct: 1,
                explanation: "Focal adhesions are protein complexes that connect cells to the extracellular matrix."
            },

            // ADVANCED CELL BIOLOGY (Questions 91-100)
            {
                question: "The endosymbiotic theory explains the origin of:",
                options: ["Nucleus", "Mitochondria and chloroplasts", "Ribosomes", "Golgi apparatus"],
                correct: 1,
                explanation: "The endosymbiotic theory proposes that mitochondria and chloroplasts evolved from ancient bacterial endosymbionts."
            },
            {
                question: "Evidence for the endosymbiotic theory includes:",
                options: ["Double membranes", "Own DNA", "70S ribosomes", "All of the above"],
                correct: 3,
                explanation: "Mitochondria and chloroplasts have double membranes, circular DNA, and 70S ribosomes like bacteria."
            },
            {
                question: "Apoptosis is:",
                options: ["Uncontrolled cell death", "Programmed cell death", "Cell division", "Cell growth"],
                correct: 1,
                explanation: "Apoptosis is programmed cell death, a controlled process essential for development and health."
            },
            {
                question: "Autophagy involves:",
                options: ["Digestion of external materials", "Self-digestion of cellular components", "Protein synthesis", "DNA replication"],
                correct: 1,
                explanation: "Autophagy is the process where cells digest their own damaged or unnecessary components."
            },
            {
                question: "The signal recognition particle (SRP) is involved in:",
                options: ["DNA replication", "Protein targeting", "Cell division", "Lipid synthesis"],
                correct: 1,
                explanation: "SRP recognizes signal sequences and directs ribosomes to the endoplasmic reticulum."
            },
            {
                question: "Molecular chaperones help with:",
                options: ["Protein folding", "DNA repair", "Lipid synthesis", "Carbohydrate metabolism"],
                correct: 0,
                explanation: "Molecular chaperones assist in proper protein folding and prevent protein aggregation."
            },
            {
                question: "The unfolded protein response occurs when:",
                options: ["ER is overloaded with misfolded proteins", "DNA is damaged", "ATP levels are low", "Cell division begins"],
                correct: 0,
                explanation: "The UPR is activated when the ER accumulates misfolded proteins, triggering stress responses."
            },
            {
                question: "COPII vesicles transport materials:",
                options: ["From ER to Golgi", "From Golgi to ER", "From Golgi to plasma membrane", "From nucleus to cytoplasm"],
                correct: 0,
                explanation: "COPII-coated vesicles transport proteins from the endoplasmic reticulum to the Golgi apparatus."
            },
            {
                question: "COPI vesicles are involved in:",
                options: ["ER to Golgi transport", "Retrograde transport within Golgi", "Golgi to plasma membrane", "Endocytosis"],
                correct: 1,
                explanation: "COPI vesicles mediate retrograde transport from Golgi back to ER and within Golgi stack."
            },
            {
                question: "The cell cycle checkpoints ensure:",
                options: ["Proper DNA replication", "Correct chromosome attachment", "Cell size adequacy", "All of the above"],
                correct: 3,
                explanation: "Cell cycle checkpoints monitor DNA replication, chromosome attachment, and cell readiness for division."
            }
        ],
        'Biological Molecules': [
            // CARBOHYDRATES (Questions 1-25)
            {
                question: "The building blocks of carbohydrates are:",
                options: ["Amino acids", "Fatty acids", "Monosaccharides", "Nucleotides"],
                correct: 2,
                explanation: "Monosaccharides are the simplest carbohydrates and serve as building blocks for complex carbohydrates."
            },
            {
                question: "The most abundant carbohydrate in nature is:",
                options: ["Glucose", "Starch", "Cellulose", "Glycogen"],
                correct: 2,
                explanation: "Cellulose is the main component of plant cell walls and the most abundant organic compound on Earth."
            },
            {
                question: "Glucose has the molecular formula:",
                options: ["C₅H₁₀O₅", "C₆H₁₂O₆", "C₆H₁₀O₅", "C₁₂H₂₂O₁₁"],
                correct: 1,
                explanation: "Glucose is a hexose sugar with the molecular formula C₆H₁₂O₆."
            },
            {
                question: "Sucrose is composed of:",
                options: ["Glucose + Glucose", "Glucose + Fructose", "Glucose + Galactose", "Fructose + Galactose"],
                correct: 1,
                explanation: "Sucrose (table sugar) is a disaccharide made of glucose and fructose linked by a glycosidic bond."
            },
            {
                question: "Lactose is found in:",
                options: ["Plant cell walls", "Animal muscle", "Milk", "Fruits"],
                correct: 2,
                explanation: "Lactose is the primary sugar found in milk and dairy products."
            },
            {
                question: "The storage form of glucose in animals is:",
                options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
                correct: 2,
                explanation: "Glycogen is the branched polysaccharide that stores glucose in animal liver and muscles."
            },
            {
                question: "Starch is composed of:",
                options: ["Only amylose", "Only amylopectin", "Amylose and amylopectin", "Glucose and fructose"],
                correct: 2,
                explanation: "Starch consists of two components: amylose (linear) and amylopectin (branched)."
            },
            {
                question: "Chitin is found in:",
                options: ["Plant cell walls", "Insect exoskeletons", "Animal bones", "Bacterial cell walls"],
                correct: 1,
                explanation: "Chitin is a structural polysaccharide found in insect exoskeletons and fungal cell walls."
            },
            {
                question: "The bond between monosaccharides is called:",
                options: ["Peptide bond", "Glycosidic bond", "Ester bond", "Hydrogen bond"],
                correct: 1,
                explanation: "Glycosidic bonds link monosaccharides together to form disaccharides and polysaccharides."
            },
            {
                question: "Reducing sugars have:",
                options: ["No free aldehyde or ketone group", "A free aldehyde or ketone group", "Only ring structures", "No hydroxyl groups"],
                correct: 1,
                explanation: "Reducing sugars have a free aldehyde or ketone group that can reduce other compounds."
            },
            {
                question: "Which is a ketose sugar?",
                options: ["Glucose", "Galactose", "Fructose", "Ribose"],
                correct: 2,
                explanation: "Fructose is a ketose because it contains a ketone group, while others are aldoses."
            },
            {
                question: "The optical activity of sugars is due to:",
                options: ["Multiple hydroxyl groups", "Chiral carbon atoms", "Ring structure", "Glycosidic bonds"],
                correct: 1,
                explanation: "Chiral (asymmetric) carbon atoms cause optical activity, rotating plane-polarized light."
            },
            {
                question: "Maltose is formed by:",
                options: ["Glucose + Fructose", "Two glucose units", "Glucose + Galactose", "Two fructose units"],
                correct: 1,
                explanation: "Maltose is a disaccharide formed by two glucose units linked by α-1,4-glycosidic bond."
            },
            {
                question: "The simplest carbohydrate is:",
                options: ["Glucose", "Ribose", "Glyceraldehyde", "Fructose"],
                correct: 2,
                explanation: "Glyceraldehyde (C₃H₆O₃) is the simplest carbohydrate with one chiral carbon."
            },
            {
                question: "Pentose sugars have:",
                options: ["3 carbon atoms", "4 carbon atoms", "5 carbon atoms", "6 carbon atoms"],
                correct: 2,
                explanation: "Pentose sugars contain 5 carbon atoms, examples include ribose and deoxyribose."
            },
            {
                question: "Cellulose cannot be digested by humans because:",
                options: ["It's too large", "Humans lack cellulase enzyme", "It's insoluble", "It's toxic"],
                correct: 1,
                explanation: "Humans lack the cellulase enzyme needed to break β-1,4-glycosidic bonds in cellulose."
            },
            {
                question: "The α-1,6-glycosidic bonds in glycogen occur at:",
                options: ["Every glucose unit", "Every 8-12 glucose units", "Only at the ends", "Random intervals"],
                correct: 1,
                explanation: "Glycogen has α-1,6-glycosidic branch points approximately every 8-12 glucose units."
            },
            {
                question: "Ribose differs from glucose in having:",
                options: ["More carbon atoms", "Fewer carbon atoms", "Different functional groups", "No hydroxyl groups"],
                correct: 1,
                explanation: "Ribose is a pentose (5 carbons) while glucose is a hexose (6 carbons)."
            },
            {
                question: "The anomeric carbon in glucose is carbon number:",
                options: ["1", "2", "3", "6"],
                correct: 0,
                explanation: "The anomeric carbon is C-1 in aldoses, which becomes chiral when the ring forms."
            },
            {
                question: "Hemicellulose differs from cellulose in:",
                options: ["Having branched structure", "Being shorter", "Having different linkages", "All of the above"],
                correct: 3,
                explanation: "Hemicellulose is shorter, branched, and has various glycosidic linkages unlike pure cellulose."
            },
            {
                question: "The Fehling's test detects:",
                options: ["All carbohydrates", "Reducing sugars", "Non-reducing sugars", "Polysaccharides only"],
                correct: 1,
                explanation: "Fehling's test specifically detects reducing sugars by their ability to reduce copper ions."
            },
            {
                question: "Inulin is a:",
                options: ["Storage polysaccharide in plants", "Structural polysaccharide", "Protein", "Lipid"],
                correct: 0,
                explanation: "Inulin is a storage polysaccharide made of fructose units, found in some plants."
            },
            {
                question: "The sweetest naturally occurring sugar is:",
                options: ["Glucose", "Sucrose", "Fructose", "Lactose"],
                correct: 2,
                explanation: "Fructose is the sweetest naturally occurring sugar, about 1.7 times sweeter than sucrose."
            },
            {
                question: "Pectin is important for:",
                options: ["Cell wall structure in plants", "Energy storage", "Protein synthesis", "DNA replication"],
                correct: 0,
                explanation: "Pectin is a structural polysaccharide that helps maintain plant cell wall integrity."
            },
            {
                question: "The configuration of the hydroxyl group on the anomeric carbon determines:",
                options: ["α or β form", "D or L form", "Molecular weight", "Solubility"],
                correct: 0,
                explanation: "The position of the OH group on the anomeric carbon determines α (down) or β (up) configuration."
            },

            // PROTEINS AND AMINO ACIDS (Questions 26-50)
            {
                question: "The building blocks of proteins are:",
                options: ["Nucleotides", "Amino acids", "Fatty acids", "Monosaccharides"],
                correct: 1,
                explanation: "Proteins are polymers made up of amino acid monomers linked by peptide bonds."
            },
            {
                question: "How many standard amino acids are used to build proteins?",
                options: ["16", "20", "22", "64"],
                correct: 1,
                explanation: "There are 20 standard amino acids that are genetically encoded for protein synthesis."
            },
            {
                question: "The bond between amino acids is called:",
                options: ["Glycosidic bond", "Peptide bond", "Ester bond", "Ionic bond"],
                correct: 1,
                explanation: "Peptide bonds form between the amino group of one amino acid and the carboxyl group of another."
            },
            {
                question: "The primary structure of a protein refers to:",
                options: ["3D folding pattern", "Amino acid sequence", "Hydrogen bonding pattern", "Quaternary associations"],
                correct: 1,
                explanation: "Primary structure is the linear sequence of amino acids in a protein chain."
            },
            {
                question: "Which amino acid can form disulfide bridges?",
                options: ["Glycine", "Alanine", "Cysteine", "Proline"],
                correct: 2,
                explanation: "Cysteine contains sulfur and can form disulfide bonds with other cysteine residues."
            },
            {
                question: "The secondary structure of proteins includes:",
                options: ["α-helices", "β-sheets", "Random coils", "All of the above"],
                correct: 3,
                explanation: "Secondary structure encompasses α-helices, β-sheets, and random coil regions."
            },
            {
                question: "Which amino acid is known as the 'helix breaker'?",
                options: ["Glycine", "Proline", "Alanine", "Leucine"],
                correct: 1,
                explanation: "Proline's rigid ring structure disrupts α-helical conformations, earning it the 'helix breaker' name."
            },
            {
                question: "Essential amino acids are those that:",
                options: ["Are most important", "Cannot be synthesized by the body", "Are found in all proteins", "Have special functions"],
                correct: 1,
                explanation: "Essential amino acids cannot be synthesized by the human body and must be obtained from diet."
            },
            {
                question: "The isoelectric point (pI) of a protein is when:",
                options: ["It is most stable", "Net charge is zero", "It denatures", "It's most active"],
                correct: 1,
                explanation: "At the isoelectric point, the protein has no net electrical charge."
            },
            {
                question: "Hemoglobin is an example of:",
                options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
                correct: 3,
                explanation: "Hemoglobin has quaternary structure with four polypeptide subunits working together."
            },
            {
                question: "Protein denaturation involves:",
                options: ["Breaking peptide bonds", "Loss of native structure", "Amino acid degradation", "All of the above"],
                correct: 1,
                explanation: "Denaturation disrupts protein's native 3D structure without breaking peptide bonds."
            },
            {
                question: "Which amino acid has the smallest side chain?",
                options: ["Alanine", "Glycine", "Valine", "Serine"],
                correct: 1,
                explanation: "Glycine has only a hydrogen atom as its side chain, making it the smallest amino acid."
            },
            {
                question: "Collagen is rich in:",
                options: ["Tryptophan", "Glycine and proline", "Cysteine", "Methionine"],
                correct: 1,
                explanation: "Collagen contains abundant glycine and proline, giving it its unique triple helix structure."
            },
            {
                question: "The peptide bond has:",
                options: ["Single bond character", "Double bond character", "Partial double bond character", "Triple bond character"],
                correct: 2,
                explanation: "Peptide bonds have partial double bond character due to resonance, restricting rotation."
            },
            {
                question: "Which amino acid contains an indole ring?",
                options: ["Phenylalanine", "Tyrosine", "Tryptophan", "Histidine"],
                correct: 2,
                explanation: "Tryptophan contains an indole ring system in its side chain."
            },
            {
                question: "Keratin is an example of:",
                options: ["Globular protein", "Fibrous protein", "Membrane protein", "Enzyme"],
                correct: 1,
                explanation: "Keratin is a fibrous structural protein found in hair, nails, and skin."
            },
            {
                question: "The amino acid that can exist in both D and L forms in proteins is:",
                options: ["Glycine", "All amino acids", "None", "Proline"],
                correct: 2,
                explanation: "All standard amino acids in proteins are in the L-configuration; glycine is achiral."
            },
            {
                question: "Protein folding is assisted by:",
                options: ["Chaperones", "Enzymes", "Cofactors", "Inhibitors"],
                correct: 0,
                explanation: "Molecular chaperones help proteins fold correctly and prevent misfolding."
            },
            {
                question: "The Ramachandran plot shows:",
                options: ["Amino acid sequences", "Allowed backbone conformations", "Protein sizes", "Binding sites"],
                correct: 1,
                explanation: "Ramachandran plots display allowed backbone dihedral angles (φ and ψ) in proteins."
            },
            {
                question: "Which amino acid can be phosphorylated for regulation?",
                options: ["Glycine", "Serine", "Alanine", "Valine"],
                correct: 1,
                explanation: "Serine (and threonine, tyrosine) can be phosphorylated for protein regulation."
            },
            {
                question: "Protein synthesis occurs at:",
                options: ["Nucleus", "Mitochondria", "Ribosomes", "Golgi apparatus"],
                correct: 2,
                explanation: "Ribosomes are the cellular machinery where protein synthesis (translation) occurs."
            },
            {
                question: "The genetic code for amino acids uses:",
                options: ["1 nucleotide", "2 nucleotides", "3 nucleotides", "4 nucleotides"],
                correct: 2,
                explanation: "Each amino acid is encoded by a triplet of nucleotides called a codon."
            },
            {
                question: "Which amino acid serves as a precursor for serotonin?",
                options: ["Tyrosine", "Tryptophan", "Phenylalanine", "Histidine"],
                correct: 1,
                explanation: "Tryptophan is the precursor for the neurotransmitter serotonin."
            },
            {
                question: "Insulin is an example of:",
                options: ["Structural protein", "Transport protein", "Hormone protein", "Storage protein"],
                correct: 2,
                explanation: "Insulin is a protein hormone that regulates blood glucose levels."
            },
            {
                question: "The α-helix is stabilized by:",
                options: ["Disulfide bonds", "Hydrogen bonds", "Ionic bonds", "Hydrophobic interactions"],
                correct: 1,
                explanation: "α-helices are stabilized by hydrogen bonds between backbone atoms."
            },

            // LIPIDS (Questions 51-70)
            {
                question: "Saturated fats differ from unsaturated fats in that they:",
                options: ["Have double bonds", "Are liquid at room temperature", "Have no double bonds", "Contain more carbon atoms"],
                correct: 2,
                explanation: "Saturated fats have no double bonds between carbon atoms and are typically solid at room temperature."
            },
            {
                question: "Phospholipids are major components of:",
                options: ["Cell membranes", "Energy storage", "Enzymes", "Genetic material"],
                correct: 0,
                explanation: "Phospholipids are the primary structural components of cell membranes."
            },
            {
                question: "A triglyceride consists of:",
                options: ["3 fatty acids + glycerol", "3 amino acids + glycerol", "3 sugars + glycerol", "3 phosphates + glycerol"],
                correct: 0,
                explanation: "Triglycerides are composed of three fatty acids attached to a glycerol backbone."
            },
            {
                question: "Cholesterol is a type of:",
                options: ["Phospholipid", "Fatty acid", "Steroid", "Protein"],
                correct: 2,
                explanation: "Cholesterol is a steroid lipid with a characteristic four-ring structure."
            },
            {
                question: "Essential fatty acids are:",
                options: ["Always saturated", "Cannot be synthesized by the body", "Not needed for health", "Only found in animals"],
                correct: 1,
                explanation: "Essential fatty acids cannot be synthesized by the human body and must be obtained from diet."
            },
            {
                question: "The most abundant fatty acid in olive oil is:",
                options: ["Palmitic acid", "Stearic acid", "Oleic acid", "Linoleic acid"],
                correct: 2,
                explanation: "Oleic acid, a monounsaturated fatty acid, is the predominant fatty acid in olive oil."
            },
            {
                question: "Waxes function primarily as:",
                options: ["Energy storage", "Waterproofing", "Signaling", "Structural support"],
                correct: 1,
                explanation: "Waxes provide waterproofing and protection in plants and animals."
            },
            {
                question: "The double bonds in most natural unsaturated fatty acids are:",
                options: ["Trans configuration", "Cis configuration", "Both cis and trans", "Neither cis nor trans"],
                correct: 1,
                explanation: "Natural unsaturated fatty acids typically have cis double bonds, creating kinks in the chain."
            },
            {
                question: "Sphingolipids contain:",
                options: ["Glycerol backbone", "Sphingosine backbone", "Cholesterol backbone", "Protein backbone"],
                correct: 1,
                explanation: "Sphingolipids have a sphingosine backbone instead of glycerol."
            },
            {
                question: "Lipoproteins transport:",
                options: ["Amino acids", "Sugars", "Lipids", "Nucleotides"],
                correct: 2,
                explanation: "Lipoproteins are complexes that transport lipids in the bloodstream."
            },
            {
                question: "The melting point of fatty acids increases with:",
                options: ["More double bonds", "Shorter chain length", "Longer chain length", "More branching"],
                correct: 2,
                explanation: "Longer fatty acid chains have higher melting points due to increased van der Waals forces."
            },
            {
                question: "Prostaglandins are derived from:",
                options: ["Cholesterol", "Arachidonic acid", "Glucose", "Amino acids"],
                correct: 1,
                explanation: "Prostaglandins are hormone-like molecules derived from arachidonic acid."
            },
            {
                question: "The glycerol molecule has:",
                options: ["1 hydroxyl group", "2 hydroxyl groups", "3 hydroxyl groups", "4 hydroxyl groups"],
                correct: 2,
                explanation: "Glycerol has three hydroxyl groups, allowing attachment of three fatty acids."
            },
            {
                question: "Soap is made by:",
                options: ["Oxidizing fats", "Reducing fats", "Saponifying fats", "Hydrolyzing proteins"],
                correct: 2,
                explanation: "Soap is produced by saponification - treating fats with strong base (NaOH or KOH)."
            },
            {
                question: "Which vitamin is fat-soluble?",
                options: ["Vitamin C", "Vitamin B12", "Vitamin D", "Vitamin B6"],
                correct: 2,
                explanation: "Vitamin D is fat-soluble, along with vitamins A, E, and K."
            },
            {
                question: "Lecithin is a type of:",
                options: ["Triglyceride", "Phospholipid", "Steroid", "Fatty acid"],
                correct: 1,
                explanation: "Lecithin (phosphatidylcholine) is a phospholipid found in cell membranes."
            },
            {
                question: "The fluidity of cell membranes decreases with:",
                options: ["More cholesterol", "More unsaturated fatty acids", "Higher temperature", "Shorter fatty acid chains"],
                correct: 0,
                explanation: "Cholesterol decreases membrane fluidity by filling spaces between phospholipids."
            },
            {
                question: "Lipids are generally:",
                options: ["Hydrophilic", "Hydrophobic", "Amphipathic", "Water-soluble"],
                correct: 1,
                explanation: "Most lipids are hydrophobic (water-repelling) due to their largely hydrocarbon structure."
            },
            {
                question: "The omega designation in fatty acids refers to:",
                options: ["First carbon", "Last carbon", "Double bond position from methyl end", "Carboxyl carbon"],
                correct: 2,
                explanation: "Omega notation indicates the position of the first double bond from the methyl (omega) end."
            },
            {
                question: "Trans fats are primarily:",
                options: ["Natural products", "Artificial products", "Essential nutrients", "Vitamins"],
                correct: 1,
                explanation: "Most trans fats are artificially produced through hydrogenation of vegetable oils."
            },

            // NUCLEIC ACIDS (Questions 71-85)
            {
                question: "DNA differs from RNA in that DNA:",
                options: ["Contains ribose sugar", "Is single-stranded", "Contains thymine instead of uracil", "Contains uracil instead of thymine"],
                correct: 2,
                explanation: "DNA contains thymine (T) while RNA contains uracil (U) as one of its four bases."
            },
            {
                question: "Which type of bond holds the two strands of DNA together?",
                options: ["Ionic bonds", "Covalent bonds", "Hydrogen bonds", "Van der Waals forces"],
                correct: 2,
                explanation: "Hydrogen bonds form between complementary base pairs (A-T and G-C) holding DNA strands together."
            },
            {
                question: "The sugar in DNA is:",
                options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
                correct: 1,
                explanation: "DNA contains deoxyribose sugar, which lacks a hydroxyl group on the 2' carbon."
            },
            {
                question: "How many hydrogen bonds form between G and C?",
                options: ["1", "2", "3", "4"],
                correct: 2,
                explanation: "Guanine and cytosine form three hydrogen bonds, making G-C pairs stronger than A-T pairs."
            },
            {
                question: "The backbone of nucleic acids consists of:",
                options: ["Sugar and bases", "Phosphate and bases", "Sugar and phosphate", "Bases only"],
                correct: 2,
                explanation: "The backbone is formed by alternating sugar and phosphate groups linked by phosphodiester bonds."
            },
            {
                question: "Which base is found in RNA but not DNA?",
                options: ["Adenine", "Guanine", "Cytosine", "Uracil"],
                correct: 3,
                explanation: "Uracil is found in RNA and pairs with adenine, replacing thymine found in DNA."
            },
            {
                question: "The two strands of DNA are:",
                options: ["Parallel", "Antiparallel", "Perpendicular", "Random"],
                correct: 1,
                explanation: "DNA strands run in opposite directions (antiparallel), one 5' to 3' and the other 3' to 5'."
            },
            {
                question: "tRNA molecules function to:",
                options: ["Store genetic information", "Transfer amino acids", "Catalyze reactions", "Regulate genes"],
                correct: 1,
                explanation: "Transfer RNA (tRNA) carries specific amino acids to ribosomes during protein synthesis."
            },
            {
                question: "The central dogma of molecular biology states:",
                options: ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"],
                correct: 0,
                explanation: "The central dogma describes information flow: DNA → RNA → Protein."
            },
            {
                question: "Purines include:",
                options: ["Adenine and Guanine", "Cytosine and Thymine", "Adenine and Cytosine", "Guanine and Thymine"],
                correct: 0,
                explanation: "Purines are larger bases with two rings: adenine (A) and guanine (G)."
            },
            {
                question: "Pyrimidines include:",
                options: ["Adenine and Guanine", "Cytosine and Thymine", "Adenine and Cytosine", "Guanine and Uracil"],
                correct: 1,
                explanation: "Pyrimidines are smaller bases with one ring: cytosine (C), thymine (T), and uracil (U)."
            },
            {
                question: "The 5' end of nucleic acids has:",
                options: ["Free hydroxyl group", "Free phosphate group", "Free base", "Nothing attached"],
                correct: 1,
                explanation: "The 5' end has a free phosphate group attached to the 5' carbon of the sugar."
            },
            {
                question: "Chargaff's rules state that:",
                options: ["A = T and G = C", "A = G and T = C", "A = C and T = G", "All bases are equal"],
                correct: 0,
                explanation: "Chargaff's rules state that the amount of adenine equals thymine, and guanine equals cytosine."
            },
            {
                question: "The double helix structure of DNA was discovered by:",
                options: ["Darwin", "Mendel", "Watson and Crick", "Pasteur"],
                correct: 2,
                explanation: "James Watson and Francis Crick discovered the double helix structure of DNA in 1953."
            },
            {
                question: "Ribozymes are:",
                options: ["DNA molecules", "RNA molecules with enzymatic activity", "Protein enzymes", "Lipid molecules"],
                correct: 1,
                explanation: "Ribozymes are RNA molecules that can catalyze biochemical reactions like enzymes."
            },

            // ENZYMES AND ATP (Questions 86-100)
            {
                question: "Enzymes are primarily composed of:",
                options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
                correct: 2,
                explanation: "Most enzymes are proteins that catalyze biochemical reactions by lowering activation energy."
            },
            {
                question: "ATP stands for:",
                options: ["Adenine Triphosphate", "Adenosine Triphosphate", "Amino Triphosphate", "Adenosine Tripeptide"],
                correct: 1,
                explanation: "ATP (Adenosine Triphosphate) is the universal energy currency of cells."
            },
            {
                question: "The active site of an enzyme:",
                options: ["Binds to the substrate", "Is where the reaction occurs", "Determines specificity", "All of the above"],
                correct: 3,
                explanation: "The active site binds substrate, catalyzes the reaction, and determines enzyme specificity."
            },
            {
                question: "Competitive inhibition occurs when:",
                options: ["Inhibitor binds to active site", "Inhibitor binds to allosteric site", "Substrate concentration is low", "Temperature is too high"],
                correct: 0,
                explanation: "Competitive inhibitors compete with substrate for binding to the enzyme's active site."
            },
            {
                question: "The lock and key model describes:",
                options: ["DNA replication", "Enzyme-substrate interaction", "Membrane transport", "Protein synthesis"],
                correct: 1,
                explanation: "The lock and key model explains how enzymes (lock) specifically bind substrates (key)."
            },
            {
                question: "Enzyme activity is affected by:",
                options: ["Temperature", "pH", "Substrate concentration", "All of the above"],
                correct: 3,
                explanation: "Enzyme activity depends on temperature, pH, substrate concentration, and other factors."
            },
            {
                question: "Allosteric enzymes have:",
                options: ["One binding site", "Multiple binding sites", "No binding sites", "Only active sites"],
                correct: 1,
                explanation: "Allosteric enzymes have multiple binding sites including active and regulatory sites."
            },
            {
                question: "Cofactors are:",
                options: ["Always proteins", "Non-protein helper molecules", "Always enzymes", "Always inhibitors"],
                correct: 1,
                explanation: "Cofactors are non-protein molecules (metals or organic) that help enzymes function."
            },
            {
                question: "Coenzymes are:",
                options: ["Metal ions", "Organic cofactors", "Protein cofactors", "Inhibitory molecules"],
                correct: 1,
                explanation: "Coenzymes are organic cofactors, often derived from vitamins, that assist enzymes."
            },
            {
                question: "The induced fit model suggests:",
                options: ["Enzyme shape never changes", "Enzyme changes shape upon substrate binding", "Only substrate changes shape", "Neither changes shape"],
                correct: 1,
                explanation: "The induced fit model proposes that enzyme shape changes to optimize substrate binding."
            },
            {
                question: "Enzyme kinetics studies:",
                options: ["Enzyme structure", "Reaction rates", "Enzyme synthesis", "Enzyme degradation"],
                correct: 1,
                explanation: "Enzyme kinetics examines the rates of enzyme-catalyzed reactions and factors affecting them."
            },
            {
                question: "The Km value represents:",
                options: ["Maximum velocity", "Substrate concentration at half Vmax", "Enzyme concentration", "Inhibitor concentration"],
                correct: 1,
                explanation: "Km (Michaelis constant) is the substrate concentration at which reaction rate is half-maximal."
            },
            {
                question: "Feedback inhibition occurs when:",
                options: ["Product inhibits its own synthesis", "Substrate inhibits the enzyme", "Temperature is too low", "pH is wrong"],
                correct: 0,
                explanation: "Feedback inhibition is when the end product of a pathway inhibits an enzyme in that pathway."
            },
            {
                question: "ATP hydrolysis releases approximately:",
                options: ["7.3 kcal/mol", "30.5 kcal/mol", "100 kcal/mol", "1 kcal/mol"],
                correct: 0,
                explanation: "ATP hydrolysis releases about 7.3 kcal/mol (30.5 kJ/mol) under standard conditions."
            },
            {
                question: "The phosphate bonds in ATP are called:",
                options: ["Low-energy bonds", "High-energy bonds", "Covalent bonds only", "Ionic bonds only"],
                correct: 1,
                explanation: "The phosphoanhydride bonds in ATP are high-energy bonds that release energy when broken."
            }
        ],
        'Coordination & Control': [
            // RECEPTORS AS TRANSDUCERS (Questions 1-15)
            {
                question: "Receptors function as:",
                options: ["Energy producers", "Transducers", "Signal blockers", "Energy consumers"],
                correct: 1,
                explanation: "Receptors are specialized structures that convert various stimuli into electrical signals (transduction)."
            },
            {
                question: "Photoreceptors are sensitive to:",
                options: ["Sound waves", "Light", "Chemical changes", "Temperature"],
                correct: 1,
                explanation: "Photoreceptors in the eyes detect light stimuli and convert them to nerve impulses."
            },
            {
                question: "Mechanoreceptors respond to:",
                options: ["Light", "Chemicals", "Mechanical pressure", "Temperature"],
                correct: 2,
                explanation: "Mechanoreceptors detect mechanical stimuli like pressure, touch, and vibration."
            },
            {
                question: "Chemoreceptors detect:",
                options: ["Light intensity", "Chemical substances", "Sound waves", "Magnetic fields"],
                correct: 1,
                explanation: "Chemoreceptors respond to chemical stimuli, including taste and smell molecules."
            },
            {
                question: "Thermoreceptors are found in:",
                options: ["Eyes only", "Ears only", "Skin and hypothalamus", "Nose only"],
                correct: 2,
                explanation: "Thermoreceptors in skin detect external temperature, while hypothalamic ones monitor body temperature."
            },
            {
                question: "The process of converting stimuli into nerve impulses is called:",
                options: ["Translation", "Transcription", "Transduction", "Transformation"],
                correct: 2,
                explanation: "Transduction is the conversion of stimulus energy into electrical nerve impulses."
            },
            {
                question: "Proprioceptors detect:",
                options: ["Body position", "Light intensity", "Sound pitch", "Chemical concentration"],
                correct: 0,
                explanation: "Proprioceptors provide information about body position and movement in space."
            },
            {
                question: "Nociceptors are specialized for detecting:",
                options: ["Pleasant sensations", "Pain", "Temperature", "Pressure"],
                correct: 1,
                explanation: "Nociceptors are pain receptors that detect harmful or potentially damaging stimuli."
            },
            {
                question: "The adequate stimulus for a receptor is:",
                options: ["Any strong stimulus", "The specific type of energy it detects", "Electrical current only", "Chemical signals only"],
                correct: 1,
                explanation: "Each receptor type is most sensitive to its adequate stimulus - the specific energy form it's designed to detect."
            },
            {
                question: "Sensory adaptation refers to:",
                options: ["Increased sensitivity over time", "Decreased response to constant stimuli", "Receptor damage", "Stimulus amplification"],
                correct: 1,
                explanation: "Sensory adaptation is the decreased responsiveness to unchanging stimuli over time."
            },
            {
                question: "The retina contains:",
                options: ["Only rods", "Only cones", "Both rods and cones", "Neither rods nor cones"],
                correct: 2,
                explanation: "The retina contains both rods (for dim light vision) and cones (for color and bright light vision)."
            },
            {
                question: "Taste buds are examples of:",
                options: ["Mechanoreceptors", "Photoreceptors", "Chemoreceptors", "Thermoreceptors"],
                correct: 2,
                explanation: "Taste buds contain chemoreceptors that detect dissolved chemical substances in food."
            },
            {
                question: "The threshold of a receptor is:",
                options: ["Maximum stimulus intensity", "Minimum stimulus intensity for response", "Average stimulus intensity", "Optimal stimulus intensity"],
                correct: 1,
                explanation: "Threshold is the minimum stimulus intensity required to generate a response in the receptor."
            },
            {
                question: "Receptor potential is:",
                options: ["Always the same magnitude", "Graded according to stimulus intensity", "Only present in damaged receptors", "Independent of stimulus strength"],
                correct: 1,
                explanation: "Receptor potential magnitude varies with stimulus intensity - stronger stimuli produce larger potentials."
            },
            {
                question: "The ear contains receptors for:",
                options: ["Hearing only", "Balance only", "Both hearing and balance", "Neither hearing nor balance"],
                correct: 2,
                explanation: "The ear contains both auditory receptors (cochlea) and vestibular receptors (semicircular canals)."
            },

            // NEURON STRUCTURE (Questions 16-35)
            {
                question: "The cell body of a neuron is also called:",
                options: ["Axon", "Dendrite", "Soma", "Synapse"],
                correct: 2,
                explanation: "The cell body or soma contains the nucleus and most organelles of the neuron."
            },
            {
                question: "Dendrites function to:",
                options: ["Send signals away from cell body", "Receive signals toward cell body", "Store neurotransmitters", "Produce myelin"],
                correct: 1,
                explanation: "Dendrites are branched extensions that receive signals from other neurons and conduct them toward the cell body."
            },
            {
                question: "The axon conducts impulses:",
                options: ["Toward the cell body", "Away from the cell body", "In both directions equally", "Only when damaged"],
                correct: 1,
                explanation: "Axons conduct nerve impulses away from the cell body toward other neurons or target organs."
            },
            {
                question: "Myelin sheath is produced by:",
                options: ["Neurons only", "Schwann cells in PNS", "Astrocytes only", "Red blood cells"],
                correct: 1,
                explanation: "In the peripheral nervous system, Schwann cells wrap around axons to form the myelin sheath."
            },
            {
                question: "The main function of myelin sheath is to:",
                options: ["Slow down impulses", "Insulate and speed up impulses", "Store nutrients", "Produce neurotransmitters"],
                correct: 1,
                explanation: "Myelin acts as insulation, increasing the speed of nerve impulse conduction through saltatory conduction."
            },
            {
                question: "Nodes of Ranvier are:",
                options: ["Gaps between myelin segments", "Type of neurotransmitter", "Parts of dendrites", "Brain regions"],
                correct: 0,
                explanation: "Nodes of Ranvier are unmyelinated gaps between myelin segments where action potentials are regenerated."
            },
            {
                question: "A typical motor neuron has:",
                options: ["No dendrites", "One axon and multiple dendrites", "Multiple axons", "No cell body"],
                correct: 1,
                explanation: "Motor neurons typically have one long axon and multiple branched dendrites extending from the cell body."
            },
            {
                question: "The axon hillock is where:",
                options: ["Dendrites branch", "Action potentials are initiated", "Neurotransmitters are stored", "Myelin is produced"],
                correct: 1,
                explanation: "The axon hillock is the junction between cell body and axon where action potentials are typically initiated."
            },
            {
                question: "Nissl bodies in neurons are:",
                options: ["Mitochondria", "Rough endoplasmic reticulum", "Nuclei", "Lysosomes"],
                correct: 1,
                explanation: "Nissl bodies are clusters of rough ER involved in protein synthesis in neural cell bodies."
            },
            {
                question: "The longest part of a motor neuron is typically:",
                options: ["Cell body", "Dendrites", "Axon", "Nucleus"],
                correct: 2,
                explanation: "Motor neuron axons can be over a meter long, extending from spinal cord to muscles."
            },
            {
                question: "Unmyelinated axons conduct impulses:",
                options: ["Faster than myelinated axons", "Slower than myelinated axons", "At the same speed as myelinated axons", "Not at all"],
                correct: 1,
                explanation: "Unmyelinated axons conduct impulses slower because the signal travels continuously along the membrane."
            },
            {
                question: "The terminal buttons of an axon contain:",
                options: ["Nuclei", "Mitochondria and synaptic vesicles", "Ribosomes only", "Myelin"],
                correct: 1,
                explanation: "Axon terminals contain mitochondria for energy and synaptic vesicles storing neurotransmitters."
            },
            {
                question: "Multipolar neurons have:",
                options: ["One process", "Two processes", "Many processes", "No processes"],
                correct: 2,
                explanation: "Multipolar neurons have multiple dendrites and one axon extending from the cell body."
            },
            {
                question: "Bipolar neurons are commonly found in:",
                options: ["Motor pathways", "Sensory organs", "Brain stem", "Spinal cord"],
                correct: 1,
                explanation: "Bipolar neurons are found in special sensory organs like the retina and olfactory epithelium."
            },
            {
                question: "The cytoplasm of the axon is called:",
                options: ["Axoplasm", "Neuroplasm", "Myelin", "Cytosol"],
                correct: 0,
                explanation: "Axoplasm is the cytoplasm within the axon, continuous with the cell body cytoplasm."
            },
            {
                question: "Schwann cells in the PNS are equivalent to which cells in the CNS?",
                options: ["Astrocytes", "Oligodendrocytes", "Microglia", "Ependymal cells"],
                correct: 1,
                explanation: "Oligodendrocytes in the CNS and Schwann cells in the PNS both form myelin sheaths."
            },
            {
                question: "The neurilemma is:",
                options: ["The myelin sheath", "The outer membrane of Schwann cells", "Part of the axon", "A type of neurotransmitter"],
                correct: 1,
                explanation: "The neurilemma is the outer nucleated layer of Schwann cells that aids in nerve regeneration."
            },
            {
                question: "Saltatory conduction occurs in:",
                options: ["Unmyelinated axons", "Myelinated axons", "Cell bodies", "Dendrites"],
                correct: 1,
                explanation: "Saltatory conduction is the rapid jumping of action potentials between nodes in myelinated axons."
            },
            {
                question: "The diameter of an axon affects:",
                options: ["Conduction speed", "Neurotransmitter type", "Cell body size", "Number of dendrites"],
                correct: 0,
                explanation: "Larger diameter axons conduct impulses faster due to decreased resistance to current flow."
            },
            {
                question: "Collateral branches are:",
                options: ["Side branches of axons", "Types of dendrites", "Glial cells", "Neurotransmitters"],
                correct: 0,
                explanation: "Collateral branches are side branches that allow axons to communicate with multiple targets."
            },

            // NERVE IMPULSE (Questions 36-55)
            {
                question: "A nerve impulse is also called:",
                options: ["Action potential", "Resting potential", "Receptor potential", "Synaptic potential"],
                correct: 0,
                explanation: "A nerve impulse is an action potential - a rapid change in membrane potential that travels along the axon."
            },
            {
                question: "The resting potential of a typical neuron is approximately:",
                options: ["+70 mV", "-70 mV", "0 mV", "+35 mV"],
                correct: 1,
                explanation: "The resting potential is about -70 mV, with the inside of the neuron negative relative to outside."
            },
            {
                question: "The sodium-potassium pump maintains:",
                options: ["Equal Na+ and K+ concentrations", "High Na+ inside, low K+ outside", "Low Na+ inside, high K+ outside", "No concentration gradients"],
                correct: 2,
                explanation: "The Na+/K+ pump maintains low sodium and high potassium concentrations inside the cell."
            },
            {
                question: "During depolarization:",
                options: ["Na+ channels open", "K+ channels open", "Ca2+ channels close", "The membrane becomes more negative"],
                correct: 0,
                explanation: "Depolarization involves opening of voltage-gated sodium channels, allowing Na+ influx."
            },
            {
                question: "The threshold potential is typically around:",
                options: ["-70 mV", "-55 mV", "+35 mV", "0 mV"],
                correct: 1,
                explanation: "Threshold is usually around -55 mV, the point where voltage-gated Na+ channels open rapidly."
            },
            {
                question: "Repolarization is caused by:",
                options: ["Na+ influx", "K+ efflux", "Ca2+ influx", "Cl- efflux"],
                correct: 1,
                explanation: "Repolarization occurs when K+ channels open and K+ flows out, restoring negative membrane potential."
            },
            {
                question: "The absolute refractory period is when:",
                options: ["No stimulus can trigger an action potential", "Only strong stimuli work", "The neuron is most excitable", "Multiple action potentials occur"],
                correct: 0,
                explanation: "During the absolute refractory period, sodium channels are inactivated and no action potential can be generated."
            },
            {
                question: "Action potentials follow the:",
                options: ["Graded response law", "All-or-none law", "Partial response law", "Variable response law"],
                correct: 1,
                explanation: "Action potentials follow the all-or-none law - they either occur completely or not at all."
            },
            {
                question: "The speed of nerve conduction is fastest in:",
                options: ["Small unmyelinated fibers", "Large unmyelinated fibers", "Small myelinated fibers", "Large myelinated fibers"],
                correct: 3,
                explanation: "Large myelinated fibers conduct fastest due to both large diameter and saltatory conduction."
            },
            {
                question: "Hyperpolarization makes a neuron:",
                options: ["More likely to fire", "Less likely to fire", "Unable to change", "Continuously active"],
                correct: 1,
                explanation: "Hyperpolarization makes the membrane potential more negative, moving away from threshold."
            },
            {
                question: "Local anesthetics work by:",
                options: ["Enhancing Na+ channels", "Blocking Na+ channels", "Opening K+ channels", "Stimulating receptors"],
                correct: 1,
                explanation: "Local anesthetics block voltage-gated sodium channels, preventing action potential generation."
            },
            {
                question: "The refractory period ensures:",
                options: ["Continuous firing", "Unidirectional conduction", "Stronger signals", "Slower conduction"],
                correct: 1,
                explanation: "The refractory period prevents backward propagation, ensuring unidirectional impulse conduction."
            },
            {
                question: "In unmyelinated axons, action potentials:",
                options: ["Jump between nodes", "Travel continuously", "Don't propagate", "Move backwards"],
                correct: 1,
                explanation: "In unmyelinated axons, action potentials propagate continuously along the entire membrane."
            },
            {
                question: "Cable properties of axons refer to:",
                options: ["Strength like cables", "Passive electrical conduction", "Ability to bend", "Myelin thickness"],
                correct: 1,
                explanation: "Cable properties describe how electrical signals decay with distance in passive conduction."
            },
            {
                question: "The falling phase of an action potential is due to:",
                options: ["Na+ channel opening", "K+ channel opening", "Ca2+ channel closing", "Na+ channel closing only"],
                correct: 1,
                explanation: "The falling phase occurs when K+ channels open and Na+ channels inactivate, causing repolarization."
            },
            {
                question: "Voltage-gated channels respond to:",
                options: ["Chemical signals", "Mechanical pressure", "Changes in membrane potential", "Temperature changes"],
                correct: 2,
                explanation: "Voltage-gated channels open or close in response to changes in membrane potential."
            },
            {
                question: "The overshoot of an action potential reaches approximately:",
                options: ["-70 mV", "0 mV", "+35 mV", "+100 mV"],
                correct: 2,
                explanation: "The peak of an action potential typically reaches about +35 mV due to sodium influx."
            },
            {
                question: "Frequency coding in neurons means:",
                options: ["Stronger stimuli cause larger action potentials", "Stronger stimuli cause more frequent action potentials", "All stimuli produce the same response", "No relationship between stimulus and response"],
                correct: 1,
                explanation: "Since action potentials are all-or-none, stimulus intensity is coded by firing frequency."
            },
            {
                question: "The relative refractory period is characterized by:",
                options: ["No response possible", "Only strong stimuli can trigger action potentials", "Normal excitability", "Continuous firing"],
                correct: 1,
                explanation: "During the relative refractory period, only stronger-than-normal stimuli can trigger action potentials."
            },
            {
                question: "Conduction velocity is measured in:",
                options: ["Volts", "Meters per second", "Hertz", "Amperes"],
                correct: 1,
                explanation: "Conduction velocity describes how fast action potentials travel and is measured in meters per second."
            },

            // REFLEXES AND REFLEX ARC (Questions 56-75)
            {
                question: "A reflex is:",
                options: ["A conscious response", "An automatic, involuntary response", "A learned behavior", "A voluntary action"],
                correct: 1,
                explanation: "Reflexes are automatic, involuntary responses to stimuli that don't require conscious thought."
            },
            {
                question: "The simplest reflex arc contains:",
                options: ["One neuron", "Two neurons", "Three neurons", "Four neurons"],
                correct: 1,
                explanation: "The simplest reflex arc has two neurons: a sensory neuron and a motor neuron (monosynaptic)."
            },
            {
                question: "The knee-jerk reflex is an example of:",
                options: ["Polysynaptic reflex", "Monosynaptic reflex", "Conditioned reflex", "Visceral reflex"],
                correct: 1,
                explanation: "The knee-jerk reflex is monosynaptic, involving direct connection between sensory and motor neurons."
            },
            {
                question: "Withdrawal reflexes are typically:",
                options: ["Monosynaptic", "Polysynaptic", "Absent in humans", "Only in the brain"],
                correct: 1,
                explanation: "Withdrawal reflexes are polysynaptic, involving interneurons for complex coordination."
            },
            {
                question: "The components of a reflex arc include:",
                options: ["Only motor neurons", "Receptor, sensory neuron, motor neuron, effector", "Only the brain", "Only muscles"],
                correct: 1,
                explanation: "A complete reflex arc has: receptor, sensory neuron, integration center, motor neuron, and effector."
            },
            {
                question: "Interneurons in reflexes function to:",
                options: ["Detect stimuli", "Process and integrate information", "Contract muscles", "Produce hormones"],
                correct: 1,
                explanation: "Interneurons in the spinal cord process sensory information and coordinate appropriate motor responses."
            },
            {
                question: "Spinal reflexes occur at the level of:",
                options: ["Brain only", "Spinal cord", "Peripheral nerves only", "Muscles only"],
                correct: 1,
                explanation: "Spinal reflexes are processed in the spinal cord without requiring brain involvement."
            },
            {
                question: "The stretch reflex helps maintain:",
                options: ["Body temperature", "Muscle tone and posture", "Heart rate", "Blood pressure"],
                correct: 1,
                explanation: "Stretch reflexes maintain muscle tone and help maintain posture against gravity."
            },
            {
                question: "Muscle spindles are:",
                options: ["Motor neurons", "Stretch receptors", "Blood vessels", "Connective tissue"],
                correct: 1,
                explanation: "Muscle spindles are specialized stretch receptors within skeletal muscles."
            },
            {
                question: "The withdrawal reflex demonstrates:",
                options: ["Flexion of stimulated limb only", "Flexion of stimulated limb and extension of opposite limb", "No movement", "Only brain activity"],
                correct: 1,
                explanation: "The withdrawal reflex involves flexion of the stimulated limb and extension of the opposite limb for balance."
            },
            {
                question: "Reflexes can be modified by:",
                options: ["Brain centers", "Learning", "Disease states", "All of the above"],
                correct: 3,
                explanation: "Reflexes can be influenced by higher brain centers, learning, and various pathological conditions."
            },
            {
                question: "The Achilles reflex tests:",
                options: ["Biceps muscle", "Triceps muscle", "Quadriceps muscle", "Calf muscles"],
                correct: 3,
                explanation: "The Achilles reflex tests the integrity of the S1-S2 spinal segments and calf muscles."
            },
            {
                question: "Reciprocal inhibition in reflexes means:",
                options: ["Both muscles contract", "Antagonist muscles are inhibited", "No muscle activity", "Random muscle contractions"],
                correct: 1,
                explanation: "Reciprocal inhibition ensures that when agonist muscles contract, antagonist muscles are inhibited."
            },
            {
                question: "The corneal reflex protects:",
                options: ["The ear", "The eye", "The nose", "The mouth"],
                correct: 1,
                explanation: "The corneal reflex causes blinking to protect the eye from foreign objects or damage."
            },
            {
                question: "Visceral reflexes control:",
                options: ["Skeletal muscles", "Internal organs", "Sensory organs", "Only the brain"],
                correct: 1,
                explanation: "Visceral reflexes regulate the function of internal organs like heart, digestive system, etc."
            },
            {
                question: "The crossed extensor reflex:",
                options: ["Affects only one limb", "Affects the opposite limb", "Doesn't exist", "Only affects arms"],
                correct: 1,
                explanation: "The crossed extensor reflex extends the opposite limb to maintain balance during withdrawal."
            },
            {
                question: "Gamma motor neurons innervate:",
                options: ["Regular muscle fibers", "Muscle spindle fibers", "Skin receptors", "Joint receptors"],
                correct: 1,
                explanation: "Gamma motor neurons innervate intrafusal fibers in muscle spindles, adjusting their sensitivity."
            },
            {
                question: "The reflex hammer tests:",
                options: ["Voluntary responses", "Deep tendon reflexes", "Superficial reflexes", "Brain function only"],
                correct: 1,
                explanation: "The reflex hammer is used to test deep tendon reflexes by tapping tendons to stretch muscles."
            },
            {
                question: "Hyperreflexia indicates:",
                options: ["Normal reflexes", "Exaggerated reflexes", "Absent reflexes", "Delayed reflexes"],
                correct: 1,
                explanation: "Hyperreflexia refers to exaggerated or overactive reflexes, often indicating upper motor neuron damage."
            },
            {
                question: "The babinski reflex in adults indicates:",
                options: ["Normal function", "Brain damage", "Spinal cord damage", "Both brain and spinal damage"],
                correct: 2,
                explanation: "A positive Babinski reflex in adults indicates damage to corticospinal pathways."
            },

            // BRAIN STRUCTURE AND FUNCTION (Questions 76-100)
            {
                question: "The brain stem consists of:",
                options: ["Medulla only", "Pons only", "Medulla, pons, and midbrain", "Cerebrum only"],
                correct: 2,
                explanation: "The brain stem includes the medulla oblongata, pons, and midbrain."
            },
            {
                question: "The medulla oblongata controls:",
                options: ["Voluntary movement", "Vital functions like breathing and heart rate", "Vision", "Hearing"],
                correct: 1,
                explanation: "The medulla contains vital centers controlling breathing, heart rate, and blood pressure."
            },
            {
                question: "The pons is involved in:",
                options: ["Sleep regulation", "Facial sensation", "Motor control", "All of the above"],
                correct: 3,
                explanation: "The pons plays roles in sleep, arousal, facial sensation, and motor control coordination."
            },
            {
                question: "The midbrain contains:",
                options: ["Visual and auditory reflex centers", "Respiratory centers", "Speech centers", "Memory centers"],
                correct: 0,
                explanation: "The midbrain processes visual and auditory reflexes and contains centers for eye movement."
            },
            {
                question: "The cerebellum is primarily responsible for:",
                options: ["Consciousness", "Balance and coordination", "Emotion", "Memory"],
                correct: 1,
                explanation: "The cerebellum coordinates movement, maintains balance, and helps with motor learning."
            },
            {
                question: "The cerebrum is divided into:",
                options: ["Two hemispheres", "Three hemispheres", "Four hemispheres", "Five hemispheres"],
                correct: 0,
                explanation: "The cerebrum consists of left and right cerebral hemispheres connected by the corpus callosum."
            },
            {
                question: "The frontal lobe controls:",
                options: ["Vision", "Hearing", "Motor functions and personality", "Balance"],
                correct: 2,
                explanation: "The frontal lobe contains the primary motor cortex and areas controlling personality and executive functions."
            },
            {
                question: "The parietal lobe processes:",
                options: ["Visual information", "Auditory information", "Somatosensory information", "Olfactory information"],
                correct: 2,
                explanation: "The parietal lobe contains the primary somatosensory cortex processing touch, pressure, and proprioception."
            },
            {
                question: "The occipital lobe is primarily for:",
                options: ["Hearing", "Vision", "Touch", "Taste"],
                correct: 1,
                explanation: "The occipital lobe contains the primary visual cortex for processing visual information."
            },
            {
                question: "The temporal lobe contains:",
                options: ["Primary auditory cortex", "Hippocampus", "Language areas", "All of the above"],
                correct: 3,
                explanation: "The temporal lobe processes hearing, contains memory structures, and language areas."
            },
            {
                question: "Broca's area is responsible for:",
                options: ["Understanding speech", "Producing speech", "Hearing", "Vision"],
                correct: 1,
                explanation: "Broca's area in the frontal lobe controls speech production and motor aspects of language."
            },
            {
                question: "Wernicke's area is involved in:",
                options: ["Speech production", "Speech comprehension", "Vision", "Motor control"],
                correct: 1,
                explanation: "Wernicke's area in the temporal lobe is responsible for language comprehension."
            },
            {
                question: "The thalamus functions as:",
                options: ["A motor center", "A relay station", "A memory center", "A breathing center"],
                correct: 1,
                explanation: "The thalamus acts as a relay station, processing and directing sensory information to the cortex."
            },
            {
                question: "The hypothalamus controls:",
                options: ["Body temperature", "Hormone release", "Sleep-wake cycles", "All of the above"],
                correct: 3,
                explanation: "The hypothalamus regulates homeostasis, including temperature, hormones, and circadian rhythms."
            },
            {
                question: "The hippocampus is crucial for:",
                options: ["Motor control", "Memory formation", "Vision", "Hearing"],
                correct: 1,
                explanation: "The hippocampus is essential for forming new memories and spatial navigation."
            },
            {
                question: "The amygdala processes:",
                options: ["Visual information", "Emotions, especially fear", "Motor commands", "Language"],
                correct: 1,
                explanation: "The amygdala processes emotions, particularly fear and emotional memories."
            },
            {
                question: "The corpus callosum:",
                options: ["Connects the hemispheres", "Controls breathing", "Processes vision", "Stores memories"],
                correct: 0,
                explanation: "The corpus callosum is a bundle of nerve fibers connecting the left and right cerebral hemispheres."
            },
            {
                question: "The blood-brain barrier:",
                options: ["Allows all substances to pass", "Selectively protects the brain", "Doesn't exist", "Only blocks water"],
                correct: 1,
                explanation: "The blood-brain barrier selectively prevents harmful substances from entering brain tissue."
            },
            {
                question: "Cerebrospinal fluid:",
                options: ["Cushions the brain", "Provides nutrients", "Removes waste", "All of the above"],
                correct: 3,
                explanation: "CSF cushions the brain, provides nutrients, removes waste, and maintains intracranial pressure."
            },
            {
                question: "The reticular activating system controls:",
                options: ["Motor movement", "Arousal and consciousness", "Vision", "Digestion"],
                correct: 1,
                explanation: "The reticular activating system in the brain stem regulates sleep-wake cycles and consciousness."
            },
            {
                question: "Brain lateralization refers to:",
                options: ["Brain size", "Functional differences between hemispheres", "Brain weight", "Blood flow"],
                correct: 1,
                explanation: "Brain lateralization describes the specialization of functions in the left and right hemispheres."
            },
            {
                question: "The pineal gland produces:",
                options: ["Growth hormone", "Insulin", "Melatonin", "Cortisol"],
                correct: 2,
                explanation: "The pineal gland produces melatonin, which regulates sleep-wake cycles."
            },
            {
                question: "Neuroplasticity refers to:",
                options: ["Brain rigidity", "Brain's ability to reorganize", "Brain size", "Brain weight"],
                correct: 1,
                explanation: "Neuroplasticity is the brain's ability to reorganize, form new connections, and adapt to experiences."
            },
            {
                question: "The limbic system is involved in:",
                options: ["Motor control", "Emotions and memory", "Vision", "Hearing"],
                correct: 1,
                explanation: "The limbic system processes emotions, memory, and motivational behaviors."
            },
            {
                question: "The motor homunculus represents:",
                options: ["Sensory mapping", "Motor control mapping", "Memory areas", "Language areas"],
                correct: 1,
                explanation: "The motor homunculus is a topographic map showing which brain areas control different body parts for movement."
            }
        ],
        'Enzymes': [
            // ENZYME CHARACTERISTICS (Questions 1-25)
            {
                question: "Enzymes are primarily:",
                options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
                correct: 2,
                explanation: "Most enzymes are proteins that catalyze biochemical reactions by lowering activation energy."
            },
            {
                question: "The active site of an enzyme:",
                options: ["Binds to the substrate", "Is where the reaction occurs", "Determines specificity", "All of the above"],
                correct: 3,
                explanation: "The active site binds substrate, catalyzes the reaction, and determines enzyme specificity."
            },
            {
                question: "Enzymes speed up reactions by:",
                options: ["Increasing activation energy", "Decreasing activation energy", "Changing the equilibrium", "Adding energy to the system"],
                correct: 1,
                explanation: "Enzymes lower the activation energy barrier, making reactions proceed faster."
            },
            {
                question: "The lock and key model describes:",
                options: ["DNA replication", "Enzyme-substrate interaction", "Membrane transport", "Protein synthesis"],
                correct: 1,
                explanation: "The lock and key model explains how enzymes (lock) specifically bind substrates (key)."
            },
            {
                question: "The induced fit model suggests:",
                options: ["Enzyme shape never changes", "Enzyme changes shape upon substrate binding", "Only substrate changes shape", "Neither changes shape"],
                correct: 1,
                explanation: "The induced fit model proposes that enzyme shape changes to optimize substrate binding."
            },
            {
                question: "Enzyme specificity is due to:",
                options: ["Random binding", "Active site shape and chemistry", "Enzyme size only", "Substrate concentration"],
                correct: 1,
                explanation: "Enzyme specificity results from the unique shape and chemical environment of the active site."
            },
            {
                question: "Enzymes can be reused because they:",
                options: ["Are consumed in reactions", "Are not changed by reactions", "Increase in concentration", "Become more active"],
                correct: 1,
                explanation: "Enzymes are catalysts that are not consumed or permanently altered during reactions."
            },
            {
                question: "The enzyme-substrate complex is also called:",
                options: ["Transition state", "Michaelis complex", "Product complex", "Inhibitor complex"],
                correct: 1,
                explanation: "The enzyme-substrate complex is often called the Michaelis complex or ES complex."
            },
            {
                question: "Enzyme catalysis involves:",
                options: ["Stabilizing transition state", "Destabilizing substrate", "Both stabilizing transition state and destabilizing substrate", "Neither"],
                correct: 2,
                explanation: "Enzymes both destabilize the substrate and stabilize the transition state to lower activation energy."
            },
            {
                question: "The turnover number of an enzyme refers to:",
                options: ["Number of active sites", "Number of substrate molecules converted per second", "Enzyme molecular weight", "Reaction temperature"],
                correct: 1,
                explanation: "Turnover number (kcat) is the number of substrate molecules converted to product per enzyme per second."
            },
            {
                question: "Cofactors are:",
                options: ["Always proteins", "Non-protein helper molecules", "Always enzymes", "Always inhibitors"],
                correct: 1,
                explanation: "Cofactors are non-protein molecules (metals or organic) that help enzymes function."
            },
            {
                question: "Coenzymes are:",
                options: ["Metal ions", "Organic cofactors", "Protein cofactors", "Inhibitory molecules"],
                correct: 1,
                explanation: "Coenzymes are organic cofactors, often derived from vitamins, that assist enzymes."
            },
            {
                question: "An apoenzyme is:",
                options: ["Complete active enzyme", "Enzyme without cofactor", "Enzyme inhibitor", "Enzyme product"],
                correct: 1,
                explanation: "An apoenzyme is the protein part of an enzyme without its required cofactor."
            },
            {
                question: "A holoenzyme consists of:",
                options: ["Apoenzyme only", "Cofactor only", "Apoenzyme plus cofactor", "Substrate plus enzyme"],
                correct: 2,
                explanation: "A holoenzyme is the complete, catalytically active enzyme including apoenzyme and cofactor."
            },
            {
                question: "Prosthetic groups are:",
                options: ["Loosely bound cofactors", "Tightly bound cofactors", "Enzyme inhibitors", "Enzyme products"],
                correct: 1,
                explanation: "Prosthetic groups are cofactors that are tightly or covalently bound to enzymes."
            },
            {
                question: "The term enzyme comes from Greek meaning:",
                options: ["In life", "In yeast", "In cell", "In protein"],
                correct: 1,
                explanation: "The word enzyme comes from Greek 'en zyme' meaning 'in yeast', where enzymes were first discovered."
            },
            {
                question: "Enzyme nomenclature typically ends with:",
                options: ["-ine", "-ase", "-ose", "-ide"],
                correct: 1,
                explanation: "Most enzyme names end with the suffix '-ase' (e.g., amylase, lipase, protease)."
            },
            {
                question: "Allosteric enzymes have:",
                options: ["One binding site", "Multiple binding sites", "No binding sites", "Only active sites"],
                correct: 1,
                explanation: "Allosteric enzymes have multiple binding sites including active and regulatory sites."
            },
            {
                question: "The catalytic efficiency of an enzyme is measured by:",
                options: ["Km only", "Vmax only", "kcat/Km", "Vmax/Km"],
                correct: 2,
                explanation: "Catalytic efficiency is measured by kcat/Km, combining turnover number and binding affinity."
            },
            {
                question: "Enzyme classification is based on:",
                options: ["Size", "Color", "Type of reaction catalyzed", "Location in cell"],
                correct: 2,
                explanation: "Enzymes are classified into six main classes based on the type of reaction they catalyze."
            },
            {
                question: "The six main enzyme classes include:",
                options: ["Oxidoreductases", "Transferases", "Hydrolases", "All of the above"],
                correct: 3,
                explanation: "The six classes are: oxidoreductases, transferases, hydrolases, lyases, isomerases, and ligases."
            },
            {
                question: "Hydrolases catalyze:",
                options: ["Oxidation reactions", "Hydrolysis reactions", "Transfer reactions", "Synthesis reactions"],
                correct: 1,
                explanation: "Hydrolases break bonds by adding water molecules (hydrolysis reactions)."
            },
            {
                question: "Oxidoreductases are involved in:",
                options: ["Electron transfer", "Group transfer", "Bond formation", "Isomerization"],
                correct: 0,
                explanation: "Oxidoreductases catalyze oxidation-reduction reactions involving electron transfer."
            },
            {
                question: "Ligases require:",
                options: ["No energy", "ATP or similar energy source", "Only NAD+", "Only FAD"],
                correct: 1,
                explanation: "Ligases catalyze bond formation and typically require ATP or another high-energy compound."
            },
            {
                question: "Ribozymes are:",
                options: ["DNA enzymes", "RNA enzymes", "Protein enzymes", "Lipid enzymes"],
                correct: 1,
                explanation: "Ribozymes are RNA molecules that have catalytic activity, proving that not all enzymes are proteins."
            },

            // MECHANISM OF ENZYME ACTION (Questions 26-50)
            {
                question: "The first step in enzyme catalysis is:",
                options: ["Product formation", "Substrate binding", "Cofactor binding", "Energy release"],
                correct: 1,
                explanation: "Enzyme catalysis begins with substrate binding to the active site forming the ES complex."
            },
            {
                question: "The transition state in enzymatic reactions:",
                options: ["Has higher energy than substrate", "Has lower energy than substrate", "Has same energy as substrate", "Doesn't exist"],
                correct: 0,
                explanation: "The transition state has higher energy than substrate but lower energy than in uncatalyzed reactions."
            },
            {
                question: "Enzyme-substrate affinity is measured by:",
                options: ["Vmax", "Km", "kcat", "Ki"],
                correct: 1,
                explanation: "Km (Michaelis constant) indicates enzyme-substrate affinity - lower Km means higher affinity."
            },
            {
                question: "A low Km value indicates:",
                options: ["Low affinity", "High affinity", "No binding", "Irreversible binding"],
                correct: 1,
                explanation: "Low Km indicates high substrate affinity - enzyme binds substrate effectively at low concentrations."
            },
            {
                question: "The catalytic triad in serine proteases consists of:",
                options: ["Three serine residues", "Serine, histidine, and aspartic acid", "Three histidine residues", "Random amino acids"],
                correct: 1,
                explanation: "The catalytic triad (Ser-His-Asp) works together to catalyze peptide bond hydrolysis."
            },
            {
                question: "Covalent catalysis involves:",
                options: ["No bond formation", "Temporary covalent bond formation", "Permanent bond formation", "Only ionic interactions"],
                correct: 1,
                explanation: "Covalent catalysis involves temporary covalent bond formation between enzyme and substrate."
            },
            {
                question: "Metal ion catalysis can work by:",
                options: ["Electron withdrawal", "Substrate orientation", "Redox reactions", "All of the above"],
                correct: 3,
                explanation: "Metal ions assist catalysis through electron effects, substrate positioning, and redox chemistry."
            },
            {
                question: "Acid-base catalysis involves:",
                options: ["Only proton donation", "Only proton acceptance", "Both proton donation and acceptance", "No proton transfer"],
                correct: 2,
                explanation: "Acid-base catalysis involves both proton donation (acid) and acceptance (base) to facilitate reactions."
            },
            {
                question: "The reaction coordinate diagram shows:",
                options: ["Only energy", "Energy vs reaction progress", "Only time", "Temperature vs energy"],
                correct: 1,
                explanation: "Reaction coordinate diagrams plot energy changes as the reaction progresses from reactants to products."
            },
            {
                question: "Enzymes affect reaction kinetics by:",
                options: ["Changing equilibrium position", "Increasing reaction rate", "Decreasing product formation", "Stopping reactions"],
                correct: 1,
                explanation: "Enzymes increase reaction rates without changing the equilibrium position of reactions."
            },
            {
                question: "The rate-determining step is:",
                options: ["Always the first step", "The fastest step", "The slowest step", "The last step"],
                correct: 2,
                explanation: "The rate-determining step is the slowest step in a reaction mechanism that limits overall rate."
            },
            {
                question: "Enzyme saturation occurs when:",
                options: ["All enzyme is bound to substrate", "No substrate is present", "Temperature is too high", "pH is wrong"],
                correct: 0,
                explanation: "Saturation occurs when all enzyme active sites are occupied by substrate (ES complex)."
            },
            {
                question: "At saturation, reaction rate:",
                options: ["Continues to increase", "Reaches maximum (Vmax)", "Decreases", "Becomes zero"],
                correct: 1,
                explanation: "At enzyme saturation, the reaction rate reaches its maximum value (Vmax)."
            },
            {
                question: "The Michaelis-Menten equation describes:",
                options: ["Enzyme structure", "Reaction rate vs substrate concentration", "Temperature effects", "pH effects"],
                correct: 1,
                explanation: "The Michaelis-Menten equation relates reaction velocity to substrate concentration."
            },
            {
                question: "The Lineweaver-Burk plot is:",
                options: ["Linear transformation of Michaelis-Menten", "Exponential plot", "Circular plot", "Random plot"],
                correct: 0,
                explanation: "The Lineweaver-Burk plot is a double reciprocal linear plot used to determine Km and Vmax."
            },
            {
                question: "Enzyme cooperativity refers to:",
                options: ["Independent binding", "Binding of one substrate affects others", "No binding", "Random binding"],
                correct: 1,
                explanation: "Cooperativity occurs when binding of one substrate molecule affects binding of additional substrates."
            },
            {
                question: "Positive cooperativity results in:",
                options: ["Hyperbolic curves", "Sigmoidal (S-shaped) curves", "Linear plots", "No curves"],
                correct: 1,
                explanation: "Positive cooperativity produces sigmoidal curves rather than hyperbolic Michaelis-Menten curves."
            },
            {
                question: "Hill coefficient (n) greater than 1 indicates:",
                options: ["No cooperativity", "Positive cooperativity", "Negative cooperativity", "Enzyme inhibition"],
                correct: 1,
                explanation: "Hill coefficient > 1 indicates positive cooperativity among binding sites."
            },
            {
                question: "Conformational changes in enzymes:",
                options: ["Never occur", "Can affect activity", "Only occur when damaged", "Are always harmful"],
                correct: 1,
                explanation: "Conformational changes are often essential for enzyme function and regulation."
            },
            {
                question: "Sequential mechanism in multi-substrate reactions means:",
                options: ["Substrates bind randomly", "Substrates bind in specific order", "No substrate binding", "Only one substrate"],
                correct: 1,
                explanation: "In sequential mechanisms, substrates bind to enzyme in a specific, ordered sequence."
            },
            {
                question: "Ping-pong mechanism involves:",
                options: ["All substrates binding simultaneously", "Enzyme modification between substrate bindings", "No products", "Reversible reactions only"],
                correct: 1,
                explanation: "In ping-pong mechanisms, the enzyme is temporarily modified between binding different substrates."
            },
            {
                question: "Product inhibition occurs when:",
                options: ["Products activate enzyme", "Products inhibit the enzyme", "No products form", "Substrate concentration increases"],
                correct: 1,
                explanation: "Product inhibition occurs when reaction products bind to enzyme and reduce its activity."
            },
            {
                question: "The commitment to catalysis occurs:",
                options: ["Before substrate binding", "After ES complex formation", "After product release", "Never"],
                correct: 1,
                explanation: "Commitment to catalysis occurs after ES complex formation when the reaction pathway is determined."
            },
            {
                question: "Enzyme flexibility is important for:",
                options: ["Structural stability only", "Substrate binding and catalysis", "Enzyme storage", "Enzyme transport"],
                correct: 1,
                explanation: "Enzyme flexibility allows conformational changes essential for substrate binding and catalysis."
            },
            {
                question: "The proximity effect in enzyme catalysis refers to:",
                options: ["Bringing reactants close together", "Keeping reactants apart", "Temperature effects", "pH effects"],
                correct: 0,
                explanation: "The proximity effect describes how enzymes bring reactants into close proximity for reaction."
            },

            // FACTORS AFFECTING ENZYME ACTIVITY (Questions 51-75)
            {
                question: "Enzyme activity is affected by:",
                options: ["Temperature", "pH", "Substrate concentration", "All of the above"],
                correct: 3,
                explanation: "Enzyme activity depends on temperature, pH, substrate concentration, and other factors."
            },
            {
                question: "Increasing temperature generally:",
                options: ["Decreases enzyme activity", "Increases enzyme activity up to optimal temperature", "Has no effect", "Destroys all enzymes immediately"],
                correct: 1,
                explanation: "Higher temperature increases molecular motion and reaction rates until denaturation occurs."
            },
            {
                question: "At very high temperatures, enzymes:",
                options: ["Become more active", "Denature and lose activity", "Multiply", "Change substrate specificity"],
                correct: 1,
                explanation: "Excessive heat causes protein denaturation, destroying enzyme structure and activity."
            },
            {
                question: "The optimal temperature for human enzymes is typically:",
                options: ["0°C", "25°C", "37°C", "100°C"],
                correct: 2,
                explanation: "Human enzymes have evolved to work optimally at body temperature (37°C)."
            },
            {
                question: "Q10 value represents:",
                options: ["Temperature coefficient", "pH optimum", "Substrate concentration", "Enzyme concentration"],
                correct: 0,
                explanation: "Q10 describes how reaction rate changes with a 10°C temperature increase."
            },
            {
                question: "Extreme pH values affect enzymes by:",
                options: ["Increasing activity", "Altering protein structure", "Having no effect", "Increasing specificity"],
                correct: 1,
                explanation: "Extreme pH changes protein ionization and structure, affecting enzyme function."
            },
            {
                question: "Pepsin works optimally at:",
                options: ["Neutral pH", "Basic pH", "Acidic pH", "Any pH"],
                correct: 2,
                explanation: "Pepsin, a stomach enzyme, functions optimally in the acidic environment (pH ~1.5-2)."
            },
            {
                question: "Trypsin works optimally at:",
                options: ["Acidic pH", "Basic pH", "Neutral pH", "Varies randomly"],
                correct: 1,
                explanation: "Trypsin, a pancreatic enzyme, works optimally in the basic environment of the small intestine."
            },
            {
                question: "Buffer systems in cells help maintain:",
                options: ["Temperature", "Pressure", "pH", "Substrate concentration"],
                correct: 2,
                explanation: "Cellular buffers maintain pH within narrow ranges optimal for enzyme function."
            },
            {
                question: "Increasing substrate concentration initially:",
                options: ["Decreases reaction rate", "Increases reaction rate", "Has no effect", "Denatures enzyme"],
                correct: 1,
                explanation: "Higher substrate concentration increases the probability of enzyme-substrate collisions."
            },
            {
                question: "At very high substrate concentrations:",
                options: ["Rate continues increasing", "Rate reaches plateau (Vmax)", "Rate decreases", "Enzyme denatures"],
                correct: 1,
                explanation: "At high substrate concentrations, all enzyme active sites are saturated, reaching Vmax."
            },
            {
                question: "Enzyme concentration affects reaction rate:",
                options: ["Not at all", "Proportionally when substrate is excess", "Only at high temperatures", "Only at low pH"],
                correct: 1,
                explanation: "When substrate is in excess, reaction rate is proportional to enzyme concentration."
            },
            {
                question: "Salt concentration can affect enzymes by:",
                options: ["Changing ionic strength", "Affecting protein structure", "Influencing electrostatic interactions", "All of the above"],
                correct: 3,
                explanation: "Salt concentration affects enzyme structure and function through multiple ionic mechanisms."
            },
            {
                question: "Water activity affects enzyme function because:",
                options: ["Enzymes need water for structure", "Many reactions require water", "Hydrophobic interactions depend on water", "All of the above"],
                correct: 3,
                explanation: "Water is crucial for enzyme structure, many reactions, and maintaining protein conformation."
            },
            {
                question: "Pressure effects on enzymes include:",
                options: ["No effects", "Only positive effects", "Structural changes and activity changes", "Only denaturation"],
                correct: 2,
                explanation: "Pressure can cause conformational changes affecting enzyme structure and activity."
            },
            {
                question: "Enzyme stability refers to:",
                options: ["Resistance to denaturation", "Activity over time", "Resistance to proteolysis", "All of the above"],
                correct: 3,
                explanation: "Enzyme stability encompasses resistance to various denaturing conditions and degradation."
            },
            {
                question: "Thermal stability varies among enzymes because of:",
                options: ["Different amino acid compositions", "Different structural features", "Different environments they evolved in", "All of the above"],
                correct: 3,
                explanation: "Thermal stability depends on sequence, structure, and evolutionary adaptations."
            },
            {
                question: "Extremophile enzymes are stable at:",
                options: ["Only normal conditions", "Extreme temperatures or pH", "Only cold temperatures", "Only neutral pH"],
                correct: 1,
                explanation: "Extremophile enzymes have evolved to function under extreme environmental conditions."
            },
            {
                question: "Enzyme half-life refers to:",
                options: ["Time to reach half activity", "Time to complete reaction", "Substrate concentration", "Temperature"],
                correct: 0,
                explanation: "Enzyme half-life is the time required for enzyme activity to decrease to half its initial value."
            },
            {
                question: "Denaturation is often:",
                options: ["Always reversible", "Always irreversible", "Sometimes reversible", "Never occurs"],
                correct: 2,
                explanation: "Denaturation can be reversible or irreversible depending on the conditions and extent of unfolding."
            },
            {
                question: "Enzyme storage requires:",
                options: ["Any conditions", "Optimal temperature and pH", "High temperature", "Low pH"],
                correct: 1,
                explanation: "Proper enzyme storage requires conditions that maintain stability and prevent denaturation."
            },
            {
                question: "Freeze-thaw cycles affect enzymes by:",
                options: ["Improving activity", "Potentially causing damage", "Having no effect", "Always improving stability"],
                correct: 1,
                explanation: "Freeze-thaw cycles can damage enzyme structure through ice crystal formation and osmotic stress."
            },
            {
                question: "Organic solvents generally:",
                options: ["Improve enzyme activity", "Denature enzymes", "Have no effect", "Only help enzymes"],
                correct: 1,
                explanation: "Most organic solvents disrupt enzyme structure and eliminate activity."
            },
            {
                question: "Heavy metals often:",
                options: ["Activate enzymes", "Inhibit enzymes", "Have no effect", "Only help metalloenzymes"],
                correct: 1,
                explanation: "Heavy metals often bind to enzyme sulfhydryl groups and other sites, causing inhibition."
            },
            {
                question: "Radiation affects enzymes by:",
                options: ["Always improving function", "Potentially damaging structure", "Having no effect", "Only affecting cofactors"],
                correct: 1,
                explanation: "Radiation can break bonds and cause structural damage leading to enzyme inactivation."
            },

            // ENZYME INHIBITION (Questions 76-100)
            {
                question: "Competitive inhibition occurs when:",
                options: ["Inhibitor binds to active site", "Inhibitor binds to allosteric site", "Substrate concentration is low", "Temperature is too high"],
                correct: 0,
                explanation: "Competitive inhibitors compete with substrate for binding to the enzyme's active site."
            },
            {
                question: "In competitive inhibition:",
                options: ["Vmax decreases", "Km increases", "Both Vmax and Km change", "Nothing changes"],
                correct: 1,
                explanation: "Competitive inhibition increases apparent Km but doesn't change Vmax."
            },
            {
                question: "Competitive inhibition can be overcome by:",
                options: ["Decreasing substrate concentration", "Increasing substrate concentration", "Changing temperature", "Changing enzyme"],
                correct: 1,
                explanation: "High substrate concentrations can overcome competitive inhibition by outcompeting inhibitor."
            },
            {
                question: "Non-competitive inhibition involves:",
                options: ["Inhibitor binding to active site", "Inhibitor binding to allosteric site", "No inhibitor binding", "Substrate modification"],
                correct: 1,
                explanation: "Non-competitive inhibitors bind to sites other than the active site (allosteric sites)."
            },
            {
                question: "In non-competitive inhibition:",
                options: ["Vmax decreases", "Km increases", "Both Vmax and Km increase", "Only Km decreases"],
                correct: 0,
                explanation: "Non-competitive inhibition decreases Vmax but doesn't change Km."
            },
            {
                question: "Uncompetitive inhibition occurs when inhibitor binds to:",
                options: ["Free enzyme only", "ES complex only", "Either free enzyme or ES complex", "Neither"],
                correct: 1,
                explanation: "Uncompetitive inhibitors bind only to the enzyme-substrate complex."
            },
            {
                question: "In uncompetitive inhibition:",
                options: ["Both Vmax and Km decrease", "Only Vmax decreases", "Only Km decreases", "Both increase"],
                correct: 0,
                explanation: "Uncompetitive inhibition decreases both Vmax and apparent Km proportionally."
            },
            {
                question: "Reversible inhibition is characterized by:",
                options: ["Permanent enzyme inactivation", "Temporary enzyme inactivation", "Enzyme destruction", "No effect on enzyme"],
                correct: 1,
                explanation: "Reversible inhibitors can dissociate from enzymes, allowing activity to return."
            },
            {
                question: "Irreversible inhibition involves:",
                options: ["Weak binding", "Covalent bond formation", "Easy reversal", "No chemical changes"],
                correct: 1,
                explanation: "Irreversible inhibitors form covalent bonds with enzymes, permanently inactivating them."
            },
            {
                question: "Suicide inhibition occurs when:",
                options: ["Enzyme destroys itself", "Inhibitor is converted to reactive form by enzyme", "Substrate kills enzyme", "Random inactivation"],
                correct: 1,
                explanation: "Suicide inhibitors are converted by the target enzyme into highly reactive species that inactivate it."
            },
            {
                question: "Allosteric inhibition involves:",
                options: ["Active site binding", "Regulatory site binding", "Substrate modification", "Product formation"],
                correct: 1,
                explanation: "Allosteric inhibitors bind to regulatory sites distinct from the active site."
            },
            {
                question: "Negative allosteric effectors:",
                options: ["Increase enzyme activity", "Decrease enzyme activity", "Have no effect", "Change substrate specificity"],
                correct: 1,
                explanation: "Negative allosteric effectors decrease enzyme activity by inducing conformational changes."
            },
            {
                question: "Feedback inhibition occurs when:",
                options: ["Product inhibits its own synthesis", "Substrate inhibits the enzyme", "Temperature is too low", "pH is wrong"],
                correct: 0,
                explanation: "Feedback inhibition is when the end product of a pathway inhibits an enzyme in that pathway."
            },
            {
                question: "The inhibition constant (Ki) represents:",
                options: ["Substrate affinity", "Inhibitor binding affinity", "Product concentration", "Enzyme concentration"],
                correct: 1,
                explanation: "Ki is the dissociation constant for inhibitor binding - lower Ki means stronger inhibition."
            },
            {
                question: "Aspirin works by:",
                options: ["Competitive inhibition", "Irreversible inhibition of cyclooxygenase", "Allosteric activation", "No inhibition"],
                correct: 1,
                explanation: "Aspirin irreversibly acetylates cyclooxygenase, blocking prostaglandin synthesis."
            },
            {
                question: "Enzyme induction refers to:",
                options: ["Decreasing enzyme amount", "Increasing enzyme amount", "Changing enzyme structure", "Inhibiting enzyme activity"],
                correct: 1,
                explanation: "Enzyme induction is the increase in enzyme synthesis in response to specific signals."
            },
            {
                question: "Enzyme repression involves:",
                options: ["Increasing enzyme synthesis", "Decreasing enzyme synthesis", "Changing enzyme activity", "Enzyme activation"],
                correct: 1,
                explanation: "Enzyme repression is the decrease in enzyme synthesis, often by end products."
            },
            {
                question: "Covalent modification of enzymes includes:",
                options: ["Phosphorylation", "Methylation", "Acetylation", "All of the above"],
                correct: 3,
                explanation: "Enzymes can be regulated by various covalent modifications including phosphorylation, methylation, and acetylation."
            },
            {
                question: "Phosphorylation typically:",
                options: ["Always activates enzymes", "Always inhibits enzymes", "Can either activate or inhibit", "Has no effect"],
                correct: 2,
                explanation: "Phosphorylation can either activate or inhibit enzymes depending on the specific enzyme and site."
            },
            {
                question: "Competitive inhibition on Lineweaver-Burk plot shows:",
                options: ["Same y-intercept, different slopes", "Same slope, different y-intercepts", "Different slopes and intercepts", "No changes"],
                correct: 0,
                explanation: "Competitive inhibition changes the slope but not the y-intercept (1/Vmax) on Lineweaver-Burk plots."
            },
            {
                question: "Multi-enzyme complexes offer advantages including:",
                options: ["Substrate channeling", "Coordinated regulation", "Increased efficiency", "All of the above"],
                correct: 3,
                explanation: "Multi-enzyme complexes provide substrate channeling, coordinated regulation, and improved efficiency."
            },
            {
                question: "Enzyme compartmentalization in cells:",
                options: ["Has no purpose", "Allows specialized environments", "Prevents all reactions", "Only occurs randomly"],
                correct: 1,
                explanation: "Compartmentalization allows different cellular locations to maintain optimal conditions for specific enzymes."
            },
            {
                question: "Isozymes are:",
                options: ["Identical enzymes", "Different enzymes with same function", "Enzyme inhibitors", "Enzyme cofactors"],
                correct: 1,
                explanation: "Isozymes are different forms of enzymes that catalyze the same reaction but have different properties."
            },
            {
                question: "Zymogen activation involves:",
                options: ["Adding cofactors", "Removing inhibitory peptides", "Changing pH", "Adding substrates"],
                correct: 1,
                explanation: "Zymogens are inactive enzyme precursors activated by proteolytic removal of inhibitory sequences."
            },
            {
                question: "Drug design often targets:",
                options: ["Enzyme active sites", "Allosteric sites", "Cofactor binding sites", "All of the above"],
                correct: 3,
                explanation: "Drug design can target active sites, allosteric sites, or cofactor binding to modulate enzyme activity."
            }
        ],
        'Human Circulation': [
            // HEART STRUCTURE (Questions 1-25)
            {
                question: "The human heart has:",
                options: ["2 chambers", "3 chambers", "4 chambers", "5 chambers"],
                correct: 2,
                explanation: "The human heart has 4 chambers: 2 atria (upper chambers) and 2 ventricles (lower chambers)."
            },
            {
                question: "The largest artery in the human body is:",
                options: ["Pulmonary artery", "Coronary artery", "Aorta", "Carotid artery"],
                correct: 2,
                explanation: "The aorta is the main artery that carries oxygenated blood from the left ventricle to the body."
            },
            {
                question: "The right atrium receives blood from:",
                options: ["Lungs", "Body tissues", "Left ventricle", "Aorta"],
                correct: 1,
                explanation: "The right atrium receives deoxygenated blood from body tissues via the superior and inferior vena cava."
            },
            {
                question: "The left ventricle pumps blood to:",
                options: ["Lungs", "Right atrium", "Entire body", "Left atrium"],
                correct: 2,
                explanation: "The left ventricle pumps oxygenated blood to the entire body through the aorta."
            },
            {
                question: "The valve between the right atrium and right ventricle is:",
                options: ["Bicuspid valve", "Tricuspid valve", "Aortic valve", "Pulmonary valve"],
                correct: 1,
                explanation: "The tricuspid valve has three cusps and controls blood flow from right atrium to right ventricle."
            },
            {
                question: "The bicuspid valve is also called:",
                options: ["Tricuspid valve", "Mitral valve", "Aortic valve", "Pulmonary valve"],
                correct: 1,
                explanation: "The bicuspid (mitral) valve has two cusps and controls flow from left atrium to left ventricle."
            },
            {
                question: "The wall of the heart is called:",
                options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"],
                correct: 1,
                explanation: "The myocardium is the thick middle layer of heart muscle responsible for contraction."
            },
            {
                question: "The pericardium is:",
                options: ["Heart muscle", "Heart lining", "Protective sac around heart", "Heart valve"],
                correct: 2,
                explanation: "The pericardium is a double-layered protective sac surrounding the heart."
            },
            {
                question: "The left ventricle has thicker walls than the right ventricle because:",
                options: ["It's larger", "It pumps blood to lungs only", "It pumps blood against higher pressure", "It beats faster"],
                correct: 2,
                explanation: "The left ventricle must generate higher pressure to pump blood throughout the entire body."
            },
            {
                question: "The interventricular septum:",
                options: ["Separates atria", "Separates ventricles", "Connects atria to ventricles", "Surrounds the heart"],
                correct: 1,
                explanation: "The interventricular septum is the muscular wall separating left and right ventricles."
            },
            {
                question: "Chordae tendineae are:",
                options: ["Heart muscles", "String-like structures supporting valves", "Blood vessels", "Nerve fibers"],
                correct: 1,
                explanation: "Chordae tendineae are fibrous cords that anchor heart valves to papillary muscles."
            },
            {
                question: "Papillary muscles:",
                options: ["Close heart valves", "Open heart valves", "Prevent valve prolapse", "Regulate heart rate"],
                correct: 2,
                explanation: "Papillary muscles contract to prevent AV valves from inverting during ventricular contraction."
            },
            {
                question: "The heart receives its own blood supply from:",
                options: ["Aorta directly", "Coronary arteries", "Pulmonary arteries", "Vena cava"],
                correct: 1,
                explanation: "Coronary arteries branch from the aorta to supply blood to the heart muscle."
            },
            {
                question: "The right coronary artery typically supplies:",
                options: ["Left ventricle", "Right ventricle and inferior left ventricle", "Only right atrium", "Entire heart"],
                correct: 1,
                explanation: "The right coronary artery supplies the right ventricle and inferior wall of left ventricle."
            },
            {
                question: "The left anterior descending artery supplies:",
                options: ["Right ventricle", "Anterior left ventricle", "Right atrium", "Posterior heart"],
                correct: 1,
                explanation: "The LAD supplies the anterior wall of the left ventricle and interventricular septum."
            },
            {
                question: "Heart valves ensure:",
                options: ["Blood flows in both directions", "Unidirectional blood flow", "Blood mixing", "Heart beating"],
                correct: 1,
                explanation: "Heart valves open and close to ensure blood flows in only one direction through the heart."
            },
            {
                question: "Semilunar valves are located:",
                options: ["Between atria and ventricles", "At exits of ventricles", "In atria only", "In veins"],
                correct: 1,
                explanation: "Semilunar valves (aortic and pulmonary) are at the exits of left and right ventricles."
            },
            {
                question: "The heart's apex points:",
                options: ["Upward", "Downward and to the left", "To the right", "Backward"],
                correct: 1,
                explanation: "The heart's apex points downward and to the left, formed mainly by the left ventricle."
            },
            {
                question: "The atria function primarily to:",
                options: ["Pump blood to body", "Receive blood", "Generate electrical impulses", "Produce hormones"],
                correct: 1,
                explanation: "Atria are receiving chambers that collect blood and pump it to ventricles."
            },
            {
                question: "Ventricles are:",
                options: ["Receiving chambers", "Pumping chambers", "Electrical centers", "Storage chambers"],
                correct: 1,
                explanation: "Ventricles are the main pumping chambers that send blood to lungs and body."
            },
            {
                question: "The heart is located in the:",
                options: ["Abdominal cavity", "Mediastinum", "Pleural cavity", "Pelvic cavity"],
                correct: 1,
                explanation: "The heart is located in the mediastinum, the central compartment of the thoracic cavity."
            },
            {
                question: "Cardiac muscle is:",
                options: ["Voluntary", "Involuntary", "Both voluntary and involuntary", "Neither"],
                correct: 1,
                explanation: "Cardiac muscle is involuntary, contracting automatically without conscious control."
            },
            {
                question: "Intercalated discs in cardiac muscle:",
                options: ["Separate cells completely", "Allow electrical communication", "Store calcium", "Produce ATP"],
                correct: 1,
                explanation: "Intercalated discs contain gap junctions allowing electrical signals to spread between cardiac cells."
            },
            {
                question: "The heart's natural pacemaker is:",
                options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
                correct: 1,
                explanation: "The sinoatrial (SA) node generates electrical impulses that initiate each heartbeat."
            },
            {
                question: "Blood enters the left atrium from:",
                options: ["Vena cava", "Pulmonary veins", "Aorta", "Coronary sinus"],
                correct: 1,
                explanation: "Oxygenated blood from the lungs enters the left atrium through pulmonary veins."
            },

            // CARDIAC CYCLE AND HEARTBEAT (Questions 26-50)
            {
                question: "The cardiac cycle includes:",
                options: ["Only systole", "Only diastole", "Both systole and diastole", "Neither systole nor diastole"],
                correct: 2,
                explanation: "The cardiac cycle consists of systole (contraction) and diastole (relaxation) phases."
            },
            {
                question: "Systole refers to:",
                options: ["Heart relaxation", "Heart contraction", "Heart stopping", "Heart rate"],
                correct: 1,
                explanation: "Systole is the phase when heart muscle contracts to pump blood out of chambers."
            },
            {
                question: "Diastole refers to:",
                options: ["Heart contraction", "Heart relaxation", "Heart rate", "Heart size"],
                correct: 1,
                explanation: "Diastole is the relaxation phase when heart chambers fill with blood."
            },
            {
                question: "During ventricular systole:",
                options: ["Ventricles fill with blood", "Ventricles contract and empty", "Atria contract", "Heart stops"],
                correct: 1,
                explanation: "During ventricular systole, ventricles contract to pump blood to lungs and body."
            },
            {
                question: "During ventricular diastole:",
                options: ["Ventricles contract", "Ventricles relax and fill", "Atria empty", "Blood stops flowing"],
                correct: 1,
                explanation: "During ventricular diastole, ventricles relax and fill with blood from atria."
            },
            {
                question: "The first heart sound (lub) is caused by:",
                options: ["AV valve closure", "Semilunar valve closure", "Atrial contraction", "Blood flow"],
                correct: 0,
                explanation: "The 'lub' sound results from closure of AV valves (tricuspid and mitral) at start of systole."
            },
            {
                question: "The second heart sound (dub) is caused by:",
                options: ["AV valve closure", "Semilunar valve closure", "Ventricular filling", "Atrial emptying"],
                correct: 1,
                explanation: "The 'dub' sound results from closure of semilunar valves (aortic and pulmonary) at end of systole."
            },
            {
                question: "Stroke volume is:",
                options: ["Heart rate per minute", "Blood volume pumped per beat", "Total blood volume", "Blood pressure"],
                correct: 1,
                explanation: "Stroke volume is the amount of blood pumped by left ventricle with each heartbeat."
            },
            {
                question: "Cardiac output equals:",
                options: ["Heart rate only", "Stroke volume only", "Heart rate × stroke volume", "Blood pressure × heart rate"],
                correct: 2,
                explanation: "Cardiac output = heart rate × stroke volume, representing total blood pumped per minute."
            },
            {
                question: "Normal resting heart rate is approximately:",
                options: ["40-50 bpm", "60-100 bpm", "120-140 bpm", "150-200 bpm"],
                correct: 1,
                explanation: "Normal resting heart rate for adults is 60-100 beats per minute."
            },
            {
                question: "The SA node normally fires at:",
                options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-150 bpm"],
                correct: 1,
                explanation: "The SA node naturally generates impulses at 60-100 times per minute."
            },
            {
                question: "If the SA node fails, the:",
                options: ["Heart stops", "AV node takes over", "Ventricles stop", "Blood pressure drops to zero"],
                correct: 1,
                explanation: "If SA node fails, the AV node can serve as backup pacemaker at 40-60 bpm."
            },
            {
                question: "The AV node delay allows:",
                options: ["Ventricles to contract first", "Atria to empty before ventricular contraction", "Heart to stop", "Blood to reverse"],
                correct: 1,
                explanation: "AV node delay ensures atria finish emptying before ventricles begin contracting."
            },
            {
                question: "The bundle of His conducts impulses:",
                options: ["To atria", "Down interventricular septum", "To SA node", "Outside the heart"],
                correct: 1,
                explanation: "Bundle of His carries electrical impulses from AV node down the interventricular septum."
            },
            {
                question: "Purkinje fibers:",
                options: ["Generate impulses", "Conduct impulses throughout ventricles", "Block impulses", "Store impulses"],
                correct: 1,
                explanation: "Purkinje fibers distribute electrical impulses throughout ventricular muscle."
            },
            {
                question: "An ECG measures:",
                options: ["Blood flow", "Heart sounds", "Electrical activity", "Blood pressure"],
                correct: 2,
                explanation: "Electrocardiogram (ECG) records the electrical activity of the heart."
            },
            {
                question: "The P wave on ECG represents:",
                options: ["Ventricular contraction", "Atrial depolarization", "Ventricular relaxation", "Heart rate"],
                correct: 1,
                explanation: "The P wave shows atrial depolarization (electrical activation leading to contraction)."
            },
            {
                question: "The QRS complex represents:",
                options: ["Atrial contraction", "Ventricular depolarization", "Atrial relaxation", "Heart stopping"],
                correct: 1,
                explanation: "QRS complex shows ventricular depolarization (electrical activation of ventricles)."
            },
            {
                question: "The T wave represents:",
                options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "Heart rate"],
                correct: 2,
                explanation: "T wave shows ventricular repolarization (electrical recovery of ventricles)."
            },
            {
                question: "Bradycardia is:",
                options: ["Fast heart rate", "Slow heart rate", "Irregular heart rate", "Normal heart rate"],
                correct: 1,
                explanation: "Bradycardia is a heart rate slower than 60 beats per minute."
            },
            {
                question: "Tachycardia is:",
                options: ["Slow heart rate", "Fast heart rate", "Irregular heart rate", "Normal heart rate"],
                correct: 1,
                explanation: "Tachycardia is a heart rate faster than 100 beats per minute."
            },
            {
                question: "End-diastolic volume is:",
                options: ["Blood in ventricle at end of filling", "Blood pumped per beat", "Total blood volume", "Blood in atria"],
                correct: 0,
                explanation: "End-diastolic volume is the amount of blood in ventricles at the end of filling (diastole)."
            },
            {
                question: "End-systolic volume is:",
                options: ["Blood remaining in ventricle after contraction", "Blood pumped per beat", "Maximum ventricular volume", "Atrial volume"],
                correct: 0,
                explanation: "End-systolic volume is blood remaining in ventricles after contraction (systole)."
            },
            {
                question: "Ejection fraction is:",
                options: ["Stroke volume / end-diastolic volume", "Heart rate × stroke volume", "End-systolic volume only", "Blood pressure measurement"],
                correct: 0,
                explanation: "Ejection fraction = (stroke volume / end-diastolic volume) × 100%, measuring pump efficiency."
            },
            {
                question: "Normal ejection fraction is approximately:",
                options: ["25-35%", "40-50%", "55-70%", "80-90%"],
                correct: 2,
                explanation: "Normal ejection fraction is 55-70%, indicating healthy heart pump function."
            },

            // BLOOD VESSELS (Questions 51-75)
            {
                question: "Arteries carry blood:",
                options: ["Away from heart", "Toward heart", "Only to lungs", "Only to brain"],
                correct: 0,
                explanation: "Arteries carry blood away from the heart to various body parts."
            },
            {
                question: "Veins carry blood:",
                options: ["Away from heart", "Toward heart", "Only from lungs", "Only from brain"],
                correct: 1,
                explanation: "Veins carry blood back toward the heart from body tissues."
            },
            {
                question: "Capillaries function to:",
                options: ["Pump blood", "Exchange materials", "Store blood", "Filter blood"],
                correct: 1,
                explanation: "Capillaries are tiny vessels where exchange of gases, nutrients, and wastes occurs."
            },
            {
                question: "Arteries have:",
                options: ["Thin walls", "Thick muscular walls", "No walls", "Only elastic walls"],
                correct: 1,
                explanation: "Arteries have thick, muscular walls to withstand high pressure from heart pumping."
            },
            {
                question: "Veins have:",
                options: ["Thicker walls than arteries", "Thinner walls than arteries", "No smooth muscle", "Only connective tissue"],
                correct: 1,
                explanation: "Veins have thinner walls than arteries since they carry low-pressure blood."
            },
            {
                question: "Veins contain:",
                options: ["No valves", "One-way valves", "Two-way valves", "Only smooth muscle"],
                correct: 1,
                explanation: "Veins contain one-way valves to prevent backflow of blood."
            },
            {
                question: "The pulmonary artery carries:",
                options: ["Oxygenated blood", "Deoxygenated blood", "Mixed blood", "No blood"],
                correct: 1,
                explanation: "The pulmonary artery carries deoxygenated blood from right ventricle to lungs."
            },
            {
                question: "Pulmonary veins carry:",
                options: ["Deoxygenated blood", "Oxygenated blood", "Mixed blood", "Lymph"],
                correct: 1,
                explanation: "Pulmonary veins carry oxygenated blood from lungs to left atrium."
            },
            {
                question: "The aorta has:",
                options: ["2 main parts", "3 main parts", "4 main parts", "5 main parts"],
                correct: 2,
                explanation: "The aorta has 4 parts: ascending aorta, aortic arch, descending thoracic aorta, and abdominal aorta."
            },
            {
                question: "The superior vena cava drains:",
                options: ["Lower body", "Upper body", "Heart only", "Lungs only"],
                correct: 1,
                explanation: "Superior vena cava collects deoxygenated blood from head, neck, arms, and upper chest."
            },
            {
                question: "The inferior vena cava drains:",
                options: ["Upper body", "Lower body", "Heart only", "Lungs only"],
                correct: 1,
                explanation: "Inferior vena cava collects deoxygenated blood from abdomen, pelvis, and legs."
            },
            {
                question: "Arterioles are:",
                options: ["Large arteries", "Small arteries", "Large veins", "Small veins"],
                correct: 1,
                explanation: "Arterioles are small arteries that regulate blood flow to capillary beds."
            },
            {
                question: "Venules are:",
                options: ["Large arteries", "Small arteries", "Large veins", "Small veins"],
                correct: 3,
                explanation: "Venules are small veins that collect blood from capillaries."
            },
            {
                question: "Blood pressure is highest in:",
                options: ["Veins", "Capillaries", "Arteries", "Venules"],
                correct: 2,
                explanation: "Blood pressure is highest in arteries, especially near the heart."
            },
            {
                question: "Blood pressure is lowest in:",
                options: ["Arteries", "Arterioles", "Capillaries", "Veins"],
                correct: 3,
                explanation: "Blood pressure is lowest in veins, especially those returning to heart."
            },
            {
                question: "Systolic pressure represents:",
                options: ["Ventricular relaxation", "Ventricular contraction", "Atrial filling", "Heart rate"],
                correct: 1,
                explanation: "Systolic pressure is the maximum pressure during ventricular contraction."
            },
            {
                question: "Diastolic pressure represents:",
                options: ["Ventricular contraction", "Ventricular relaxation", "Atrial contraction", "Heart stopping"],
                correct: 1,
                explanation: "Diastolic pressure is the minimum pressure during ventricular relaxation."
            },
            {
                question: "Normal blood pressure is approximately:",
                options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
                correct: 1,
                explanation: "Normal blood pressure is around 120/80 mmHg (systolic/diastolic)."
            },
            {
                question: "Hypertension is defined as:",
                options: ["Low blood pressure", "High blood pressure", "Normal blood pressure", "Variable blood pressure"],
                correct: 1,
                explanation: "Hypertension is persistently elevated blood pressure above normal values."
            },
            {
                question: "The carotid arteries supply:",
                options: ["Arms", "Legs", "Head and neck", "Abdomen"],
                correct: 2,
                explanation: "Carotid arteries supply blood to the head and neck regions."
            },
            {
                question: "The femoral artery supplies:",
                options: ["Arms", "Legs", "Head", "Abdomen"],
                correct: 1,
                explanation: "Femoral arteries supply blood to the legs and lower extremities."
            },
            {
                question: "Coronary circulation supplies:",
                options: ["Lungs", "Brain", "Heart muscle", "Kidneys"],
                correct: 2,
                explanation: "Coronary circulation provides blood supply to the heart muscle itself."
            },
            {
                question: "Portal circulation occurs in:",
                options: ["Heart", "Lungs", "Liver", "Brain"],
                correct: 2,
                explanation: "Hepatic portal circulation carries blood from digestive organs to liver."
            },
            {
                question: "Vasoconstriction:",
                options: ["Increases vessel diameter", "Decreases vessel diameter", "Has no effect", "Stops blood flow"],
                correct: 1,
                explanation: "Vasoconstriction is the narrowing of blood vessels, increasing resistance."
            },
            {
                question: "Vasodilation:",
                options: ["Decreases vessel diameter", "Increases vessel diameter", "Has no effect", "Stops blood flow"],
                correct: 1,
                explanation: "Vasodilation is the widening of blood vessels, decreasing resistance."
            },

            // LYMPHATIC SYSTEM (Questions 76-100)
            {
                question: "The lymphatic system functions to:",
                options: ["Pump blood", "Return fluid to circulation", "Produce red blood cells", "Store nutrients"],
                correct: 1,
                explanation: "The lymphatic system returns excess tissue fluid to the circulatory system."
            },
            {
                question: "Lymph is:",
                options: ["Red blood cells", "Excess tissue fluid", "Platelets", "Plasma proteins"],
                correct: 1,
                explanation: "Lymph is excess tissue fluid that has entered lymphatic vessels."
            },
            {
                question: "Lymph nodes function to:",
                options: ["Pump lymph", "Filter lymph", "Store lymph", "Produce lymph"],
                correct: 1,
                explanation: "Lymph nodes filter lymph and contain immune cells that fight infections."
            },
            {
                question: "The largest lymphatic organ is:",
                options: ["Thymus", "Spleen", "Liver", "Kidney"],
                correct: 1,
                explanation: "The spleen is the largest lymphatic organ, filtering blood and storing immune cells."
            },
            {
                question: "The thymus is most active during:",
                options: ["Old age", "Childhood", "Middle age", "It's always inactive"],
                correct: 1,
                explanation: "The thymus is most active during childhood, producing T lymphocytes."
            },
            {
                question: "Lymphatic vessels have:",
                options: ["No valves", "One-way valves", "Two-way valves", "Pumps"],
                correct: 1,
                explanation: "Lymphatic vessels contain one-way valves to prevent backflow of lymph."
            },
            {
                question: "The thoracic duct drains lymph from:",
                options: ["Right arm only", "Left side of body", "Most of the body", "Head only"],
                correct: 2,
                explanation: "The thoracic duct drains lymph from most of the body except the upper right quadrant."
            },
            {
                question: "The right lymphatic duct drains:",
                options: ["Entire body", "Lower body", "Upper right portion of body", "Left side only"],
                correct: 2,
                explanation: "The right lymphatic duct drains the right arm, right side of head and neck, and right chest."
            },
            {
                question: "Lymph eventually returns to blood via:",
                options: ["Arteries", "Subclavian veins", "Heart directly", "Liver"],
                correct: 1,
                explanation: "Lymph returns to blood circulation through subclavian veins near the heart."
            },
            {
                question: "Edema can result from:",
                options: ["Normal lymphatic function", "Blocked lymphatic drainage", "Increased blood flow", "Decreased heart rate"],
                correct: 1,
                explanation: "Edema (swelling) can occur when lymphatic drainage is impaired."
            },
            {
                question: "Tonsils are:",
                options: ["Blood vessels", "Lymphatic tissues", "Muscles", "Bones"],
                correct: 1,
                explanation: "Tonsils are lymphatic tissues that help defend against infections entering through mouth and nose."
            },
            {
                question: "Peyer's patches are found in:",
                options: ["Lungs", "Small intestine", "Brain", "Heart"],
                correct: 1,
                explanation: "Peyer's patches are lymphatic tissues in the small intestine that monitor intestinal bacteria."
            },
            {
                question: "The spleen filters:",
                options: ["Lymph", "Blood", "Urine", "Air"],
                correct: 1,
                explanation: "The spleen filters blood, removing old red blood cells and foreign particles."
            },
            {
                question: "White pulp in the spleen contains:",
                options: ["Red blood cells", "Immune cells", "Platelets", "Plasma"],
                correct: 1,
                explanation: "White pulp contains lymphocytes and other immune cells for fighting infections."
            },
            {
                question: "Red pulp in the spleen:",
                options: ["Produces red cells", "Filters blood", "Stores white cells", "Makes antibodies"],
                correct: 1,
                explanation: "Red pulp filters blood and removes old or damaged red blood cells."
            },
            {
                question: "Lymphocytes are produced in:",
                options: ["Heart", "Lymphatic organs", "Liver", "Kidneys"],
                correct: 1,
                explanation: "Lymphocytes are produced and mature in various lymphatic organs."
            },
            {
                question: "Chyle is:",
                options: ["Blood plasma", "Lymph containing fats", "Pure water", "Red blood cells"],
                correct: 1,
                explanation: "Chyle is lymph from intestines that contains absorbed fats, giving it a milky appearance."
            },
            {
                question: "Lacteals are:",
                options: ["Blood vessels", "Lymphatic vessels in intestines", "Nerve fibers", "Muscle fibers"],
                correct: 1,
                explanation: "Lacteals are specialized lymphatic vessels in intestinal villi that absorb fats."
            },
            {
                question: "The cisterna chyli is:",
                options: ["Part of heart", "Dilated start of thoracic duct", "Lymph node", "Spleen section"],
                correct: 1,
                explanation: "Cisterna chyli is the dilated beginning of the thoracic duct in the abdomen."
            },
            {
                question: "Lymphatic capillaries are:",
                options: ["Closed at one end", "Connected to arteries", "Part of blood circulation", "Found only in heart"],
                correct: 0,
                explanation: "Lymphatic capillaries are blind-ended vessels that collect excess tissue fluid."
            },
            {
                question: "The lymphatic system helps maintain:",
                options: ["Body temperature", "Fluid balance", "Heart rate", "Bone density"],
                correct: 1,
                explanation: "The lymphatic system helps maintain fluid balance by returning excess tissue fluid to circulation."
            },
            {
                question: "Lymphedema is:",
                options: ["Excess lymph production", "Blocked lymphatic drainage", "Normal lymph flow", "Absent lymph nodes"],
                correct: 1,
                explanation: "Lymphedema is swelling caused by impaired lymphatic drainage."
            },
            {
                question: "The appendix is considered:",
                options: ["Digestive organ only", "Lymphatic tissue", "Excretory organ", "Respiratory structure"],
                correct: 1,
                explanation: "The appendix contains lymphatic tissue and may play a role in immune function."
            },
            {
                question: "Lymph flow is aided by:",
                options: ["Heart pumping only", "Muscle contractions and breathing", "Gravity only", "Blood pressure"],
                correct: 1,
                explanation: "Lymph flow is promoted by skeletal muscle contractions, breathing movements, and one-way valves."
            },
            {
                question: "Swollen lymph nodes often indicate:",
                options: ["Normal function", "Infection or disease", "Decreased immunity", "Heart problems"],
                correct: 1,
                explanation: "Swollen lymph nodes usually indicate they're fighting infection or filtering abnormal substances."
            }
        ],
        'Immunity': [
            // INNATE IMMUNITY (Questions 1-25)
            {
                question: "The first line of defense against pathogens includes:",
                options: ["Antibodies", "Skin and mucous membranes", "T cells", "B cells"],
                correct: 1,
                explanation: "Skin and mucous membranes form the first line of defense, providing physical and chemical barriers."
            },
            {
                question: "Innate immunity is:",
                options: ["Specific to particular pathogens", "Non-specific defense", "Learned response", "Memory-based"],
                correct: 1,
                explanation: "Innate immunity provides non-specific, immediate defense against a wide range of pathogens."
            },
            {
                question: "Adaptive immunity is:",
                options: ["Non-specific", "Specific to particular pathogens", "Immediate", "Always present"],
                correct: 1,
                explanation: "Adaptive immunity provides specific, targeted responses against particular pathogens."
            },
            {
                question: "Phagocytosis is carried out by:",
                options: ["B cells", "Macrophages and neutrophils", "T cells", "Plasma cells"],
                correct: 1,
                explanation: "Phagocytosis is performed by phagocytes like macrophages and neutrophils that engulf pathogens."
            },
            {
                question: "The process of engulfing and destroying pathogens is called:",
                options: ["Phagocytosis", "Pinocytosis", "Exocytosis", "Endocytosis"],
                correct: 0,
                explanation: "Phagocytosis is the process where immune cells engulf and destroy pathogens."
            },
            {
                question: "Neutrophils are:",
                options: ["First responders to infection", "Memory cells", "Antibody producers", "Antigen presenters"],
                correct: 0,
                explanation: "Neutrophils are the most abundant white blood cells and first responders to bacterial infections."
            },
            {
                question: "Macrophages function to:",
                options: ["Produce antibodies", "Engulf pathogens and debris", "Activate complement", "Produce antigens"],
                correct: 1,
                explanation: "Macrophages engulf pathogens, cellular debris, and foreign substances."
            },
            {
                question: "Natural killer (NK) cells target:",
                options: ["Bacteria", "Virus-infected cells", "Fungi", "Normal cells"],
                correct: 1,
                explanation: "NK cells target and destroy virus-infected cells and tumor cells."
            },
            {
                question: "The complement system:",
                options: ["Produces antibodies", "Enhances immune responses", "Suppresses immunity", "Stores memory"],
                correct: 1,
                explanation: "The complement system enhances immune responses through cell lysis, inflammation, and opsonization."
            },
            {
                question: "Inflammation is characterized by:",
                options: ["Reduced blood flow", "Decreased permeability", "Redness, heat, swelling, pain", "Decreased immune activity"],
                correct: 2,
                explanation: "Inflammation shows classic signs: redness, heat, swelling, pain, and loss of function."
            },
            {
                question: "Histamine is released by:",
                options: ["T cells", "B cells", "Mast cells", "Plasma cells"],
                correct: 2,
                explanation: "Histamine is released by mast cells and basophils during allergic reactions and inflammation."
            },
            {
                question: "Fever is beneficial because it:",
                options: ["Kills all bacteria", "Enhances immune function", "Reduces inflammation", "Prevents infection"],
                correct: 1,
                explanation: "Fever enhances immune function by increasing white blood cell activity and inhibiting pathogen growth."
            },
            {
                question: "Interferons are produced in response to:",
                options: ["Bacterial infections", "Viral infections", "Fungal infections", "Allergic reactions"],
                correct: 1,
                explanation: "Interferons are proteins produced by virus-infected cells to warn neighboring cells."
            },
            {
                question: "Lysozyme is found in:",
                options: ["Blood only", "Tears and saliva", "Bones", "Muscles"],
                correct: 1,
                explanation: "Lysozyme is an antimicrobial enzyme found in tears, saliva, and other secretions."
            },
            {
                question: "The acidic environment of the stomach:",
                options: ["Promotes bacterial growth", "Kills many pathogens", "Has no effect on pathogens", "Only affects viruses"],
                correct: 1,
                explanation: "The acidic stomach environment (pH ~2) kills many ingested pathogens."
            },
            {
                question: "Mucus traps:",
                options: ["Nutrients", "Pathogens and particles", "Antibodies", "White blood cells"],
                correct: 1,
                explanation: "Mucus traps pathogens and particles, preventing them from reaching deeper tissues."
            },
            {
                question: "Cilia in respiratory tract:",
                options: ["Produce mucus", "Move mucus and trapped particles upward", "Kill bacteria", "Produce antibodies"],
                correct: 1,
                explanation: "Cilia move mucus containing trapped pathogens and debris upward for removal."
            },
            {
                question: "Eosinophils are particularly important against:",
                options: ["Bacteria", "Viruses", "Parasites", "Fungi"],
                correct: 2,
                explanation: "Eosinophils are particularly effective against parasitic infections and allergic reactions."
            },
            {
                question: "Basophils release:",
                options: ["Antibodies", "Histamine and heparin", "Antigens", "Complement proteins"],
                correct: 1,
                explanation: "Basophils release histamine and heparin during allergic reactions and inflammation."
            },
            {
                question: "Dendritic cells function as:",
                options: ["Phagocytes only", "Antigen-presenting cells", "Antibody producers", "Memory cells"],
                correct: 1,
                explanation: "Dendritic cells are professional antigen-presenting cells that initiate adaptive immune responses."
            },
            {
                question: "The spleen filters:",
                options: ["Lymph", "Blood", "Urine", "Air"],
                correct: 1,
                explanation: "The spleen filters blood, removing old red blood cells and pathogens."
            },
            {
                question: "Antimicrobial peptides:",
                options: ["Are produced by pathogens", "Kill or inhibit microbes", "Suppress immunity", "Are always harmful"],
                correct: 1,
                explanation: "Antimicrobial peptides are natural antibiotics produced by the body to kill microbes."
            },
            {
                question: "Toll-like receptors (TLRs):",
                options: ["Recognize self antigens", "Recognize pathogen patterns", "Produce antibodies", "Store memory"],
                correct: 1,
                explanation: "TLRs recognize pathogen-associated molecular patterns (PAMPs) to initiate immune responses."
            },
            {
                question: "The thymus is important for:",
                options: ["B cell development", "T cell development", "Antibody production", "Complement activation"],
                correct: 1,
                explanation: "The thymus is where T cells mature and learn to distinguish self from non-self."
            },
            {
                question: "Bone marrow produces:",
                options: ["Only red blood cells", "All blood cells", "Only white blood cells", "Only platelets"],
                correct: 1,
                explanation: "Bone marrow produces all types of blood cells including immune cells."
            },

            // ADAPTIVE IMMUNITY (Questions 26-50)
            {
                question: "B cells are responsible for:",
                options: ["Cell-mediated immunity", "Humoral immunity", "Innate immunity", "Phagocytosis"],
                correct: 1,
                explanation: "B cells are responsible for humoral immunity through antibody production."
            },
            {
                question: "T cells are responsible for:",
                options: ["Humoral immunity", "Cell-mediated immunity", "Complement activation", "Phagocytosis"],
                correct: 1,
                explanation: "T cells are responsible for cell-mediated immunity and immune regulation."
            },
            {
                question: "Antibodies are produced by:",
                options: ["T cells", "Plasma cells", "Macrophages", "Neutrophils"],
                correct: 1,
                explanation: "Antibodies are produced by plasma cells, which are activated B cells."
            },
            {
                question: "An antigen is:",
                options: ["An antibody", "A substance that triggers immune response", "A type of cell", "An enzyme"],
                correct: 1,
                explanation: "An antigen is any substance that can trigger an immune response."
            },
            {
                question: "The variable region of an antibody:",
                options: ["Is identical in all antibodies", "Determines antigen specificity", "Has no function", "Only binds complement"],
                correct: 1,
                explanation: "The variable region determines the specific antigen that each antibody can bind."
            },
            {
                question: "The constant region of an antibody:",
                options: ["Binds antigens", "Determines antibody class", "Varies between antibodies", "Has no function"],
                correct: 1,
                explanation: "The constant region determines the antibody class (IgG, IgM, etc.) and effector functions."
            },
            {
                question: "IgG antibodies:",
                options: ["Cannot cross placenta", "Are the most abundant in blood", "Only exist in secretions", "Are always harmful"],
                correct: 1,
                explanation: "IgG antibodies are most abundant in blood and can cross the placenta."
            },
            {
                question: "IgM antibodies:",
                options: ["Are produced first in immune response", "Cannot activate complement", "Are smallest antibodies", "Only exist in tissues"],
                correct: 0,
                explanation: "IgM antibodies are the first produced during an immune response."
            },
            {
                question: "IgA antibodies are found in:",
                options: ["Blood only", "Secretions like saliva and tears", "Bones", "Muscle tissue"],
                correct: 1,
                explanation: "IgA antibodies are found in secretions, providing mucosal immunity."
            },
            {
                question: "IgE antibodies are involved in:",
                options: ["Normal immune responses only", "Allergic reactions", "Blood clotting", "Bone formation"],
                correct: 1,
                explanation: "IgE antibodies are involved in allergic reactions and parasitic infections."
            },
            {
                question: "Helper T cells (CD4+):",
                options: ["Kill infected cells directly", "Help coordinate immune responses", "Produce antibodies", "Phagocytose pathogens"],
                correct: 1,
                explanation: "Helper T cells coordinate immune responses by activating other immune cells."
            },
            {
                question: "Cytotoxic T cells (CD8+):",
                options: ["Produce antibodies", "Kill infected cells", "Help other cells", "Phagocytose pathogens"],
                correct: 1,
                explanation: "Cytotoxic T cells directly kill virus-infected cells and tumor cells."
            },
            {
                question: "Memory cells provide:",
                options: ["Immediate protection", "Long-term immunity", "Innate immunity", "Complement activation"],
                correct: 1,
                explanation: "Memory cells provide long-term immunity by remembering previous encounters with antigens."
            },
            {
                question: "Primary immune response:",
                options: ["Is faster than secondary", "Occurs on first exposure", "Produces more antibodies", "Involves only memory cells"],
                correct: 1,
                explanation: "Primary immune response occurs on first exposure to an antigen and is slower."
            },
            {
                question: "Secondary immune response:",
                options: ["Is slower than primary", "Is faster and stronger", "Produces fewer antibodies", "Only involves naive cells"],
                correct: 1,
                explanation: "Secondary immune response is faster and stronger due to memory cells."
            },
            {
                question: "Clonal selection refers to:",
                options: ["Random cell division", "Specific lymphocyte activation", "Cell death", "Inflammation"],
                correct: 1,
                explanation: "Clonal selection is the activation and proliferation of specific lymphocytes."
            },
            {
                question: "MHC Class I molecules:",
                options: ["Present to CD4+ T cells", "Present to CD8+ T cells", "Are only on B cells", "Produce antibodies"],
                correct: 1,
                explanation: "MHC Class I molecules present intracellular antigens to CD8+ T cells."
            },
            {
                question: "MHC Class II molecules:",
                options: ["Present to CD8+ T cells", "Present to CD4+ T cells", "Are on all cells", "Kill pathogens"],
                correct: 1,
                explanation: "MHC Class II molecules present extracellular antigens to CD4+ T cells."
            },
            {
                question: "Antigen presentation is important for:",
                options: ["Innate immunity only", "T cell activation", "Complement activation", "Phagocytosis"],
                correct: 1,
                explanation: "Antigen presentation is crucial for T cell activation and adaptive immunity."
            },
            {
                question: "Cytokines are:",
                options: ["Types of antibodies", "Cell communication molecules", "Complement proteins", "Antigens"],
                correct: 1,
                explanation: "Cytokines are signaling molecules that coordinate immune cell communication."
            },
            {
                question: "Interleukins are:",
                options: ["Types of antibodies", "Communication molecules between leukocytes", "Complement proteins", "Enzymes"],
                correct: 1,
                explanation: "Interleukins are cytokines that facilitate communication between white blood cells."
            },
            {
                question: "Regulatory T cells (Tregs):",
                options: ["Enhance immune responses", "Suppress immune responses", "Kill pathogens", "Produce antibodies"],
                correct: 1,
                explanation: "Regulatory T cells suppress immune responses to prevent autoimmunity."
            },
            {
                question: "Autoimmunity occurs when:",
                options: ["Immune system attacks self", "Immune system is suppressed", "No immune response occurs", "Only bacteria are targeted"],
                correct: 0,
                explanation: "Autoimmunity occurs when the immune system mistakenly attacks the body's own tissues."
            },
            {
                question: "Immunological tolerance is:",
                options: ["Attacking self tissues", "Not responding to self antigens", "Overactive immunity", "Complete immune suppression"],
                correct: 1,
                explanation: "Immunological tolerance is the immune system's ability to not respond to self antigens."
            },
            {
                question: "Affinity maturation refers to:",
                options: ["Cell death", "Improving antibody binding", "Reducing immune response", "Complement activation"],
                correct: 1,
                explanation: "Affinity maturation improves antibody binding strength through somatic hypermutation."
            },

            // VACCINES AND IMMUNIZATION (Questions 51-75)
            {
                question: "Vaccines provide:",
                options: ["Innate immunity", "Artificial active immunity", "Artificial passive immunity", "No immunity"],
                correct: 1,
                explanation: "Vaccines provide artificial active immunity by stimulating the immune system to produce memory cells."
            },
            {
                question: "Passive immunity is acquired through:",
                options: ["Vaccination", "Natural infection", "Antibody transfer", "Exercise"],
                correct: 2,
                explanation: "Passive immunity is acquired through transfer of antibodies from another source."
            },
            {
                question: "Active immunity involves:",
                options: ["Antibody transfer", "Body producing its own antibodies", "Complement activation", "Phagocytosis"],
                correct: 1,
                explanation: "Active immunity involves the body's own immune system producing antibodies and memory cells."
            },
            {
                question: "Live attenuated vaccines contain:",
                options: ["Dead pathogens", "Weakened live pathogens", "Toxins only", "Antibodies"],
                correct: 1,
                explanation: "Live attenuated vaccines contain weakened but live pathogens that can't cause disease."
            },
            {
                question: "Inactivated vaccines contain:",
                options: ["Live pathogens", "Dead pathogens", "Only antibodies", "No pathogen material"],
                correct: 1,
                explanation: "Inactivated vaccines contain killed pathogens that can still stimulate immunity."
            },
            {
                question: "Toxoid vaccines contain:",
                options: ["Live bacteria", "Inactivated toxins", "Antibodies", "Live viruses"],
                correct: 1,
                explanation: "Toxoid vaccines contain inactivated bacterial toxins that stimulate immunity."
            },
            {
                question: "mRNA vaccines work by:",
                options: ["Containing live virus", "Instructing cells to make antigen", "Providing antibodies", "Blocking immune response"],
                correct: 1,
                explanation: "mRNA vaccines instruct cells to produce antigens that stimulate immune responses."
            },
            {
                question: "Herd immunity occurs when:",
                options: ["Everyone is vaccinated", "Enough people are immune", "No one is immune", "Only children are vaccinated"],
                correct: 1,
                explanation: "Herd immunity occurs when enough people in a population are immune to prevent disease spread."
            },
            {
                question: "Adjuvants in vaccines:",
                options: ["Weaken the immune response", "Enhance the immune response", "Kill pathogens", "Provide antibodies"],
                correct: 1,
                explanation: "Adjuvants enhance the immune response to vaccines, improving effectiveness."
            },
            {
                question: "Booster shots are given to:",
                options: ["Weaken immunity", "Maintain immunity", "Cause disease", "Prevent all vaccinations"],
                correct: 1,
                explanation: "Booster shots maintain immunity by restimulating memory cells."
            },
            {
                question: "Natural active immunity develops from:",
                options: ["Vaccination", "Natural infection", "Antibody injection", "Birth"],
                correct: 1,
                explanation: "Natural active immunity develops from surviving natural infection with a pathogen."
            },
            {
                question: "Natural passive immunity occurs through:",
                options: ["Vaccination", "Infection", "Maternal antibodies", "Exercise"],
                correct: 2,
                explanation: "Natural passive immunity occurs through maternal antibodies passed to offspring."
            },
            {
                question: "Artificial passive immunity is provided by:",
                options: ["Vaccines", "Natural infection", "Antibody injections", "Exercise"],
                correct: 2,
                explanation: "Artificial passive immunity is provided by injecting antibodies from another source."
            },
            {
                question: "The measles vaccine is an example of:",
                options: ["Live attenuated vaccine", "Inactivated vaccine", "Toxoid vaccine", "Passive immunity"],
                correct: 0,
                explanation: "The measles vaccine is a live attenuated vaccine containing weakened virus."
            },
            {
                question: "The polio vaccine can be:",
                options: ["Only live", "Only inactivated", "Either live or inactivated", "Only passive"],
                correct: 2,
                explanation: "Polio vaccines exist as both live oral (OPV) and inactivated injectable (IPV) forms."
            },
            {
                question: "Tetanus toxoid protects against:",
                options: ["Tetanus bacteria", "Tetanus toxin", "All bacteria", "Viruses"],
                correct: 1,
                explanation: "Tetanus toxoid provides immunity against tetanus toxin produced by Clostridium tetani."
            },
            {
                question: "Immunization schedules are designed to:",
                options: ["Overwhelm the immune system", "Provide optimal protection", "Cause disease", "Weaken immunity"],
                correct: 1,
                explanation: "Immunization schedules are designed to provide optimal protection at appropriate ages."
            },
            {
                question: "Contraindications to vaccination include:",
                options: ["All illnesses", "Severe immunodeficiency", "Minor cold", "Being healthy"],
                correct: 1,
                explanation: "Severe immunodeficiency is a contraindication to live vaccines."
            },
            {
                question: "Vaccine adverse events:",
                options: ["Always occur", "Are always severe", "Are usually mild", "Never occur"],
                correct: 2,
                explanation: "Vaccine adverse events are usually mild, such as soreness at injection site."
            },
            {
                question: "Vaccine efficacy refers to:",
                options: ["Safety only", "Effectiveness in preventing disease", "Cost", "Availability"],
                correct: 1,
                explanation: "Vaccine efficacy measures how effective a vaccine is at preventing disease."
            },
            {
                question: "The HPV vaccine prevents:",
                options: ["All cancers", "Cervical cancer", "All viral infections", "Bacterial infections"],
                correct: 1,
                explanation: "HPV vaccine prevents cervical and other cancers caused by human papillomavirus."
            },
            {
                question: "Influenza vaccines need annual updates because:",
                options: ["They wear off quickly", "Influenza virus mutates", "They're ineffective", "They cause disease"],
                correct: 1,
                explanation: "Influenza vaccines need updates because the virus mutates, changing surface antigens."
            },
            {
                question: "COVID-19 vaccines were developed using:",
                options: ["Only traditional methods", "Various platforms", "No new technology", "Only live virus"],
                correct: 1,
                explanation: "COVID-19 vaccines used various platforms including mRNA, viral vector, and protein subunit."
            },
            {
                question: "Travel vaccines are recommended based on:",
                options: ["Personal preference only", "Destination disease risks", "Cost only", "Availability only"],
                correct: 1,
                explanation: "Travel vaccines are recommended based on disease risks in destination countries."
            },
            {
                question: "Vaccine hesitancy can be addressed through:",
                options: ["Ignoring concerns", "Education and communication", "Mandates only", "Stopping vaccination"],
                correct: 1,
                explanation: "Vaccine hesitancy is best addressed through education, communication, and addressing concerns."
            },

            // IMMUNE DISORDERS (Questions 76-100)
            {
                question: "Immunodeficiency is characterized by:",
                options: ["Overactive immunity", "Weakened immune system", "Normal immunity", "Autoimmunity"],
                correct: 1,
                explanation: "Immunodeficiency is characterized by a weakened or compromised immune system."
            },
            {
                question: "Primary immunodeficiency is:",
                options: ["Acquired", "Genetic", "Temporary", "Always mild"],
                correct: 1,
                explanation: "Primary immunodeficiency is genetic and present from birth."
            },
            {
                question: "Secondary immunodeficiency is:",
                options: ["Genetic", "Acquired", "Always permanent", "Never serious"],
                correct: 1,
                explanation: "Secondary immunodeficiency is acquired due to disease, drugs, or environmental factors."
            },
            {
                question: "HIV primarily targets:",
                options: ["B cells", "CD4+ T cells", "Neutrophils", "Red blood cells"],
                correct: 1,
                explanation: "HIV primarily targets CD4+ T helper cells, weakening the immune system."
            },
            {
                question: "AIDS develops when:",
                options: ["HIV is first acquired", "CD4+ count drops severely", "Antibodies appear", "Treatment starts"],
                correct: 1,
                explanation: "AIDS develops when CD4+ T cell count drops below 200 cells/μL or opportunistic infections occur."
            },
            {
                question: "Opportunistic infections occur in:",
                options: ["Healthy individuals", "Immunocompromised individuals", "Only children", "Only elderly"],
                correct: 1,
                explanation: "Opportunistic infections occur in immunocompromised individuals who can't fight them off."
            },
            {
                question: "SCID (Severe Combined Immunodeficiency) affects:",
                options: ["Only B cells", "Only T cells", "Both B and T cells", "Only innate immunity"],
                correct: 2,
                explanation: "SCID affects both B and T cell function, causing severe immunodeficiency."
            },
            {
                question: "Allergic reactions are caused by:",
                options: ["Underactive immunity", "Overactive immunity to harmless substances", "Infections", "Autoimmunity"],
                correct: 1,
                explanation: "Allergic reactions result from overactive immune responses to harmless environmental substances."
            },
            {
                question: "Type I hypersensitivity involves:",
                options: ["T cells only", "IgE antibodies", "IgG antibodies", "Complement only"],
                correct: 1,
                explanation: "Type I hypersensitivity involves IgE antibodies and immediate allergic reactions."
            },
            {
                question: "Anaphylaxis is:",
                options: ["Mild allergic reaction", "Severe systemic allergic reaction", "Autoimmune disease", "Immunodeficiency"],
                correct: 1,
                explanation: "Anaphylaxis is a severe, life-threatening systemic allergic reaction."
            },
            {
                question: "Rheumatoid arthritis is an example of:",
                options: ["Allergy", "Autoimmune disease", "Immunodeficiency", "Normal immunity"],
                correct: 1,
                explanation: "Rheumatoid arthritis is an autoimmune disease where immunity attacks joint tissues."
            },
            {
                question: "Type 1 diabetes is caused by:",
                options: ["Bacterial infection", "Autoimmune destruction of pancreatic cells", "Allergic reaction", "Immunodeficiency"],
                correct: 1,
                explanation: "Type 1 diabetes results from autoimmune destruction of insulin-producing pancreatic β cells."
            },
            {
                question: "Multiple sclerosis involves:",
                options: ["Muscle weakness only", "Autoimmune attack on nervous system", "Immunodeficiency", "Allergic reactions"],
                correct: 1,
                explanation: "Multiple sclerosis involves autoimmune attack on the myelin sheaths of nerve fibers."
            },
            {
                question: "Organ transplant rejection occurs due to:",
                options: ["Infection", "Immune recognition of foreign tissue", "Allergic reaction", "Immunodeficiency"],
                correct: 1,
                explanation: "Transplant rejection occurs when the immune system recognizes transplanted tissue as foreign."
            },
            {
                question: "Immunosuppressive drugs are used to:",
                options: ["Enhance immunity", "Suppress immune responses", "Cure infections", "Prevent allergies"],
                correct: 1,
                explanation: "Immunosuppressive drugs suppress immune responses to prevent transplant rejection or treat autoimmunity."
            },
            {
                question: "Graft-versus-host disease occurs when:",
                options: ["Host rejects graft", "Graft immune cells attack host", "No immune response", "Normal healing"],
                correct: 1,
                explanation: "GVHD occurs when immune cells in transplanted tissue attack the recipient's tissues."
            },
            {
                question: "Tissue typing involves matching:",
                options: ["Blood types only", "HLA antigens", "Age only", "Size only"],
                correct: 1,
                explanation: "Tissue typing matches HLA (human leukocyte antigen) genes to reduce rejection risk."
            },
            {
                question: "Chronic granulomatous disease affects:",
                options: ["Antibody production", "Phagocyte function", "T cell development", "B cell development"],
                correct: 1,
                explanation: "Chronic granulomatous disease impairs phagocyte ability to kill certain bacteria and fungi."
            },
            {
                question: "Asthma involves:",
                options: ["Only bacterial infections", "Allergic airway inflammation", "Immunodeficiency", "Autoimmunity only"],
                correct: 1,
                explanation: "Asthma involves allergic inflammation of airways with increased IgE and eosinophils."
            },
            {
                question: "Food allergies are mediated by:",
                options: ["IgG antibodies", "IgE antibodies", "T cells only", "Complement only"],
                correct: 1,
                explanation: "Food allergies are typically mediated by IgE antibodies against food proteins."
            },
            {
                question: "Contact dermatitis is an example of:",
                options: ["Type I hypersensitivity", "Type IV hypersensitivity", "Immunodeficiency", "Autoimmunity"],
                correct: 1,
                explanation: "Contact dermatitis is Type IV (delayed) hypersensitivity mediated by T cells."
            },
            {
                question: "Immune system aging involves:",
                options: ["Enhanced function", "Immunosenescence", "No changes", "Only memory improvement"],
                correct: 1,
                explanation: "Immune system aging involves immunosenescence with declined function and increased autoimmunity."
            },
            {
                question: "Cancer immunotherapy works by:",
                options: ["Suppressing all immunity", "Enhancing anti-tumor immunity", "Promoting tumor growth", "Ignoring tumors"],
                correct: 1,
                explanation: "Cancer immunotherapy enhances the immune system's ability to recognize and destroy tumor cells."
            },
            {
                question: "Checkpoint inhibitors work by:",
                options: ["Blocking immune activation", "Removing immune brakes", "Suppressing T cells", "Activating tumors"],
                correct: 1,
                explanation: "Checkpoint inhibitors remove immune system 'brakes' to enhance anti-tumor responses."
            },
            {
                question: "The future of immunology includes:",
                options: ["Only traditional approaches", "Personalized immunotherapy", "Abandoning vaccines", "Ignoring research"],
                correct: 1,
                explanation: "Future immunology includes personalized immunotherapy, improved vaccines, and precision medicine."
            }
        ],
        'Human Respiration': [
            // RESPIRATORY SYSTEM ANATOMY (Questions 1-25)
            {
                question: "The primary function of the respiratory system is:",
                options: ["Digestion", "Gas exchange", "Blood circulation", "Waste removal"],
                correct: 1,
                explanation: "The primary function of the respiratory system is gas exchange - taking in oxygen and removing carbon dioxide."
            },
            {
                question: "Air enters the body through:",
                options: ["Mouth only", "Nose only", "Nose and mouth", "Lungs directly"],
                correct: 2,
                explanation: "Air enters the body through both the nose and mouth, though the nose is preferred for filtering and warming."
            },
            {
                question: "The nasal cavity functions to:",
                options: ["Filter, warm, and humidify air", "Only filter air", "Only warm air", "Store air"],
                correct: 0,
                explanation: "The nasal cavity filters particles, warms cold air, and humidifies dry air before it reaches the lungs."
            },
            {
                question: "The pharynx is:",
                options: ["Part of digestive system only", "Part of respiratory system only", "Shared by digestive and respiratory systems", "Part of circulatory system"],
                correct: 2,
                explanation: "The pharynx (throat) is shared by both the digestive and respiratory systems."
            },
            {
                question: "The larynx contains:",
                options: ["Alveoli", "Vocal cords", "Gas exchange surfaces", "Blood vessels only"],
                correct: 1,
                explanation: "The larynx (voice box) contains the vocal cords and is involved in sound production."
            },
            {
                question: "The trachea is:",
                options: ["The voice box", "The windpipe", "The throat", "Part of the lungs"],
                correct: 1,
                explanation: "The trachea is the windpipe, a tube that carries air from the larynx to the bronchi."
            },
            {
                question: "The trachea is kept open by:",
                options: ["Muscles", "Cartilage rings", "Bone", "Ligaments"],
                correct: 1,
                explanation: "C-shaped cartilage rings keep the trachea open and prevent collapse during breathing."
            },
            {
                question: "The trachea divides into:",
                options: ["Alveoli", "Bronchioles", "Two main bronchi", "Capillaries"],
                correct: 2,
                explanation: "The trachea divides into the right and left main bronchi at the carina."
            },
            {
                question: "Bronchi are:",
                options: ["Gas exchange sites", "Airways that branch into smaller tubes", "Blood vessels", "Muscles"],
                correct: 1,
                explanation: "Bronchi are airways that branch repeatedly into smaller tubes called bronchioles."
            },
            {
                question: "Bronchioles are:",
                options: ["Large airways", "Small airways", "Gas exchange sites", "Blood vessels"],
                correct: 1,
                explanation: "Bronchioles are the smallest airways that lead to the alveolar sacs."
            },
            {
                question: "Gas exchange occurs in:",
                options: ["Trachea", "Bronchi", "Alveoli", "Bronchioles"],
                correct: 2,
                explanation: "Gas exchange between air and blood occurs in the alveoli, tiny air sacs in the lungs."
            },
            {
                question: "Alveoli are:",
                options: ["Large air spaces", "Tiny air sacs", "Blood vessels", "Airways"],
                correct: 1,
                explanation: "Alveoli are microscopic air sacs where oxygen and carbon dioxide are exchanged."
            },
            {
                question: "The right lung has:",
                options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"],
                correct: 1,
                explanation: "The right lung has three lobes: upper, middle, and lower lobes."
            },
            {
                question: "The left lung has:",
                options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"],
                correct: 0,
                explanation: "The left lung has two lobes: upper and lower lobes (smaller to accommodate the heart)."
            },
            {
                question: "The pleura is:",
                options: ["Lung tissue", "Membrane surrounding lungs", "Airways", "Blood vessels"],
                correct: 1,
                explanation: "The pleura is a double membrane that surrounds each lung and lines the chest cavity."
            },
            {
                question: "Pleural fluid functions to:",
                options: ["Exchange gases", "Lubricate and cushion lungs", "Carry oxygen", "Filter air"],
                correct: 1,
                explanation: "Pleural fluid lubricates the pleural membranes and allows smooth lung movement during breathing."
            },
            {
                question: "The diaphragm is:",
                options: ["A lung", "The main breathing muscle", "An airway", "A blood vessel"],
                correct: 1,
                explanation: "The diaphragm is the main muscle of breathing, separating the chest and abdominal cavities."
            },
            {
                question: "The intercostal muscles are located:",
                options: ["In the diaphragm", "Between the ribs", "In the lungs", "In the trachea"],
                correct: 1,
                explanation: "Intercostal muscles are located between the ribs and assist in breathing movements."
            },
            {
                question: "The epiglottis functions to:",
                options: ["Produce sound", "Prevent food from entering trachea", "Exchange gases", "Pump air"],
                correct: 1,
                explanation: "The epiglottis covers the tracheal opening during swallowing to prevent food aspiration."
            },
            {
                question: "Cilia in the respiratory tract:",
                options: ["Exchange gases", "Move mucus upward", "Produce sound", "Store air"],
                correct: 1,
                explanation: "Cilia are hair-like structures that move mucus and trapped particles upward for removal."
            },
            {
                question: "Mucus in the respiratory tract:",
                options: ["Exchanges gases", "Traps particles and pathogens", "Produces sound", "Stores oxygen"],
                correct: 1,
                explanation: "Mucus traps dust, pathogens, and other particles to protect the lungs."
            },
            {
                question: "The respiratory membrane consists of:",
                options: ["Alveolar wall only", "Capillary wall only", "Alveolar wall and capillary wall", "Mucus only"],
                correct: 2,
                explanation: "The respiratory membrane includes the alveolar wall and capillary wall where gas exchange occurs."
            },
            {
                question: "Surfactant is produced by:",
                options: ["Capillaries", "Type II pneumocytes", "Bronchi", "Trachea"],
                correct: 1,
                explanation: "Surfactant is produced by Type II pneumocytes (alveolar cells) to reduce surface tension."
            },
            {
                question: "Surfactant functions to:",
                options: ["Exchange gases", "Reduce surface tension", "Produce mucus", "Filter air"],
                correct: 1,
                explanation: "Surfactant reduces surface tension in alveoli, preventing collapse during expiration."
            },
            {
                question: "The total surface area of alveoli is approximately:",
                options: ["1 square meter", "10 square meters", "70 square meters", "200 square meters"],
                correct: 2,
                explanation: "The total surface area of alveoli is about 70 square meters, maximizing gas exchange efficiency."
            },

            // BREATHING MECHANICS (Questions 26-50)
            {
                question: "Inspiration is:",
                options: ["Breathing out", "Breathing in", "Holding breath", "Gas exchange"],
                correct: 1,
                explanation: "Inspiration (inhalation) is the process of breathing air into the lungs."
            },
            {
                question: "Expiration is:",
                options: ["Breathing in", "Breathing out", "Holding breath", "Gas exchange"],
                correct: 1,
                explanation: "Expiration (exhalation) is the process of breathing air out of the lungs."
            },
            {
                question: "During inspiration, the diaphragm:",
                options: ["Relaxes and moves up", "Contracts and moves down", "Remains stationary", "Vibrates"],
                correct: 1,
                explanation: "During inspiration, the diaphragm contracts and moves downward, increasing chest cavity volume."
            },
            {
                question: "During expiration, the diaphragm:",
                options: ["Contracts and moves down", "Relaxes and moves up", "Remains stationary", "Vibrates"],
                correct: 1,
                explanation: "During expiration, the diaphragm relaxes and moves upward, decreasing chest cavity volume."
            },
            {
                question: "External intercostal muscles:",
                options: ["Cause expiration", "Cause inspiration", "Have no role in breathing", "Only work during exercise"],
                correct: 1,
                explanation: "External intercostal muscles lift the ribs during inspiration, expanding the chest cavity."
            },
            {
                question: "Internal intercostal muscles:",
                options: ["Cause inspiration", "Cause forced expiration", "Have no role in breathing", "Only work during exercise"],
                correct: 1,
                explanation: "Internal intercostal muscles pull ribs down during forced expiration."
            },
            {
                question: "Normal quiet breathing is called:",
                options: ["Hyperpnea", "Eupnea", "Apnea", "Dyspnea"],
                correct: 1,
                explanation: "Eupnea is normal, quiet breathing at rest."
            },
            {
                question: "Tidal volume is:",
                options: ["Air inhaled during deep breathing", "Air exhaled during forced breathing", "Normal breathing volume", "Total lung capacity"],
                correct: 2,
                explanation: "Tidal volume is the amount of air inhaled and exhaled during normal, quiet breathing (~500 mL)."
            },
            {
                question: "Inspiratory reserve volume is:",
                options: ["Normal breathing volume", "Extra air inhaled after normal inspiration", "Air remaining after normal expiration", "Total lung capacity"],
                correct: 1,
                explanation: "Inspiratory reserve volume is the extra air that can be inhaled after a normal inspiration (~3100 mL)."
            },
            {
                question: "Expiratory reserve volume is:",
                options: ["Normal breathing volume", "Extra air inhaled after normal inspiration", "Extra air exhaled after normal expiration", "Total lung capacity"],
                correct: 2,
                explanation: "Expiratory reserve volume is the extra air that can be exhaled after a normal expiration (~1200 mL)."
            },
            {
                question: "Residual volume is:",
                options: ["Normal breathing volume", "Extra air inhaled", "Air remaining in lungs after forced expiration", "Total lung capacity"],
                correct: 2,
                explanation: "Residual volume is the air that remains in the lungs even after forced expiration (~1200 mL)."
            },
            {
                question: "Vital capacity is:",
                options: ["Tidal volume only", "Maximum air inhaled and exhaled", "Residual volume", "Total lung capacity"],
                correct: 1,
                explanation: "Vital capacity is the maximum amount of air that can be inhaled and exhaled (~4800 mL)."
            },
            {
                question: "Total lung capacity is:",
                options: ["Vital capacity only", "Vital capacity plus residual volume", "Tidal volume only", "Residual volume only"],
                correct: 1,
                explanation: "Total lung capacity is vital capacity plus residual volume (~6000 mL)."
            },
            {
                question: "Breathing rate at rest is approximately:",
                options: ["5-10 breaths per minute", "12-20 breaths per minute", "30-40 breaths per minute", "50-60 breaths per minute"],
                correct: 1,
                explanation: "Normal resting breathing rate for adults is 12-20 breaths per minute."
            },
            {
                question: "The breathing center is located in:",
                options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"],
                correct: 2,
                explanation: "The primary breathing center is located in the medulla oblongata of the brainstem."
            },
            {
                question: "Breathing is primarily controlled by:",
                options: ["Oxygen levels", "Carbon dioxide levels", "Nitrogen levels", "Blood pressure"],
                correct: 1,
                explanation: "Breathing is primarily controlled by CO₂ levels detected by chemoreceptors."
            },
            {
                question: "Increased CO₂ in blood:",
                options: ["Decreases breathing rate", "Increases breathing rate", "Has no effect", "Stops breathing"],
                correct: 1,
                explanation: "Increased blood CO₂ (hypercapnia) stimulates chemoreceptors to increase breathing rate."
            },
            {
                question: "Chemoreceptors detect:",
                options: ["Temperature changes", "Blood gas levels", "Blood pressure", "Heart rate"],
                correct: 1,
                explanation: "Chemoreceptors detect changes in blood CO₂, O₂, and pH levels."
            },
            {
                question: "Central chemoreceptors are located in:",
                options: ["Lungs", "Heart", "Medulla oblongata", "Carotid arteries"],
                correct: 2,
                explanation: "Central chemoreceptors in the medulla oblongata primarily detect CO₂/pH changes."
            },
            {
                question: "Peripheral chemoreceptors are located in:",
                options: ["Lungs only", "Carotid and aortic bodies", "Heart only", "Brain only"],
                correct: 1,
                explanation: "Peripheral chemoreceptors in carotid and aortic bodies detect O₂, CO₂, and pH changes."
            },
            {
                question: "The Hering-Breuer reflex:",
                options: ["Increases breathing rate", "Prevents overinflation of lungs", "Decreases oxygen levels", "Stops breathing"],
                correct: 1,
                explanation: "The Hering-Breuer reflex prevents overinflation by inhibiting inspiration when lungs stretch."
            },
            {
                question: "Voluntary breathing control involves:",
                options: ["Medulla only", "Cerebral cortex", "Spinal cord only", "Cerebellum only"],
                correct: 1,
                explanation: "Voluntary breathing control involves the cerebral cortex overriding automatic control."
            },
            {
                question: "Hyperventilation causes:",
                options: ["Increased CO₂", "Decreased CO₂", "No change in CO₂", "Increased O₂ only"],
                correct: 1,
                explanation: "Hyperventilation removes excess CO₂, leading to respiratory alkalosis."
            },
            {
                question: "Hypoventilation causes:",
                options: ["Decreased CO₂", "Increased CO₂", "No change in CO₂", "Decreased O₂ only"],
                correct: 1,
                explanation: "Hypoventilation allows CO₂ to accumulate, leading to respiratory acidosis."
            },
            {
                question: "Dead space refers to:",
                options: ["Areas with no gas exchange", "Alveoli only", "Blood vessels", "Muscles"],
                correct: 0,
                explanation: "Dead space includes airways where no gas exchange occurs (trachea, bronchi, bronchioles)."
            },

            // GAS EXCHANGE AND TRANSPORT (Questions 51-75)
            {
                question: "Oxygen diffuses from alveoli to blood because:",
                options: ["Active transport", "Higher concentration in alveoli", "Lower concentration in alveoli", "Protein carriers"],
                correct: 1,
                explanation: "Oxygen diffuses from alveoli (higher concentration) to blood (lower concentration) by passive diffusion."
            },
            {
                question: "Carbon dioxide diffuses from blood to alveoli because:",
                options: ["Active transport", "Higher concentration in blood", "Lower concentration in blood", "Protein carriers"],
                correct: 1,
                explanation: "CO₂ diffuses from blood (higher concentration) to alveoli (lower concentration) for removal."
            },
            {
                question: "Most oxygen in blood is transported:",
                options: ["Dissolved in plasma", "Bound to hemoglobin", "As bicarbonate", "In white blood cells"],
                correct: 1,
                explanation: "About 98.5% of oxygen is transported bound to hemoglobin in red blood cells."
            },
            {
                question: "Hemoglobin can carry a maximum of:",
                options: ["2 oxygen molecules", "4 oxygen molecules", "6 oxygen molecules", "8 oxygen molecules"],
                correct: 1,
                explanation: "Each hemoglobin molecule has 4 heme groups, each capable of binding one oxygen molecule."
            },
            {
                question: "Oxyhemoglobin is:",
                options: ["Hemoglobin without oxygen", "Hemoglobin with oxygen", "Hemoglobin with CO₂", "Damaged hemoglobin"],
                correct: 1,
                explanation: "Oxyhemoglobin is hemoglobin that has bound oxygen molecules."
            },
            {
                question: "Deoxyhemoglobin is:",
                options: ["Hemoglobin with oxygen", "Hemoglobin without oxygen", "Hemoglobin with CO₂", "Damaged hemoglobin"],
                correct: 1,
                explanation: "Deoxyhemoglobin is hemoglobin that has released its oxygen."
            },
            {
                question: "The oxygen-hemoglobin dissociation curve shows:",
                options: ["How oxygen binds to hemoglobin", "Blood pressure changes", "Heart rate changes", "Temperature changes"],
                correct: 0,
                explanation: "The curve shows the relationship between oxygen partial pressure and hemoglobin saturation."
            },
            {
                question: "Carbon dioxide is transported in blood as:",
                options: ["Dissolved CO₂ only", "Bicarbonate only", "Carbaminohemoglobin only", "All of the above"],
                correct: 3,
                explanation: "CO₂ is transported as dissolved CO₂ (7%), bicarbonate (70%), and carbaminohemoglobin (23%)."
            },
            {
                question: "Most CO₂ is transported as:",
                options: ["Dissolved CO₂", "Bicarbonate ions", "Carbaminohemoglobin", "Free CO₂"],
                correct: 1,
                explanation: "About 70% of CO₂ is transported as bicarbonate ions (HCO₃⁻) in plasma."
            },
            {
                question: "Carbonic anhydrase:",
                options: ["Transports oxygen", "Converts CO₂ to bicarbonate", "Binds to hemoglobin", "Produces ATP"],
                correct: 1,
                explanation: "Carbonic anhydrase catalyzes the conversion of CO₂ and water to carbonic acid, then bicarbonate."
            },
            {
                question: "The chloride shift involves:",
                options: ["Oxygen transport", "CO₂ transport", "Nitrogen transport", "Water transport"],
                correct: 1,
                explanation: "The chloride shift maintains electrical neutrality during CO₂ transport as bicarbonate."
            },
            {
                question: "Bohr effect describes:",
                options: ["CO₂ affecting oxygen binding", "Temperature affecting breathing", "pH affecting breathing", "Pressure affecting lungs"],
                correct: 0,
                explanation: "The Bohr effect describes how CO₂ and low pH decrease hemoglobin's oxygen affinity."
            },
            {
                question: "In tissues, hemoglobin:",
                options: ["Binds more oxygen", "Releases oxygen", "Binds CO₂ only", "Has no function"],
                correct: 1,
                explanation: "In tissues, hemoglobin releases oxygen due to low O₂ and high CO₂ concentrations."
            },
            {
                question: "In lungs, hemoglobin:",
                options: ["Releases oxygen", "Binds oxygen", "Binds CO₂ only", "Has no function"],
                correct: 1,
                explanation: "In lungs, hemoglobin binds oxygen due to high O₂ and low CO₂ concentrations."
            },
            {
                question: "2,3-DPG (diphosphoglycerate):",
                options: ["Increases oxygen affinity", "Decreases oxygen affinity", "Has no effect", "Only affects CO₂"],
                correct: 1,
                explanation: "2,3-DPG decreases hemoglobin's oxygen affinity, promoting oxygen release to tissues."
            },
            {
                question: "Carbon monoxide poisoning is dangerous because:",
                options: ["CO binds weakly to hemoglobin", "CO binds strongly to hemoglobin", "CO doesn't bind to hemoglobin", "CO increases oxygen binding"],
                correct: 1,
                explanation: "CO binds to hemoglobin 200x stronger than oxygen, preventing oxygen transport."
            },
            {
                question: "Fetal hemoglobin has:",
                options: ["Lower oxygen affinity", "Higher oxygen affinity", "Same oxygen affinity", "No oxygen binding"],
                correct: 1,
                explanation: "Fetal hemoglobin has higher oxygen affinity to extract oxygen from maternal blood."
            },
            {
                question: "At high altitude:",
                options: ["Oxygen concentration increases", "Oxygen concentration decreases", "No change in oxygen", "CO₂ increases"],
                correct: 1,
                explanation: "At high altitude, atmospheric pressure decreases, reducing oxygen concentration."
            },
            {
                question: "Altitude acclimatization involves:",
                options: ["Decreased red blood cell production", "Increased red blood cell production", "No changes", "Decreased breathing"],
                correct: 1,
                explanation: "Altitude acclimatization includes increased red blood cell production to carry more oxygen."
            },
            {
                question: "Pulse oximetry measures:",
                options: ["Blood pressure", "Heart rate only", "Oxygen saturation", "CO₂ levels"],
                correct: 2,
                explanation: "Pulse oximetry non-invasively measures the oxygen saturation of hemoglobin."
            },
            {
                question: "Normal oxygen saturation is:",
                options: ["70-80%", "85-90%", "95-100%", "100-105%"],
                correct: 2,
                explanation: "Normal oxygen saturation (SpO₂) is 95-100% in healthy individuals."
            },
            {
                question: "Hypoxemia is:",
                options: ["High blood oxygen", "Low blood oxygen", "High blood CO₂", "Low blood CO₂"],
                correct: 1,
                explanation: "Hypoxemia is abnormally low oxygen levels in arterial blood."
            },
            {
                question: "Hypercapnia is:",
                options: ["High blood oxygen", "Low blood oxygen", "High blood CO₂", "Low blood CO₂"],
                correct: 2,
                explanation: "Hypercapnia is abnormally high CO₂ levels in arterial blood."
            },
            {
                question: "Cyanosis is:",
                options: ["Bluish skin color from low oxygen", "Red skin color from high oxygen", "Normal skin color", "Yellow skin color"],
                correct: 0,
                explanation: "Cyanosis is bluish discoloration of skin and mucous membranes due to low oxygen levels."
            },
            {
                question: "The respiratory quotient (RQ) is:",
                options: ["O₂ produced / CO₂ consumed", "CO₂ produced / O₂ consumed", "Breathing rate", "Lung capacity"],
                correct: 1,
                explanation: "RQ is the ratio of CO₂ produced to O₂ consumed, indicating metabolic activity."
            },

            // RESPIRATORY DISORDERS (Questions 76-100)
            {
                question: "Asthma is characterized by:",
                options: ["Lung infection", "Airway inflammation and constriction", "Lung collapse", "Fluid in lungs"],
                correct: 1,
                explanation: "Asthma involves chronic airway inflammation, bronchoconstriction, and increased mucus production."
            },
            {
                question: "COPD stands for:",
                options: ["Chronic Obstructive Pulmonary Disease", "Complete Oxygen Pulmonary Deficiency", "Chronic Oxygen Pulmonary Disorder", "Complex Obstructive Pulmonary Disease"],
                correct: 0,
                explanation: "COPD is Chronic Obstructive Pulmonary Disease, including emphysema and chronic bronchitis."
            },
            {
                question: "Emphysema involves:",
                options: ["Airway constriction", "Alveolar wall destruction", "Lung infection", "Pleural inflammation"],
                correct: 1,
                explanation: "Emphysema involves destruction of alveolar walls, reducing gas exchange surface area."
            },
            {
                question: "Chronic bronchitis involves:",
                options: ["Alveolar destruction", "Persistent airway inflammation", "Lung collapse", "Pleural effusion"],
                correct: 1,
                explanation: "Chronic bronchitis involves persistent inflammation and excessive mucus production in airways."
            },
            {
                question: "Pneumonia is:",
                options: ["Lung infection", "Airway constriction", "Alveolar destruction", "Pleural inflammation"],
                correct: 0,
                explanation: "Pneumonia is infection and inflammation of lung tissue, often involving alveoli."
            },
            {
                question: "Tuberculosis is caused by:",
                options: ["Virus", "Bacteria", "Fungus", "Parasite"],
                correct: 1,
                explanation: "Tuberculosis is caused by Mycobacterium tuberculosis bacteria."
            },
            {
                question: "Pneumothorax is:",
                options: ["Lung infection", "Air in pleural cavity", "Fluid in lungs", "Airway obstruction"],
                correct: 1,
                explanation: "Pneumothorax is the presence of air in the pleural cavity, causing lung collapse."
            },
            {
                question: "Pleural effusion is:",
                options: ["Air in pleural cavity", "Fluid in pleural cavity", "Lung infection", "Airway inflammation"],
                correct: 1,
                explanation: "Pleural effusion is abnormal accumulation of fluid in the pleural cavity."
            },
            {
                question: "Pulmonary edema is:",
                options: ["Air in lungs", "Fluid in alveoli", "Infection in lungs", "Collapsed lung"],
                correct: 1,
                explanation: "Pulmonary edema is fluid accumulation in alveoli, often due to heart failure."
            },
            {
                question: "Sleep apnea involves:",
                options: ["Continuous breathing", "Temporary breathing cessation", "Rapid breathing", "Deep breathing"],
                correct: 1,
                explanation: "Sleep apnea involves repeated episodes of breathing cessation during sleep."
            },
            {
                question: "Obstructive sleep apnea is caused by:",
                options: ["Brain problems", "Airway blockage", "Lung disease", "Heart problems"],
                correct: 1,
                explanation: "Obstructive sleep apnea is caused by physical blockage of upper airways during sleep."
            },
            {
                question: "Central sleep apnea is caused by:",
                options: ["Airway blockage", "Brain not signaling breathing muscles", "Lung inflammation", "Heart failure"],
                correct: 1,
                explanation: "Central sleep apnea occurs when the brain fails to signal breathing muscles."
            },
            {
                question: "Lung cancer is often associated with:",
                options: ["Exercise", "Smoking", "Drinking water", "Eating vegetables"],
                correct: 1,
                explanation: "Smoking is the leading cause of lung cancer, responsible for about 85% of cases."
            },
            {
                question: "Pulmonary fibrosis involves:",
                options: ["Lung infection", "Scar tissue formation", "Airway constriction", "Fluid accumulation"],
                correct: 1,
                explanation: "Pulmonary fibrosis involves progressive scarring of lung tissue, impairing gas exchange."
            },
            {
                question: "Respiratory distress syndrome (RDS) in infants is due to:",
                options: ["Infection", "Lack of surfactant", "Airway blockage", "Heart problems"],
                correct: 1,
                explanation: "Infant RDS is caused by insufficient surfactant production, leading to alveolar collapse."
            },
            {
                question: "Cystic fibrosis affects:",
                options: ["Only lungs", "Lungs and digestive system", "Only heart", "Only kidneys"],
                correct: 1,
                explanation: "Cystic fibrosis affects both respiratory and digestive systems through thick, sticky mucus production."
            },
            {
                question: "Spirometry measures:",
                options: ["Blood oxygen", "Blood pressure", "Lung function", "Heart rate"],
                correct: 2,
                explanation: "Spirometry measures lung volumes and capacities to assess respiratory function."
            },
            {
                question: "FEV1 stands for:",
                options: ["Forced Expiratory Volume in 1 second", "Final Expiratory Volume in 1 second", "Functional Expiratory Volume in 1 second", "Fast Expiratory Volume in 1 second"],
                correct: 0,
                explanation: "FEV1 is Forced Expiratory Volume in 1 second, measuring airway obstruction."
            },
            {
                question: "Peak flow meters measure:",
                options: ["Blood oxygen", "Maximum airflow rate", "Lung capacity", "CO₂ levels"],
                correct: 1,
                explanation: "Peak flow meters measure the maximum rate of air flow during forced expiration."
            },
            {
                question: "Bronchodilators work by:",
                options: ["Constricting airways", "Relaxing airway muscles", "Increasing mucus", "Decreasing oxygen"],
                correct: 1,
                explanation: "Bronchodilators relax smooth muscles in airways, opening bronchi and bronchioles."
            },
            {
                question: "Corticosteroids in respiratory treatment:",
                options: ["Increase inflammation", "Reduce inflammation", "Block oxygen", "Constrict airways"],
                correct: 1,
                explanation: "Inhaled corticosteroids reduce airway inflammation in asthma and COPD."
            },
            {
                question: "Oxygen therapy is used for:",
                options: ["High blood oxygen", "Low blood oxygen", "Normal blood oxygen", "High CO₂ only"],
                correct: 1,
                explanation: "Oxygen therapy is used to treat hypoxemia (low blood oxygen levels)."
            },
            {
                question: "Mechanical ventilation:",
                options: ["Always harms patients", "Assists or replaces breathing", "Only removes CO₂", "Only adds oxygen"],
                correct: 1,
                explanation: "Mechanical ventilation assists or replaces spontaneous breathing in respiratory failure."
            },
            {
                question: "CPAP (Continuous Positive Airway Pressure):",
                options: ["Blocks airways", "Keeps airways open", "Reduces oxygen", "Stops breathing"],
                correct: 1,
                explanation: "CPAP keeps airways open with continuous positive pressure, treating sleep apnea."
            },
            {
                question: "Respiratory acidosis is caused by:",
                options: ["Low CO₂", "High CO₂", "Low oxygen", "High oxygen"],
                correct: 1,
                explanation: "Respiratory acidosis is caused by CO₂ retention (high CO₂), lowering blood pH."
            }
        ],
            {
                question: "The left ventricle has thicker walls than the right ventricle because:",
                options: ["It pumps blood to the lungs", "It pumps blood to the entire body", "It receives more blood", "It contracts more frequently"],
                correct: 1,
                explanation: "The left ventricle needs thick walls to generate pressure to pump blood throughout the entire body."
            },
            {
                question: "Hemoglobin contains which metal ion?",
                options: ["Copper", "Iron", "Zinc", "Magnesium"],
                correct: 1,
                explanation: "Hemoglobin contains iron (Fe) which binds to oxygen for transport."
            },
            {
                question: "The pacemaker of the heart is located in:",
                options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
                correct: 1,
                explanation: "The sinoatrial (SA) node in the right atrium acts as the heart's natural pacemaker."
            },
            {
                question: "Blood pressure is measured in:",
                options: ["mmHg", "kPa", "atm", "psi"],
                correct: 0,
                explanation: "Blood pressure is typically measured in millimeters of mercury (mmHg)."
            },
            {
                question: "The function of platelets is:",
                options: ["Oxygen transport", "Immune defense", "Blood clotting", "Nutrient transport"],
                correct: 2,
                explanation: "Platelets are responsible for blood clotting and preventing excessive bleeding."
            }
        ],
        'Human Respiration': [
            {
                question: "Gas exchange in the lungs occurs in:",
                options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
                correct: 2,
                explanation: "Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged between air and blood."
            },
            {
                question: "The respiratory center is located in:",
                options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"],
                correct: 2,
                explanation: "The medulla oblongata contains the respiratory center that controls breathing rhythm."
            },
            {
                question: "During inspiration, the diaphragm:",
                options: ["Relaxes and moves up", "Contracts and moves down", "Remains stationary", "Vibrates rapidly"],
                correct: 1,
                explanation: "During inspiration, the diaphragm contracts and moves downward, increasing lung volume."
            },
            {
                question: "The amount of air breathed in and out during normal breathing is called:",
                options: ["Vital capacity", "Tidal volume", "Residual volume", "Total lung capacity"],
                correct: 1,
                explanation: "Tidal volume is the normal amount of air inhaled and exhaled during quiet breathing."
            },
            {
                question: "Oxygen is transported in blood primarily by:",
                options: ["Plasma", "White blood cells", "Hemoglobin", "Platelets"],
                correct: 2,
                explanation: "Hemoglobin in red blood cells carries most of the oxygen transported in blood."
            }
        ],
        'Evolution': [
            // DARWIN'S THEORY AND EVIDENCE (Questions 1-25)
            {
                question: "Charles Darwin's theory of evolution is based on:",
                options: ["Inheritance of acquired characteristics", "Natural selection", "Spontaneous generation", "Mutation theory"],
                correct: 1,
                explanation: "Darwin's theory of evolution is primarily based on natural selection as the mechanism of evolutionary change."
            },
            {
                question: "The process by which organisms with favorable traits survive and reproduce is called:",
                options: ["Artificial selection", "Natural selection", "Sexual selection", "Genetic drift"],
                correct: 1,
                explanation: "Natural selection is the process where organisms with advantageous traits have better survival and reproductive success."
            },
            {
                question: "Darwin's finches are an example of:",
                options: ["Convergent evolution", "Divergent evolution", "Parallel evolution", "Coevolution"],
                correct: 1,
                explanation: "Darwin's finches show divergent evolution from a common ancestor into different species with varied beak shapes."
            },
            {
                question: "The evidence for evolution includes:",
                options: ["Fossils only", "Comparative anatomy only", "Molecular biology only", "All of the above"],
                correct: 3,
                explanation: "Evolution is supported by multiple lines of evidence including fossils, comparative anatomy, and molecular biology."
            },
            {
                question: "Homologous structures are:",
                options: ["Similar in function but different in origin", "Similar in origin but different in function", "Identical in all aspects", "Found only in extinct species"],
                correct: 1,
                explanation: "Homologous structures have the same evolutionary origin but may have different functions."
            },
            {
                question: "The forelimbs of mammals are examples of:",
                options: ["Analogous structures", "Homologous structures", "Vestigial structures", "Convergent structures"],
                correct: 1,
                explanation: "Mammalian forelimbs have the same basic bone structure despite different functions, showing common ancestry."
            },
            {
                question: "Vestigial organs are:",
                options: ["Fully functional organs", "Reduced or non-functional organs", "Newly evolved organs", "Organs found only in embryos"],
                correct: 1,
                explanation: "Vestigial organs are reduced or non-functional structures that were functional in ancestors."
            },
            {
                question: "The human appendix is considered:",
                options: ["A vital organ", "A vestigial organ", "A newly evolved organ", "An organ unique to humans"],
                correct: 1,
                explanation: "The human appendix is considered vestigial as it has reduced function compared to its role in herbivorous ancestors."
            },
            {
                question: "Comparative embryology shows that:",
                options: ["All embryos are identical", "Related species have similar embryonic development", "Embryos have no evolutionary significance", "Only mammals have embryos"],
                correct: 1,
                explanation: "Comparative embryology reveals that related species share similar developmental patterns, supporting common ancestry."
            },
            {
                question: "The earliest fossils are found in:",
                options: ["Recent rock layers", "Oldest rock layers", "Only sedimentary rocks", "Only volcanic rocks"],
                correct: 1,
                explanation: "The oldest fossils are found in the oldest rock layers, following the principle of superposition."
            },
            {
                question: "Biogeographic evidence for evolution includes:",
                options: ["Similar species in different continents", "Island species resembling mainland species", "Random distribution of species", "Identical species everywhere"],
                correct: 1,
                explanation: "Biogeography shows that island species often resemble nearby mainland species, supporting evolutionary relationships."
            },
            {
                question: "The Galapagos Islands are famous for:",
                options: ["Having no life", "Darwin's observations", "Being perfectly flat", "Having only one species"],
                correct: 1,
                explanation: "The Galapagos Islands are famous for Darwin's observations of finches and other species that supported his theory."
            },
            {
                question: "Adaptive radiation is:",
                options: ["Evolution of one species into many", "Evolution of many species into one", "Random genetic changes", "Extinction of species"],
                correct: 0,
                explanation: "Adaptive radiation is the evolution of one ancestral species into many different species adapted to different environments."
            },
            {
                question: "The fossil record shows:",
                options: ["All species appeared simultaneously", "Gradual appearance of species over time", "No pattern", "Only recent species"],
                correct: 1,
                explanation: "The fossil record demonstrates the gradual appearance and change of species over geological time."
            },
            {
                question: "Transitional fossils are:",
                options: ["Fossils showing intermediate characteristics", "Only plant fossils", "Fossils that are incomplete", "Fossils found in transition zones"],
                correct: 0,
                explanation: "Transitional fossils show intermediate characteristics between ancestral and descendant species."
            },
            {
                question: "The age of fossils can be determined by:",
                options: ["Their size", "Their color", "Radiometric dating", "Their location only"],
                correct: 2,
                explanation: "Radiometric dating uses the decay of radioactive isotopes to determine the age of fossils and rocks."
            },
            {
                question: "Convergent evolution results in:",
                options: ["Homologous structures", "Analogous structures", "Vestigial structures", "Identical genes"],
                correct: 1,
                explanation: "Convergent evolution produces analogous structures - similar functions but different evolutionary origins."
            },
            {
                question: "The wings of birds and bats are examples of:",
                options: ["Homologous structures", "Analogous structures", "Vestigial structures", "Identical structures"],
                correct: 1,
                explanation: "Bird and bat wings are analogous - they serve the same function but evolved independently."
            },
            {
                question: "Molecular evidence for evolution includes:",
                options: ["DNA sequences", "Protein sequences", "Both DNA and protein sequences", "Neither DNA nor proteins"],
                correct: 2,
                explanation: "Both DNA and protein sequences provide strong molecular evidence for evolutionary relationships."
            },
            {
                question: "Species that are more closely related have:",
                options: ["More different DNA", "More similar DNA", "No DNA similarity", "Identical DNA"],
                correct: 1,
                explanation: "Closely related species have more similar DNA sequences due to their recent common ancestry."
            },
            {
                question: "The universal genetic code suggests:",
                options: ["Random evolution", "Common ancestry of all life", "Independent origins", "No relationship"],
                correct: 1,
                explanation: "The universal genetic code indicates that all life forms share a common evolutionary origin."
            },
            {
                question: "Cytochrome c is used in evolutionary studies because:",
                options: ["It's found in all organisms", "It evolves at a constant rate", "It's essential for life", "All of the above"],
                correct: 3,
                explanation: "Cytochrome c is universal, evolves at a measurable rate, and is essential, making it ideal for evolutionary studies."
            },
            {
                question: "The more similar the DNA sequences between two species, the:",
                options: ["More distantly related they are", "More recently they diverged", "Less related they are", "More different they are"],
                correct: 1,
                explanation: "Similar DNA sequences indicate recent evolutionary divergence from a common ancestor."
            },
            {
                question: "Phylogenetic trees show:",
                options: ["Evolutionary relationships", "Geographic distribution", "Population sizes", "Extinction dates"],
                correct: 0,
                explanation: "Phylogenetic trees diagram the evolutionary relationships and common ancestry among species."
            },
            {
                question: "The theory of evolution explains:",
                options: ["The origin of life", "The diversity of life", "The future of life", "The purpose of life"],
                correct: 1,
                explanation: "Evolution explains the diversity of life through descent with modification from common ancestors."
            },

            // MECHANISMS OF EVOLUTION (Questions 26-50)
            {
                question: "The raw material for evolution is:",
                options: ["Natural selection", "Genetic variation", "Environmental change", "Population size"],
                correct: 1,
                explanation: "Genetic variation provides the raw material upon which natural selection and other evolutionary forces act."
            },
            {
                question: "Mutations are important in evolution because they:",
                options: ["Always improve fitness", "Create new genetic variation", "Are always harmful", "Occur very rarely"],
                correct: 1,
                explanation: "Mutations introduce new genetic variation into populations, providing material for evolutionary change."
            },
            {
                question: "Gene flow between populations:",
                options: ["Increases genetic differences", "Reduces genetic differences", "Has no effect", "Always stops evolution"],
                correct: 1,
                explanation: "Gene flow (migration) between populations tends to homogenize allele frequencies and reduce genetic differences."
            },
            {
                question: "Genetic drift is:",
                options: ["Random changes in allele frequencies", "Directed changes in allele frequencies", "Always beneficial", "The same as natural selection"],
                correct: 0,
                explanation: "Genetic drift refers to random changes in allele frequencies, especially important in small populations."
            },
            {
                question: "The bottleneck effect is an example of:",
                options: ["Natural selection", "Genetic drift", "Gene flow", "Mutation"],
                correct: 1,
                explanation: "The bottleneck effect occurs when population size is drastically reduced, causing genetic drift."
            },
            {
                question: "The founder effect occurs when:",
                options: ["A population grows very large", "A small group starts a new population", "All individuals are identical", "Migration stops"],
                correct: 1,
                explanation: "The founder effect occurs when a small group of individuals establishes a new population."
            },
            {
                question: "Hardy-Weinberg equilibrium describes:",
                options: ["Evolving populations", "Non-evolving populations", "Extinct populations", "Hybrid populations"],
                correct: 1,
                explanation: "Hardy-Weinberg equilibrium describes the genetic makeup of non-evolving populations."
            },
            {
                question: "For Hardy-Weinberg equilibrium, populations must have:",
                options: ["No mutations", "No selection", "No gene flow", "All of the above"],
                correct: 3,
                explanation: "Hardy-Weinberg equilibrium requires no mutations, selection, gene flow, or other evolutionary forces."
            },
            {
                question: "Sexual selection is:",
                options: ["Selection for survival traits", "Selection for reproductive success", "Random mating", "Asexual reproduction"],
                correct: 1,
                explanation: "Sexual selection favors traits that increase reproductive success rather than survival."
            },
            {
                question: "Peacock tail feathers are an example of:",
                options: ["Natural selection", "Sexual selection", "Genetic drift", "Mutation"],
                correct: 1,
                explanation: "Peacock tail feathers evolved through sexual selection as they attract mates despite hindering survival."
            },
            {
                question: "Directional selection:",
                options: ["Favors intermediate phenotypes", "Favors one extreme phenotype", "Favors both extremes", "Has no effect"],
                correct: 1,
                explanation: "Directional selection favors individuals at one extreme of the phenotypic distribution."
            },
            {
                question: "Stabilizing selection:",
                options: ["Favors extreme phenotypes", "Favors intermediate phenotypes", "Eliminates all variation", "Causes rapid change"],
                correct: 1,
                explanation: "Stabilizing selection favors intermediate phenotypes and reduces variation around the mean."
            },
            {
                question: "Disruptive selection:",
                options: ["Favors intermediate phenotypes", "Favors extreme phenotypes", "Eliminates all phenotypes", "Stops evolution"],
                correct: 1,
                explanation: "Disruptive selection favors individuals at both extremes of the phenotypic distribution."
            },
            {
                question: "Balancing selection maintains:",
                options: ["No genetic variation", "Genetic variation", "Only harmful alleles", "Only beneficial alleles"],
                correct: 1,
                explanation: "Balancing selection maintains genetic variation in populations through various mechanisms."
            },
            {
                question: "Heterozygote advantage is an example of:",
                options: ["Directional selection", "Balancing selection", "Disruptive selection", "No selection"],
                correct: 1,
                explanation: "Heterozygote advantage is a form of balancing selection that maintains multiple alleles."
            },
            {
                question: "Sickle cell anemia persists in some populations because:",
                options: ["It's always beneficial", "Heterozygotes have malaria resistance", "It's not genetic", "It's a new mutation"],
                correct: 1,
                explanation: "Sickle cell allele persists because heterozygotes have resistance to malaria."
            },
            {
                question: "Coevolution occurs when:",
                options: ["Species evolve independently", "Species evolve in response to each other", "Species go extinct", "Species remain unchanged"],
                correct: 1,
                explanation: "Coevolution occurs when two or more species evolve in response to each other."
            },
            {
                question: "The relationship between flowers and their pollinators is an example of:",
                options: ["Competition", "Coevolution", "Parasitism", "Commensalism"],
                correct: 1,
                explanation: "Flowers and pollinators have coevolved, with each influencing the evolution of the other."
            },
            {
                question: "Red Queen hypothesis suggests that:",
                options: ["Evolution stops", "Species must constantly evolve", "Only predators evolve", "Evolution is random"],
                correct: 1,
                explanation: "Red Queen hypothesis states that species must constantly evolve to survive in changing environments."
            },
            {
                question: "Speciation is:",
                options: ["The death of species", "The formation of new species", "The hybridization of species", "The migration of species"],
                correct: 1,
                explanation: "Speciation is the evolutionary process by which new species arise from existing ones."
            },
            {
                question: "Allopatric speciation occurs when:",
                options: ["Populations are geographically separated", "Populations are in the same area", "Populations interbreed freely", "Populations go extinct"],
                correct: 0,
                explanation: "Allopatric speciation occurs when populations are geographically separated and evolve independently."
            },
            {
                question: "Sympatric speciation occurs when:",
                options: ["Populations are separated", "Populations are in the same geographic area", "Populations migrate", "Populations hybridize"],
                correct: 1,
                explanation: "Sympatric speciation occurs within the same geographic area, often through polyploidy in plants."
            },
            {
                question: "Reproductive isolation is:",
                options: ["Prevention of gene flow between populations", "Increase in gene flow", "Random mating", "Asexual reproduction"],
                correct: 0,
                explanation: "Reproductive isolation prevents gene flow between populations, leading to speciation."
            },
            {
                question: "Prezygotic isolation mechanisms include:",
                options: ["Hybrid sterility", "Temporal isolation", "Hybrid breakdown", "Reduced hybrid viability"],
                correct: 1,
                explanation: "Prezygotic isolation prevents fertilization, including temporal isolation when species breed at different times."
            },
            {
                question: "Postzygotic isolation mechanisms include:",
                options: ["Behavioral isolation", "Hybrid sterility", "Gametic isolation", "Mechanical isolation"],
                correct: 1,
                explanation: "Postzygotic isolation occurs after fertilization, including hybrid sterility where offspring cannot reproduce."
            },

            // EVOLUTION AND SPECIATION (Questions 51-75)
            {
                question: "A species is defined as:",
                options: ["Organisms that look similar", "Organisms that can interbreed and produce fertile offspring", "Organisms in the same location", "Organisms with the same DNA"],
                correct: 1,
                explanation: "The biological species concept defines species as groups that can interbreed and produce fertile offspring."
            },
            {
                question: "The process of gradual change in a species over time is called:",
                options: ["Microevolution", "Macroevolution", "Phyletic evolution", "Punctuated equilibrium"],
                correct: 2,
                explanation: "Phyletic evolution refers to gradual change within a lineage over time."
            },
            {
                question: "Punctuated equilibrium suggests that:",
                options: ["Evolution is always gradual", "Evolution occurs in rapid bursts", "Evolution never occurs", "Evolution is random"],
                correct: 1,
                explanation: "Punctuated equilibrium proposes that evolution occurs in rapid bursts followed by long periods of stasis."
            },
            {
                question: "Adaptive radiation typically occurs when:",
                options: ["Competition is intense", "New environments are available", "Populations are small", "Mutations are rare"],
                correct: 1,
                explanation: "Adaptive radiation often occurs when new environments with available niches become accessible."
            },
            {
                question: "The Cambrian explosion was:",
                options: ["A literal explosion", "Rapid diversification of life forms", "Mass extinction", "Formation of Earth"],
                correct: 1,
                explanation: "The Cambrian explosion was a rapid diversification of life forms about 540 million years ago."
            },
            {
                question: "Mass extinctions are followed by:",
                options: ["No new species", "Rapid diversification", "Stasis", "Regression"],
                correct: 1,
                explanation: "Mass extinctions are typically followed by rapid diversification to fill vacant ecological niches."
            },
            {
                question: "The concept of living fossils refers to:",
                options: ["Recently discovered fossils", "Species that have changed little over time", "Artificial fossils", "Extinct species"],
                correct: 1,
                explanation: "Living fossils are species that have remained relatively unchanged over long periods of time."
            },
            {
                question: "Coelacanths are examples of:",
                options: ["Recently evolved species", "Living fossils", "Extinct species", "Hybrid species"],
                correct: 1,
                explanation: "Coelacanths are living fossils, having remained relatively unchanged for millions of years."
            },
            {
                question: "Convergent evolution occurs when:",
                options: ["Related species evolve similarly", "Unrelated species evolve similar traits", "Species merge", "Species go extinct"],
                correct: 1,
                explanation: "Convergent evolution occurs when unrelated species independently evolve similar traits."
            },
            {
                question: "The similar body shape of sharks and dolphins is due to:",
                options: ["Common ancestry", "Convergent evolution", "Artificial selection", "Genetic drift"],
                correct: 1,
                explanation: "Sharks and dolphins have similar body shapes due to convergent evolution for aquatic life."
            },
            {
                question: "Parallel evolution occurs when:",
                options: ["Unrelated species evolve similarly", "Related species evolve similar traits independently", "Species evolve in opposite directions", "Evolution stops"],
                correct: 1,
                explanation: "Parallel evolution occurs when related species independently evolve similar traits."
            },
            {
                question: "Molecular clocks are based on:",
                options: ["Constant rates of mutation", "Fossil evidence", "Geographic distribution", "Morphological similarity"],
                correct: 0,
                explanation: "Molecular clocks estimate evolutionary time using relatively constant rates of molecular evolution."
            },
            {
                question: "The neutral theory of evolution suggests that:",
                options: ["All mutations are beneficial", "Most mutations are neutral", "Mutations don't occur", "All mutations are harmful"],
                correct: 1,
                explanation: "The neutral theory proposes that most molecular evolution is due to neutral mutations."
            },
            {
                question: "Evolutionary developmental biology (evo-devo) studies:",
                options: ["Only adult organisms", "Development and evolution", "Only extinct species", "Only molecular changes"],
                correct: 1,
                explanation: "Evo-devo examines how developmental processes evolve and contribute to morphological diversity."
            },
            {
                question: "Hox genes are important because they:",
                options: ["Control development", "Are highly conserved", "Influence body plan evolution", "All of the above"],
                correct: 3,
                explanation: "Hox genes control development, are highly conserved, and have been crucial in body plan evolution."
            },
            {
                question: "The evolution of multicellularity was important because it:",
                options: ["Decreased complexity", "Allowed specialization", "Eliminated competition", "Stopped evolution"],
                correct: 1,
                explanation: "Multicellularity allowed for cellular specialization and increased complexity."
            },
            {
                question: "Sexual reproduction evolved because it:",
                options: ["Is simpler than asexual reproduction", "Increases genetic variation", "Requires less energy", "Is more efficient"],
                correct: 1,
                explanation: "Sexual reproduction evolved because it increases genetic variation, providing evolutionary advantages."
            },
            {
                question: "The evolution of wings in insects, birds, and bats is an example of:",
                options: ["Homologous structures", "Convergent evolution", "Parallel evolution", "Coevolution"],
                correct: 1,
                explanation: "Wings evolved independently in these groups, making them an example of convergent evolution."
            },
            {
                question: "Phylogenetic systematics is based on:",
                options: ["Overall similarity", "Shared derived characteristics", "Geographic distribution", "Ecological function"],
                correct: 1,
                explanation: "Phylogenetic systematics groups organisms based on shared derived characteristics (synapomorphies)."
            },
            {
                question: "A monophyletic group includes:",
                options: ["All descendants of a common ancestor", "Some descendants of a common ancestor", "Unrelated organisms", "Only extinct species"],
                correct: 0,
                explanation: "A monophyletic group includes all descendants of a common ancestor."
            },
            {
                question: "The tree of life represents:",
                options: ["Only plant relationships", "All evolutionary relationships", "Only animal relationships", "Only extinct relationships"],
                correct: 1,
                explanation: "The tree of life represents the evolutionary relationships among all organisms."
            },
            {
                question: "Horizontal gene transfer is most common in:",
                options: ["Plants", "Animals", "Bacteria", "Fungi"],
                correct: 2,
                explanation: "Horizontal gene transfer is most common in bacteria, where genes can be transferred between species."
            },
            {
                question: "The endosymbiotic theory explains:",
                options: ["Cell division", "Origin of eukaryotic cells", "DNA replication", "Protein synthesis"],
                correct: 1,
                explanation: "The endosymbiotic theory explains how eukaryotic cells evolved from prokaryotic ancestors."
            },
            {
                question: "Mitochondria and chloroplasts are thought to have evolved from:",
                options: ["Viruses", "Bacteria", "Archaea", "Eukaryotes"],
                correct: 1,
                explanation: "Mitochondria and chloroplasts are thought to have evolved from endosymbiotic bacteria."
            },
            {
                question: "The evolution of photosynthesis was important because it:",
                options: ["Reduced atmospheric oxygen", "Increased atmospheric oxygen", "Eliminated all life", "Had no effect"],
                correct: 1,
                explanation: "The evolution of photosynthesis dramatically increased atmospheric oxygen levels."
            },

            // HUMAN EVOLUTION (Questions 76-100)
            {
                question: "Humans and chimpanzees share approximately what percentage of DNA?",
                options: ["50%", "75%", "95%", "99%"],
                correct: 3,
                explanation: "Humans and chimpanzees share approximately 98-99% of their DNA sequences."
            },
            {
                question: "The most recent common ancestor of humans and chimpanzees lived approximately:",
                options: ["1 million years ago", "3 million years ago", "6 million years ago", "10 million years ago"],
                correct: 2,
                explanation: "The most recent common ancestor of humans and chimpanzees lived approximately 6-7 million years ago."
            },
            {
                question: "Australopithecus afarensis is famous for:",
                options: ["Being the first human", "The fossil 'Lucy'", "Having a large brain", "Using advanced tools"],
                correct: 1,
                explanation: "Australopithecus afarensis is famous for the fossil 'Lucy', which showed bipedalism."
            },
            {
                question: "Bipedalism in human evolution:",
                options: ["Evolved after large brains", "Evolved before large brains", "Evolved simultaneously with large brains", "Never evolved"],
                correct: 1,
                explanation: "Bipedalism evolved before large brains in human evolution."
            },
            {
                question: "The oldest known human ancestor is:",
                options: ["Homo sapiens", "Homo erectus", "Australopithecus", "Sahelanthropus"],
                correct: 3,
                explanation: "Sahelanthropus tchadensis is currently considered the oldest known human ancestor."
            },
            {
                question: "Homo erectus was the first human ancestor to:",
                options: ["Walk upright", "Use tools", "Migrate out of Africa", "Develop language"],
                correct: 2,
                explanation: "Homo erectus was the first human ancestor to migrate out of Africa."
            },
            {
                question: "The 'Out of Africa' theory suggests that:",
                options: ["Humans evolved in multiple locations", "Modern humans originated in Africa", "Humans never left Africa", "Africa had no early humans"],
                correct: 1,
                explanation: "The Out of Africa theory proposes that modern humans originated in Africa and migrated worldwide."
            },
            {
                question: "Neanderthals were:",
                options: ["Ancestors of modern humans", "Cousins of modern humans", "Descendants of modern humans", "Unrelated to humans"],
                correct: 1,
                explanation: "Neanderthals were close relatives (cousins) of modern humans, not direct ancestors."
            },
            {
                question: "The human brain size increased most dramatically in:",
                options: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"],
                correct: 3,
                explanation: "The most dramatic increase in human brain size occurred with Homo sapiens."
            },
            {
                question: "Tool use in human evolution:",
                options: ["Began with Homo sapiens", "Began with Australopithecus", "Began with Homo habilis", "Never occurred"],
                correct: 2,
                explanation: "Stone tool use began with Homo habilis, earning them the name 'handy man'."
            },
            {
                question: "The development of language was important because it:",
                options: ["Allowed cultural transmission", "Increased cooperation", "Enabled complex societies", "All of the above"],
                correct: 3,
                explanation: "Language enabled cultural transmission, cooperation, and the development of complex societies."
            },
            {
                question: "Human evolution is characterized by:",
                options: ["Mosaic evolution", "Uniform evolution", "Rapid evolution", "No evolution"],
                correct: 0,
                explanation: "Human evolution shows mosaic evolution, where different traits evolved at different rates."
            },
            {
                question: "The human fossil record shows:",
                options: ["No intermediate forms", "Many intermediate forms", "Only modern humans", "Only extinct species"],
                correct: 1,
                explanation: "The human fossil record shows many intermediate forms between early ancestors and modern humans."
            },
            {
                question: "Comparative anatomy shows that humans are most closely related to:",
                options: ["Gorillas", "Chimpanzees", "Orangutans", "Baboons"],
                correct: 1,
                explanation: "Comparative anatomy and molecular evidence show humans are most closely related to chimpanzees."
            },
            {
                question: "The evolution of cooking was important because it:",
                options: ["Increased caloric availability", "Reduced digestive energy needs", "Allowed smaller teeth", "All of the above"],
                correct: 3,
                explanation: "Cooking increased caloric availability, reduced digestive energy needs, and allowed smaller teeth."
            },
            {
                question: "Human cultural evolution is characterized by:",
                options: ["Slow change", "Rapid change", "No change", "Random change"],
                correct: 1,
                explanation: "Human cultural evolution occurs much more rapidly than biological evolution."
            },
            {
                question: "The evolution of opposable thumbs was important for:",
                options: ["Walking", "Tool use", "Swimming", "Digestion"],
                correct: 1,
                explanation: "Opposable thumbs were crucial for precise tool use and manipulation."
            },
            {
                question: "Human evolution continues today through:",
                options: ["No evolution", "Only physical evolution", "Cultural and technological evolution", "Reverse evolution"],
                correct: 2,
                explanation: "Human evolution continues primarily through cultural and technological evolution."
            },
            {
                question: "The study of human evolution involves:",
                options: ["Only fossils", "Only genetics", "Only behavior", "Multiple disciplines"],
                correct: 3,
                explanation: "Human evolution studies integrate fossils, genetics, behavior, archaeology, and other disciplines."
            },
            {
                question: "Evidence for human evolution includes:",
                options: ["Fossil evidence", "Genetic evidence", "Comparative anatomy", "All of the above"],
                correct: 3,
                explanation: "Human evolution is supported by fossil evidence, genetic studies, and comparative anatomy."
            },
            {
                question: "The evolution of agriculture led to:",
                options: ["Population decrease", "Population increase", "No change", "Extinction"],
                correct: 1,
                explanation: "The evolution of agriculture led to dramatic population increases and the rise of civilizations."
            },
            {
                question: "Modern human variation is explained by:",
                options: ["Different species", "Adaptation to different environments", "Random changes", "No variation exists"],
                correct: 1,
                explanation: "Modern human variation largely reflects adaptation to different climates and environments."
            },
            {
                question: "The molecular clock suggests that modern humans evolved:",
                options: ["50,000 years ago", "100,000 years ago", "200,000 years ago", "500,000 years ago"],
                correct: 2,
                explanation: "Molecular clock estimates suggest modern humans evolved approximately 200,000 years ago."
            },
            {
                question: "Gene flow in modern human populations:",
                options: ["Doesn't occur", "Increases differences", "Decreases differences", "Only occurs locally"],
                correct: 2,
                explanation: "Gene flow between modern human populations tends to decrease genetic differences."
            },
            {
                question: "The future of human evolution will likely involve:",
                options: ["Only natural selection", "Technology and medicine", "No evolution", "Reverse evolution"],
                correct: 1,
                explanation: "Future human evolution will likely be influenced by technology, medicine, and cultural factors."
            }
        ],
        'Reproduction': [
            // TYPES OF REPRODUCTION (Questions 1-25)
            {
                question: "Asexual reproduction produces offspring that are:",
                options: ["Genetically different from parent", "Genetically identical to parent", "A mix of both parents", "Completely different"],
                correct: 1,
                explanation: "Asexual reproduction produces genetically identical offspring (clones) from a single parent."
            },
            {
                question: "Sexual reproduction involves:",
                options: ["One parent only", "Two parents", "No parents", "Multiple identical parents"],
                correct: 1,
                explanation: "Sexual reproduction typically involves two parents contributing genetic material to create offspring."
            },
            {
                question: "The main advantage of sexual reproduction is:",
                options: ["Faster reproduction", "Genetic variation", "Less energy required", "Simpler process"],
                correct: 1,
                explanation: "Sexual reproduction creates genetic variation, which provides evolutionary advantages."
            },
            {
                question: "Binary fission is a type of:",
                options: ["Sexual reproduction", "Asexual reproduction", "Budding", "Fragmentation"],
                correct: 1,
                explanation: "Binary fission is asexual reproduction where a single cell divides into two identical cells."
            },
            {
                question: "Budding is commonly seen in:",
                options: ["Humans", "Yeast", "Birds", "Fish"],
                correct: 1,
                explanation: "Budding is common in organisms like yeast and hydra, where a small outgrowth develops into a new individual."
            },
            {
                question: "Fragmentation occurs in:",
                options: ["Starfish", "Mammals", "Birds", "Insects"],
                correct: 0,
                explanation: "Fragmentation occurs in organisms like starfish, where body parts can regenerate into complete organisms."
            },
            {
                question: "Parthenogenesis is:",
                options: ["Development from unfertilized egg", "Development from fertilized egg", "Cell division", "Spore formation"],
                correct: 0,
                explanation: "Parthenogenesis is development of an organism from an unfertilized egg."
            },
            {
                question: "Vegetative propagation is seen in:",
                options: ["Animals", "Plants", "Bacteria", "Viruses"],
                correct: 1,
                explanation: "Vegetative propagation is asexual reproduction in plants using vegetative parts like roots, stems, or leaves."
            },
            {
                question: "Runners or stolons are examples of:",
                options: ["Sexual reproduction", "Vegetative propagation", "Seed formation", "Pollination"],
                correct: 1,
                explanation: "Runners or stolons are horizontal stems that produce new plants at nodes, a form of vegetative propagation."
            },
            {
                question: "Spore formation is common in:",
                options: ["Mammals", "Fungi", "Birds", "Fish"],
                correct: 1,
                explanation: "Spore formation is a common form of asexual reproduction in fungi and some plants."
            },
            {
                question: "Gametes are:",
                options: ["Somatic cells", "Reproductive cells", "Stem cells", "Nerve cells"],
                correct: 1,
                explanation: "Gametes are specialized reproductive cells (sperm and egg) that fuse during fertilization."
            },
            {
                question: "Diploid cells have:",
                options: ["One set of chromosomes", "Two sets of chromosomes", "Three sets of chromosomes", "No chromosomes"],
                correct: 1,
                explanation: "Diploid cells have two sets of chromosomes (2n), one from each parent."
            },
            {
                question: "Haploid cells have:",
                options: ["Two sets of chromosomes", "One set of chromosomes", "Three sets of chromosomes", "No chromosomes"],
                correct: 1,
                explanation: "Haploid cells have one set of chromosomes (n), typical of gametes."
            },
            {
                question: "Meiosis produces:",
                options: ["Diploid cells", "Haploid cells", "Identical cells", "Somatic cells"],
                correct: 1,
                explanation: "Meiosis produces haploid gametes from diploid cells, reducing chromosome number by half."
            },
            {
                question: "Fertilization results in:",
                options: ["Haploid zygote", "Diploid zygote", "Triploid zygote", "No zygote"],
                correct: 1,
                explanation: "Fertilization combines haploid gametes to form a diploid zygote."
            },
            {
                question: "Alternation of generations is seen in:",
                options: ["Mammals only", "Plants", "Bacteria", "Viruses"],
                correct: 1,
                explanation: "Alternation of generations is a life cycle pattern common in plants, alternating between haploid and diploid phases."
            },
            {
                question: "In plants, the gametophyte generation is:",
                options: ["Diploid", "Haploid", "Triploid", "Tetraploid"],
                correct: 1,
                explanation: "The gametophyte generation in plants is haploid and produces gametes."
            },
            {
                question: "In plants, the sporophyte generation is:",
                options: ["Haploid", "Diploid", "Triploid", "Tetraploid"],
                correct: 1,
                explanation: "The sporophyte generation in plants is diploid and produces spores through meiosis."
            },
            {
                question: "Hermaphroditism is:",
                options: ["Having only male organs", "Having only female organs", "Having both male and female organs", "Having no reproductive organs"],
                correct: 2,
                explanation: "Hermaphroditism is the condition of having both male and female reproductive organs."
            },
            {
                question: "Sequential hermaphroditism involves:",
                options: ["Simultaneous male and female function", "Changing sex during lifetime", "No sex change", "Multiple sexes"],
                correct: 1,
                explanation: "Sequential hermaphroditism involves changing sex during an organism's lifetime."
            },
            {
                question: "Isogamy involves:",
                options: ["Different sized gametes", "Same sized gametes", "No gametes", "Multiple gametes"],
                correct: 1,
                explanation: "Isogamy is the fusion of gametes that are similar in size and structure."
            },
            {
                question: "Anisogamy involves:",
                options: ["Same sized gametes", "Different sized gametes", "No gametes", "Single gamete"],
                correct: 1,
                explanation: "Anisogamy is the fusion of gametes that differ in size, typically large egg and small sperm."
            },
            {
                question: "Oogamy is characterized by:",
                options: ["Two small gametes", "Two large gametes", "Large egg and small sperm", "No size difference"],
                correct: 2,
                explanation: "Oogamy involves a large, non-motile egg and a small, motile sperm."
            },
            {
                question: "External fertilization occurs in:",
                options: ["Mammals", "Birds", "Fish", "Reptiles"],
                correct: 2,
                explanation: "External fertilization commonly occurs in aquatic animals like fish, where gametes are released into water."
            },
            {
                question: "Internal fertilization occurs in:",
                options: ["Most aquatic animals", "Terrestrial animals", "All plants", "Bacteria"],
                correct: 1,
                explanation: "Internal fertilization is common in terrestrial animals, providing protection for gametes and embryos."
            },

            // HUMAN REPRODUCTIVE SYSTEM (Questions 26-50)
            {
                question: "The male reproductive system produces:",
                options: ["Eggs only", "Sperm only", "Both eggs and sperm", "Hormones only"],
                correct: 1,
                explanation: "The male reproductive system produces sperm and male hormones like testosterone."
            },
            {
                question: "Sperm are produced in:",
                options: ["Prostate gland", "Seminal vesicles", "Testes", "Urethra"],
                correct: 2,
                explanation: "Sperm are produced in the seminiferous tubules of the testes."
            },
            {
                question: "The female reproductive system produces:",
                options: ["Sperm only", "Eggs only", "Both eggs and sperm", "Neither eggs nor sperm"],
                correct: 1,
                explanation: "The female reproductive system produces eggs (ova) and female hormones like estrogen and progesterone."
            },
            {
                question: "Eggs are produced in:",
                options: ["Uterus", "Fallopian tubes", "Ovaries", "Vagina"],
                correct: 2,
                explanation: "Eggs are produced in the ovaries through the process of oogenesis."
            },
            {
                question: "The menstrual cycle is controlled by:",
                options: ["Hormones", "Temperature", "Diet", "Exercise"],
                correct: 0,
                explanation: "The menstrual cycle is controlled by hormones including FSH, LH, estrogen, and progesterone."
            },
            {
                question: "The average length of a menstrual cycle is:",
                options: ["21 days", "28 days", "35 days", "42 days"],
                correct: 1,
                explanation: "The average menstrual cycle is about 28 days, though normal cycles can range from 21-35 days."
            },
            {
                question: "Ovulation typically occurs on day:",
                options: ["7", "14", "21", "28"],
                correct: 1,
                explanation: "Ovulation typically occurs around day 14 of a 28-day menstrual cycle."
            },
            {
                question: "The hormone that triggers ovulation is:",
                options: ["FSH", "LH", "Estrogen", "Progesterone"],
                correct: 1,
                explanation: "The LH (luteinizing hormone) surge triggers ovulation."
            },
            {
                question: "Menstruation is the shedding of:",
                options: ["Ovarian tissue", "Endometrial tissue", "Cervical tissue", "Vaginal tissue"],
                correct: 1,
                explanation: "Menstruation involves the shedding of the endometrial lining of the uterus."
            },
            {
                question: "The corpus luteum produces:",
                options: ["Estrogen only", "Progesterone only", "Both estrogen and progesterone", "Neither hormone"],
                correct: 2,
                explanation: "The corpus luteum produces both estrogen and progesterone to maintain the uterine lining."
            },
            {
                question: "If fertilization doesn't occur, the corpus luteum:",
                options: ["Grows larger", "Degenerates", "Produces more hormones", "Divides"],
                correct: 1,
                explanation: "If fertilization doesn't occur, the corpus luteum degenerates, leading to menstruation."
            },
            {
                question: "Fertilization typically occurs in:",
                options: ["Ovary", "Fallopian tube", "Uterus", "Vagina"],
                correct: 1,
                explanation: "Fertilization typically occurs in the fallopian tubes (oviducts)."
            },
            {
                question: "The fertilized egg is called a:",
                options: ["Embryo", "Fetus", "Zygote", "Blastocyst"],
                correct: 2,
                explanation: "The fertilized egg is called a zygote, which contains genetic material from both parents."
            },
            {
                question: "Implantation occurs in:",
                options: ["Ovary", "Fallopian tube", "Uterus", "Cervix"],
                correct: 2,
                explanation: "Implantation occurs when the blastocyst attaches to the endometrial wall of the uterus."
            },
            {
                question: "The placenta develops from:",
                options: ["Maternal tissue only", "Fetal tissue only", "Both maternal and fetal tissue", "Neither tissue"],
                correct: 2,
                explanation: "The placenta develops from both maternal and fetal tissues to facilitate nutrient exchange."
            },
            {
                question: "Gestation period in humans is approximately:",
                options: ["6 months", "9 months", "12 months", "15 months"],
                correct: 1,
                explanation: "Human gestation period is approximately 9 months (40 weeks)."
            },
            {
                question: "Human chorionic gonadotropin (hCG) is produced by:",
                options: ["Ovaries", "Placenta", "Uterus", "Pituitary gland"],
                correct: 1,
                explanation: "hCG is produced by the placenta and maintains the corpus luteum during early pregnancy."
            },
            {
                question: "The amniotic fluid provides:",
                options: ["Nutrition", "Protection", "Oxygen", "Waste removal"],
                correct: 1,
                explanation: "Amniotic fluid cushions and protects the developing fetus."
            },
            {
                question: "The umbilical cord contains:",
                options: ["One artery, one vein", "Two arteries, one vein", "One artery, two veins", "Two arteries, two veins"],
                correct: 1,
                explanation: "The umbilical cord contains two arteries and one vein for blood circulation between fetus and placenta."
            },
            {
                question: "Oxytocin is responsible for:",
                options: ["Egg production", "Sperm production", "Uterine contractions", "Hormone regulation"],
                correct: 2,
                explanation: "Oxytocin stimulates uterine contractions during labor and milk ejection during breastfeeding."
            },
            {
                question: "Lactation is controlled by:",
                options: ["Prolactin", "Oxytocin", "Both prolactin and oxytocin", "Neither hormone"],
                correct: 2,
                explanation: "Lactation is controlled by prolactin (milk production) and oxytocin (milk ejection)."
            },
            {
                question: "The first milk produced after birth is called:",
                options: ["Mature milk", "Colostrum", "Transitional milk", "Supplemental milk"],
                correct: 1,
                explanation: "Colostrum is the first milk produced, rich in antibodies and nutrients."
            },
            {
                question: "Puberty is triggered by:",
                options: ["Growth hormones", "Sex hormones", "Thyroid hormones", "Insulin"],
                correct: 1,
                explanation: "Puberty is triggered by increased production of sex hormones (testosterone and estrogen)."
            },
            {
                question: "Secondary sexual characteristics develop during:",
                options: ["Childhood", "Puberty", "Adulthood", "Old age"],
                correct: 1,
                explanation: "Secondary sexual characteristics develop during puberty due to hormonal changes."
            },
            {
                question: "Menopause is characterized by:",
                options: ["Increased hormone production", "Cessation of menstruation", "Increased fertility", "Increased ovulation"],
                correct: 1,
                explanation: "Menopause is characterized by the cessation of menstruation and decreased hormone production."
            },

            // PLANT REPRODUCTION (Questions 51-75)
            {
                question: "Flowers are the reproductive organs of:",
                options: ["All plants", "Angiosperms", "Gymnosperms", "Ferns"],
                correct: 1,
                explanation: "Flowers are the reproductive organs of angiosperms (flowering plants)."
            },
            {
                question: "The male part of a flower is called:",
                options: ["Pistil", "Stamen", "Sepal", "Petal"],
                correct: 1,
                explanation: "The stamen is the male reproductive organ of a flower, consisting of anther and filament."
            },
            {
                question: "The female part of a flower is called:",
                options: ["Stamen", "Pistil", "Sepal", "Petal"],
                correct: 1,
                explanation: "The pistil is the female reproductive organ of a flower, consisting of stigma, style, and ovary."
            },
            {
                question: "Pollen grains are produced in:",
                options: ["Ovary", "Stigma", "Anther", "Style"],
                correct: 2,
                explanation: "Pollen grains (male gametes) are produced in the anther of the stamen."
            },
            {
                question: "Ovules are produced in:",
                options: ["Anther", "Stigma", "Ovary", "Style"],
                correct: 2,
                explanation: "Ovules (containing female gametes) are produced in the ovary of the pistil."
            },
            {
                question: "Pollination is the transfer of:",
                options: ["Seeds", "Pollen", "Nectar", "Petals"],
                correct: 1,
                explanation: "Pollination is the transfer of pollen from anther to stigma."
            },
            {
                question: "Self-pollination occurs when:",
                options: ["Pollen transfers between different plants", "Pollen transfers within the same flower", "No pollination occurs", "Artificial pollination"],
                correct: 1,
                explanation: "Self-pollination occurs when pollen from a flower pollinates the same flower or another flower on the same plant."
            },
            {
                question: "Cross-pollination occurs when:",
                options: ["Pollen transfers within the same flower", "Pollen transfers between different plants", "No pollination occurs", "Artificial pollination"],
                correct: 1,
                explanation: "Cross-pollination occurs when pollen from one plant pollinates a flower of a different plant."
            },
            {
                question: "Wind pollination is common in:",
                options: ["Showy flowers", "Grasses", "Colorful flowers", "Fragrant flowers"],
                correct: 1,
                explanation: "Wind pollination is common in grasses and plants with inconspicuous flowers."
            },
            {
                question: "Insect pollination is characterized by:",
                options: ["Small, dull flowers", "Large, colorful flowers", "No nectar", "Smooth pollen"],
                correct: 1,
                explanation: "Insect-pollinated flowers are typically large, colorful, and produce nectar to attract pollinators."
            },
            {
                question: "After fertilization, the ovule develops into:",
                options: ["Fruit", "Seed", "Flower", "Leaf"],
                correct: 1,
                explanation: "After fertilization, the ovule develops into a seed containing the embryo."
            },
            {
                question: "After fertilization, the ovary develops into:",
                options: ["Seed", "Fruit", "Flower", "Root"],
                correct: 1,
                explanation: "After fertilization, the ovary develops into a fruit that protects and disperses seeds."
            },
            {
                question: "Double fertilization occurs in:",
                options: ["Gymnosperms", "Angiosperms", "Ferns", "Mosses"],
                correct: 1,
                explanation: "Double fertilization is unique to angiosperms, where two sperm cells fertilize different nuclei."
            },
            {
                question: "In double fertilization, one sperm fertilizes the:",
                options: ["Egg only", "Polar nuclei only", "Egg and polar nuclei", "Endosperm"],
                correct: 0,
                explanation: "In double fertilization, one sperm fertilizes the egg to form the zygote."
            },
            {
                question: "In double fertilization, the second sperm fertilizes the:",
                options: ["Egg", "Polar nuclei", "Ovary", "Stigma"],
                correct: 1,
                explanation: "The second sperm fertilizes the polar nuclei to form the endosperm."
            },
            {
                question: "Endosperm provides:",
                options: ["Protection", "Nutrition", "Water", "Oxygen"],
                correct: 1,
                explanation: "Endosperm provides nutrition for the developing embryo and germinating seedling."
            },
            {
                question: "Seed dispersal helps:",
                options: ["Reduce competition", "Colonize new areas", "Increase survival", "All of the above"],
                correct: 3,
                explanation: "Seed dispersal reduces competition, helps colonize new areas, and increases survival chances."
            },
            {
                question: "Wind dispersal seeds are typically:",
                options: ["Heavy and large", "Light with wings or hairs", "Fleshy and colorful", "Hard and dense"],
                correct: 1,
                explanation: "Wind-dispersed seeds are typically light with adaptations like wings or hairs for flight."
            },
            {
                question: "Animal dispersal seeds are typically:",
                options: ["Light and dry", "Heavy and smooth", "Fleshy and colorful", "Small and hard"],
                correct: 2,
                explanation: "Animal-dispersed seeds are often enclosed in fleshy, colorful fruits to attract animals."
            },
            {
                question: "Seed germination requires:",
                options: ["Water", "Oxygen", "Suitable temperature", "All of the above"],
                correct: 3,
                explanation: "Seed germination requires water, oxygen, and suitable temperature conditions."
            },
            {
                question: "The first structure to emerge during germination is typically:",
                options: ["Shoot", "Root", "Leaves", "Flowers"],
                correct: 1,
                explanation: "The root (radicle) is typically the first structure to emerge during germination."
            },
            {
                question: "Vegetative reproduction in plants includes:",
                options: ["Runners", "Bulbs", "Tubers", "All of the above"],
                correct: 3,
                explanation: "Vegetative reproduction includes various methods like runners, bulbs, tubers, and fragmentation."
            },
            {
                question: "Artificial vegetative propagation includes:",
                options: ["Grafting", "Cutting", "Layering", "All of the above"],
                correct: 3,
                explanation: "Artificial vegetative propagation includes techniques like grafting, cutting, and layering."
            },
            {
                question: "Grafting is used to:",
                options: ["Combine desirable traits", "Propagate plants", "Improve disease resistance", "All of the above"],
                correct: 3,
                explanation: "Grafting combines desirable traits, propagates plants, and can improve disease resistance."
            },
            {
                question: "Tissue culture is a form of:",
                options: ["Sexual reproduction", "Asexual reproduction", "Both types", "Neither type"],
                correct: 1,
                explanation: "Tissue culture is a form of asexual reproduction that produces genetically identical plants."
            },

            // REPRODUCTIVE STRATEGIES (Questions 76-100)
            {
                question: "R-selected species are characterized by:",
                options: ["Few offspring, high parental care", "Many offspring, low parental care", "Moderate offspring, moderate care", "No offspring"],
                correct: 1,
                explanation: "R-selected species produce many offspring with little parental care, maximizing reproductive output."
            },
            {
                question: "K-selected species are characterized by:",
                options: ["Many offspring, low parental care", "Few offspring, high parental care", "Moderate offspring, moderate care", "No offspring"],
                correct: 1,
                explanation: "K-selected species produce fewer offspring but invest heavily in parental care."
            },
            {
                question: "Humans are examples of:",
                options: ["R-selected species", "K-selected species", "Both types", "Neither type"],
                correct: 1,
                explanation: "Humans are K-selected species with few offspring and extensive parental care."
            },
            {
                question: "Fish that produce thousands of eggs are typically:",
                options: ["K-selected", "R-selected", "Both types", "Neither type"],
                correct: 1,
                explanation: "Fish producing thousands of eggs are typically R-selected, with high reproductive output but low survival rates."
            },
            {
                question: "Parental investment theory suggests that:",
                options: ["All parents invest equally", "Investment depends on offspring survival", "No investment is needed", "Investment is random"],
                correct: 1,
                explanation: "Parental investment theory suggests that investment depends on factors affecting offspring survival and success."
            },
            {
                question: "Sexual selection can lead to:",
                options: ["Larger males", "Bright coloration", "Elaborate displays", "All of the above"],
                correct: 3,
                explanation: "Sexual selection can lead to traits like larger size, bright colors, and elaborate displays to attract mates."
            },
            {
                question: "Monogamy is a mating system where:",
                options: ["One male mates with multiple females", "One female mates with multiple males", "One male mates with one female", "Multiple males mate with multiple females"],
                correct: 2,
                explanation: "Monogamy is a mating system where one male pairs with one female."
            },
            {
                question: "Polygamy includes:",
                options: ["Polygyny only", "Polyandry only", "Both polygyny and polyandry", "Neither system"],
                correct: 2,
                explanation: "Polygamy includes both polygyny (one male, multiple females) and polyandry (one female, multiple males)."
            },
            {
                question: "Courtship behaviors serve to:",
                options: ["Attract mates", "Identify species", "Assess mate quality", "All of the above"],
                correct: 3,
                explanation: "Courtship behaviors attract mates, help identify species, and allow assessment of mate quality."
            },
            {
                question: "Territorial behavior in reproduction helps:",
                options: ["Attract mates", "Secure resources", "Reduce competition", "All of the above"],
                correct: 3,
                explanation: "Territorial behavior can attract mates, secure resources, and reduce competition."
            },
            {
                question: "Reproductive isolation mechanisms include:",
                options: ["Geographic barriers", "Behavioral differences", "Temporal differences", "All of the above"],
                correct: 3,
                explanation: "Reproductive isolation can result from geographic, behavioral, or temporal barriers."
            },
            {
                question: "Seasonal breeding is advantageous because:",
                options: ["Resources are abundant", "Weather is favorable", "Offspring survival is higher", "All of the above"],
                correct: 3,
                explanation: "Seasonal breeding times reproduction with favorable conditions for offspring survival."
            },
            {
                question: "Reproductive senescence refers to:",
                options: ["Early reproduction", "Decline in reproductive ability", "Increased fertility", "Constant reproduction"],
                correct: 1,
                explanation: "Reproductive senescence is the age-related decline in reproductive ability."
            },
            {
                question: "Iteroparous species:",
                options: ["Reproduce once then die", "Reproduce multiple times", "Never reproduce", "Reproduce continuously"],
                correct: 1,
                explanation: "Iteroparous species reproduce multiple times throughout their lives."
            },
            {
                question: "Semelparous species:",
                options: ["Reproduce multiple times", "Reproduce once then die", "Never reproduce", "Reproduce continuously"],
                correct: 1,
                explanation: "Semelparous species reproduce only once in their lifetime, then die."
            },
            {
                question: "Salmon are examples of:",
                options: ["Iteroparous species", "Semelparous species", "Asexual species", "Non-reproductive species"],
                correct: 1,
                explanation: "Most salmon species are semelparous, reproducing once then dying."
            },
            {
                question: "Reproductive success is measured by:",
                options: ["Number of offspring", "Offspring survival", "Offspring reproductive success", "All of the above"],
                correct: 3,
                explanation: "Reproductive success includes not just offspring number, but their survival and reproductive success."
            },
            {
                question: "Cooperative breeding involves:",
                options: ["Only parents care for young", "Helpers assist in raising young", "No care is provided", "Random care"],
                correct: 1,
                explanation: "Cooperative breeding involves helpers (often related individuals) assisting in raising young."
            },
            {
                question: "Brood parasitism is when:",
                options: ["Parents care for their own young", "Parents abandon their young", "Parents use other species to raise their young", "Young care for parents"],
                correct: 2,
                explanation: "Brood parasitism occurs when parents use other species to raise their offspring."
            },
            {
                question: "Cuckoo birds are examples of:",
                options: ["Cooperative breeders", "Brood parasites", "Monogamous species", "Asexual species"],
                correct: 1,
                explanation: "Cuckoo birds are brood parasites that lay eggs in other species' nests."
            },
            {
                question: "Reproductive technology in humans includes:",
                options: ["In vitro fertilization", "Artificial insemination", "Surrogacy", "All of the above"],
                correct: 3,
                explanation: "Reproductive technology includes various methods like IVF, artificial insemination, and surrogacy."
            },
            {
                question: "Cloning is a form of:",
                options: ["Sexual reproduction", "Asexual reproduction", "Both types", "Neither type"],
                correct: 1,
                explanation: "Cloning is a form of asexual reproduction that produces genetically identical individuals."
            },
            {
                question: "Genetic engineering in reproduction can:",
                options: ["Prevent genetic diseases", "Select desired traits", "Improve fertility", "All of the above"],
                correct: 3,
                explanation: "Genetic engineering can prevent diseases, select traits, and improve fertility."
            },
            {
                question: "Contraception methods include:",
                options: ["Barrier methods", "Hormonal methods", "Surgical methods", "All of the above"],
                correct: 3,
                explanation: "Contraception includes various methods like barriers, hormones, and surgical procedures."
            },
            {
                question: "The future of reproduction may involve:",
                options: ["Artificial wombs", "Genetic modification", "Synthetic gametes", "All of the above"],
                correct: 3,
                explanation: "Future reproductive technologies may include artificial wombs, genetic modification, and synthetic gametes."
            }
        ],
        'Support & Movement': [
            // SKELETAL SYSTEM (Questions 1-25)
            {
                question: "The human skeleton has approximately how many bones?",
                options: ["186", "206", "246", "286"],
                correct: 1,
                explanation: "The adult human skeleton has 206 bones, though babies are born with about 270 bones that fuse during development."
            },
            {
                question: "The axial skeleton includes:",
                options: ["Arms and legs", "Skull, spine, and ribcage", "Pelvis only", "Hands and feet"],
                correct: 1,
                explanation: "The axial skeleton includes the skull, vertebral column, and ribcage, forming the central axis of the body."
            },
            {
                question: "The appendicular skeleton includes:",
                options: ["Skull and spine", "Arms and legs", "Ribcage only", "Backbone only"],
                correct: 1,
                explanation: "The appendicular skeleton includes the arms, legs, and their attachment points (shoulder and pelvic girdles)."
            },
            {
                question: "Bones are composed primarily of:",
                options: ["Calcium phosphate", "Sodium chloride", "Potassium iodide", "Magnesium sulfate"],
                correct: 0,
                explanation: "Bones are primarily composed of calcium phosphate (hydroxyapatite) which provides hardness and strength."
            },
            {
                question: "The process of bone formation is called:",
                options: ["Ossification", "Calcification", "Mineralization", "Crystallization"],
                correct: 0,
                explanation: "Ossification is the process of bone formation where cartilage or membrane is replaced by bone tissue."
            },
            {
                question: "Osteoblasts are responsible for:",
                options: ["Bone destruction", "Bone formation", "Bone repair", "Bone growth"],
                correct: 1,
                explanation: "Osteoblasts are bone-building cells that secrete the organic matrix and promote mineralization."
            },
            {
                question: "Osteoclasts are responsible for:",
                options: ["Bone formation", "Bone breakdown", "Bone repair", "Bone growth"],
                correct: 1,
                explanation: "Osteoclasts are large cells that break down bone tissue, important for bone remodeling."
            },
            {
                question: "The shaft of a long bone is called:",
                options: ["Epiphysis", "Diaphysis", "Metaphysis", "Periosteum"],
                correct: 1,
                explanation: "The diaphysis is the shaft or main portion of a long bone, containing the medullary cavity."
            },
            {
                question: "The ends of long bones are called:",
                options: ["Diaphysis", "Epiphysis", "Metaphysis", "Periosteum"],
                correct: 1,
                explanation: "The epiphyses are the ends of long bones, usually wider than the shaft and contain spongy bone."
            },
            {
                question: "Red blood cells are produced in:",
                options: ["Compact bone", "Spongy bone", "Bone marrow", "Periosteum"],
                correct: 2,
                explanation: "Red blood cells are produced in the red bone marrow through a process called hematopoiesis."
            },
            {
                question: "The membrane surrounding bones is called:",
                options: ["Endosteum", "Periosteum", "Perichondrium", "Synovium"],
                correct: 1,
                explanation: "The periosteum is the membrane covering the outer surface of bones, important for bone growth and repair."
            },
            {
                question: "Compact bone is also known as:",
                options: ["Spongy bone", "Cortical bone", "Cancellous bone", "Trabecular bone"],
                correct: 1,
                explanation: "Compact bone is also called cortical bone, forming the dense outer layer of bones."
            },
            {
                question: "Spongy bone is also known as:",
                options: ["Compact bone", "Cortical bone", "Cancellous bone", "Dense bone"],
                correct: 2,
                explanation: "Spongy bone is also called cancellous or trabecular bone, with a honeycomb-like structure."
            },
            {
                question: "The growth plates in bones are made of:",
                options: ["Bone tissue", "Cartilage", "Muscle tissue", "Nerve tissue"],
                correct: 1,
                explanation: "Growth plates (epiphyseal plates) are made of cartilage that allows bones to grow in length."
            },
            {
                question: "Vitamin D is important for:",
                options: ["Protein synthesis", "Calcium absorption", "Fat storage", "Muscle contraction"],
                correct: 1,
                explanation: "Vitamin D is essential for calcium absorption in the intestines, crucial for bone health."
            },
            {
                question: "A fracture is:",
                options: ["A joint dislocation", "A broken bone", "A muscle tear", "A tendon injury"],
                correct: 1,
                explanation: "A fracture is a break in a bone, which can be complete or incomplete."
            },
            {
                question: "Osteoporosis is characterized by:",
                options: ["Increased bone density", "Decreased bone density", "Bone infection", "Bone cancer"],
                correct: 1,
                explanation: "Osteoporosis is a condition characterized by decreased bone density and increased fracture risk."
            },
            {
                question: "The longest bone in the human body is:",
                options: ["Tibia", "Femur", "Humerus", "Radius"],
                correct: 1,
                explanation: "The femur (thighbone) is the longest and strongest bone in the human body."
            },
            {
                question: "The smallest bone in the human body is:",
                options: ["Stapes", "Malleus", "Incus", "Hyoid"],
                correct: 0,
                explanation: "The stapes (stirrup bone) in the middle ear is the smallest bone in the human body."
            },
            {
                question: "Joints are classified by:",
                options: ["Size only", "Location only", "Movement only", "Structure and movement"],
                correct: 3,
                explanation: "Joints are classified by both their structure (fibrous, cartilaginous, synovial) and degree of movement."
            },
            {
                question: "Immovable joints are called:",
                options: ["Synovial joints", "Fibrous joints", "Cartilaginous joints", "Ball-and-socket joints"],
                correct: 1,
                explanation: "Fibrous joints are immovable joints where bones are connected by fibrous connective tissue."
            },
            {
                question: "Slightly movable joints are called:",
                options: ["Synovial joints", "Fibrous joints", "Cartilaginous joints", "Hinge joints"],
                correct: 2,
                explanation: "Cartilaginous joints are slightly movable joints where bones are connected by cartilage."
            },
            {
                question: "Freely movable joints are called:",
                options: ["Fibrous joints", "Cartilaginous joints", "Synovial joints", "Fixed joints"],
                correct: 2,
                explanation: "Synovial joints are freely movable joints with a joint cavity filled with synovial fluid."
            },
            {
                question: "The shoulder joint is an example of a:",
                options: ["Hinge joint", "Ball-and-socket joint", "Pivot joint", "Saddle joint"],
                correct: 1,
                explanation: "The shoulder joint is a ball-and-socket joint allowing movement in multiple directions."
            },
            {
                question: "The elbow joint is an example of a:",
                options: ["Ball-and-socket joint", "Hinge joint", "Pivot joint", "Gliding joint"],
                correct: 1,
                explanation: "The elbow joint is a hinge joint allowing flexion and extension movements."
            },

            // MUSCULAR SYSTEM (Questions 26-50)
            {
                question: "The three types of muscle tissue are:",
                options: ["Skeletal, cardiac, smooth", "Voluntary, involuntary, cardiac", "Striated, non-striated, mixed", "Fast, slow, intermediate"],
                correct: 0,
                explanation: "The three types of muscle tissue are skeletal, cardiac, and smooth muscle."
            },
            {
                question: "Skeletal muscle is:",
                options: ["Involuntary and striated", "Voluntary and striated", "Involuntary and non-striated", "Voluntary and non-striated"],
                correct: 1,
                explanation: "Skeletal muscle is voluntary (under conscious control) and striated (has cross-striations)."
            },
            {
                question: "Cardiac muscle is:",
                options: ["Voluntary and striated", "Involuntary and striated", "Voluntary and non-striated", "Involuntary and non-striated"],
                correct: 1,
                explanation: "Cardiac muscle is involuntary (automatic) and striated, found only in the heart."
            },
            {
                question: "Smooth muscle is:",
                options: ["Voluntary and striated", "Involuntary and striated", "Voluntary and non-striated", "Involuntary and non-striated"],
                correct: 3,
                explanation: "Smooth muscle is involuntary and non-striated, found in organs and blood vessels."
            },
            {
                question: "The basic functional unit of skeletal muscle is:",
                options: ["Sarcomere", "Myofibril", "Muscle fiber", "Fascicle"],
                correct: 0,
                explanation: "The sarcomere is the basic functional unit of skeletal muscle, containing actin and myosin filaments."
            },
            {
                question: "Muscle contraction occurs due to:",
                options: ["Sliding filament mechanism", "Muscle fiber shortening", "Protein synthesis", "Energy storage"],
                correct: 0,
                explanation: "Muscle contraction occurs through the sliding filament mechanism where actin and myosin interact."
            },
            {
                question: "The thick filaments in muscle are composed of:",
                options: ["Actin", "Myosin", "Troponin", "Tropomyosin"],
                correct: 1,
                explanation: "Thick filaments are composed of myosin, which has head regions that bind to actin."
            },
            {
                question: "The thin filaments in muscle are composed of:",
                options: ["Myosin", "Actin", "Collagen", "Elastin"],
                correct: 1,
                explanation: "Thin filaments are primarily composed of actin, along with regulatory proteins."
            },
            {
                question: "Calcium ions are stored in:",
                options: ["Mitochondria", "Sarcoplasmic reticulum", "Nucleus", "Golgi apparatus"],
                correct: 1,
                explanation: "Calcium ions are stored in the sarcoplasmic reticulum and released during muscle contraction."
            },
            {
                question: "The neuromuscular junction is where:",
                options: ["Muscles attach to bones", "Nerves connect to muscles", "Bones connect to joints", "Tendons attach to muscles"],
                correct: 1,
                explanation: "The neuromuscular junction is the synapse where motor neurons connect to muscle fibers."
            },
            {
                question: "Acetylcholine is:",
                options: ["A muscle protein", "A neurotransmitter", "A bone mineral", "A joint fluid"],
                correct: 1,
                explanation: "Acetylcholine is the neurotransmitter released at neuromuscular junctions to stimulate muscle contraction."
            },
            {
                question: "ATP is needed for:",
                options: ["Muscle contraction only", "Muscle relaxation only", "Both contraction and relaxation", "Neither process"],
                correct: 2,
                explanation: "ATP is needed for both muscle contraction (myosin-actin binding) and relaxation (calcium pump)."
            },
            {
                question: "Fast-twitch muscle fibers are:",
                options: ["Fatigue-resistant", "Powerful but fatigue quickly", "Slow to contract", "Found only in the heart"],
                correct: 1,
                explanation: "Fast-twitch fibers contract quickly and powerfully but fatigue rapidly."
            },
            {
                question: "Slow-twitch muscle fibers are:",
                options: ["Powerful but fatigue quickly", "Fatigue-resistant", "Fast to contract", "Found only in smooth muscle"],
                correct: 1,
                explanation: "Slow-twitch fibers contract slowly but are fatigue-resistant, good for endurance."
            },
            {
                question: "Muscle fatigue is caused by:",
                options: ["Accumulation of lactic acid", "Depletion of ATP", "Calcium imbalance", "All of the above"],
                correct: 3,
                explanation: "Muscle fatigue can result from lactic acid buildup, ATP depletion, and calcium handling problems."
            },
            {
                question: "Tendons connect:",
                options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Nerve to muscle"],
                correct: 1,
                explanation: "Tendons are fibrous connective tissues that connect muscles to bones."
            },
            {
                question: "Ligaments connect:",
                options: ["Muscle to bone", "Bone to bone", "Muscle to muscle", "Nerve to muscle"],
                correct: 1,
                explanation: "Ligaments are connective tissues that connect bone to bone, providing joint stability."
            },
            {
                question: "Muscle hypertrophy is:",
                options: ["Muscle shrinkage", "Muscle enlargement", "Muscle paralysis", "Muscle inflammation"],
                correct: 1,
                explanation: "Muscle hypertrophy is the increase in muscle size due to increased protein synthesis."
            },
            {
                question: "Muscle atrophy is:",
                options: ["Muscle enlargement", "Muscle shrinkage", "Muscle inflammation", "Muscle paralysis"],
                correct: 1,
                explanation: "Muscle atrophy is the decrease in muscle size and strength due to disuse or disease."
            },
            {
                question: "The origin of a muscle is:",
                options: ["The movable attachment", "The fixed attachment", "The middle portion", "The nerve supply"],
                correct: 1,
                explanation: "The origin is the fixed attachment point of a muscle, usually closer to the body's midline."
            },
            {
                question: "The insertion of a muscle is:",
                options: ["The fixed attachment", "The movable attachment", "The middle portion", "The blood supply"],
                correct: 1,
                explanation: "The insertion is the movable attachment point of a muscle, usually farther from the body's midline."
            },
            {
                question: "Flexion is:",
                options: ["Straightening a joint", "Bending a joint", "Rotating a joint", "Stabilizing a joint"],
                correct: 1,
                explanation: "Flexion is the movement that decreases the angle between body parts, bending a joint."
            },
            {
                question: "Extension is:",
                options: ["Bending a joint", "Straightening a joint", "Rotating a joint", "Stabilizing a joint"],
                correct: 1,
                explanation: "Extension is the movement that increases the angle between body parts, straightening a joint."
            },
            {
                question: "Abduction is:",
                options: ["Moving toward the midline", "Moving away from the midline", "Rotating movement", "Circular movement"],
                correct: 1,
                explanation: "Abduction is movement away from the midline of the body."
            },
            {
                question: "Adduction is:",
                options: ["Moving away from the midline", "Moving toward the midline", "Rotating movement", "Circular movement"],
                correct: 1,
                explanation: "Adduction is movement toward the midline of the body."
            },

            // TYPES OF MOVEMENT (Questions 51-75)
            {
                question: "Locomotion is:",
                options: ["Movement within the body", "Movement of the entire body", "Movement of individual organs", "Movement of blood"],
                correct: 1,
                explanation: "Locomotion is the movement of the entire organism from one place to another."
            },
            {
                question: "Bipedal locomotion means:",
                options: ["Walking on four legs", "Walking on two legs", "Swimming", "Flying"],
                correct: 1,
                explanation: "Bipedal locomotion is walking on two legs, characteristic of humans and some other primates."
            },
            {
                question: "Quadrupedal locomotion means:",
                options: ["Walking on two legs", "Walking on four legs", "Swimming", "Flying"],
                correct: 1,
                explanation: "Quadrupedal locomotion is walking on four legs, common in most mammals."
            },
            {
                question: "The gait cycle includes:",
                options: ["Stance phase only", "Swing phase only", "Both stance and swing phases", "Neither phase"],
                correct: 2,
                explanation: "The gait cycle includes both stance phase (foot on ground) and swing phase (foot off ground)."
            },
            {
                question: "Running differs from walking in that:",
                options: ["Both feet are always on ground", "There's a flight phase", "It's slower", "It uses different muscles"],
                correct: 1,
                explanation: "Running includes a flight phase where both feet are off the ground, unlike walking."
            },
            {
                question: "Swimming locomotion involves:",
                options: ["Only arm movements", "Only leg movements", "Coordinated limb movements", "No muscular effort"],
                correct: 2,
                explanation: "Swimming involves coordinated movements of arms and legs to propel through water."
            },
            {
                question: "Flying in birds involves:",
                options: ["Wing movements only", "Tail movements only", "Wing and tail coordination", "No muscular effort"],
                correct: 2,
                explanation: "Bird flight involves coordinated wing and tail movements for lift, thrust, and control."
            },
            {
                question: "The center of gravity in humans is located:",
                options: ["In the head", "In the chest", "In the pelvis", "In the legs"],
                correct: 2,
                explanation: "The human center of gravity is located in the pelvis, affecting balance and stability."
            },
            {
                question: "Balance is maintained by:",
                options: ["Visual system only", "Vestibular system only", "Proprioceptive system only", "All sensory systems"],
                correct: 3,
                explanation: "Balance is maintained by integration of visual, vestibular, and proprioceptive systems."
            },
            {
                question: "Proprioception is:",
                options: ["Sense of sight", "Sense of hearing", "Sense of body position", "Sense of smell"],
                correct: 2,
                explanation: "Proprioception is the sense of body position and movement in space."
            },
            {
                question: "Reflexes are:",
                options: ["Voluntary responses", "Involuntary responses", "Learned responses", "Delayed responses"],
                correct: 1,
                explanation: "Reflexes are involuntary, rapid responses to stimuli that help protect the body."
            },
            {
                question: "The stretch reflex:",
                options: ["Prevents muscle stretching", "Promotes muscle stretching", "Has no effect on muscle", "Only works in arms"],
                correct: 0,
                explanation: "The stretch reflex prevents excessive muscle stretching by causing muscle contraction."
            },
            {
                question: "Muscle spindles detect:",
                options: ["Muscle tension", "Muscle length", "Muscle temperature", "Muscle fatigue"],
                correct: 1,
                explanation: "Muscle spindles are sensory organs that detect changes in muscle length."
            },
            {
                question: "Golgi tendon organs detect:",
                options: ["Muscle length", "Muscle tension", "Muscle temperature", "Muscle fatigue"],
                correct: 1,
                explanation: "Golgi tendon organs detect muscle tension and prevent excessive force production."
            },
            {
                question: "Motor units consist of:",
                options: ["One motor neuron and one muscle fiber", "One motor neuron and multiple muscle fibers", "Multiple neurons and one fiber", "Multiple neurons and multiple fibers"],
                correct: 1,
                explanation: "A motor unit consists of one motor neuron and all the muscle fibers it innervates."
            },
            {
                question: "Muscle tone is:",
                options: ["Complete muscle relaxation", "Partial muscle contraction", "Maximum muscle contraction", "Muscle paralysis"],
                correct: 1,
                explanation: "Muscle tone is the partial contraction of muscles that maintains posture and readiness."
            },
            {
                question: "Isometric contraction involves:",
                options: ["Muscle shortening", "Muscle lengthening", "No change in muscle length", "Muscle relaxation"],
                correct: 2,
                explanation: "Isometric contraction occurs when muscle generates force without changing length."
            },
            {
                question: "Isotonic contraction involves:",
                options: ["No change in muscle length", "Muscle length changes", "No force generation", "Muscle relaxation"],
                correct: 1,
                explanation: "Isotonic contraction occurs when muscle changes length while maintaining relatively constant tension."
            },
            {
                question: "Concentric contraction involves:",
                options: ["Muscle lengthening", "Muscle shortening", "No muscle movement", "Muscle relaxation"],
                correct: 1,
                explanation: "Concentric contraction occurs when muscle shortens while contracting."
            },
            {
                question: "Eccentric contraction involves:",
                options: ["Muscle shortening", "Muscle lengthening", "No muscle movement", "Muscle relaxation"],
                correct: 1,
                explanation: "Eccentric contraction occurs when muscle lengthens while under tension."
            },
            {
                question: "Antagonistic muscles:",
                options: ["Work together", "Work in opposition", "Never contract", "Are always relaxed"],
                correct: 1,
                explanation: "Antagonistic muscles work in opposition, with one contracting while the other relaxes."
            },
            {
                question: "Synergistic muscles:",
                options: ["Work in opposition", "Work together", "Never contract", "Are always relaxed"],
                correct: 1,
                explanation: "Synergistic muscles work together to produce the same movement."
            },
            {
                question: "The biceps and triceps are:",
                options: ["Synergistic muscles", "Antagonistic muscles", "Unrelated muscles", "Smooth muscles"],
                correct: 1,
                explanation: "The biceps and triceps are antagonistic muscles that work opposite to each other."
            },
            {
                question: "Lever systems in the body involve:",
                options: ["Bones only", "Muscles only", "Bones, muscles, and joints", "Nerves only"],
                correct: 2,
                explanation: "Lever systems in the body involve bones (levers), muscles (force), and joints (fulcrums)."
            },
            {
                question: "A first-class lever has:",
                options: ["Fulcrum between effort and load", "Load between fulcrum and effort", "Effort between fulcrum and load", "No specific arrangement"],
                correct: 0,
                explanation: "In a first-class lever, the fulcrum is between the effort and the load."
            },

            // DISORDERS AND ADAPTATIONS (Questions 76-100)
            {
                question: "Arthritis is:",
                options: ["Bone infection", "Joint inflammation", "Muscle weakness", "Nerve damage"],
                correct: 1,
                explanation: "Arthritis is inflammation of joints, causing pain, stiffness, and reduced mobility."
            },
            {
                question: "Osteoarthritis is caused by:",
                options: ["Infection", "Autoimmune reaction", "Wear and tear", "Genetic defect"],
                correct: 2,
                explanation: "Osteoarthritis is caused by wear and tear of joint cartilage over time."
            },
            {
                question: "Rheumatoid arthritis is:",
                options: ["Infectious disease", "Autoimmune disease", "Genetic disorder", "Nutritional deficiency"],
                correct: 1,
                explanation: "Rheumatoid arthritis is an autoimmune disease where the immune system attacks joint tissues."
            },
            {
                question: "Muscular dystrophy is:",
                options: ["Bone disease", "Progressive muscle weakness", "Joint inflammation", "Nerve disorder"],
                correct: 1,
                explanation: "Muscular dystrophy is a group of genetic disorders causing progressive muscle weakness and degeneration."
            },
            {
                question: "Scoliosis is:",
                options: ["Bone fracture", "Spinal curvature", "Muscle weakness", "Joint dislocation"],
                correct: 1,
                explanation: "Scoliosis is an abnormal lateral curvature of the spine."
            },
            {
                question: "Kyphosis is:",
                options: ["Forward curvature of spine", "Backward curvature of spine", "Lateral curvature of spine", "Straight spine"],
                correct: 1,
                explanation: "Kyphosis is an excessive backward curvature of the spine, causing a hunchback appearance."
            },
            {
                question: "Lordosis is:",
                options: ["Backward curvature of spine", "Forward curvature of spine", "Lateral curvature of spine", "Straight spine"],
                correct: 1,
                explanation: "Lordosis is an excessive forward curvature of the spine, typically in the lower back."
            },
            {
                question: "A sprain involves:",
                options: ["Bone fracture", "Muscle tear", "Ligament injury", "Tendon rupture"],
                correct: 2,
                explanation: "A sprain is an injury to ligaments, the connective tissues that connect bones at joints."
            },
            {
                question: "A strain involves:",
                options: ["Bone fracture", "Muscle or tendon injury", "Ligament injury", "Joint dislocation"],
                correct: 1,
                explanation: "A strain is an injury to muscles or tendons, often caused by overstretching."
            },
            {
                question: "Exercise benefits include:",
                options: ["Stronger bones", "Stronger muscles", "Better cardiovascular health", "All of the above"],
                correct: 3,
                explanation: "Exercise benefits include stronger bones and muscles, better cardiovascular health, and overall fitness."
            },
            {
                question: "Weight-bearing exercise is important for:",
                options: ["Muscle strength only", "Bone health only", "Both muscle and bone health", "Neither"],
                correct: 2,
                explanation: "Weight-bearing exercise is important for both muscle strength and bone health."
            },
            {
                question: "Bone remodeling is:",
                options: ["One-time process", "Continuous process", "Only during growth", "Never occurs"],
                correct: 1,
                explanation: "Bone remodeling is a continuous process throughout life, replacing old bone with new bone."
            },
            {
                question: "Calcium deficiency can lead to:",
                options: ["Stronger bones", "Weak bones", "Muscle hypertrophy", "Increased flexibility"],
                correct: 1,
                explanation: "Calcium deficiency can lead to weak bones and increased risk of fractures."
            },
            {
                question: "Vitamin C is important for:",
                options: ["Bone formation", "Collagen synthesis", "Muscle contraction", "Nerve function"],
                correct: 1,
                explanation: "Vitamin C is essential for collagen synthesis, important for bone, tendon, and ligament health."
            },
            {
                question: "Aging affects the musculoskeletal system by:",
                options: ["Increasing bone density", "Increasing muscle mass", "Decreasing bone density and muscle mass", "No effect"],
                correct: 2,
                explanation: "Aging typically decreases both bone density and muscle mass, increasing fracture and fall risk."
            },
            {
                question: "Adaptation to exercise includes:",
                options: ["Muscle hypertrophy", "Bone strengthening", "Improved coordination", "All of the above"],
                correct: 3,
                explanation: "Exercise adaptation includes muscle hypertrophy, bone strengthening, and improved coordination."
            },
            {
                question: "Immobilization leads to:",
                options: ["Muscle strengthening", "Bone strengthening", "Muscle atrophy and bone loss", "No changes"],
                correct: 2,
                explanation: "Immobilization leads to muscle atrophy and bone loss due to lack of mechanical stress."
            },
            {
                question: "Prosthetics are:",
                options: ["Natural body parts", "Artificial body parts", "Medications", "Surgical procedures"],
                correct: 1,
                explanation: "Prosthetics are artificial devices that replace missing body parts."
            },
            {
                question: "Physical therapy helps with:",
                options: ["Mobility restoration", "Strength improvement", "Pain reduction", "All of the above"],
                correct: 3,
                explanation: "Physical therapy helps with mobility restoration, strength improvement, and pain reduction."
            },
            {
                question: "Ergonomics is the study of:",
                options: ["Exercise physiology", "Workplace design", "Bone structure", "Muscle function"],
                correct: 1,
                explanation: "Ergonomics is the study of designing workplaces and tools to fit human capabilities and limitations."
            },
            {
                question: "Good posture helps:",
                options: ["Reduce back pain", "Improve breathing", "Reduce muscle fatigue", "All of the above"],
                correct: 3,
                explanation: "Good posture helps reduce back pain, improve breathing, and reduce muscle fatigue."
            },
            {
                question: "Warm-up before exercise:",
                options: ["Increases injury risk", "Decreases injury risk", "Has no effect", "Only affects performance"],
                correct: 1,
                explanation: "Warm-up before exercise decreases injury risk by preparing muscles and joints for activity."
            },
            {
                question: "Stretching helps with:",
                options: ["Flexibility", "Range of motion", "Injury prevention", "All of the above"],
                correct: 3,
                explanation: "Stretching helps improve flexibility, range of motion, and can help prevent injuries."
            },
            {
                question: "The future of support and movement may include:",
                options: ["Artificial joints", "Robotic prosthetics", "Gene therapy", "All of the above"],
                correct: 3,
                explanation: "Future developments may include advanced artificial joints, robotic prosthetics, and gene therapy."
            },
            {
                question: "Biomechanics is the study of:",
                options: ["Living organisms only", "Mechanical principles in living systems", "Machines only", "Chemistry of life"],
                correct: 1,
                explanation: "Biomechanics applies mechanical principles to understand how living systems move and function."
            }
        ],
        'Genetics & Heredity': [
            // BASIC GENETICS CONCEPTS (Questions 1-25)
            {
                question: "The basic unit of heredity is:",
                options: ["Chromosome", "Gene", "DNA", "RNA"],
                correct: 1,
                explanation: "A gene is the basic unit of heredity that contains instructions for specific traits."
            },
            {
                question: "DNA stands for:",
                options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Dexyribonucleic acid", "Denoxyribonucleic acid"],
                correct: 0,
                explanation: "DNA stands for Deoxyribonucleic acid, the molecule that carries genetic information."
            },
            {
                question: "The structure of DNA was discovered by:",
                options: ["Mendel", "Darwin", "Watson and Crick", "Morgan"],
                correct: 2,
                explanation: "James Watson and Francis Crick discovered the double helix structure of DNA in 1953."
            },
            {
                question: "DNA is composed of:",
                options: ["Amino acids", "Nucleotides", "Fatty acids", "Carbohydrates"],
                correct: 1,
                explanation: "DNA is composed of nucleotides, each containing a phosphate, sugar, and nitrogenous base."
            },
            {
                question: "The four nitrogenous bases in DNA are:",
                options: ["A, T, G, C", "A, U, G, C", "A, T, G, U", "T, U, G, C"],
                correct: 0,
                explanation: "The four bases in DNA are Adenine (A), Thymine (T), Guanine (G), and Cytosine (C)."
            },
            {
                question: "In DNA, Adenine pairs with:",
                options: ["Guanine", "Cytosine", "Thymine", "Uracil"],
                correct: 2,
                explanation: "In DNA, Adenine always pairs with Thymine through hydrogen bonds."
            },
            {
                question: "In DNA, Guanine pairs with:",
                options: ["Adenine", "Thymine", "Cytosine", "Uracil"],
                correct: 2,
                explanation: "In DNA, Guanine always pairs with Cytosine through hydrogen bonds."
            },
            {
                question: "The shape of DNA is:",
                options: ["Single helix", "Double helix", "Triple helix", "Linear"],
                correct: 1,
                explanation: "DNA has a double helix structure with two antiparallel strands."
            },
            {
                question: "Chromosomes are composed of:",
                options: ["DNA only", "Proteins only", "DNA and proteins", "RNA only"],
                correct: 2,
                explanation: "Chromosomes are composed of DNA wrapped around histone proteins."
            },
            {
                question: "Humans have how many pairs of chromosomes?",
                options: ["22", "23", "24", "25"],
                correct: 1,
                explanation: "Humans have 23 pairs of chromosomes (46 total) in their diploid cells."
            },
            {
                question: "Sex chromosomes in humans are:",
                options: ["XX and XY", "XX and YY", "XY and YY", "Only XX"],
                correct: 0,
                explanation: "Human sex chromosomes are XX (female) and XY (male)."
            },
            {
                question: "Autosomes are:",
                options: ["Sex chromosomes", "Non-sex chromosomes", "Only in males", "Only in females"],
                correct: 1,
                explanation: "Autosomes are the non-sex chromosomes; humans have 22 pairs of autosomes."
            },
            {
                question: "Alleles are:",
                options: ["Different chromosomes", "Different forms of the same gene", "Different genes", "Different proteins"],
                correct: 1,
                explanation: "Alleles are different versions or forms of the same gene at the same locus."
            },
            {
                question: "A homozygous individual has:",
                options: ["Two different alleles", "Two identical alleles", "No alleles", "Multiple alleles"],
                correct: 1,
                explanation: "A homozygous individual has two identical alleles for a particular gene."
            },
            {
                question: "A heterozygous individual has:",
                options: ["Two identical alleles", "Two different alleles", "No alleles", "Multiple alleles"],
                correct: 1,
                explanation: "A heterozygous individual has two different alleles for a particular gene."
            },
            {
                question: "Genotype refers to:",
                options: ["Physical appearance", "Genetic makeup", "Environmental factors", "Behavior"],
                correct: 1,
                explanation: "Genotype is the genetic constitution or makeup of an organism."
            },
            {
                question: "Phenotype refers to:",
                options: ["Genetic makeup", "Physical appearance", "Chromosome number", "Gene location"],
                correct: 1,
                explanation: "Phenotype is the observable physical or biochemical characteristics of an organism."
            },
            {
                question: "A dominant allele is:",
                options: ["Always expressed", "Only expressed in homozygotes", "Never expressed", "Only expressed in males"],
                correct: 0,
                explanation: "A dominant allele is expressed in both homozygous and heterozygous conditions."
            },
            {
                question: "A recessive allele is:",
                options: ["Always expressed", "Only expressed in homozygotes", "Never expressed", "Only expressed in females"],
                correct: 1,
                explanation: "A recessive allele is only expressed when present in homozygous condition."
            },
            {
                question: "The law of segregation states that:",
                options: ["Alleles separate during gamete formation", "Alleles always stay together", "Genes are linked", "Chromosomes don't separate"],
                correct: 0,
                explanation: "Mendel's law of segregation states that allele pairs separate during gamete formation."
            },
            {
                question: "The law of independent assortment states that:",
                options: ["All genes are linked", "Genes on different chromosomes assort independently", "Alleles never separate", "Only some genes are inherited"],
                correct: 1,
                explanation: "Mendel's law of independent assortment states that genes on different chromosomes assort independently."
            },
            {
                question: "Mendel's experiments were conducted on:",
                options: ["Fruit flies", "Pea plants", "Mice", "Humans"],
                correct: 1,
                explanation: "Gregor Mendel conducted his famous genetic experiments on pea plants."
            },
            {
                question: "A monohybrid cross involves:",
                options: ["One trait", "Two traits", "Three traits", "Multiple traits"],
                correct: 0,
                explanation: "A monohybrid cross examines the inheritance of one trait."
            },
            {
                question: "A dihybrid cross involves:",
                options: ["One trait", "Two traits", "Three traits", "Multiple traits"],
                correct: 1,
                explanation: "A dihybrid cross examines the inheritance of two traits simultaneously."
            },
            {
                question: "The F1 generation is:",
                options: ["Parent generation", "First filial generation", "Second filial generation", "Final generation"],
                correct: 1,
                explanation: "F1 is the first filial generation, offspring of the parental (P) generation."
            },

            // MOLECULAR GENETICS (Questions 26-50)
            {
                question: "DNA replication is:",
                options: ["Conservative", "Semi-conservative", "Dispersive", "Non-conservative"],
                correct: 1,
                explanation: "DNA replication is semi-conservative, with each new DNA molecule containing one original and one new strand."
            },
            {
                question: "DNA replication occurs during:",
                options: ["G1 phase", "S phase", "G2 phase", "M phase"],
                correct: 1,
                explanation: "DNA replication occurs during the S (synthesis) phase of the cell cycle."
            },
            {
                question: "The enzyme that unwinds DNA is:",
                options: ["DNA polymerase", "Helicase", "Ligase", "Primase"],
                correct: 1,
                explanation: "Helicase unwinds the DNA double helix during replication."
            },
            {
                question: "DNA polymerase:",
                options: ["Adds nucleotides to DNA", "Unwinds DNA", "Joins DNA fragments", "Primes DNA synthesis"],
                correct: 0,
                explanation: "DNA polymerase adds nucleotides to the growing DNA strand during replication."
            },
            {
                question: "The leading strand is synthesized:",
                options: ["Continuously", "Discontinuously", "Not at all", "Only in prokaryotes"],
                correct: 0,
                explanation: "The leading strand is synthesized continuously in the 5' to 3' direction."
            },
            {
                question: "The lagging strand is synthesized:",
                options: ["Continuously", "Discontinuously", "Not at all", "Only in eukaryotes"],
                correct: 1,
                explanation: "The lagging strand is synthesized discontinuously in short fragments called Okazaki fragments."
            },
            {
                question: "Transcription is the process of:",
                options: ["DNA to DNA", "DNA to RNA", "RNA to protein", "Protein to DNA"],
                correct: 1,
                explanation: "Transcription is the process of making RNA from a DNA template."
            },
            {
                question: "Translation is the process of:",
                options: ["DNA to RNA", "RNA to protein", "DNA to protein", "Protein to RNA"],
                correct: 1,
                explanation: "Translation is the process of making proteins from mRNA template."
            },
            {
                question: "RNA differs from DNA in that RNA:",
                options: ["Has thymine instead of uracil", "Is double-stranded", "Has uracil instead of thymine", "Has deoxyribose sugar"],
                correct: 2,
                explanation: "RNA has uracil instead of thymine and ribose instead of deoxyribose sugar."
            },
            {
                question: "mRNA stands for:",
                options: ["Messenger RNA", "Mitochondrial RNA", "Micro RNA", "Modified RNA"],
                correct: 0,
                explanation: "mRNA is messenger RNA that carries genetic information from DNA to ribosomes."
            },
            {
                question: "tRNA stands for:",
                options: ["Transfer RNA", "Transcription RNA", "Transport RNA", "Terminal RNA"],
                correct: 0,
                explanation: "tRNA is transfer RNA that brings amino acids to ribosomes during protein synthesis."
            },
            {
                question: "rRNA stands for:",
                options: ["Ribosomal RNA", "Reverse RNA", "Regulatory RNA", "Recombinant RNA"],
                correct: 0,
                explanation: "rRNA is ribosomal RNA, a structural component of ribosomes."
            },
            {
                question: "A codon is:",
                options: ["Three nucleotides coding for an amino acid", "One nucleotide", "A protein", "A chromosome"],
                correct: 0,
                explanation: "A codon is a sequence of three nucleotides that codes for a specific amino acid."
            },
            {
                question: "The genetic code is:",
                options: ["Different in each organism", "Universal", "Only in plants", "Only in animals"],
                correct: 1,
                explanation: "The genetic code is nearly universal across all living organisms."
            },
            {
                question: "The start codon is:",
                options: ["UAG", "UAA", "AUG", "UGA"],
                correct: 2,
                explanation: "AUG is the start codon that initiates protein synthesis and codes for methionine."
            },
            {
                question: "Stop codons are:",
                options: ["AUG, UUU, CCC", "UAG, UAA, UGA", "GGG, AAA, TTT", "CUG, GUG, AUC"],
                correct: 1,
                explanation: "UAG, UAA, and UGA are stop codons that terminate protein synthesis."
            },
            {
                question: "Mutations are:",
                options: ["Always harmful", "Always beneficial", "Changes in DNA sequence", "Always lethal"],
                correct: 2,
                explanation: "Mutations are changes in DNA sequence that can be harmful, beneficial, or neutral."
            },
            {
                question: "Point mutations involve:",
                options: ["Large deletions", "Single nucleotide changes", "Chromosome rearrangements", "Gene duplications"],
                correct: 1,
                explanation: "Point mutations involve changes in a single nucleotide in the DNA sequence."
            },
            {
                question: "Frameshift mutations are caused by:",
                options: ["Substitutions", "Insertions or deletions", "Duplications", "Inversions"],
                correct: 1,
                explanation: "Frameshift mutations are caused by insertions or deletions that change the reading frame."
            },
            {
                question: "Silent mutations:",
                options: ["Always change amino acids", "Don't change amino acids", "Are always lethal", "Don't occur"],
                correct: 1,
                explanation: "Silent mutations don't change the amino acid sequence due to the degeneracy of the genetic code."
            },
            {
                question: "Gene expression is controlled by:",
                options: ["Promoters", "Enhancers", "Silencers", "All of the above"],
                correct: 3,
                explanation: "Gene expression is controlled by various regulatory elements including promoters, enhancers, and silencers."
            },
            {
                question: "Epigenetics involves:",
                options: ["DNA sequence changes", "Heritable changes without DNA sequence changes", "Only mutations", "Chromosome number changes"],
                correct: 1,
                explanation: "Epigenetics involves heritable changes in gene expression without changes in DNA sequence."
            },
            {
                question: "DNA methylation:",
                options: ["Always activates genes", "Usually silences genes", "Has no effect", "Only occurs in plants"],
                correct: 1,
                explanation: "DNA methylation typically silences gene expression, especially at promoter regions."
            },
            {
                question: "Histone modifications can:",
                options: ["Only activate genes", "Only silence genes", "Both activate and silence genes", "Have no effect"],
                correct: 2,
                explanation: "Histone modifications can either activate or silence genes depending on the type of modification."
            },
            {
                question: "Gene therapy involves:",
                options: ["Removing all genes", "Introducing functional genes", "Destroying DNA", "Preventing transcription"],
                correct: 1,
                explanation: "Gene therapy involves introducing functional genes to treat genetic disorders."
            },

            // INHERITANCE PATTERNS (Questions 51-75)
            {
                question: "Complete dominance occurs when:",
                options: ["Both alleles are expressed", "Dominant allele masks recessive", "Neither allele is expressed", "Alleles blend"],
                correct: 1,
                explanation: "In complete dominance, the dominant allele completely masks the expression of the recessive allele."
            },
            {
                question: "Incomplete dominance occurs when:",
                options: ["Dominant allele masks recessive", "Both alleles blend", "Neither allele is expressed", "Only recessive is expressed"],
                correct: 1,
                explanation: "In incomplete dominance, neither allele is completely dominant, resulting in a blended phenotype."
            },
            {
                question: "Codominance occurs when:",
                options: ["One allele dominates", "Both alleles are expressed separately", "Alleles blend", "Neither is expressed"],
                correct: 1,
                explanation: "In codominance, both alleles are expressed simultaneously without blending."
            },
            {
                question: "ABO blood types show:",
                options: ["Complete dominance only", "Incomplete dominance", "Codominance", "No dominance"],
                correct: 2,
                explanation: "ABO blood types show codominance between A and B alleles, both dominant over O."
            },
            {
                question: "Multiple alleles mean:",
                options: ["Two alleles per gene", "More than two alleles for a gene", "No alleles", "Identical alleles"],
                correct: 1,
                explanation: "Multiple alleles means more than two alternative forms exist for a gene in a population."
            },
            {
                question: "Sex-linked traits are:",
                options: ["On autosomes", "On sex chromosomes", "Not inherited", "Always dominant"],
                correct: 1,
                explanation: "Sex-linked traits are controlled by genes located on sex chromosomes."
            },
            {
                question: "X-linked recessive traits are more common in:",
                options: ["Females", "Males", "Both equally", "Neither"],
                correct: 1,
                explanation: "X-linked recessive traits are more common in males because they have only one X chromosome."
            },
            {
                question: "Color blindness is typically:",
                options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
                correct: 2,
                explanation: "Color blindness is typically an X-linked recessive trait, more common in males."
            },
            {
                question: "Hemophilia is:",
                options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
                correct: 2,
                explanation: "Hemophilia is an X-linked recessive bleeding disorder."
            },
            {
                question: "Polygenic inheritance involves:",
                options: ["One gene", "Two genes", "Multiple genes", "No genes"],
                correct: 2,
                explanation: "Polygenic inheritance involves multiple genes affecting a single trait."
            },
            {
                question: "Human height is an example of:",
                options: ["Single gene inheritance", "Polygenic inheritance", "Sex-linked inheritance", "Codominance"],
                correct: 1,
                explanation: "Human height is controlled by multiple genes, showing polygenic inheritance."
            },
            {
                question: "Skin color in humans shows:",
                options: ["Single gene control", "Polygenic inheritance", "Sex-linkage", "Complete dominance"],
                correct: 1,
                explanation: "Human skin color is controlled by multiple genes showing polygenic inheritance."
            },
            {
                question: "Environmental factors can affect:",
                options: ["Genotype", "Phenotype", "Both genotype and phenotype", "Neither"],
                correct: 1,
                explanation: "Environmental factors can affect phenotype but not genotype."
            },
            {
                question: "Penetrance refers to:",
                options: ["Gene expression level", "Percentage of individuals showing the phenotype", "Mutation rate", "Chromosome number"],
                correct: 1,
                explanation: "Penetrance is the percentage of individuals with a genotype who show the expected phenotype."
            },
            {
                question: "Expressivity refers to:",
                options: ["Whether a gene is expressed", "Degree of expression of a phenotype", "Number of alleles", "Chromosome location"],
                correct: 1,
                explanation: "Expressivity refers to the degree or intensity of expression of a phenotype."
            },
            {
                question: "Pleiotropy occurs when:",
                options: ["Multiple genes affect one trait", "One gene affects multiple traits", "Genes don't interact", "Only in males"],
                correct: 1,
                explanation: "Pleiotropy occurs when one gene affects multiple traits."
            },
            {
                question: "Epistasis involves:",
                options: ["Gene interaction", "No gene interaction", "Only dominant genes", "Only recessive genes"],
                correct: 0,
                explanation: "Epistasis involves interaction between genes where one gene masks the expression of another."
            },
            {
                question: "A carrier is:",
                options: ["Homozygous dominant", "Homozygous recessive", "Heterozygous for recessive trait", "Has no alleles"],
                correct: 2,
                explanation: "A carrier is heterozygous for a recessive trait, not showing the phenotype but able to pass it on."
            },
            {
                question: "Consanguinity refers to:",
                options: ["Mating between relatives", "Random mating", "Mating between different species", "Asexual reproduction"],
                correct: 0,
                explanation: "Consanguinity refers to mating between genetically related individuals."
            },
            {
                question: "Inbreeding increases the chance of:",
                options: ["Heterozygosity", "Homozygosity", "Mutations", "Chromosome number changes"],
                correct: 1,
                explanation: "Inbreeding increases homozygosity and the expression of recessive traits."
            },
            {
                question: "Hardy-Weinberg equilibrium describes:",
                options: ["Evolving populations", "Non-evolving populations", "Only small populations", "Only large populations"],
                correct: 1,
                explanation: "Hardy-Weinberg equilibrium describes allele frequencies in non-evolving populations."
            },
            {
                question: "Population genetics studies:",
                options: ["Individual inheritance", "Allele frequencies in populations", "Single gene effects", "Chromosome structure"],
                correct: 1,
                explanation: "Population genetics studies allele and genotype frequencies in populations."
            },
            {
                question: "Gene flow refers to:",
                options: ["Movement of alleles between populations", "Gene expression", "Mutation rate", "Chromosome movement"],
                correct: 0,
                explanation: "Gene flow is the movement of alleles from one population to another through migration."
            },
            {
                question: "Genetic drift is:",
                options: ["Directed change", "Random change in allele frequencies", "Mutation", "Natural selection"],
                correct: 1,
                explanation: "Genetic drift is random change in allele frequencies, especially important in small populations."
            },
            {
                question: "The founder effect is:",
                options: ["Random mating", "New population from few individuals", "Large population growth", "Gene flow"],
                correct: 1,
                explanation: "The founder effect occurs when a new population is established by a small number of individuals."
            },

            // HUMAN GENETICS AND DISORDERS (Questions 76-100)
            {
                question: "Pedigree analysis is used to:",
                options: ["Study plant genetics", "Track inheritance in families", "Analyze chromosome structure", "Study mutations"],
                correct: 1,
                explanation: "Pedigree analysis tracks the inheritance of traits through generations in families."
            },
            {
                question: "Autosomal dominant disorders:",
                options: ["Skip generations", "Appear in every generation", "Only affect males", "Only affect females"],
                correct: 1,
                explanation: "Autosomal dominant disorders typically appear in every generation when present."
            },
            {
                question: "Autosomal recessive disorders:",
                options: ["Appear in every generation", "Can skip generations", "Only affect males", "Are always lethal"],
                correct: 1,
                explanation: "Autosomal recessive disorders can skip generations and often appear in siblings."
            },
            {
                question: "Huntington's disease is:",
                options: ["Autosomal recessive", "Autosomal dominant", "X-linked recessive", "Chromosomal disorder"],
                correct: 1,
                explanation: "Huntington's disease is an autosomal dominant neurodegenerative disorder."
            },
            {
                question: "Cystic fibrosis is:",
                options: ["Autosomal dominant", "Autosomal recessive", "X-linked", "Y-linked"],
                correct: 1,
                explanation: "Cystic fibrosis is an autosomal recessive disorder affecting the respiratory and digestive systems."
            },
            {
                question: "Sickle cell anemia is:",
                options: ["Autosomal dominant", "Autosomal recessive", "X-linked", "Chromosomal disorder"],
                correct: 1,
                explanation: "Sickle cell anemia is an autosomal recessive blood disorder."
            },
            {
                question: "Tay-Sachs disease is:",
                options: ["Autosomal dominant", "Autosomal recessive", "X-linked", "Y-linked"],
                correct: 1,
                explanation: "Tay-Sachs disease is an autosomal recessive lysosomal storage disorder."
            },
            {
                question: "Down syndrome is caused by:",
                options: ["Gene mutation", "Trisomy 21", "Monosomy X", "Deletion"],
                correct: 1,
                explanation: "Down syndrome is caused by trisomy 21 (an extra copy of chromosome 21)."
            },
            {
                question: "Turner syndrome involves:",
                options: ["Trisomy 21", "Monosomy X", "Klinefelter syndrome", "Trisomy 18"],
                correct: 1,
                explanation: "Turner syndrome involves monosomy X (45,X) affecting females."
            },
            {
                question: "Klinefelter syndrome involves:",
                options: ["Monosomy X", "XXY", "Trisomy 21", "XYY"],
                correct: 1,
                explanation: "Klinefelter syndrome involves XXY chromosome constitution affecting males."
            },
            {
                question: "Nondisjunction occurs during:",
                options: ["DNA replication", "Transcription", "Meiosis", "Translation"],
                correct: 2,
                explanation: "Nondisjunction is the failure of chromosomes to separate properly during meiosis."
            },
            {
                question: "Genetic counseling helps:",
                options: ["Treat genetic disorders", "Assess genetic risks", "Cure mutations", "Change genotypes"],
                correct: 1,
                explanation: "Genetic counseling helps individuals and families assess genetic risks and make informed decisions."
            },
            {
                question: "Prenatal diagnosis can detect:",
                options: ["All genetic disorders", "Some genetic disorders", "No genetic disorders", "Only chromosomal disorders"],
                correct: 1,
                explanation: "Prenatal diagnosis can detect many but not all genetic disorders."
            },
            {
                question: "Amniocentesis involves:",
                options: ["Blood sampling", "Urine sampling", "Amniotic fluid sampling", "Tissue sampling"],
                correct: 2,
                explanation: "Amniocentesis involves sampling amniotic fluid to test for genetic disorders."
            },
            {
                question: "Chorionic villus sampling (CVS):",
                options: ["Samples amniotic fluid", "Samples placental tissue", "Samples blood", "Samples urine"],
                correct: 1,
                explanation: "CVS samples chorionic villi from the placenta for genetic testing."
            },
            {
                question: "Karyotyping is used to:",
                options: ["Sequence DNA", "Analyze chromosome number and structure", "Study gene expression", "Detect mutations"],
                correct: 1,
                explanation: "Karyotyping analyzes chromosome number and structure to detect chromosomal abnormalities."
            },
            {
                question: "FISH stands for:",
                options: ["Fluorescence in situ hybridization", "Fast insertion sequence hybridization", "Functional in situ hybridization", "Fixed in situ hybridization"],
                correct: 0,
                explanation: "FISH is fluorescence in situ hybridization, used to detect specific DNA sequences."
            },
            {
                question: "PCR stands for:",
                options: ["Protein chain reaction", "Polymerase chain reaction", "Plasma chain reaction", "Phosphate chain reaction"],
                correct: 1,
                explanation: "PCR is polymerase chain reaction, used to amplify specific DNA sequences."
            },
            {
                question: "DNA fingerprinting is used for:",
                options: ["Gene therapy", "Individual identification", "Protein analysis", "Chromosome counting"],
                correct: 1,
                explanation: "DNA fingerprinting analyzes genetic markers for individual identification."
            },
            {
                question: "The Human Genome Project:",
                options: ["Mapped all human genes", "Sequenced human DNA", "Identified disease genes", "All of the above"],
                correct: 3,
                explanation: "The Human Genome Project sequenced human DNA, mapped genes, and identified many disease genes."
            },
            {
                question: "Pharmacogenetics studies:",
                options: ["Drug development", "How genes affect drug response", "Drug side effects", "Drug metabolism only"],
                correct: 1,
                explanation: "Pharmacogenetics studies how genetic variation affects individual responses to drugs."
            },
            {
                question: "Personalized medicine uses:",
                options: ["Generic treatments", "Genetic information for treatment", "Only surgery", "Only drugs"],
                correct: 1,
                explanation: "Personalized medicine uses genetic information to tailor treatments to individuals."
            },
            {
                question: "CRISPR-Cas9 is used for:",
                options: ["DNA sequencing", "Gene editing", "Protein synthesis", "Chromosome counting"],
                correct: 1,
                explanation: "CRISPR-Cas9 is a powerful tool for precise gene editing."
            },
            {
                question: "Stem cells can:",
                options: ["Only divide", "Differentiate into various cell types", "Only die", "Never change"],
                correct: 1,
                explanation: "Stem cells can differentiate into various specialized cell types."
            },
            {
                question: "The future of genetics includes:",
                options: ["Gene therapy", "Personalized medicine", "Genetic engineering", "All of the above"],
                correct: 3,
                explanation: "The future of genetics includes gene therapy, personalized medicine, and genetic engineering applications."
            }
        ],
        'Digestion': [
            // DIGESTIVE SYSTEM ANATOMY (Questions 1-25)
            {
                question: "The primary function of the digestive system is:",
                options: ["Gas exchange", "Nutrient breakdown and absorption", "Hormone production", "Blood circulation"],
                correct: 1,
                explanation: "The primary function of the digestive system is to break down food and absorb nutrients for body use."
            },
            {
                question: "The alimentary canal starts with:",
                options: ["Esophagus", "Mouth", "Stomach", "Small intestine"],
                correct: 1,
                explanation: "The alimentary canal (digestive tract) begins with the mouth where food intake occurs."
            },
            {
                question: "The digestive system includes:",
                options: ["Alimentary canal only", "Accessory organs only", "Both alimentary canal and accessory organs", "Neither"],
                correct: 2,
                explanation: "The digestive system includes the alimentary canal and accessory organs like liver, pancreas, and gallbladder."
            },
            {
                question: "Teeth are primarily used for:",
                options: ["Swallowing", "Mechanical digestion", "Chemical digestion", "Absorption"],
                correct: 1,
                explanation: "Teeth perform mechanical digestion by physically breaking down food into smaller pieces."
            },
            {
                question: "Humans have how many permanent teeth?",
                options: ["28", "30", "32", "34"],
                correct: 2,
                explanation: "Humans have 32 permanent teeth including incisors, canines, premolars, and molars."
            },
            {
                question: "Saliva is produced by:",
                options: ["Teeth", "Tongue", "Salivary glands", "Stomach"],
                correct: 2,
                explanation: "Saliva is produced by three pairs of salivary glands: parotid, submandibular, and sublingual."
            },
            {
                question: "The main enzyme in saliva is:",
                options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
                correct: 1,
                explanation: "Salivary amylase (ptyalin) begins carbohydrate digestion by breaking down starch."
            },
            {
                question: "The tongue helps with:",
                options: ["Taste only", "Swallowing only", "Taste and swallowing", "Digestion only"],
                correct: 2,
                explanation: "The tongue has taste buds for taste sensation and helps with food manipulation and swallowing."
            },
            {
                question: "The pharynx is:",
                options: ["Part of respiratory system only", "Part of digestive system only", "Shared by both systems", "Not part of either system"],
                correct: 2,
                explanation: "The pharynx (throat) is shared by both respiratory and digestive systems."
            },
            {
                question: "The esophagus is:",
                options: ["A storage organ", "A muscular tube", "A digestive gland", "An absorption site"],
                correct: 1,
                explanation: "The esophagus is a muscular tube that transports food from pharynx to stomach."
            },
            {
                question: "Peristalsis is:",
                options: ["Enzyme production", "Nutrient absorption", "Wave-like muscle contractions", "Acid secretion"],
                correct: 2,
                explanation: "Peristalsis consists of wave-like muscle contractions that move food through the digestive tract."
            },
            {
                question: "The stomach is located in the:",
                options: ["Right upper abdomen", "Left upper abdomen", "Lower abdomen", "Chest cavity"],
                correct: 1,
                explanation: "The stomach is located in the left upper abdomen, beneath the diaphragm."
            },
            {
                question: "The stomach has how many main regions?",
                options: ["2", "3", "4", "5"],
                correct: 2,
                explanation: "The stomach has four main regions: fundus, body, antrum, and pylorus."
            },
            {
                question: "Gastric juice contains:",
                options: ["Acid only", "Enzymes only", "Acid and enzymes", "Water only"],
                correct: 2,
                explanation: "Gastric juice contains hydrochloric acid, pepsinogen (becomes pepsin), and intrinsic factor."
            },
            {
                question: "The small intestine has how many parts?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                explanation: "The small intestine has three parts: duodenum, jejunum, and ileum."
            },
            {
                question: "Most digestion and absorption occurs in:",
                options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
                correct: 1,
                explanation: "The small intestine is the primary site for both digestion and nutrient absorption."
            },
            {
                question: "Villi are found in:",
                options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
                correct: 1,
                explanation: "Villi are finger-like projections in the small intestine that increase surface area for absorption."
            },
            {
                question: "The large intestine primarily:",
                options: ["Digests proteins", "Absorbs nutrients", "Absorbs water", "Produces enzymes"],
                correct: 2,
                explanation: "The large intestine primarily absorbs water and electrolytes from remaining food matter."
            },
            {
                question: "The liver is:",
                options: ["Not part of digestive system", "The largest internal organ", "Only produces bile", "Located in lower abdomen"],
                correct: 1,
                explanation: "The liver is the largest internal organ with multiple digestive and metabolic functions."
            },
            {
                question: "Bile is produced by:",
                options: ["Gallbladder", "Pancreas", "Liver", "Small intestine"],
                correct: 2,
                explanation: "Bile is produced by liver cells (hepatocytes) and stored in the gallbladder."
            },
            {
                question: "The pancreas produces:",
                options: ["Bile only", "Enzymes only", "Hormones only", "Both enzymes and hormones"],
                correct: 3,
                explanation: "The pancreas produces digestive enzymes and hormones like insulin and glucagon."
            },
            {
                question: "The gallbladder:",
                options: ["Produces bile", "Stores bile", "Destroys bile", "Has no function"],
                correct: 1,
                explanation: "The gallbladder stores and concentrates bile produced by the liver."
            },
            {
                question: "The appendix is attached to:",
                options: ["Small intestine", "Cecum", "Rectum", "Stomach"],
                correct: 1,
                explanation: "The appendix is a small pouch attached to the cecum, the first part of the large intestine."
            },
            {
                question: "The rectum is:",
                options: ["Part of small intestine", "The final part of large intestine", "An accessory organ", "Part of stomach"],
                correct: 1,
                explanation: "The rectum is the final portion of the large intestine where feces are stored before elimination."
            },
            {
                question: "The anus is controlled by:",
                options: ["Voluntary muscles only", "Involuntary muscles only", "Both voluntary and involuntary muscles", "No muscles"],
                correct: 2,
                explanation: "The anus has both internal (involuntary) and external (voluntary) sphincters controlling defecation."
            },

            // DIGESTIVE PROCESSES (Questions 26-50)
            {
                question: "Mechanical digestion includes:",
                options: ["Enzyme action", "Physical breakdown", "Chemical reactions", "Absorption"],
                correct: 1,
                explanation: "Mechanical digestion involves physical breakdown of food through chewing, churning, and mixing."
            },
            {
                question: "Chemical digestion involves:",
                options: ["Physical breakdown", "Enzyme action", "Muscle contractions", "Storage"],
                correct: 1,
                explanation: "Chemical digestion involves enzymes breaking down complex molecules into simpler, absorbable forms."
            },
            {
                question: "Deglutition is:",
                options: ["Chewing", "Swallowing", "Digesting", "Absorbing"],
                correct: 1,
                explanation: "Deglutition is the process of swallowing food from mouth to stomach."
            },
            {
                question: "The epiglottis prevents:",
                options: ["Food from entering stomach", "Food from entering trachea", "Acid production", "Enzyme release"],
                correct: 1,
                explanation: "The epiglottis covers the tracheal opening during swallowing to prevent food aspiration."
            },
            {
                question: "Gastric emptying is controlled by:",
                options: ["Food composition", "Stomach acidity", "Hormonal signals", "All of the above"],
                correct: 3,
                explanation: "Gastric emptying is controlled by food composition, acidity, hormones, and neural signals."
            },
            {
                question: "Pepsin works best in:",
                options: ["Alkaline environment", "Acidic environment", "Neutral environment", "Any environment"],
                correct: 1,
                explanation: "Pepsin, the main gastric enzyme, works optimally in the acidic environment of the stomach."
            },
            {
                question: "Hydrochloric acid in stomach:",
                options: ["Neutralizes food", "Creates acidic environment", "Produces enzymes", "Absorbs nutrients"],
                correct: 1,
                explanation: "HCl creates an acidic environment (pH 1-2) that activates pepsin and kills bacteria."
            },
            {
                question: "Intrinsic factor is needed for:",
                options: ["Protein absorption", "Fat absorption", "Vitamin B12 absorption", "Carbohydrate absorption"],
                correct: 2,
                explanation: "Intrinsic factor, produced by stomach, is essential for vitamin B12 absorption in the ileum."
            },
            {
                question: "Chyme is:",
                options: ["Undigested food", "Partially digested food", "Fully digested food", "Waste material"],
                correct: 1,
                explanation: "Chyme is the partially digested, acidic mixture of food and gastric juices leaving the stomach."
            },
            {
                question: "Pancreatic juice is:",
                options: ["Acidic", "Alkaline", "Neutral", "Variable"],
                correct: 1,
                explanation: "Pancreatic juice is alkaline (pH 8-9) to neutralize acidic chyme from the stomach."
            },
            {
                question: "Pancreatic enzymes include:",
                options: ["Amylase only", "Lipase only", "Proteases only", "All of the above"],
                correct: 3,
                explanation: "Pancreatic juice contains amylase (carbohydrates), lipase (fats), and proteases (proteins)."
            },
            {
                question: "Bile helps digest:",
                options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
                correct: 2,
                explanation: "Bile emulsifies fats, breaking large fat droplets into smaller ones for easier enzyme action."
            },
            {
                question: "Emulsification means:",
                options: ["Chemical breakdown", "Fat absorption", "Breaking large fat droplets into smaller ones", "Protein digestion"],
                correct: 2,
                explanation: "Emulsification is the physical process of breaking large fat droplets into smaller droplets."
            },
            {
                question: "Brush border enzymes are located:",
                options: ["In stomach", "On intestinal villi", "In pancreas", "In liver"],
                correct: 1,
                explanation: "Brush border enzymes are located on the microvilli of small intestinal epithelial cells."
            },
            {
                question: "Lactase deficiency causes:",
                options: ["Protein intolerance", "Fat intolerance", "Lactose intolerance", "Starch intolerance"],
                correct: 2,
                explanation: "Lactase deficiency prevents lactose digestion, causing lactose intolerance symptoms."
            },
            {
                question: "Absorption is the process of:",
                options: ["Breaking down food", "Moving nutrients into blood", "Storing nutrients", "Eliminating waste"],
                correct: 1,
                explanation: "Absorption is the process of moving digested nutrients from intestinal lumen into blood or lymph."
            },
            {
                question: "Most water absorption occurs in:",
                options: ["Stomach", "Small intestine", "Large intestine", "Pancreas"],
                correct: 2,
                explanation: "While small intestine absorbs more total water, the large intestine's primary function is water absorption."
            },
            {
                question: "Fat-soluble vitamins are absorbed with:",
                options: ["Water", "Proteins", "Fats", "Carbohydrates"],
                correct: 2,
                explanation: "Fat-soluble vitamins (A, D, E, K) are absorbed along with dietary fats in the small intestine."
            },
            {
                question: "The hepatic portal system carries blood from:",
                options: ["Liver to heart", "Intestines to liver", "Heart to liver", "Liver to kidneys"],
                correct: 1,
                explanation: "The hepatic portal system carries nutrient-rich blood from intestines to liver for processing."
            },
            {
                question: "Peristalsis occurs in:",
                options: ["Stomach only", "Small intestine only", "Throughout digestive tract", "Large intestine only"],
                correct: 2,
                explanation: "Peristalsis occurs throughout the digestive tract to move food and waste materials."
            },
            {
                question: "Segmentation refers to:",
                options: ["Dividing food", "Mixing contractions", "Forward movement", "Enzyme production"],
                correct: 1,
                explanation: "Segmentation consists of mixing contractions that help mix food with digestive juices."
            },
            {
                question: "Mass movements occur in:",
                options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
                correct: 2,
                explanation: "Mass movements are strong contractions in the large intestine that move contents toward rectum."
            },
            {
                question: "The gastrocolic reflex:",
                options: ["Stimulates gastric secretion", "Stimulates colonic movement", "Inhibits digestion", "Causes vomiting"],
                correct: 1,
                explanation: "The gastrocolic reflex stimulates mass movements in colon when food enters stomach."
            },
            {
                question: "Defecation is controlled by:",
                options: ["Automatic reflexes only", "Voluntary control only", "Both reflexes and voluntary control", "Hormones only"],
                correct: 2,
                explanation: "Defecation involves both automatic reflexes and voluntary control of external anal sphincter."
            },
            {
                question: "Normal stool is approximately:",
                options: ["50% water", "75% water", "90% water", "95% water"],
                correct: 1,
                explanation: "Normal stool is approximately 75% water and 25% solid material including fiber and bacteria."
            },

            // DIGESTIVE ENZYMES AND SECRETIONS (Questions 51-75)
            {
                question: "Amylase breaks down:",
                options: ["Proteins", "Fats", "Carbohydrates", "Nucleic acids"],
                correct: 2,
                explanation: "Amylase breaks down starch and glycogen into smaller carbohydrate molecules."
            },
            {
                question: "Pepsin breaks down:",
                options: ["Carbohydrates", "Proteins", "Fats", "Nucleic acids"],
                correct: 1,
                explanation: "Pepsin is a protease that breaks down proteins into smaller peptides in the stomach."
            },
            {
                question: "Lipase breaks down:",
                options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
                correct: 2,
                explanation: "Lipase breaks down triglycerides (fats) into fatty acids and glycerol."
            },
            {
                question: "Trypsin is produced by:",
                options: ["Stomach", "Pancreas", "Liver", "Small intestine"],
                correct: 1,
                explanation: "Trypsin is a pancreatic protease that continues protein digestion in the small intestine."
            },
            {
                question: "Chymotrypsin is:",
                options: ["A carbohydrase", "A protease", "A lipase", "A nuclease"],
                correct: 1,
                explanation: "Chymotrypsin is another pancreatic protease that works alongside trypsin."
            },
            {
                question: "Elastase digests:",
                options: ["Elastic fibers only", "All proteins", "Carbohydrates", "Fats"],
                correct: 1,
                explanation: "Elastase is a pancreatic protease that can digest elastic fibers and other proteins."
            },
            {
                question: "Carboxypeptidase:",
                options: ["Adds amino acids", "Removes amino acids from protein ends", "Digests carbohydrates", "Digests fats"],
                correct: 1,
                explanation: "Carboxypeptidase removes amino acids from the carboxyl end of peptides."
            },
            {
                question: "Dipeptidases are:",
                options: ["Gastric enzymes", "Pancreatic enzymes", "Brush border enzymes", "Salivary enzymes"],
                correct: 2,
                explanation: "Dipeptidases are brush border enzymes that break dipeptides into individual amino acids."
            },
            {
                question: "Maltase converts:",
                options: ["Starch to glucose", "Maltose to glucose", "Sucrose to glucose", "Lactose to glucose"],
                correct: 1,
                explanation: "Maltase is a brush border enzyme that converts maltose into two glucose molecules."
            },
            {
                question: "Sucrase converts:",
                options: ["Starch to sugars", "Sucrose to glucose and fructose", "Lactose to sugars", "Maltose to glucose"],
                correct: 1,
                explanation: "Sucrase breaks sucrose (table sugar) into glucose and fructose."
            },
            {
                question: "Lactase converts:",
                options: ["Lactose to glucose and galactose", "Lactose to fructose", "Milk proteins", "Milk fats"],
                correct: 0,
                explanation: "Lactase breaks lactose (milk sugar) into glucose and galactose."
            },
            {
                question: "Enterokinase:",
                options: ["Digests fats", "Activates trypsinogen", "Digests proteins", "Absorbs nutrients"],
                correct: 1,
                explanation: "Enterokinase activates trypsinogen to trypsin, initiating pancreatic enzyme activation."
            },
            {
                question: "Gastrin is produced by:",
                options: ["Pancreas", "Liver", "Stomach", "Small intestine"],
                correct: 2,
                explanation: "Gastrin is produced by G cells in the stomach and stimulates gastric acid secretion."
            },
            {
                question: "Secretin is released in response to:",
                options: ["Proteins", "Fats", "Acidic chyme", "Carbohydrates"],
                correct: 2,
                explanation: "Secretin is released by duodenum in response to acidic chyme from the stomach."
            },
            {
                question: "Cholecystokinin (CCK) stimulates:",
                options: ["Gastric acid secretion", "Pancreatic enzyme release and gallbladder contraction", "Salivary secretion", "Intestinal motility"],
                correct: 1,
                explanation: "CCK stimulates pancreatic enzyme secretion and gallbladder contraction in response to fats and proteins."
            },
            {
                question: "Gastric inhibitory peptide (GIP):",
                options: ["Stimulates gastric secretion", "Inhibits gastric secretion", "Stimulates intestinal motility", "Inhibits pancreatic secretion"],
                correct: 1,
                explanation: "GIP inhibits gastric acid secretion and motility when nutrients are detected in small intestine."
            },
            {
                question: "Pepsinogen is:",
                options: ["Active enzyme", "Inactive enzyme precursor", "Hormone", "Vitamin"],
                correct: 1,
                explanation: "Pepsinogen is the inactive precursor of pepsin, activated by stomach acid."
            },
            {
                question: "Zymogen granules contain:",
                options: ["Active enzymes", "Inactive enzyme precursors", "Hormones", "Nutrients"],
                correct: 1,
                explanation: "Zymogen granules in pancreatic cells contain inactive enzyme precursors for safety."
            },
            {
                question: "Hydrochloric acid is secreted by:",
                options: ["Chief cells", "Parietal cells", "Mucous cells", "G cells"],
                correct: 1,
                explanation: "Parietal cells in gastric glands secrete hydrochloric acid."
            },
            {
                question: "Pepsinogen is secreted by:",
                options: ["Parietal cells", "Chief cells", "Mucous cells", "G cells"],
                correct: 1,
                explanation: "Chief cells in gastric glands secrete pepsinogen, the inactive form of pepsin."
            },
            {
                question: "Mucus in stomach:",
                options: ["Digests food", "Protects stomach lining", "Activates enzymes", "Absorbs nutrients"],
                correct: 1,
                explanation: "Gastric mucus protects the stomach lining from acid and enzyme damage."
            },
            {
                question: "The pH of gastric juice is approximately:",
                options: ["7.0", "5.0", "2.0", "9.0"],
                correct: 2,
                explanation: "Gastric juice has a very acidic pH of about 1.5-2.0 due to hydrochloric acid."
            },
            {
                question: "Gastric acid kills:",
                options: ["Nutrients", "Vitamins", "Bacteria", "Enzymes"],
                correct: 2,
                explanation: "The acidic environment of the stomach kills most bacteria and other pathogens in food."
            },
            {
                question: "Pancreatic bicarbonate:",
                options: ["Acidifies intestinal contents", "Neutralizes stomach acid", "Activates enzymes", "Digests proteins"],
                correct: 1,
                explanation: "Pancreatic bicarbonate neutralizes acidic chyme, creating optimal pH for pancreatic enzymes."
            },
            {
                question: "Bile salts help with:",
                options: ["Protein digestion", "Carbohydrate digestion", "Fat digestion and absorption", "Vitamin C absorption"],
                correct: 2,
                explanation: "Bile salts emulsify fats and form micelles to facilitate fat digestion and absorption."
            },

            // ABSORPTION AND METABOLISM (Questions 76-100)
            {
                question: "Glucose is absorbed by:",
                options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"],
                correct: 2,
                explanation: "Glucose is absorbed by active transport coupled with sodium in the small intestine."
            },
            {
                question: "Amino acids are absorbed by:",
                options: ["Simple diffusion", "Active transport", "Osmosis", "Filtration"],
                correct: 1,
                explanation: "Amino acids are absorbed by active transport systems in the small intestine."
            },
            {
                question: "Fatty acids are absorbed:",
                options: ["Directly into blood", "Into lymphatic system", "Not absorbed", "Stored in intestine"],
                correct: 1,
                explanation: "Long-chain fatty acids are absorbed into lymphatic system as chylomicrons, then enter blood."
            },
            {
                question: "Water absorption is primarily:",
                options: ["Active transport", "Passive following osmotic gradients", "Requires energy", "Occurs in stomach"],
                correct: 1,
                explanation: "Water absorption is largely passive, following osmotic gradients created by solute absorption."
            },
            {
                question: "Iron absorption is enhanced by:",
                options: ["Calcium", "Vitamin C", "Fiber", "Protein"],
                correct: 1,
                explanation: "Vitamin C enhances iron absorption by reducing iron to its more absorbable form."
            },
            {
                question: "Calcium absorption requires:",
                options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
                correct: 1,
                explanation: "Vitamin D is essential for calcium absorption in the small intestine."
            },
            {
                question: "Vitamin B12 absorption occurs in:",
                options: ["Stomach", "Duodenum", "Jejunum", "Ileum"],
                correct: 3,
                explanation: "Vitamin B12 is absorbed in the terminal ileum with the help of intrinsic factor."
            },
            {
                question: "Bile acids are reabsorbed in:",
                options: ["Duodenum", "Jejunum", "Ileum", "Colon"],
                correct: 2,
                explanation: "Bile acids are reabsorbed in the terminal ileum and recycled back to the liver."
            },
            {
                question: "The liver's role in digestion includes:",
                options: ["Bile production only", "Nutrient metabolism only", "Both bile production and metabolism", "Enzyme production only"],
                correct: 2,
                explanation: "The liver produces bile for fat digestion and metabolizes absorbed nutrients."
            },
            {
                question: "Hepatocytes are:",
                options: ["Liver cells", "Pancreatic cells", "Intestinal cells", "Stomach cells"],
                correct: 0,
                explanation: "Hepatocytes are the main functional cells of the liver."
            },
            {
                question: "Glycogen is stored primarily in:",
                options: ["Muscles only", "Liver only", "Muscles and liver", "Intestines"],
                correct: 2,
                explanation: "Glycogen is stored primarily in muscles and liver as an energy reserve."
            },
            {
                question: "The liver converts ammonia to:",
                options: ["Glucose", "Protein", "Urea", "Fat"],
                correct: 2,
                explanation: "The liver converts toxic ammonia from protein metabolism to less toxic urea."
            },
            {
                question: "Fasting blood glucose is maintained by:",
                options: ["Insulin only", "Glucagon only", "Both insulin and glucagon", "Growth hormone only"],
                correct: 2,
                explanation: "Blood glucose is maintained by the balance between insulin (lowers) and glucagon (raises) glucose."
            },
            {
                question: "Insulin is produced by:",
                options: ["Alpha cells", "Beta cells", "Delta cells", "Acinar cells"],
                correct: 1,
                explanation: "Insulin is produced by beta cells in the pancreatic islets of Langerhans."
            },
            {
                question: "Glucagon is produced by:",
                options: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"],
                correct: 1,
                explanation: "Glucagon is produced by alpha cells in the pancreatic islets of Langerhans."
            },
            {
                question: "Fiber is important for:",
                options: ["Energy only", "Protein synthesis", "Intestinal health", "Vitamin absorption only"],
                correct: 2,
                explanation: "Dietary fiber promotes intestinal health, regular bowel movements, and beneficial bacteria growth."
            },
            {
                question: "The normal gut microbiome:",
                options: ["Is harmful", "Helps with digestion", "Should be eliminated", "Has no function"],
                correct: 1,
                explanation: "Normal gut bacteria help with digestion, vitamin synthesis, and immune function."
            },
            {
                question: "Probiotics are:",
                options: ["Harmful bacteria", "Beneficial bacteria", "Antibiotics", "Enzymes"],
                correct: 1,
                explanation: "Probiotics are beneficial bacteria that can improve gut health when consumed."
            },
            {
                question: "Prebiotics are:",
                options: ["Beneficial bacteria", "Food for beneficial bacteria", "Harmful substances", "Antibiotics"],
                correct: 1,
                explanation: "Prebiotics are non-digestible food components that promote growth of beneficial bacteria."
            },
            {
                question: "The enteric nervous system:",
                options: ["Controls only motility", "Controls only secretion", "Controls motility and secretion", "Has no function"],
                correct: 2,
                explanation: "The enteric nervous system controls both digestive motility and secretions."
            },
            {
                question: "Gastroesophageal reflux occurs when:",
                options: ["Food moves too fast", "Stomach acid enters esophagus", "Digestion is too slow", "Absorption is impaired"],
                correct: 1,
                explanation: "GERD occurs when stomach acid refluxes into the esophagus, causing heartburn."
            },
            {
                question: "Peptic ulcers are often caused by:",
                options: ["Too much food", "Helicobacter pylori bacteria", "Lack of enzymes", "Vitamin deficiency"],
                correct: 1,
                explanation: "Most peptic ulcers are caused by H. pylori bacteria or NSAIDs, not just stress or spicy food."
            },
            {
                question: "Celiac disease involves:",
                options: ["Lactose intolerance", "Gluten intolerance", "Fat malabsorption", "Protein deficiency"],
                correct: 1,
                explanation: "Celiac disease is an autoimmune condition triggered by gluten consumption."
            },
            {
                question: "Inflammatory bowel disease includes:",
                options: ["Crohn's disease only", "Ulcerative colitis only", "Both Crohn's and ulcerative colitis", "Peptic ulcers"],
                correct: 2,
                explanation: "IBD includes both Crohn's disease and ulcerative colitis, chronic inflammatory conditions."
            },
            {
                question: "The future of digestive health may include:",
                options: ["Personalized nutrition", "Microbiome therapy", "Precision medicine", "All of the above"],
                correct: 3,
                explanation: "Future digestive health includes personalized nutrition, microbiome therapy, and precision medicine approaches."
            }
        ],
        'Homeostasis': [
            // CONCEPTS OF HOMEOSTASIS (Questions 1-25)
            {
                question: "Homeostasis is:",
                options: ["Maintaining internal balance", "Growth and development", "Energy production", "Waste elimination"],
                correct: 0,
                explanation: "Homeostasis is the maintenance of stable internal conditions despite external changes."
            },
            {
                question: "The components of a feedback system include:",
                options: ["Stimulus only", "Receptor only", "Control center, receptor, and effector", "Effector only"],
                correct: 2,
                explanation: "A complete feedback system includes a receptor, control center, and effector."
            },
            {
                question: "Negative feedback:",
                options: ["Amplifies the original stimulus", "Counteracts the original stimulus", "Has no effect", "Only works in the nervous system"],
                correct: 1,
                explanation: "Negative feedback counteracts or reverses the original stimulus to maintain homeostasis."
            },
            {
                question: "Positive feedback:",
                options: ["Maintains stability", "Amplifies the original stimulus", "Counteracts changes", "Is always harmful"],
                correct: 1,
                explanation: "Positive feedback amplifies the original stimulus, often leading to rapid change."
            },
            {
                question: "Most homeostatic mechanisms involve:",
                options: ["Positive feedback", "Negative feedback", "No feedback", "Random responses"],
                correct: 1,
                explanation: "Most homeostatic mechanisms use negative feedback to maintain stability."
            },
            {
                question: "A stimulus in homeostasis is:",
                options: ["The response to change", "A change in the environment", "The control center", "The effector organ"],
                correct: 1,
                explanation: "A stimulus is any change in the internal or external environment that disrupts homeostasis."
            },
            {
                question: "Receptors in homeostasis:",
                options: ["Detect stimuli", "Produce responses", "Store information", "Generate energy"],
                correct: 0,
                explanation: "Receptors detect stimuli and send information to the control center."
            },
            {
                question: "The control center in homeostasis:",
                options: ["Detects stimuli", "Processes information and determines response", "Carries out the response", "Stores energy"],
                correct: 1,
                explanation: "The control center processes information from receptors and determines the appropriate response."
            },
            {
                question: "Effectors in homeostasis:",
                options: ["Detect stimuli", "Process information", "Carry out responses", "Store nutrients"],
                correct: 2,
                explanation: "Effectors (muscles, glands) carry out the responses determined by the control center."
            },
            {
                question: "The set point in homeostasis is:",
                options: ["The maximum value", "The minimum value", "The optimal or normal value", "The average value"],
                correct: 2,
                explanation: "The set point is the optimal or normal value that the body tries to maintain."
            },
            {
                question: "Dynamic equilibrium means:",
                options: ["Complete stillness", "Constant small adjustments", "Maximum activity", "No activity"],
                correct: 1,
                explanation: "Dynamic equilibrium involves constant small adjustments to maintain the set point."
            },
            {
                question: "Homeostatic imbalance can lead to:",
                options: ["Disease", "Death", "Organ dysfunction", "All of the above"],
                correct: 3,
                explanation: "Homeostatic imbalance can result in disease, organ dysfunction, and potentially death."
            },
            {
                question: "The human body maintains homeostasis of:",
                options: ["Temperature only", "Blood sugar only", "Multiple variables", "Water only"],
                correct: 2,
                explanation: "The body maintains homeostasis of temperature, blood chemistry, pressure, and many other variables."
            },
            {
                question: "Internal environment refers to:",
                options: ["Outside the body", "Extracellular fluid", "The atmosphere", "Food intake"],
                correct: 1,
                explanation: "Internal environment refers to the extracellular fluid surrounding body cells."
            },
            {
                question: "Cell survival depends on:",
                options: ["Stable internal environment", "External temperature", "Amount of food", "Exercise level"],
                correct: 0,
                explanation: "Cells require a stable internal environment with proper temperature, pH, and nutrient levels."
            },
            {
                question: "Homeostatic regulation involves:",
                options: ["Nervous system only", "Endocrine system only", "Both nervous and endocrine systems", "Digestive system only"],
                correct: 2,
                explanation: "Homeostatic regulation involves coordination between nervous and endocrine systems."
            },
            {
                question: "Examples of homeostatic variables include:",
                options: ["Body temperature", "Blood pH", "Blood glucose", "All of the above"],
                correct: 3,
                explanation: "Temperature, pH, glucose, and many other variables are regulated homeostatically."
            },
            {
                question: "Thermoregulation is:",
                options: ["Temperature control", "Pressure control", "Sugar control", "Water control"],
                correct: 0,
                explanation: "Thermoregulation is the process of controlling body temperature."
            },
            {
                question: "Normal human body temperature is approximately:",
                options: ["35°C", "37°C", "39°C", "40°C"],
                correct: 1,
                explanation: "Normal human body temperature is approximately 37°C (98.6°F)."
            },
            {
                question: "The hypothalamus acts as:",
                options: ["A receptor only", "An effector only", "The body's thermostat", "A storage organ"],
                correct: 2,
                explanation: "The hypothalamus acts as the body's thermostat, controlling temperature regulation."
            },
            {
                question: "When body temperature rises, the body:",
                options: ["Shivers", "Sweats", "Constricts blood vessels", "Increases metabolism"],
                correct: 1,
                explanation: "When overheated, the body sweats to increase heat loss through evaporation."
            },
            {
                question: "When body temperature falls, the body:",
                options: ["Sweats", "Shivers", "Dilates blood vessels", "Decreases metabolism"],
                correct: 1,
                explanation: "When cold, the body shivers to generate heat through muscle contractions."
            },
            {
                question: "Vasodilation helps:",
                options: ["Conserve heat", "Lose heat", "Generate heat", "Store heat"],
                correct: 1,
                explanation: "Vasodilation increases blood flow to the skin to lose heat to the environment."
            },
            {
                question: "Vasoconstriction helps:",
                options: ["Lose heat", "Conserve heat", "Generate heat", "Eliminate heat"],
                correct: 1,
                explanation: "Vasoconstriction reduces blood flow to the skin to conserve body heat."
            },
            {
                question: "Behavioral thermoregulation includes:",
                options: ["Shivering", "Sweating", "Adding or removing clothing", "Changing heart rate"],
                correct: 2,
                explanation: "Behavioral thermoregulation includes conscious actions like changing clothing or seeking shelter."
            },

            // WATER AND ELECTROLYTE BALANCE (Questions 26-50)
            {
                question: "The kidneys help maintain:",
                options: ["Water balance only", "Electrolyte balance only", "Both water and electrolyte balance", "Neither"],
                correct: 2,
                explanation: "The kidneys are crucial for maintaining both water and electrolyte balance."
            },
            {
                question: "ADH (Antidiuretic hormone) is produced by:",
                options: ["Kidneys", "Liver", "Hypothalamus", "Adrenal glands"],
                correct: 2,
                explanation: "ADH is produced by the hypothalamus and released by the posterior pituitary."
            },
            {
                question: "ADH primarily controls:",
                options: ["Blood sugar", "Water retention", "Heart rate", "Blood pressure"],
                correct: 1,
                explanation: "ADH regulates water retention by affecting kidney function."
            },
            {
                question: "When blood osmolality increases:",
                options: ["ADH secretion decreases", "ADH secretion increases", "ADH has no effect", "Water intake decreases"],
                correct: 1,
                explanation: "Higher blood osmolality triggers increased ADH secretion to conserve water."
            },
            {
                question: "Aldosterone is produced by:",
                options: ["Hypothalamus", "Kidneys", "Adrenal cortex", "Liver"],
                correct: 2,
                explanation: "Aldosterone is produced by the adrenal cortex and regulates sodium balance."
            },
            {
                question: "Aldosterone primarily regulates:",
                options: ["Water only", "Sodium and potassium", "Glucose", "Proteins"],
                correct: 1,
                explanation: "Aldosterone regulates sodium retention and potassium excretion by the kidneys."
            },
            {
                question: "The renin-angiotensin system responds to:",
                options: ["High blood pressure", "Low blood pressure", "High blood sugar", "Low blood sugar"],
                correct: 1,
                explanation: "The renin-angiotensin system is activated by low blood pressure or blood volume."
            },
            {
                question: "Renin is produced by:",
                options: ["Liver", "Kidneys", "Heart", "Lungs"],
                correct: 1,
                explanation: "Renin is produced by specialized cells in the kidneys (juxtaglomerular cells)."
            },
            {
                question: "Angiotensin II causes:",
                options: ["Vasodilation", "Vasoconstriction", "Decreased blood pressure", "Water loss"],
                correct: 1,
                explanation: "Angiotensin II causes vasoconstriction, increasing blood pressure."
            },
            {
                question: "Dehydration triggers:",
                options: ["Decreased ADH", "Increased ADH", "No hormonal response", "Decreased thirst"],
                correct: 1,
                explanation: "Dehydration triggers increased ADH secretion and thirst sensation."
            },
            {
                question: "Osmoreceptors detect:",
                options: ["Blood pressure", "Blood osmolality", "Heart rate", "Breathing rate"],
                correct: 1,
                explanation: "Osmoreceptors in the hypothalamus detect changes in blood osmolality."
            },
            {
                question: "Normal blood osmolality is approximately:",
                options: ["280-295 mOsm/kg", "300-320 mOsm/kg", "250-270 mOsm/kg", "350-400 mOsm/kg"],
                correct: 0,
                explanation: "Normal blood osmolality is approximately 280-295 mOsm/kg of water."
            },
            {
                question: "Diabetes insipidus is caused by:",
                options: ["Excess insulin", "ADH deficiency", "Aldosterone excess", "Renin deficiency"],
                correct: 1,
                explanation: "Diabetes insipidus results from ADH deficiency, causing excessive urination."
            },
            {
                question: "SIADH (Syndrome of inappropriate ADH) causes:",
                options: ["Water loss", "Water retention", "Sodium loss only", "Potassium retention"],
                correct: 1,
                explanation: "SIADH causes excessive water retention due to inappropriate ADH secretion."
            },
            {
                question: "Thirst is regulated by:",
                options: ["Hypothalamus", "Cerebellum", "Medulla", "Spinal cord"],
                correct: 0,
                explanation: "The hypothalamus contains the thirst center that regulates water intake."
            },
            {
                question: "Diuretics affect:",
                options: ["Heart rate only", "Water and sodium excretion", "Blood sugar only", "Oxygen levels"],
                correct: 1,
                explanation: "Diuretics increase water and sodium excretion by the kidneys."
            },
            {
                question: "Hyponatremia is:",
                options: ["High sodium levels", "Low sodium levels", "High potassium levels", "Low potassium levels"],
                correct: 1,
                explanation: "Hyponatremia is abnormally low sodium concentration in the blood."
            },
            {
                question: "Hyperkalemia is:",
                options: ["Low potassium levels", "High potassium levels", "Low sodium levels", "High sodium levels"],
                correct: 1,
                explanation: "Hyperkalemia is abnormally high potassium concentration in the blood."
            },
            {
                question: "The kidneys regulate blood volume by:",
                options: ["Changing heart rate", "Controlling water excretion", "Producing red blood cells", "Storing glucose"],
                correct: 1,
                explanation: "Kidneys regulate blood volume by controlling how much water is retained or excreted."
            },
            {
                question: "Atrial natriuretic peptide (ANP) is released when:",
                options: ["Blood volume is low", "Blood volume is high", "Blood sugar is high", "Blood pressure is low"],
                correct: 1,
                explanation: "ANP is released when blood volume is high to promote sodium and water excretion."
            },
            {
                question: "ANP causes:",
                options: ["Sodium retention", "Sodium excretion", "Water retention only", "Potassium retention"],
                correct: 1,
                explanation: "ANP promotes sodium and water excretion to reduce blood volume."
            },
            {
                question: "Edema can result from:",
                options: ["Excess fluid retention", "Dehydration", "Low blood pressure", "High blood sugar"],
                correct: 0,
                explanation: "Edema is swelling caused by excess fluid retention in tissues."
            },
            {
                question: "The loop of Henle in kidneys:",
                options: ["Filters blood only", "Concentrates urine", "Produces hormones", "Stores waste"],
                correct: 1,
                explanation: "The loop of Henle creates a concentration gradient that allows urine concentration."
            },
            {
                question: "Aquaporins are:",
                options: ["Enzymes", "Water channels", "Hormones", "Waste products"],
                correct: 1,
                explanation: "Aquaporins are water channel proteins that regulate water transport across cell membranes."
            },
            {
                question: "Electrolyte imbalances can affect:",
                options: ["Nerve function", "Muscle function", "Heart rhythm", "All of the above"],
                correct: 3,
                explanation: "Electrolyte imbalances can significantly affect nerve, muscle, and cardiac function."
            },

            // BLOOD GLUCOSE REGULATION (Questions 51-75)
            {
                question: "Normal fasting blood glucose is:",
                options: ["70-100 mg/dL", "120-140 mg/dL", "150-200 mg/dL", "200-250 mg/dL"],
                correct: 0,
                explanation: "Normal fasting blood glucose levels are 70-100 mg/dL (3.9-5.6 mmol/L)."
            },
            {
                question: "Insulin is produced by:",
                options: ["Alpha cells", "Beta cells", "Delta cells", "Liver cells"],
                correct: 1,
                explanation: "Insulin is produced by beta cells in the pancreatic islets of Langerhans."
            },
            {
                question: "Glucagon is produced by:",
                options: ["Beta cells", "Alpha cells", "Delta cells", "Liver cells"],
                correct: 1,
                explanation: "Glucagon is produced by alpha cells in the pancreatic islets."
            },
            {
                question: "Insulin's primary function is to:",
                options: ["Raise blood glucose", "Lower blood glucose", "Increase heart rate", "Regulate breathing"],
                correct: 1,
                explanation: "Insulin lowers blood glucose by promoting glucose uptake and storage."
            },
            {
                question: "Glucagon's primary function is to:",
                options: ["Lower blood glucose", "Raise blood glucose", "Decrease heart rate", "Promote sleep"],
                correct: 1,
                explanation: "Glucagon raises blood glucose by promoting glucose release from storage."
            },
            {
                question: "When blood glucose rises, the pancreas releases:",
                options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"],
                correct: 1,
                explanation: "Rising blood glucose triggers insulin release to lower glucose levels."
            },
            {
                question: "When blood glucose falls, the pancreas releases:",
                options: ["Insulin", "Glucagon", "Cortisol", "Thyroxine"],
                correct: 1,
                explanation: "Falling blood glucose triggers glucagon release to raise glucose levels."
            },
            {
                question: "Glycogenesis is:",
                options: ["Glucose breakdown", "Glucose production", "Glucose storage", "Glucose transport"],
                correct: 2,
                explanation: "Glycogenesis is the process of converting glucose to glycogen for storage."
            },
            {
                question: "Glycogenolysis is:",
                options: ["Glucose storage", "Glycogen breakdown", "Protein synthesis", "Fat storage"],
                correct: 1,
                explanation: "Glycogenolysis is the breakdown of glycogen to release glucose."
            },
            {
                question: "Gluconeogenesis is:",
                options: ["Glucose storage", "Glucose breakdown", "Glucose production from non-carbohydrates", "Glucose transport"],
                correct: 2,
                explanation: "Gluconeogenesis is the production of glucose from non-carbohydrate sources."
            },
            {
                question: "The liver stores glucose as:",
                options: ["Starch", "Glycogen", "Cellulose", "Sucrose"],
                correct: 1,
                explanation: "The liver stores glucose as glycogen, which can be quickly mobilized when needed."
            },
            {
                question: "Muscle cells store glucose as:",
                options: ["Starch", "Glycogen", "Fat", "Protein"],
                correct: 1,
                explanation: "Muscle cells store glucose as glycogen for local energy needs."
            },
            {
                question: "Type 1 diabetes results from:",
                options: ["Insulin resistance", "Beta cell destruction", "Liver dysfunction", "Kidney disease"],
                correct: 1,
                explanation: "Type 1 diabetes results from autoimmune destruction of insulin-producing beta cells."
            },
            {
                question: "Type 2 diabetes primarily involves:",
                options: ["Beta cell destruction", "Insulin resistance", "Glucagon deficiency", "Liver failure"],
                correct: 1,
                explanation: "Type 2 diabetes primarily involves insulin resistance and relative insulin deficiency."
            },
            {
                question: "Hyperglycemia is:",
                options: ["Low blood glucose", "High blood glucose", "Normal blood glucose", "Variable blood glucose"],
                correct: 1,
                explanation: "Hyperglycemia is abnormally high blood glucose levels."
            },
            {
                question: "Hypoglycemia is:",
                options: ["High blood glucose", "Low blood glucose", "Normal blood glucose", "Variable blood glucose"],
                correct: 1,
                explanation: "Hypoglycemia is abnormally low blood glucose levels."
            },
            {
                question: "Symptoms of hypoglycemia include:",
                options: ["Sweating and shakiness", "Excessive urination", "Blurred vision", "Weight loss"],
                correct: 0,
                explanation: "Hypoglycemia symptoms include sweating, shakiness, confusion, and hunger."
            },
            {
                question: "HbA1c measures:",
                options: ["Current glucose levels", "Average glucose over 2-3 months", "Insulin levels", "Glucagon levels"],
                correct: 1,
                explanation: "HbA1c measures average blood glucose levels over the previous 2-3 months."
            },
            {
                question: "The glucose tolerance test:",
                options: ["Measures fasting glucose only", "Tests glucose response to a sugar load", "Measures insulin levels", "Tests kidney function"],
                correct: 1,
                explanation: "The glucose tolerance test measures how the body processes a standardized glucose load."
            },
            {
                question: "Cortisol affects blood glucose by:",
                options: ["Lowering it", "Raising it", "Having no effect", "Making it variable"],
                correct: 1,
                explanation: "Cortisol raises blood glucose through gluconeogenesis and insulin resistance."
            },
            {
                question: "Growth hormone affects blood glucose by:",
                options: ["Lowering it", "Raising it", "Having no effect", "Making it unstable"],
                correct: 1,
                explanation: "Growth hormone tends to raise blood glucose and can cause insulin resistance."
            },
            {
                question: "Epinephrine (adrenaline) affects blood glucose by:",
                options: ["Lowering it", "Raising it", "Having no effect", "Making it fluctuate"],
                correct: 1,
                explanation: "Epinephrine raises blood glucose rapidly through glycogenolysis and gluconeogenesis."
            },
            {
                question: "The dawn phenomenon refers to:",
                options: ["Evening glucose rise", "Morning glucose rise", "Midday glucose drop", "Nighttime glucose fall"],
                correct: 1,
                explanation: "The dawn phenomenon is the early morning rise in blood glucose due to hormonal changes."
            },
            {
                question: "Diabetic ketoacidosis occurs when:",
                options: ["Blood glucose is too low", "Insulin is severely deficient", "Too much insulin is present", "Kidneys fail"],
                correct: 1,
                explanation: "Diabetic ketoacidosis occurs when severe insulin deficiency leads to ketone production."
            },
            {
                question: "Continuous glucose monitoring:",
                options: ["Requires frequent finger sticks", "Provides real-time glucose data", "Only works at night", "Measures insulin levels"],
                correct: 1,
                explanation: "Continuous glucose monitoring provides real-time glucose readings throughout the day."
            },

            // pH AND ACID-BASE BALANCE (Questions 76-100)
            {
                question: "Normal blood pH is approximately:",
                options: ["7.0", "7.35-7.45", "7.5-7.6", "8.0"],
                correct: 1,
                explanation: "Normal arterial blood pH is tightly regulated between 7.35-7.45."
            },
            {
                question: "Blood pH below 7.35 is called:",
                options: ["Alkalosis", "Acidosis", "Neutrality", "Buffering"],
                correct: 1,
                explanation: "Blood pH below 7.35 is called acidosis, indicating excess acid or loss of base."
            },
            {
                question: "Blood pH above 7.45 is called:",
                options: ["Acidosis", "Alkalosis", "Neutrality", "Buffering"],
                correct: 1,
                explanation: "Blood pH above 7.45 is called alkalosis, indicating excess base or loss of acid."
            },
            {
                question: "The body's primary buffer system is:",
                options: ["Phosphate buffer", "Bicarbonate buffer", "Protein buffer", "Hemoglobin buffer"],
                correct: 1,
                explanation: "The bicarbonate buffer system is the most important buffer in blood and extracellular fluid."
            },
            {
                question: "The bicarbonate buffer system involves:",
                options: ["H2CO3 and HCO3-", "H2PO4- and HPO42-", "Proteins only", "Hemoglobin only"],
                correct: 0,
                explanation: "The bicarbonate buffer system involves carbonic acid (H2CO3) and bicarbonate (HCO3-)."
            },
            {
                question: "Respiratory compensation for acidosis involves:",
                options: ["Slower breathing", "Faster breathing", "Holding breath", "No change in breathing"],
                correct: 1,
                explanation: "Respiratory compensation for acidosis involves hyperventilation to eliminate CO2."
            },
            {
                question: "Respiratory compensation for alkalosis involves:",
                options: ["Faster breathing", "Slower breathing", "Deeper breathing", "No change"],
                correct: 1,
                explanation: "Respiratory compensation for alkalosis involves hypoventilation to retain CO2."
            },
            {
                question: "The kidneys compensate for pH changes by:",
                options: ["Changing breathing rate", "Adjusting bicarbonate excretion", "Producing enzymes", "Storing acids"],
                correct: 1,
                explanation: "The kidneys compensate by adjusting bicarbonate reabsorption and acid excretion."
            },
            {
                question: "Metabolic acidosis can be caused by:",
                options: ["Excessive vomiting", "Diabetic ketoacidosis", "Hyperventilation", "Kidney retention of acid"],
                correct: 1,
                explanation: "Metabolic acidosis can result from diabetic ketoacidosis, kidney disease, or severe diarrhea."
            },
            {
                question: "Metabolic alkalosis can be caused by:",
                options: ["Excessive vomiting", "Diarrhea", "Ketoacidosis", "Respiratory depression"],
                correct: 0,
                explanation: "Metabolic alkalosis can result from excessive vomiting or diuretic use."
            },
            {
                question: "Respiratory acidosis results from:",
                options: ["Hyperventilation", "Hypoventilation", "Kidney disease", "Vomiting"],
                correct: 1,
                explanation: "Respiratory acidosis results from hypoventilation and CO2 retention."
            },
            {
                question: "Respiratory alkalosis results from:",
                options: ["Hypoventilation", "Hyperventilation", "Kidney disease", "Diarrhea"],
                correct: 1,
                explanation: "Respiratory alkalosis results from hyperventilation and excessive CO2 loss."
            },
            {
                question: "Carbonic anhydrase:",
                options: ["Produces CO2", "Converts CO2 and H2O to H2CO3", "Destroys bicarbonate", "Has no role in pH"],
                correct: 1,
                explanation: "Carbonic anhydrase catalyzes the conversion of CO2 and water to carbonic acid."
            },
            {
                question: "Blood gas analysis measures:",
                options: ["pH only", "CO2 only", "pH, CO2, and O2", "Glucose only"],
                correct: 2,
                explanation: "Blood gas analysis measures pH, partial pressures of CO2 and O2, and other parameters."
            },
            {
                question: "The anion gap helps diagnose:",
                options: ["Respiratory disorders", "Metabolic acidosis", "Kidney stones", "Heart disease"],
                correct: 1,
                explanation: "The anion gap helps determine the cause of metabolic acidosis."
            },
            {
                question: "Compensation versus correction means:",
                options: ["They are the same", "Compensation is temporary, correction is permanent", "Compensation is permanent", "There is no difference"],
                correct: 1,
                explanation: "Compensation is the body's temporary response; correction addresses the underlying cause."
            },
            {
                question: "The phosphate buffer system is most important in:",
                options: ["Blood", "Urine", "Cells", "Lungs"],
                correct: 2,
                explanation: "The phosphate buffer system is most important in intracellular fluid and urine."
            },
            {
                question: "Protein buffers work by:",
                options: ["Releasing oxygen", "Accepting or donating protons", "Storing glucose", "Producing energy"],
                correct: 1,
                explanation: "Protein buffers work by accepting or donating protons (H+) to maintain pH."
            },
            {
                question: "Hemoglobin acts as a buffer by:",
                options: ["Carrying oxygen only", "Binding hydrogen ions", "Producing CO2", "Storing glucose"],
                correct: 1,
                explanation: "Hemoglobin can bind hydrogen ions, helping to buffer blood pH."
            },
            {
                question: "Acidosis affects cellular function by:",
                options: ["Improving enzyme activity", "Disrupting enzyme activity", "Having no effect", "Only affecting pH"],
                correct: 1,
                explanation: "Acidosis disrupts enzyme activity and cellular processes, potentially causing organ dysfunction."
            },
            {
                question: "Alkalosis affects the nervous system by:",
                options: ["Calming nerves", "Causing hyperexcitability", "Having no effect", "Improving function"],
                correct: 1,
                explanation: "Alkalosis causes nervous system hyperexcitability, leading to muscle spasms and seizures."
            },
            {
                question: "The kidneys regulate acid-base balance by:",
                options: ["Breathing rate only", "Reabsorbing bicarbonate and excreting acid", "Storing buffers", "Producing oxygen"],
                correct: 1,
                explanation: "The kidneys regulate pH by controlling bicarbonate reabsorption and acid excretion."
            },
            {
                question: "Urinalysis can reveal:",
                options: ["Blood pH only", "Kidney pH regulation", "Lung function only", "Heart rate"],
                correct: 1,
                explanation: "Urinalysis can show how well the kidneys are regulating acid-base balance."
            },
            {
                question: "Chronic kidney disease affects pH by:",
                options: ["Improving acid excretion", "Impairing acid excretion", "Having no effect", "Only affecting water"],
                correct: 1,
                explanation: "Chronic kidney disease impairs the kidneys' ability to excrete acid and regulate pH."
            },
            {
                question: "The future of homeostasis research includes:",
                options: ["Precision medicine", "Personalized treatments", "Advanced monitoring", "All of the above"],
                correct: 3,
                explanation: "Future homeostasis research includes precision medicine, personalized treatments, and advanced monitoring technologies."
            }
        ],
        'Biotechnology': [
            // INTRODUCTION TO BIOTECHNOLOGY (Questions 1-25)
            {
                question: "Biotechnology is:",
                options: ["The study of life only", "Technology using biological systems", "Computer science", "Physics applications"],
                correct: 1,
                explanation: "Biotechnology is the use of living systems and organisms to develop or make products."
            },
            {
                question: "Traditional biotechnology includes:",
                options: ["Genetic engineering", "Fermentation", "DNA sequencing", "PCR"],
                correct: 1,
                explanation: "Traditional biotechnology includes ancient practices like fermentation for making bread, wine, and cheese."
            },
            {
                question: "Modern biotechnology is characterized by:",
                options: ["Use of microorganisms only", "DNA manipulation techniques", "Traditional breeding", "Physical processes"],
                correct: 1,
                explanation: "Modern biotechnology involves genetic engineering and molecular techniques."
            },
            {
                question: "The first genetically engineered product approved for human use was:",
                options: ["Growth hormone", "Insulin", "Interferon", "Vaccine"],
                correct: 1,
                explanation: "Human insulin produced by genetically modified bacteria was the first approved biotechnology product."
            },
            {
                question: "Recombinant DNA technology involves:",
                options: ["Combining DNA from different sources", "Destroying DNA", "Only using human DNA", "Studying DNA structure"],
                correct: 0,
                explanation: "Recombinant DNA technology combines genetic material from different organisms."
            },
            {
                question: "A vector in biotechnology is:",
                options: ["A disease carrier", "A DNA carrier", "A measurement tool", "A microscope"],
                correct: 1,
                explanation: "A vector is a DNA molecule used to carry foreign genetic material into another cell."
            },
            {
                question: "Plasmids are:",
                options: ["Viral particles", "Small circular DNA molecules", "Proteins", "Enzymes"],
                correct: 1,
                explanation: "Plasmids are small, circular DNA molecules found in bacteria, often used as vectors."
            },
            {
                question: "Restriction enzymes are used to:",
                options: ["Join DNA", "Cut DNA at specific sites", "Amplify DNA", "Sequence DNA"],
                correct: 1,
                explanation: "Restriction enzymes cut DNA at specific recognition sequences."
            },
            {
                question: "DNA ligase is used to:",
                options: ["Cut DNA", "Join DNA fragments", "Amplify DNA", "Sequence DNA"],
                correct: 1,
                explanation: "DNA ligase joins DNA fragments by forming phosphodiester bonds."
            },
            {
                question: "PCR stands for:",
                options: ["Protein Chain Reaction", "Polymerase Chain Reaction", "Positive Chain Reaction", "Primary Chain Reaction"],
                correct: 1,
                explanation: "PCR is Polymerase Chain Reaction, used to amplify specific DNA sequences."
            },
            {
                question: "The purpose of PCR is to:",
                options: ["Destroy DNA", "Amplify DNA", "Sequence DNA", "Store DNA"],
                correct: 1,
                explanation: "PCR amplifies (makes many copies of) specific DNA sequences."
            },
            {
                question: "Taq polymerase is used in PCR because it:",
                options: ["Works at room temperature", "Is heat-stable", "Is very cheap", "Works very slowly"],
                correct: 1,
                explanation: "Taq polymerase from thermophilic bacteria remains active at high temperatures used in PCR."
            },
            {
                question: "DNA fingerprinting is used for:",
                options: ["Making new DNA", "Individual identification", "DNA storage", "DNA destruction"],
                correct: 1,
                explanation: "DNA fingerprinting analyzes genetic markers to identify individuals."
            },
            {
                question: "Gel electrophoresis separates DNA based on:",
                options: ["Color", "Size", "Smell", "Taste"],
                correct: 1,
                explanation: "Gel electrophoresis separates DNA fragments by size using an electric field."
            },
            {
                question: "Transformation in biotechnology refers to:",
                options: ["Physical change", "Taking up foreign DNA", "Shape change", "Color change"],
                correct: 1,
                explanation: "Transformation is the process by which cells take up foreign DNA from their environment."
            },
            {
                question: "Competent cells are:",
                options: ["Dead cells", "Cells able to take up DNA", "Very large cells", "Dividing cells"],
                correct: 1,
                explanation: "Competent cells have been treated to make them capable of taking up DNA."
            },
            {
                question: "Cloning in biotechnology means:",
                options: ["Making identical copies", "Making different copies", "Destroying genes", "Studying genetics"],
                correct: 0,
                explanation: "Cloning produces genetically identical copies of genes, cells, or organisms."
            },
            {
                question: "Gene expression involves:",
                options: ["DNA to protein", "Protein to DNA", "RNA destruction", "DNA destruction"],
                correct: 0,
                explanation: "Gene expression is the process by which genetic information flows from DNA to protein."
            },
            {
                question: "A promoter in gene expression is:",
                options: ["The final product", "A DNA sequence that initiates transcription", "An enzyme", "A waste product"],
                correct: 1,
                explanation: "A promoter is a DNA sequence where transcription begins."
            },
            {
                question: "Transgenic organisms contain:",
                options: ["Only their original genes", "Genes from other species", "No genes", "Broken genes"],
                correct: 1,
                explanation: "Transgenic organisms contain genes transferred from other species."
            },
            {
                question: "The first transgenic animal was a:",
                options: ["Mouse", "Rat", "Rabbit", "Pig"],
                correct: 0,
                explanation: "The first transgenic animal was a mouse created in 1980."
            },
            {
                question: "Gene knockout refers to:",
                options: ["Adding new genes", "Removing or inactivating genes", "Copying genes", "Moving genes"],
                correct: 1,
                explanation: "Gene knockout involves removing or inactivating specific genes to study their function."
            },
            {
                question: "CRISPR-Cas9 is used for:",
                options: ["DNA storage", "Gene editing", "Protein production", "Cell division"],
                correct: 1,
                explanation: "CRISPR-Cas9 is a powerful tool for precise gene editing."
            },
            {
                question: "The Human Genome Project aimed to:",
                options: ["Destroy human DNA", "Sequence human DNA", "Create new humans", "Study animal DNA only"],
                correct: 1,
                explanation: "The Human Genome Project sequenced the entire human genome."
            },
            {
                question: "Bioinformatics combines:",
                options: ["Biology and computer science", "Biology and physics", "Chemistry and math", "Geography and biology"],
                correct: 0,
                explanation: "Bioinformatics uses computer science to analyze biological data."
            },

            // APPLICATIONS IN MEDICINE (Questions 26-50)
            {
                question: "Gene therapy aims to:",
                options: ["Destroy genes", "Treat genetic disorders", "Remove all genes", "Study genes only"],
                correct: 1,
                explanation: "Gene therapy involves introducing functional genes to treat genetic disorders."
            },
            {
                question: "The first successful gene therapy was for:",
                options: ["Cancer", "ADA-SCID", "Diabetes", "Heart disease"],
                correct: 1,
                explanation: "The first successful gene therapy treated ADA-SCID (severe combined immunodeficiency)."
            },
            {
                question: "Monoclonal antibodies are:",
                options: ["Identical antibodies from one clone", "Different antibodies", "Not antibodies", "Natural antibodies only"],
                correct: 0,
                explanation: "Monoclonal antibodies are identical antibodies produced by a single clone of cells."
            },
            {
                question: "Monoclonal antibodies are used for:",
                options: ["Diagnosis only", "Treatment only", "Both diagnosis and treatment", "Neither"],
                correct: 2,
                explanation: "Monoclonal antibodies are used for both diagnostic tests and therapeutic treatments."
            },
            {
                question: "Recombinant vaccines contain:",
                options: ["Live pathogens", "Dead pathogens", "Specific pathogen proteins", "No pathogen material"],
                correct: 2,
                explanation: "Recombinant vaccines contain specific proteins produced by genetic engineering."
            },
            {
                question: "The hepatitis B vaccine is:",
                options: ["Traditional vaccine", "Recombinant vaccine", "Live vaccine", "Not available"],
                correct: 1,
                explanation: "The hepatitis B vaccine uses recombinant DNA technology to produce viral proteins."
            },
            {
                question: "Pharmacogenomics studies:",
                options: ["Drug manufacturing", "How genes affect drug responses", "Drug storage", "Drug colors"],
                correct: 1,
                explanation: "Pharmacogenomics studies how genetic variation affects individual responses to drugs."
            },
            {
                question: "Personalized medicine uses:",
                options: ["One treatment for everyone", "Genetic information for individual treatment", "Random treatments", "No treatments"],
                correct: 1,
                explanation: "Personalized medicine tailors treatments based on individual genetic profiles."
            },
            {
                question: "Stem cell therapy uses:",
                options: ["Differentiated cells only", "Undifferentiated cells", "Dead cells", "Artificial cells"],
                correct: 1,
                explanation: "Stem cell therapy uses undifferentiated cells that can develop into various cell types."
            },
            {
                question: "Embryonic stem cells are:",
                options: ["Fully differentiated", "Pluripotent", "Dead", "Artificial"],
                correct: 1,
                explanation: "Embryonic stem cells are pluripotent, able to differentiate into any cell type."
            },
            {
                question: "Adult stem cells are:",
                options: ["Totipotent", "Multipotent", "Not useful", "Artificial"],
                correct: 1,
                explanation: "Adult stem cells are multipotent, able to differentiate into limited cell types."
            },
            {
                question: "Tissue engineering combines:",
                options: ["Cells and materials", "Only cells", "Only materials", "Nothing"],
                correct: 0,
                explanation: "Tissue engineering combines cells, biomaterials, and growth factors to create tissues."
            },
            {
                question: "Xenotransplantation involves:",
                options: ["Human to human transplants", "Animal to human transplants", "Machine to human transplants", "No transplants"],
                correct: 1,
                explanation: "Xenotransplantation is the transplantation of organs from animals to humans."
            },
            {
                question: "The main concern with xenotransplantation is:",
                options: ["Cost", "Cross-species infection", "Availability", "Color"],
                correct: 1,
                explanation: "Cross-species viral infections are a major concern in xenotransplantation."
            },
            {
                question: "Biosensors are used to:",
                options: ["Destroy biological molecules", "Detect biological molecules", "Store biological molecules", "Create biological molecules"],
                correct: 1,
                explanation: "Biosensors detect and measure biological molecules or processes."
            },
            {
                question: "Blood glucose meters use:",
                options: ["Chemical reactions only", "Biosensor technology", "Visual inspection", "Taste testing"],
                correct: 1,
                explanation: "Blood glucose meters use enzyme-based biosensors to measure glucose levels."
            },
            {
                question: "DNA vaccines contain:",
                options: ["Live viruses", "Dead viruses", "Viral DNA", "No viral material"],
                correct: 2,
                explanation: "DNA vaccines contain viral DNA that instructs cells to produce viral proteins."
            },
            {
                question: "Cancer immunotherapy works by:",
                options: ["Destroying the immune system", "Enhancing immune responses against cancer", "Hiding cancer cells", "Feeding cancer cells"],
                correct: 1,
                explanation: "Cancer immunotherapy enhances the immune system's ability to fight cancer."
            },
            {
                question: "CAR-T cell therapy involves:",
                options: ["Destroying T cells", "Modifying T cells to fight cancer", "Using only natural T cells", "Avoiding T cells"],
                correct: 1,
                explanation: "CAR-T therapy genetically modifies T cells to better recognize and attack cancer cells."
            },
            {
                question: "Biomarkers are used for:",
                options: ["Disease diagnosis", "Disease monitoring", "Treatment selection", "All of the above"],
                correct: 3,
                explanation: "Biomarkers are used for diagnosis, monitoring, and selecting appropriate treatments."
            },
            {
                question: "Liquid biopsies detect:",
                options: ["Circulating tumor DNA", "Only solid tumors", "Normal DNA only", "No DNA"],
                correct: 0,
                explanation: "Liquid biopsies detect circulating tumor DNA in blood samples."
            },
            {
                question: "Regenerative medicine aims to:",
                options: ["Destroy organs", "Replace or regenerate tissues", "Study organs only", "Remove organs"],
                correct: 1,
                explanation: "Regenerative medicine seeks to replace or regenerate damaged tissues and organs."
            },
            {
                question: "3D bioprinting creates:",
                options: ["2D structures", "Living tissue structures", "Metal objects", "Paper documents"],
                correct: 1,
                explanation: "3D bioprinting creates three-dimensional living tissue structures."
            },
            {
                question: "Organ-on-a-chip technology:",
                options: ["Replaces entire organs", "Models organ function", "Destroys organs", "Has no medical use"],
                correct: 1,
                explanation: "Organ-on-a-chip technology creates microfluidic devices that model organ functions."
            },
            {
                question: "The advantage of mRNA vaccines is:",
                options: ["They contain live virus", "Rapid development and production", "They are very expensive", "They work slowly"],
                correct: 1,
                explanation: "mRNA vaccines can be rapidly developed and produced during pandemics."
            },

            // AGRICULTURAL BIOTECHNOLOGY (Questions 51-75)
            {
                question: "Genetically modified crops are designed to:",
                options: ["Reduce yields", "Improve crop characteristics", "Harm the environment", "Taste worse"],
                correct: 1,
                explanation: "GM crops are engineered to improve characteristics like yield, nutrition, or pest resistance."
            },
            {
                question: "Bt cotton contains:",
                options: ["No special genes", "Bacterial toxin genes", "Viral genes", "Human genes"],
                correct: 1,
                explanation: "Bt cotton contains genes from Bacillus thuringiensis that produce insecticidal proteins."
            },
            {
                question: "Golden rice is enriched with:",
                options: ["Iron", "Vitamin A precursors", "Protein", "Vitamin C"],
                correct: 1,
                explanation: "Golden rice is genetically modified to produce beta-carotene, a vitamin A precursor."
            },
            {
                question: "Herbicide-resistant crops allow:",
                options: ["No herbicide use", "Specific herbicide use", "Any herbicide use", "More pest damage"],
                correct: 1,
                explanation: "Herbicide-resistant crops can survive specific herbicides that kill weeds."
            },
            {
                question: "Marker-assisted selection uses:",
                options: ["Physical appearance only", "Genetic markers", "Random selection", "No selection"],
                correct: 1,
                explanation: "Marker-assisted selection uses genetic markers to select plants with desired traits."
            },
            {
                question: "Plant tissue culture involves:",
                options: ["Growing whole plants only", "Growing plant cells/tissues in lab", "Destroying plants", "Studying plant books"],
                correct: 1,
                explanation: "Plant tissue culture grows plant cells, tissues, or organs under sterile conditions."
            },
            {
                question: "Micropropagation is used for:",
                options: ["Destroying plants", "Rapid plant multiplication", "Slowing plant growth", "Studying plant colors"],
                correct: 1,
                explanation: "Micropropagation rapidly multiplies plants through tissue culture techniques."
            },
            {
                question: "Somatic hybridization involves:",
                options: ["Sexual reproduction", "Fusing somatic cells", "Seed production", "Root growth"],
                correct: 1,
                explanation: "Somatic hybridization fuses protoplasts from different plant species."
            },
            {
                question: "Protoplasts are:",
                options: ["Cells with cell walls", "Cells without cell walls", "Dead cells", "Bacterial cells"],
                correct: 1,
                explanation: "Protoplasts are plant cells with their cell walls removed."
            },
            {
                question: "Agrobacterium tumefaciens is used for:",
                options: ["Plant disease only", "Gene transfer to plants", "Killing plants", "Plant nutrition"],
                correct: 1,
                explanation: "Agrobacterium is used as a natural vector to transfer genes into plant cells."
            },
            {
                question: "The Ti plasmid from Agrobacterium:",
                options: ["Kills plants", "Transfers genes to plants", "Has no function", "Makes plants smaller"],
                correct: 1,
                explanation: "The Ti plasmid naturally transfers DNA into plant cells and is used in genetic engineering."
            },
            {
                question: "Gene gun technology uses:",
                options: ["Chemicals only", "Physical force to introduce DNA", "Bacteria only", "Viruses only"],
                correct: 1,
                explanation: "Gene guns use physical force to shoot DNA-coated particles into cells."
            },
            {
                question: "Drought-resistant crops are important for:",
                options: ["Water-rich areas", "Arid and semi-arid regions", "Ocean farming", "Indoor farming only"],
                correct: 1,
                explanation: "Drought-resistant crops help agriculture in water-scarce regions."
            },
            {
                question: "Salt-tolerant crops can grow in:",
                options: ["Fresh water only", "Saline soils", "No soil", "Pure salt"],
                correct: 1,
                explanation: "Salt-tolerant crops can grow in saline soils where normal crops would fail."
            },
            {
                question: "Biofortification aims to:",
                options: ["Reduce nutrition", "Increase nutritional content", "Remove nutrients", "Change color only"],
                correct: 1,
                explanation: "Biofortification increases the nutritional value of crops through breeding or genetic engineering."
            },
            {
                question: "Iron-enriched crops help combat:",
                options: ["Obesity", "Anemia", "Diabetes", "High blood pressure"],
                correct: 1,
                explanation: "Iron-enriched crops help combat iron-deficiency anemia."
            },
            {
                question: "Virus-resistant plants are created by:",
                options: ["Avoiding viruses", "Introducing viral genes", "Using antibiotics", "Physical barriers only"],
                correct: 1,
                explanation: "Virus resistance can be achieved by introducing specific viral genes that interfere with infection."
            },
            {
                question: "RNA interference (RNAi) in plants:",
                options: ["Increases gene expression", "Silences specific genes", "Destroys all RNA", "Has no effect"],
                correct: 1,
                explanation: "RNAi silences specific genes by degrading their mRNA."
            },
            {
                question: "Terminator seeds are controversial because they:",
                options: ["Grow too well", "Cannot reproduce", "Are too nutritious", "Grow too fast"],
                correct: 1,
                explanation: "Terminator seeds are genetically modified to be sterile, preventing farmer seed saving."
            },
            {
                question: "Organic farming and biotechnology:",
                options: ["Are completely compatible", "Have some conflicts", "Are identical", "Cannot coexist"],
                correct: 1,
                explanation: "Organic farming standards often exclude genetically modified organisms."
            },
            {
                question: "Gene flow from GM crops refers to:",
                options: ["Water movement", "Transfer of genes to wild plants", "Soil movement", "Air movement"],
                correct: 1,
                explanation: "Gene flow is the transfer of genes from GM crops to wild or conventional plants."
            },
            {
                question: "Biological control uses:",
                options: ["Chemical pesticides", "Living organisms to control pests", "Physical barriers only", "Genetic modification only"],
                correct: 1,
                explanation: "Biological control uses natural predators, parasites, or pathogens to control pests."
            },
            {
                question: "Biopesticides are:",
                options: ["Synthetic chemicals", "Pesticides derived from natural sources", "Heavy metals", "Radioactive materials"],
                correct: 1,
                explanation: "Biopesticides are pest control agents derived from natural sources like bacteria, fungi, or plants."
            },
            {
                question: "Precision agriculture uses:",
                options: ["Guesswork", "Technology for precise farm management", "Only manual labor", "No technology"],
                correct: 1,
                explanation: "Precision agriculture uses GPS, sensors, and data analysis for precise farm management."
            },
            {
                question: "Vertical farming involves:",
                options: ["Traditional field farming", "Growing crops in stacked layers", "Underground farming only", "Ocean farming"],
                correct: 1,
                explanation: "Vertical farming grows crops in vertically stacked layers, often indoors."
            },

            // ENVIRONMENTAL AND INDUSTRIAL BIOTECHNOLOGY (Questions 76-100)
            {
                question: "Bioremediation uses:",
                options: ["Chemicals to clean environment", "Living organisms to clean environment", "Physical removal only", "Nothing"],
                correct: 1,
                explanation: "Bioremediation uses living organisms to remove or neutralize environmental pollutants."
            },
            {
                question: "Microorganisms used in bioremediation can:",
                options: ["Create pollution", "Break down pollutants", "Ignore pollutants", "Concentrate pollutants"],
                correct: 1,
                explanation: "Microorganisms break down pollutants into less harmful substances."
            },
            {
                question: "Phytoremediation uses:",
                options: ["Animals", "Plants", "Chemicals", "Machines"],
                correct: 1,
                explanation: "Phytoremediation uses plants to remove pollutants from soil or water."
            },
            {
                question: "Biofuels are produced from:",
                options: ["Fossil fuels only", "Biological materials", "Minerals", "Metals"],
                correct: 1,
                explanation: "Biofuels are produced from renewable biological materials like crops or algae."
            },
            {
                question: "Ethanol as biofuel is commonly made from:",
                options: ["Oil", "Corn or sugarcane", "Coal", "Natural gas"],
                correct: 1,
                explanation: "Ethanol biofuel is commonly produced from corn or sugarcane through fermentation."
            },
            {
                question: "Biodiesel is made from:",
                options: ["Petroleum", "Vegetable oils or animal fats", "Coal", "Natural gas"],
                correct: 1,
                explanation: "Biodiesel is produced from vegetable oils, animal fats, or algae."
            },
            {
                question: "Algae are promising for biofuel because they:",
                options: ["Grow slowly", "Have high oil content", "Need lots of land", "Are expensive"],
                correct: 1,
                explanation: "Algae can have high oil content and grow rapidly without requiring agricultural land."
            },
            {
                question: "Biogas is produced through:",
                options: ["Photosynthesis", "Anaerobic digestion", "Aerobic respiration", "Chemical synthesis"],
                correct: 1,
                explanation: "Biogas is produced by anaerobic digestion of organic matter by bacteria."
            },
            {
                question: "Industrial biotechnology produces:",
                options: ["Only pharmaceuticals", "Chemicals, materials, and fuels", "Only food", "Only cosmetics"],
                correct: 1,
                explanation: "Industrial biotechnology produces a wide range of chemicals, materials, fuels, and products."
            },
            {
                question: "Enzymes in industrial processes:",
                options: ["Are not useful", "Catalyze specific reactions", "Are always expensive", "Work only once"],
                correct: 1,
                explanation: "Industrial enzymes catalyze specific reactions efficiently under controlled conditions."
            },
            {
                question: "White biotechnology refers to:",
                options: ["Medical biotechnology", "Industrial biotechnology", "Agricultural biotechnology", "Color biotechnology"],
                correct: 1,
                explanation: "White biotechnology is industrial biotechnology focused on manufacturing processes."
            },
            {
                question: "Biomaterials are:",
                options: ["Only natural materials", "Materials that interface with biological systems", "Only synthetic materials", "Only metals"],
                correct: 1,
                explanation: "Biomaterials are designed to interact with biological systems for medical applications."
            },
            {
                question: "Biodegradable plastics:",
                options: ["Never break down", "Break down naturally", "Are made of metal", "Are radioactive"],
                correct: 1,
                explanation: "Biodegradable plastics break down naturally through biological processes."
            },
            {
                question: "Microbial fuel cells generate:",
                options: ["Heat only", "Electricity from organic matter", "Light only", "Sound only"],
                correct: 1,
                explanation: "Microbial fuel cells use bacteria to generate electricity from organic compounds."
            },
            {
                question: "Biosurfactants are:",
                options: ["Synthetic detergents", "Biological surface-active agents", "Heavy metals", "Radioactive compounds"],
                correct: 1,
                explanation: "Biosurfactants are surface-active agents produced by microorganisms."
            },
            {
                question: "Biomining uses:",
                options: ["Explosives", "Microorganisms to extract metals", "Only physical methods", "Only chemical methods"],
                correct: 1,
                explanation: "Biomining uses microorganisms to extract metals from ores or waste materials."
            },
            {
                question: "Carbon capture and storage can involve:",
                options: ["Only physical methods", "Biological methods", "Only chemical methods", "No methods"],
                correct: 1,
                explanation: "Biological carbon capture uses organisms like algae or genetically modified plants."
            },
            {
                question: "Synthetic biology aims to:",
                options: ["Study natural biology only", "Engineer biological systems", "Destroy biology", "Avoid biology"],
                correct: 1,
                explanation: "Synthetic biology engineers biological systems for useful purposes."
            },
            {
                question: "Biological circuits can be designed to:",
                options: ["Process electrical signals only", "Process biological information", "Generate heat only", "Store water"],
                correct: 1,
                explanation: "Biological circuits process information using biological components like genes and proteins."
            },
            {
                question: "The ethics of biotechnology involves:",
                options: ["No concerns", "Safety and moral considerations", "Only financial issues", "Only technical issues"],
                correct: 1,
                explanation: "Biotechnology ethics addresses safety, environmental, social, and moral considerations."
            },
            {
                question: "Biosafety measures ensure:",
                options: ["Maximum risk", "Safe use of biotechnology", "No regulation", "No safety"],
                correct: 1,
                explanation: "Biosafety measures prevent harmful effects of biotechnology on humans and environment."
            },
            {
                question: "Intellectual property in biotechnology protects:",
                options: ["Nothing", "Innovations and inventions", "Only natural discoveries", "Only traditional knowledge"],
                correct: 1,
                explanation: "Intellectual property laws protect biotechnology innovations while considering ethical issues."
            },
            {
                question: "Public participation in biotechnology decisions is important for:",
                options: ["Slowing progress", "Democratic governance", "Avoiding science", "Creating confusion"],
                correct: 1,
                explanation: "Public engagement ensures democratic decision-making about biotechnology applications."
            },
            {
                question: "The future of biotechnology includes:",
                options: ["Declining importance", "Advanced applications in all fields", "Only medical uses", "No environmental applications"],
                correct: 1,
                explanation: "Biotechnology will expand into medicine, agriculture, environment, and industry."
            },
            {
                question: "Convergence of biotechnology with other fields creates:",
                options: ["No new opportunities", "New interdisciplinary possibilities", "Only problems", "Confusion only"],
                correct: 1,
                explanation: "Biotechnology convergence with nanotechnology, AI, and other fields creates new possibilities."
            }
        ],
            {
                question: "The process of creating gametes is called:",
                options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
                correct: 1,
                explanation: "Meiosis is the process that produces gametes with half the chromosome number."
            },
            {
                question: "A recessive allele is expressed when:",
                options: ["It's present in single copy", "It's present in double copy", "It's dominant", "It's linked to sex chromosomes"],
                correct: 1,
                explanation: "Recessive alleles are only expressed when present in homozygous condition (two copies)."
            },
            {
                question: "The genotype refers to:",
                options: ["Physical appearance", "Genetic makeup", "Environmental factors", "Behavioral traits"],
                correct: 1,
                explanation: "Genotype is the genetic constitution or makeup of an organism."
            }
        ]
    },
    chemistry: {
        'Atomic Structure': [
            {
                question: "The number of electrons in the outermost shell of carbon is:",
                options: ["2", "4", "6", "8"],
                correct: 1,
                explanation: "Carbon has atomic number 6, with electronic configuration 2,4, so it has 4 electrons in its outermost shell."
            },
            {
                question: "Which quantum number describes the shape of an orbital?",
                options: ["Principal quantum number (n)", "Azimuthal quantum number (l)", "Magnetic quantum number (m)", "Spin quantum number (s)"],
                correct: 1,
                explanation: "The azimuthal quantum number (l) determines the shape of the orbital (s, p, d, f)."
            },
            {
                question: "The maximum number of electrons in d orbital is:",
                options: ["2", "6", "10", "14"],
                correct: 2,
                explanation: "The d subshell has 5 orbitals, each can hold 2 electrons, so maximum is 5 × 2 = 10 electrons."
            },
            {
                question: "The atomic number represents:",
                options: ["Number of neutrons", "Number of protons", "Atomic mass", "Number of electrons"],
                correct: 1,
                explanation: "Atomic number is the number of protons in an atom's nucleus, which defines the element."
            },
            {
                question: "Isotopes have the same number of:",
                options: ["Neutrons", "Protons", "Electrons", "Nucleons"],
                correct: 1,
                explanation: "Isotopes are atoms of the same element with the same number of protons but different neutrons."
            },
            {
                question: "The Pauli exclusion principle states that:",
                options: ["Electrons occupy lowest energy levels first", "No two electrons can have identical quantum numbers", "Electrons prefer to be unpaired", "Orbitals fill singly before pairing"],
                correct: 1,
                explanation: "The Pauli exclusion principle states that no two electrons can have the same set of quantum numbers."
            }
        ],
        'Chemical Bonding': [
            {
                question: "The type of bond present in NaCl is:",
                options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
                correct: 1,
                explanation: "NaCl is formed by electron transfer from Na to Cl, creating ionic bond between Na⁺ and Cl⁻."
            },
            {
                question: "The shape of NH₃ molecule is:",
                options: ["Linear", "Tetrahedral", "Pyramidal", "Bent"],
                correct: 2,
                explanation: "NH₃ has 3 bonding pairs and 1 lone pair, giving it a pyramidal shape according to VSEPR theory."
            },
            {
                question: "Electronegativity is:",
                options: ["The ability to gain electrons", "The ability to lose electrons", "The ability to attract electrons in a bond", "The ability to form bonds"],
                correct: 2,
                explanation: "Electronegativity is the ability of an atom to attract electrons when forming a chemical bond."
            },
            {
                question: "Which molecule has the highest polarity?",
                options: ["HF", "HCl", "HBr", "HI"],
                correct: 0,
                explanation: "HF has the highest polarity due to the large electronegativity difference between H and F."
            },
            {
                question: "A coordinate covalent bond is formed when:",
                options: ["Both atoms contribute electrons equally", "One atom donates both electrons", "Electrons are transferred", "Atoms share electrons unequally"],
                correct: 1,
                explanation: "In coordinate covalent bonds, one atom donates both electrons to form the bond."
            }
        ],
        'Organic Chemistry - Hydrocarbons': [
            {
                question: "The general formula for alkenes is:",
                options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"],
                correct: 1,
                explanation: "Alkenes are unsaturated hydrocarbons with one double bond, following CₙH₂ₙ formula."
            },
            {
                question: "The product of hydration of ethene is:",
                options: ["Ethane", "Ethanol", "Ethanoic acid", "Ethyl acetate"],
                correct: 1,
                explanation: "Hydration adds H₂O across the double bond: CH₂=CH₂ + H₂O → CH₃CH₂OH."
            },
            {
                question: "Benzene is an example of:",
                options: ["Alkane", "Alkene", "Alkyne", "Aromatic compound"],
                correct: 3,
                explanation: "Benzene (C₆H₆) is the simplest aromatic hydrocarbon with a ring of alternating double bonds."
            },
            {
                question: "The reaction of alkanes with halogens is called:",
                options: ["Addition", "Substitution", "Elimination", "Condensation"],
                correct: 1,
                explanation: "Alkanes undergo substitution reactions with halogens, replacing hydrogen atoms."
            },
            {
                question: "Markovnikov's rule applies to:",
                options: ["Substitution reactions", "Addition reactions", "Elimination reactions", "Oxidation reactions"],
                correct: 1,
                explanation: "Markovnikov's rule predicts the outcome of addition reactions to asymmetric alkenes."
            }
        ],
        'Inorganic Chemistry': [
            {
                question: "The most electronegative element is:",
                options: ["Oxygen", "Fluorine", "Nitrogen", "Chlorine"],
                correct: 1,
                explanation: "Fluorine is the most electronegative element with a value of 4.0 on the Pauling scale."
            },
            {
                question: "Which gas is evolved when metals react with acids?",
                options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
                correct: 2,
                explanation: "When metals react with acids, hydrogen gas is typically evolved: Metal + Acid → Salt + H₂."
            },
            {
                question: "The oxidation state of sulfur in H₂SO₄ is:",
                options: ["+4", "+6", "-2", "+2"],
                correct: 1,
                explanation: "In H₂SO₄, sulfur has an oxidation state of +6 (H=+1, O=-2, so S = +6)."
            },
            {
                question: "Which of the following is an amphoteric oxide?",
                options: ["Na₂O", "CO₂", "Al₂O₃", "SO₂"],
                correct: 2,
                explanation: "Al₂O₃ is amphoteric, meaning it can act as both an acid and a base."
            }
        ],
        'Physical Chemistry': [
            {
                question: "The rate of reaction depends on:",
                options: ["Temperature only", "Concentration only", "Temperature and concentration", "Pressure only"],
                correct: 2,
                explanation: "Reaction rate depends on multiple factors including temperature, concentration, pressure, and catalysts."
            },
            {
                question: "A catalyst works by:",
                options: ["Increasing activation energy", "Decreasing activation energy", "Changing the equilibrium", "Increasing temperature"],
                correct: 1,
                explanation: "Catalysts lower the activation energy, providing an alternative pathway for the reaction."
            },
            {
                question: "Le Chatelier's principle applies to:",
                options: ["Irreversible reactions", "Equilibrium systems", "Catalyzed reactions", "Gas phase reactions only"],
                correct: 1,
                explanation: "Le Chatelier's principle describes how equilibrium systems respond to changes in conditions."
            }
        ]
    },
    physics: {
        'Mechanics - Motion & Force': [
            {
                question: "A body moving with constant velocity has:",
                options: ["Zero acceleration", "Constant acceleration", "Variable acceleration", "Infinite acceleration"],
                correct: 0,
                explanation: "Constant velocity means no change in velocity, so acceleration = Δv/Δt = 0."
            },
            {
                question: "The SI unit of force is:",
                options: ["Dyne", "Newton", "Pound", "Kilogram"],
                correct: 1,
                explanation: "Newton (N) is the SI unit of force, defined as kg⋅m⋅s⁻²."
            },
            {
                question: "Newton's first law is also known as:",
                options: ["Law of action-reaction", "Law of inertia", "Law of momentum", "Law of gravitation"],
                correct: 1,
                explanation: "Newton's first law states that objects resist changes in motion, which is the concept of inertia."
            },
            {
                question: "The acceleration due to gravity on Earth is approximately:",
                options: ["9.8 m/s²", "10 m/s²", "9.81 m/s²", "9.7 m/s²"],
                correct: 2,
                explanation: "The standard acceleration due to gravity on Earth is 9.81 m/s²."
            },
            {
                question: "When a body is in equilibrium, the net force acting on it is:",
                options: ["Maximum", "Minimum", "Zero", "Constant"],
                correct: 2,
                explanation: "For a body in equilibrium, the vector sum of all forces equals zero."
            },
            {
                question: "The momentum of a body is defined as:",
                options: ["m × v²", "m × v", "m × a", "F × t"],
                correct: 1,
                explanation: "Momentum (p) is defined as mass times velocity: p = mv."
            }
        ],
        'Waves & Sound': [
            {
                question: "Sound waves are:",
                options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Standing waves"],
                correct: 1,
                explanation: "Sound waves consist of compression and rarefaction, making them longitudinal."
            },
            {
                question: "The speed of sound in air at 20°C is approximately:",
                options: ["330 m/s", "343 m/s", "300 m/s", "3×10⁸ m/s"],
                correct: 1,
                explanation: "Speed of sound in air at 20°C is about 343 m/s."
            },
            {
                question: "The frequency of a wave is:",
                options: ["Distance between crests", "Number of waves per second", "Maximum displacement", "Speed of the wave"],
                correct: 1,
                explanation: "Frequency is the number of wave cycles that pass a point per unit time."
            },
            {
                question: "The relationship between wave speed, frequency, and wavelength is:",
                options: ["v = f × λ", "v = f / λ", "v = λ / f", "v = f + λ"],
                correct: 0,
                explanation: "Wave speed equals frequency times wavelength: v = fλ."
            }
        ],
        'Electricity & Magnetism': [
            {
                question: "The SI unit of electric charge is:",
                options: ["Ampere", "Volt", "Coulomb", "Ohm"],
                correct: 2,
                explanation: "Coulomb (C) is the SI unit of electric charge."
            },
            {
                question: "Ohm's law states that V = IR, where V is:",
                options: ["Current", "Voltage", "Resistance", "Power"],
                correct: 1,
                explanation: "In Ohm's law, V represents voltage or potential difference."
            },
            {
                question: "Electric current is defined as:",
                options: ["Flow of protons", "Flow of electrons", "Flow of charge", "Flow of atoms"],
                correct: 2,
                explanation: "Electric current is the flow of electric charge, typically carried by electrons."
            },
            {
                question: "The unit of electrical resistance is:",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 2,
                explanation: "Ohm (Ω) is the SI unit of electrical resistance."
            },
            {
                question: "A magnetic field is produced by:",
                options: ["Stationary charges", "Moving charges", "Neutral particles", "Protons only"],
                correct: 1,
                explanation: "Moving electric charges (current) produce magnetic fields."
            }
        ],
        'Light & Optics': [
            {
                question: "The speed of light in vacuum is:",
                options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
                correct: 1,
                explanation: "The speed of light in vacuum is approximately 3×10⁸ m/s."
            },
            {
                question: "Total internal reflection occurs when light travels from:",
                options: ["Denser to rarer medium", "Rarer to denser medium", "Same medium", "Vacuum to medium"],
                correct: 0,
                explanation: "Total internal reflection occurs when light travels from a denser to a rarer medium at angles greater than critical angle."
            },
            {
                question: "The refractive index of a medium is:",
                options: ["Speed of light in medium / Speed of light in vacuum", "Speed of light in vacuum / Speed of light in medium", "Wavelength in vacuum / Wavelength in medium", "Frequency in medium / Frequency in vacuum"],
                correct: 1,
                explanation: "Refractive index n = c/v, where c is speed of light in vacuum and v is speed in the medium."
            }
        ],
        'Modern Physics': [
            {
                question: "Planck's constant relates:",
                options: ["Energy and mass", "Energy and frequency", "Mass and velocity", "Force and acceleration"],
                correct: 1,
                explanation: "Planck's constant relates photon energy to frequency: E = hf."
            },
            {
                question: "The photoelectric effect demonstrates:",
                options: ["Wave nature of light", "Particle nature of light", "Electromagnetic nature", "Quantum nature"],
                correct: 1,
                explanation: "The photoelectric effect shows that light behaves as particles (photons) with discrete energy packets."
            }
        ]
    },
    english: {
        'Grammar': [
            {
                question: "Choose the correct form: 'She _____ to school every day.'",
                options: ["go", "goes", "going", "gone"],
                correct: 1,
                explanation: "Third person singular present tense requires 's' with the verb."
            },
            {
                question: "Which sentence is in passive voice?",
                options: ["John wrote the letter.", "The letter was written by John.", "John is writing the letter.", "John will write the letter."],
                correct: 1,
                explanation: "Passive voice follows the structure: object + be + past participle + by + subject."
            },
            {
                question: "Identify the adjective in: 'The beautiful garden bloomed.'",
                options: ["The", "beautiful", "garden", "bloomed"],
                correct: 1,
                explanation: "'Beautiful' describes the noun 'garden', making it an adjective."
            },
            {
                question: "Which is a compound sentence?",
                options: ["I went to the store.", "I went to the store and bought milk.", "Going to the store, I bought milk.", "The store where I bought milk."],
                correct: 1,
                explanation: "A compound sentence has two independent clauses joined by a coordinating conjunction."
            },
            {
                question: "The past participle of 'break' is:",
                options: ["broke", "broken", "breaking", "breaks"],
                correct: 1,
                explanation: "'Broken' is the past participle form of the irregular verb 'break'."
            }
        ],
        'Vocabulary': [
            {
                question: "The synonym of 'enormous' is:",
                options: ["Tiny", "Huge", "Medium", "Small"],
                correct: 1,
                explanation: "Enormous and huge both mean very large in size."
            },
            {
                question: "The antonym of 'artificial' is:",
                options: ["Fake", "Synthetic", "Natural", "Plastic"],
                correct: 2,
                explanation: "Artificial means man-made, while natural means occurring in nature."
            },
            {
                question: "What does 'benevolent' mean?",
                options: ["Evil", "Kind and generous", "Angry", "Confused"],
                correct: 1,
                explanation: "Benevolent means showing kindness and goodwill toward others."
            },
            {
                question: "The word 'ubiquitous' means:",
                options: ["Rare", "Present everywhere", "Ancient", "Modern"],
                correct: 1,
                explanation: "Ubiquitous means existing or being everywhere at the same time."
            }
        ],
        'Reading Comprehension': [
            {
                question: "In reading comprehension, the main idea is:",
                options: ["The first sentence", "The central theme or message", "The longest paragraph", "The conclusion"],
                correct: 1,
                explanation: "The main idea is the central theme or primary message that the author wants to convey."
            },
            {
                question: "Context clues help readers:",
                options: ["Skip difficult words", "Understand unfamiliar words", "Read faster", "Memorize text"],
                correct: 1,
                explanation: "Context clues are hints in the surrounding text that help determine the meaning of unfamiliar words."
            }
        ]
    },
    logical: {
        'Pattern Recognition': [
            {
                question: "Complete the series: 2, 6, 12, 20, 30, ?",
                options: ["40", "42", "44", "46"],
                correct: 1,
                explanation: "Differences are 4, 6, 8, 10, so next difference is 12. 30 + 12 = 42."
            },
            {
                question: "Find the odd one out: 8, 27, 64, 125, 144",
                options: ["8", "27", "64", "144"],
                correct: 3,
                explanation: "All others are perfect cubes (2³, 3³, 4³, 5³), but 144 is 12²."
            },
            {
                question: "What comes next: A, D, G, J, ?",
                options: ["K", "L", "M", "N"],
                correct: 2,
                explanation: "The pattern increases by 3 letters each time: A(+3)D(+3)G(+3)J(+3)M."
            }
        ],
        'Logical Deduction': [
            {
                question: "All doctors are intelligent. John is a doctor. Therefore:",
                options: ["John is not intelligent", "John is intelligent", "John may be intelligent", "Cannot be determined"],
                correct: 1,
                explanation: "If all doctors are intelligent and John is a doctor, then John must be intelligent."
            },
            {
                question: "If all roses are flowers and some flowers are red, then:",
                options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"],
                correct: 3,
                explanation: "We cannot determine the color of roses from the given information."
            }
        ],
        'Mathematical Reasoning': [
            {
                question: "If 5x + 3 = 18, then x =",
                options: ["2", "3", "4", "5"],
                correct: 1,
                explanation: "5x + 3 = 18, so 5x = 15, therefore x = 3."
            },
            {
                question: "The next number in the sequence 1, 4, 9, 16, 25, ? is:",
                options: ["30", "36", "49", "64"],
                correct: 1,
                explanation: "These are perfect squares: 1², 2², 3², 4², 5², so next is 6² = 36."
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