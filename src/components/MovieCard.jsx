import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "../styles/components/movie-card.scss";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <div className="container-img">
                <img src={imageUrl + movie.poster_path} alt={movie.title} />
            </div>
            <h2>{movie.title}</h2>
            <div className="card-infos">
                <p>
                    <FaStar /> {movie.vote_average}
                </p>
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
            </div>
        </div>
    )
};

export default MovieCard;