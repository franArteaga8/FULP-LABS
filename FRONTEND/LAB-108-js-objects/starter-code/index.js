// Your Solution goes here
console.log("Index.js load successfull");

//Iteration 1

const person = {
  firstName: "Luis",
  lastName: "Burón",
};

function fullName(person) {
  return person.firstName + " " + person.lastName;
}

console.log(fullName(person));

//Iteration 2 - Who is online?

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

// Iteration 3 - Overheating

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
