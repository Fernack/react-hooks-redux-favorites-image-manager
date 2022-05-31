import React from 'react';
import { useSelector } from 'react-redux';

import { selectImages } from './favoritesSlice';

import { ListImages } from '../listImages/ListImages';

export function Favorites() {
  const favoriteImages = useSelector(selectImages);
 
  return (
    <ListImages images={favoriteImages}/>
  );
}
