const express = require('express');
const connectDB = require('./config/db');
const cors=require('cors');
const router= require('./routes/expense_routes');
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
connectDB();




const{add_expense,show_expenses,show_expenses_based_on_category,modify_expense,delete_expense}=require("./controllers/expenses_controller");
const expense_class = require('./services/expense_services');
const { Expense } = require("./models/expense");
app.post("/add_expense",async(req,res)=>{
    
    let{id,name,category,expensevalue} = req.body;
    try{
    let new_expense = new Expense({
                 "id": id,
            "name": name,
            "category": category,
            "expensevalue": expensevalue
            })
            await new_expense.save();
        res.send("data saved")}
        catch(error){
            console.log(error);
        }}
        

);

app.get("/show_expenses",show_expenses);

app.get("/expenses/category",show_expenses_based_on_category);
app.post("/modify_expense/:id",modify_expense);
app.delete("/delete_expense/:id",delete_expense);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)})