import './Chart.css';
import ChartBar from "./chartBar/ChartBar";

function Chart(props) {
    const chartDataList = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]
    for (const expense of props.expenses) {
        const monthIndex = expense.date.getMonth(); // 0 -> January ... 11 -> December
        chartDataList[monthIndex].value += expense.amount;
    }
    const chartDataMaxValues = chartDataList.map(data => data.value);
    const maxValue = Math.max(...chartDataMaxValues);

    return <div className="chart-container w-100 row gx-4 gy-2 py-2 justify-content-center align-items-center">
        {chartDataList.map(chartData =>
            <ChartBar key={chartData.label} maxValue={maxValue} data={chartData.value} label={chartData.label}/>
        )}
    </div>
}

export default Chart;