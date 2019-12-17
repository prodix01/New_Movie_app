import React from "react";
import PropTypes from "prop-types";

const Movie = ({id, title, year, rating, summary, poster}) => {
    return (
        <div>
            <h2></h2>
            <h4>{title}</h4>
            <h6>{year}</h6>

        </div>

    );
};

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    rating : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;