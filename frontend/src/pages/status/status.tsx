import './status.css';

import status from 'http-status';

import { useState } from 'react';

import Container from '../../components/container/container';

import { api } from '../../utils/useApi';

const Status = () => {
    const [statusCode, setStatus] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleStatusCode = (e : any) => {
        setStatus(e.target.value);
    }

    const getImage = async (event : any) => {
        event.preventDefault();
        if (status[statusCode]) {
            setImageUrl(`https://http.cat/${statusCode}`);
        } else {
        setImageUrl('https://media.istockphoto.com/id/924949200/pt/vetorial/404-error-page-or-file-not-found-icon.jpg?s=170667a&w=0&k=20&c=GSfOtikQbfZBllL7OrY3zb6cP1Icjr9HmeHDmh0BB5I=');
        }
    }

    return (
        <div className='status-page'>
            <Container>
                <div className='status-area'>
                    <h1>Digite um status code entre 100 e 599</h1>
                    <form>
                        <input 
                            type='number' 
                            placeholder='Status code' 
                            onChange={handleStatusCode}
                            required
                        />
                        <input 
                            type='submit' 
                            value='Buscar' 
                            onClick={getImage}
                        />
                    </form>
                    {loading  &&
                        <div>Carregando...</div>
                    }
                    {loading === false &&
                        <div className='status-area-image'>
                            <img src={imageUrl} alt='' />
                        </div>
                    }
                </div>   
            </Container>
        </div>
    )
}

export default Status;