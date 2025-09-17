import React from "react";
import { Expense } from "../../App";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: number) => void;
}

const Expenses = ({ expenses, deleteExpense }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => {
                  deleteExpense(expense.id);
                }}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => {
                return acc + expense.amount;
              }, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Expenses;
