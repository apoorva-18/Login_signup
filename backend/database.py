from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import pymysql

# MySQL connection string
# Replace with your MySQL credentials
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:apoorva%4022@localhost:3306/login_signup_db"

# Create database if it doesn't exist
def create_database_if_not_exists():
    try:
        # Connect without specifying database
        connection_string = "mysql+pymysql://root:apoorva%4022@localhost:3306"
        engine = create_engine(connection_string)
        
        with engine.connect() as connection:
            # Create database if it doesn't exist
            connection.execute(text("CREATE DATABASE IF NOT EXISTS login_signup_db"))
            connection.commit()
            print("Database 'login_signup_db' is ready!")
    except Exception as e:
        print(f"Error creating database: {e}")

# Create database
create_database_if_not_exists()

# Create engine for the specific database
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base() 