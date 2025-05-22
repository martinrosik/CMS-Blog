# 📝 Blog CMS Application

> A modern, full-stack blog content management system built with React and Laravel

## ✨ Features

🎨 **Modern UI** - Clean and responsive design with React  
📱 **Mobile Friendly** - Fully responsive across all devices  
✍️ **Text Editor** - Create beautiful blog posts with ease  
👥 **User Management** - Admin and author roles  
🔐 **Authentication** - Secure login and registration  
🏷️ **Categories & Tags** - Organize your content  
💬 **Comments System** - Engage with your readers  
🔍 **Search Functionality** - Find content quickly  
📈 **SEO Optimized** - Built-in SEO features  

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** - User interface library
- 🎨 **TailwindCSS** - Styling
- 📦 **Axios** - HTTP client
- 🚀 **React Router** - Navigation

### Backend  
- 🐘 **Laravel** - PHP framework
- 🗄️ **MySQL** - Database
- 🔑 **Authentification** - JWT authentication

## 🚀 Quick Start

### Prerequisites
- 📦 Node.js (v16+)
- 🐘 PHP (v8.0+)
- 🎼 Composer
- 🗄️ MySQL

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/CMS-Blog.git
cd CMS-Blog
```

2️⃣ **Backend Setup**
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

3️⃣ **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

## 🔧 Configuration

📝 **Environment Variables**
- Copy `.env.example` to `.env`
- Configure database credentials
- Set up mail configuration
- Add API keys as needed

## 📚 API Documentation

🔗 **Base URL:** `http://127.0.0.1:8000/api`

### 🎯 Main Endpoints
- `GET /posts` - Get all blog posts
- `POST /posts` - Create new post
- `GET /posts/{id}` - Get single post
- `PUT /posts/{id}` - Update post
- `DELETE /posts/{id}` - Delete post

⭐ **Star this repo** if you find it helpful!

Made with ❤️ by [Martin Rosík]
