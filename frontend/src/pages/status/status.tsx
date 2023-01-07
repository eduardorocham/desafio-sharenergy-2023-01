import './status.css';

import { useState } from 'react';
import { STATUS_CODES } from 'http';

import Container from '../../components/container/container';

import { api } from '../../useApi';

const Status = () => {
    const [status, setStatus] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const handleStatusCode = (e : any) => {
        setStatus(e.target.value);
    }

    const getImage = async (event : any) => {
        event.preventDefault();
        // if (STATUS_CODES[status]) {
        //     setImageUrl(`https://http.cat/${status}`);
        // }
        // setImageUrl(`https://http.cat/${status}`);
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
                    {imageUrl.length > 1 &&
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