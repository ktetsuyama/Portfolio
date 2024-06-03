import React from "react";
import Project from "../Project";
const projects = [
	{
		projectName: "Vibe Check",
		projectURL: "https://ktetsuyama.github.io/vibe-check/",
		projectRepo: "https://github.com/ktetsuyama/Vibe_Check",
		projectDescription:
			"This application is an app that allows users to create playlists, rate their own playlists, and rate the playlists of other users",
		projectImage: "/vibecheck.png",
		projectAlt: "a picture of a playlist of songs",
	},
	{
		projectName: "Holocron",
		projectURL: "https://ktetsuyama.github.io/holocron/",
		projectRepo: "https://github.com/ktetsuyama/Holocron",
		projectDescription: "This application is a Star Wars themed search engine",
		projectImage: "/holocron.png",
		projectAlt: "a picture of a search engine with a Star Wars theme",
	},
	{
		projectName: "Janken",
		projectURL: "https://ktetsuyama.github.io/Janken/",
		projectRepo: "https://github.com/ktetsuyama/Janken",
		projectDescription: "This application is a rock paper scissors game",
		projectImage: "/janken_screenshot.png",
		projectAlt:
			"a picture of a javascript prompt box asking for input to play the game rock paper scissors",
	},
	{
		projectName: "Work Day Scheduler",
		projectURL: "https://ktetsuyama.github.io/Work-Day-Scheduler/",
		projectRepo: "https://github.com/ktetsuyama/Work-Day-Scheduler",
		projectDescription:
			"This application is an app that allows users to plan out their day, set tasks, and at a glance, see what part of day they are in and what task are coming up",
		projectImage: "/Work-Day-Scheduler_.png",
		projectAlt: "a day planner with time slots for each hour of the day",
	},
	{
		projectName: "Weather Dashboard",
		projectURL: "https://ktetsuyama.github.io/Weather-Dashboard/",
		projectRepo: "https://github.com/ktetsuyama/Weather-Dashboard",
		projectDescription:
			"This application is an app that allows users to check the weather in cities around the world. It shows a one day and a five day forecast",
		projectImage: "/Weather-Dashboard.png",
		projectAlt: "a weather forecast for Tokyo, Japan",
	},
	{
		projectName: "Semantic Refactor",
		projectURL: "https://ktetsuyama.github.io/semantic-refactor/",
		projectRepo: "https://github.com/ktetsuyama/semantic-refactor",
		projectDescription:
			"This application is a refactor of a webpage to use semantic HTML elements",
		projectImage: "/semanticrefactor.png",
		projectAlt: "screenshot of a webpage with blue elements",
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
