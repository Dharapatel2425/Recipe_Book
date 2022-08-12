import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaHamburger,FaUtensils } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Category(props) {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/indian'}>
                <FaUtensils />
                <h4>Indian</h4>
            </SLink>
        </List>
    );
}
const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`;

const SLink = styled(Link)`
    display:flex;
    flex-direct:column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:2rem;
    text-decoration:none;
    background:linear-gradient(35deg,#494949,#313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform:scale(0.8);
    h4{
        color:white;
        font-size:0.8rem;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }
    &.active{
        background:linear-gradient(to right,#f27121,#e94057);
        svg,h4{
            color:white;
        }
    }
`;

export default Category;