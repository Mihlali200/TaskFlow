
# TaskFlow

**A Full-Stack Task and Project Management Application**

TaskFlow is a personal software development project focused on building a platform for organising projects, managing tasks, and collaborating with other users.

The project is being developed to strengthen my full-stack development skills and gain practical experience in backend architecture, REST API development, and relational database management.

**Project Status:** In Development 🚧

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- JavaScript
- REST APIs

### Database
- PostgreSQL

### Development Tools
- Git
- GitHub
- Visual Studio Code
- npm

---

## Current Progress

The initial project setup and backend foundation have been completed.

### Implemented
- [x] Initial full-stack project structure
- [x] React frontend setup using Vite
- [x] Express backend setup
- [x] PostgreSQL database creation
- [x] Relational database schema
- [x] Database tables and indexes
- [x] PostgreSQL connection using a connection pool
- [x] Layered backend architecture
- [x] API health-check endpoint
- [x] Task retrieval endpoint

### Planned Features
- [ ] User registration and authentication
- [ ] Role-based access control
- [ ] Project management functionality
- [ ] Task creation, updating, and deletion
- [ ] Task assignment and collaboration
- [ ] Frontend and backend integration

---

## Backend Architecture

The backend follows a layered architecture to promote separation of concerns, maintainability, and scalability.

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── health.controller.js
│   └── task.controller.js
├── services/
│   └── task.service.js
├── models/
│   └── task.model.js
├── routes/
│   ├── health.routes.js
│   └── task.routes.js
├── middleware/
├── app.js
└── server.js
```

### Architecture Responsibilities

| Layer | Responsibility |
|---|---|
| Routes | Define API endpoints |
| Controllers | Handle HTTP requests and responses |
| Services | Manage application logic |
| Models | Handle database operations |
| Middleware | Handle request processing and access control |
| Config | Manage database configuration |

---

## Database Design

The PostgreSQL database currently contains four tables:

- `users`
- `projects`
- `project_members`
- `tasks`

The database also includes five indexes.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/api/health` | Checks API and database connectivity |
| GET | `/api/tasks` | Retrieves task records |

---

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Mihlali200/TaskFlow.git
```

Navigate into the project:

```bash
cd TaskFlow
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskflow_db
DB_USER=your_database_username
DB_PASSWORD=your_database_password
```

Start the backend using the configured development script.

---

## Learning Objectives

Through TaskFlow, I aim to gain practical experience in:

- Full-stack application development
- REST API design and implementation
- Relational database design and management
- Backend architecture and separation of concerns
- Authentication and role-based access control
- Version control and software development practices

---

## Author

**Mihlali Mpama**

Information Technology and Computer Science Student

[GitHub Profile](https://github.com/Mihlali200)

---

*TaskFlow is an ongoing personal development project. Features and documentation will evolve as development progresses.*
