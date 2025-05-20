### 🏢 **Randstad Digital** | Fullstack Developer | Node.js, React.js | Bangalore/India

**Round 1** – L1 Technical Interview (Virtual Video Call)
👤 *Interviewer: Rathon Sriram*

#### 🔹 Interview Questions

##### **JavaScript & Browser Concepts**

1. **What is hoisting?**

2. **Code Analysis:**
   ```js
   var a = 21;
   function test() {
       console.log(a);
       var a = 20;
   }
3. **Tricky JS Comparisons and Coercion:**
    ```js
    console.log(1 < 2 < 3);          // true
    console.log(3 > 2 < 1);          // true
    console.log(typeof typeof 1);   // "string"
    console.log(false == '0');      // true
    console.log(false === '0');     // false
    console.log(1 + "2" + "2");     // "122"
    console.log(1 + +"2" + "2");    // "32"
    console.log(1 + -"1" + "2");    // "02"
    console.log(+"1" + "1" + "2");  // "112"
    console.log("A" - "B" + "2");   // "NaN2"
    console.log("A" - "B" + 2);     // NaN
    (function() {
        console.log(1);
        setTimeout(function() { console.log(2); }, 1000);
        setTimeout(function() { console.log(3); }, 0);
        console.log(4);
    })();
    ```

4. **Array Manipulation:**

   ```js
   var arr1 = "john".split('');
   var arr2 = arr1.reverse();
   var arr3 = "johnes".split('');
   arr2.push(arr3);
   console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
   console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
   ```

---

##### **SQL & Database**

5. **Write an SQL query to find duplicate email addresses in a `user` table.**

6. **What are indexes? Why are they used?**

7. **Have you managed database transactions? How?**

---

##### **Node.js & Backend**

8. **Explain: `process.nextTick()`, `setImmediate()`, and `setTimeout()` in Node.js.**

9. **Have you used any middleware in Express? Which ones and for what purpose?**

10. **How do you secure a Node.js API?**

11. **How do you implement caching in Node.js?**

12. **Have you written test cases for Node.js? Tools and approach?**

13. **Understanding async task priorities:**

    * Which has higher priority: `Promise` or `setTimeout`?

---

##### **React & Frontend**

14. **What is a closure in JavaScript?**

15. **What React hooks have you used?**

16. **Difference between `useCallback` and `useMemo`?**

    * When to use which?

---

##### **React Implementation Task**

17. **Implement an Explorer View using React JS**

* 📁 Folder Structure Example:

  ```
  Root
      public
          index.html
      src
          components
              Home.js
          App.js
      package.json
  ```

* 📌 Task:

  1. Design JSON representing the folder structure.
  2. Build an Explorer View UI using React.
  3. Add CSS styling for folders and files for better visibility.

---

##### **Advanced React**

18. **What are custom hooks? When and why do you use them?**

19. **How do you handle errors in React JS?**

    * (Error boundaries, try/catch, global handlers, etc.)

**Round 2** – L2 Technical Interview (Virtual Video Call)
👤 *Interviewer: Dhruv Rana*

## 🔹 System Design & Browser Fundamentals

- Explain the journey of a **request to response** when a URL is entered in the browser.
- What’s the difference between **HTTP and HTTPS**?
- What is the purpose of a **CDN (Content Delivery Network)**?
- If a webpage becomes **unresponsive** and shows a **popup**, what should be checked and how can it be fixed?
- How does **asynchronous code work in the browser**?

---

## 🔹 Build Tools & JavaScript Runtime

- What are **build tools** like Webpack or Vite?  
  - What problem do they solve?
  - How are they used in a typical frontend project?

---

## 🔹 JavaScript Concepts & Code Analysis

### ✅ Callback Example & Use

- How do **callbacks** work in JavaScript?
  - Provide a real-world example.

---

### ✅ Code Output Analysis

#### 1. Variable Hoisting & TDZ (Temporal Dead Zone)

```js
console.log(a); // undefined
var a = 5;

console.log(typeof foo); // ReferenceError
let foo = 43;
````

#### 2. `var` vs Arrow Function `this` Binding in `setTimeout`

```js
const counter = {
  value: 0,
  inc() {
    setTimeout(function () {
      this.value++;
      console.log('regular', this.value); // NaN or undefined
    }, 0);

    setTimeout(() => {
      this.value++;
      console.log('arrow', this.value); // Correctly increments
    }, 0);
  },
};
counter.inc();
```

#### 3. Unknown `MyWallet` Custom Function

```js
const wallet = MyWallet();
wallet.add(x);
wallet.add(y);
wallet.retrieve();
```

* Asked to implement or explain expected behavior (custom class structure).

#### 4. Event Loop + Microtask + Macrotask Ordering

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve()
  .then(() => console.log(3))
  .then(() => {
    setTimeout(() => console.log(4), 0);
    console.log(5);
  });
console.log(6);
```

Expected Output:
1 → 6 → 3 → 5 → 2 → 4

#### 5. Prototype Chain & Property Shadowing

```js
function Animal() {}
Animal.prototype.eats = true;

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.jumps = true;

const r = new Rabbit();
Rabbit.prototype.eats = false;

console.log(r.eats);                    // true
console.log('eats' in r);              // true
console.log(r.hasOwnProperty('eats')); // false
```

#### 6. Async/Await Execution Order

```js
(async () => {
  console.log(1);
  setTimeout(() => console.log(2));
  await Promise.resolve(console.log(3));
  console.log(4);
  setTimeout(() => console.log(5));
  await null;
  console.log(6);
})();

Promise.resolve().then(() => console.log('G'));
setTimeout(() => console.log('H'), 0);
console.log('I');
```

Expected Output:
1 → 3 → I → 4 → 6 → G → 2 → 5 → H

---

## 🔹 Async Function Sequencing (Custom Implementation)

### 🧪 Problem:

* Create a `custom_function(p1, p2, p3, p4...)` that:

  * Accepts **dynamic arguments (functions)**.
  * Runs them **sequentially**.
  * Passes the **result of one promise** to the **next**.

#### Sample Functions:

```js
const p1 = param => {
  console.log('p1 called with param', param);
  return Promise.resolve(1);
};
const p2 = param => {
  console.log('p2 called with param', param);
  return Promise.resolve(2);
};
// and so on...
```

---

## 🔹 Functional Programming

* What is **Functional Programming**?

  * Benefits?
  * Comparison with **Object-Oriented Programming** (OOP)?

---

## 🔹 Currying & Composition

* What is **currying**?

  * Show an **example with dynamic arguments**.
* What is **function composition**?

---

## 🔹 Debounce & Throttling

* Explain the concepts of **debounce** and **throttling**.
* Implement both in JavaScript.

---

## 🔹 Deep vs Shallow Copy

* What is the difference between **shallow copy** and **deep copy**?
* Write a **custom deep copy function**.

---

✅ *This round was heavily focused on JavaScript internals, async flow, browser event loop, and frontend build tools. It also tested the ability to implement custom logic in real-world scenarios.*

```