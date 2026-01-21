- 🛠️ **Role:** Fullstack Developer
- 📍 **Location:** Gurugram, India
- 👤 **Recruiter Name:** [Manisha Kanyal](mailto:mkanyal@glgroup.com)

---
### ✅ Round 1 – Technical Interview (Virtual Video Call)

👤 **Interviewer:** James Gallagher

---
## 1. Introduction and Background

1. Can you introduce yourself and walk me through your past experience?
2. What domains have you worked in during your career?
3. What technologies have you worked with on backend, frontend, and cloud?
4. Can you describe a recent project you worked on and your role in it?
5. Have you led a team before? What responsibilities did you handle as a lead?

---

## 2. Frontend vs Backend Experience

6. In your six years of experience, how would you split your work between frontend and backend in percentage terms?
7. Has your experience been more frontend-heavy or backend-heavy?
8. Do you have a preference between frontend and backend work?
9. If given a choice, which side would you prefer to work on and why?

---

## 3. System Design and Backend Architecture

10. We manage a critical REST service that sits between applications and databases. What design considerations would you apply to make such a service scalable, fast, and reliable?
11. How would you design a service so it does not overload the database?
12. What strategies would you use to reduce unnecessary database calls?
13. How would you ensure high availability and robustness at the service layer?
14. What role do caching, load balancing, and rate limiting play in such a system?

---

## 4. Connection Management

15. Are you familiar with connection pooling?
16. Can you explain connection pooling and why it is important?
17. How does connection pooling help performance and reliability?

---

## 5. CI/CD and DevOps Practices

18. You mentioned CI/CD. Can you explain how you use GitHub Actions or Jenkins?
19. What does a typical CI/CD pipeline look like in your projects?
20. How do you handle environment variables and secrets in pipelines?
21. What checks do you run before deploying code to production?
22. How do you build, tag, and deploy Docker images in your workflow?

---

## 6. AWS Lambda and Event-Driven Systems

23. Have you worked with AWS Lambda?
24. How would you design a Lambda-based service to process database-related events?
25. How would you handle DynamoDB Streams or S3 event notifications?
26. How do you ensure reliability, retries, and error handling in Lambda-based systems?
27. How do you handle failures in event-driven architectures?

---

## 7. Reliability Patterns and Messaging

28. Are you familiar with idempotent handlers?
29. Have you worked with retry mechanisms and batch sizing?
30. What is a Dead Letter Queue and when would you use it?
31. How do you design systems so failed events are not lost?
32. How do you manage retries when downstream systems are unavailable?

---

## 8. Security and Access Management

33. Do you have experience with AWS Secrets Manager?
34. How do you securely manage database credentials?
35. How does your application access secrets in production?
36. Do you have experience with IAM roles and IAM policies?
37. How do you manage role-based access for developers and services?

---

## 9. Candidate Questions

38. Do you have any questions for me about the role or the team?

---

## 10. Expectations and Fit (Implied but Important)

39. Are you comfortable working across backend, infrastructure, and database-related tasks?
40. Are you okay with a role that is not limited to only Node or frontend work?
41. Are you interested in owning projects end-to-end and mentoring others?
42. Does this role align with what you are looking for at this stage of your career?

Here are the **questions that were asked to you during the 3rd round interview**, extracted cleanly and in order. I have removed all explanations, answers, and side conversations, and kept only the actual questions.

---
Round-2: GLG Coding Test : Senior Software Engineer : Mayank Singh Kushwah

The next step in the interview process is a coding test. This is an important and one of the key criteria of the selection process. Sharing the GitHub Repository below, please get it running and make improvements to the code on
Get the following project up and running in their local dev environment https://github.com/glg-public/glg-simple-movie-app
Kindly prepared to discuss how did you fix the code, what were the issues that you came across, what methods you used.

---

### Round-3

👤 **Interviewer:** James Gallagher, Ankush Sharma, Dheeraj Singh, Ronan



### Introduction and CV Discussion

1. Can you introduce yourself and talk a bit about your experience?
2. We went through your CV last time. Did anything in your CV catch our attention that we should ask about?
3. We see frequent job switches in recent years. Is there a specific reason for these short tenures?

---

### Databases and Backend Fundamentals

4. You have worked on frontend, backend, and databases. What differences do you see between SQL and NoSQL?
5. How do you decide when to use SQL versus NoSQL in an application?
6. How have you used databases in your current or past applications?

---

### CI/CD and DevOps

7. You mentioned CI/CD experience. Can you compare Jenkins with GitHub Actions or GitLab pipelines?
8. How do these CI/CD tools fit different project requirements?
9. How do you manage secrets so they are not exposed in logs or pipelines?

---

### AWS and Event-Driven Architecture

10. You mentioned using AWS services like EventBridge, CloudFormation, Lambda, and API Gateway. Can you describe that setup?
11. Can you explain the event bus design you worked on?
12. What challenges did you face while implementing EventBridge?
13. How did you resolve AWS limitations you encountered during deployment?
14. Is there any data transformation happening before sending data to the vendor?
15. Are you using Lambda, ECS, or any other service to process the data?
16. How does the cron job, event bus, and processing flow work end to end?

---

### TypeScript

17. You mentioned some experience with TypeScript. What are your general opinions on TypeScript?
18. What are the differences between interface and type in TypeScript?
19. When would you prefer interface over type, or vice versa?

---

### Technical Exercise Review

20. Can you walk us through what issues you found in the application?
21. What changes or enhancements did you make to fix the issues?
22. Why did you introduce skeleton loaders?
23. How did you handle CORS issues?
24. Why did you implement retries for API calls?
25. Why did you create a custom error boundary instead of using a library?
26. How did you handle image failures and broken UI states?
27. How did you optimize API calls and prevent unnecessary re-fetching?
28. Can we look at the changes you made in the Media Detail Controller?

---

### Asynchronous JavaScript and Node.js

29. Before your changes, what would this asynchronous function return?
30. What was the core bug related to async handling in the original code?
31. What is the minimum fix required to make this async function work?
32. Can you evaluate this file system code and explain what happens step by step?
33. What happens when the file is deleted before the read callback executes?
34. Can you explain how asynchronous code works in Node.js?
35. How does the event loop, call stack, and queue work together?

---

### Design Patterns and Architecture

36. How would you implement dependency injection in JavaScript?
37. Can you give a real-world example where you used dependency injection?

---

### Scaling Node.js Applications

38. Since JavaScript is single-threaded, how would you scale a Node.js service to handle more traffic?
39. What is clustering in Node.js?
40. What problem does clustering solve?
41. Why did you choose PM2 as a process manager?
42. What benefits did PM2 provide in your projects?

---

### Closing

43. Do you have any questions for us?
44. What would be the next step in the interview process?
45. How soon can a decision be expected?
46. If selected, how quickly could you join?

### Round-4