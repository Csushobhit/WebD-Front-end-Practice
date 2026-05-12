# 🔧 JavaScript — Operators, Loops & Conditionals

> *Lecture 3 · The building blocks of logic — how JavaScript thinks, compares, and repeats.*

---

## 📋 Table of Contents

- [Arithmetic Operators](#-arithmetic-operators)
- [Assignment Operators](#-assignment-operators)
- [Comparison Operators](#-comparison-operators--vs-)
- [Type Conversion & Coercion](#-type-conversion--coercion)
- [Logical Operators](#-logical-operators)
- [The 0.1 + 0.2 Problem](#-the-floating-point-precision-problem)
- [Loops](#-loops)
- [Conditionals](#-conditionals)

---

## ➕ Arithmetic Operators

| Operator | Name | Example | Result |
|:--------:|------|---------|:------:|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `10 / 2` | `5` |
| `%` | Modulus (remainder) | `5 % 2` | `1` |
| `**` | Exponentiation (power) | `5 ** 3` | `125` |

```javascript
5 % 2    // 1   — remainder after dividing 5 by 2
5 ** 2   // 25  — 5 squared (5²)
5 ** 3   // 125 — 5 cubed  (5³)
```

---

## 🟰 Assignment Operators

Instead of writing `x = x + y`, JavaScript lets you shorthand it:

```javascript
let x = 20, y = 10;

x += y;   // x = 30   (x = x + y)
x -= y;   // x = 10   (x = x - y)
x *= y;   // x = 200  (x = x * y)
x /= y;   // x = 2    (x = x / y)
x %= y;   // x = 0    (x = x % y)
```

---

## ⚖️ Comparison Operators — `==` vs `===`

All comparison operators return `true` or `false`.

```mermaid
flowchart TD
    Q["Comparing two values"] --> LOOSE["== Loose Equality\n\nConverts types first,\nthen compares value"]
    Q --> STRICT["=== Strict Equality\n\nChecks TYPE first.\nIf types differ → false immediately.\nNo conversion."]

    LOOSE --> EX1["20 == '20'  →  true ✅\n(string '20' → number 20)"]
    STRICT --> EX2["20 === '20'  →  false ❌\n(number ≠ string)"]

    style LOOSE fill:#fff3cd,stroke:#856404,color:#000
    style STRICT fill:#d4edda,stroke:#28a745,color:#000
    style EX1 fill:#ffeeba,stroke:#856404,color:#000
    style EX2 fill:#c3e6cb,stroke:#28a745,color:#000
```

```javascript
// Loose ==  (type coercion happens)
20 == "20"    // true   — string is converted to number first
0  == false   // true   — false converts to 0

// Strict === (no coercion)
20 === "20"   // false  — number vs string, different types
0  === false  // false  — number vs boolean, different types
```

> 🛡️ **Rule of thumb:** Always prefer `===` and `!==`. They are predictable and safe.

### Full Comparison Operator List

| Operator | Name | Example | Result |
|:--------:|------|---------|:------:|
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 2` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |
| `==` | Loose equal | `"5" == 5` | `true` |
| `===` | Strict equal | `"5" === 5` | `false` |
| `!=` | Loose not equal | `4 != "4"` | `false` |
| `!==` | Strict not equal | `4 !== "4"` | `true` |

---

## 🔄 Type Conversion & Coercion

JavaScript can convert between types — automatically (coercion) or manually.

```mermaid
flowchart LR
    subgraph TO_NUM["→ Number"]
        N1["Number('121')  →  121 ✅"]
        N2["Number('121AC')  →  NaN ❌"]
        N3["Number(true)  →  1"]
        N4["Number(false)  →  0"]
        N5["Number(null)  →  0"]
        N6["Number(undefined)  →  NaN"]
    end

    subgraph TO_STR["→ String"]
        S1["String(10)  →  '10'"]
        S2["String(true)  →  'true'"]
        S3["String(null)  →  'null'"]
        S4["String(undefined)  →  'undefined'"]
    end

    subgraph TO_BOOL["→ Boolean"]
        B1["❌ Falsy → false:\n0, '', null, undefined, NaN"]
        B2["✅ Truthy → true:\n10, -10, 'hello', {}, []"]
    end

    style TO_NUM fill:#e8f4fd,stroke:#3498db,color:#000
    style TO_STR fill:#fef9e7,stroke:#f39c12,color:#000
    style TO_BOOL fill:#eafaf1,stroke:#27ae60,color:#000
```

### 🔢 To Number

```javascript
Number("121")      // 121  ✅
Number("121AC")    // NaN  ❌ (Not a Number)
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN
```

> ⚠️ `NaN` means **Not a Number** — but `typeof NaN` is still `"number"`. Also, `0 / 0` gives `NaN`.

### 🔤 To String

```javascript
String(10)         // "10"
String(true)       // "true"
String(null)       // "null"
String(undefined)  // "undefined"
```

### ✅ Truthy & Falsy

```javascript
// Falsy values (become false)
Boolean(0)          // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false

// Truthy values (become true)
Boolean(10)         // true
Boolean(-10)        // true
Boolean("hello")    // true
```

---

### 🕳️ The `null` and `undefined` Anomalies

```mermaid
flowchart TD
    A["null == undefined"] -->|"Loose =="| T["✅ true\n(special JS rule)"]
    A -->|"Strict ==="| F["❌ false\n(different types)"]

    B["null >= 0"] --> C["✅ true\n(null converts to 0\nfor > < >= <=)"]
    D["undefined >= 0"] --> E["❌ false\n(undefined → NaN,\nany comparison with NaN is false)"]

    G["null == 0"] --> H["❌ false\n(null only equals undefined\nin loose equality)"]

    style T fill:#d4edda,stroke:#28a745,color:#000
    style F fill:#f8d7da,stroke:#721c24,color:#000
    style C fill:#d4edda,stroke:#28a745,color:#000
    style E fill:#f8d7da,stroke:#721c24,color:#000
    style H fill:#f8d7da,stroke:#721c24,color:#000
```

```javascript
null == undefined   // true  — only these two are loosely equal to each other
null === undefined  // false — different types

null == 0           // false — null only equals undefined (loosely)
null >= 0           // true  — null converts to 0 for relational operators
undefined >= 0      // false — undefined converts to NaN; NaN comparisons = false
```

### 🔡 String Comparison (ASCII)

Strings are compared **character by character** using ASCII values.

```
A=65  B=66 ... Z=90
a=97  b=98 ... z=122
```

```javascript
"Rohit" > "Mohit"   // true  — 'R'(82) > 'M'(77)
"Rohit" > "mohit"   // false — 'R'(82) < 'm'(109)
```

---

## 💥 The Floating Point Precision Problem

### 0.1 + 0.2 ≠ 0.3 ... or does it? 🤔

```javascript
console.log(0.1 + 0.2);          // 0.30000000000000004 😱
console.log(0.1 + 0.2 == 0.3);   // false!
```

### Why does this happen?

```mermaid
flowchart TD
    A["You write: 0.1"] --> B["CPU stores in binary\n(base 2)"]
    B --> C["0.1 → 0.0001100110011...\n♾️ repeating binary fraction"]
    D["You write: 0.2"] --> E["CPU stores in binary"]
    E --> F["0.2 → 0.00110011001100...\n♾️ repeating binary fraction"]
    C --> G["Add approximations"]
    F --> G
    G --> H["0.30000000000000004\n(slightly off result)"]

    style H fill:#f8d7da,stroke:#721c24,color:#000
    style C fill:#fff3cd,stroke:#856404,color:#000
    style F fill:#fff3cd,stroke:#856404,color:#000
```

> 💡 Just like `1/3` in decimal is `0.333...` (never-ending), `0.1` in binary is a never-ending fraction. The CPU stores only an approximation — adding two approximations gives a slightly wrong result.

### ✅ Solution

Treat numbers as strings and add digit-by-digit (like a human). Many libraries handle this to avoid floating-point errors.

---

## 🔗 Logical Operators

### AND `&&` — Returns first **falsy**, or last value if all truthy

```javascript
true && false      // false   — found falsy, returns it
true && "Rohit"    // "Rohit" — both truthy, returns last
0 && 20            // 0       — 0 is falsy, returns immediately
```

### OR `||` — Returns first **truthy**, or last value if all falsy

```javascript
true || false      // true    — found truthy, returns it
0 || 20            // 20      — 0 is falsy, skips; 20 is truthy
"" || null         // null    — both falsy, returns last
```

### NOT `!` — Flips the boolean

```javascript
!true    // false
!false   // true
!0       // true  (0 is falsy)
!"hi"    // false ("hi" is truthy)
```

### ⚡ Short-Circuiting

```mermaid
flowchart LR
    AND["&& Short-circuit\n\nIf LEFT is falsy →\nskip RIGHT entirely\n(no need to check)"]
    OR["|| Short-circuit\n\nIf LEFT is truthy →\nskip RIGHT entirely\n(no need to check)"]

    style AND fill:#fdf2f8,stroke:#8e44ad,color:#000
    style OR fill:#e8f8f5,stroke:#1abc9c,color:#000
```

```javascript
false && expensiveFunction()   // expensiveFunction never runs ✅
true  || expensiveFunction()   // expensiveFunction never runs ✅
```

---

## 🔁 Loops

```mermaid
flowchart TD
    subgraph FOR["🔵 for loop"]
        F1["Initialize\nlet i = 0"] --> F2{"Condition\ni < 10?"}
        F2 -->|"true"| F3["Execute body\nconsole.log(i)"]
        F3 --> F4["Increment\ni++"]
        F4 --> F2
        F2 -->|"false"| F5["Stop ✅"]
    end

    subgraph WHILE["🟡 while loop"]
        W1["let i = 0"] --> W2{"i < 10?"}
        W2 -->|"true"| W3["Execute body\ni++"]
        W3 --> W2
        W2 -->|"false"| W4["Stop ✅"]
    end

    subgraph DOWHILE["🟠 do...while loop"]
        D1["Execute body\nfirst time\n(no check yet)"] --> D2{"i < 10?"}
        D2 -->|"true"| D1
        D2 -->|"false"| D3["Stop ✅"]
    end

    style FOR fill:#e8f4fd,stroke:#3498db,color:#000
    style WHILE fill:#fef9e7,stroke:#f39c12,color:#000
    style DOWHILE fill:#fdf2f8,stroke:#8e44ad,color:#000
```

### 🔵 For Loop
Best when you know **how many times** to loop.

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);   // prints 0 through 9
}
```

| Part | Code | Runs |
|------|------|:----:|
| Initialize | `let i = 0` | Once, at start |
| Condition | `i < 10` | Before every iteration |
| Body | `console.log(i)` | Each iteration |
| Increment | `i++` | After each iteration |

> 💡 `i++` is post-increment (add 1 after). `i--` is post-decrement (subtract 1 after).

---

### 🟡 While Loop
Best when you **don't know** how many iterations you'll need.

```javascript
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

---

### 🟠 Do...While Loop
Guarantees the body runs **at least once** — condition checked after.

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

---

## 🌿 Conditionals

```mermaid
flowchart TD
    START(["let age = 20"]) --> IF{"age < 18?"}
    IF -->|"✅ true"| A["console.log('Kid')"]
    IF -->|"❌ false"| ELIF{"age >= 60?"}
    ELIF -->|"✅ true"| B["console.log('Old')"]
    ELIF -->|"❌ false"| C["console.log('Young')"]

    style A fill:#f8d7da,stroke:#721c24,color:#000
    style B fill:#fff3cd,stroke:#856404,color:#000
    style C fill:#d4edda,stroke:#28a745,color:#000
```

```javascript
let age = 20;

if (age < 18) {
    console.log("Kid");
} else if (age >= 60) {
    console.log("Old");
} else {
    console.log("Young");   // ✅ this runs
}
```

> 📌 You can chain as many `else if` blocks as you need.
> The **first matching condition** runs — all others are skipped entirely.

---

## 📊 Quick Reference Summary

```mermaid
mindmap
  root((Lecture 3\nCore Concepts))
    ➕ Operators
      Arithmetic + - * / % **
      Assignment += -= *= /= %=
      Comparison == === != !==
      Logical && || !
    🔄 Type Conversion
      To Number
      To String
      Truthy / Falsy
    🐛 Quirks
      0.1 + 0.2 ≠ 0.3
      null vs undefined
      == anomalies
    🔁 Loops
      for
      while
      do...while
    🌿 Conditionals
      if
      else if
      else
```

| Topic | Key Rule |
|-------|----------|
| `==` vs `===` | Always prefer `===` — no surprises |
| Truthy/Falsy | Falsy: `0`, `""`, `null`, `undefined`, `NaN` |
| `&&` | Returns first **falsy** or last value |
| `\|\|` | Returns first **truthy** or last value |
| `for` | Use when iterations are known |
| `while` | Use when iterations are unknown |
| `do...while` | Runs at least **once** regardless of condition |
| `0.1 + 0.2` | Binary floating-point — never compare decimals with `==` |

---

<div align="center">

**Happy Coding! 🚀**

*Made with ❤️ for JavaScript beginners everywhere*

</div>