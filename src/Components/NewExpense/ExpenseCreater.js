import "./ExpenseCreater.css";

const ExpenseCreater = (props) => {
  const clickHandler = () => {
      props.onCreateForm();
  }


  return (
    <div className="addForm__Button">
      <button onClick={clickHandler}>Add New Expense</button>
    </div>
  );
};

export default ExpenseCreater;
