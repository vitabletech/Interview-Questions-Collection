### 🏢 **Tenant Inc**

🛠️ **Role:** React-js Fullstack Developer
📍 **Location:** Bangalore, India
👤 **Recruiter Name:** [Sania Khatwani](mailto:sania.khatwani@bankopen.com)

---

### ✅ Round 1 – Technical Interview (Virtual Video Call)

👤 **Interviewer:** Rajat Devdhar

---

### ✅ Node.js & JavaScript Conceptual Questions

1. Why should I be using **Node.js** over other technologies like PHP, Python, or Java?
2. Is Node.js **synchronous or asynchronous**?
3. What is a **callback**?
4. What are the **issues associated with callbacks**?
5. With **promises**, doesn’t **promise chaining** also create complexity like callbacks?
6. Do you know what **promise chaining** is?
7. Have you used `**async**` and `**await**`?
8. What is the **purpose and behavior** of `async/await`?
9. Given two similar functions (one with `await`, one without), will their **output be the same**? *(discussed functional difference)*
10. Why does the variable `user` throw `undefined` error when declared inside an `if-else` block with `let`?
    ```js
        function isAdmin(userRole) {
        const adminRoles = ['admin', 'super-admin', 'administrator'];
        
        if (adminRoles.includes(userRole)) {
            let user = "Admin User";
        } else {
            let user = "Regular User";
        }

        console.log("The user is ", user);
        return;
    }

    isAdmin("admin");
    isAdmin("manager");
    ```

---

### ✅ JavaScript Scope & Variable Behavior

11. What is a **block**? Why isn’t a `let` variable accessible outside it?
12. Isn’t a function body also a block? Isn’t `let` still block scoped?
13. How many **types of scope** exist in JavaScript?
14. When you say **global scope**, can variables be shared **across multiple files**?
15. Is there a **true global scope** in JS (without exporting)?
16. What’s the **difference** between `var`, `let`, and `const`?
17. If you pass a `const` and `let` variable to a function, and modify them inside, will the changes reflect outside?
18. How do **primitives vs references** behave when passed into a function?

---

### ✅ Express.js / Routing Debugging

19. Why does hitting `/source` throw an error about `lead ID` being invalid?
    ```js
    router.post('/lead-script',
    [control.hasAccess(['admin','api']), Hash.unHash],
    async (req, res, next) => {
        ...
    }
    );

    router.post('/:lead_id',
    [control.hasAccess(['admin','api']), Hash.unHash],
    async (req, res, next) => {
        ...
    }
    );

    router.post('/source',
    [control.hasAccess(['admin','api']), Hash.unHash],
    async (req, res, next) => {
        ...
    }
    );
    ```
20. Why is `/source` being routed to `/:lead_id` instead?
21. If `lead-script` and `source` are defined similarly, why does only `source` fail?

✅ **Root Cause:**
In Express.js, **dynamic routes (e.g., `/:param`) must come last**, or they will match unintended static routes like `/source`.

---

### ✅ Live Task / Coding Assignment

22. - 🕒 Design a Digital Clock in HH:MM:SS format.
    - Live clock, that means seconds, minutes and hours are updating as the clock.
    - The text in the clock gets printed in the center of the screen, horizontally and vertically.
    - Whole Background needs to be in Black color, and Text needs to be in Green color.

---

### ✅ Final Questions

23. Do you have any questions for me?

---

### ✅ Round 2 – Techno Manger Interview (F2F)
