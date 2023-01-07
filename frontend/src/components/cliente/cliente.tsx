import './cliente.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Cliente as ClienteType } from '../../types/cliente';

type Props = {
    data: ClienteType
}

const Cliente = ({data} : Props) => {
    return (
        <div className="cliente-area">
            <div className='cliente-data-show'>
                <div className='cliente-icon'>
                    <AccountCircleIcon />
                </div>
                <div className="cliente-name">{data.nomeCompleto.nome} {data.nomeCompleto.sobrenome}</div>
                <div className='cliente-icon'>
                    <EditIcon />
                </div>
                <div className='cliente-icon'>
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