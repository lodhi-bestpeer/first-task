const {User} = require("../models")
const bcrypt = require('bcrypt');

const signup = async(req,res)=>{
   try {
    const {firstName, lastName, email, password} = req.body
   const bcryptPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        firstName, lastName, email, password:bcryptPassword
    })
    res.status(201).json({ user })
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}

const getSingalUser = async(req,res)=>{
    try {
     const {id} = req.params
     const user = await User.findById(id)
     res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 }

 const deleteUserProfile = async(req,res)=>{
    try {
     const {id} = req.body
     const user = await User.findByIdAndDelete(id)
     res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 }

 const updateUserProfile = async(req,res)=>{
    try {
     const {firstName, lastName, email, password, id} = req.body
     const user = await User.findByIdAndUpdate(id,{
         firstName, lastName, email, password
     },{new:true})
     res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 }

 const getAllUser = async(req,res)=>{
    try {
     const user =  await User.find({})
     res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
 }


module.exports = {
    signup,
    deleteUserProfile,
    updateUserProfile,
    getSingalUser,
    getAllUser
}