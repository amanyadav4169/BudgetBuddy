import React,{useEffect, useState} from 'react'

export default function Expenses() {
useEffect(()=>{
    getAllExpenses();
},[])
const[expenselist,setExpenseList]=useState([]);

async function getAllExpenses(){
     try{

  let result = await fetch("http://localhost:8000/show_expenses", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}); 
let response = await result.json();

setExpenseList(response.data);}
catch(error){
  console.log(error);
}
}
  return (
    <div>
{
  expenselist.length>0 && 

    expenselist.map((element,index)=>{
        return(
            <div >
            <h1>Row-{index+1}</h1>
            <span>{element.id} -{element.name}-{element.category}-{element.expensevalue}</span>
            </div>
        )})

   
}   
    </div>
  )
}
