import React from "react";
import Project from "../Project";
const projects = [
	{
		projectName: "Semantic Refactor",
		projectURL: "https://ktetsuyama.github.io/semantic-refactor/",
		projectDescription:
			"This application is a refactor of a webpage to use semantic HTML elements",
		projectImage: "/semanticrefactor.png",
		projectAlt: "screenshot of a webpage with blue elements",
	},
	{
		projectName: "Janken",
		projectURL: "https://ktetsuyama.github.io/Janken/",
		projectDescription: "This application is a rock paper scissors game",
		projectImage: "/janken_screenshot.png",
		projectAlt:
			"a picture of a javascript prompt box asking for input to play the game rock paper scissors",
	},
	{
		projectName: "Holocron",
		projectURL: "https://ktetsuyama.github.io/holocron/",
		projectDescription: "This application is a Star Wars themed search engine",
		projectImage: "/holocron.png",
		projectAlt: "a picture of a search engine with a Star Wars theme",
	},
	{
		projectName: "Vibe Check",
		projectURL: "https://ktetsuyama.github.io/vibe-check/",
		projectDescription:
			"This application is an app that allows users to create playlists, rate their own playlists, and rate the playlists of other users",
		projectImage: "/vibecheck.png",
		projectAlt: "a picture of a playlist of songs",
	},
];

export default function Portfolio() {
	return (
		<div className="row">
			{projects.map((project, index) => (
				<div key={index} className="col-md-12 mb-4">
					<Project project={project} />
				</div>
			))}
		</div>
	);
}
