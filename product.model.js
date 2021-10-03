const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        index:true,
        unique:true,
        require:true,
        trim:true,
        minlength:4
    },

    price:{
        type:Number,
        min:5
    },

    expiration:Date
    },{
        timestamps:true
    
});

module.exports=mongoose.model('Product',productSchema)