import { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CopyrightNotice from "./CopyrightNotice";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("About");

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Resume") {
			return <Resume />;
		}
		if (
			currentPage !== "Portfolio" &&
			currentPage !== "About" &&
			currentPage !== "Resume" &&
			currentPage !== "Contact"
		) {
			return <Error />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			{/* We are passing the currentPage from state and the function to update it */}
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			{/* Here we are calling the renderPage method which will return a component  */}
			<main className="mx-3">{renderPage()}</main>
			<CopyrightNotice />
		</div>
	);
}
