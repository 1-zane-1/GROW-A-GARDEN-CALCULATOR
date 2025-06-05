// Data for items: [weightDivisor, baseValue]
const itemData = {
  "Carrot": [0.275, 20], "Strawberry": [0.3, 15], "Blueberry": [0.2, 20], "Orange Tulip": [0.05, 850],
  "Tomato": [0.5, 30], "Corn": [2, 40], "Daffodil": [0.2, 1000], "Watermelon": [7, 3000], "Pumpkin": [8, 3400],
  "Apple": [3, 275], "Bamboo": [4, 4000], "Coconut": [14, 400], "Cactus": [7, 3400], "Dragon Fruit": [12, 4750],
  "Mango": [15, 6500], "Grape": [3, 7850], "Mushroom": [25, 151000], "Pepper": [5, 8000], "Cacao": [8, 12000],
  "Beanstalk": [10, 28000], "Chocolate Carrot": [0.275, 11000], "Red Lollipop": [4, 50000], "Blue Lollipop": [1, 50000],
  "Candy Sunflower": [1.5, 80000], "Easter Egg": [3, 2500], "Candy Blossom": [3, 100000], "Peach": [2, 300],
  "Raspberry": [0.75, 100], "Pineapple": [3, 2000], "Papaya": [3, 1000], "Banana": [1.5, 1750], "Passionfruit": [3, 3550],
  "Soul Fruit": [25, 7750], "Cursed Fruit": [30, 25750], "Mega Mushroom": [70, 500], "Cherry Blossom": [3, 500],
  "Purple Cabbage": [5, 500], "Lemon": [1, 350], "Pear": [3, 500], "Crocus": [0.05, 850], "Pink Tulip": [0.05, 850],
  "Succulent": [3, 500], "Avocado": [2, 500], "Cranberry": [1, 3000], "Durian": [8, 7000], "Eggplant": [5, 9500],
  "Lotus": [20, 25000], "Venus Fly Trap": [10, 45000], "Nightshade": [0.5, 3500], "Glowshroom": [0.75, 300],
  "Mint": [1, 5250], "Moonflower": [2, 9500], "Starfruit": [3, 15000], "Moonglow": [7, 20000], "Moon Blossom": [3, 60000],
  "Crimson Vine": [1, 1250], "Moon Melon": [8, 18000], "Blood Banana": [1.5, 6000], "Celestiberry": [2, 10000],
  "Moon Mango": [15, 50000], "Rose": [1, 5000], "Foxglove": [2, 20000], "Lilac": [3, 35000], "Pink Lily": [6, 65000],
  "Purple Dahlia": [12, 75000], "Sunflower": [15, 150000], "Nectarine": [3, 35000], "Hive Fruit": [8, 50000],
  "Ember Lily": [15, 90000], "Dandelion": [0.5, 2000]
};

const variantMultipliers = {
  Normal: 1,
  Gold: 20,
  Rainbow: 50,
};

const mutationList = [
  "Zombified", "Wet", "Voidtouched", "Twisted", "Shocked",
  "Celestial", "Disco", "Frozen", "Burnt", "HoneyGlazed",
  "Plasma", "Bloodlit", "Pollinated", "Moonlit", "Choc", "Chilled"
];

const mutationMultipliers = {
  Zombified: 25,
  Wet: 2,
  Voidtouched: 135,
  Twisted: 5,
  Shocked: 100,
  Celestial: 120,
  Disco: 125,
  Frozen: 10,
  Burnt: 5,
  HoneyGlazed: 5,
  Plasma: 5,
  Bloodlit: 4,
  Pollinated: 3,
  Moonlit: 2,
  Choc: 2,
  Chilled: 2
};

function populateDropdowns() {
  const itemSelect = document.getElementById("item");
  const mutationSelect = document.getElementById("mutations");

  // Clear existing options (optional)
  itemSelect.innerHTML = "";
  mutationSelect.innerHTML = "";

  // Populate items
  Object.keys(itemData).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    itemSelect.appendChild(opt);
  });

  // Populate mutations
  mutationList.forEach(mutation => {
    const opt = document.createElement("option");
    opt.value = mutation;
    opt.textContent = mutation;
    mutationSelect.appendChild(opt);
  });
}

// Mutation multipliers multiply together (multiplicative)
function getMutationMultiplier(selectedMutations) {
  return selectedMutations.reduce((mult, mut) => mult * (mutationMultipliers[mut] || 1), 1);
}

function calculateValue() {
  const itemName = document.getElementById("item").value;
  const variant = document.getElementById("variant").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const selectedMutations = Array.from(document.getElementById("mutations").selectedOptions).map(o => o.value);

  if (!itemName || !variant || isNaN(weight) || weight <= 0) {
    document.getElementById("result").textContent = "Please fill in all fields with valid values.";
    return;
  }

  if (!itemData[itemName]) {
    document.getElementById("result").textContent = "Invalid item selected.";
    return;
  }

  const [weightDivisor, baseValue] = itemData[itemName];
  const variantMult = variantMultipliers[variant] || 1;
  const mutationMult = getMutationMultiplier(selectedMutations);

  // Formula: floor(baseValue * (weight / weightDivisor) * variantMult * mutationMult)
  const value = Math.floor(baseValue * (weight / weightDivisor) * variantMult * mutationMult);

  document.getElementById("result").textContent = `Value: ${value.toLocaleString()}`;
}

// Run dropdown population on page load
populateDropdowns();