
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function VeggieSection() {
    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getveggie();
    }, []);
    
    const getveggie = async () => {
        const check = localStorage.getItem("veggie");

        if(check){
            setVeggie(JSON.parse(check));

        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
       
    }

    return (
        <div>
            <Wrapper>
                <h3>Our Vegetarian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",

                    }}
                >
                    {veggie.map((recipes) => {
                        return (
                            <SplideSlide key={recipes.id}>
                                <Card>
                                    <Link to={"/recipe/" + recipes.id}>
                                        <p>{recipes.title}</p>
                                        <img src={recipes.image} alt={recipes.title}></img>
                                        <Gradient />
                                    </Link>    
                                </Card>
                                
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
            
    );
}

const Wrapper = styled.div`
    margin:4rem 0rem;
    padding-inline: 2vw;
    h3{
        text-align: center;
        padding-bottom: 2vw;
    }
    
`;


const Card = styled.div`
    min-height:17rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
    
    img{
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        border-radius:2rem;
        object-fit:cover;
    }
    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:bold;
        font-size:1rem;
        height:40%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;
const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`;
export default VeggieSection;