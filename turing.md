### 🔹 **General Introduction & Background**

1. Can you give a brief introduction of yourself, your experience, and the technologies you've worked with?
2. What domains have you worked in?
3. Have you done any open-source contributions?
4. Have you worked with any freelancing clients? From which platforms or networks?
5. Which company are you currently working with? What is your role and responsibilities there?

---

### 🔹 **AWS Services & Cloud Experience**

#### **Serverless & Core AWS Services**

6. Which AWS services have you worked with?
7. Can you explain your experience with AWS Lambda?
8. How did you use API Gateway with Lambda?
9. Have you worked with AWS SQS and SNS?
10. How have you used EC2, ECS, S3, and CloudFront?
11. Have you used secret manager or ECR?

#### **EKS/Kubernetes**

12. Have you worked with EKS (Elastic Kubernetes Service)?
13. How do you troubleshoot production issues with CloudWatch in EKS?

#### **Networking**

14. Have you worked with networking components like VPC, Subnets, Internet Gateway, NAT Gateway?
15. Why and when would you use a VPC?

#### **Databases & Storage**

16. Which AWS databases have you worked with (RDS, DynamoDB)?
17. Have you used Aurora?
18. Have you worked with EBS, EFS, FSx?

#### **Monitoring & Logging**

19. How comfortable are you with AWS monitoring tools?
20. Which tools have you used for logs and metrics (CloudWatch, Grafana, Prometheus, etc.)?

---

### 🔹 **Design & Architecture (CDK + Terraform)**

#### **Autoscaling with EC2**

21. Design a solution using AWS CDK to dynamically scale EC2 instances behind a Load Balancer.
22. How would you configure scaling policies based on CPU utilization?
23. How would you handle downscaling?

#### **Third-party API Integration**

24. How would you securely call a third-party API from AWS Lambda using AWS CDK?
25. How would you manage sensitive data like API keys (e.g., using Secret Manager)?

#### **Serverless Event-Driven Architecture**

26. Design a serverless event-driven architecture:

* S3 triggers Lambda on file upload.
* Lambda processes and stores metadata in DynamoDB.
* How would you implement this using AWS CDK?

---

### 🔹 **AWS Cost Optimization**

27. Have you worked on AWS cost optimization?
28. Given an infrastructure with multiple EC2 instances, RDS, and large S3 storage, how would you reduce cost while maintaining performance?

---

### 🔹 **Terraform Specific**

29. Have you worked with Terraform CDK (CDKTF)?
30. In a CDKTF project with many constructs/modules, how would you structure the code to improve maintainability and scalability?
31. What are the benefits of using CDK (loops, if-else, modularity)?
32. What are your strategies to optimize Terraform **plan execution time** in large-scale projects?
33. How would you troubleshoot a Terraform `apply` failure caused by **missing dependency**?
34. Terraform script to create an AWS VPC with two subnets in different availability zones. The VPC should have a CIDR block of 10.0.0.0/16, and the subnets should have CIDR blocks of 10.0.1.0/24 and 10.0.2.0/24.