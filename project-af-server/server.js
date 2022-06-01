const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();

//import routes

const fileRoutes = require('./routes/file-upload-routes');
dotenv.config();
connectDB();


app.use(express.json());
//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

require('./database')();

//route middleware
app.use(userRoutes);

const PORT = 8000;
const DB_URL = "mongodb+srv://Nishanthan:Nisha888@projectaf.x1clt.mongodb.net/user?retryWrites=true&w=majority";

//database connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connect sucessfully");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

//connecting the server
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});


// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORTS = process.env.PORTS;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORTS}...`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});