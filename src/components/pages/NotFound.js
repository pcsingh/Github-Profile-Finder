import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound.jpg';

const NotFound = () => {
	return (
		<div>
			<br />
			<br />
			<img src={PageNotFound} alt="" />
			<p style={{textAlign: "center"}}>
				<Link to="/" className="btn btn-primary">Go to Home</Link>
			</p>
		</div>
	);
};

export default NotFound;