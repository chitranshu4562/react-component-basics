import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log({title: enteredTitle, amount: enteredAmount, date: enteredDate.toLocaleString()})
    }
    return <form onSubmit={submitHandler}>
        <div className="form-group row gy-3">
            <div className="col-6">
                <label className="label-class mb-1">Title</label>
                <input type="text" className="form-control" onChange={titleChangeHandler}/>
            </div>
            <div className="col-6">
                <label className="label-class mb-1">Amount</label>
                <input type="number" min="0.01" step="0.01" className="form-control" onChange={amountChangeHandler}/>
            </div>
            <div className="col-6">
                <label className="label-class mb-1">Date</label>
                <input type="date" min="2020-01-01" max="2024-12-31" className="form-control"
                       onChange={dateChangeHandler}/>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
                <button type="submit" className="button-class">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;