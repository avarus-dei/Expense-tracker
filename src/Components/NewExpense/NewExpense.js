import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseCreater from "./ExpenseCreater";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (
      enteredExpenseData.title === "" ||
      enteredExpenseData.amount === "" ||
      enteredExpenseData.date == "Invalid Date"
    ) {
      props.onAddExpense("");
      
    } else {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setIsEditing(false);
    }
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
