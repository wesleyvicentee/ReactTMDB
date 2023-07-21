import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "../styles/components/movie-card.scss"

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(() => {

        const searchWithQueryUrl = `${searchUrl}?query=${query}&${apiKey}`;

        getSearchedMovies(searchWithQueryUrl);

    }, [query]);

    return (
        <main className="main-container">
            <h1>Resultados para: <span className="query-text">{query}</span></h1>
            <div className="container-movies">
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/> )}
            </div>
        </main>
    )
}

export default Search