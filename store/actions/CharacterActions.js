import { fetchCharatcersByName, fetchCharacters } from "../../services/CharacterService";
import { GET_CHARACTERS_DATA } from "./ActionTypes";

export const getCharactersData = data => ({
    type: GET_CHARACTERS_DATA,
    data: data
})  

export const findCharacters = () => {
    return async (dispatch) => {
        const response = await fetchCharacters();
        dispatch(getCharactersData(response.data))
    }
}

export const findCharactersByName = (name) => {
    return async (dispatch) => {
        const response = await fetchCharatcersByName(name);
        dispatch(getCharactersData(response.data))
    }
}