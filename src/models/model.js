const mongoose=require("mongoose");
const validator=require("validator");

const sprintersSchema=new mongoose.Schema({
    event:{
        type:String,
        require:true,
        // validator(value){
        //     if(!value.equals(value,"100m")){
        //         throw new Error("Invalid event.");
        //     }
        // }
    },
    ranking:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    dob:{
        type:Date
    },
    country:{
        type:String
    },
    score:{
        type:String,
        unique:true
    }

})

const Sprinter=new mongoose.model("Sprinter",sprintersSchema);
module.exports=Sprinter;