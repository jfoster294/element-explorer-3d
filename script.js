const categoryColors = {
  "Nonmetal": "#67e8f9",
  "Noble Gas": "#a78bfa",
  "Alkali Metal": "#fb7185",
  "Alkaline Earth Metal": "#facc15",
  "Metalloid": "#22c55e",
  "Halogen": "#38bdf8",
  "Post-transition Metal": "#fb923c",
  "Transition Metal": "#60a5fa",
  "Lanthanide": "#f472b6",
  "Actinide": "#c084fc"
};

const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", category: "Nonmetal", group: 1, period: 1, col: 1, row: 1 },
  { number: 2, symbol: "He", name: "Helium", category: "Noble Gas", group: 18, period: 1, col: 18, row: 1 },
  { number: 3, symbol: "Li", name: "Lithium", category: "Alkali Metal", group: 1, period: 2, col: 1, row: 2 },
  { number: 4, symbol: "Be", name: "Beryllium", category: "Alkaline Earth Metal", group: 2, period: 2, col: 2, row: 2 },
  { number: 5, symbol: "B", name: "Boron", category: "Metalloid", group: 13, period: 2, col: 13, row: 2 },
  { number: 6, symbol: "C", name: "Carbon", category: "Nonmetal", group: 14, period: 2, col: 14, row: 2 },
  { number: 7, symbol: "N", name: "Nitrogen", category: "Nonmetal", group: 15, period: 2, col: 15, row: 2 },
  { number: 8, symbol: "O", name: "Oxygen", category: "Nonmetal", group: 16, period: 2, col: 16, row: 2 },
  { number: 9, symbol: "F", name: "Fluorine", category: "Halogen", group: 17, period: 2, col: 17, row: 2 },
  { number: 10, symbol: "Ne", name: "Neon", category: "Noble Gas", group: 18, period: 2, col: 18, row: 2 },

  { number: 11, symbol: "Na", name: "Sodium", category: "Alkali Metal", group: 1, period: 3, col: 1, row: 3 },
  { number: 12, symbol: "Mg", name: "Magnesium", category: "Alkaline Earth Metal", group: 2, period: 3, col: 2, row: 3 },
  { number: 13, symbol: "Al", name: "Aluminum", category: "Post-transition Metal", group: 13, period: 3, col: 13, row: 3 },
  { number: 14, symbol: "Si", name: "Silicon", category: "Metalloid", group: 14, period: 3, col: 14, row: 3 },
  { number: 15, symbol: "P", name: "Phosphorus", category: "Nonmetal", group: 15, period: 3, col: 15, row: 3 },
  { number: 16, symbol: "S", name: "Sulfur", category: "Nonmetal", group: 16, period: 3, col: 16, row: 3 },
  { number: 17, symbol: "Cl", name: "Chlorine", category: "Halogen", group: 17, period: 3, col: 17, row: 3 },
  { number: 18, symbol: "Ar", name: "Argon", category: "Noble Gas", group: 18, period: 3, col: 18, row: 3 },

  { number: 19, symbol: "K", name: "Potassium", category: "Alkali Metal", group: 1, period: 4, col: 1, row: 4 },
  { number: 20, symbol: "Ca", name: "Calcium", category: "Alkaline Earth Metal", group: 2, period: 4, col: 2, row: 4 },
  { number: 21, symbol: "Sc", name: "Scandium", category: "Transition Metal", group: 3, period: 4, col: 3, row: 4 },
  { number: 22, symbol: "Ti", name: "Titanium", category: "Transition Metal", group: 4, period: 4, col: 4, row: 4 },
  { number: 23, symbol: "V", name: "Vanadium", category: "Transition Metal", group: 5, period: 4, col: 5, row: 4 },
  { number: 24, symbol: "Cr", name: "Chromium", category: "Transition Metal", group: 6, period: 4, col: 6, row: 4 },
  { number: 25, symbol: "Mn", name: "Manganese", category: "Transition Metal", group: 7, period: 4, col: 7, row: 4 },
  { number: 26, symbol: "Fe", name: "Iron", category: "Transition Metal", group: 8, period: 4, col: 8, row: 4 },
  { number: 27, symbol: "Co", name: "Cobalt", category: "Transition Metal", group: 9, period: 4, col: 9, row: 4 },
  { number: 28, symbol: "Ni", name: "Nickel", category: "Transition Metal", group: 10, period: 4, col: 10, row: 4 },
  { number: 29, symbol: "Cu", name: "Copper", category: "Transition Metal", group: 11, period: 4, col: 11, row: 4 },
  { number: 30, symbol: "Zn", name: "Zinc", category: "Transition Metal", group: 12, period: 4, col: 12, row: 4 },
  { number: 31, symbol: "Ga", name: "Gallium", category: "Post-transition Metal", group: 13, period: 4, col: 13, row: 4 },
  { number: 32, symbol: "Ge", name: "Germanium", category: "Metalloid", group: 14, period: 4, col: 14, row: 4 },
  { number: 33, symbol: "As", name: "Arsenic", category: "Metalloid", group: 15, period: 4, col: 15, row: 4 },
  { number: 34, symbol: "Se", name: "Selenium", category: "Nonmetal", group: 16, period: 4, col: 16, row: 4 },
  { number: 35, symbol: "Br", name: "Bromine", category: "Halogen", group: 17, period: 4, col: 17, row: 4 },
  { number: 36, symbol: "Kr", name: "Krypton", category: "Noble Gas", group: 18, period: 4, col: 18, row: 4 },

  { number: 37, symbol: "Rb", name: "Rubidium", category: "Alkali Metal", group: 1, period: 5, col: 1, row: 5 },
  { number: 38, symbol: "Sr", name: "Strontium", category: "Alkaline Earth Metal", group: 2, period: 5, col: 2, row: 5 },
  { number: 39, symbol: "Y", name: "Yttrium", category: "Transition Metal", group: 3, period: 5, col: 3, row: 5 },
  { number: 40, symbol: "Zr", name: "Zirconium", category: "Transition Metal", group: 4, period: 5, col: 4, row: 5 },
  { number: 41, symbol: "Nb", name: "Niobium", category: "Transition Metal", group: 5, period: 5, col: 5, row: 5 },
  { number: 42, symbol: "Mo", name: "Molybdenum", category: "Transition Metal", group: 6, period: 5, col: 6, row: 5 },
  { number: 43, symbol: "Tc", name: "Technetium", category: "Transition Metal", group: 7, period: 5, col: 7, row: 5 },
  { number: 44, symbol: "Ru", name: "Ruthenium", category: "Transition Metal", group: 8, period: 5, col: 8, row: 5 },
  { number: 45, symbol: "Rh", name: "Rhodium", category: "Transition Metal", group: 9, period: 5, col: 9, row: 5 },
  { number: 46, symbol: "Pd", name: "Palladium", category: "Transition Metal", group: 10, period: 5, col: 10, row: 5 },
  { number: 47, symbol: "Ag", name: "Silver", category: "Transition Metal", group: 11, period: 5, col: 11, row: 5 },
  { number: 48, symbol: "Cd", name: "Cadmium", category: "Transition Metal", group: 12, period: 5, col: 12, row: 5 },
  { number: 49, symbol: "In", name: "Indium", category: "Post-transition Metal", group: 13, period: 5, col: 13, row: 5 },
  { number: 50, symbol: "Sn", name: "Tin", category: "Post-transition Metal", group: 14, period: 5, col: 14, row: 5 },
  { number: 51, symbol: "Sb", name: "Antimony", category: "Metalloid", group: 15, period: 5, col: 15, row: 5 },
  { number: 52, symbol: "Te", name: "Tellurium", category: "Metalloid", group: 16, period: 5, col: 16, row: 5 },
  { number: 53, symbol: "I", name: "Iodine", category: "Halogen", group: 17, period: 5, col: 17, row: 5 },
  { number: 54, symbol: "Xe", name: "Xenon", category: "Noble Gas", group: 18, period: 5, col: 18, row: 5 },

  { number: 55, symbol: "Cs", name: "Cesium", category: "Alkali Metal", group: 1, period: 6, col: 1, row: 6 },
  { number: 56, symbol: "Ba", name: "Barium", category: "Alkaline Earth Metal", group: 2, period: 6, col: 2, row: 6 },
  { number: 57, symbol: "La", name: "Lanthanum", category: "Lanthanide", group: 3, period: 6, col: 3, row: 6 },
  { number: 58, symbol: "Ce", name: "Cerium", category: "Lanthanide", group: 3, period: 6, col: 4, row: 8 },
  { number: 59, symbol: "Pr", name: "Praseodymium", category: "Lanthanide", group: 3, period: 6, col: 5, row: 8 },
  { number: 60, symbol: "Nd", name: "Neodymium", category: "Lanthanide", group: 3, period: 6, col: 6, row: 8 },
  { number: 61, symbol: "Pm", name: "Promethium", category: "Lanthanide", group: 3, period: 6, col: 7, row: 8 },
  { number: 62, symbol: "Sm", name: "Samarium", category: "Lanthanide", group: 3, period: 6, col: 8, row: 8 },
  { number: 63, symbol: "Eu", name: "Europium", category: "Lanthanide", group: 3, period: 6, col: 9, row: 8 },
  { number: 64, symbol: "Gd", name: "Gadolinium", category: "Lanthanide", group: 3, period: 6, col: 10, row: 8 },
  { number: 65, symbol: "Tb", name: "Terbium", category: "Lanthanide", group: 3, period: 6, col: 11, row: 8 },
  { number: 66, symbol: "Dy", name: "Dysprosium", category: "Lanthanide", group: 3, period: 6, col: 12, row: 8 },
  { number: 67, symbol: "Ho", name: "Holmium", category: "Lanthanide", group: 3, period: 6, col: 13, row: 8 },
  { number: 68, symbol: "Er", name: "Erbium", category: "Lanthanide", group: 3, period: 6, col: 14, row: 8 },
  { number: 69, symbol: "Tm", name: "Thulium", category: "Lanthanide", group: 3, period: 6, col: 15, row: 8 },
  { number: 70, symbol: "Yb", name: "Ytterbium", category: "Lanthanide", group: 3, period: 6, col: 16, row: 8 },
  { number: 71, symbol: "Lu", name: "Lutetium", category: "Lanthanide", group: 3, period: 6, col: 17, row: 8 },

  { number: 72, symbol: "Hf", name: "Hafnium", category: "Transition Metal", group: 4, period: 6, col: 4, row: 6 },
  { number: 73, symbol: "Ta", name: "Tantalum", category: "Transition Metal", group: 5, period: 6, col: 5, row: 6 },
  { number: 74, symbol: "W", name: "Tungsten", category: "Transition Metal", group: 6, period: 6, col: 6, row: 6 },
  { number: 75, symbol: "Re", name: "Rhenium", category: "Transition Metal", group: 7, period: 6, col: 7, row: 6 },
  { number: 76, symbol: "Os", name: "Osmium", category: "Transition Metal", group: 8, period: 6, col: 8, row: 6 },
  { number: 77, symbol: "Ir", name: "Iridium", category: "Transition Metal", group: 9, period: 6, col: 9, row: 6 },
  { number: 78, symbol: "Pt", name: "Platinum", category: "Transition Metal", group: 10, period: 6, col: 10, row: 6 },
  { number: 79, symbol: "Au", name: "Gold", category: "Transition Metal", group: 11, period: 6, col: 11, row: 6 },
  { number: 80, symbol: "Hg", name: "Mercury", category: "Transition Metal", group: 12, period: 6, col: 12, row: 6 },
  { number: 81, symbol: "Tl", name: "Thallium", category: "Post-transition Metal", group: 13, period: 6, col: 13, row: 6 },
  { number: 82, symbol: "Pb", name: "Lead", category: "Post-transition Metal", group: 14, period: 6, col: 14, row: 6 },
  { number: 83, symbol: "Bi", name: "Bismuth", category: "Post-transition Metal", group: 15, period: 6, col: 15, row: 6 },
  { number: 84, symbol: "Po", name: "Polonium", category: "Metalloid", group: 16, period: 6, col: 16, row: 6 },
  { number: 85, symbol: "At", name: "Astatine", category: "Halogen", group: 17, period: 6, col: 17, row: 6 },
  { number: 86, symbol: "Rn", name: "Radon", category: "Noble Gas", group: 18, period: 6, col: 18, row: 6 },

  { number: 87, symbol: "Fr", name: "Francium", category: "Alkali Metal", group: 1, period: 7, col: 1, row: 7 },
  { number: 88, symbol: "Ra", name: "Radium", category: "Alkaline Earth Metal", group: 2, period: 7, col: 2, row: 7 },
  { number: 89, symbol: "Ac", name: "Actinium", category: "Actinide", group: 3, period: 7, col: 3, row: 7 },
  { number: 90, symbol: "Th", name: "Thorium", category: "Actinide", group: 3, period: 7, col: 4, row: 9 },
  { number: 91, symbol: "Pa", name: "Protactinium", category: "Actinide", group: 3, period: 7, col: 5, row: 9 },
  { number: 92, symbol: "U", name: "Uranium", category: "Actinide", group: 3, period: 7, col: 6, row: 9 },
  { number: 93, symbol: "Np", name: "Neptunium", category: "Actinide", group: 3, period: 7, col: 7, row: 9 },
  { number: 94, symbol: "Pu", name: "Plutonium", category: "Actinide", group: 3, period: 7, col: 8, row: 9 },
  { number: 95, symbol: "Am", name: "Americium", category: "Actinide", group: 3, period: 7, col: 9, row: 9 },
  { number: 96, symbol: "Cm", name: "Curium", category: "Actinide", group: 3, period: 7, col: 10, row: 9 },
  { number: 97, symbol: "Bk", name: "Berkelium", category: "Actinide", group: 3, period: 7, col: 11, row: 9 },
  { number: 98, symbol: "Cf", name: "Californium", category: "Actinide", group: 3, period: 7, col: 12, row: 9 },
  { number: 99, symbol: "Es", name: "Einsteinium", category: "Actinide", group: 3, period: 7, col: 13, row: 9 },
  { number: 100, symbol: "Fm", name: "Fermium", category: "Actinide", group: 3, period: 7, col: 14, row: 9 },
  { number: 101, symbol: "Md", name: "Mendelevium", category: "Actinide", group: 3, period: 7, col: 15, row: 9 },
  { number: 102, symbol: "No", name: "Nobelium", category: "Actinide", group: 3, period: 7, col: 16, row: 9 },
  { number: 103, symbol: "Lr", name: "Lawrencium", category: "Actinide", group: 3, period: 7, col: 17, row: 9 },

  { number: 104, symbol: "Rf", name: "Rutherfordium", category: "Transition Metal", group: 4, period: 7, col: 4, row: 7 },
  { number: 105, symbol: "Db", name: "Dubnium", category: "Transition Metal", group: 5, period: 7, col: 5, row: 7 },
  { number: 106, symbol: "Sg", name: "Seaborgium", category: "Transition Metal", group: 6, period: 7, col: 6, row: 7 },
  { number: 107, symbol: "Bh", name: "Bohrium", category: "Transition Metal", group: 7, period: 7, col: 7, row: 7 },
  { number: 108, symbol: "Hs", name: "Hassium", category: "Transition Metal", group: 8, period: 7, col: 8, row: 7 },
  { number: 109, symbol: "Mt", name: "Meitnerium", category: "Transition Metal", group: 9, period: 7, col: 9, row: 7 },
  { number: 110, symbol: "Ds", name: "Darmstadtium", category: "Transition Metal", group: 10, period: 7, col: 10, row: 7 },
  { number: 111, symbol: "Rg", name: "Roentgenium", category: "Transition Metal", group: 11, period: 7, col: 11, row: 7 },
  { number: 112, symbol: "Cn", name: "Copernicium", category: "Transition Metal", group: 12, period: 7, col: 12, row: 7 },
  { number: 113, symbol: "Nh", name: "Nihonium", category: "Post-transition Metal", group: 13, period: 7, col: 13, row: 7 },
  { number: 114, symbol: "Fl", name: "Flerovium", category: "Post-transition Metal", group: 14, period: 7, col: 14, row: 7 },
  { number: 115, symbol: "Mc", name: "Moscovium", category: "Post-transition Metal", group: 15, period: 7, col: 15, row: 7 },
  { number: 116, symbol: "Lv", name: "Livermorium", category: "Post-transition Metal", group: 16, period: 7, col: 16, row: 7 },
  { number: 117, symbol: "Ts", name: "Tennessine", category: "Halogen", group: 17, period: 7, col: 17, row: 7 },
  { number: 118, symbol: "Og", name: "Oganesson", category: "Noble Gas", group: 18, period: 7, col: 18, row: 7 }
];

const periodicTable = document.getElementById("periodicTable");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const clearButton = document.getElementById("clearButton");
const resultCount = document.getElementById("resultCount");
const legend = document.getElementById("legend");

if (periodicTable) {
  setupPeriodicTable();
}

function setupPeriodicTable() {
  renderCategoryFilter();
  renderLegend();
  renderPeriodicTable();

  searchInput.addEventListener("input", renderPeriodicTable);
  categoryFilter.addEventListener("change", renderPeriodicTable);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    renderPeriodicTable();
  });
}

function renderCategoryFilter() {
  const categories = Object.keys(categoryColors);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderLegend() {
  legend.innerHTML = "";

  Object.entries(categoryColors).forEach(([category, color]) => {
    const item = document.createElement("div");
    item.className = "legend-item";

    item.innerHTML = `
      <span class="legend-dot" style="background: ${color}"></span>
      ${category}
    `;

    legend.appendChild(item);
  });
}

function renderPeriodicTable() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  periodicTable.innerHTML = "";

  let visibleCount = 0;

  elements.forEach((element) => {
    const matchesSearch = `
      ${element.name}
      ${element.symbol}
      ${element.number}
      ${element.category}
    `.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" || element.category === selectedCategory;

    const isVisible = matchesSearch && matchesCategory;

    if (isVisible) {
      visibleCount += 1;
    }

    const link = document.createElement("a");
    link.href = `model.html?element=${element.number}`;
    link.className = `element-card ${isVisible ? "" : "hidden"}`;
    link.style.gridColumn = element.col;
    link.style.gridRow = element.row;
    link.style.setProperty("--category-color", categoryColors[element.category]);

    link.innerHTML = `
      <span class="element-number">${element.number}</span>
      <span class="element-symbol">${element.symbol}</span>
      <span class="element-name">${element.name}</span>
    `;

    periodicTable.appendChild(link);
  });

  resultCount.textContent = `Showing ${visibleCount} of ${elements.length} elements`;
}
