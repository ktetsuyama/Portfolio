import React from "react";

class CopyrightNotice extends React.Component {
	render() {
		const year = new Date().getFullYear();
		return <p>Copyright {year} K Royal-Eisenberg</p>;
	}
}

export default CopyrightNotice;
