const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let expenses = [];

app.post('/expenses', (req, res) => {
    const expense = req.body;
    expenses.push(expense);
    res.status(201).send(expense);
});

app.get('/show-expenses', (req, res) => {
    res.send(expenses);
});

app.get('/expenses/category/:category', (req, res) => {
    const category = req.params.category;
    const filtered = expenses.filter(exp => exp.category === category);
    res.send(filtered);
});

app.put('/expenses/:id', (req, res) => {
    const id = req.params.id;
    const updatedExpense = req.body;
    expenses = expenses.map(exp => 
        exp.id === id ? updatedExpense : exp
    );
    res.send(updatedExpense);
});

app.delete('/expenses/:id', (req, res) => {
    const id = req.params.id;
    expenses = expenses.filter(exp => exp.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});