-- Create the database
CREATE DATABASE IF NOT EXISTS faculty_management;
USE faculty_management;

-- Create the `departments` table
CREATE TABLE IF NOT EXISTS departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Create the `faculty` table
CREATE TABLE IF NOT EXISTS faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

-- Sample data for `departments`
INSERT INTO departments (name) VALUES 
('Computer Science'),
('Mathematics'),
('Physics'),
('Chemistry');

-- Sample data for `faculty`
INSERT INTO faculty (name, title, qualification, image, department_id) VALUES
('John Doe', 'Professor', 'PhD in Computer Science', 'john_doe.jpg', 1),
('Jane Smith', 'Assistant Professor', 'MSc in Mathematics', 'jane_smith.jpg', 2),
('Alice Johnson', 'Lecturer', 'MSc in Physics', NULL, 3),
('Bob Brown', 'Senior Lecturer', 'PhD in Chemistry', 'bob_brown.jpg', 4);
