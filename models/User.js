const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required !']
    },
    email: {
        type: String,
        required: [true, 'email is required !'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'please enter valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'password is required !'],
        minlength: 6
    },
    role: {
        type:String,
        enum: ['Admin', 'Manager', 'Employee'],
        default: 'Employee'
    }
},{timestamps: true})

userSchema.pre('save', async function(){
    if(!this.isModified('password')){
        return;
    }

    this.password = await bcrypt.hash(this.password, 10)
    
})
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password )
    
}
module.exports = mongoose.model('User',userSchema)