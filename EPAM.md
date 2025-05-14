### 🏢 **EPAM Systems** | Fullstack Developer | Node.js, React.js | Bangalore(India)

**Round 1** – Technical Screening (Online Exam)  
👤 *Interviewer: Unknown*

##### **Task 1 – JavaScript**

1. **How does the `setInterval()` function work in JavaScript?**  
   - Executes a function repeatedly after a specified time interval.

2. **Everything in JavaScript is either a...?**  
   - Primitives (string, number, boolean, null, undefined, symbol, bigint)  
   - Objects (arrays, functions, etc.)

3. **How long is `sessionStorage` accessible?**  
   - Until the tab or browser is closed.

4. **Why do you need a Promise?**  
   - To handle asynchronous operations and avoid callback hell.

5. **Function to check if a value is an illegal number?**  
   - `isNaN()`

6. **What kind of scoping does JavaScript use?**  
   - Lexical scoping

7. **Attribute to defer script execution until after parsing?**  
   - `defer`

8. **`typeof NaN`?**  
   - `number`

9. **`typeof null`?**  
   - `object`

10. **Where to place `"use strict"`?**  
   - At the top of the script or block.

##### **Task 2 – React**

1. **How many elements can a React component return?**  
   - One (use fragments for multiple)

2. **What is Babel?**  
   - JavaScript transpiler (ES6+ → compatible JS)

3. **Which is not part of `react-dom`?**  
   - `destroy()`

4. **Method to define default props?**  
   - `getDefaultProps` (class components)

##### **Short Answers**

- **Features of React:** JSX, Virtual DOM, One-way data flow, Components  
- **What is JSX?** HTML-like syntax for UI in JS  
- **What are Components?** Independent UI blocks  
- **Functional vs Class Components:**  
  | Feature | Functional | Class |
  |--------|------------|-------|
  | Syntax | Function | Class |
  | State | `useState` | `this.state` |
  | Lifecycle | `useEffect` | `componentDidMount` |

- **Virtual DOM?** In-memory DOM used for efficient re-rendering  
- **React Keys?** Unique identifiers for list items  
- **Pointer Events Supported?**  
  - ✅ `onPointerDown`  
  - ✅ `onPointerEnter`  
  - ✅ `onGotPointerCapture`  
  - ✅ `onPointerCancel`  
  - ❌ `onPointerArrowDown` (invalid)

---

**Round 2** – Technical Interview (Virtual Video Call)  
👤 *Interviewer: Unknown*

#### 🔹 Topics Covered:

##### **Section 1 – Pure JavaScript**

- Question: `sum([1,2,3])(3)` → Output: `[4,5,6]`

##### **Section 2 – HTML, CSS & Performance**

- Concepts: Lazy Loading, HTML5, CSS best practices, Rendering optimization

##### **Section 3 – React Hands-on**

1. **React Timer Component:**  
   - Start / Pause / Reset functionality

2. **Custom Accordion Component:**  
   Structure:
   ```jsx
   <Accordion style={{ width: '400px', margin: '20px auto' }}>
       <AccordionSection title="Section 1">
           Content for section 1
       </AccordionSection>
       <AccordionSection title="Section 2">
           Content for section 2
       </AccordionSection>
   </Accordion>
    ```