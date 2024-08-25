import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate=useNavigate()
    const loginformc=()=>{
        navigate('/login')
    }
    
    return (
        <header className="Header">
            <h1>ZUAI</h1>
            <div className="Header-top">
                <span className="Tag">Useful Resources</span>
                <div className="AuthButtons">
                    <button className="Login" onClick={loginformc}>Login</button>
                    <button className="Join" >Join Now</button>
                </div>
            </div>
           
        </header>
    );
}

export default Header;
