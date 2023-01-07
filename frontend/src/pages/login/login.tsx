import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

import { api } from '../../utils/useApi';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        setLoading(true);
        const response = await api.login(username, password);
        if (response.status === true) {
            navigate('/home');
        } else {
            setWarning(true);
        }
        setLoading(false);
    }

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
                        disabled={loading ? true : false}
                    />
                </form>
            </div>  
        </div>
    )
}

export default Login;