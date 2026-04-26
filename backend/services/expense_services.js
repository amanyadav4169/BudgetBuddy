const { Expense } = require("../models/expense");


class expense{
    static async  add_expense(id,name,category,expensevalue){
        try{
        let new_expense = new Expense({
             "id": id,
        "name": name,
        "category": category,
        "expensevalue": expensevalue
        })
        await new_expense.save();
    }
    catch(error){
        return error;
    }
    }
    static async show_expenses(){
        try{
        let all_expenses = await Expense.find();
        return all_expenses;
        }
        catch(error){
            return error;
        }
    }
    static async show_expenses_based_on_category(category){
        try{
            let required_expenses = await Expense.find({"category":category});
            return required_expenses;
        }
        catch(error){
            return error;
        }
    }
    static async modify_expense(id,new_expense){
        try{
            let result = await Expense.findOneAndUpdate({id:id},{"expensevalue":new_expense});
            return result;
        }
        catch(error){
            return error;
        }
    }
}
module.exports=expense;
