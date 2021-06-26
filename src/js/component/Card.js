import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export const Cards = props => {
	return (
		<div className="card bg-dark cardSize">
			<img
				src={props.ImageURL}
				className="card-img-top"
				alt={props.ImageAlt}
			/>
			<div>
				<h1 className="card-title text-center text-size">
					{props.Title}
				</h1>
			</div>
		</div>
	);
};

Cards.propTypes = {
	ImageURL: PropTypes.string,
	ImageAlt: PropTypes.string,
	Title: PropTypes.string,
	Content: PropTypes.string,
	ExtraContent1: PropTypes.string,
	ExtraContent2: PropTypes.string,
	ExtraContent3: PropTypes.string,
	ButtonContent: PropTypes.string
};
