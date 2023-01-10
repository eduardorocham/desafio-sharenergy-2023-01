import './cliente.css';
import { Link, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Cliente as ClienteType } from '../../types/cliente';

import { api } from '../../utils/useApi';

type Props = {
    data: ClienteType
}

const delCliente = async (id : string) => {
    let response = window.confirm('Tem certeza que deseja deletar este usuário?');
    if (response) {
        const result = await api.deleteClient(id);
        if (result) {
            alert('Usuário deletado');
            window.location.reload();
        } else {
            alert('Não foi possível deletar o usuário');
        }
    }
}

const Cliente = ({data} : Props) => {
    return (
        <div className="cliente-area">
            <div className='cliente-data-show'>
                <div className='cliente-icon'>
                    <AccountCircleIcon />
                </div>
                <div className="cliente-name">{data.nomeCompleto.nome} {data.nomeCompleto.sobrenome}</div>
                <Link to={`/cliente/${data._id}`} className='cliente-icon'>
                    <EditIcon />
                </Link>
                <div className='cliente-icon' onClick={() => delCliente(data._id)}>
                    <DeleteIcon />
                </div>
                </div>
            <div className='cliente-datas'>
                <div className='cliente-datas-left'>
                    <div className='cliente-data'>
                        <span>E-mail:</span>
                        {data.email}
                    </div>
                    <div className='cliente-data'>
                        <span>Telefone:</span>
                        {data.telefone}
                    </div>
                </div>
                <div className='cliente-datas-right'>
                    <div className='cliente-data'>
                        <span>Endereço:</span>
                        {data.endereco}
                    </div>
                    <div className='cliente-data'>
                        <span>Cpf:</span>
                        {data.cpf}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cliente