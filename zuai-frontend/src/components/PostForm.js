import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/posts/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTitle(data.title);
                    setContent(data.content);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError('Title and content are required');
            return;
        }

        const method = id ? 'PUT' : 'POST';
        const url = id ? `http://localhost:5000/posts/${id}` : 'http://localhost:5000/posts';

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        })
            .then(response => response.json())
            .then(() => navigate('/'))
            .catch(() => setError('Error submitting form'));
    };

    return (
        <div>
            <h2>{id ? 'Edit Post' : 'Create Post'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={content}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default PostForm;
