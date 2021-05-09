import React from "react";
import "./Detail.css";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		
		if (location.state === undefined) {
			history.push("/");
		}
	}

	render() {
		const { state } = this.props.location;

		if (state === undefined) {
			return null;
		}

		if (state.genres === undefined) {
			state.genres = ["None"];
		}

		return (
			<section className="box">
				<h3 className="title"> {state.title} </h3>
				<img src={state.poster} alt={state.title} title={state.title} />
				<div className="subbox">
					<hr></hr>
					<ul className="genres">
						{state.genres.map((genre, index) => (
							<li key={index}> {genre} </li>
						))}
					</ul>
					<p> {state.summary} </p>
				</div>
			</section>
		);
	}
}

export default Detail;