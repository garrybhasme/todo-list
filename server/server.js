//Importing express
const express = require("express");
const cors = require("cors");
// importing dotenv
const dotenv = require("dotenv");
dotenv.config();
// import database conncetion file
const connectDB = require("./config/db");
//import routes
const taskRouter = require("./routes/todoRoutes");
// Calling dotenv.config();
const PORT = process.env.PORT;
// creating server app
const app = express();
// calling connect DB
connectDB();
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-app-name.vercel.app"  // add after Vercel deploys
  ]
}));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home-page",
  });
});

app.use("/api/tasks", taskRouter);
app.listen(PORT, () => {
  console.log(`Server is up  and running on http://localhost:${PORT}`);
});
