import './App.css';
import ExpenseItem from "./components/expenseItem/ExpenseItem";

function App() {
    const expenseItems = [
        {id: 0, title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 224.5},
        {id: 1, title: 'House Rent', date: new Date(2022, 5, 10), amount: 100},
        {id: 2, title: 'Home Loan', date: new Date(2019, 8, 15), amount: 500},
        {id: 3, title: 'Grocery expense', date: new Date(2022, 12, 31), amount: 150},
    ]
    return (
        <div className="container-fluid w-75 m-auto">
            <div className="d-flex justify-content-center">
                <h1>Expense Tracker</h1>
            </div>
            <ExpenseItem expenseItem={expenseItems[0]}/>
            <ExpenseItem expenseItem={expenseItems[1]}/>
            <ExpenseItem expenseItem={expenseItems[2]}/>
            <ExpenseItem expenseItem={expenseItems[3]}/>
        </div>
    );
}

export default App;
