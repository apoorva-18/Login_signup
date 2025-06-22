# Login/Signup Application

A modern login and signup application built with React frontend and Python FastAPI backend with MySQL database.

## Features

- ✨ Beautiful, modern UI with gradient backgrounds and smooth animations
- 🔐 Secure password hashing with bcrypt
- 📱 Responsive design for all devices
- 🚀 Fast API with automatic documentation
- 🗄️ MySQL database integration
- 🔄 Real-time form validation and error handling

## Project Structure

```
login-signup-app/
├── frontend/          # React application
│   ├── src/
│   │   ├── App.jsx    # Main application component
│   │   ├── App.css    # Styling
│   │   └── main.jsx   # Entry point
│   └── package.json
├── backend/           # Python FastAPI application
│   ├── main.py        # FastAPI application
│   ├── database.py    # Database configuration
│   ├── models.py      # SQLAlchemy models
│   └── requirements.txt
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MySQL Server
- pip (Python package manager)

## Setup Instructions

### 1. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd login-signup-app/backend
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   # or
   source venv/bin/activate  # macOS/Linux
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure MySQL:**
   - Create a MySQL database named `login_signup_db`
   - Update the database connection string in `database.py`:
     ```python
     SQLALCHEMY_DATABASE_URL = "mysql+pymysql://username:password@localhost:3306/login_signup_db"
     ```

5. **Run the backend server:**
   ```bash
   python main.py
   ```
   The API will be available at http://localhost:8001

### 2. Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd login-signup-app/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:5173

## API Endpoints

- `GET /` - Health check
- `POST /signup` - User registration
- `POST /login` - User authentication

## API Documentation

Once the backend is running, visit:
- http://localhost:8001/docs - Interactive API documentation (Swagger UI)
- http://localhost:8001/redoc - Alternative API documentation

## Usage

1. Open http://localhost:5173 in your browser
2. Click "Sign Up" to create a new account
3. Fill in your username, email, and password
4. Click "Sign In" to log in with existing credentials
5. Enjoy the beautiful UI and smooth animations!

## Technologies Used

### Frontend
- React 18
- Vite (Build tool)
- CSS3 with modern features (Grid, Flexbox, Animations)

### Backend
- FastAPI (Python web framework)
- SQLAlchemy (ORM)
- PyMySQL (MySQL connector)
- bcrypt (Password hashing)
- Pydantic (Data validation)

### Database
- MySQL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License. 
