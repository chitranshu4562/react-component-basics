import styles from './ExpenseFilter.module.css'
function ExpenseFilter(props) {
    const selectHandler = (event) => {
        props.onSelectingYear(event.target.value);
    }
    return <div className="row p-2">
        <div className={`${styles.year} col-6`}>
            <label>Select a year</label>
        </div>
        <div className="col-6 d-flex justify-content-end">
            <div className="d-flex justify-content-center align-items-center">
                <select value={props.selectedYear} onChange={selectHandler} className={styles.dropdownStyle}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    </div>
}
export default ExpenseFilter;