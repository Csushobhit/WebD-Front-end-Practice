# CSS Flexbox Notes

## display
- display: flex → activates flexbox
- applied on parent (container)
- children automatically align in one line

---

## flex-direction
- defines direction of main axis

values:
- row (default)
- column
- row-reverse
- column-reverse

note:
- main axis depends on direction
- cross axis is perpendicular to main axis

---

## justify-content (MAIN AXIS)
- controls alignment along main axis

values:
- flex-start → start
- flex-end → end
- center → center
- space-between → equal space between items
- space-around → equal space around items
- space-evenly → equal space everywhere

---

## align-items (CROSS AXIS)
- controls alignment along cross axis

values:
- flex-start
- flex-end
- center
- stretch

---

## flex-wrap
- controls wrapping of items

values:
- nowrap (default) → items shrink
- wrap → items move to next line
- wrap-reverse

use:
- makes layout responsive

---

## gap
- adds spacing between items
- applied on parent
- better than margin for spacing

example:
- gap: 10px

---

# FLEX ITEM PROPERTIES

## flex-grow
- defines how much extra space item takes
- default = 0

example:
- flex-grow: 1 → takes 1 part
- flex-grow: 2 → takes 2 parts

note:
- works only on extra available space

---

## flex-shrink
- defines how fast item shrinks
- default = 1

example:
- flex-shrink: 2 → shrinks faster than others

---

## flex-basis
- defines initial size along main axis
- overrides width/height

note:
- row → controls width
- column → controls height

example:
- flex-basis: 200px

---

## align-self
- overrides align-items for single item
- works on cross axis

values:
- flex-start
- flex-end
- center

---

# IMPORTANT RULES

- parent controls layout
- flex works only between parent and children
- no need for manual margin calculations
- layout becomes automatic

---

# AXIS RULE

- flex-direction: row  
  → main axis = horizontal  
  → cross axis = vertical  

- flex-direction: column  
  → main axis = vertical  
  → cross axis = horizontal  

---

# QUICK NOTES

- justify-content → main axis  
- align-items → cross axis  
- flex-basis depends on direction  
- flex-grow distributes extra space  
- flex-shrink handles shrinking  
- gap is cleaner than margin  
- wrap prevents shrinking  

---

# PRACTICE

- :contentReference[oaicite:0]{index=0}
-flexbox froggy