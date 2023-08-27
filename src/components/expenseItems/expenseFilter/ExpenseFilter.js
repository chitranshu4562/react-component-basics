import {useState} from "react";

import './ExpenseFilter.css'
function ExpenseFilter() {
    const [selectYear, setSelectYear] = useState('');
    const selectHandler = (event) => {
        setSelectYear(event.target.value);
        console.log(selectYear);
    }
    return <div className="row p-2">
        <div className="col-3 year">
            <label>Select a year</label>
        </div>
        <div className="col-9 d-flex justify-content-end">
            <select name={selectYear} onChange={selectHandler}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
}
export default ExpenseFilter;