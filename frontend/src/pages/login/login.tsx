import React, { useState } from 'react';
import './login.css';

import { api } from '../../useApi';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        setLoading(true);
        const response = await api.login(username, password);
        setLoading(false);
    }

    return (
        <div className='login-area'>
            <form>
                <h1>Login</h1>
                <input 
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Usuário'
                    required
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Senha'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type='submit'
                    value='Entrar'
                    onClick={handleSubmit}
                />
            </form>
        </div>
    )
}

export default Login;