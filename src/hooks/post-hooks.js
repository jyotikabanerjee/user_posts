import { useState, useEffect } from "react";

const URLS = {
  POST: {
    users: "https://mockend.com/jyotikabanerjee/user_posts/users",
    posts: "https://jsonplaceholder.typicode.com/posts",
  }
}


const createHook = (url, body) => {
  return (successFn = () => { }, errorFn = () => { }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          const json = await response.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, [url, body, successFn, errorFn]);

    return { data, loading, error };
  }
}

export const useUsersPost = () => createHook(URLS.POST.users);
export const usePostsPost = () => createHook(URLS.POST.posts);