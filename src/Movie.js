import React from "react";
import PropTypes from "prop-types";

const Movie = ({id, title, year, rating, summary, poster}) => {
    return (
        <div>
            <img src={poster} alt={title} title={title} />
            <div>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <p>{summary}</p>
            </div>


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