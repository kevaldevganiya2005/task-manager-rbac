# 📝 Task Manager with Role-Based Access Control (RBAC)

A secure and scalable production-ready backend built with **Node.js, Express, and MongoDB**. This project features a robust **Role-Based Access Control (RBAC)** system designed to manage tasks between different user levels: **Admin, Manager, and Employee**.

---

## 🚀 Key Features

* **Advanced Authentication**: Secure registration and login using JWT (JSON Web Tokens) and password hashing with Bcryptjs.
* **Role-Based Security (RBAC)**: Custom middlewares that restrict access based on user roles.
* **Data Mutation Protection**: Tight security ensuring Employees can *only* update the status of their assigned tasks, while preventing them from editing titles or reassigning tasks.
* **Smart Filtering**: Managers can fetch and view only the tasks created by them dynamically.
* **Data Relationships**: Leverages Mongoose `.populate()` to seamlessly reference user data inside task collections.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ODM)
* **Security**: JWT, Bcrypt.js

---

## ⚙️ Installation & Setup

Follow these steps to run this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/kevaldevganiya2005/task-manager-rbac.git
cd task-manager-rbac
