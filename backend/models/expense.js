const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    expensevalue: Number
});

 const Expense = mongoose.model('expense', expenseSchema);
 module.exports={Expense};

