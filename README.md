# 📚 Library Management System

A modern, full-stack Library Management System built with React, Node.js, and MongoDB. Streamline library operations with user authentication, book management, and circulation tracking.

## ✨ Features

### 📖 Book Management
- Add, edit, and delete books
- Search and filter books by title, author, or genre
- Real-time availability status
- Book cover image upload support
- ISBN validation and duplicate checking

### 👥 User Management
- Secure user authentication (JWT-based)
- Role-based access control (Admin/Librarian/Member)
- User profiles and borrowing history
- Password reset functionality
- Email notifications for due dates

### 🔄 Circulation System
- Check-out and check-in books
- Automatic due date calculation
- Fine management for late returns
- Renewal requests and approvals
- Reservations and waitlists

### 📊 Dashboard & Analytics
- Real-time statistics dashboard
- Most borrowed books analytics
- User activity reports
- Overdue items tracking
- Monthly circulation reports

### 🔐 Security Features
- Password hashing with bcrypt
- JWT token authentication
- Rate limiting on API requests
- Input validation and sanitization
- XSS and CSRF protection

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - API client
- **React Hot Toast** - Notifications
- **Chart.js** - Analytics charts

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password encryption
- **express-validator** - Input validation

### DevOps & Tools
- **Git** - Version control
- **npm/yarn** - Package management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Nodemon** - Development server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Mordekai32/library-management-system.git
cd library-management-system
