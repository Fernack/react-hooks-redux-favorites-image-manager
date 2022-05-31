import React from 'react';

import './ListImages.css';

import { FavoriteImage } from '../favoriteImage/FavoriteImage';
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll';

export function ListImages({images}) {
    const [imagesSlice, isLoading, listInnerRef, onScroll] = useInfiniteScroll(images);
    
    return (
        <div className='listImages'>
            { 
                isLoading ? <div className="loader-container">
                    <div className="loader"></div>
                </div> : null
            }
            <ul onScroll={onScroll} ref={listInnerRef}>
                { 
                    imagesSlice.map( (image) =>
                        <li key={image.id}>
                            <FavoriteImage image={image}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )    
}