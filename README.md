# 🌟 GitHub Issues Tracker

A fully responsive and interactive **GitHub Issues Tracker Web Application** built as part of Assignment-05. This project simulates a real-world issue tracking system with authentication, filtering, searching, and detailed issue views using REST API integration.

---

## 🚀 Live Link



---

## 🎯 Project Description

This project is a simplified clone of a GitHub Issues Tracker. Users can log in using demo credentials, view issues, filter them by status (All, Open, Closed), search issues, and view full issue details in a modal popup.

It focuses on **JavaScript DOM manipulation, API integration, responsive design, and UI interaction handling**.

---

## 🔑 Login Credentials

Username: admin  
Password: admin123  

---

## 🌐 API Endpoints

Get all issues:  
https://phi-lab-server.vercel.app/api/v1/lab/issues  

Get single issue:  
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}  

Example:  
https://phi-lab-server.vercel.app/api/v1/lab/issue/33  

Search issues:  
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}  

Example:  
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications  

---

## ✨ Features

- Login system with demo credentials  
- Fetch and display issues from API  
- Filter issues (All / Open / Closed)  
- Search functionality  
- Modal popup for issue details  
- Responsive design for all devices  
- Loading spinner during API calls  
- Active tab highlighting  

---

## 🚀 Challenges Implemented

- Dynamic border color  
  - Open → Green  
  - Closed → Purple  
- Loading spinner during API calls  
- Search with API integration  
- Active tab management  
- Clean commit history (8+ commits)  

---

## 🛠️ Tech Stack

HTML5  
CSS3  
Tailwind CSS / DaisyUI  
JavaScript (Vanilla JS)  
REST API  

---

# 📘 Interview Questions & Answers

---
1️⃣ What is the difference between var, let, and const?

Ans- Difference between var,let,const
var: Function scoped. It can be redeclared and reassigned.
let: Block scoped. It can be reassigned but cannot be redeclared.
const: Block scoped. It cannot be reassigned or redeclared.
Example:
var a = 10;
let b = 20;
const c = 30;

2️⃣ What is the spread operator (...)?

Ans- Spread Operator(...):
The spread operator (...) expands elements of an array or object and is used to copy arrays,merge arrays, or pass multiple values.
Example:
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];

console.log(arr2);

Output:[1,2,3,4,5]

3️⃣ What is the difference between map(), filter(), and forEach()?

Ans- Difference between map(),filter(), and forEach()
map(): Changes each element and returns a new array.
filter(): Selects elements based on a condition and returns a new array.
forEach(): Loops through elements but returns nothing.
Example:
let numbers = [1,2,3,4];
let mapResult numbers.map(n => n*2);
let filterResult = numbers.filter(n => n>2);
numbers.forEach(n => console.log(n));

4️⃣ What is an arrow function?

Ans- Arrow Function:
An arrow function is a shorter syntax for writing functions in JavaScript using the => symbol.
Example:
const add = (a,b) => a+b;

5️⃣ What are template literals?

Ans- Template Literals:
Template literals use backticks () and allow embedding variables inside a string using ${}.
Example:
let name = "Maria";
let message = `Hello ${name}`;
console.log(message);
Output:
Hello Maria


