import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

const MovieInfos = ({ title, icon, value }) => {
    return (
        <div>
            <h3>
                {icon} {title}:
            </h3>
            <p>{value}</p>
        </div>
    )
};

export default MovieInfos;