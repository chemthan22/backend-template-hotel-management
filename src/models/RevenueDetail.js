const mongoose = require('mongoose');

const RevenueDetail = new mongoose.Schema({
    _id:{
       type:String,
       required:true
    },
    _detail_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Revenue'     
    },
    name:{
        type:String,
        required:true
    },
    room_type:{
        type:String,
        require:true     // References tới cột thanh toán
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

module.exports = mongoose.model('RevenueDetail',RevenueDetail);
