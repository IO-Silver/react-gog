import React from "react";
import categories from "../../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select onChange={(event) => onSelectCategory(event.target.value)} className="form-select mb-3">
      <option value="">All Categories</option>
      {categories.map((category: string) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
