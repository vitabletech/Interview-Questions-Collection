### 🏢 **BCE Global Tech**
🛠️ **Role:** React-js Fullstack Developer
📍 **Location:** Bangalore, India
👤 **Recruiter name:** ---

---
**Round 1** – Technical Interview (Virtual Video Call)
👤 **Interviewer:** Ramesh

---

## 🧑‍💻 General Introduction

1. **Can you start with your introduction, experience, and recent project details?**
2. **What is your current project status and reason for leaving?**
3. **Are you working on full stack or primarily frontend/backend?**
4. **Which frontend technologies have you worked with — React, Next.js?**
5. **Which backend technologies have you worked with — PHP, Node.js?**

---

## ⚛️ ReactJS

6. **Are you using Redux Thunk? What is its purpose?**
7. **Have you implemented custom interceptors in React code?**
8. **Where do you append the token in Axios interceptors?**
9. **Can we avoid calling the interceptor multiple times (e.g., 20 API calls)?**
10. **How would you optimize token handling using Axios default headers?**
11. **Can you register the same action type in multiple Redux reducers? What happens?**
12. **What are `actions`, `dispatch`, and `reducers` in Redux?**
13. **What happens if the same action type is handled in multiple reducers — which one is invoked?**

---

## 💻 React + NodeJS Hands-On Task

14. **React + NodeJS: Create a simple app to fetch paginated employee data**

* Build a UI with a button to fetch employees
* On click, call a NodeJS backend API
* Backend should return employees ordered by salary (descending), 20 at a time
* Implement pagination (next button to fetch next 20 records)

15. **Should you use actual runnable code or just pseudo code for this task?**

---

## 🟢 NodeJS / Backend

16. **How to connect NodeJS with MySQL using `mysql` package?**
17. **How to implement pagination using `LIMIT` and `OFFSET` in SQL query?**

---

## ⚙️ JavaScript Fundamentals

18. **How to set default values in a function argument?**
19. **If you pass `undefined` or `null` as an argument, how will it behave with default values?**

```js
function test(num1 = 1, num2 = 2) {}
test(undefined, null); // What is the output?
```

---

## 🧠 NodeJS Concepts

20. **Do you have an idea about the Event Loop in NodeJS?**
21. **How does NodeJS handle non-blocking and blocking operations?**
22. **How can you apply concurrency or parallelism in NodeJS?**

* Worker Threads
* Clusters
* `worker.js`

---

## ❓ Final

23. **Do you have any questions for us?**

---

### ✅ Summary of Key Areas Tested

| Category            | Focus                                                         |
| ------------------- | ------------------------------------------------------------- |
| **ReactJS**         | Redux, Axios interceptors, pagination, default props          |
| **NodeJS**          | Event loop, concurrency, SQL pagination, MySQL connection     |
| **JavaScript**      | Function default values, null vs undefined                    |
| **Full-Stack Task** | End-to-end paginated employee list via React + NodeJS + SQL   |
| **Architecture**    | Efficient token management, API design, concurrent processing |
