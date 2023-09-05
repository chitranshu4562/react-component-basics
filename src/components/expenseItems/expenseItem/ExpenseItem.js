import "./ExpenseItem.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
function ExpenseItem(props) {
    return (
        <div className="expense-item-container my-3 p-2">
            <div className="">
                <ExpenseCalender date={props.date}/>
            </div>
            <div className="title-item">
                <div className="title-style">{props.title}</div>
            </div>
            <div className="amount">
                <div className="align-items-center">$</div>
                <div>{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;