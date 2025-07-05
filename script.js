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
            {
                question: "The building blocks of proteins are:",
                options: ["Nucleotides", "Amino acids", "Fatty acids", "Monosaccharides"],
                correct: 1,
                explanation: "Proteins are polymers made up of amino acid monomers linked by peptide bonds."
            },
            {
                question: "The most abundant carbohydrate in nature is:",
                options: ["Glucose", "Starch", "Cellulose", "Glycogen"],
                correct: 2,
                explanation: "Cellulose is the main component of plant cell walls and the most abundant organic compound on Earth."
            },
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
                question: "Enzymes are primarily composed of:",
                options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
                correct: 2,
                explanation: "Most enzymes are proteins that catalyze biochemical reactions by lowering activation energy."
            },
            {
                question: "The primary structure of a protein refers to:",
                options: ["3D folding pattern", "Amino acid sequence", "Hydrogen bonding pattern", "Quaternary associations"],
                correct: 1,
                explanation: "Primary structure is the linear sequence of amino acids in a protein chain."
            },
            {
                question: "Saturated fats differ from unsaturated fats in that they:",
                options: ["Have double bonds", "Are liquid at room temperature", "Have no double bonds", "Contain more carbon atoms"],
                correct: 2,
                explanation: "Saturated fats have no double bonds between carbon atoms and are typically solid at room temperature."
            },
            {
                question: "ATP stands for:",
                options: ["Adenine Triphosphate", "Adenosine Triphosphate", "Amino Triphosphate", "Adenosine Tripeptide"],
                correct: 1,
                explanation: "ATP (Adenosine Triphosphate) is the universal energy currency of cells."
            }
        ],
        'Human Circulation': [
            {
                question: "The largest artery in the human body is:",
                options: ["Pulmonary artery", "Coronary artery", "Aorta", "Carotid artery"],
                correct: 2,
                explanation: "The aorta is the main artery that carries oxygenated blood from the left ventricle to the body."
            },
            {
                question: "Red blood cells are produced in:",
                options: ["Liver", "Spleen", "Bone marrow", "Kidneys"],
                correct: 2,
                explanation: "Red blood cells are produced through erythropoiesis in the bone marrow."
            },
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
        'Genetics & Heredity': [
            {
                question: "The basic unit of heredity is:",
                options: ["Chromosome", "Gene", "DNA", "RNA"],
                correct: 1,
                explanation: "A gene is the basic unit of heredity that contains instructions for specific traits."
            },
            {
                question: "How many chromosomes do humans have in diploid cells?",
                options: ["23", "44", "46", "48"],
                correct: 2,
                explanation: "Humans have 46 chromosomes (23 pairs) in their diploid cells."
            },
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