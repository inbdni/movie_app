import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, summary, poster, genres}) {
	const [fullSummary, setFullSummary] = useState(false);

	const onClickView = () => {
		setFullSummary(!fullSummary);
	}

	if (genres === undefined)
		genres = ["None"];

	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title"> {title} </h3>
				<ul className="movie__genres">
					{genres.map((genre, index) => (
						<li key={index}> {genre} </li>
					))}
				</ul>
				{ fullSummary 
				? (
					<p className="movie__summary"> 
						{summary}
						<button onClick={onClickView}> fold ▴ </button>
					</p>
				) : (
					<p className="movie__summary"> 
						{summary.slice(0, 300)}... 
						<button onClick={onClickView}> more ▾ </button>
					</p>
				)}
			</div>
		</div>
	);
}

Movie.prototype = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;