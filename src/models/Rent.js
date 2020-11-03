const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    room_id:{
        type:String,
        required:true
        // references toi room schema
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
