import { useState } from "react";
import { PostContext } from "../context/PostContext";
import { useEffect } from "react";
import { allPost } from "../api/post.api";

export default function PostProvider({ children }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const allNews = await allPost();
        setNews(allNews);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  console.log(news);

  const addNews = (newPost) => {
    setNews([...news, newPost]);
  };
  return (
    <PostContext.Provider value={{ news, addNews }}>
      {children}
    </PostContext.Provider>
  );
}
