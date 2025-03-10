import {createContext, useState, useEffect, useContext } from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

  const [favorites, setFavorites] = useState([]);

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  useEffect(() => {
    const storedFavs = sessionStorage.getItem("favorites");

    if(storedFavs) setFavorites(JSON.parse(storedFavs));
  }, [])

  useEffect(() => {
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
  
  }, [favorites])
  
  function addToFavorites(movie) {
    setFavorites(prev => [...prev, movie]);
  }

  function removeFromFavorites(movieId) {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  }

  function isFavorite(movieId) {
    return favorites.some(movie => movie.id === movieId);
  }



  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}