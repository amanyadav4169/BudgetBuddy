const expense_class  = require("../services/expense_services.js");

let expenses = [];

async function show_expenses(req,res){
let data = await expense_class.show_expenses();
if(data){
    res.json({"status":200,"message":"all expense records has been fetched successfully","data":data});
}
else{
    res.json({"status":500,"message":"some error has occured","error":data});
}

}
async function show_expenses_based_on_category(req,res){
    const category = req.query.category;
let  data =  await expense_class.show_expenses_based_on_category(category);
if(data){
    res.json({"status":200,"message":"expenses fetched successfully","data":data});
}
else{
    res.json({"status":500,"message":"some error has occured","error":data});
}
}
async function modify_expense(req,res){
     let id = req.query.id;
    let {new_expense} = req.body;
let data = await expense_class.modify_expense(id,new_expense);
if(data){
 res.json({"status":200,"message":"expense record has updated successfully ","data":data});
}
else{
    res.json({"status":500,"message":"some error has occured","error":data
    });
}
}
async function delete_expense(req,res){
const id = req.query.id;
let data= await expense.delete_expense(id);
if(data){

}
    res.status(200).send("the expense is deleted");
}
module.exports={show_expenses,show_expenses_based_on_category,modify_expense,delete_expense};