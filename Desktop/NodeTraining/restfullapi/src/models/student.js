const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        minlength : 2
    },

    email:{
        type : String,
        required : true,
        unique :[true , "Plese enter valid mail id your email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new console.error("Invalid Email");
            }
        }
    }

})


// Creating a new collection 

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;