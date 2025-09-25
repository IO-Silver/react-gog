import React, { useState } from "react";
import Form from "./components/Form/Form";
import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import "./App.css";
import categories from "./categories";
import { produce } from "immer";
import { set } from "zod";

export type Expense = {
  id: number;
  description: string;
  amount: number;
  category: (typeof categories)[number];
};

function App() {
  const [nextID, setNextID] = useState(0); // This should be something we track in a DB usually
  const [currentCategory, setCurrentCategory] = useState("All Categories");
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Grocery shopping", amount: 50, category: "Groceries" },
    { id: 2, description: "Electricity bill", amount: 75, category: "Utilities" },
    { id: 3, description: "Movie night", amount: 30, category: "Entertainment" },
  ]);

  const handleSubmit = (data: any) => {
    const newExpense = {
      id: nextID, // change this
      ...data,
    };
    setNextID(nextID + 1);
    setExpenses(
      produce((draft) => {
        draft.push(newExpense);
      })
    );
  };

  const filteredExpenses = currentCategory
    ? expenses.filter((expense) => expense.category === currentCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <Form onSubmit={handleSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setCurrentCategory(category)} />
      </div>
      <Expenses
        expenses={filteredExpenses}
        deleteExpense={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}
      />
    </div>
  );
}

export default App;
