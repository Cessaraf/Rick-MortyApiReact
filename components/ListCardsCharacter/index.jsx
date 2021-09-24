import { useSelector } from "react-redux";
import CardCharacter from "../CardCharacter"
import classes from './list.cards.character.module.scss';

const ListCardsCharacter = props => {

    const dataCharacters = useSelector(state => state.data);

    const renderCardList = () => {
        return dataCharacters.map(item => {
            return <CardCharacter key={item.id} {...item}></CardCharacter>
        })
    }

    return (
        <div className={classes['list-card-container']}>
            {renderCardList()}
            { dataCharacters.length === 0 && 
                <div className={classes['list-card-container__not']}>
                    <span>NOT RESULTS</span>
                </div>
             }
        </div>        
    )
}

export default ListCardsCharacter;