import './dog.css';

import { useState } from 'react';

import Container from '../../components/container/container';

import { api } from '../../utils/useApi';

const RandomDog = () => {
    const [urlImage, setUrlImage] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const getDogImage = async () => {
        setLoading(true);
        const result = await api.randomDog();
        setUrlImage(result.url);
        setLoading(false);
    }

    return (
        <div className='random-dog-page'>
            <Container>
                <div className='random-dog-area'>
                    <button onClick={getDogImage}>Refresh</button>
                    {loading && 
                        <div className='random-dog-loading'>Carregando...</div>
                    }
                    {loading === false &&
                        <div className='random-dog-image'>
                            <img src={urlImage} alt='' />
                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default RandomDog;