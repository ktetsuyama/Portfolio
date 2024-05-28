import { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./Header";
import Footer from "./Footer";

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
			<Header />
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
			<main className="mx-3">{renderPage()}</main>
			<Footer />
		</div>
	);
}
