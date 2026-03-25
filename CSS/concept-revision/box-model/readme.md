# 📦 CSS BOX MODEL & DISPLAY — QUICK NOTES

## 📌 BOX MODEL

Every HTML element is treated as a box.

Structure (inside → outside):
    Margin
      Border
        Padding
          Content

Visual:
    +---------------------------+
    |          Margin           |
    |  +---------------------+  |
    |  |       Border        |  |
    |  |  +---------------+  |  |
    |  |  |    Padding    |  |  |
    |  |  | +-----------+ |  |  |
    |  |  | | Content   | |  |  |
    |  |  | +-----------+ |  |  |
    |  |  +---------------+  |  |
    |  +---------------------+  |
    +---------------------------+

## 🔹 CONTENT
- Actual text or image
- Controlled using width and height

Example:
    width: 200px;
    height: 100px;

## 🔹 PADDING
- Space inside the box (between content and border)
- Pushes content inward

Example:
    padding: 20px;

Shorthand:
    padding: 10px 20px 30px 40px;

## 🔹 BORDER
- Surrounds padding and content

Example:
    border: 5px solid black;

Types:
- solid
- dashed
- dotted

## 🔹 MARGIN
- Space outside the element
- Controls distance between elements

Example:
    margin: 20px;

## ⚠️ DIFFERENCE

- Padding → inside spacing
- Margin → outside spacing

## 🎯 INLINE vs BLOCK

## 🔹 BLOCK ELEMENT
Examples: div, h1, p

- Takes full width
- Starts on new line
- Width and height work

## 🔹 INLINE ELEMENT
Examples: span, a

- Takes only required width
- Does not start on new line
- Width and height do not work properly

## ⚠️ COMPARISON

- Block → full width, new line
- Inline → content width, same line

## 🎯 DISPLAY PROPERTY

Used to change element behavior

## 🔹 display: block
- Element behaves like block

## 🔹 display: inline
- Element behaves like inline

## 🔹 display: inline-block
- Hybrid behavior
- Same line + supports width and height

Example:
    display: inline-block;
    width: 200px;
    height: 100px;

## 🎯 BOX-SIZING

## 🔹 content-box (default)
- Width = content only
- Padding and border added outside

## 🔹 border-box
- Width includes content + padding + border

Example:
    box-sizing: border-box;

## 📚 SUMMARY

- Every element is a box
- Order → content → padding → border → margin
- Block elements take full width
- Inline elements take only required space
- Inline-block combines both behaviors
- Margin controls outside spacing
- Padding controls inside spacing
- Border defines boundary