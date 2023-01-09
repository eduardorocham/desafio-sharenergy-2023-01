import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { api } from '../../utils/useApi';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(false);
    const [cookies, setCookie, getCokie] = useCookies(['user']);

    const navigate = useNavigate();

    const checkCookie = () => {
        if (cookies.user) {
            setUserName(cookies.user.username);
            setPassword(cookies.user.password);
        }
    }

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        setLoading(true);
        const response = await api.login(username, password);
        if (response.status === true) {
            if (getCokie('user') === undefined) {
                setCookie('user', {username, password}, { path: '/' });
            };
            navigate('/home');
        } else {
            setWarning(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        checkCookie();
    }, []);

    return (
        <div className='login-area'>
            <div className={`warning ${warning ? 'warning-block' : ''}`}>
                Usuário ou senha inválida.
            </div>
            <div className='form-area'>
                <form>
                    <h1>Login</h1>
                    <input 
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Usuário'
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                    <input 
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Senha'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input 
                        type='submit'
                        value='Entrar'
                        onClick={handleSubmit}
                        disabled={loading ? true : false}
                    />
                </form>
            </div>  
        </div>
    )
}

export default Login;