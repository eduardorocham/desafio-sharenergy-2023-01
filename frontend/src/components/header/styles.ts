import styled from "@emotion/styled";
import { NavLink as Link } from 'react-router-dom';

export const HeaderArea = styled.header`
    background-color: #000;
    padding: 10px;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuMobile = styled.div`
    display: none;

    @media(max-width: 425px) {
        {
            display: block;
        }
    }
`
type MenuStyledProps = {
    show: boolean;
}
export const NavMenu = styled.nav<MenuStyledProps>`
    width: 50%;

    @media(max-width: 425px) {
        {
            display: ${(props) => props.show ? 'block' : 'none'};
            position: absolute;
            top: 70px;
            width: 60vw;
            height: calc(100vh - 70px);
            background-color: #000;
            left: 0;
        }
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    padding: 16px 18px;
    font-weight: 700;
    font-size: 16px;
    
    &.active {
        color: #999;
    }

    &:hover {
        color: #d3d3d3;
    }

    @media(max-width: 425px) {
        {
            display: block;
        }
    }
`

export const ButtonLogOut = styled.button`
    width: 10rem;
    height: 5rem;
    background-color: #FFF;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: #cbcaca;
    }
`