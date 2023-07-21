
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import MovieInfos from "../components/MovieInfos";

import "../styles/pages/movie.scss"

const moviesAPI = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    const getMovie = async (url) => {

        setLoading(true);

        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);

        setLoading(false);
    }

    useEffect(() => {

        const movieUrl = `${moviesAPI}${id}?${apiKey}`

        getMovie(movieUrl)
    }, [])

    return (
        <div className="main-container">
            {loading ? <p>carregando...</p> : <>
            
                <MovieCard movie={movie}/>

                <MovieInfos movie={movie} title="Receita"/>

            </>}


        </div>
    )
}

export default Movie