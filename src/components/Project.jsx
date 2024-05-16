export const Project = ({ project }) => {
	return (
		<section class="card">
			<a href={project.projectURL} target="_blank" class="card-link">
				<header>{project.projectName}</header>
				<img
					src="/SR screenshot.jpg"
					alt="screenshot of a webpage with blue elements"
				/>
			</a>
		</section>
	);
};
