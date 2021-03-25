import React, { useEffect, useState } from "react";
import { getAllStories } from "../utils/api";
import StoryList from "./Storylist";

function Homescreen() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllStories()
      .then((story) => {
        setStories(story);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return <>{loading ? <div>Loading</div> : <StoryList stories ={stories}>Loaded</StoryList>}</>;
}

export default Homescreen;
