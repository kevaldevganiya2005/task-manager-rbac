const jwt = require('jsonwebtoken')
const User = require('../models/User')

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            return next()
        } catch (error) {
            res.status(401).json({message: 'Authoziration failed !'})

        }
    }
    if(!token){
        return res.status(401).json({message: 'Invalid token , access denied !'})
    }
}

const authorize = (...allowedRoles) =>{
    return (req,res,next) => {
        if(!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(403).json({message: 'Not Allowed !'})
        }

        next()
    }
}

module.exports = {protect, authorize}