const clickBtn = document.getElementById('clickBtn');
const upgradeBtn = document.getElementById('upgrade');
const countDisplay = document.getElementById('Count');
const totalClicksDisplay = document.getElementById('total-clicks');

let score = 0;
let clickPower = 1;
let upgradeCost = 10;
let milestoneReached = false;
let totalClicks = 0;

function updateUpgradeButton() {
    if (score >= upgradeCost) {
        upgradeBtn.disabled = false;
    } else {
        upgradeBtn.disabled = true;
    }
}

clickBtn.addEventListener('click', () => {
    score += clickPower;
    countDisplay.textContent = score;
    updateUpgradeButton();
    totalClicks += 1;
    totalClicksDisplay.textContent = totalClicks;
    if (score >= 50 && !milestoneReached) {
        milestoneReached = true;
        alert('а ты хорош!');
    }
});

upgradeBtn.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower += 1;
        upgradeCost = Math.round(upgradeCost * 1.5);
        countDisplay.textContent = score;
        upgradeBtn.textContent = `Сила клика +1! (Цена: ${upgradeCost})`;
        updateUpgradeButton();
    }
});