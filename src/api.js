import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0";
const newStoriesUrl = `${baseUrl}/newstories.json`;
const itemUrl = `${baseUrl}/item/`;

export const getStories = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.log(err);
  }
};
