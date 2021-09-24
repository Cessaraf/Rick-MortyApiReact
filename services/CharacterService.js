import ApiClient from "../config/apiClient"

export const fetchCharacters = async () => {
    try {
    const res = await ApiClient.get('/character');
    return res;
    } catch(error) {
        return {
            data: {
                results: [],
                info: {}
            }
        }
    }
}

export const fetchCharatcersByName = async (name) => {
    try {
    const res = await ApiClient.get('/character', {
        params: {
            name: name
        }
    });
    return res;
    } catch(error) {
        return {
            data: {
                results: [],
                info: {}
            }
        }
    }
}