===================
=: Description :=
===================
This project is full-stack web application I built with another intern during my summer internship at Ruta N, located in Medellin Colombia. It is designed to streamline the HR team’s 
management of employee and contractor data. It includes a backend built with Node.js and Express, connected to a MongoDB database. The frontend is developed using React, providing a 
dynamic and interactive user experience.

===================
=: Technologies :=
===================
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT, Cognito
Others: Axios for API calls, React Table for data display

==============
=: Features :=
==============
- User Authentication and Role-Based Access Control (RBAC)
- CRUD operations for managing employee and contractor data
- Filter and search functionalities for easy data navigation
- Role-based routes and middleware for enhanced security
- Responsive design for a seamless experience across various devices

=======================
=: Key API Endpoints :=
=======================
GET /api/hr/employees: Fetch all employees
POST /api/hr/employees: Create a new employee
PUT /api/hr/employees/:id: Update an employee's data
DELETE /api/hr/employees/:id: Delete an employee
GET /api/contractors: Fetch all contractors


