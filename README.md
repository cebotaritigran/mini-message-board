# Mini Message Board

A simple message board application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**.

Users can view messages, create new messages, and delete existing messages. This project was built to practice backend development concepts such as routing, controllers, database integration, environment variables, and server deployment.

## 🚀 Live Demo

(Add your deployed Railway/Vercel link here)

---

## ✨ Features

- View all messages on the message board
- Create new messages with:
  - Username
  - Message content
- Display message creation date
- Delete messages
- PostgreSQL database integration
- Server-side rendering with EJS
- Form validation
- Environment variable configuration
- Deployed online using Railway

---

## 🛠️ Built With

### Backend

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Express Router

### Frontend

- EJS templates
- CSS
- HTML

### Development Tools

- dotenv
- express-validator
- Railway (deployment)

---

## 📂 Project Structure

```
mini-message-board/
│
├── controllers/
│   └── messageController.js
│
├── db/
│   ├── pool.js
│   └── populatedb.js
│
├── routes/
│   └── messageRouter.js
│
├── views/
│   ├── index.ejs
│   ├── newMessage.ejs
│   └── messageDetails.ejs
│
├── public/
│   └── styles.css
│
├── app.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/cebotaritigran/mini-message-board.git
```

Navigate into the project folder:

```bash
cd mini-message-board
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=3000
```

Replace `your_postgresql_connection_string` with your PostgreSQL database URL.

---

## 🗄️ Database Setup

Create the database table:

```sql
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

To populate the database with sample messages:

```bash
node db/populatedb.js
```

---

## ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

or:

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 📖 How It Works

### Request Flow

```
User
 |
 | HTTP Request
 ↓
Express Router
 |
 ↓
Controller
 |
 ↓
Database Query
 |
 ↓
PostgreSQL
 |
 ↓
Response rendered with EJS
```

---

## 🧠 What I Learned

Through this project I practiced:

- Creating an Express application
- Organizing routes and controllers
- Connecting Node.js applications to PostgreSQL
- Writing SQL queries
- Using environment variables securely
- Handling form submissions
- Server-side rendering with EJS
- Deploying a backend application

---

## 🔮 Future Improvements

Possible improvements:

- User authentication
- Edit messages
- Message likes/reactions
- Pagination
- REST API endpoints
- Better UI design
- Automated tests

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Tigran Cebotari**

GitHub:
https://github.com/cebotaritigran
