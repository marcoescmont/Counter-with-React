//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Cards } from "./component/Card.js";
import { MainCard } from "./component/Card.js";
import { StopCountDown } from "./component/Functions.js";
import { StopCounter } from "./component/Functions.js";
import { StartCountDown } from "./component/Functions.js";

let counterVar = 0;
let countdownVar = 999999;
export var Counter = setInterval(function() {
	const six = Math.floor(counterVar / 100000);
	const five = Math.floor(counterVar / 10000);
	const four = Math.floor(counterVar / 1000);
	const three = Math.floor(counterVar / 100);
	const two = Math.floor(counterVar / 10);
	const one = Math.floor(counterVar);
	counterVar++;

	ReactDOM.render(
		<div className="py-5 background">
			<div className="m-auto card-deck w-75 py-3">
				<MainCard
					Title={<i className="far fa-clock"></i>}
					StopButton={StopCounter}
					StartButton={Counter}
					// PauseButton={}
				/>
				<Cards Title={six} />
				<Cards Title={five} />
				<Cards Title={four} />
				<Cards Title={three} />
				<Cards Title={two} />
				<Cards Title={one} />
				<myFunction />
			</div>
		</div>,
		document.querySelector("#app")
	);
}, 1000);

export var Countdown = setInterval(function() {
	const sixCountdown = Math.floor(countdownVar / 100000);
	const fiveCountdown = Math.floor(countdownVar / 10000);
	const fourCountdown = Math.floor(countdownVar / 1000);
	const threeCountdown = Math.floor(countdownVar / 100);
	const twoCountdown = Math.floor(countdownVar / 10);
	const oneCountdown = Math.floor(countdownVar);
	countdownVar--;

	ReactDOM.render(
		<div className="py-5 background">
			<div className="m-auto card-deck w-75 py-3">
				<MainCard
					Title={<i className="far fa-clock"></i>}
					StopButton={StopCountDown}
					StartButton={StartCountDown}
					// PauseButton={myVar}
				/>
				<Cards Title={sixCountdown} />
				<Cards Title={fiveCountdown} />
				<Cards Title={fourCountdown} />
				<Cards Title={threeCountdown} />
				<Cards Title={twoCountdown} />
				<Cards Title={oneCountdown} />
			</div>
		</div>,
		document.querySelector("#app2")
	);
}, 1000);
