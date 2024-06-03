import React from "react";
import CopyrightNotice from "./CopyrightNotice";

const Footer = () => {
	return (
		<footer className="w-100 bg-secondary p-4">
			<div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
				<a
					href="https://github.com/ktetsuyama"
					target="_blank"
					className="btn btn-md mb-1 btn-orange btn-github w-100"
				>
					<img
						src={"/github-mark-white.png"}
						alt={"GitHub logo"}
						style={{ width: "50px", height: "auto" }}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/keegan-royal-eisenberg/"
					target="_blank"
					className="btn btn-md mb-1 btn-orange btn-linkedin w-100"
				>
					<img
						src={"/LinkedIn.png"}
						alt={"LinkedIn logo"}
						style={{ width: "100px", height: "auto" }}
					/>
				</a>
				<a
					href="https://www.instagram.com/usjpwebdev/"
					target="_blank"
					className="btn btn-md mb-1 btn-orange btn-instagram w-100"
				>
					<img
						src={"/Instagram.png"}
						alt={"Instagram logo"}
						style={{ width: "50px", height: "auto" }}
					/>
				</a>
			</div>
			<div className="container text-center mb-5">
				<h4>
					<CopyrightNotice />
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
