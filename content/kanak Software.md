### 🏢 **Kanak Software** (Client: posh.ai) | Full Stack Developer  | Pune/India
👤 **L1 Round:** Screening Exam  
👤 **L2 Round Interviewers:** Snehal Gugale, Mrunali Shinde

---

## 📘 L1 – Screening Assessment (Coding Test)

### 1️⃣ **URL Fragment & Hostname Extraction – Node.js**

**Problem Statement:**  
Write a Node.js program that extracts:
- The **fragment** (portion after `#`)
- The **hostname** of a given URL string  
If no fragment exists, print `-1`.

**Input Format:**
```txt
https://localhost.in/test#jsm
````

**Output Format:**

- jsm
- localhost.in

**Explanation:**

* Fragment: `jsm`
* Hostname: `localhost.in`

---

### 2️⃣ **SQL Query – SQLite**

**Table:** `Placement_stats`
**Schema:** `Roll_No | Name | Field | CTC `

**Problem:**
Select names and fields of students **whose CTC exceeds the average CTC in their field by more than 15000**.
**Output Columns:** `Name`, `Field`
**Order By:** `Field ASC`

**Constraints:**

* Use only `SELECT ... FROM ... WHERE` queries (SQLite syntax)

---

### 3️⃣ **String Problem – Minimum Even Digit Substring (Amplification Signal)**

**Problem:**
Given a string `S` of digits, find the length of the **smallest substring** containing **all even digits** (0, 2, 4, 6, 8).
If no such substring exists, return `-1`.

**Sample Input:** 02045202156424801321

**Sample Output:** 6

**Explanation:**
The substring `"642480"` contains all even digits.

**Constraints:**

* `1 <= |S| <= 100000`
* Contains only numeric characters

---

## 🎯 L2 – Virtual Technical Interview (React.js Focus)

### 🔹 React & Frontend Topics

* Can you tell me about your **React experience** and **project types**?
* Difference between **Class Component vs Function Component**. Which do you prefer and why?
* Which **React Hooks** have you used most commonly?
* Difference between **useEffect vs useLayoutEffect** – with example
* How do you manage **state in large-scale React apps**? (Explain with an example)
* How do you ensure **component reusability and code modularity** in React?
* Difference between **CSS and SASS**

### 🔹 UI/UX, Optimization & Architecture

* Describe a **complex UI/UX feature** you implemented:

  * What were the technical challenges?
  * How did you solve them?

* What is **lazy loading**?

* Explain **Virtualization / Windowing / Virtual Lists** – logic and use case

* How do you implement **SSR/SSG** in React with **Next.js**?

* Difference between `React.createElement` vs `React.cloneElement`

### 🔹 Advanced React & Data Handling

* Have you worked with:

  * **GraphQL** in React?
  * **RTK Query**, **React Query**, or **TanStack Query**?

* What is the use of the **useReducer** hook?

---

✅ *This interview round covered core React principles, advanced component architecture, performance optimization (lazy loading, virtualization), and modern data fetching strategies.*
