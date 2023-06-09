import mongoose from "mongoose";


const Userschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    joinedOn:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('User',Userschema)