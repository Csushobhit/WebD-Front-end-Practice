// =========================================
// JavaScript Lecture 4 – Strings & Date
// Run: node index.js
// =========================================
// ---------- Creating Strings ----------
console.log("## Creating Strings ##");
let str1 = "Rohit";
let str2 = 'Rohit Negi';
let str3 = `Strike is coming soon`;
console.log(str1);
console.log(str2);
console.log(str3);

// Multi-line with backticks
let multi = `This is
a multi-line
string`;
console.log(multi);

// Template literal interpolation
let day = 18;
console.log(`Strike is coming on ${day}`);

// ---------- String Length ----------
console.log("\n## String Length ##");
let str = "Hello Coder Army";
console.log("Length:", str.length);  // 16

// ---------- Accessing Characters ----------
console.log("\n## Accessing Characters ##");
console.log(str[0]);   // H
console.log(str[1]);   // e

// ---------- Immutability ----------
console.log("\n## Immutability ##");
str[2] = "L";               // attempt to change (no effect)
console.log(str);           // Hello Coder Army
console.log(str.toUpperCase()); // HELLO CODER ARMY (new string)
console.log(str);           // original unchanged

// ---------- toUpperCase / toLowerCase ----------
console.log("\n## Case Conversion ##");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// ---------- Searching Substrings ----------
console.log("\n## Searching Substrings ##");
console.log(str.indexOf("Coder"));    // 6
console.log(str.indexOf("cer"));      // -1
console.log(str.lastIndexOf("o"));    // 15
console.log(str.includes("Army"));    // true
console.log(str.includes("xy"));     // false

// ---------- slice() ----------
console.log("\n## slice() ##");
console.log(str.slice(2, 5));    // "llo" (index 2 to 4)
console.log(str.slice(2));       // "llo Coder Army" (from 2 to end)
console.log(str.slice(-4));      // "Army" (last 4)
console.log(str.slice(-5, -2));  // "r A" (from -5 to -2 exclusive)

// ---------- substring() ----------
console.log("\n## substring() ##");
console.log(str.substring(2, 5));   // "llo" (no negative indices)

// ---------- Concatenation ----------
console.log("\n## Concatenation ##");
let a = "Rohit", b = "Negi";
console.log(a + " " + b);          // Rohit Negi
// Number + String behaviour
console.log(24 + 30 + " Rohit");   // "54 Rohit"
console.log(24 + " Rohit " + 10);  // "24 Rohit 10"

// ---------- replace / replaceAll ----------
console.log("\n## replace & replaceAll ##");
let text = "Hello Coder";
console.log(text.replace("Coder", "Army"));     // Hello Army
let repeated = "a a a";
console.log(repeated.replaceAll("a", "b"));    // "b b b"
console.log(text);                              // original unchanged

// ---------- trim / trimStart / trimEnd ----------
console.log("\n## Trimming ##");
let spaced = "   Hello   ";
console.log("'" + spaced.trim() + "'");        // 'Hello'
console.log("'" + spaced.trimStart() + "'");   // 'Hello   '
console.log("'" + spaced.trimEnd() + "'");     // '   Hello'

// ---------- split() ----------
console.log("\n## split() ##");
let names = "Rohit,Mohit,Suraj,Rohan,Anjali";
let nameArray = names.split(",");
console.log(nameArray);   // array of names
console.log(nameArray[0]); // Rohit

let spacedNames = "Rohit Mohit Suraj";
console.log(spacedNames.split(" "));  // ["Rohit", "Mohit", "Suraj"]

// ==================================
// ---------- Date Object ----------
// ==================================

// Creating current date
console.log("\n## Date Object ##");
let now = new Date();
console.log("Default (UTC internally):", now);
console.log("toString (local):", now.toString());
console.log("toISOString (UTC):", now.toISOString());
console.log("toLocaleString (local):", now.toLocaleString());

// Extracting components
console.log("\n## Date Components ##");
console.log("Full Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());   // e.g., 9 for October
console.log("Date (day of month):", now.getDate());
console.log("Day (0=Sun, 3=Wed):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Custom date (year, month, day, hours, minutes, seconds, ms)
console.log("\n## Custom Date ##");
let customDate = new Date(2025, 8, 20, 8, 25, 16, 125);
// month 8 = September (0-index)
console.log(customDate.toString());  // Sat Sep 20 2025 08:25:16 ...

// Epoch and timestamp
console.log("\n## Epoch & Timestamps ##");
let ms = Date.now();
console.log("Milliseconds since Jan 1, 1970:", ms);

let dateFromMs = new Date(ms);
console.log("Back to date:", dateFromMs.toString());

let epochStart = new Date(0);
console.log("Epoch (in India +5:30):", epochStart.toString());

// UTC importance demo (compare timestamps)
console.log("\n## UTC Comparison ##");
let submitTime1 = 1757600000000;   // pretend submission 1
let submitTime2 = 1757600030000;   // submission 2 (later)
console.log("Submission 1 came first?", submitTime1 < submitTime2); // true