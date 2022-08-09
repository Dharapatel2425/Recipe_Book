import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

function ImproveSection(props) {
    const lists = [
        "Learn New Recepies",
        "Experiment With Food",
        "Write Your Own Recepies",
        "Know Nutrition Facts",
        "Get Cooking Tips",
        "Get Ranked"
    ]
    return (
        <>
            <div className='section improve-section'>
                <div className='col img'>
                    <img src='img/gallery/img10.jpg' alt=''/>
                </div>    
                <div className='col typography'>
                    <h1 className='title'>Improve Your Culinary Skills</h1>
                    {lists.map((item,index)=> (
                        <p className='skill-item' key={index} >{item}</p>
                    ))}
                    <button className='btn'>Sign Up Now</button>
                </div>       
            </div>
            <div className='section quote'>
                <p className='qoute-text'>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                    Food is everything we are. It's an extension of nationalist feeling,
                    ethnic feeling,your personal history,your province,your region,your tribe,
                    your grandma.It's inseparable from those from the get-go.
                </p>
                <p className='qoute-author'>-Anthony Bourdain</p>
            </div>
        </>
    );
}

export default ImproveSection;