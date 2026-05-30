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
"npm install mongodb"

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
Now server setup is done so I will push this code in github 

# Config/db.js
In this file Database connection function is written.
First imported the mongoose and dotenv
Written one async function to connect the DB
In try if connection is successfull then print in console DB is conneccted and if fails in catch printing connection failed and exits. 


# models/Todo.js 
Created the model schema for database
Imported mongoose and then created new Schema with required fields and then exported it

# Controllers/todoControllers.js
getAllTasks()-> Get the all tasks from database
createNewtask(task)-> Add the new task in database
deleteTask(id)-> Delete the task by id
toggleTask(id)-> Complete the task by id
updateTask(id,text)-> Edit the task's text by id

# Routes and endpoints
## /tasks
GET: Get all the tasks in system.
POST: Add a new task

## /tasks/{id}
PATCH: Complete a particular task
DELETE: Delete a  particular task
PUT: Edit a particular task


# server.js
1. Import express, dotenv, cors
2. Import connectDB from config/db.js
3. Import todoRoutes from routes/todoRoutes.js
4. Call dotenv.config()
5. Call connectDB()
6. Create app = express()
7. Add middlewares → app.use(cors()), app.use(express.json())
8. Mount routes → app.use('/api/todos', todoRoutes)
9. Listen on PORT from .env
Now db is connected and all tasks are performing well as planned. Commiting all this code which is working till now....

# Now Working on client side
## Setting client side code 
### installing vite and node modules
"npm create vite@latest client -- --template react
cd client
npm install"

### Install everything you need in one go
"npm install axios react-router-dom tailwindcss @tailwindcss/vite"
axios → to make API calls to your Express backend
react-router-dom → for page navigation
tailwindcss → for styling

### Add following mentioned files:
#### vite.config.js
import tailwindcss from '@tailwindcss/vite'
tailwindcss() in plugins:[]

#### src/index.css
@import "tailwindcss";

### Clean up the boilerplate Vite gives you
Delete these files, you won't need them:
src/App.css
src/assets/react.svg
public/vite.svg

### Set up the API base URL
Created a file src/services/api.js — this is where all axios calls to the backend will live.

### Also created a .env file inside client/
VITE_API_BASE_URL=http://localhost:4000/api

## Now craeting the file structure for client-code
src/
├── components/
│   ├── TodoInput.jsx      → input box to add new task
│   ├── TodoItem.jsx       → single task row (edit, delete, toggle)
│   └── TodoList.jsx       → renders list of TodoItems
├── pages/
│   └── HomePage.jsx       → main page
├── services/
│   └── api.js             → all axios API call functions
├── App.jsx                → routing lives here
└── index.css              → tailwind import

## Run the Vite by cmd:
"npm run dev"