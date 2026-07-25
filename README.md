# 🛒 E-Commerce Management System

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Express](https://img.shields.io/badge/Express.js-5.x-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![License](https://img.shields.io/badge/License-MIT-orange)

A modern **E-Commerce Management System** built using **Node.js, Express.js, MongoDB, EJS, Bootstrap 5, JWT Authentication and Multer**.

The project provides secure authentication, role-based authorization, category management, product management, image upload, premium dashboard and responsive UI.

---

# 📸 Screenshots

## register


<img width="1054" height="971" alt="Screenshot 2026-07-25 123436" src="https://github.com/user-attachments/assets/e61541f2-5c4c-41a1-99ad-68972f38e175" />


## login

<img width="1559" height="948" alt="Screenshot 2026-07-25 123058" src="https://github.com/user-attachments/assets/7ecd88a8-b3ee-4838-825b-1e3f8c7e40f9" />



## Dashboard

[dashboard-amin ]

<img width="1913" height="942" alt="Screenshot 2026-07-25 122646" src="https://github.com/user-attachments/assets/5f930eb5-cd4a-4635-95c4-32a74f96306c" />


[dashboard-uer]

<img width="1462" height="953" alt="Screenshot 2026-07-25 123327" src="https://github.com/user-attachments/assets/8d70e6f1-ac33-4a38-8555-2c1f1a1ea3d3" />



## Product List

<img width="1761" height="944" alt="Screenshot 2026-07-25 122756" src="https://github.com/user-attachments/assets/0552f2a2-ea25-464f-a29e-66ea9adf2a75" />



## Categories


<img width="1636" height="624" alt="Screenshot 2026-07-25 122834" src="https://github.com/user-attachments/assets/c566eea2-84c6-44a6-b17b-e790d2223dda" />


---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- Cookie Authentication
- Logout

---

## Dashboard

- Total Products
- Total Categories
- My Products
- Logged-in User
- Premium Dashboard Cards
- Quick Actions

---

## Product Module

- Add Product
- Edit Product
- Delete Product
- Product Image Upload
- Category Selection
- Product Filter
- My Products
- Product Owner Details

---

## Category Module

- Add Category
- Edit Category
- Delete Category
- Category Filter
- Duplicate Category Validation

---

## Security

- Protected Routes
- JWT Authentication
- Role Based Authorization
- Flash Messages
- Password Encryption

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- EJS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- JWT
- bcryptjs

## Other Packages

- Multer
- Cookie Parser
- Express Session
- Connect Flash
- Dotenv

---

# 📁 Folder Structure

```
EcommerceProject
│
├── config
├── controllers
├── middleware
├── models
├── public
│   ├── css
│   ├── uploads
│   └── images
├── routes
├── views
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/EcommerceProject.git
```

### Move into Project

```bash
cd EcommerceProject
```

### Install Packages

```bash
npm install
```

### Create .env File

```env
PORT=9090

MONGO_URI=mongodb://127.0.0.1:27017/ecommerce

JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

or

```bash
npm start
```

Open Browser

```
http://localhost:9090
```

---

# 📌 Routes

## Authentication

| Method | Route |
|---------|-------|
| GET | /register |
| POST | /register |
| GET | /login |
| POST | /login |
| GET | /logout |

---

## Products

| Method | Route |
|---------|-------|
| GET | /products |
| GET | /my-products |
| GET | /product/add |
| POST | /product/add |
| GET | /product/edit/:id |
| POST | /product/update/:id |
| GET | /product/delete/:id |

---

## Categories

| Method | Route |
|---------|-------|
| GET | /categories |
| GET | /category/add |
| POST | /category/add |
| GET | /category/edit/:id |
| POST | /category/update/:id |
| GET | /category/delete/:id |

---

# 🚀 Future Improvements

- Shopping Cart
- Wishlist
- Product Search
- Pagination
- Orders
- Payment Gateway
- Email Verification
- User Profile

---

# 👨‍💻 Developer

**Dhara Parekh**

Node.js • Express.js • MongoDB • EJS • Bootstrap

---

# ⭐ Project Status

✅ JWT Authentication

✅ Role Based Access

✅ Product CRUD

✅ Category CRUD

✅ Dashboard

✅ Multer Upload

✅ Responsive UI

✅ Premium Design

✅ Exam Ready

---

# 📄 License

This project is developed for educational and learning purposes.
