const express = require("express") //express....
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors({
     origin: 'http://localhost:5173',//only allows requests from react frontend
     methods:['GET','POST','PUT','DELETE'],
     credentials:true //enable if using cookies or authentication
 }));
app.use(cors())
app.use(express.json()) //to accept data as json...


//import role routes
const roleRoutes = require("./src/routes/RoleRoutes")
 app.use(roleRoutes)

//import user routes
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

//import project routes
const projectRoutes = require("./src/routes/ProjectRoutes")
app.use(projectRoutes)

//import ProjectTeam routes
const projectTeamRoutes = require("./src/routes/ProjectTeamRoutes")
app.use(projectTeamRoutes)

//import status routes
const statusRoutes = require("./src/routes/StatusRoutes")
app.use(statusRoutes)

//import Project Module Routes
const projectModuleRoutes = require("./src/routes/ProjectModuleRoutes")
app.use(projectModuleRoutes)

//import task routes
const taskRoutes = require("./src/routes/TaskRoutes")
app.use(taskRoutes)

//import user Task Routes
const userTaskRoutes = require("./src/routes/UserTaskRoutes")
app.use(userTaskRoutes)

//import notification Routes
// const notificationRoutes = require("./src/routes/NotificationRoutes");
// app.use(notificationRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/learning_node").then(()=>{
    console.log("database connected....")
})


//server creation...
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})