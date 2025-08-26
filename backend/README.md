# Backend for stage

Minimal Node.js + Express backend providing a login API for the frontend.

Endpoints:
- POST /api/auth/login  { email, password } -> { token, user }

Default user created on startup:
- email: agent@example.com
- password: password123

How to run:
1. cd backend
2. npm install
3. copy .env.example to .env and adjust secrets if needed
4. npm run start

Notes: This is an in-memory demo. Replace userService with a real DB for production.

Sequelize/MySQL:
- The project will attempt to connect to MySQL using variables from `.env`.
- Defaults are set for XAMPP (root user, no password) and a database named `stage_db`.
- Create the database manually in XAMPP (or change DB_NAME) before starting.

Add default admin via SQL (run in MySQL / phpMyAdmin):

1) Ensure `stage_db` exists.
2) Run:

	 CREATE TABLE IF NOT EXISTS `Techniciens` (
		 `id` int NOT NULL AUTO_INCREMENT,
		 `email` varchar(255) NOT NULL UNIQUE,
		 `name` varchar(255) NOT NULL,
		 `password` varchar(255) NOT NULL,
		 `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
		 `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
		 `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		 PRIMARY KEY (`id`)
	 );

	 INSERT INTO Techniciens (email, name, password, isAdmin) VALUES ('admin@example.com','Admin','$2a$10$PLACEHOLDER_HASH','1');

Replace PLACEHOLDER_HASH with a bcrypt hash of the desired password (e.g., use bcrypt online tool or let the server create default admin on first run).
