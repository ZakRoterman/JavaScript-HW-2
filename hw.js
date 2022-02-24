//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(person){
    for(let food in person){
        if (person[food][0] instanceof Object){
            console.log(`My favorite ${food} are:`)
            for(let place in person[food][0]){
                console.log(`${person[food][0][place]} from ${place}`);
            };
        }
        else if (person[food] instanceof Array){
            console.log(`My favorite ${food}'s are:`);
            for(let dish of person[food]){
                console.log(`${dish}`);
            };
        }
        else{
            console.log(`My favorite ${food} are ${person[food].toLowerCase()}`);
        };          
    };
};

console.log(favFoods(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo=()=>{console.log(`${this.name} is ${this.age} years old.`)};
    addAge=(years)=>{this.age+=years};
}

let tom = new Human('Tom', 7);
let jerry = new Human('Jerry', 5);

tom.addAge(3);
tom.printInfo();

jerry.addAge(1);
jerry.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let bigString = 'loooooonnnnnnggggg'
let smallString = 'small'

function isBigString(x){
    return new Promise(
        (resolve)=>{
            if(x.length > 10){
                resolve(true);
            }else{
                resolve(false);
            }
        }
    );
};

async function statement(x){
    const newCheck = await isBigString(x);
        if(newCheck){
            console.log(`Big word`);
        }
    else{
      console.log(`Small Number`)
    }

};

statement(bigString)
statement(smallString)