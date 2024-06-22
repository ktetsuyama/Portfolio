import React from "react";
const Header = () => {
	const headerStyle = {
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "200px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: "white",
		position: "relative",
	};

	const imgStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		zIndex: -1,
	};

	return (
		<header style={headerStyle}>
			<img src="/banner.png" alt="Banner" style={imgStyle} />
			<div className="container">
				<h1>Keegan Royal-Eisenberg</h1>
			</div>
		</header>
	);
};

export default Header;
