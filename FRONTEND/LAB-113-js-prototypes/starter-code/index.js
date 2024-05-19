console.log("js loaded succesfully");

// HOW TO PLAY

// Run both attacks
// guerra.vikingAttack(); // Simulate a Viking attack on a Saxon
// guerra.saxonAttack(); // Simulate a Saxon attack on a Viking

// Show the current status of the war
//guerra.showStatus(); // Display the outcome of the war based on the state of the armies

// Check the state of the Viking and Saxon armies
// console.log("Viking Army:", guerra.vikingArmy); // Display the current state of the Viking army
// console.log("Saxon Army:", guerra.saxonArmy); // Display the current state of the Saxon army

//CODE

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return "Odin Owns You All!!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const vikingAttackStrength = randomViking.attack();

    randomSaxon.receiveDamage(vikingAttackStrength);

    return randomSaxon.health <= 0
      ? (this.saxonArmy.splice(randomSaxonIndex, 1),
        console.log(`A Saxon has died in combat`))
      : console.log(`A Saxon has received ${vikingAttackStrength} damage`);
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    const saxonAttackStrength = randomSaxon.attack();

    randomViking.receiveDamage(saxonAttackStrength);

    return randomViking.health <= 0
      ? (this.vikingArmy.splice(randomVikingIndex, 1),
        console.log(`${randomViking.name} has died in combat`))
      : console.log(
          `${randomViking.name} has received ${saxonAttackStrength} damage`
        );
  }

  showStatus() {
    console.log("in the vikingArmy: " + this.vikingArmy.length);
    console.log("in the saxonArmy: " + this.saxonArmy.length);
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

// DECLARATION OF CLASSES

const vik1 = new Viking("vik1", 100, 50);
const vik2 = new Viking("vik2", 100, 50);
const vik3 = new Viking("vik3", 100, 50);

const sax1 = new Saxon(100, 50);
const sax2 = new Saxon(100, 50);
const sax3 = new Saxon(100, 50);

const guerra = new War();
guerra.addViking(vik1);
guerra.addViking(vik2);
guerra.addViking(vik3);

guerra.addSaxon(sax1);
guerra.addSaxon(sax2);
guerra.addSaxon(sax3);

console.log(guerra.vikingArmy);
console.log(guerra.saxonArmy);
