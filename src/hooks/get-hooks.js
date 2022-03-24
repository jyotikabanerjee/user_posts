import { useEffect, useState } from "react";

const URLS = {
  GET: {
    USERS: "https://mockend.com/jyotikabanerjee/user_posts/users",
    POSTS: "https://mockend.com/jyotikabanerjee/user_posts/posts",
  }
}

const createHook = (url) => {
  return (successFn = () => { }, errorFn = () => { }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, [url, successFn, errorFn]);

    return { data, loading, error };
  }
}


export const useUsersGet = () => createHook(URLS.GET.USERS);
export const usePostsGet = () => createHook(URLS.GET.POSTS);