### 🏢 **L1 Technical Interview – Sr. UI Developer**  
🧾 **Role ID:** RSD - 10696  
👤 **Interviewer:** Sayeed Roshan  
📍 **Client:** RSM  
🛠️ **Focus Areas:** JavaScript, HTML/CSS, React.js

---

## 🔹 JavaScript – Core Concepts

- **How many ways are there to create an object in JavaScript?**
  - Examples: object literals, `Object.create()`, constructor functions, classes, `Object.assign()`, etc.

- **Difference between:**
  ```js
  const a = {};
  const b = Object.create(...);
  ```

---

### ✅ High-Order Functions & Polyfills

* What is a **High-Order Function (HOF)**?
* **What is a Polyfill?**
* **Write a Polyfill for `Array.prototype.map`**

  ```js
  Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  ```

---

### ✅ Character Frequency Count

* **Problem:**

  ```js
  const charArray = ['a', 'b', 'a', 'c', 'b', 'a'];
  countCharFrequency(charArray); // Output: { a: 3, b: 2, c: 1 }
  ```

* **Follow-up:**
  Implement it using `Array.prototype.reduce`.

---

## 🔹 HTML + CSS – Practical Task

* **Task:**
  Create a parent `div` with 3 child `div`s. Each:

  * Width & Height: `100px`
  * Margin: `5px`
  * Background: `red`
  * Text: "Child 1", "Child 2", "Child 3"
  * Text should be **centered vertically and horizontally**

* **Flexbox Solution:**

  ```html
  <div class="parent">
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
    <div class="child">Child 3</div>
  </div>
  ```
---

## 🔹 React.js – Dynamic Form Handling

* **Task:**
  Create an input box to accept fruit names. On clicking "Add Fruit", it should display the list below.

---

✅ *This round focused on fundamentals, practical hands-on tasks, and basic proficiency in JavaScript, React, and layout using HTML/CSS.*
