import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="Sidebar">
           
            <ul><Link to='/'>
                <li><i className="fa fa-home"></i></li>
                </Link>
                <li><i className="fa fa-book-open"></i></li>
                <li><i className="fa fa-graduation-cap"></i></li>
                <li><i className="fa fa-file-alt"></i></li>
                <Link to='/create'>
                <li><i className="fa fa-edit"></i></li>
                </Link>
                <Link to='/login'>
                <li><i className="fa fa-user"></i></li>
                </Link>
                <li><i className="fa fa-question-circle"></i></li>
                <li><i className="fa fa-user-cog"></i></li>
            </ul>
        </div>
    );
}

export default Sidebar;
