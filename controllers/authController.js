const User = require('../models/User')
const jwt = require('jsonwebtoken')

const generateToken = (id, role) =>{
    return jwt.sign(
        {id, role},
        process.env.JWT_SECRET,
        {expiresIn: '30d'}
    )
};

exports.registerUser = async(req,res)=>{
    try {
        const {name, email, password, role} = req.body
        const userExisted = await User.findOne({email})
        if(userExisted){
            return res.status(400).json({message: 'email existed !'})
        }
        const user = await User.create({
            name,
            email,
            password,
            role
        })
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role)
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user._email,
                role: user.role,
                token: generateToken(user._id, user.role)
                
            })
        }
        else{
            return res.status(401).json({message:'Invalid email or password !'})
        }
    } catch (error) {
        res.json(500).json({message: error.message})
              
    }
}