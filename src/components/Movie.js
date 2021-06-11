import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, summary, poster, genres }) {
	const [fullSummary, setFullSummary] = useState(false);

	const onClickView = () => {
		setFullSummary(!fullSummary);
	}

	if (genres === undefined) {
		genres = ["None"];
	}

	return (
		<div className="movie">
			<Link
				className="link"
				to={{
					pathname: `/movie/${id}`,
					state: { title, summary, poster, genres }
				}} >
				<img src={poster} alt={title} title={title} />
				<div className="movie__data">
					<h3 className="movie__title"> {title} </h3>
					<ul className="movie__genres">
						{genres.map((genre, index) => (
							<li key={index}> {genre} </li>
						))}
					</ul>
					{
						summary.length < 300
							? (
								<p> {summary} </p>
							) : (
								<p> {summary.slice(0, 300)}...(omit)</p>
							)
					}
				</div>
			</Link>
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