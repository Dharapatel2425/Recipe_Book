import React from 'react';
import CustomImage from '../components/CustomImage';
import { useState} from "react";
import useCollapse from 'react-collapsed';




function RecipeCards({recipe}) {

   const [isExpanded, setExpanded] = useState(false)
   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
   

    
    return (
        <div className='recipe-card'>
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className='recipe-card-info'>
                <img className='auther-img' src={recipe.authorImg} alt=''/>
                <p className='recipe-title'>{recipe.title}</p>
                <span {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                     })} className="view-btn"
                >{isExpanded ? 'Read Less' : 'Read More'}
                </span>
                <p {...getCollapseProps()} className='recipe-desc'>{recipe.desc}</p>
                
            </div>
        </div>

    );
}

export default RecipeCards;