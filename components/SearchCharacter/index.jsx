import { useState } from "react";
import { useDispatch } from "react-redux";
import { findCharactersByName } from "../../store/actions/CharacterActions";
import classes from './search.character.module.scss';

const SearchCharacter = props => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleSearchCharacters = e => {
        e.preventDefault();
        setSearch(e.target.value);
        dispatch(findCharactersByName(e.target.value));
    }

    return (
        <input className={classes['search-character']} placeholder="Search by name" onChange={handleSearchCharacters} value={search}></input>
    )
}

export default SearchCharacter;