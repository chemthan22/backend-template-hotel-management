const mongoose = require('mongoose');

const RevenueSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    month:{
        type:Date
    },
    sum_revenue:{
        type:Number
    }
      
})

module.exports = mongoose.model('Revenue',RevenueSchema);
