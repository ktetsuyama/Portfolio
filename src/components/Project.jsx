import React from "react";

export const Project = ({ project }) => {
	return (
		<section className="card transparent-card">
			<header className="h4 mt-5 mb-3 text-center">
				{project.projectName}
			</header>

			<div className="text-center">
				<a
					href={project.projectURL}
					target="_blank"
					rel="noopener noreferrer"
					className="card-link"
				>
					<img
						src={project.projectImage}
						alt={project.projectAlt}
						style={{ width: "50%", height: "auto" }}
					/>
				</a>
			</div>

			<p className="text-center mt-2">{project.projectDescription}</p>
			<p className="text-center">
				This project uses the following languages and libraries:{" "}
				{project.projectConcepts.join(", ")}
			</p>
			<p className="text-center mt-2">
				<a href={project.projectRepo}>
					Link to the {project.projectName} GitHub repo
				</a>
			</p>
			<p className="text-center mb-5">
				(or click the screenshot to visit the deployed app!)
			</p>
		</section>
	);
};

export default Project;
