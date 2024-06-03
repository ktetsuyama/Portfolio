import React from "react";
import banner from "../../public/banner.png";

const Header = () => {
	const headerStyle = {
		backgroundImage: `url(${banner})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "200px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: "white",
	};

	return (
		<header style={headerStyle}>
			<div className="container">
				<h1>Keegan Royal-Eisenberg</h1>
			</div>
		</header>
	);
};

export default Header;
