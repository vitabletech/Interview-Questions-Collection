### 🏢 **Randstad Digital** | Fullstack Developer | Node.js, React.js | Remote/India

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
