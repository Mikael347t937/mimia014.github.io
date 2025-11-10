let gemsPerClick = 1;
let cps = 1;
let gems = 1;
let upgrade = 10;
let level = 0;
let clickerIncrease = 1;
let autoClickerCost = 50;
let autoClickerLevel = 0;
let autoClickerIncrease = 1;
let autoClickerInterval = null;

const gemDisplay = document.getElementById("gem-cost");
const clickerLevelDisplay = document.getElementById("clicker-cost");
const leveldisplay = document.getElementById("clicker-level");
const clickerIncreaseDisplay = document.querySelector(".clicker-increase");
const autoClickerDisplay = document.getElementById("autoClicker-cost");
const autoClickerLevelDisplay = document.getElementById("autoClicker-level");
const autoClickerIncreaseDisplay = document.querySelector(
  ".autoClicker-increase"
);
const monsterImage = document.getElementById("monster");

function updateMonsterImage() {
  if (gems >= 5000) {
    monsterImage.src = "/images/Monster_Evolved2.png";
  } else if (gems >= 1000) {
    monsterImage.src = "/images/Monster_Evolved.png";
  } else {
    monsterImage.src = "/images/Monster.png";
  }
}

function incrementGem() {
  gems += gemsPerClick;
  gemDisplay.textContent = gems;
  updateMonsterImage();
}

function buyClicker() {
  if (gems >= upgrade) {
    gems -= upgrade;
    gemDisplay.textContent = gems;

    upgrade = Math.floor(upgrade * 3.0);
    clickerLevelDisplay.textContent = upgrade;

    level++;
    leveldisplay.textContent = level;

    gemsPerClick += clickerIncrease;
    clickerIncrease *= 2.0;
    clickerIncreaseDisplay.textContent = clickerIncrease;

    updateMonsterImage();
  }
}

function autoClick() {
  gems += autoClickerLevel * autoClickerIncrease;
  gemDisplay.textContent = gems;
  updateMonsterImage();
}

function buyAutoClicker() {
  if (gems >= autoClickerCost) {
    gems -= autoClickerCost;
    gemDisplay.textContent = gems;

    autoClickerLevel++;
    autoClickerCost = Math.floor(autoClickerCost * 3);
    autoClickerDisplay.textContent = autoClickerCost;
    autoClickerLevelDisplay.textContent = autoClickerLevel;

    autoClickerIncrease *= 2.0;
    autoClickerIncreaseDisplay.textContent = autoClickerIncrease;

    if (!autoClickerInterval) {
      autoClickerInterval = setInterval(autoClick, 1000);
    }

    updateMonsterImage();
  }
}
