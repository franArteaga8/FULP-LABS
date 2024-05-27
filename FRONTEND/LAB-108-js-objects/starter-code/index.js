/// Your Solution goes here
console.log("Index.js load successfull");

///Iteration 1

const person = {
  firstName: "Luis",
  lastName: "Burón",
};

function fullName(person) {
  return person.firstName + " " + person.lastName;
}

console.log(fullName(person));

///Iteration 2 - Who is online?

function onlineStatus(users) {
  let outputStatus = {};

  for (let i = 0; i < users.length; i++) {
    if (users[i].status === "online") {
      if (users[i].lastActivity <= 600) {
        if (!outputStatus.online) {
          outputStatus.online = [];
        }
        outputStatus.online.push(users[i].username);
      } else {
        if (!outputStatus.afk) {
          outputStatus.afk = [];
        }
        outputStatus.afk.push(users[i].username);
      }
    } else {
      if (!outputStatus.offline) {
        outputStatus.offline = [];
      }
      outputStatus.offline.push(users[i].username);
    }
  }
  return outputStatus;
}

console.log(
  onlineStatus([
    {
      username: "David",
      status: "online",
      lastActivity: 600,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 2320,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 4320,
    },
  ])
);

/// Iteration 3 - Overheating

function heatCheck(yourComputer, maxTemperatures) {
  const result = {};
  const components = [
    ["cpu"],
    ["gpu"],
    ["motherBase"],
    ["dvdDriver"],
    ["rom"],
    ["ram"],
  ];

  for (let i = 0; i < components.length; i++) {
    result[components[i]] =
      yourComputer[components[i]] < maxTemperatures[components[i]];
  }
  return result;
}

var yourComputer = {
  cpu: 25,
  gpu: 45,
  motherBase: 15,
  dvdDriver: 25,
  rom: 5,
  ram: 10,
};
var maxTemperatures = {
  cpu: 33,
  gpu: 42,
  motherBase: 20,
  dvdDriver: 20,
  rom: 10,
  ram: 20,
};

console.log(heatCheck(yourComputer, maxTemperatures));

/// BONUS

/// strCount()

const strCount = (obj) => {
  let count = 0;
  const objValues = Object.values(obj);

  for (let i = 0; i < objValues.length; i++) {
    if (typeof objValues[i] === "string") {
      count++;
    } else if (
      typeof objValues[i] === "object" &&
      Array.isArray(objValues[i])
    ) {
      for (let j = 0; j < objValues[i].length; j++) {
        typeof objValues[i][j] === "string" ? count++ : null;
      }
    }
  }

  return count;
};

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
  })
);

///fullNameFormatted(person) & fullNameFormattedv2(person)

const personBonus2 = {
  firstName: "Luis",
  lastName: "Burón",
};

const personBonus3 = {
  firstName: "Luis Álvaro",
  lastName: "burón mejías",
};

const fullNameFormatted = (person) => {
  const fullName = person.firstName + " " + person.lastName;
  return fullName
    .split(" ")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join(" ");
};

console.log(fullNameFormatted(personBonus2));
console.log(fullNameFormatted(personBonus3));
