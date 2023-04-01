const { json } = require("express");
const express = require("express");
const { getAllDays,getSingleDay,homePage,updateDay ,createDay} = require("./src/methods/methods");
const { updateOne } = require("./src/schema/taskSchema");
require("./src/db/mongodb")
const app = express();
// app.use(json());

app.get("/", homePage);
app.get("/single/:day", getSingleDay);
app.get("/all", getAllDays);
app.get("/update/:day/:chinmay/:prajyot/:varun/:hemant", updateDay);
app.get("/create/:day",createDay);

app.listen("5001",()=>{
    console.log("Connected to the port 5001")
});
