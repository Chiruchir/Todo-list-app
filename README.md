# Todo List Application

## Overview
A full-stack todo management application with advanced features and modern web technologies.

## Technologies
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: RESTful design

## Project Structure
```
todo-list-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoList.js
│   │   │   ├── TodoItem.js
│   │   │   ├── AddTodo.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── controllers/
│   │   └── todoController.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Features
- **CRUD Todo Operations**
- **Priority Management**
- **Task Filtering**
- **Responsive Design**

## Prerequisites
- Node.js (v14+)
- MongoDB
- npm/yarn

## Setup Instructions

### Backend Setup
1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```
2. **Create .env File**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

### Frontend Setup
1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application
1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```
2. **Start Frontend**
   ```bash
   cd frontend
   npm start
   ```

## API Endpoints
- **GET /api/todos**: List todos
- **POST /api/todos**: Create a todo
- **PUT /api/todos/:id**: Update a todo
- **DELETE /api/todos/:id**: Delete a todo

## Environment Configuration
- **PORT**: Server port
- **MONGO_URI**: Database connection string

## Contributing
1. **Fork Repository**
2. **Create Feature Branch**
3. **Commit Changes**
4. **Push Branch**
5. **Create Pull Request**

