# Login/Signup Backend

A FastAPI backend for user authentication with MySQL database.

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure MySQL:**
   - Create a MySQL database named `login_signup_db`
   - Update the database connection string in `database.py` with your credentials:
     ```python
     SQLALCHEMY_DATABASE_URL = "mysql+pymysql://username:password@localhost:3306/login_signup_db"
     ```

3. **Run the server:**
   ```bash
   python main.py
   ```
   or
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints

- `GET /` - Health check
- `POST /signup` - User registration
- `POST /login` - User login

## API Documentation

Once the server is running, visit:
- http://localhost:8000/docs - Interactive API documentation
- http://localhost:8000/redoc - Alternative API documentation 