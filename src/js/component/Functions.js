import React from "react";
import PropTypes from "prop-types";

export function Timer() {
	setTimeout(function() {
		alert("Time's up buddy!!");
	}, prompt("How many seconds you need?") * 1000);
}
