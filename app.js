"use strict";

const elements = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", atomicMass: "1.008", category: "Reactive nonmetal", shortFact: "Hydrogen is the most abundant element in the universe." },
  { atomicNumber: 2, symbol: "He", name: "Helium", atomicMass: "4.0026", category: "Noble gas", shortFact: "Helium stays liquid at extremely low temperatures." },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", atomicMass: "6.94", category: "Alkali metal", shortFact: "Lithium is the lightest metal." },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", atomicMass: "9.0122", category: "Alkaline earth metal", shortFact: "Beryllium is strong, light, and used in aerospace materials." },
  { atomicNumber: 5, symbol: "B", name: "Boron", atomicMass: "10.81", category: "Metalloid", shortFact: "Boron compounds help make heat-resistant glass." },
  { atomicNumber: 6, symbol: "C", name: "Carbon", atomicMass: "12.011", category: "Reactive nonmetal", shortFact: "Carbon forms the backbone of organic chemistry." },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", atomicMass: "14.007", category: "Reactive nonmetal", shortFact: "Nitrogen makes up most of Earth's atmosphere." },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", atomicMass: "15.999", category: "Reactive nonmetal", shortFact: "Oxygen supports respiration and combustion." },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", atomicMass: "18.998", category: "Halogen", shortFact: "Fluorine is the most reactive nonmetal." },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", atomicMass: "20.180", category: "Noble gas", shortFact: "Neon glows bright red-orange in signs." },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: "22.990", category: "Alkali metal", shortFact: "Sodium reacts vigorously with water." },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: "24.305", category: "Alkaline earth metal", shortFact: "Magnesium burns with a brilliant white light." },
  { atomicNumber: 13, symbol: "Al", name: "Aluminum", atomicMass: "26.982", category: "Post-transition metal", shortFact: "Aluminum is lightweight and resists corrosion." },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: "28.085", category: "Metalloid", shortFact: "Silicon is essential for computer chips and solar cells." },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: "30.974", category: "Reactive nonmetal", shortFact: "Phosphorus is important in DNA and ATP." },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: "32.06", category: "Reactive nonmetal", shortFact: "Sulfur has been known since ancient times." },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: "35.45", category: "Halogen", shortFact: "Chlorine is used to disinfect water." },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: "39.948", category: "Noble gas", shortFact: "Argon is often used inside light bulbs." },
  { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: "39.098", category: "Alkali metal", shortFact: "Potassium ions help nerves and muscles work." },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: "40.078", category: "Alkaline earth metal", shortFact: "Calcium helps build bones and teeth." },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: "44.956", category: "Transition metal", shortFact: "Scandium can strengthen aluminum alloys." },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: "47.867", category: "Transition metal", shortFact: "Titanium is strong, light, and corrosion-resistant." },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: "50.942", category: "Transition metal", shortFact: "Vanadium improves the strength of steel." },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: "51.996", category: "Transition metal", shortFact: "Chromium gives rubies their red color." },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: "54.938", category: "Transition metal", shortFact: "Manganese is used in steelmaking and batteries." },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: "55.845", category: "Transition metal", shortFact: "Iron is the main metal in steel." },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: "58.933", category: "Transition metal", shortFact: "Cobalt compounds create intense blue pigments." },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: "58.693", category: "Transition metal", shortFact: "Nickel is used in stainless steel and coins." },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: "63.546", category: "Transition metal", shortFact: "Copper conducts electricity very well." },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: "65.38", category: "Transition metal", shortFact: "Zinc helps protect steel from rusting." },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: "69.723", category: "Post-transition metal", shortFact: "Gallium can melt in your hand." },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: "72.630", category: "Metalloid", shortFact: "Germanium is used in fiber optics and electronics." },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: "74.922", category: "Metalloid", shortFact: "Arsenic compounds have a long toxic history." },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: "78.971", category: "Reactive nonmetal", shortFact: "Selenium is needed in tiny amounts by many organisms." },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: "79.904", category: "Halogen", shortFact: "Bromine is a liquid at room temperature." },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: "83.798", category: "Noble gas", shortFact: "Krypton is used in some high-performance lights." },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: "85.468", category: "Alkali metal", shortFact: "Rubidium is highly reactive and soft." },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: "87.62", category: "Alkaline earth metal", shortFact: "Strontium salts make fireworks glow red." },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: "88.906", category: "Transition metal", shortFact: "Yttrium is used in LEDs and lasers." },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: "91.224", category: "Transition metal", shortFact: "Zirconium resists corrosion in nuclear reactors." },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: "92.906", category: "Transition metal", shortFact: "Niobium helps make strong superconducting magnets." },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: "95.95", category: "Transition metal", shortFact: "Molybdenum strengthens steel at high temperatures." },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: "98", category: "Transition metal", shortFact: "Technetium was the first artificially produced element." },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: "101.07", category: "Transition metal", shortFact: "Ruthenium is used in electrical contacts." },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: "102.91", category: "Transition metal", shortFact: "Rhodium is valuable and used in catalytic converters." },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: "106.42", category: "Transition metal", shortFact: "Palladium absorbs large amounts of hydrogen." },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: "107.87", category: "Transition metal", shortFact: "Silver has the highest electrical conductivity of any element." },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: "112.41", category: "Transition metal", shortFact: "Cadmium was once common in rechargeable batteries." },
  { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: "114.82", category: "Post-transition metal", shortFact: "Indium helps make touchscreens conductive and transparent." },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: "118.71", category: "Post-transition metal", shortFact: "Tin is used to coat steel cans." },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: "121.76", category: "Metalloid", shortFact: "Antimony compounds are used in flame retardants." },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: "127.60", category: "Metalloid", shortFact: "Tellurium is used in some solar panels." },
  { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: "126.90", category: "Halogen", shortFact: "Iodine is needed for thyroid hormones." },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: "131.29", category: "Noble gas", shortFact: "Xenon can power bright flash lamps and ion engines." },
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", atomicMass: "132.91", category: "Alkali metal", shortFact: "Cesium helps define the atomic second." },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: "137.33", category: "Alkaline earth metal", shortFact: "Barium compounds can make fireworks green." },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: "138.91", category: "Lanthanide", shortFact: "Lanthanum is used in camera lenses and batteries." },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: "140.12", category: "Lanthanide", shortFact: "Cerium is used in lighter flints and polishing powders." },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: "140.91", category: "Lanthanide", shortFact: "Praseodymium helps color glass and ceramics." },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: "144.24", category: "Lanthanide", shortFact: "Neodymium makes powerful permanent magnets." },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: "145", category: "Lanthanide", shortFact: "Promethium is radioactive and very rare naturally." },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: "150.36", category: "Lanthanide", shortFact: "Samarium is used in strong magnets." },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: "151.96", category: "Lanthanide", shortFact: "Europium helps create red and blue phosphors." },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: "157.25", category: "Lanthanide", shortFact: "Gadolinium compounds are used in MRI contrast agents." },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: "158.93", category: "Lanthanide", shortFact: "Terbium contributes green light in displays." },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: "162.50", category: "Lanthanide", shortFact: "Dysprosium improves magnets for high-temperature use." },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: "164.93", category: "Lanthanide", shortFact: "Holmium has very strong magnetic properties." },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: "167.26", category: "Lanthanide", shortFact: "Erbium helps amplify fiber-optic signals." },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: "168.93", category: "Lanthanide", shortFact: "Thulium is among the rarest rare-earth elements." },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: "173.05", category: "Lanthanide", shortFact: "Ytterbium is used in lasers and atomic clocks." },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: "174.97", category: "Lanthanide", shortFact: "Lutetium is dense and useful in medical imaging crystals." },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: "178.49", category: "Transition metal", shortFact: "Hafnium absorbs neutrons in nuclear control rods." },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: "180.95", category: "Transition metal", shortFact: "Tantalum resists corrosion and stores charge in capacitors." },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: "183.84", category: "Transition metal", shortFact: "Tungsten has the highest melting point of any element." },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: "186.21", category: "Transition metal", shortFact: "Rhenium helps jet engines tolerate extreme heat." },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: "190.23", category: "Transition metal", shortFact: "Osmium is one of the densest naturally occurring elements." },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: "192.22", category: "Transition metal", shortFact: "Iridium is highly corrosion-resistant." },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: "195.08", category: "Transition metal", shortFact: "Platinum is used in catalysts and jewelry." },
  { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: "196.97", category: "Transition metal", shortFact: "Gold is prized for its color and resistance to tarnish." },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: "200.59", category: "Transition metal", shortFact: "Mercury is a liquid metal at room temperature." },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: "204.38", category: "Post-transition metal", shortFact: "Thallium compounds are very toxic." },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: "207.2", category: "Post-transition metal", shortFact: "Lead is dense and blocks radiation well." },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: "208.98", category: "Post-transition metal", shortFact: "Bismuth forms colorful staircase-like crystals." },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: "209", category: "Post-transition metal", shortFact: "Polonium is highly radioactive." },
  { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: "210", category: "Halogen", shortFact: "Astatine is one of the rarest naturally occurring elements." },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: "222", category: "Noble gas", shortFact: "Radon is a radioactive noble gas." },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: "223", category: "Alkali metal", shortFact: "Francium is extremely rare and radioactive." },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: "226", category: "Alkaline earth metal", shortFact: "Radium glows because it is intensely radioactive." },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: "227", category: "Actinide", shortFact: "Actinium gave the actinide series its name." },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: "232.04", category: "Actinide", shortFact: "Thorium has been explored as nuclear fuel." },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: "231.04", category: "Actinide", shortFact: "Protactinium is rare, dense, and radioactive." },
  { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: "238.03", category: "Actinide", shortFact: "Uranium is used as fuel in nuclear reactors." },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: "237", category: "Actinide", shortFact: "Neptunium was the first transuranium element discovered." },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: "244", category: "Actinide", shortFact: "Plutonium is used in some nuclear power systems." },
  { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: "243", category: "Actinide", shortFact: "Americium is used in many smoke detectors." },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: "247", category: "Actinide", shortFact: "Curium was named after Marie and Pierre Curie." },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: "247", category: "Actinide", shortFact: "Berkelium was named after Berkeley, California." },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: "251", category: "Actinide", shortFact: "Californium can be a strong neutron source." },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: "252", category: "Actinide", shortFact: "Einsteinium was named after Albert Einstein." },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: "257", category: "Actinide", shortFact: "Fermium was discovered in hydrogen bomb debris." },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: "258", category: "Actinide", shortFact: "Mendelevium honors periodic table pioneer Dmitri Mendeleev." },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: "259", category: "Actinide", shortFact: "Nobelium is named after Alfred Nobel." },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: "266", category: "Actinide", shortFact: "Lawrencium honors cyclotron inventor Ernest Lawrence." },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: "267", category: "Transition metal", shortFact: "Rutherfordium honors nuclear physicist Ernest Rutherford." },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: "268", category: "Transition metal", shortFact: "Dubnium is named after Dubna, Russia." },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: "269", category: "Transition metal", shortFact: "Seaborgium honors chemist Glenn Seaborg." },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: "270", category: "Transition metal", shortFact: "Bohrium honors physicist Niels Bohr." },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: "277", category: "Transition metal", shortFact: "Hassium was named for the German state of Hesse." },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: "278", category: "Unknown properties", shortFact: "Meitnerium honors physicist Lise Meitner." },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: "281", category: "Unknown properties", shortFact: "Darmstadtium is named after Darmstadt, Germany." },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: "282", category: "Unknown properties", shortFact: "Roentgenium honors X-ray discoverer Wilhelm Roentgen." },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: "285", category: "Transition metal", shortFact: "Copernicium honors astronomer Nicolaus Copernicus." },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: "286", category: "Unknown properties", shortFact: "Nihonium was the first element named from East Asia." },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: "289", category: "Post-transition metal", shortFact: "Flerovium honors the Flerov Laboratory in Russia." },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: "290", category: "Unknown properties", shortFact: "Moscovium is named after the Moscow region." },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: "293", category: "Unknown properties", shortFact: "Livermorium honors Lawrence Livermore National Laboratory." },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: "294", category: "Halogen", shortFact: "Tennessine recognizes nuclear research in Tennessee." },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: "294", category: "Noble gas", shortFact: "Oganesson is currently the heaviest named element." }
];

const milestones = new Set([11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 113]);
const quizMilestones = new Set([8, 11, 26, 36, 54, 79, 92, 118]);
const achievements = [
  { id: "firstMerge", name: "First Element Merge", text: "Merge your first pair of elements.", test: (s) => s.totalMerges >= 1 },
  { id: "nobleGas", name: "First Noble Gas", text: "Unlock Helium, the first noble gas.", test: (s) => s.highest >= 2 },
  { id: "alkaliExplorer", name: "Alkali Explorer", text: "Reach Sodium and enter a new spawn era.", test: (s) => s.highest >= 11 },
  { id: "transitionMaster", name: "Transition Master", text: "Reach Scandium, the first transition metal here.", test: (s) => s.highest >= 21 },
  { id: "heavyMetalCollector", name: "Heavy Metal Collector", text: "Reach Thallium or beyond.", test: (s) => s.highest >= 81 },
  { id: "atomicAscension", name: "Atomic Ascension", text: "Unlock 50 elements.", test: (s) => s.unlocked.size >= 50 },
  { id: "periodicElite", name: "Periodic Elite", text: "Unlock 100 elements.", test: (s) => s.unlocked.size >= 100 },
  { id: "oganesson", name: "Oganesson Reached", text: "Reach element 118.", test: (s) => s.highest >= 118 }
];

const state = {
  board: Array(16).fill(0),
  score: 0,
  bestScore: Number(localStorage.getItem("periodicBestScore") || 0),
  unlocked: new Set(JSON.parse(localStorage.getItem("periodicUnlocked") || "[1]")),
  sessionDiscovered: new Set(),
  achievements: new Set(JSON.parse(localStorage.getItem("periodicAchievements") || "[]")),
  sound: localStorage.getItem("periodicSound") !== "off",
  highest: 1,
  sessionHighest: 1,
  spawnMin: 1,
  totalMerges: Number(localStorage.getItem("periodicTotalMerges") || 0),
  pendingQuiz: null,
  gameOver: false,
  themeHue: 188,
  completedProgressions: new Set(),
  isAnimating: false
};

let audioContext;

const boardEl = document.querySelector("#board");
const scoreEl = document.querySelector("#score");
const bestEl = document.querySelector("#bestScore");
const highestEl = document.querySelector("#highestElement");
const eraNameEl = document.querySelector("#eraName");
const eraPoolEl = document.querySelector("#eraPool");
const eraNumberEl = document.querySelector("#eraNumber");
const eraRangeEl = document.querySelector("#eraRange");
const eraProgressEl = document.querySelector("#eraProgress");
const unlockCountEl = document.querySelector("#unlockCount");
const currentFactEl = document.querySelector("#currentFact");
const spawnLowCard = document.querySelector("#spawnLowCard");
const spawnHighCard = document.querySelector("#spawnHighCard");
const elementRail = document.querySelector("#elementRail");
const toastLayer = document.querySelector("#toastLayer");
const eraBanner = document.querySelector("#eraBanner");
const eraBannerPool = document.querySelector("#eraBannerPool");
const unlockModal = document.querySelector("#unlockModal");
const quizModal = document.querySelector("#quizModal");
const collectionModal = document.querySelector("#collectionModal");
const achievementsModal = document.querySelector("#achievementsModal");
const settingsModal = document.querySelector("#settingsModal");
const menuDrawer = document.querySelector("#menuDrawer");
const howModal = document.querySelector("#howModal");
const particleCanvas = document.querySelector("#particleCanvas");
const particles = [];
const MOVE_DURATION = 60;

function getElement(number) {
  return elements[number - 1];
}

function saveProgress() {
  localStorage.setItem("periodicBestScore", String(state.bestScore));
  localStorage.setItem("periodicUnlocked", JSON.stringify([...state.unlocked]));
  localStorage.setItem("periodicAchievements", JSON.stringify([...state.achievements]));
  localStorage.setItem("periodicSound", state.sound ? "on" : "off");
  localStorage.setItem("periodicTotalMerges", String(state.totalMerges));
}

function newGame() {
  state.board = Array(16).fill(0);
  state.score = 0;
  state.highest = Math.max(1, ...state.unlocked);
  state.sessionHighest = 1;
  state.sessionDiscovered = new Set();
  state.completedProgressions = new Set();
  state.spawnMin = 1;
  state.gameOver = false;
  state.isAnimating = false;
  const first = spawnTile();
  const second = spawnTile();
  render({ spawned: new Set([first, second].filter((index) => index >= 0)) });
  discoverElement(1);
}

function emptyCells() {
  return state.board.map((value, index) => value === 0 ? index : -1).filter((index) => index >= 0);
}

function spawnTile() {
  const empties = emptyCells();
  if (!empties.length) return -1;
  const pool = getSpawnPool();
  const value = Math.random() < 0.9 ? pool.low : pool.high;
  const index = empties[Math.floor(Math.random() * empties.length)];
  state.board[index] = Math.min(value, 118);
  return index;
}

function getSpawnPool() {
  return { low: state.spawnMin, high: Math.min(state.spawnMin + 1, 118) };
}

function applyProgressionConversions() {
  const transformed = new Set();
  const events = [];

  for (let reached = 11; reached <= Math.min(state.sessionHighest, 118); reached += 1) {
    const progressionLevel = reached - 10;
    if (state.completedProgressions.has(progressionLevel) || progressionLevel >= 118) continue;

    const from = progressionLevel;
    const to = progressionLevel + 1;
    state.board = state.board.map((value, index) => {
      if (value === from) {
        transformed.add(index);
        return to;
      }
      return value;
    });
    state.completedProgressions.add(progressionLevel);
    state.spawnMin = Math.min(to, 117);
    events.push({ from, to, low: to, high: Math.min(to + 1, 118) });
    state.unlocked.add(to);
  }

  return { transformed, events };
}

async function move(direction) {
  if (state.gameOver || state.isAnimating || unlockModal.open || quizModal.open) return;

  const plan = buildMovePlan(direction);
  if (!plan.moved) return;

  state.isAnimating = true;
  playSound(plan.mergedValues.length ? "merge" : "slide", Math.max(...plan.mergedValues, 1));
  await animateMove(plan);

  state.board = plan.next;
  for (const value of plan.mergedValues) {
    state.score += value;
    state.totalMerges += 1;
    discoverElement(value);
    burstForElement(value);
  }

  state.bestScore = Math.max(state.bestScore, state.score);
  updateHighest();
  const progression = applyProgressionConversions();
  const spawned = spawnTile();
  updateHighest();
  checkAchievements();
  render({
    merged: plan.mergedIndexes,
    spawned: new Set(spawned >= 0 ? [spawned] : []),
    transformed: progression.transformed
  });

  if (progression.events.length) {
    showEraBanner(progression.events[progression.events.length - 1]);
    progression.events.forEach((event) => {
      burstForElement(event.to);
      showToast(`All ${getElement(event.from).name} upgraded to ${getElement(event.to).name}`);
    });
  }

  if (!canMove()) {
    state.gameOver = true;
    showToast("Lab full. Start a new game to continue.");
    playSound("gameOver");
  }

  state.isAnimating = false;
  saveProgress();
}

function buildMovePlan(direction) {
  const next = Array(16).fill(0);
  const animations = [];
  const mergedValues = [];
  const mergedIndexes = new Set();

  for (const line of getLines(direction)) {
    const entries = line
      .map((index) => ({ index, value: state.board[index] }))
      .filter((entry) => entry.value);
    const packed = [];

    for (let i = 0; i < entries.length; i += 1) {
      const current = entries[i];
      const incoming = entries[i + 1];
      const targetIndex = line[packed.length];

      if (incoming && current.value === incoming.value && current.value < 118) {
        const merged = current.value + 1;
        packed.push(merged);
        next[targetIndex] = merged;
        mergedValues.push(merged);
        mergedIndexes.add(targetIndex);
        animations.push({ from: current.index, to: targetIndex, value: current.value, merge: true });
        animations.push({ from: incoming.index, to: targetIndex, value: incoming.value, merge: true });
        i += 1;
      } else {
        packed.push(current.value);
        next[targetIndex] = current.value;
        animations.push({ from: current.index, to: targetIndex, value: current.value, merge: false });
      }
    }
  }

  return {
    next,
    animations,
    mergedValues,
    mergedIndexes,
    moved: next.join(",") !== state.board.join(",")
  };
}

function animateMove(plan) {
  return new Promise((resolve) => {
    boardEl.innerHTML = "";
    renderCells();
    const movingTiles = plan.animations.map((item) => {
      const tile = createTile(item.value, item.from);
      if (item.merge) tile.classList.add("merging");
      boardEl.appendChild(tile);
      return { tile, to: item.to };
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        movingTiles.forEach((item) => positionElement(item.tile, item.to));
        setTimeout(() => {
          resolve();
        }, MOVE_DURATION + 10);
      });
    });
  });
}

function getLines(direction) {
  const rows = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
  ];
  const cols = [
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15]
  ];
  if (direction === "left") return rows;
  if (direction === "right") return rows.map((row) => [...row].reverse());
  if (direction === "up") return cols;
  return cols.map((col) => [...col].reverse());
}

function canMove() {
  if (emptyCells().length) return true;
  for (let i = 0; i < 16; i += 1) {
    const right = i % 4 !== 3 ? i + 1 : -1;
    const down = i < 12 ? i + 4 : -1;
    if ((right >= 0 && state.board[i] === state.board[right]) || (down >= 0 && state.board[i] === state.board[down])) {
      return true;
    }
  }
  return false;
}

function discoverElement(value) {
  if (value > 118 || state.sessionDiscovered.has(value)) return;
  state.unlocked.add(value);
  state.sessionDiscovered.add(value);
  updateHighest();
  showUnlockModal(getElement(value));
  if (quizMilestones.has(value)) {
    state.pendingQuiz = value;
  }
}

function updateHighest() {
  state.highest = Math.max(1, ...state.unlocked, ...state.board);
  state.sessionHighest = Math.max(1, state.sessionHighest, ...state.board);
}

function checkAchievements() {
  for (const item of achievements) {
    if (!state.achievements.has(item.id) && item.test(state)) {
      state.achievements.add(item.id);
      showToast(`Achievement unlocked: ${item.name}`);
    }
  }
}

function render(flags = {}) {
  const mergedSet = flags.merged || new Set();
  const spawnedSet = flags.spawned || new Set();
  const transformedSet = flags.transformed || new Set();
  boardEl.innerHTML = "";
  renderCells();
  state.board.forEach((value, index) => {
    if (!value) return;
    boardEl.appendChild(createTile(value, index, {
      merged: mergedSet.has(index),
      spawned: spawnedSet.has(index),
      transformed: transformedSet.has(index)
    }));
  });
  renderStats();
  renderElementRail();
}

function renderMovingTiles(animations, atTarget) {
  boardEl.innerHTML = "";
  renderCells();
  animations.forEach((item) => {
    const tile = createTile(item.value, atTarget ? item.to : item.from);
    if (item.merge) tile.classList.add("merging");
    boardEl.appendChild(tile);
  });
}

function renderCells() {
  for (let index = 0; index < 16; index += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    positionElement(cell, index);
    boardEl.appendChild(cell);
  }
}

function createTile(value, index, flags = {}) {
  const el = getElement(value);
  const tile = document.createElement("article");
  tile.className = `tile ${flags.merged ? "merged" : ""} ${flags.spawned ? "spawned" : ""} ${flags.transformed ? "transformed" : ""}`;
  positionElement(tile, index);
  applyElementStyle(tile, value);
  tile.innerHTML = `
    <span class="tile-number">${el.atomicNumber}</span>
    <strong class="tile-symbol">${el.symbol}</strong>
    <span class="tile-name">${el.name}</span>
    <span class="tile-mass">${el.atomicMass}</span>
  `;
  return tile;
}

function positionElement(node, index) {
  node.style.setProperty("--x", String(index % 4));
  node.style.setProperty("--y", String(Math.floor(index / 4)));
}

function renderStats() {
  const high = getElement(state.highest);
  const pool = getSpawnPool();
  const lowEl = getElement(pool.low);
  const highEl = getElement(pool.high);
  scoreEl.textContent = state.score.toLocaleString();
  bestEl.textContent = state.bestScore.toLocaleString();
  highestEl.textContent = `${high.symbol} ${high.atomicNumber}`;
  unlockCountEl.textContent = String(state.unlocked.size);
  currentFactEl.textContent = high.shortFact;
  eraNameEl.textContent = eraName();
  const eraLevel = Math.max(1, Math.min(12, state.spawnMin));
  eraNumberEl.textContent = String(eraLevel);
  eraRangeEl.textContent = `${state.spawnMin} - ${Math.min(state.spawnMin + 9, 118)}`;
  eraPoolEl.textContent = `Spawn pool: ${lowEl.symbol} 90% / ${highEl.symbol} 10%`;
  spawnLowCard.innerHTML = spawnCardHtml(lowEl, "90%");
  spawnHighCard.innerHTML = spawnCardHtml(highEl, "10%");
  applyElementStyle(spawnLowCard, lowEl.atomicNumber);
  applyElementStyle(spawnHighCard, highEl.atomicNumber);
  eraProgressEl.style.width = `${Math.min(100, (state.highest / 118) * 100)}%`;
  document.documentElement.style.setProperty("--cyan", `hsl(${state.themeHue} 100% 68%)`);
  document.querySelector("#soundIcon").textContent = state.sound ? "Sound" : "Mute";
  const soundSetting = document.querySelector("#soundSetting");
  if (soundSetting) soundSetting.checked = state.sound;
}

function spawnCardHtml(el, chance) {
  return `<small>${el.atomicNumber}</small><strong>${el.symbol}</strong><span>${chance}</span>`;
}

function renderElementRail() {
  if (!elementRail) return;
  const start = Math.max(1, Math.min(state.spawnMin, 108));
  const railElements = elements.slice(start - 1, Math.min(start + 10, 118));
  elementRail.innerHTML = "";
  railElements.forEach((el) => {
    const card = document.createElement("article");
    card.className = `rail-card ${state.unlocked.has(el.atomicNumber) || el.atomicNumber <= state.highest ? "" : "locked"}`;
    card.innerHTML = `<small>${el.atomicNumber}</small><strong>${el.symbol}</strong><small>${el.name}</small>`;
    applyElementStyle(card, el.atomicNumber);
    elementRail.appendChild(card);
  });
}

function tileBackground(value) {
  const style = elementVisual(value);
  return style.background;
}

function tileGlow(value) {
  return elementVisual(value).glow;
}

function applyElementStyle(node, value) {
  const style = elementVisual(value);
  node.style.background = style.background;
  node.style.setProperty("--tile-glow", style.glow);
  node.style.setProperty("--rail-bg", style.background);
  node.style.setProperty("--rail-line", style.line);
  node.style.setProperty("--rail-glow", style.glow);
}

function elementVisual(value) {
  const palette = [
    ["#1b86ff", "#071a43", "#55eaff"],
    ["#9b5cff", "#2a0d5c", "#b987ff"],
    ["#8d38ff", "#250a4f", "#b65cff"],
    ["#ff4f91", "#5a102c", "#ff73b8"],
    ["#ff8a2e", "#5c1c06", "#ff9d46"],
    ["#f2b43b", "#5a3908", "#ffd166"],
    ["#26d986", "#063b2a", "#72ffc2"],
    ["#21d8c2", "#06383b", "#5fffee"],
    ["#24e4ff", "#063145", "#55eaff"],
    ["#19bfd6", "#052d3b", "#55eaff"],
    ["#ffc531", "#533400", "#ffd166"]
  ];
  const picked = palette[(value - 1) % palette.length];
  return {
    background: `linear-gradient(145deg, ${picked[0]}, ${picked[1]})`,
    line: `${picked[2]}cc`,
    glow: `${picked[2]}88`
  };
}

function eraName() {
  const eraIndex = Math.floor((state.spawnMin - 1) / 2);
  const names = [
    "Genesis Era", "Light Matter Era", "Reactive Era", "Atmospheric Era",
    "Mineral Era", "Transition Era", "Rare Earth Era", "Heavy Core Era",
    "Actinide Era", "Synthetic Era", "Superheavy Era"
  ];
  return names[Math.min(eraIndex, names.length - 1)];
}

function showUnlockModal(el) {
  playSound("discover", el.atomicNumber);
  document.querySelector("#unlockHero").style.background = tileBackground(el.atomicNumber);
  document.querySelector("#unlockHero").style.setProperty("--tile-glow", tileGlow(el.atomicNumber));
  document.querySelector("#unlockHero").innerHTML = `
    <div>
      <span>${el.atomicNumber}</span>
      <strong class="tile-symbol">${el.symbol}</strong>
      <h2>${el.name}</h2>
      <p>${el.atomicMass} - ${el.category}</p>
    </div>
  `;
  document.querySelector("#unlockFact").innerHTML = `
    <p><strong>Atomic number:</strong> ${el.atomicNumber}</p>
    <p><strong>Atomic mass:</strong> ${el.atomicMass}</p>
    <p><strong>Category:</strong> ${el.category}</p>
    <p><strong>Fact:</strong> ${el.shortFact}</p>
    <p><strong>Real-world use:</strong> ${realWorldUse(el)}</p>
  `;
  if (!unlockModal.open) unlockModal.showModal();
}

function realWorldUse(el) {
  const uses = {
    Hydrogen: "Fuel cells, ammonia production, and rocket propellant.",
    Helium: "Cryogenic cooling, balloons, leak detection, and MRI magnets.",
    Lithium: "Rechargeable batteries, lightweight alloys, and mood-stabilizing medicine.",
    Carbon: "Steelmaking, filters, pencils, composites, and every living organism.",
    Oxygen: "Medical breathing support, steelmaking, and water treatment.",
    Silicon: "Computer chips, solar panels, glass, and sealants.",
    Iron: "Steel structures, tools, vehicles, and machinery.",
    Copper: "Electrical wiring, plumbing, motors, and electronics.",
    Silver: "Electronics, mirrors, jewelry, and antimicrobial coatings.",
    Gold: "Electronics, aerospace connectors, dentistry, and jewelry.",
    Uranium: "Nuclear reactor fuel and scientific research."
  };
  if (uses[el.name]) return uses[el.name];
  if (el.category.includes("Noble gas")) return "Lighting, lasers, controlled atmospheres, and specialized scientific instruments.";
  if (el.category.includes("Alkali")) return "Reactive chemistry, specialty materials, and laboratory research.";
  if (el.category.includes("Transition")) return "Alloys, catalysts, electronics, and high-performance industrial materials.";
  if (el.category.includes("Lanthanide")) return "Magnets, displays, lasers, batteries, and optical materials.";
  if (el.category.includes("Actinide")) return "Nuclear science, energy research, and specialized detectors.";
  return "Used in materials science, manufacturing, medicine, or laboratory research depending on its compounds.";
}

function showQuiz(value) {
  const el = getElement(value);
  const quiz = makeQuiz(el);
  document.querySelector("#quizQuestion").textContent = quiz.question;
  document.querySelector("#quizFeedback").textContent = "";
  const options = document.querySelector("#quizOptions");
  options.innerHTML = "";
  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      const correct = option === quiz.answer;
      if (correct) {
        state.score += 25;
        state.bestScore = Math.max(state.bestScore, state.score);
        document.querySelector("#quizFeedback").textContent = "Correct. Bonus +25";
        playSound("quizCorrect");
      } else {
        document.querySelector("#quizFeedback").textContent = `Correct answer: ${quiz.answer}`;
        playSound("quizWrong");
      }
      saveProgress();
      render();
      setTimeout(() => quizModal.close(), 900);
    });
    options.appendChild(button);
  });
  quizModal.showModal();
}

function makeQuiz(el) {
  const type = el.atomicNumber % 3;
  if (type === 0) {
    return buildOptions(`What is the symbol of ${el.name}?`, el.symbol, elements.map((item) => item.symbol));
  }
  if (type === 1) {
    return buildOptions(`What is the atomic number of ${el.name}?`, String(el.atomicNumber), elements.map((item) => String(item.atomicNumber)));
  }
  return buildOptions(`Which element has symbol ${el.symbol}?`, el.name, elements.map((item) => item.name));
}

function buildOptions(question, answer, source) {
  const options = new Set([answer]);
  while (options.size < 4) {
    options.add(source[Math.floor(Math.random() * source.length)]);
  }
  return { question, answer, options: [...options].sort(() => Math.random() - 0.5) };
}

function showEraBanner(event = null) {
  playSound("era");
  const pool = getSpawnPool();
  const active = event || { low: pool.low, high: pool.high };
  const message = event ? `All ${getElement(event.from).name} upgraded to ${getElement(event.to).name}` : "Spawn matrix recalibrated";
  document.querySelector("#eraBannerMessage").textContent = message;
  eraBannerPool.textContent = `${getElement(active.low).symbol} 90% / ${getElement(active.high).symbol} 10%`;
  eraBanner.classList.remove("show");
  void eraBanner.offsetWidth;
  eraBanner.classList.add("show");
  state.themeHue = (state.themeHue + 34) % 360;
  renderStats();
}

function renderCollection() {
  const grid = document.querySelector("#collectionGrid");
  const query = (document.querySelector("#collectionSearch")?.value || "").trim().toLowerCase();
  grid.innerHTML = "";
  elements
    .filter((el) => !query || `${el.atomicNumber} ${el.symbol} ${el.name} ${el.category}`.toLowerCase().includes(query))
    .forEach((el) => {
    const card = document.createElement("article");
    const unlocked = state.unlocked.has(el.atomicNumber);
    card.className = `collection-card ${unlocked ? "" : "locked"}`;
    if (unlocked) {
      card.innerHTML = `
        <small>${el.atomicNumber}</small>
        <strong>${el.symbol}</strong>
        <span>${el.name}</span>
        <small>${el.atomicMass}</small>
      `;
    } else {
      card.innerHTML = `<strong>?</strong><small>${el.atomicNumber}</small>`;
    }
    grid.appendChild(card);
  });
}

function renderAchievements() {
  const list = document.querySelector("#achievementsList");
  list.innerHTML = "";
  achievements.forEach((item) => {
    const unlocked = state.achievements.has(item.id);
    const card = document.createElement("article");
    card.className = `achievement-card ${unlocked ? "unlocked" : ""}`;
    card.innerHTML = `<strong>${unlocked ? "Unlocked" : "Locked"} - ${item.name}</strong><p>${item.text}</p>`;
    list.appendChild(card);
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastLayer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function getAudioContext() {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    return audioContext;
  } catch {
    state.sound = false;
    return null;
  }
}

function tone(frequency, start, duration, options = {}) {
  const context = getAudioContext();
  if (!context) return;
  const osc = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  const now = context.currentTime + start;
  const volume = options.volume ?? 0.055;
  const attack = options.attack ?? 0.01;
  const wave = options.wave ?? "triangle";

  osc.type = wave;
  osc.frequency.setValueAtTime(frequency, now);
  if (options.endFrequency) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, options.endFrequency), now + duration);
  }
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(options.filter ?? 4200, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter).connect(gain).connect(context.destination);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

function noise(start, duration, volume = 0.035) {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime + start;
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * duration), context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  const source = context.createBufferSource();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 1200;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(context.destination);
  source.start(now);
}

function playSound(type, value = 1) {
  if (!state.sound) return;
  const pitch = Math.min(36, value) * 7;

  if (type === "slide") {
    tone(180, 0, 0.055, { endFrequency: 260, volume: 0.022, wave: "sine", filter: 1800 });
    return;
  }

  if (type === "merge") {
    tone(330 + pitch, 0, 0.095, { volume: 0.045, wave: "triangle" });
    tone(495 + pitch, 0.025, 0.12, { volume: 0.04, wave: "square", filter: 2600 });
    tone(660 + pitch, 0.055, 0.16, { volume: 0.032, wave: "triangle" });
    noise(0.01, 0.08, 0.018);
    return;
  }

  if (type === "discover") {
    [392, 523.25, 659.25, 783.99].forEach((freq, index) => {
      tone(freq + pitch, index * 0.055, 0.2, { volume: 0.044, wave: "triangle", filter: 5200 });
    });
    noise(0.06, 0.16, 0.02);
    return;
  }

  if (type === "era") {
    tone(196, 0, 0.32, { endFrequency: 392, volume: 0.042, wave: "sawtooth", filter: 1800 });
    tone(392, 0.12, 0.32, { endFrequency: 784, volume: 0.038, wave: "triangle", filter: 5200 });
    tone(987.77, 0.28, 0.24, { volume: 0.032, wave: "sine", filter: 6200 });
    noise(0.08, 0.28, 0.024);
    return;
  }

  if (type === "quizCorrect") {
    tone(523.25, 0, 0.12, { volume: 0.045 });
    tone(659.25, 0.06, 0.14, { volume: 0.04 });
    tone(880, 0.13, 0.18, { volume: 0.035 });
    return;
  }

  if (type === "quizWrong") {
    tone(220, 0, 0.16, { endFrequency: 164.81, volume: 0.035, wave: "sine", filter: 1200 });
    tone(146.83, 0.08, 0.18, { volume: 0.026, wave: "sine", filter: 900 });
    return;
  }

  if (type === "gameOver") {
    tone(392, 0, 0.18, { endFrequency: 293.66, volume: 0.035, wave: "triangle" });
    tone(293.66, 0.12, 0.22, { endFrequency: 196, volume: 0.032, wave: "triangle" });
    tone(146.83, 0.3, 0.34, { volume: 0.028, wave: "sine", filter: 1100 });
  }
}

function beep(frequency) {
  const context = getAudioContext();
  if (!context) return;
  try {
    const osc = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    osc.frequency.value = frequency;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.045, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    osc.connect(gain).connect(context.destination);
    osc.start();
    osc.stop(now + 0.13);
  } catch {
    state.sound = false;
  }
}

function burstForElement(value) {
  for (let i = 0; i < 14; i += 1) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 180,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 180,
      vx: (Math.random() - 0.5) * 1.8,
      vy: (Math.random() - 0.5) * 1.8,
      life: 46,
      hue: (value * 27 + state.themeHue) % 360
    });
  }
}

function drawParticles() {
  const ctx = particleCanvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  if (particleCanvas.width !== Math.floor(window.innerWidth * ratio)) {
    particleCanvas.width = Math.floor(window.innerWidth * ratio);
    particleCanvas.height = Math.floor(window.innerHeight * ratio);
  }
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 1;
    ctx.beginPath();
    ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life / 46})`;
    ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  }
  requestAnimationFrame(drawParticles);
}

function setupEvents() {
  document.addEventListener("keydown", (event) => {
    const map = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
    if (!map[event.key]) return;
    event.preventDefault();
    move(map[event.key]);
  });

  let startX = 0;
  let startY = 0;
  boardEl.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
    startY = event.clientY;
    boardEl.setPointerCapture(event.pointerId);
  });
  boardEl.addEventListener("pointerup", (event) => {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 16) return;
    move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
  });

  document.querySelector("#newGameBtn").addEventListener("click", newGame);
  document.querySelector("#menuBtn").addEventListener("click", () => menuDrawer.showModal());
  document.querySelector("#collectionBtn").addEventListener("click", () => {
    menuDrawer.close();
    renderCollection();
    collectionModal.showModal();
  });
  document.querySelector("#achievementsBtn").addEventListener("click", () => {
    menuDrawer.close();
    renderAchievements();
    achievementsModal.showModal();
  });
  document.querySelector("#settingsBtn").addEventListener("click", () => {
    menuDrawer.close();
    document.querySelector("#soundSetting").checked = state.sound;
    settingsModal.showModal();
  });
  document.querySelector("#howBtn").addEventListener("click", () => {
    menuDrawer.close();
    howModal.showModal();
  });
  document.querySelector("#soundToggle").addEventListener("click", () => {
    state.sound = !state.sound;
    saveProgress();
    render();
  });
  document.querySelector("#soundSetting").addEventListener("change", (event) => {
    state.sound = event.target.checked;
    saveProgress();
    render();
  });
  document.querySelector("#collectionSearch").addEventListener("input", renderCollection);
  document.querySelector("#resetProgressBtn").addEventListener("click", () => {
    localStorage.removeItem("periodicBestScore");
    localStorage.removeItem("periodicUnlocked");
    localStorage.removeItem("periodicAchievements");
    localStorage.removeItem("periodicTotalMerges");
    state.bestScore = 0;
    state.unlocked = new Set([1]);
    state.achievements = new Set();
    state.totalMerges = 0;
    settingsModal.close();
    newGame();
    showToast("Saved progress reset.");
  });
  document.querySelectorAll(".close-dialog").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog").close());
  });
  document.querySelector("#unlockContinue").addEventListener("click", () => {
    unlockModal.close();
    if (state.pendingQuiz) {
      const quizValue = state.pendingQuiz;
      state.pendingQuiz = null;
      showQuiz(quizValue);
    }
  });
  document.querySelector("#quizSkip").addEventListener("click", () => quizModal.close());
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

setupEvents();
newGame();
checkAchievements();
drawParticles();
registerServiceWorker();
