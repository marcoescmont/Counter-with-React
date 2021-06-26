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

//render your react application
ReactDOM.render(
	<div className="py-5 background">
		<div className="m-auto card-deck w-75">
			<MainCard Title={<i className="far fa-clock"></i>} />
			<Cards Title="0" />
			<Cards Title="0" />
			<Cards Title="0" />
			<Cards Title="0" />
			<Cards Title="0" />
			<Cards Title="1" />
		</div>
	</div>,
	document.querySelector("#app")
);
