import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './clientes-cadastro.css';

import { Cliente as ClienteType } from '../../types/cliente';
import { Estado as EstadoType } from '../../types/estado';
import { Cidade as CidadeType } from '../../types/cidade';

import { api } from '../../utils/useApi';
import { apiIBGE } from '../../utils/apiIBGE';

import Container from '../../components/container/container';

const ClientesCadastro = () => {
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [email, setEmail] = useState('');
   const [telefone, setTelefone] = useState('');
   const [endereco, setEndereco] = useState('');
   const [numero, setNumero] = useState('');
   const [cpf, setCpf] = useState('');

   const [estados, setEstados] = useState<EstadoType[]>([]);
   const [cidades, setCidades] = useState<CidadeType[]>([]);
   const [estado, setEstado] = useState('');
   const [cidade, setCidade] = useState('');

   const navigate = useNavigate();

   const getEstados = async () => {
        const list = await apiIBGE.getEstados();
        setEstados(list);
   }

   const getCidades = async (uf : string) => {
    const list = await apiIBGE.getCidades(uf);
    setCidades(list);
}

   const sendCliente = async (event: any) => {
        event.preventDefault();

        //Deixar primeira letra do nome e sobrenome maiúscula
        let nomeValid = nome[0].toUpperCase() + nome.substring(1);
        let sobrenomeValid = sobrenome[0].toUpperCase() + sobrenome.substring(1);
    
        let fullEndereco = `${endereco}, ${numero}, ${cidade}, ${estado}`;
        // let CPF = `${cpf.slice(0, 3)}.${cpf.slice(4, 7)}`;
        const result = await api.createClient(nomeValid, sobrenomeValid, email, telefone, fullEndereco, cpf);
        if(result.id) {
            navigate('/clientes');
        }
   }

   useEffect(() => {
        getEstados();
   }, []);

   useEffect(() => {
        if (estado.length > 0 && estado.length > 0) {
            getCidades(estado);
        }
    }, [estado]);

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
                        <fieldset className='estado'>
                            <label>
                                Estado:
                                <select onChange={(e) => setEstado(e.target.value)}>
                                    {estados.map((i, k) => (
                                        <option value={i.sigla}>{i.sigla}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Cidade:
                                <select onChange={(e) => setCidade(e.target.value)}>
                                    {cidades.map((i, k) => (
                                        <option value={i.nome}>{i.nome}</option>
                                    ))}
                                </select>
                            </label>
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