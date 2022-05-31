import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './FavoriteImage.css';

import { Image } from '../image/Image';
import { toggle, isFavoriteImage } from '../favorites/favoritesSlice';
import heartSelected from'../../assets/heart-selected.png';
import heartDeselected from'../../assets/heart-deselected.png';

export function FavoriteImage({image}) {
    const [showFavoriteManager, setShowFavoriteManager] = useState(false);
    const dispatch = useDispatch();
    const isFavorite = useSelector(isFavoriteImage)(image.id);


    const onMouseEnterHandler = (visible) =>{
        setShowFavoriteManager(visible);
    }   

    return (
        <Fragment>
            <div 
                onClick={() => dispatch(toggle(image))} 
                className="favoriteImage" 
                onMouseEnter={()=> onMouseEnterHandler(true)}
                onMouseLeave={() => onMouseEnterHandler(false)}
                >   
                {
                    showFavoriteManager 
                        ? isFavorite 
                            ? <img src={heartSelected} className="favorite" alt=''/> 
                            : <img src={heartDeselected} className="favorite" alt=''/>  
                        : null
                }          
                
            </div>
            <Image image={image}/> 
        </Fragment>  
    );
}
