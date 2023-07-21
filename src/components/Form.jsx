import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import '../styles/components/search-form.scss';

const Form = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`)

        setSearch("");
    };

    return (
        <form className="search-form" onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Busque por um filme"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    )
};

export default Form;