import Card from "../../wrappers/WrapperCard";
import Image from 'next/image'
import classes from './card.character.module.scss';
import { useRouter } from "next/dist/client/router";

const CardCharacter = props => {

    const router = useRouter();

    const handleDetailCharacter = (e) => {
        e.preventDefault();
        router.push({
            pathname: '/detail/character',
            query: { id: props.id }
        });
    }

    return (
        <Card onClick={handleDetailCharacter}>
            <div className={classes['character-container']}>
                <div className={classes['character-container__image']}>
                    <Image src={props.image} layout="fill"></Image>
                </div>
                <div className={classes['character-container__info']}>
                    <label>{props.name}</label>
                    <div className={classes['character-container__info__status']}>
                        <div style={{background: props.status === 'Dead' ? 'red': (props.status === 'Alive') ? 'green' : 'gray'}}></div>
                        <span>{props.status}</span>
                        <span>-</span>
                        <span>{props.species}</span>
                    </div>
                </div>
            </div>
        </Card>
    )

}

export default CardCharacter;