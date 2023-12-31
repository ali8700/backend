const express=require('express')
const contactSchema=require('../model/contact')

const contactRoute=express.Router()

contactRoute.get('/getall',async(req,res)=>{
    try{
  const contact= await contactSchema.find()
  res.status(200).json({msg:"you got all the users",contact})
    }catch(err){
      console.log(err)
      res.send('you have a problem')  
    }

})


contactRoute.post('/addcontact',async(req,res)=>{
    try{
  const newContact=new contactSchema(req.body)
  await newContact.save()
  res.status(200).json({msg:"you added the users",newContact})
    }catch(err){
      console.log(err)
      res.send('you have a problem')  
    }

})
contactRoute.put('/update/:id',async(req,res)=>{
    try{
  const {id}= res.params
  const updateuser=await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
  res.status(200).json({msg:"you could update ur user",updateuser})
    }catch(err){
      console.log(err)
      res.send('you have a problem')  
    }
  
  })

  ContactRoute.delete('/deletContact/:id',async (req,res)=>{
    try{
        const{id} = req.params

        const delContact = await ContactSchema.findByIdAndDelete(id)
res.status(200).send('could delet it ')
    }catch(err){
res.status(500).send('could not delete')
    }
})
  
  







  module.exports=contactRoute












module.exports=contactRoute