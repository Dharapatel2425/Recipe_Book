import React from 'react';
import ChiefCard from './ChiefCard';

function ChiefSection(props) {
    const chief =[
        {
            name:"Juan Carlos",
            img:"/img/top-chiefs/img_1.jpg",
            count:"10",
            cuisine: "Mexican",
        },
        {
            name:"John Doe",
            img:"/img/top-chiefs/img_2.jpg",
            count:"05",
            cuisine: "Japanese",
        },
        {
            name:"JErich Maria",
            img:"/img/top-chiefs/img_3.jpg",
            count:"13",
            cuisine: "Italian",
        },
        {
            name:"Chirs Brown",
            img:"/img/top-chiefs/img_4.jpg",
            count:"08",
            cuisine: "American",
        },
        {
            name:"Blake Lively",
            img:"/img/top-chiefs/img_5.jpg",
            count:"09",
            cuisine: "French",
        },
        {
            name:"Ben Affleck",
            img:"/img/top-chiefs/img_6.jpg",
            count:"04",
            cuisine: "Indian",
        }   

    ]
    return (
        <div className='section chiefs'>
            <h1 className='title'> Our Top Chiefs</h1>
            <div className='top-chiefs-container'>
                {chief.map(chief=><ChiefCard key={chief.name} chief={chief}/>)}
                
            </div>
            
        </div>
    );
}

export default ChiefSection;