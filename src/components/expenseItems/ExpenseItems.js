import ExpenseItem from "./expenseItem/ExpenseItem";
import NewExpense from "./newExpense/NewExpense";

function ExpenseItems(props) {
    const addExpenseHandler = (addedExpense) => {
        console.log(addedExpense);
    }
    return <div className="expenses-container">
        <NewExpense onAddExpense={addExpenseHandler}/>
        {props.expenseItems.map(expense => <ExpenseItem title={expense.title} date={expense.date}
                                                        amount={expense.amount}/>)}
    </div>
}

export default ExpenseItems;