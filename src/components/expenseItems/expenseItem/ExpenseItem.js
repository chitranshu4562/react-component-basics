import styles from "./ExpenseItem.module.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
function ExpenseItem(props) {
    return (
        <div className={`${styles.expenseItemContainer} my-3 p-2`}>
            <div className={styles.dateItem}>
                <ExpenseCalender date={props.date}/>
            </div>
            <div className={styles.titleItem}>
                <div className="title-style w-100 h-100">{props.title}</div>
            </div>
            <div className={styles.amountItem}>
                <div className={styles.amount}>
                    <div className="align-items-center">$</div>
                    <div>{props.amount}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;