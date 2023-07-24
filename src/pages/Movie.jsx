
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

    };

    useEffect(() => {

        const movieUrl = `${moviesAPI}${id}?${apiKey}`

        getMovie(movieUrl)

    }, []);

    const formatCurrency =  (number) => {

        const val =  number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        return val;
    }

    const budget = movie?.budget || 0;
    const revenue = movie?.revenue || 0;

    const movieInfos = [
        {
            id: 1,
            title: 'Orçamento',
            icon: <BsWallet2 />,
            infoValue: formatCurrency(budget)
        },
        {
            id: 2,
            title: 'Receita',
            icon: <BsGraphUp />,
            infoValue: formatCurrency(revenue)
        },
        {
            id: 3,
            title: 'Duração',
            icon: <BsHourglassSplit /> ,
            infoValue: `${movie?.runtime} minutos`
        },
        {
            id: 4,
            title: 'Descrição',
            icon: <BsFillFileEarmarkTextFill />,
            infoValue: movie?.overview
        }
    ]

    return (
        <div className="main-container">

            {loading ? <p>carregando...</p> :
                <>
            
                    <MovieCard movie={movie}/>

                    { movieInfos.map((icon) => 
                        <MovieInfos
                            title={icon.title}
                            icon={icon.icon}
                            value={icon.infoValue}
                            key={icon.id}
                        />)
                    }
                </>
            }

        </div>
    );
};

export default Movie;