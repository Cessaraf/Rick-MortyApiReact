import Image from "next/image";
import Card from "../../wrappers/WrapperCard";
import classes from './detail.character.module.scss';

const DetailCharacter = ({detail}) => {
    return(
        <Card animate="true">
            <div className={classes['detail-character']}>
                <div className={classes['detail-character__image']}>
                    <Image src={detail.image} layout='fill'></Image>
                </div>
                <div className={classes['detail-character__info']}>
                    <label>Name: <span>{detail.name}</span></label>
                    <label>Status: <span>{detail.status}</span></label>
                    <label>Specie: <span>{detail.species}</span></label>
                    <label>Episodes: <span>{detail.episode.length}</span></label>
                    <label>Gender: <span>{detail.gender}</span></label>
                    <label>Origin: <span>{detail.origin.name}</span></label>
                    <label>Location: <span>{detail.location.name}</span></label>
                </div>
            </div>
        </Card>
    )
}

export default DetailCharacter;