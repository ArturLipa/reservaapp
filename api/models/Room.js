import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
title:{
    type: String,
    required:true,
},
price:{
    type: String,
    required:true,
},
maxPeople:{
    type: Number,
    required:true,
},
desc:{
    type: String,
<<<<<<< HEAD
    required: false,
  },
  roomNumbers:[{number:Number, unavailableDates:{type:[Date]}}]
=======
    required:false,
},
rooNumber:[{number:Number,unavailableDates:{type:[Date]}}]
>>>>>>> 9daa32f7376718fca39fd86ea305e8cf0d623401

},{timestamps:true});

export default mongoose.model("Room",RoomSchema)