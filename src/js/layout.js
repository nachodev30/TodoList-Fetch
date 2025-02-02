import React from "react";

import Home from "./component/home.jsx";

import injectContext from "./appContext.js";



//create your first component
const Layout = () => {

	return (
		<Home/>
	);
};

export default injectContext(Layout);