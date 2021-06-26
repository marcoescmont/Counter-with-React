import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const Cards = props => {
	return (
		<div className="card bg-dark cardSize">
			<h1 className="card-title text-center text-size">
				{props.Title % 10}
			</h1>
		</div>
	);
};

export const MainCard = props => {
	return (
		<div className="card bg-dark cardSize2">
			<h1 className="card-title text-center text-size">{props.Title}</h1>
		</div>
	);
};

Cards.propTypes = {
	Title: PropTypes.number
};
MainCard.propTypes = {
	Title: PropTypes.number
};
