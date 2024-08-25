import React, { Component } from 'react';
import '../styles/PostList.css';
import { FaTrash } from 'react-icons/fa'; 

class PostList extends Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, loading: false }));
    }

    deletePost = (id) => {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                this.loadPosts(); 
            }
        });
    }

    render() {
        const { posts, loading } = this.state;
        return (
            <div className="post-list-container">
                <div className="post-list-items">
                    <h2>Post List</h2>
                    {loading ? <p>Loading...</p> : (
                        <ul>
                            {posts.map(post => (
                                <li key={post.id} className="post-item">
                                    <div className="post-content">
                                        <a href={`/post/${post.id}`} className="post-link">
                                            <h1>{post.title}</h1>
                                            <p>{post.content}</p>
                                        </a>
                                        <FaTrash 
                                            className="delete-icon" 
                                            onClick={() => this.deletePost(post.id)}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="create-post-container">
                    <a href="/create">
                        <button className="btn">Create New Post</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default PostList;
