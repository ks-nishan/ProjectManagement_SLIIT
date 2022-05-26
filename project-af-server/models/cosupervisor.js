const mongoose=require("mongoose");

const cosuperschema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:{type:String,require:true},
    reseach:{type:Array,require:true},
    Designation:{type:String,require:true},
    qualification:{type:String,require:true},
    faculty:{type:String,require:true},
    email:{type:String,require:true},


});
module.exports=mongoose.model('Cosupervisor',cosuperschema);
