function Card(props) {
    const classes = "card shadow " + props.className
    return <div className={classes}>
        {props.children}
    </div>
}

export default Card;