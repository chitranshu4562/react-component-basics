import "./ExpenseItem.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
import Card from "../card/Card";
function ExpenseItem(props) {
    return (
        <div className="row item-container">
            <div className="col-2">
                <ExpenseCalender date={props.expenseItem.date}/>
            </div>
            <div className="col title-text d-flex align-items-center">
                <h2>{props.expenseItem.title}</h2>
            </div>
            <Card className="col-2 d-flex justify-content-center align-items-center price">${props.expenseItem.amount}</Card>
        </div>
    )
}

export default ExpenseItem;