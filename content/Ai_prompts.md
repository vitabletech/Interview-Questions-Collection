# Project Setup Prompts and Steps

This file documents all the prompts, steps, and terminal commands used to scaffold the full-stack Task Manager project (backend, web, and mobile).

---

## 1. Backend (Node.js + Express + MongoDB)
**Prompt:**
> Build a full-stack Task Manager application with both web and mobile interfaces, including authentication, task management, and user-specific data.
> 
> Requirements:
> 
> Backend (Node.js + Express + MongoDB)
> - User registration and login with JWT
> - CRUD operations for tasks (title, description, due date, completed)
> - Each task is linked to a user
> - Use Mongoose for schema and validation

**Steps:**
- Initialized Node.js project and installed dependencies:
  ```sh
  npm init -y && npm install express mongoose jsonwebtoken bcryptjs cors dotenv && npm install --save-dev nodemon
  ```
- Created `.github/copilot-instructions.md` and `README.md`
- Set up Express server, Mongoose models (User, Task), authentication middleware, and routes for auth and tasks
- Added scripts and VS Code tasks

---

## 2. Web Frontend (React + TypeScript)
**Prompt:**
> Frontend Web (ReactJS + TypeScript)
> - Login and registration pages
> - Dashboard to view, add, edit, delete, and complete tasks
> - Use Context API or Redux for state management
> - Use Axios for API calls
> - Use TypeScript interfaces and types

**Steps:**
- Scaffolded React app with TypeScript:
  ```sh
  npx create-react-app web --template typescript
  ```
- Installed dependencies:
  ```sh
  cd web && npm install axios react-router-dom @types/react-router-dom @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  ```
- Created folder structure for context, api, types, and pages
- Added AuthContext, API setup, and TypeScript interfaces
- Implemented Login, Register, and Dashboard pages
- Set up routing and authentication flow

---

## 3. Mobile App (React Native + TypeScript)
**Prompt:**
> Mobile App (React Native + TypeScript)
> - Replicate the web functionality
> - Use React Navigation for screen transitions
> - Use AsyncStorage for token persistence
> - Responsive and mobile-friendly UI

**Steps:**
- Scaffolded React Native app (TypeScript included by default):
  ```sh
  npx @react-native-community/cli init mobile
  ```
- Installed dependencies:
  ```sh
  cd mobile && npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context axios @react-native-async-storage/async-storage react-native-paper
  ```
- Created folder structure for context, api, types, and screens
- Added AuthContext, API setup, and TypeScript interfaces
- Implemented Login, Register, and Dashboard screens
- Set up navigation and authentication flow

---

## 4. General Prompts
- Would you like to proceed with the web frontend (React + TypeScript) setup next, or do you want to test the backend first?
- Would you like to proceed with the React Native mobile app setup, or do you want to test the web app first?
- Would you like me to proceed with this updated command to scaffold your React Native mobile app?
- Would you like me to proceed with creating the authentication and dashboard screens for the mobile app?
- Would you like me to proceed with setting up navigation and the main app entry point?

---

This file serves as a reference for all major setup steps, prompts, and terminal commands used in this project.
