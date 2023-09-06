import "./ExpenseItem.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
function ExpenseItem(props) {
    return (
        <div className="expense-item-container my-3 p-2">
            <div className="date-item">
                <ExpenseCalender date={props.date}/>
            </div>
            <div className="title-item">
                <div className="title-style w-100 h-100">{props.title}</div>
            </div>
            <div className="amount-item">
                <div className="amount">
                    <div className="align-items-center">$</div>
                    <div>{props.amount}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;