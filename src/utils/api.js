import axios from 'axios';

const URL = 'https://hacker-news.firebaseio.com/v0';

const getStoryDetail = async (id) => {
    try {
        const response = await axios.get(`${URL}/item/${id}.json?print=pretty`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getAllStories = async () => {
    try {
        const { data: storyIds } = await axios.get(`${URL}/topstories.json?print=pretty`);
        const details = await Promise.all(storyIds.slice(0,10).map(getStoryDetail))
        return details;
    } catch (error) {
        console.log(error);
    }
}