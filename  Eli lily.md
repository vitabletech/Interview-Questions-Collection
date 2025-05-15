### 🏢 **ACL Digital** (Client: Eli Lilly) | Full Stack Developer  
📍 **Location:** Bangalore, India  
👤 **1st Round Interviewer:** Hasan Ali  
👤 **2nd Round Interviewer:** Mayank Shrivastav

---

## 🔹 1st Round – Core JavaScript & Architecture (Hasan Ali)

### 🧠 JavaScript Concepts & Problem Solving

- Can you give an overview of the **Event Loop and its architecture**?  
  - How does it handle multiple operations simultaneously?

---

### 🔎 Deep Clone Challenge

**Code:**
```js
const original = {
    age: 26,
    date: new Date(),
    map: new Map([['key', 'value']]),
    set: new Set([1, 2, 3]),
};

const clone1 = JSON.parse(JSON.stringify(original));
console.log(clone1);  // map and set are lost
````

**Discussion:**

* Why does `JSON.stringify()` fail to preserve `Map`, `Set`, and `Date`?
* How can you perform a **deep clone** that maintains all these values?

**Follow-up:**

* What are the **reliable ways** to deep clone complex objects without data loss?

---

### 🧩 JavaScript Core Features

* Explain the use of **call**, **apply**, and **bind** in JavaScript.
* Show a **real-world use case of `bind()`**.

---

### 🛠️ Coding Task: Custom `bind()` Implementation

**Example:**

```js
const person = { name: 'mayank' };
function test() {
    console.log(this.name);
}
const bindFn = myBind(test, person);
bindFn(); // Output: mayank
```

**Task:**

* Implement `myBind()` that mimics `Function.prototype.bind`.

---

### 🏗️ Architecture

* Have you worked with **Monolithic** or **Microservices** architectures—or both?
* What is a **Micro-Frontend**, and how does it work?
* How to Implement in React js?

---

## 🔹 2nd Round – Deep JavaScript Internals (Mayank Shrivastav)

### 📦 Deep Copy & Equality

* Explain **Deep Copy** and write a **custom function** to implement it.
* Write a **function to perform Deep Equality Check** between two objects.

---

### 🔍 JavaScript Internals

* What is the **Reflect API** or `Reflect` methods in JavaScript?

  * What problems do they solve?

* What is the purpose of a **WeakMap**?

---

### 🧠 Comparison

* Difference between **Map vs WeakMap**:

  * Memory management?
  * Keys type?
  * Use cases?
  * Pros and cons?

---

✅ *This interview series focused heavily on deep JavaScript knowledge—event loop internals, cloning complexities, custom implementations, architecture patterns (monolith vs microservices), and nuanced data structures (Map, WeakMap, Reflect).*