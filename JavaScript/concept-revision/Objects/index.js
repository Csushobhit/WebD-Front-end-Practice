console.log("## Creating an Object ##");
const user = {
  name: "Rohit",
  age: 20,
  email: "neg@gmail.com",
  amount: 3400
};
console.log(user);

// 2. Accessing Properties (dot vs bracket)
console.log("\n## Accessing Properties ##");
console.log(user.name);          // dot notation
console.log(user["age"]);       // bracket notation (string key)

// Bracket notation required for keys with space
user["home address"] = "Dwarka";
console.log(user["home address"]); // Dwarka

// 3. Adding / Updating / Deleting
console.log("\n## CRUD Operations ##");
// Create
user.aadhar = 1234;
console.log("After adding aadhar:", user.aadhar);

// Update
user.amount = 5000;
console.log("Updated amount:", user.amount);

// Delete
delete user.email;
console.log("After deleting email:", user.email); // undefined

// 4. Methods and this keyword
console.log("\n## Methods and 'this' ##");
const user1 = {
  name: "Rohit",
  greet() {
    return "Strike is coming on 18th October, " + this.name;
  }
};
console.log(user1.greet());

// Copy method to another object – this points to new object
const user2 = { name: "Mohit" };
user2.greet = user1.greet;
console.log(user2.greet()); // "Strike is coming on 18th October, Mohit"

// 5. Nested Objects
console.log("\n## Nested Objects ##");
const fullUser = {
  name: "Rohit",
  address: {
    city: "Kotdwar",
    state: "Uttarakhand"
  }
};
console.log(fullUser.address.city); // Kotdwar

// 6. Object.keys, values, entries
console.log("\n## Object Utility Methods ##");
console.log("Keys:", Object.keys(fullUser));
console.log("Values:", Object.values(fullUser));
console.log("Entries:", Object.entries(fullUser));

// 7. Looping
console.log("\n## Looping Over Objects ##");
// Preferred way: for...of with Object.keys
for (let key of Object.keys(fullUser)) {
  console.log(key, fullUser[key]);
}

// Using entries with destructuring
for (let [k, v] of Object.entries(fullUser)) {
  console.log(`Key: ${k}, Value: ${v}`);
}

// 8. Object Destructuring
console.log("\n## Object Destructuring ##");
const { name, age } = user1;
console.log(name, age);

// Renaming during destructuring
const { name: userName, age: userAge } = user1;
console.log(userName, userAge);

// 9. Array Destructuring
console.log("\n## Array Destructuring ##");
const arr = [10, 20, 40, 90, 11];
const [first, second] = arr;
console.log(first, second); // 10 20

// 10. Shallow Copy (Spread)
console.log("\n## Shallow Copy (Spread) ##");
const original = {
  name: "Rohit",
  address: { city: "Delhi" }
};
const shallow = { ...original };
shallow.name = "Mohit";
shallow.address.city = "Mumbai"; // nested object shared!

console.log("Original:", original.name, original.address.city);
console.log("Shallow:", shallow.name, shallow.address.city);
// original.address.city changed to Mumbai (shared reference)

// 11. Deep Copy (structuredClone)
console.log("\n## Deep Copy (structuredClone) ##");
const deepOriginal = {
  name: "Rohit",
  address: { city: "Delhi" }
};
const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = "Mumbai";
console.log("Deep Original:", deepOriginal.address.city); // Delhi (unchanged)
console.log("Deep Copy:", deepCopy.address.city);         // Mumbai

// 12. Symbols as Object Keys
console.log("\n## Symbols as Keys ##");
const sym = Symbol("id");
const userWithSymbol = {
  [sym]: 101,
  name: "Rohit"
};
console.log(userWithSymbol[sym]);   // 101
console.log(Object.keys(userWithSymbol)); // ["name"] – symbols are hidden from normal iteration

// 13. Proving Array is an Object Internally
console.log("\n## Array as Object (internal) ##");
const internalArr = [10, 20, 30];
console.log(internalArr);                     // inspect in browser console to see {0:10,1:20,2:30}
console.log(internalArr[1]);                   // 20
console.log("Type of []:", typeof []);         // "object"