import './ChartBar.css';

function ChartBar(props) {
    const barHeight = Math.round((props.data/props.maxValue) * 100) + '%';
    const barHeightStyle = {height: barHeight}
    return <div className="col">
        <div className="d-flex align-items-center h-100 flex-column">
            <div className="bar-stick d-flex align-items-end">
                <div className="bar-stick-inner" style={barHeightStyle}></div>
            </div>
            <div>{props.label}</div>
        </div>
    </div>
}

export default ChartBar;