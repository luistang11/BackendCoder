import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
        min:0,
    },
    password:{
        type:String,
        required:true,
        min:6
    }

}, { timestamps: true });

schema.plugin(mongooseDelete, { deletedAt: true });


export const UsersModel = mongoose.model("users", schema);
