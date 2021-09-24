import classes from './wrapper.car.module.scss';

const Card = props => {

    return (
        <div className={[classes.card, (props.animate) ? classes['animate-card'] : ''].join(' ')} {...props}>
            {props.children}
        </div>
    )

}

export default Card;