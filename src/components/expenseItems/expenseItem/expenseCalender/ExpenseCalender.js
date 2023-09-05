import './ExpenseCalender.css'

function ExpenseCalender(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear();

    return (
        <div className="calender-container">
            <div className="calender-month">{month}</div>
            <div className="calender-day">{day}</div>
            <div className="calender-year">{year}</div>
        </div>
    )
}

export default ExpenseCalender;