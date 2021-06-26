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
let counter2 = 999999;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	const six2 = Math.floor(counter2 / 100000);
	const five2 = Math.floor(counter2 / 10000);
	const four2 = Math.floor(counter2 / 1000);
	const three2 = Math.floor(counter2 / 100);
	const two2 = Math.floor(counter2 / 10);
	const one2 = Math.floor(counter2 / 1);
	counter2--;
	if (one === 0) return alert("Time's up budy!!");
	ReactDOM.render(
		<div className="py-5 background">
			<div className="m-auto card-deck w-75">
				<MainCard Title={<i className="far fa-clock"></i>} />
				<Cards Title={six} />
				<Cards Title={five} />
				<Cards Title={four} />
				<Cards Title={three} />
				<Cards Title={two} />
				<Cards Title={one} />
			</div>
			<div className="m-auto card-deck w-75 py-3">
				<MainCard Title={<i className="far fa-clock"></i>} />
				<Cards Title={six2} />
				<Cards Title={five2} />
				<Cards Title={four2} />
				<Cards Title={three2} />
				<Cards Title={two2} />
				<Cards Title={one2} />
			</div>
		</div>,
		document.querySelector("#app")
	);
}, 1000);
