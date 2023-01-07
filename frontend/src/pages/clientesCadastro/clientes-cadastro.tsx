import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './clientes-cadastro.css';

import { Cliente as ClienteType } from '../../types/cliente';

import { api } from '../../utils/useApi';

import Container from '../../components/container/container';

const ClientesCadastro = () => {
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [email, setEmail] = useState('');
   const [telefone, setTelefone] = useState('');
   const [endereco, setEndereco] = useState('');
   const [numero, setNumero] = useState('');
   const [cpf, setCpf] = useState('');

   const navigate = useNavigate();

   const sendCliente = async (event: any) => {
        event.preventDefault();
        let fullEndereco = `${endereco}, ${numero}`;
        // let CPF = `${cpf.slice(0, 3)}.${cpf.slice(4, 7)}`;
        const result = await api.createClient(nome, sobrenome, email, telefone, fullEndereco, cpf);
        if(result.id) {
            navigate('/clientes');
        }
   }

    return (
        <div className="clientes-cadastro-page">
            <Container>
                <div className='clientes-cadastro-area'>
                    <h1>Cadastrar cliente:</h1>
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
                            />
                        </fieldset>
                        <input 
                            type='text' 
                            id='cpf' 
                            placeholder='CPF:' 
                            onChange={(e) => setCpf(e.target.value)}
                            value={cpf}
                        />
                        <input 
                            type='submit'
                            placeholder='Enviar'
                            onClick={sendCliente}
                        />
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default ClientesCadastro;