# todo-list

# Defining the structure of the project:
## Folder structure:
todo-list/
├── client/                 # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── services/       # API call functions (axios/fetch)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Express Backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── Todo.js         # Mongoose schema
│   ├── routes/
│   │   └── todoRoutes.js   # API route definitions
│   ├── controllers/
│   │   └── todoController.js  # Business logic
│   ├── middleware/
│   │   └── errorHandler.js    # Global error handling
│   ├── .env                   # Environment variables (DB URL, PORT)
│   ├── server.js              # Entry point
│   └── package.json
│
└── README.md

In folder structure I keep Client and Server code seperate and in Readme.md file all instructions.

Now I created two folders 1. client and 2. server
For now first I will start with server, API, database setting all things.
Now I will enter into folder server:
"cd server"
Now I will Creates package.json by below command amd answers the questions:
"npm init" 
Now intsall the dependencies:
"npm install express mongoose dotenv cors"
"npm install --save-dev nodemon"

After that I will create file in following order:
1. .env              → add PORT and MONGO_URI
2. config/db.js      → write MongoDB connection logic
3. models/Todo.js    → write the Mongoose schema
4. controllers/todoController.js  → write functions for each API
5. routes/todoRoutes.js           → map URLs to controller functions
6. server.js         → tie everything together, start the server

Made the changes in package.json:
"scripts": {
  "start":"node server.js",
  "dev": "nodemon server.js"
}

Now start the server:
"npm run dev"
Now server setup is done so I will push this code in github and then start work on Routes...