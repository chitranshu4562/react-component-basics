import styles from './NewExpense.module.css'
import ExpenseForm from "./expenseForm/ExpenseForm";
function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.floor((Math.random() * 10) + 5).toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
    }
    return <div className={styles.newExpenseContainer}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}
export default NewExpense;