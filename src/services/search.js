import axios from "axios";

const fetchSearch = async (searchTerm = "") => {
    const searchUrl = `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
    try {
        const response = await axios.get(searchUrl);
        const hitsReceived = response.data.hits;
        return hitsReceived;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default fetchSearch