const items = [
  { name: "Carrot", weightDivisor: 0.275, baseValue: 20, unknown: 100 },
  { name: "Strawberry", weightDivisor: 0.3, baseValue: 15, unknown: 100 },
  { name: "Blueberry", weightDivisor: 0.2, baseValue: 20, unknown: 100 },
  { name: "Orange Tulip", weightDivisor: 0.05, baseValue: 850, unknown: 55 },
  { name: "Tomato", weightDivisor: 0.5, baseValue: 30, unknown: 100 },
  { name: "Corn", weightDivisor: 2, baseValue: 40, unknown: 100 },
  { name: "Daffodil", weightDivisor: 0.2, baseValue: 1000, unknown: 45 },
  { name: "Watermelon", weightDivisor: 7, baseValue: 3000, unknown: 70 },
  { name: "Pumpkin", weightDivisor: 8, baseValue: 3400, unknown: 80 },
  { name: "Apple", weightDivisor: 3, baseValue: 275, unknown: 50 },
  { name: "Bamboo", weightDivisor: 4, baseValue: 4000, unknown: 35 },
  { name: "Coconut", weightDivisor: 14, baseValue: 400, unknown: 70 },
  { name: "Cactus", weightDivisor: 7, baseValue: 3400, unknown: 100 },
  { name: "Dragon Fruit", weightDivisor: 12, baseValue: 4750, unknown: 100 },
  { name: "Mango", weightDivisor: 15, baseValue: 6500, unknown: 200 },
  { name: "Grape", weightDivisor: 3, baseValue: 7850, unknown: 200 },
  { name: "Mushroom", weightDivisor: 25, baseValue: 151000, unknown: 220 },
  { name: "Pepper", weightDivisor: 5, baseValue: 8000, unknown: 200 },
  { name: "Cacao", weightDivisor: 8, baseValue: 12000, unknown: 250 },
  { name: "Beanstalk", weightDivisor: 10, baseValue: 28000, unknown: 300 },
  { name: "Chocolate Carrot", weightDivisor: 0.275, baseValue: 11000, unknown: 100 },
  { name: "Red Lollipop", weightDivisor: 4, baseValue: 50000, unknown: 65 },
  { name: "Blue Lollipop", weightDivisor: 1, baseValue: 50000, unknown: 65 },
  { name: "Candy Sunflower", weightDivisor: 1.5, baseValue: 80000, unknown: 85 },
  { name: "Easter Egg", weightDivisor: 3, baseValue: 2500, unknown: 20 },
  { name: "Candy Blossom", weightDivisor: 3, baseValue: 100000, unknown: 40 },
  { name: "Peach", weightDivisor: 2, baseValue: 300, unknown: 70 },
  { name: "Raspberry", weightDivisor: 0.75, baseValue: 100, unknown: 70 },
  { name: "Pineapple", weightDivisor: 3, baseValue: 2000, unknown: 70 },
  { name: "Papaya", weightDivisor: 3, baseValue: 1000, unknown: 60 },
  { name: "Banana", weightDivisor: 1.5, baseValue: 1750, unknown: 100 },
  { name: "Passionfruit", weightDivisor: 3, baseValue: 3550, unknown: 40 },
  { name: "Soul Fruit", weightDivisor: 25, baseValue: 7750, unknown: 200 },
  { name: "Cursed Fruit", weightDivisor: 30, baseValue: 25750, unknown: 200 },
  { name: "Mega Mushroom", weightDivisor: 70, baseValue: 500, unknown: 2000000 },
  { name: "Cherry Blossom", weightDivisor: 3, baseValue: 500, unknown: 400 },
  { name: "Purple Cabbage", weightDivisor: 5, baseValue: 500, unknown: 70 },
  { name: "Lemon", weightDivisor: 1, baseValue: 350, unknown: 50 },
  { name: "Pear", weightDivisor: 3, baseValue: 500, unknown: 20 },
  { name: "Crocus", weightDivisor: 0.05, baseValue: 850, unknown: 55 },
  { name: "Pink Tulip", weightDivisor: 0.05, baseValue: 850, unknown: 55 },
  { name: "Succulent", weightDivisor: 3, baseValue: 500, unknown: 150 },
  { name: "Avocado", weightDivisor: 2, baseValue: 500, unknown: 150 },
  { name: "Cranberry", weightDivisor: 1, baseValue: 3000, unknown: 50 },
  { name: "Durian", weightDivisor: 8, baseValue: 7000, unknown: 200 },
  { name: "Eggplant", weightDivisor: 5, baseValue: 9500, unknown: 220 },
  { name: "Lotus", weightDivisor: 20, baseValue: 25000, unknown: 650 },
  { name: "Venus Fly Trap", weightDivisor: 10, baseValue: 45000, unknown: 650 },
  { name: "Nightshade", weightDivisor: 0.5, baseValue: 3500, unknown: 100 },
  { name: "Glowshroom", weightDivisor: 0.75, baseValue: 300, unknown: 100 },
  { name: "Mint", weightDivisor: 1, baseValue: 5250, unknown: 150 },
  { name: "Moonflower", weightDivisor: 2, baseValue: 9500, unknown: 200 },
  { name: "Starfruit", weightDivisor: 3, baseValue: 15000, unknown: 250 },
  { name: "Moonglow", weightDivisor: 7, baseValue: 20000, unknown: 400 },
  { name: "Moon Blossom", weightDivisor: 3, baseValue: 60000, unknown: 400 },
  { name: "Crimson Vine", weightDivisor: 1, baseValue: 1250, unknown: 100 },
  { name: "Moon Melon", weightDivisor: 8, baseValue: 18000, unknown: 300 },
  { name: "Blood Banana", weightDivisor: 1.5, baseValue: 6000, unknown: 200 },
  { name: "Celestiberry", weightDivisor: 2, baseValue: 10000, unknown: 200 },
  { name: "Moon Mango", weightDivisor: 15, baseValue: 50000, unknown: 300 },
  { name: "Rose", weightDivisor: 1, baseValue: 5000, unknown: 100 },
  { name: "Foxglove", weightDivisor: 2, baseValue: 20000, unknown: 250 },
  { name: "Lilac", weightDivisor: 3, baseValue: 35000, unknown: 250 },
  { name: "Pink Lily", weightDivisor: 6, baseValue: 65000, unknown: 400 },
  { name: "Purple Dahlia", weightDivisor: 12, baseValue: 75000, unknown: 400 },
  { name: "Sunflower", weightDivisor: 15, baseValue: 150000, unknown: 600 },
  { name: "Nectarine", weightDivisor: 3, baseValue: 35000, unknown: 200 },
  { name: "Hive Fruit", weightDivisor: 8, baseValue: 50000, unknown: 300 },
  { name: "Ember Lily", weightDivisor: 15, baseValue: 90000, unknown: 450 },
  { name: "Dandelion", weightDivisor: 0.5, baseValue: 2000, unknown: 250 }
];

const variantMultipliers = {
  "Normal": 1,
  "Gold": 20,
  "Rainbow": 50,
};

const mutationList = [
  "Wet", "Chilled", "Choc", "Frozen", "Shocked",
  "Pollinated", "HoneyGlazed", "Moonlit",
  "Bloodlit", "Plasma", "Zombified"
];

// TEMP VALUES: Replace with your real mutation multipliers when ready
const mutationMultipliers = {
  "Wet": 1.1, "Chilled": 1.2, "Choc": 1.3, "Frozen": 1.4,
  "Shocked": 1.1, "Pollinated": 1.25, "HoneyGlazed": 1.15,
  "Moonlit": 1.5, "Bloodlit": 1.5, "Plasma": 1.6, "Zombified": 1.7
};

function populateDropdowns() {
  const itemSelect = document.getElementById("item");
  const mutationSelect = document.getElementById("mutations");

  for (const item in itemData) {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    itemSelect.appendChild(opt);
  }

  for (const mutation of mutationList) {
    const opt = document.createElement("option");
    opt.value = mutation;
    opt.textContent = mutation;
    mutationSelect.appendChild(opt);
  }
}

function getMutationMultiplier(selectedMutations) {
  return selectedMutations.reduce((mult, mut) => {
    return mult * (mutationMultipliers[mut] || 1);
  }, 1);
}

function calculateValue() {
  const item = document.getElementById("item").value;
  const variant = document.getElementById("variant").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const selectedMutations = Array.from(document.getElementById("mutations").selectedOptions).map(o => o.value);

  if (!item || !variant || isNaN(weight)) {
    document.getElementById("result").textContent = "Please fill in all fields.";
    return;
  }

  const [baseWeight, baseValue] = itemData[item];
  const variantMult = variantMultipliers[variant] || 1;
  const mutationMult = getMutationMultiplier(selectedMutations);
  const clamped = Math.max(0.95, weight / baseWeight);
  const finalValue = Math.round(baseValue * mutationMult * variantMult * (clamped ** 2));

  document.getElementById("result").textContent = `Value: ${finalValue.toLocaleString()}`;
}

document.getElementById("calculate").addEventListener("click", calculateValue);

window.onload = populateDropdowns;
