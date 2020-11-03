const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    room_type:{
        type:String,
        require:true     
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    note:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Room',RoomSchema);
