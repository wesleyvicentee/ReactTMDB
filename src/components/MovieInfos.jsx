import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

const MovieInfos = ({ movie, title }) => {
    return (
        <div>
            <h3>
                <BsGraphUp /> Receita:
            </h3>
            <p>{movie?.revenue}</p>
        </div>
    )
};

export default MovieInfos;