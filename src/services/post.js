import axios from "axios";

const fetchPost = async (objectId) => {
    const postUrl = `https://hn.algolia.com/api/v1/items/${objectId}`;
    try {
        const response = await axios.get(postUrl);

        // parsed JavaScript object is available in response.data
        const postReceived = response.data;
        return postReceived;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default fetchPost;