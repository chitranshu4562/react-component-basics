import styles from './Card.module.css'
function Card(props) {
    const classes = `${styles.card} shadow ` + props.className
    return <div className={classes}>
        {props.children}
    </div>
}

export default Card;