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
			<h1 className="card-title text-center text-size2">
				{props.Title}
				<h5 type="button" onClick={Timer} className="text-primary">
					Timer
				</h5>
				<div className="d-flex justify-content-around">
					<h5 type="button" onClick={props.StartButton}>
						<i className="fas fa-play text-success"></i>
					</h5>
					<h5 type="button" onClick={props.StopButton}>
						<i className="fas fa-stop text-danger"></i>
					</h5>
					<h5 type="button" onClick={props.PauseButton}>
						<i className="fas fa-pause text-warning"></i>
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
	Title: PropTypes.number,
	StopButton: PropTypes.function,
	StartButton: PropTypes.function,
	PauseButton: PropTypes.function
};
