import React, {useEffect, useState} from "react";
import axios from 'axios';

function UserPosts({userId}) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async (id) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?userId=${id}`
            );

            setPosts(response.data);
        }catch(err){
            setError('Помилка при завантаженні даних');
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(userId);
    }, [userId]);

    if (loading) return <p>Завантаження даних</p>;
    if (error) return  <p>{error}</p>;

    return (
        <div>
            <h2>Пости користувача {userId}</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserPosts;