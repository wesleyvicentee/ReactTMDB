import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../styles/pages/home.scss"

const moviesAPI = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        
        const topRatedUrl = `${moviesAPI}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);

    }, [])

    return (
        <main className="main-container">
            <h1>Filmes mais bem avaliados:</h1>
            <div className="container-movies">
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
            </div>
        </main>
    )
};

export default Home;