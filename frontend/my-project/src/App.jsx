
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expensevalue, setExpensevalue] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      category,
      expensevalue: Number(expensevalue),
    };

    try {
      let result = await fetch("http://localhost:5000/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    getExpenses();

    setName("");
    setCategory("");
    setExpensevalue("");
  };

  const getExpenses = async () => {
    const res = await fetch("http://localhost:5000/show-expenses");
    const data = await res.json();
    setExpenses(data.data || []);
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
    });
    getExpenses();
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>💰 BudgetBuddy</h1>

        <form onSubmit={handleSubmit} style={form}>
          <input
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />

          <input
            type="text"
            placeholder="Category (Food, Rent...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={input}
          />

          <input
            type="number"
            placeholder="Amount (₹)"
            value={expensevalue}
            onChange={(e) => setExpensevalue(e.target.value)}
            style={input}
          />

          <button type="submit" style={addBtn}>
            ➕ Add Expense
          </button>
        </form>
      </div>

      <div style={listContainer}>
        <h2 style={{ marginBottom: "15px" }}>📊 All Expenses</h2>

        {expenses.length === 0 && <p>No expenses yet...</p>}

        {expenses.map((exp) => (
          <div key={exp._id} style={expenseCard}>
            <div>
              <h3 style={{ margin: 0 }}>{exp.name}</h3>
              <p style={categoryText}>{exp.category}</p>
            </div>

            <div style={rightSection}>
              <span style={amount}>₹{exp.expensevalue}</span>

              <button
                onClick={() => deleteExpense(exp._id)}
                style={deleteBtn}
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🔥 STYLES

const container = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  padding: "40px",
  fontFamily: "Segoe UI",
  backgroundColor: "#f5f6fa",
  minHeight: "100vh",
};

const card = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  width: "300px",
};

const title = {
  textAlign: "center",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const addBtn = {
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

const listContainer = {
  width: "400px",
};

const expenseCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  padding: "12px 15px",
  borderRadius: "10px",
  marginBottom: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const categoryText = {
  fontSize: "12px",
  color: "#888",
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const amount = {
  fontWeight: "bold",
  fontSize: "16px",
};

const deleteBtn = {
  backgroundColor: "#ff4d4f",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  cursor: "pointer",
};

export default App;

