import "./ExpenseItem.css"
import ExpenseCalender from "./expenseCalender/ExpenseCalender";
import Card from "../card/Card";
import {useState} from "react";
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseItem.title);
    const clickHandler = () => {
        setTitle('updated!!'); // setTitle schedule for value change of state variable
    }
    return (
        <div className="row item-container">
            <div className="col-2">
                <ExpenseCalender date={props.expenseItem.date}/>
            </div>
            <div className="col title-text d-flex align-items-center">
                <h2>{title}</h2>
                <button onClick={clickHandler}>change me</button>
            </div>
            <Card className="col-2 d-flex justify-content-center align-items-center price">${props.expenseItem.amount}</Card>
        </div>
    )
}

export default ExpenseItem;