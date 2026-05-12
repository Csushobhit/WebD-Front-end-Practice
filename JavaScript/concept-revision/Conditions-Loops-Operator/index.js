// ==============================================
// JavaScript Lecture 3 – Operators, Loops & Conditionals
// Run: node index.js
// ==============================================

// ---------- Arithmetic Operators ----------
console.log("## Arithmetic Operators ##");
console.log(2 + 5);   // 7
console.log(2 - 5);   // -3
console.log(2 * 5);   // 10
console.log(6 / 2);   // 3
console.log(5 % 2);   // 1 (remainder)
console.log(5 ** 2);  // 25 (5 squared)
console.log(5 ** 3);  // 125 (5 cubed)

// ---------- Assignment Operators ----------
console.log("\n## Assignment Operators ##");
let x = 20, y = 10;

x = x + y;   // normal addition assignment
console.log(x); // 30 (reset later in example)

x = 20;       // reset
x += y;       // same as x = x + y
console.log(x); // 30

x = 20;
x -= y;       // x = 10
console.log(x);

x = 20;
x *= y;       // x = 200
console.log(x);

x = 20;
x /= y;       // x = 2
console.log(x);

x = 20;
x %= y;       // x = 0 (remainder 0)
console.log(x);

// ---------- Comparison Operators ----------
console.log("\n## Comparison Operators ##");
let a = 20, b = 10;
console.log(a > b);      // true
console.log(a < b);      // false
console.log(a >= b);     // true
console.log(a <= b);     // false

// Loose equality (==) vs Strict equality (===)
console.log(20 == "20");   // true (type conversion)
console.log(20 === "20");  // false (different types)

console.log(a === 20);   // true (both number 20)
console.log(a === 10);   // false

// Not equal to
console.log(4 != 5);     // true
console.log(4 != "4");   // false (loose: 4 equals "4")
console.log(4 !== "4");  // true (strict: types differ)

// ---------- Type Conversion ----------
console.log("\n## Type Conversion ##");

// String to Number
let strNum = "121";
let convertedNum = Number(strNum);
console.log(convertedNum);        // 121
console.log(typeof convertedNum); // "number"

// Invalid string to number → NaN
let invalidNum = Number("121AC");
console.log(invalidNum);          // NaN
console.log(typeof invalidNum);   // "number" (NaN is of type number)

// Number to String
let num = 10;
let strFromNum = String(num);
console.log(strFromNum);          // "10"
console.log(typeof strFromNum);  // "string"

// Boolean to Number
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Boolean to String
console.log(String(true));   // "true"
console.log(String(false));  // "false"

// Boolean conversions (truthy / falsy)
console.log(Boolean(10));      // true
console.log(Boolean(-10));     // true
console.log(Boolean(0));       // false
console.log(Boolean("hello"));// true
console.log(Boolean(""));     // false (empty string)
console.log(Boolean(null));   // false
console.log(Boolean(undefined));// false

// Null and undefined conversions
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"

// ---------- Floating Point Precision Problem ----------
console.log("\n## Floating Point Problem ##");
console.log(0.1 + 0.2);            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);    // false
// Reason: decimal fractions become infinite binary fractions → approximations

// ---------- Loose Equality Quirks (null & undefined) ----------
console.log("\n## Loose Equality Quirks ##");
console.log(null == undefined);     // true (only these two)
console.log(null === undefined);    // false
console.log(null == 0);             // false
console.log(null >= 0);             // true (null converted to 0)
console.log(undefined >= 0);        // false (undefined → NaN → false)
console.log(null == false);         // false
console.log(null == "");            // false

// ---------- Logical AND (&&) and OR (||) ----------
console.log("\n## Logical AND (&&) ##");
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

console.log("Rohit" && "Mohit");   // "Mohit" (both truthy → returns last)
console.log("" && "Mohit");        // "" (first falsy → returns it)
console.log(0 && 20);              // 0
console.log(20 && 0);              // 0 (second is checked, it's falsy, returns 0)

console.log("\n## Logical OR (||) ##");
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

console.log("Rohit" || "Mohit");   // "Rohit" (first truthy)
console.log(0 || 20);              // 20 (first truthy)
console.log(0 || "");              // "" (all falsy, returns last)

// ---------- Comparison with strings (ASCII) ----------
console.log("\n## String Comparison (ASCII) ##");
console.log("Rohit" > "Mohit");    // true  (R=82 > M=77)
console.log("Rohit" > "mohit");    // false (R=82 < m=109)

// ---------- Loops ----------
console.log("\n## For Loop ##");
for (let i = 0; i < 5; i++) {
    console.log(i);   // 0,1,2,3,4
}

console.log("\n## While Loop ##");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

console.log("\n## Do-While Loop ##");
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// ---------- Conditionals (if/else if/else) ----------
console.log("\n## Conditionals ##");
let age = 20;
if (age < 18) {
    console.log("Kid");
} else if (age >= 60) {
    console.log("Old");
} else {
    console.log("Young");   // this prints (20)
}

age = 78;
if (age < 18) {
    console.log("Kid");
} else if (age >= 60) {
    console.log("Old");     // this prints
} else {
    console.log("Young");
}

// ---------- Homework hint: Bitwise AND/OR ----------
console.log("\n## Bitwise AND (&) and OR (|) – Homework ##");
console.log(2 & 3);   // 2  (10 & 11 = 10)
console.log(2 & 5);   // 0  (10 & 101 = 0)
console.log(2 | 3);   // 3  (10 | 11 = 11)