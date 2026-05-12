# 🧵 JavaScript — Strings & the Date Object

> *Lecture 4 · Mastering text manipulation and working with time in JavaScript.*

---

## 📋 Table of Contents

- [Creating Strings](#-creating-strings)
- [Length & Indexing](#-length--indexing)
- [String Immutability](#-strings-are-immutable)
- [String Methods](#-string-methods)
- [Concatenation](#-concatenation)
- [The Date Object](#-the-date-object)
- [UTC vs Local Time](#️-utc-vs-local-time)
- [Epoch Time](#-epoch-time--datenow)
- [Quick Reference](#-quick-reference)

---

## ✏️ Creating Strings

Three ways to create a string — but backticks are the modern winner.

```mermaid
flowchart LR
    A["Double Quotes\n\"Rohit\""] -->|"Basic, works fine"| GOOD["✅"]
    B["Single Quotes\n'Rohit Negi'"] -->|"Basic, works fine"| GOOD
    C["Backticks\n\`Template Literals\`"] -->|"Multiline + interpolation"| BEST["⭐ Best"]

    style C fill:#d4edda,stroke:#28a745,color:#000
    style BEST fill:#d4edda,stroke:#28a745,color:#000
    style GOOD fill:#e2e3e5,stroke:#6c757d,color:#000
```

### Why Backticks Win

**1. Multi-line strings** — no errors when breaking lines:

```javascript
// ❌ Double/single quotes break on newline
let bad = "Line one
Line two";   // SyntaxError!

// ✅ Backticks handle it perfectly
let good = `Line one
Line two`;   // Works!
```

**2. Variable interpolation** with `${...}`:

```javascript
let day = 18;
console.log(`Strike is coming on ${day}`);
// Output: Strike is coming on 18
```

---

## 📏 Length & Indexing

```mermaid
block-beta
  columns 16
  H["H\n0"]:1
  E["e\n1"]:1
  L1["l\n2"]:1
  L2["l\n3"]:1
  O["o\n4"]:1
  SP["' '\n5"]:1
  C["C\n6"]:1
  O2["o\n7"]:1
  D["d\n8"]:1
  E2["e\n9"]:1
  R["r\n10"]:1
  SP2["' '\n11"]:1
  A["A\n12"]:1
  R2["r\n13"]:1
  M["m\n14"]:1
  Y["y\n15"]:1
```

```javascript
let str = "Hello Coder Army";

str.length   // 16  (spaces count as characters!)
str[0]       // 'H'
str[6]       // 'C'
str[15]      // 'y'
```

> 💡 Indices start at **0**. Spaces are counted as characters.

---

## 🧊 Strings are Immutable

Once created, a string's characters **cannot be changed directly**.

```javascript
let str = "Hello Coder Army";

str[2] = 'L';       // ❌ does nothing — no error, no change
console.log(str);   // "Hello Coder Army"  — still the same
```

> 🔑 Every string method **returns a new string**. The original is never modified.

---

## 🛠️ String Methods

### 🔠 Case Conversion

```javascript
let str = "Hello Coder Army";

str.toUpperCase()   // "HELLO CODER ARMY"
str.toLowerCase()   // "hello coder army"
// Original str is unchanged ✅
```

---

### 🔍 Searching

```javascript
let str = "Hello Coder Army";

str.indexOf("Coder")      // 6   — first occurrence (or -1 if not found)
str.indexOf("cer")        // -1  — case-sensitive, not found

let s = "Coder and Coder";
s.lastIndexOf("Coder")    // 10  — last occurrence

str.includes("Army")      // true
str.includes("xyz")       // false
```

| Method | Returns | Notes |
|--------|:-------:|-------|
| `indexOf(sub)` | Index or `-1` | First occurrence, case-sensitive |
| `lastIndexOf(sub)` | Index or `-1` | Last occurrence |
| `includes(sub)` | `true`/`false` | Clean boolean check |

---

### ✂️ Slicing — `slice(start, end)`

Extracts characters from `start` up to (**not including**) `end`.

```mermaid
flowchart LR
    subgraph POS["Positive Indices (left to right)"]
        P["str.slice(2, 5)  →  'llo'\nstr.slice(2)      →  'llo Coder Army'"]
    end

    subgraph NEG["Negative Indices (right to left)"]
        N["str.slice(-4)       →  'Army'\nstr.slice(-5, -2)  →  'r Ar'"]
    end

    style POS fill:#e8f4fd,stroke:#3498db,color:#000
    style NEG fill:#fdf2f8,stroke:#8e44ad,color:#000
```

```javascript
let str = "Hello Coder Army";
//  Positive:  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
//  Negative: -16-15-14-13-12-11-10 -9 -8 -7 -6 -5 -4 -3 -2 -1

str.slice(2, 5)     // "llo"           — index 2 to 4
str.slice(2)        // "llo Coder Army"— index 2 to end
str.slice(-4)       // "Army"          — last 4 characters
str.slice(-5, -2)   // "r Ar"          — from -5 up to -3
```

> 🆚 `substring(start, end)` works like `slice` but **no negative indices** — negatives are treated as `0`.

---

### 🔁 Replace

```javascript
"Hello Coder".replace("Coder", "Army")    // "Hello Army"  — first match only
"a a a".replaceAll("a", "b")              // "b b b"       — all matches
```

---

### ✂️ Trim Whitespace

```javascript
"   Hello   ".trim()        // "Hello"   — both ends
"   Hello   ".trimStart()   // "Hello   "— leading only
"   Hello   ".trimEnd()     // "   Hello"— trailing only
```

> ℹ️ Only **edge** spaces are removed. Spaces between words stay.

---

### 🪓 Split into Array

```javascript
"Rohit,Mohit,Suraj".split(",")   // ["Rohit", "Mohit", "Suraj"]
"a b c".split(" ")               // ["a", "b", "c"]
```

---

## ➕ Concatenation

Joining strings with `+` has a **left-to-right** evaluation quirk:

```mermaid
flowchart LR
    A["24 + 30 + 'Rohit'"] --> B["54 + 'Rohit'"]
    B --> C["'54Rohit'\n(numbers added first)"]

    D["24 + 'Rohit' + 10"] --> E["'24Rohit' + 10"]
    E --> F["'24Rohit10'\n(string found → all strings)"]

    style C fill:#d4edda,stroke:#28a745,color:#000
    style F fill:#fff3cd,stroke:#856404,color:#000
```

```javascript
24 + 30 + "Rohit"   // "54Rohit"   — numbers added first, then string concat
24 + "Rohit" + 10   // "24Rohit10" — string met first, rest become strings
```

---

## 📅 The Date Object

### Getting the Current Time

```javascript
let now = new Date();

now.toString()       // "Wed Oct 01 2025 04:08:49 GMT+0530 (IST)"
now.toISOString()    // "2025-09-30T22:36:34.125Z"  — UTC format
now.toLocaleString() // local date and time (country-specific format)
```

> ⚙️ Time is taken from your **system clock** — even offline, a hardware clock keeps ticking.

---

### 📅 Extracting Components

```javascript
let now = new Date();

now.getFullYear()   // 2025
now.getMonth()      // 9    ← ⚠️ 0-based! (Jan=0, Feb=1, … Oct=9, Dec=11)
now.getDate()       // 1    ← day of month (1-based)
now.getDay()        // 3    ← day of week (0=Sun, 1=Mon … 6=Sat)
now.getHours()      // 4
now.getMinutes()    // 8
now.getSeconds()    // 49
```

```mermaid
flowchart LR
    subgraph MONTHS["⚠️ Months are 0-indexed"]
        M["Jan=0  Feb=1  Mar=2\nApr=3  May=4  Jun=5\nJul=6  Aug=7  Sep=8\nOct=9  Nov=10  Dec=11"]
    end
    subgraph DAYS["Days of Week (0-indexed)"]
        D["Sun=0  Mon=1  Tue=2\nWed=3  Thu=4  Fri=5  Sat=6"]
    end

    style MONTHS fill:#f8d7da,stroke:#721c24,color:#000
    style DAYS fill:#fff3cd,stroke:#856404,color:#000
```

> 🐛 **Why the inconsistency?** JavaScript copied Java's old `Date` implementation. It can't be fixed now without breaking millions of existing websites.

---

### 🛠️ Creating Custom Dates

```javascript
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

let custom = new Date(2025, 8, 20, 8, 25, 16, 125);
//                         ↑
//                     month=8 → September (0-based!)
```

---

## 🕰️ UTC vs Local Time

```mermaid
flowchart TD
    UTC["🌍 UTC\nUniversal Time Coordinated\n(Same everywhere on Earth)"]

    UTC -->|"+05:30"| IND["🇮🇳 India (IST)\nUTC + 5 hours 30 min"]
    UTC -->|"-04:00"| USA["🇺🇸 USA Eastern\nUTC - 4 hours"]
    UTC -->|"+01:00"| UK["🇬🇧 UK (BST)\nUTC + 1 hour"]
    UTC -->|"+09:00"| JAP["🇯🇵 Japan (JST)\nUTC + 9 hours"]

    style UTC fill:#cce5ff,stroke:#004085,color:#000
    style IND fill:#fff3cd,stroke:#856404,color:#000
    style USA fill:#f8d7da,stroke:#721c24,color:#000
    style UK fill:#d4edda,stroke:#28a745,color:#000
    style JAP fill:#fdf2f8,stroke:#8e44ad,color:#000
```

```javascript
// UTC timestamp received from server
let d = new Date('2025-09-30T22:36:34Z');   // Z = UTC

d.toString();   // Browser auto-converts → shows YOUR local time ✅
```

> 💡 **Why UTC matters for apps:** When storing contest submissions, video upload times, or any timestamp — store in **UTC milliseconds**. The browser then auto-converts to each user's local time correctly.

---

## ⏱️ Epoch Time & `Date.now()`

```mermaid
timeline
    title JavaScript Time — Epoch to Now
    section Epoch Start
        Jan 1, 1970 : UTC 00:00:00
                    : The universal "zero point" for time
    section Modern
        2025        : ~1,757,600,000,000 ms since epoch
                    : Date.now() returns this number
```

```javascript
Date.now()         // e.g., 1757600000000  — milliseconds since Jan 1, 1970 UTC

new Date(0)        // "Thu Jan 01 1970 05:30:00 GMT+0530"  (epoch start, in IST)
new Date(Date.now()) // today's date
```

> 🗄️ Timestamps are just **plain numbers** — easy to store in databases, compare, sort, and transmit across timezones.

---

## 📊 Quick Reference

### String Methods Cheatsheet

| Method | What it does | Returns |
|--------|-------------|:-------:|
| `str.length` | Character count | Number |
| `str.toUpperCase()` | ALL CAPS | String |
| `str.toLowerCase()` | all lowercase | String |
| `str.indexOf(s)` | First index of `s` | Number / `-1` |
| `str.lastIndexOf(s)` | Last index of `s` | Number / `-1` |
| `str.includes(s)` | Does `s` exist? | Boolean |
| `str.slice(s, e)` | Extract `s` to `e` | String |
| `str.substring(s, e)` | Like slice, no negatives | String |
| `str.replace(a, b)` | Replace first `a` with `b` | String |
| `str.replaceAll(a, b)` | Replace all `a` with `b` | String |
| `str.trim()` | Remove edge spaces | String |
| `str.trimStart()` | Remove leading spaces | String |
| `str.trimEnd()` | Remove trailing spaces | String |
| `str.split(sep)` | Split into array | Array |

### Date Methods Cheatsheet

| Method | Example Output |
|--------|---------------|
| `new Date()` | Current date & time |
| `Date.now()` | `1757600000000` (ms since epoch) |
| `date.toString()` | `"Wed Oct 01 2025 04:08:49 GMT+0530"` |
| `date.toISOString()` | `"2025-09-30T22:36:34.125Z"` |
| `date.toLocaleString()` | Local formatted string |
| `date.getFullYear()` | `2025` |
| `date.getMonth()` | `9` *(0-based — add 1 for human month!)* |
| `date.getDate()` | `1` *(day of month)* |
| `date.getDay()` | `3` *(0=Sun … 6=Sat)* |
| `date.getHours()` | `4` |
| `date.getMinutes()` | `8` |
| `date.getSeconds()` | `49` |

---

<div align="center">

**Happy Coding! 🚀**

*Made with ❤️ for JavaScript beginners everywhere*

</div>