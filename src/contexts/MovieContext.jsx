import {createContext, useState, useEffect, useContext } from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = sessionStorage.getItem("favorites");

    if(storedFavs) setFavorites(JSON.parse(storeFavs));
  }, [])

  return <MovieContext.Provider>
    {children}
  </MovieContext.Provider>
}