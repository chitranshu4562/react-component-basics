import "./ExpenseItem.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
function ExpenseItem(props) {
    return (
        <div>
            <div className="row item-container">
                <div className="col-2">
                    <ExpenseCalender date={props.expenseItem.date}/>
                </div>
                <div className="col title-text d-flex align-items-center">
                    <h2>{props.expenseItem.title}</h2>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center price">${props.expenseItem.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;