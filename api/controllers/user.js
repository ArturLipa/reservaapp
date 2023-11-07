import User from "../models/User.js";

export const updateUser = async (req, res, next) =>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(202).json(updateUser);

    }catch(err){
        next(err)
    }
}

export const deleteUser = async (req, res, next) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(202).json({"message": "User eliminado con Exito"});

    }catch(err){
        next(err)
    }
}

export const getUser = async (req, res, next) =>{
    try{
        const user= await User.findById(req.params.id)
        res.status(203).json(user);

    }catch(err){
        next(err)
    }
}

export const getUsers = async (req, res, next) =>{ 
        try{
             const users = await User.find();
             res.status(200).json(users);
 
         }catch(err){
            next(err)
         }
}
