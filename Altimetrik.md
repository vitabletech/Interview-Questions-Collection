### 🏢 **Altimetrik**
🛠️ **Role:** Engineer – Site Reliability Engineering (SRE)  
📍 **Location:** Bangalore, India  
👤 **Interviewer:** Vaibhav Nigam

---
**Round 1** – Technical Interview (Virtual Video Call)

## 🔹 Introduction & Project Discussion

- Started with a self-introduction.
- Discussed current and previous project contributions in detail.
- Asked about involvement in any **open-source projects**:
  - What’s the project name?
  - What was your role?

---

## 🔹 Testing & CI/CD

- What **testing libraries** have you used?
- Have you ever worked on or configured **CI/CD pipelines**?

---

## 🔹 AWS Ecosystem & Services

### ✅ AWS Services Experience

- What AWS services have you used so far?
- Have you worked with:
  - **API Gateway**?
  - **Secrets Manager**?
  - **EventBridge**?
  - **SQS** and **SNS**?
    - How do they work?
    - What are their **use cases**?
    - Are there any **message size limitations**?
  - **Event Bus**?
  - **Step Functions**?

---

### ⚙️ Architecture & Scalability

- How does **distribution work in Load Balancers**?
- What’s the difference between:
  - **Horizontal Scaling** vs **Vertical Scaling**?
- If designing a **Load Balancer in EC2**, what components must be created first?
- Have you worked with **cross-account roles**?
- Scenario:
  - You have a **Lambda in Account A** that needs to **trigger another Lambda in Account B**. How would you achieve this?

---

## 🔹 DevOps Tools & API Documentation

- What is **Lambda Layers**?
- What is **AWS SAM (Serverless Application Model)**?
- What **framework** do you use to **map the entire tech stack**?
- Have you used **Swagger** or similar tools for API documentation?

---

## 🔹 Python

- How do you **maintain types** in Python?
- What are **decorators** in Python?
- What is **duck typing**?

---

## 🔹 TypeScript Concepts

- Difference between:
  ```ts
    type a = { name?: string };
    type a = { name?: String };
    ```

- Difference between **`type` and `interface`** in TypeScript.

---

## 🔹 JavaScript Deep Dive

* How do **closures** work in JavaScript?
* Difference between **arrow functions** and **regular functions**.
* What is a **bounded context**?

  * When using a **callback within a function**, it captures variables from the outer scope. Are there **scenarios** where this doesn't work as expected?

---

## 🔹 Node.js Internals

* What is `process.env`?
* What is a **Process Library** and what does it do?
* Which library is used for **multi-threading in Node.js**?
* How does **Cluster hierarchy** distribute tasks?
* Difference between **PM2** and **Cluster** in Node.js.

---

## 🔹 ETL & Performance Discussion

* What is **ETL**?
* Why is **Node.js not suitable for large ETL tasks**?

  * Node is better suited as a **handler**, not for **heavy computation**.
  * **Python** is more suitable for data-heavy operations.

---

## 🔹 Mocking & Error Handling

* What is a **mock**?
* How can you mock and **return values in two different ways**?
* How do you handle **global error extraction** in Node.js?

  * e.g., capturing errors across multiple modules in a **central try-catch block**.

---

## 🔹 Algorithm Problem

* LeetCode: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

  * Write a function to find the length of the longest substring without repeating characters.
    * follow-up questions
    * What if Unicode?
    * What is Time and Space Complexity?
    * Can you optimize memory?
    * Return the substring instead of its length?



---
**Round 2** – Online Technical Test (Hackerrank Round)

✅ *This interview covered a wide range of topics—from cloud and DevOps (AWS, CI/CD, SRE principles) to deep backend concepts in Node.js and TypeScript, with practical coding problems and architectural discussions.*