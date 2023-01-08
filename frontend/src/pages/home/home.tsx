import './home.css';

import { useState, useEffect } from 'react';

import { api } from "../../utils/useApi";

import { user } from '../../types/user';

import Container from "../../components/container/container";
import User from '../../components/users/user';

const Home = () => {
    const [users, setUsers] = useState<user[]>([]);
    const [filter, setFilter] = useState<string>('');
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

    const handleFilter = (e : any) => {
        setFilter(e.target.value);
        getFromFilter();
    }

    const getFromFilter = () => {
        const oldList = [...users];
        const newList = users.filter(i => 
            i.name.first.includes(filter) || i.name.last.includes(filter)
        );
        if(filter.length > 0) {
            setUsers(newList);
        } else {
            setUsers(oldList);
        }
    }

    const changePage = (e: any) => {
        setCurrentPage(parseInt(e.target.value));
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage < 9) {
        setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        if(!users || users?.length === 0) {
            getUsers();
        }  
    }, [users]);
    
    return (
        <div className='home-area'>
            <Container>
                <div className="input-looking">
                    <input 
                        placeholder="I´m looking for..."
                        onChange={handleFilter}
                        value={filter}
                    />
                </div>
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
                <div className='pagination'>
                    <button className='button-pagination' onClick={prevPage}>Prev</button>
                    {Array.from(Array(pages), (item, index) => {
                        return <button
                            className={index == currentPage ? 'button-pagination-active' : 'button-pagination'} 
                            value={index} 
                            onClick={changePage}
                            key={index}>
                            {index + 1}
                        </button>
                    })}
                    <button className='button-pagination' onClick={nextPage}>Next</button>
                </div>
            </Container>
        </div>
    )
}

export default Home;