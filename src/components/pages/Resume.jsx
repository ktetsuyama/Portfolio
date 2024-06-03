import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
	const resumePdf = "/resume.pdf";

	return (
		<>
			<section
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: "1rem",
				}}
			>
				<a
					href={resumePdf}
					download="resume.pdf"
					style={{
						marginTop: "20px",
						padding: "1px 20px",
						backgroundColor: "#007bff",
						color: "#fff",
						textDecoration: "none",
						borderRadius: "5px",
						textAlign: "center",
					}}
				>
					Download Keegan's Resume
				</a>
			</section>
			<div
				style={{
					width: "100%",
					height: "calc(100vh - 100px)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
					<Viewer fileUrl={resumePdf} />
				</Worker>
			</div>
		</>
	);
};

export default Resume;
