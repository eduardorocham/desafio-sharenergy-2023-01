import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Container from '../container/container';
import {
    HeaderArea,
    HeaderContent,
    MenuMobile,
    NavMenu,
    NavLink,
    ButtonLogOut
} from './styles';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/');
    }

    const showMenu = () => {
        setShow(!show);
    }

    return (
        <HeaderArea>
            <Container>
                <HeaderContent>
                    <MenuMobile onClick={showMenu}>
                        <MenuIcon style={{color: '#FFF', width: 30, height: 30}}/>
                    </MenuMobile>

                    <NavMenu show={show}>
                        <NavLink onClick={showMenu} to='/home'>Home</NavLink>
                        <NavLink onClick={showMenu} to='/status-code'>Status Code</NavLink>
                        <NavLink onClick={showMenu} to='/random-dog'>Random Dog</NavLink>
                        <NavLink onClick={showMenu} to='/clientes'>Clientes</NavLink>
                    </NavMenu>

                    <ButtonLogOut onClick={logout}>
                        Sair
                    </ButtonLogOut>
                </HeaderContent>
            </Container>
        </HeaderArea>
    )
}

export default Header;