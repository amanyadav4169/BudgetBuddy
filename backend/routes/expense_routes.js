const express=require('express');
const router = express.Router();
const{add_expense,show_expenses,show_expenses_based_on_category,modify_expense,delete_expense}=require("../controllers/expenses_controller");
//route to add an expense
router.post("/expenses",add_expense);
//route to show all expenses
router.get("/show-expenses",show_expenses);
//route to show all expenses based on category
router.get("/expenses/category",show_expenses_based_on_category);
//route to modify any expense record based on id
router.put('/expenses/:id',modify_expense);
//route to  modify any expense record based on id
router.delete('/expenses/:id',delete_expense);
module.exports=router;