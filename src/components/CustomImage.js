import React from 'react';

function CustomImage({imgSrc,pt}) {
    return (
        <div className='custom_image' style={{paddingTop:pt}}>
           <img src={imgSrc} alt="" />
            
        </div>
    );
}

export default CustomImage;