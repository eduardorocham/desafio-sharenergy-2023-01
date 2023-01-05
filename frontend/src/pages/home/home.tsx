import './home.css';

import { useState, useEffect } from 'react';

import { api } from "../../useApi";

import { user } from '../../types/user';

import Container from "../../components/container/container";
import User from '../../components/users/user';

const Home = () => {
    const [users, setUsers] = useState<user[]>([]);
    const [loading, setLoading] = useState(false);

    //Paginação:
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(users.length / itemsPerPage);
    const startIndex = itemsPerPage * currentPage;
    const endIndex = startIndex + itemsPerPage;
    const currentList = users.slice(startIndex, endIndex);

    const getUsers = async () => {
        setLoading(true);
        const list = await api.randomUser();
        setUsers(list.results);
        setLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, [])
    
    return (
        <div>
            <Container>
                <div className='users-area'>
                    <div className='users-area-header'>
                        <div>Foto</div>
                        <div>Nome completo</div>
                        <div>Email</div>
                        <div>Username</div>
                        <div>Idade</div>
                    </div>
                    {users &&
                        currentList.map((i, k) => (
                            <User data={i} key={k}/>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home;