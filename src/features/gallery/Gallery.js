import React from 'react';
import { ListImages } from '../listImages/ListImages.js';
import { unsplashImages } from '../../data/images';

export function Gallery() {
    
    return (
        <ListImages images={unsplashImages}/>        
    )    
}