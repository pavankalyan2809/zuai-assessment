import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            });
    }, [id]); 

    return (
        <div>
            <h2>Post Detail</h2>
            {loading ? <p>Loading...</p> : post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <a href={`/edit/${post.id}`}>Edit</a>
                </div>
            ) : <p>Post not found</p>}
        </div>
    );
};

export default PostDetail;
