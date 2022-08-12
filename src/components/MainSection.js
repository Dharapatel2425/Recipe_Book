import React from 'react';
import CustomImage from './CustomImage';

function MainSection(props) {

    const images = [
        "img/gallery/img1.jpg",
        "img/gallery/img2.jpg",
        "img/gallery/img3.jpg",
        "img/gallery/img4.jpg",
        "img/gallery/img5.jpg",
        "img/gallery/img6.jpg",
        "img/gallery/img7.jpg",
        "img/gallery/img8.jpg",
        "img/gallery/img10.jpg"
    ]
    return (
        <div className='section main_section'>
            <div className='col typography'>
                <h1 className='title'>What Are We About</h1>
                <p className='info'>
                    RecipeBook is a place where you can please your soul and
                    tummy with delicious food recipes of all cuisine.
                    And our service is absolutely free.So start exploring now.
                </p>
                <button className='btn'>Explore Now</button>
            </div>
            <div className='col gallery'>
                {images.map((recipe,index)=>(
                    <CustomImage key={index} imgSrc={recipe} pt={"90%"}/>
                ))}
                

            </div>
           
        </div>
    );
}

export default MainSection;