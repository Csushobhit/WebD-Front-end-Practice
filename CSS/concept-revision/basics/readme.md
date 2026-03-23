# 🎨 CSS BASICS — COMPLETE NOTES

A clean, structured reference for core CSS concepts. Designed for quick revision and practical usage.

---

## 📌 WHAT IS CSS

- CSS (Cascading Style Sheets) is used to style HTML elements
- Controls appearance and layout of web pages

**Concept:**
- HTML → Structure  
- CSS → Design  

---

## 🎯 TYPES OF CSS

### 🔹 Inline CSS
Applied directly inside HTML elements  
Example: `<h1 style="color: red;">Hello</h1>`

- Highest priority  
- Not reusable  
- Not suitable for large projects  

---

### 🔹 Internal CSS
Defined inside `<style>` tag within `<head>`

Example:
    <head>
      <style>
        h1 {
          color: blue;
        }
      </style>
    </head>

- Works for single page  
- Limited reuse  

---

### 🔹 External CSS (Best Practice)
Defined in a separate `.css` file  

HTML:
    <link rel="stylesheet" href="style.css">

CSS:
    h1 {
      color: green;
    }

- Reusable across pages  
- Clean and maintainable  
- Industry standard  

---

## ⚠️ CSS PRIORITY

Inline > Internal > External  

---

## 🎯 SELECTORS

Selectors define which elements to style  

---

### 🔹 Element Selector
    h1 {
      color: red;
    }

Targets all `<h1>` elements  

---

### 🔹 ID Selector
HTML:
    <h1 id="title">Hello</h1>

CSS:
    #title {
      color: blue;
    }

- Unique  
- Used for single element  

---

### 🔹 Class Selector
HTML:
    <h1 class="box">Hello</h1>

CSS:
    .box {
      color: green;
    }

- Reusable  
- Can be used multiple times  

---

### 🔹 Group Selector
    h1, p {
      color: purple;
    }

Applies same style to multiple elements  

---

## 🎨 COLORS IN CSS

### 🔹 Named Colors
    color: red;

---

### 🔹 RGB
    color: rgb(255, 0, 0);

Range: 0–255  

---

### 🔹 RGBA (Transparency)
    color: rgba(255, 0, 0, 0.5);

Last value controls opacity (0–1)  

---

### 🔹 HEX
    color: #ff0000;

---

### 🔹 HSL
    color: hsl(0, 100%, 50%);

- Hue → color  
- Saturation → intensity  
- Lightness → brightness  

---

## 📏 UNITS

### 🔹 Pixel (px)
    font-size: 40px;

- Most commonly used  
- Depends on screen resolution  

---

## 🔤 FONTS

### 🔹 Default Fonts
    font-family: Arial;

---

### 🔹 Fallback Fonts
    font-family: Arial, Helvetica, sans-serif;

If first font is unavailable, next is used  

---

### 🔹 Google Fonts

Add in HTML:
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

Use in CSS:
    font-family: 'Roboto', sans-serif;

---

## ⚠️ IMPORTANT CONCEPTS

### 🔹 CSS CASCADE
- Multiple styles can apply to same element  
- Final style depends on priority and order  

---

### 🔹 ID vs CLASS

| Feature   | ID        | Class     |
|----------|----------|----------|
| Unique   | Yes      | No       |
| Reusable | No       | Yes      |

---

## 📚 QUICK REVISION

- CSS styles HTML  
- Three types: inline, internal, external  
- External CSS is best practice  
- Selectors target elements  
- Multiple color formats available  
- Fonts can be local or Google Fonts  
- px is the most commonly used unit  

---