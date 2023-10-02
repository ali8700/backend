const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
 Name:String,
 lastName:string,
 age: Number,
 email:{
    type:string,
    unique:'true'
 }

})
module.exports=mongoose.model('contactSchema',contactSchema)