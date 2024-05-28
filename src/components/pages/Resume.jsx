import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
	const resumePdf = "/resume.pdf";

	return (
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
				<Viewer fileUrl="/resume.pdf" />;
			</Worker>
		</div>
	);
};

export default Resume;
