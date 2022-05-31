import React from 'react';
import './Image.css';

export function Image({image}) {
    return (
        <img
            src={image.download_url}
            alt='not available'
        />        
    );
}
