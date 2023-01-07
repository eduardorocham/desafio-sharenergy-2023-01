import { useState, useEffect } from 'react';

import './clientes.css';

import { Cliente as ClienteType } from '../../types/cliente';

import { api } from '../../useApi';

import Container from '../../components/container/container';
import Cliente  from '../../components/cliente/cliente';

const Clientes = () => {
    const [list, setList] = useState<ClienteType[]>([]);
    const [loading, setLoading] = useState(false);

    const getClientes = async () => {
        setLoading(true);
        const result = await api.getClients();
        setList(result.clients);
        setLoading(false);
    };

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="clientes-page">
            <Container>
                <div className='clientes-area'>
                    <h1>Clientes cadastrados:</h1>
                </div>
                {loading === false &&
                    list.map((i, k) => (
                        <Cliente data={i} key={k}/>
                    ))
                }
            </Container>
        </div>
    )
}

export default Clientes;