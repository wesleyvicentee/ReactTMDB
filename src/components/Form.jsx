import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import '../styles/components/search-form.scss';

const Form = () => {
    return (
        <form className="search-form">
            <input type="text" placeholder="Busque por um filme"/>
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    )
};

export default Form;