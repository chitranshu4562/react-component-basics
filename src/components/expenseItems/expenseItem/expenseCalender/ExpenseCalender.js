import styles from './ExpenseCalender.module.css'

function ExpenseCalender(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear();

    return (
        <div className={styles.calenderContainer}>
            <div className={styles.calenderMonth}>{month}</div>
            <div className={styles.calenderDay}>{day}</div>
            <div className={styles.calenderYear}>{year}</div>
        </div>
    )
}

export default ExpenseCalender;