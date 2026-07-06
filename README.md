# 📝 Task Manager API with Role-Based Access Control (RBAC)

A secure, scalable, and production-ready backend built using **Node.js, Express.js, and MongoDB**. This project implements a powerful **Role-Based Access Control (RBAC)** system to manage tasks efficiently across different user roles: **Admin, Manager, and Employee**.

---

## 🚀 Features

### 🔐 Authentication & Security

* JWT-based authentication (Login/Register)
* Password hashing using **bcryptjs**
* Protected routes with custom middleware

### 👥 Role-Based Access Control (RBAC)

* **Admin**

  * Manage all users
  * Full access to all tasks
    
* **Manager**
  * Create and assign tasks to employees
  
* **Employee**
  * View assigned tasks
  * Update only task status (not title or assignment)

### 🛡️ Data Protection

* Employees cannot modify sensitive fields like:

  * Task title
  * Assigned user
* Strict backend validations ensure secure updates

### 🔍 Smart Filtering

* Managers can fetch tasks dynamically based on:

  * `createdBy` field

### 🔗 Data Relationships

* Uses Mongoose `.populate()` to:

  * Link users with tasks
  * Fetch detailed user info inside tasks

---

## 🛠️ Tech Stack

| Category  | Technology             |
| --------- | ---------------------- |
| Backend   | Node.js, Express.js    |
| Database  | MongoDB (Mongoose ODM) |
| Auth      | JWT (jsonwebtoken)     |
| Security  | bcryptjs               |
| Dev Tools | Nodemon                |

---

## 📁 Project Structure

```
task-manager-rbac/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kevaldevganiya2005/task-manager-rbac.git
cd task-manager-rbac
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

### 4️⃣ Run the Server

```bash
npm run dev
```

---

## 📌 API Endpoints (Sample)

### 🔑 Auth Routes

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📋 Task Routes

* `POST /api/tasks` → Create Task (Manager/Admin)
* `GET /api/tasks` → Get Tasks (Role-based)
* `PUT /api/tasks/:id` → Update Task (Restricted)

---

## 🧠 Key Concepts Used

* Middleware-based authorization
* Role validation logic
* Secure API design
* RESTful architecture
* MongoDB relationships using `ref` and `populate`

---

## 💼 Use Case

This project is ideal for:

* Learning **RBAC implementation**
* Backend interview preparation
* Real-world task management systems
* Portfolio projects

---

## 🚀 Future Improvements

* Add refresh tokens
* Pagination & search
* Email notifications
* Admin dashboard (frontend)

---

## 🙌 Author

**Keval Devganiya**
GitHub: https://github.com/kevaldevganiya2005

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
