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
					className="w-100"
					style={{ height: "auto" }}
				/>
			</a>
			<p className="text-center mt-3">{project.projectDescription}</p>
		</section>
	);
};

export default Project;
