import Transaction from "../models/Transaction.js";

export const createTransaction = async (req,res,next)=>{
    try {
        const transaction = await Transaction.create({...req.body, createdBy: req.user._id})
        res.status(201).json(transaction)
    } catch (error) {
        next(error)
    }
}

export const getTransactions = async (req,res,next)=>{
    try {
        const tasks = await Transaction.find({createdBy: req.user._id})
        res.json(tasks)
    } catch (error) {
        next(error)
    }
}

export const updateTransaction = async (req,res,next) =>{
    try {
        const transaction = await Transaction.findOneAndUpdate(
            {_id: req.params.id, createdBy: req.user._id},
            req.body,
            {new:true}
        )
        if(!transaction){
            return res.status(404).json({message: "Transaction not found"})
        }
        res.json(transaction)
    } catch (error) {
        next(error)
    }
}


export const deleteTransaction = async (req,res,next) =>{
    try {
        const transaction = await Transaction.findOneAndDelete({_id: req.params.id, createdBy: req.user._id})
        if(!transaction){
            return res.status(404).json({message: "Transaction not found"})
        }
        res.json({message: `Transation with ${req.params.id} is deleted`})
    } catch (error) {
        next(error)
    }
}

