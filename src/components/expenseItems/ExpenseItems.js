import ExpenseItem from "./expenseItem/ExpenseItem";
import ExpenseFilter from "./expenseFilter/ExpenseFilter";
import './ExpenseItems.css'

function ExpenseItems(props) {
    return <div className="expenses-container">
        <ExpenseFilter/>
        {props.expenseItems.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date}
                                                        amount={expense.amount}/>)}
    </div>
}

export default ExpenseItems;