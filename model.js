const urlParams = new URLSearchParams(window.location.search);
const elementNumber = Number(urlParams.get("element")) || 1;

const element = elements.find((item) => item.number === elementNumber) || elements[0];

const elementName = document.getElementById("elementName");
const elementSubtitle = document.getElementById("elementSubtitle");
const atomScene = document.getElementById("atomScene");
const elementTile = document.getElementById("elementTile");

const atomicNumber = document.getElementById("atomicNumber");
const elementSymbol = document.getElementById("elementSymbol");
const elementCategory = document.getElementById("elementCategory");
const elementPeriod = document.getElementById("elementPeriod");
const elementGroup = document.getElementById("elementGroup");
const electronShells = document.getElementById("electronShells");
const shellList = document.getElementById("shellList");

renderElementModel(element);

function renderElementModel(selectedElement) {
  const color = categoryColors[selectedElement.category];
  const shells = getElectronShells(selectedElement.number);

  document.documentElement.style.setProperty("--category-color", color);

  elementName.textContent = selectedElement.name;
  elementSubtitle.textContent = `${selectedElement.symbol} • Atomic number ${selectedElement.number}`;

  atomicNumber.textContent = selectedElement.number;
  elementSymbol.textContent = selectedElement.symbol;
  elementCategory.textContent = selectedElement.category;
  elementPeriod.textContent = selectedElement.period;
  elementGroup.textContent = selectedElement.group;
  electronShells.textContent = shells.length;

  elementTile.style.setProperty("--category-color", color);
  elementTile.innerHTML = `
    <span>Atomic Number ${selectedElement.number}</span>
    <strong>${selectedElement.symbol}</strong>
    <h2>${selectedElement.name}</h2>
  `;

  renderAtomScene(selectedElement, shells, color);
  renderShellList(shells, color);
}

function getElectronShells(atomicNumber) {
  const capacities = [2, 8, 18, 32, 32, 18, 8];
  let remaining = atomicNumber;
  const shells = [];

  capacities.forEach((capacity) => {
    if (remaining <= 0) {
      return;
    }

    const electrons = Math.min(capacity, remaining);
    shells.push(electrons);
    remaining -= electrons;
  });

  return shells;
}

function renderAtomScene(selectedElement, shells, color) {
  atomScene.innerHTML = "";
  atomScene.style.setProperty("--category-color", color);

  const nucleus = document.createElement("div");
  nucleus.className = "nucleus";
  nucleus.textContent = selectedElement.symbol;
  nucleus.style.setProperty("--category-color", color);

  atomScene.appendChild(nucleus);

  shells.forEach((electronCount, shellIndex) => {
    const shell = document.createElement("div");
    shell.className = "shell";

    const size = 170 + shellIndex * 72;
    const radius = size / 2;

    shell.style.width = `${size}px`;
    shell.style.height = `${size}px`;
    shell.style.animationDuration = `${10 + shellIndex * 4}s`;
    shell.style.setProperty("--category-color", color);

    if (shellIndex % 3 === 0) {
      shell.style.transform = "rotateX(68deg)";
    }

    if (shellIndex % 3 === 1) {
      shell.style.transform = "rotateY(68deg)";
    }

    if (shellIndex % 3 === 2) {
      shell.style.transform = "rotateX(58deg) rotateY(38deg)";
    }

    for (let i = 0; i < electronCount; i++) {
      const electron = document.createElement("span");
      electron.className = "electron";

      const angle = (360 / electronCount) * i;

      electron.style.transform = `
        rotate(${angle}deg)
        translateX(${radius}px)
        translate(-50%, -50%)
      `;

      shell.appendChild(electron);
    }

    atomScene.appendChild(shell);
  });
}

function renderShellList(shells, color) {
  shellList.innerHTML = "";

  const maxShell = Math.max(...shells);

  shells.forEach((count, index) => {
    const row = document.createElement("div");
    row.className = "shell-row";

    const width = (count / maxShell) * 100;

    row.innerHTML = `
      <span>Shell ${index + 1}</span>

      <div class="shell-track">
        <div class="shell-fill" style="width: ${width}%; background: ${color}"></div>
      </div>

      <strong>${count}e−</strong>
    `;

    shellList.appendChild(row);
  });
}
