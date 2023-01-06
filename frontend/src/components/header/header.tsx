import './header.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Container from '../container/container';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    return (
        <header>
            <Container>
                <div className='header-content'>
                    <nav>
                        <ul>
                            <Link to='/home'>Home</Link>
                            <Link to='/status-code'>Status Code</Link>
                            <Link to='/random-dog'>Random Dog</Link>
                            <Link to='/clientes'>Clientes</Link>
                        </ul>
                    </nav>
                    <button className='logout' onClick={logout}>
                        Sair
                    </button>
                </div>
            </Container>
        </header>
    )
}

export default Header;