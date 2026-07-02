const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required !']
    },
    description: {
        type: String,
        required: [true, 'description is required !']
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Who should I assign the task to?']
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

},{timestamps: true})

module.exports = mongoose.model('Task',taskSchema)