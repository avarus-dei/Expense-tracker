import Card from "../../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesChartForYear from "./ExpensesChartForYear";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    props.changeExpenses(filteredYear);
  };

  const year2019 = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === "2019";
  });
  let year2019Amount = 0;
  for (let expense of year2019) {
    year2019Amount += expense.amount;
  }

  const year2020 = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === "2020";
  });
  let year2020Amount = 0;
  for (let expense of year2020) {
    year2020Amount += expense.amount;
  }

  const year2021 = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === "2021";
  });
  let year2021Amount = 0;
  for (let expense of year2021) {
    year2021Amount += expense.amount;
  }

  const year2022 = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === "2022";
  });
  let year2022Amount = 0;
  for (let expense of year2022) {
    year2022Amount += expense.amount;
  }

  const yearsExpensesAmount = [
    year2019Amount,
    year2020Amount,
    year2021Amount,
    year2022Amount,
  ];

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "all") return expense;
    return expense.date.getFullYear().toString() === filteredYear;
  });

  if (filteredYear === "all") {
    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChartForYear yearsAmount={yearsExpensesAmount} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
