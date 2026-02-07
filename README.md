# NexTech Solutions - Full Stack MERN Project

Deployment
The project is deployed with the frontend hosted on Netlify and the backend hosted on Render.
Live Project URL: https://harsh-gehlot-edurech.netlify.app/

A professional corporate website for NexTech Solutions built with React (Frontend) and Node.js/Express (Backend) with MongoDB database.

## 📋 Project Overview

This is a full-stack web application for an IT services company that includes:
- Responsive corporate website with multiple sections
- Backend REST APIs for authentication, job management, and contact form
- JWT-based authentication for admin access
- MongoDB database for data storage

## 🛠️ Tech Stack

### Frontend
- **React** (Functional Components only)
- **JavaScript** (ES6+)
- **HTML5, CSS3**
- **Tailwind CSS** (UI styling)
- **React Router** (Routing)
- **Axios** (HTTP client)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **bcryptjs** (Password hashing)
- **CORS** (Cross-origin resource sharing)

## 📁 Folder Structure

```
NexTech_MERN_Project_fullstack/
│
├── Backend/
│   ├── src/
│   │   ├── app.js                    # Express app configuration
│   │   ├── server.js                 # Server entry point
│   │   ├── config/
│   │   │   ├── db.js                 # MongoDB connection
│   │   │   └── env.js                 # Environment variables
│   │   ├── controllers/
│   │   │   ├── auth.controllers.js   # Authentication logic
│   │   │   ├── contact.controllers.js # Contact form logic
│   │   │   └── application.controllers.js # Job application logic
│   │   ├── middlewares/
│   │   │   ├── auth.middlewares.js   # JWT authentication middleware
│   │   │   └── error.middleware.js   # Error handling middleware
│   │   ├── models/
│   │   │   ├── User.model.js         # User
│   │   │   ├── Contact.model.js      # Contact form schema
│   │   │   └── JobApplication.model.js # Job application schema
│   │   ├── routes/
│   │   │   ├── auth.routes.js         # Authentication routes
│   │   │   ├── contact.routes.js     # Contact form routes
│   │   │   └── application.routes.js # Application routes
│   │   └── utils/
│   │       ├── jwt.js                # JWT token utilities
│   │       └── response.js           # Response helpers
│   ├── package.json
│   └── nodemon.json
│
├── Frontend/
│   ├── src/
│   │   ├── App.jsx                    # Main app component
│   │   ├── main.jsx                   # Entry point
│   │   ├── index.css                  # Global styles
│   │   ├── pages/
│   │   │   ├── Home.jsx               # Home page
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Services.jsx           # Services page
│   │   │   ├── Careers.jsx           # Careers page
│   │   │   ├── Contact.jsx           # Contact page
│   │   │   ├── ApplyJob.jsx          # Job application page
│   │   │   └── Login.jsx              # Admin login page
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   │   ├── Footer.jsx        # Footer component
│   │   │   │   └── Button.jsx        # Reusable button
│   │   │   ├── home/
│   │   │   │   ├── Hero.jsx          # Hero section
│   │   │   │   ├── ServicesPreview.jsx # Services preview
│   │   │   │   └── Technologies.jsx  # Technologies section
│   │   │   ├── services/
│   │   │   │   └── ServiceCard.jsx   # Service card component
│   │   │   └── careers/
│   │   │       ├── JobCard.jsx       # Job card component
│   │   │       └── ApplyForm.jsx     # Application form
│   │   ├── services/
│   │   │   ├── api.js                # Axios instance
│   │   │   ├── contactService.js     # Contact API calls
│   │   │   └── applicationService.js # Application API calls
│   │   └── utils/
│   │       └── constants.js         # App constants
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

## 🚀 Project Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port shown in terminal)

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication APIs

#### User Login
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticate user
- **Request Body:**
```json
{
  "email": "user@nextech.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "user Name",
    "email": "user@nextech.com"
  }
}
```

### Contact APIs

#### Submit Contact Form
- **Endpoint:** `POST /api/contact`
- **Description:** Submit contact form
- **Access:** Public
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "address": "123 Main St, City",
  "message": "Your message here"
}
```
- **Response:**
```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "_id": "contact_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "address": "123 Main St, City",
    "message": "Your message here",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Job APIs

#### Get All Jobs
- **Endpoint:** `GET /api/jobs`
- **Description:** Get all active job openings
- **Access:** Public
- **Response:**
```json
[
  {
    "_id": "job_id",
    "title": "Frontend Developer",
    "department": "Engineering",
    "location": "Remote",
    "experience": "0-2 Years",
    "description": "Job description here",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```


### Application APIs

#### Apply for Job
- **Endpoint:** `POST /api/applications`
- **Description:** Submit job application
- **Access:** Public
- **Request Body:**
```json
{
  "jobId": "job_id",
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "resumeUrl": "https://example.com/resume.pdf"
}
```
- **Response:**
```json
{
  "message": "Application submitted successfully",
  "application": {
    "_id": "application_id",
    "jobId": "job_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+91 98765 43210",
    "resumeUrl": "https://example.com/resume.pdf",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, minlength: 6),
  createdAt: Date,
  updatedAt: Date
}
```

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  address: String (optional),
  message: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Job Model
```javascript
{
  title: String (required),
  department: String (required),
  experience: String (required),
  location: String (required),
  description: String (required),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### JobApplication Model
```javascript
{
  jobId: ObjectId (required, ref: 'Job'),
  fullName: String (required),
  email: String (required),
  phone: String (required),
  resumeUrl: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 🌐 Website Sections

### 1. Home Page
- Hero section with company introduction
- Tagline and description
- Call-to-action buttons
- Services preview
- Technologies section

### 2. About Us
- Company overview
- Mission & Vision
- Why choose NexTech section

### 3. Services
- Web Development
- Mobile App Development
- Full Stack Development
- Cloud Services
- AI / ML Solutions
- Data Analytics

Each service includes:
- Description
- Technologies used
- Business benefits

### 4. Technologies
- React
- Node.js
- JavaScript
- MongoDB
- AWS
- Docker

### 5. Careers
- Job listings
- Apply button for each job
- Application form modal

### 6. Contact Us
- Contact form with:
  - Name
  - Email
  - Phone
  - Address
  - Message
- Form submission via backend API

## 🔐 Authentication

- JWT-based authentication for admin access
- Admin login page at `/login`
- Protected routes require JWT token in Authorization header
- Token stored in localStorage after successful login

## 📝 Features

- ✅ Responsive design (mobile-friendly)
- ✅ RESTful API architecture
- ✅ JWT authentication
- ✅ Error handling middleware
- ✅ Form validation
- ✅ Loading states and error messages
- ✅ Clean code structure with comments
- ✅ MongoDB database integration
- ✅ CORS enabled for frontend-backend communication




## 📄 License

ISC

## 👤 Author

NexTech Solutions

---

**Note:** Make sure to update the MongoDB connection string and JWT secret in the `.env` file before running the application.

