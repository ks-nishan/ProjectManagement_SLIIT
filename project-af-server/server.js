const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();

//import routes
const userRoutes = require('./routes/user');
const fileRoutes = require('./routes/file-upload-routes');

//app middleware
app.use(bodyParser.json());
app.use(cors());

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
// IT20224134 


const viewsupervisor=require('./routes/supervisor')
app.use("/supervisor",viewsupervisor)

const viewcosupervisor=require('./routes/cosupervisor')
app.use("/cosupervisor",viewcosupervisor)

const viewtopic=require('./routes/topic')
app.use("/topic",viewtopic)


//connecting the server
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
