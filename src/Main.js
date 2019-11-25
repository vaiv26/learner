import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Main() {
	return (
  	<div>
		<Link to={'/Main1'}><h3>Click Here to get three blogposts</h3></Link>
	</div>
  );
}

export default Main;







