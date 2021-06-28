import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import { Timer } from "../component/Functions.js";

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
			<h1 className="card-title text-center text-size">
				{props.Title}
				<h5 type="button" onClick={Timer}>
					Timer
				</h5>
				<div className="d-flex justify-content-around">
					<h5 type="button" onClick={Timer}>
						<i className="fas fa-play"></i>
					</h5>
					<h5 type="button" onClick={Timer}>
						<i className="fas fa-stop"></i>
					</h5>
					<h5 type="button" onClick={Timer}>
						<i className="fas fa-pause"></i>
					</h5>
				</div>
			</h1>
		</div>
	);
};

Cards.propTypes = {
	Title: PropTypes.number
};
MainCard.propTypes = {
	Title: PropTypes.number
};
