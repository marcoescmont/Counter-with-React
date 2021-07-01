import React from "react";
import PropTypes from "prop-types";
import { Counter } from "../index.js";
import { Countdown } from "../index.js";

export function Timer() {
	setTimeout(function() {
		alert("Time's up buddy!!");
	}, prompt("How many seconds you need?") * 1000);
}

export function StopCounter() {
	clearInterval(Counter);
}

export function StopCountDown() {
	clearInterval(Countdown);
}
