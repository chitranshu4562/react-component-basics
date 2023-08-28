import ExpenseItem from "./expenseItem/ExpenseItem";
import ExpenseFilter from "./expenseFilter/ExpenseFilter";
import './ExpenseItems.css'
import {useState} from "react";

function ExpenseItems(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filterItems = props.expenseItems.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <div className="d-flex justify-content-center"><h2 className="text-light">No Items Found</h2></div>;
    if (filterItems.length > 0) {
        expensesContent = filterItems.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>);
    }

    return <div className="expenses-container">
        <ExpenseFilter selectedYear={filteredYear} onSelectingYear={filterYearHandler}/>
        {/*{filterItems.length === 0 ? (<div className="d-flex justify-content-center">*/}
        {/*    <h2 className="text-light">No Items found</h2>*/}
        {/*</div>) : filterItems.map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date}*/}
        {/*                                                  amount={expense.amount}/>)}*/}

        {/*another way of conditional rendering*/}
        {/*{filterItems.length === 0 && (*/}
        {/*    <div className="d-flex justify-content-center"><h2 className="text-light">No Items Found</h2></div>)}*/}
        {/*{filterItems.length > 0 && filterItems.map(expense => <ExpenseItem key={expense.id} title={expense.title}*/}
        {/*                                                                   date={expense.date}*/}
        {/*                                                                   amount={expense.amount}/>)}*/}

        {/*another way of conditional rendering*/}
        {expensesContent}
    </div>
}

export default ExpenseItems;