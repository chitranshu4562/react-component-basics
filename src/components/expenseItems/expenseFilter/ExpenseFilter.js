import './ExpenseFilter.css'
function ExpenseFilter(props) {
    const selectHandler = (event) => {
        props.onSelectingYear(event.target.value);
    }
    return <div className="row p-2">
        <div className="col-3 year">
            <label>Select a year</label>
        </div>
        <div className="col-9 d-flex justify-content-end">
            <select value={props.selectedYear} onChange={selectHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
}
export default ExpenseFilter;