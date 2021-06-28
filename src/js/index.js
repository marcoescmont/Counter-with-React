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

let counter = 0;
let countdown = 999999;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);
	counter++;

	const sixCountdown = Math.floor(countdown / 100000);
	const fiveCountdown = Math.floor(countdown / 10000);
	const fourCountdown = Math.floor(countdown / 1000);
	const threeCountdown = Math.floor(countdown / 100);
	const twoCountdown = Math.floor(countdown / 10);
	const oneCountdown = Math.floor(countdown);
	countdown--;

	ReactDOM.render(
		<div className="py-5 background">
			<div className="m-auto card-deck w-75 py-3">
				<MainCard Title={<i className="far fa-clock"></i>} />
				<Cards Title={six} />
				<Cards Title={five} />
				<Cards Title={four} />
				<Cards Title={three} />
				<Cards Title={two} />
				<Cards Title={one} />
				<myFunction />
			</div>
			<div className="m-auto card-deck w-75 py-3">
				<MainCard Title={<i className="far fa-clock"></i>} />
				<Cards Title={sixCountdown} />
				<Cards Title={fiveCountdown} />
				<Cards Title={fourCountdown} />
				<Cards Title={threeCountdown} />
				<Cards Title={twoCountdown} />
				<Cards Title={oneCountdown} />
			</div>
		</div>,
		document.querySelector("#app")
	);
}, 1000);
