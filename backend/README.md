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
 - On startup the app runs `migrations/init-db.js` which will create the database if missing, sync models, and insert default accounts.
 - Default admin created: email `admin@gmail.com`, password `admin123`.
 - Default user created: email `agent@example.com`, password `password123`.
 - The backend now uses MongoDB (Mongoose). Defaults in `.env.example` target a local MongoDB instance at `mongodb://127.0.0.1:27017` with database `stage_db` and no auth.

The backend uses MongoDB (Mongoose). The migration script `migrations/init-db.js` will create default admin and user documents on first run.
