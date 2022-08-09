import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";

function ChiefCard({chief}) {

    return (
        <div className='chief-card'>
            <div className='chief-card-image'>
                <img src={chief.img} alt={chief.name} />
            </div>
            <div className='chief-card-info'>
                <h3 className='chief-card-name'>{chief.name}</h3>
                <p className='chief-recipe-count'>Recipes: <b>{chief.count}</b></p>
                <p className='chief-cuisine'>Cuisine: <b>{chief.cuisine}</b></p>
                <p className='cheif-icons'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                </p>
            </div>
            
        </div>
    );
}

export default ChiefCard;