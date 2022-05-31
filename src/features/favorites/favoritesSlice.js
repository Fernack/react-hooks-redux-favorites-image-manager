import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload; 

      if (state.images.find(i => i.id === id)){
        state.images = state.images.filter(item => item.id !== id);
      }
      else {
        state.images.push(action.payload)
      }      
    }
  },
});

export const { toggle } = favoritesSlice.actions;

export const selectImages = (state) => state.favorites.images;
export const isFavoriteImage = state => id => {
  return state.favorites.images.find(i => i.id === id);
};
 
export default favoritesSlice.reducer;