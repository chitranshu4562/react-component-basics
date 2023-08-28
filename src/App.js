import './App.css';
import ExpenseItems from "./components/expenseItems/ExpenseItems";
import NewExpense from "./components/newExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {id: 0, title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 224.5},
    {id: 1, title: 'House Rent', date: new Date(2021, 5, 10), amount: 100},
    {id: 2, title: 'Home Loan', date: new Date(2022, 8, 15), amount: 500},
    {id: 3, title: 'Grocery expense', date: new Date(2023, 10, 15), amount: 150}
]
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (addedExpense) => {
        setExpenses((prevExpenses) => {
            return [addedExpense, ...prevExpenses];
        })
    }
    return (
        <div className="container-fluid w-75 m-auto">
            <div className="d-flex justify-content-center">
                <h1 className="text-light">Expense Tracker</h1>
            </div>
            <NewExpense onAddExpense={addExpenseHandler}/>

            <ExpenseItems expenseItems={expenses}/>
        </div>
    );
}

export default App;
