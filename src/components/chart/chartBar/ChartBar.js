import styles from './ChartBar.module.css';

function ChartBar(props) {
    const barHeight = Math.round((props.data/props.maxValue) * 100) + '%';
    const barHeightStyle = {height: barHeight}
    return <div className={`${styles.chartBarBox} col-3 col-sm-2 col-lg-1 my-2`}>
        <div className="d-flex align-items-center h-100 flex-column">
            <div className={`${styles.barStick} d-flex align-items-end`}>
                <div className={styles.barStickInner} style={barHeightStyle}></div>
            </div>
            <div>{props.label}</div>
        </div>
    </div>
}

export default ChartBar;