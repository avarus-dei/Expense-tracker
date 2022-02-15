import Chart from "../Chart/Chart";

const ExpensesChartForYear = (props) => {
  const chartYearDataPoints = [
    { label: "2019", value: props.yearsAmount[0] },
    { label: "2020", value: props.yearsAmount[1] },
    { label: "2021", value: props.yearsAmount[2] },
    { label: "2022", value: props.yearsAmount[3] }
  ];

  return (
    <div>
      <Chart dataPoints={chartYearDataPoints} />
    </div>
  );
};

export default ExpensesChartForYear;
