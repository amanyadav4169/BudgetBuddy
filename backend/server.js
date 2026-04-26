const express = require('express');
const connectDB = require('./config/db');
const cors=require('cors');
const router= require('./routes/expense_routes');
const app = express();
const port = 5000;

app.use(express.json());
connectDB();
app.use(cors());
app.use("/",router);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});