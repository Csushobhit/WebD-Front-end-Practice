// 1. Creating an array and accessing elements
console.log("## Creating & Accessing ##");
let marks = [100, 50, 70, 80, 90];
console.log(marks);
console.log("Element at index 0:", marks[0]);
console.log("Element at index 2:", marks[2]);
console.log("Length:", marks.length);

// 2. Heterogeneous array (mixed types)
console.log("\n## Heterogeneous Array ##");
let mix = [100, 30, "Rohit", true];
console.log(mix);

// 3. Mutability – change an element
let arr = [100, 30, "Rohit", true];
arr[1] = 90;
console.log("After changing index 1:", arr);

// 4. push and pop (end operations)
console.log("\n## push & pop ##");
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log("After push:", fruits);
let popped = fruits.pop();
console.log("Popped:", popped, "| Array now:", fruits);

// 5. unshift and shift (beginning operations) – expensive!
console.log("\n## unshift & shift ##");
fruits.unshift("Mango");   // adds at start
console.log("After unshift:", fruits);
fruits.shift();            // removes from start
console.log("After shift:", fruits);

// 6. Iterating arrays
console.log("\n## Iteration ##");
let arr2 = [10, 20, 50, 90, 11];
console.log("For loop:");
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log("For...of loop:");
for (let val of arr2) {
  console.log(val);
}

// 7. Copy by reference vs value
console.log("\n## Copy by Reference ##");
let original = [1, 2, 3];
let copyRef = original;
copyRef.push(4);
console.log("Original:", original); // [1,2,3,4] – changed!
console.log("CopyRef:", copyRef);   // [1,2,3,4]

// Primitive copy by value
let a = "Rohit";
let b = a;
b = "Mohit";
console.log("a:", a, "b:", b); // a unchanged

// 8. const with arrays
console.log("\n## const Array ##");
const constArr = [10, 20];
constArr.push(30);   // allowed
constArr[0] = 99;    // allowed
console.log("constArr:", constArr);
// constArr = [1,2];  // ❌ Error if uncommented: assignment to constant variable

// 9. slice (non-destructive) vs splice (destructive)
console.log("\n## slice vs splice ##");
let data = [10, 30, 50, 90, 11];
let sliced = data.slice(2, 4);   // from index 2 to 3
console.log("Sliced:", sliced, "| Original:", data);

let spl = data.splice(1, 3, "Rohit", 19);  // remove 3 items from index1, insert two
console.log("Removed by splice:", spl);
console.log("After splice original:", data);

// 10. Merging with spread operator
console.log("\n## Spread Operator for Merging ##");
let a1 = [10, 30];
let a2 = ["Rohit", 11, true];
let merged = [...a1, ...a2];
console.log("Merged:", merged);

// Without spread → nested array
let nestedMerg = [a1, a2];
console.log("Without spread:", nestedMerg);

// 11. join() and toString()
console.log("\n## join() & toString() ##");
let names = ["Alice", "Bob", "Charlie"];
console.log("toString():", names.toString());
console.log("join(' '):", names.join(" "));
console.log("join(' - '):", names.join(" - "));

// 12. Searching
console.log("\n## Searching ##");
let items = ["Alice", "Bob", "Charlie", "Bob"];
console.log("indexOf Bob:", items.indexOf("Bob"));
console.log("lastIndexOf Bob:", items.lastIndexOf("Bob"));
console.log("includes Charlie:", items.includes("Charlie"));
console.log("includes Dave:", items.includes("Dave"));

// 13. Sorting
console.log("\n## Sorting ##");

// String sorting (ASCII based)
let names2 = ["Alice", "bob", "Charlie", "Mohit", "Rohit"];
names2.sort(); // default sort
console.log("Default string sort:", names2);

// Number sorting – default behaves unexpectedly
let nums = [1001, 32, 80, 91];
nums.sort();
console.log("Default number sort (wrong):", nums);

// Custom numeric sort: ascending
let nums2 = [10, 40, 31, 71, 5, 11];
nums2.sort((a, b) => a - b);
console.log("Numeric ascending:", nums2);

// Descending
nums2.sort((a, b) => b - a);
console.log("Numeric descending:", nums2);

// 14. Flattening nested arrays
console.log("\n## Flattening ##");
let nested = [1, 2, [3, [4, 5]]];
console.log("Original nested:", nested);
console.log("flat():", nested.flat());        // depth 1
console.log("flat(2):", nested.flat(2));     // depth 2
console.log("flat(Infinity):", nested.flat(Infinity));

// 15. Arrays are actually objects – proof
console.log("\n## Array as Object ##");
let arrObj = [10, 20, 30];
arrObj.name = "Rohit";          // adding a named property
console.log(arrObj);            // shows numeric indices + name
console.log(arrObj["1"]);       // 20, accessed like object key
console.log(arrObj.name);       // "Rohit"
console.log(typeof arrObj);     // "object"