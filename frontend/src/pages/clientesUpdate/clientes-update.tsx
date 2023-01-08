import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../clientesCadastro/clientes-cadastro.css';
import '../clientesUpdate/clientes-update.css';

import { Cliente as ClienteType } from '../../types/cliente';

import { api } from '../../utils/useApi';

import Container from '../../components/container/container';

const ClientesUpdate = () => {
    const [loading, setLoading] = useState(false);

   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [email, setEmail] = useState('');
   const [telefone, setTelefone] = useState('');
   const [endereco, setEndereco] = useState('');
   const [numero, setNumero] = useState('');
   const [cpf, setCpf] = useState('');

   const params = useParams();
   const navigate = useNavigate();

   const getCliente = async (id : string) => {
        setLoading(true);
        const result = await api.getClient(id);
        const cliente : ClienteType = result.client;
        setNome(cliente.nomeCompleto.nome);
        setSobrenome(cliente.nomeCompleto.sobrenome);
        setEmail(cliente.email);
        setTelefone(cliente.telefone);

        let adress = cliente.endereco.split(',');
        setEndereco(adress[0]);
        setNumero(adress[1]);

        setCpf(cliente.cpf);
        setLoading(false);
   };

   const updateCliente = async (event: any) => {
        event.preventDefault();
        let adress = `${endereco}, ${numero}`;
        const result = await api.updateCliente(
            params.id as string, 
            nome, 
            sobrenome, 
            email, 
            telefone, 
            adress, 
            cpf
        );
        console.log(result);
        navigate('/clientes');
   }

   const cancelUpdateCliente = (event: any) => {
        event.preventDefault();
        navigate('/clientes');
   }

   useEffect(() => {
        if(params.id) {
            getCliente(params.id);
        }
   }, []);

    return (
        <div className="clientes-cadastro-page">
            <Container>
                <div className='clientes-cadastro-area'>
                    <h1>Editar cliente:</h1>
                    {loading === false &&
                        <form>
                            <fieldset className='nome'>
                                <input 
                                    type='text' 
                                    placeholder='Nome:'
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                    value={nome}
                                />
                                <input 
                                    type='text' 
                                    placeholder='Sobrenome:'
                                    required
                                    onChange={(e) => setSobrenome(e.target.value)}
                                    value={sobrenome}
                                />
                            </fieldset>
                            <input 
                                type='email' 
                                id='email' 
                                placeholder='E-mail:'
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                            />
                            <input 
                                type='text' 
                                id='telefone' 
                                placeholder='Telefone:' 
                                onChange={(e) => setTelefone(e.target.value)}
                                value={telefone}
                            />
                            <fieldset className='endereco'>
                                <input 
                                    type='text' 
                                    id='endereco' 
                                    placeholder='Endereço:'
                                    onChange={(e) => setEndereco(e.target.value)} 
                                    value={endereco}
                                />
                                <input 
                                    type='text' 
                                    id='numero' 
                                    placeholder='Número:' 
                                    onChange={(e) => setNumero(e.target.value)}
                                    value={numero}
                                />
                            </fieldset>
                            <input 
                                type='text' 
                                id='cpf' 
                                placeholder='CPF:' 
                                onChange={(e) => setCpf(e.target.value)}
                                value={cpf}
                            />
                            <fieldset className='buttons'>
                                <input 
                                    type='submit'
                                    placeholder='Enviar'
                                    onClick={updateCliente}
                                />
                                <button onClick={cancelUpdateCliente}>
                                    Cancelar
                                </button>
                            </fieldset>
                        </form>
                    }
                </div>
            </Container>
        </div>
    )
}

export default ClientesUpdate;