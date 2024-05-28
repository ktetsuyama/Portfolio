import React from "react";
import CopyrightNotice from "./CopyrightNotice";

const Footer = () => {
	return (
		<footer className="w-100 bg-secondary p-4">
			<div className="container text-center mb-5">
				<h4>
					<CopyrightNotice />
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
