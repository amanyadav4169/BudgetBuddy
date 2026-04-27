import React, { useState } from 'react'

export default function Home() {
const[data,setData]=useState({
  id:78,
  name:"",
  category:"",
  expensevalue:0}

);
async function addExpense(){
  try{

  let result = fetch("http://localhost:8000/add_expense", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    
  "id":data.id,
  "name": data.name,
  "category": data.category,
  "expensevalue": data.expensevalue

  })
})
console.log("data is saved");}
catch(error){
  console.log(error);
}
}
  return (
    <div>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={(e) => {
  setData({
    ...data,
    name: e.target.value
  });
}}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Category</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Category" onChange={(e) => {
  setData({
    ...data,
    category: e.target.value
  });
}}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Expense value</label>
    <input type="Number" class="form-control" id="exampleInputPassword1" placeholder="Expense Value"
    onChange={(e) => {
  setData({
    ...data,
    expensevalue: e.target.value
  });
}}/>
  </div>
  <button type="submit" onClick={(e)=>{e.preventDefault();addExpense();}} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
