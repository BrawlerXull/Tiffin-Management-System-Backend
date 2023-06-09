const Days = require("../schema/taskSchema");

const homePage = async (req, res) => {
  res.status(200).json({
    "this is the home page": "/",
    "to see tiffins in a single day":"/single/:day",
    "to see all the days": "/all",
    "to update a day tiffins":"/update/:day/:chinmay/:prajyot/:varun/:hemant"
  });
};

const getAllDays = async (req, res) => {
  const data = await Days.find({});
  res.status(200).json({ days: data });
};

const getSingleDay = async (req, res) => {
  const data = await Days.findOne({ day: req.params.day });
  res.status(200).json({ days: data });
};

const updateDay = async (req, res) => {
  const data = await Days.findOneAndUpdate(
    { day: req.params.day },
    {
      chinmay: req.params.chinmay,
      prajyot: req.params.prajyot,
      varun: req.params.varun,
      hemant: req.params.hemant,
    }
  );
  res.status(200).json({ msg: `Updated day ${req.params.day}` });
};

const createDay = async (req, res) => {
  const data = await Days.insertMany({ day: req.params.day });
  res.status(200).json({ msg: `created day ${req.params.day}` });
};

const countDaysChinmay = async(req,res)=>{
  const data = await Days.find({});
  let count =0;
  for(let i=0;i<31;i++){
    if(data[i].chinmay==true){
      count++;
    }
  }
  res.status(200).json({ "number of days of chinmay": count });
}
const countDaysPrajyot = async(req,res)=>{
  const data = await Days.find({});
  let count =0;
  for(let i=0;i<31;i++){
    if(data[i].prajyot==true){
      count++;
    }
  }
  res.status(200).json({ "number of days of prajyot": count });
}
const countDaysVarun = async(req,res)=>{
  const data = await Days.find({});
  let count =0;
  for(let i=0;i<31;i++){
    if(data[i].varun==true){
      count++;
    }
  }
  res.status(200).json({ "number of days of varun": count });
}
const countDaysHemant = async(req,res)=>{
  const data = await Days.find({});
  let count =0;
  for(let i=0;i<31;i++){
    if(data[i].hemant==true){
      count++;
    }
  }
  res.status(200).json({ "number of days of hemant": count });
}

module.exports = { getAllDays, getSingleDay, homePage, updateDay, createDay,countDaysChinmay,countDaysPrajyot,countDaysVarun,countDaysHemant };
