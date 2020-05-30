
/**
 * Let & Const
 */

function letVarExample(){

  if(true){
    var firstName = "Nazariy";      // exists in function scope, defined in function scope

    let lastName = "Dumanskyy;"     // exists in block scope, defined in block scope
  }

  console.log("Function Scope Access: ", firstName);
  console.log("Function Scope Access: ", lastName);

}

letVarExample()

const anotherExample = [1,2,3];
anotherExample.push(4);
console.log(anotherExample);


/**
 * Template Literals
 */

let firstName = "Nazariy";
let lastName = "Dumanskyy";

let fullName = `${firstName} ${lastName} `;
console.log(fullName);

let searchResults = 50;
let output = `${ searchResults > 0 ? `${searchResults} results` : "No search results"}`
console.log(output);



/**
 * Arrow Functions
 */

getFullName = () => {
  let firstName = "Nazariy";
  let lastName = "Dumanskyy";
  return `${firstName} ${lastName}`;
}

let output = getFullName();
console.log(output);

let firstName = "Nazariy";
let lastName = "Dumanskyy";
getFullNameShorter = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
console.log("Shorted Example");
getFullNameShorter(firstName, lastName);


/**
 * Default Parameters
 */

 sortBy = (sortType = "Name", users) => {
   console.log("Sorting By: ", sortType);
 }

 sortBy();
 sortBy("Date", []);


/**
 * Iterating
 */

let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
console.log("For Loop:");
for(let index = 0; index < fruits.length; index++){
  console.log(fruits[index]);
}

console.log("For-Of:");
for(let fruit of fruits){
  console.log(fruit);
}


console.log("forEach:");
fruits.forEach((fruit) => {
  console.log(fruit);
})

console.log("Map:");
newFruits = fruits.map((fruit) => {
  console.log(fruit);
})

/**
 * Destructuring Object
 */

let fullName = {
	firstName: "Nazariy",
	lastName: "Dumansktyy"
}

let { firstName, lastName } = fullName;


let user = [ 
	{
		firstName: "John",
		lastName: "Reilly"
	},
	(user) => {
    console.log("I set the user: ", user);
	}
] 

let [newUser, setUser ] = user;
console.log(newUser);
setUser({ firstName: "Cool", lastName: "Stuff"});

