const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema({
    day:{
        required:true,
        type:Number,
    },
    chinmay:{
        required:true,
        type:Boolean,
        default:false
    },
    prajyot:{
        required:true,
        type:Boolean,
        default:false
    },
    hemant:{
        required:true,
        type:Boolean,
        default:false
    },
    varun:{
        required:true,
        type:Boolean,
        default:false
    },
    
});

module.exports = mongoose.model("Days",DaysSchema);