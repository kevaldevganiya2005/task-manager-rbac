const Task = require('../models/Task')
const User = require('../models/User')

exports.createTask = async(req,res)=>{
    try {
        const {title, description, assignedTo} = req.body

        const employee = await User.findById(assignedTo)
        if(!employee){
            return res.status(404).json({message: 'employee not found !'})
        }
        const task = await Task.create({
            title,
            description,
            assignedTo,
            assignedBy: req.user._id
        })
        res.status(201).json({message: 'Task created successfully', task})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getTasks = async(req,res)=>{
    try {
        let tasks;
        if(req.user.role === 'Employee'){
            tasks = await Task.find({assignedTo: req.user._id}).populate('assignedBy', 'name email')
        }
        else{
            tasks = await Task.find()
                            .populate('assignedTo', 'name email role')
                            .populate('assignedBy','name email role')
        }
       res.status(201).json(tasks)

    } catch (error) {
       res.status(500).json({ message: error.message });       
    }
}

exports.updateTask = async (req,res,next)=>{
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404).json({message: 'Task not found !'})
        }
        if(req.user.role === 'Employee' && req.user._id.toString() !== task.assignedTo.toString()){
            return res.status(403).json({message: 'Not Allowed !'})
            
        }

        task.title = req.body.title || task.title
        task.description = req.body.description || task.description
        task.status = req.body.status || task.status
        task.assignedTo = req.body.assignedTo || task.assignedTo

        const updatedTask = await task.save()
        res.status(201).json({message: 'Task updated successfully !',updatedTask})
    
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}