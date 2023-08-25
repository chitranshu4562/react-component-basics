import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'TITLE') {
            setEnteredTitle(value);
        } else if (identifier === 'AMOUNT') {
            setEnteredAmount(value);
        } else {
            setEnteredDate(value);
        }
    }

    // single useState
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);

    // first approach
    // setEnteredTitle({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })

    // better than first approach
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value }
    // })
    // }
    // const amountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value);

    // first approach
    // setEnteredAmount({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })

    // better than first appraoch
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value }
    // })
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value);

    // first approach
    // setEnteredDate({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })

    // better than first approach
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value }
    // })
    // }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(userInput)
        // console.log({title: userInput.enteredTitle, amount: userInput.enteredAmount, date: userInput.enteredDate.toLocaleString()})
    }
    return <form onSubmit={submitHandler}>
        <div className="form-group row gy-3">
            <div className="col-6">
                <label className="label-class mb-1">Title</label>
                <input type="text" name="TITLE" value={enteredTitle} className="form-control" onChange={(event) => {
                    inputChangeHandler(event.target.name, event.target.value)
                }}/>
            </div>
            <div className="col-6">
                <label className="label-class mb-1">Amount</label>
                <input type="number" name="AMOUNT" value={enteredAmount} min="0.01" step="0.01" className="form-control" onChange={(event) => {
                    inputChangeHandler(event.target.name, event.target.value)
                }}/>
            </div>
            <div className="col-6">
                <label className="label-class mb-1">Date</label>
                <input type="date" name="DATE" value={enteredDate} min="2020-01-01" max="2024-12-31" className="form-control"
                       onChange={(event) => {
                           inputChangeHandler(event.target.name, event.target.value)
                       }}/>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
                <button type="submit" className="button-class">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;