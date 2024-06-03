import React from "react";

export const Project = ({ project }) => {
	return (
		<section className="card">
			<header className="text-center">{project.projectName}</header>
			<a
				href={project.projectURL}
				target="_blank"
				rel="noopener noreferrer"
				className="card-link d-block"
			>
				<img
					src={project.projectImage}
					alt={project.projectAlt}
					style={{ width: "50%", height: "auto" }}
				/>
			</a>
			<p className="text-center mt-3">{project.projectDescription}</p>
			<a href={project.projectRepo} className="text-center mt-3">
				Link to the {project.projectName} GitHub repo
			</a>
			<p className="text-center mt-3">
				(or click the screenshot to visit the deployed app!)
			</p>
		</section>
	);
};

export default Project;
