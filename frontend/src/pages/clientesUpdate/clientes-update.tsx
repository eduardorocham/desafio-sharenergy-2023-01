import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../clientesCadastro/clientes-cadastro.css';
import '../clientesUpdate/clientes-update.css';

import { Cliente as ClienteType } from '../../types/cliente';
import { Estado as EstadoType } from '../../types/estado';
import { Cidade as CidadeType } from '../../types/cidade';

import { api } from '../../utils/useApi';
import { apiIBGE } from '../../utils/apiIBGE';

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

   const [estados, setEstados] = useState<EstadoType[]>([]);
   const [cidades, setCidades] = useState<CidadeType[]>([]);
   const [estado, setEstado] = useState('RO');
   const [cidade, setCidade] = useState("Alta Floresta D'Oeste");

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

        if (nome.length === 0 || sobrenome.length === 0 || email.length === 0 || telefone.length === 0 || endereco.length === 0 || numero.length === 0 || cpf.length === 0) {
            window.alert("Preencha todos os campos!");
            return
        }

        //Deixar primeira letra do nome e sobrenome maiúscula
        let nomeValid = nome[0].toUpperCase() + nome.substring(1);
        let sobrenomeValid = sobrenome[0].toUpperCase() + sobrenome.substring(1);

        if (telefone.length === 11) {
            let telefoneNumber = parseInt(telefone);
            if (Number.isNaN(telefoneNumber)) {
                window.alert("Número de telefone inválido");
                return
            }
        } else {
            window.alert("Número de telefone inválido");
            return
        }

        let numeroNumber = parseInt(numero);
        if (Number.isNaN(numeroNumber)) {
            window.alert("Número no endereço inválido");
            return
        }

        let fullEndereco = `${endereco}, ${numero}, ${cidade}, ${estado}`;
        
        if (cpf.length === 11) {
            let cpfNumber = parseInt(cpf);
            if (Number.isNaN(cpfNumber)) {
                window.alert("Digite apenas números no CPF");
                return
            }
        } else {
            window.alert("CPF inválido");
            return
        }

        const result = await api.updateCliente(
            params.id as string, 
            nomeValid, 
            sobrenomeValid, 
            email, 
            telefone, 
            fullEndereco, 
            cpf
        );
        navigate('/clientes');
   }

   const cancelUpdateCliente = (event: any) => {
        event.preventDefault();
        navigate('/clientes');
   }

   const getEstados = async () => {
        const list = await apiIBGE.getEstados();
        setEstados(list);
    }

    const getCidades = async (uf : string) => {
        const list = await apiIBGE.getCidades(uf);
        setCidades(list);
    }

   useEffect(() => {
        if(params.id) {
            getCliente(params.id);
        }
   }, []);

    useEffect(() => {
        getEstados();
    }, []);

    useEffect(() => {
        if (estado.length > 0) {
            getCidades(estado);
        }
    }, [estado]);

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