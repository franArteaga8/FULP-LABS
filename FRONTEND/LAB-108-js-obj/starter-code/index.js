// Your Solution goes here
console.log("Index.js load successfull")


/*
---
## Iteration 1

Create the following functions:

### 1.1/ **fullName(person)**

This function has to return the join of the firstName and the lastName attributes of the `person` argument with a space between them.

```js
E.g. { firstName : 'Luis' , lastName: 'Burón' }  =>   "Luis Burón"
```   
---*/

const person = {
    firstName: 'Luis',
    lastName: 'Burón'
  }
  
  function fullName(person)
  {
    return person.firstName + ' ' + person.lastName
  }
  
  console.log(fullName(person))


/*
## Iteration 2 - Who is online?

You have a chat application and you want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in seconds), create a function to work out who is online, offline and afk.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered afk.

The input data has the following structure:
```js
[{
  username: 'David',
  status: 'online',
  lastActivity: 600
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 4320
}]
```
The corresponding output should look as follows:
```js
{
  online: ['David'],
  offline: ['Lucy'],
  afk: ['Bob']
}
```
If for example, no users are online the output should look as follows:
```js
{
  offline: ['Lucy'],
  afk: ['Bob']
}
```

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}
*/

function onlineStatus (users)
{
  let outputStatus = {}
  
  for (let i = 0; i < users.length; i++)
  {
        if (users[i].status === 'online')
        {
            if (users[i].lastActivity <= 600)
            {
              if (!outputStatus.online)
                {
                  outputStatus.online = []
                }
                outputStatus.online.push(users[i].username)
            }
            else 
            {
              if (!outputStatus.afk)
              {
               outputStatus.afk = [] 
              }
              outputStatus.afk.push(users[i].username)
            }
        }
        else
          {
            if (!outputStatus.offline)
              {
                outputStatus.offline = []
              }
            outputStatus.offline.push(users[i].username)
          }
  }
  return outputStatus
}

console.log(onlineStatus([{
  username: 'David',
  status: 'online',
  lastActivity: 600
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 4320
}]))

/*
--- 

## Iteration 3 - Overheating

All the components of a computer have a defined maximum temperature at which it can continue to function properly.

But we know you, and sometimes when you play Fortnite, some of your components overheat.

Your function will receive two parameters. `yourComputer` is an object that represents your computer with the current temperatures of its components in real time. `maxTemperatures` is the maximum temperature of all the components of a computer.

Your function has to return another new object with the same components your computer has but returning `true` if the temperature  of the component is okay or `false` if the component is overheating-

```js 
var yourComputer = { 
  cpu : 25,
  gpu : 45,
  motherBase : 15,
  dvdDriver : 25,
  rom : 5,
  ram : 10,
}
var maxTemperatures = { 
  cpu : 33,
  gpu : 42,
  motherBase : 20,
  dvdDriver : 20,
  rom : 10,
  ram : 20,
}

var results = yourFunction(yourComputer, maxTemperatures);

console.log(results); 
/* { 
    cpu : true,
    gpu : false,
    motherBase : true,
    dvdDriver : false,
    rom : true,
    ram : true
  } 
*/

function heatCheck (yourComputer, maxTemperatures)
{
  const result = {}
  const components = 
        [['cpu'],
         ['gpu'],
         ['motherBase'],
         ['dvdDriver'],
         ['rom'],
         ['ram']   
        ]
  
  for (let i = 0; i < components.length; i++)
    {
      result[components[i]] =    yourComputer[components[i]] < maxTemperatures[components[i]] 
    } 
  return result
}

var yourComputer = { 
  cpu : 25,
  gpu : 45,
  motherBase : 15,
  dvdDriver : 25,
  rom : 5,
  ram : 10,
}
var maxTemperatures = { 
  cpu : 33,
  gpu : 42,
  motherBase : 20,
  dvdDriver : 20,
  rom : 10,
  ram : 20,
}

console.log(heatCheck(yourComputer, maxTemperatures))