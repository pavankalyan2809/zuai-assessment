import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="content-container">
                    <ConditionalSidebar />
                    <main>
                        <Routes>
                            <Route path="/" element={<PostList />} />
                            <Route path="/post/:id" element={<PostDetail />} />
                            <Route path="/edit/:id" element={<PostForm />} />
                            <Route path="/create" element={<PostForm />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

function ConditionalSidebar() {
    const location = useLocation();
    const hideSidebarRoutes = ['/login', '/register'];
    const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

    if (shouldHideSidebar) {
        return null;
    }

    return <Sidebar />;
}

export default App;
