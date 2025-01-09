CREATE DATABASE todosdb;

CREATE TABLE todo (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  task TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  user_id VARCHAR(50) NOT NULL REFERENCES users(id)
);

CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);
