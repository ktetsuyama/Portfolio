import React from "react";
import Project from "../Project";
const projects = [
	{
		projectName: "RecallRocket",
		projectURL: "https://recall-rocket.onrender.com/",
		projectRepo: "https://github.com/ktetsuyama/recall-rocket",
		projectDescription:
			"This application is an app that allows users to study the concepts of the MERN stack, and create their own flashcards to further their understanding of the concepts.",
		projectImage: "/recallrocket_screenshot.png",
		projectAlt: "a website with flashcards for studying",
		projectConcepts: ["React", "MongoDB", "Express", "& Node.js."],
	},
	{
		projectName: "Vibe Check",
		projectURL: "https://ktetsuyama.github.io/vibe-check/",
		projectRepo: "https://github.com/ktetsuyama/Vibe_Check",
		projectDescription:
			"This application is an app that allows users to create playlists, rate their own playlists, and rate the playlists of other users.",
		projectImage: "/vibecheck.png",
		projectAlt: "a picture of a playlist of songs",
		projectConcepts: ["Handlebars", "SQL", "Express", "& Node.js."],
	},
	{
		projectName: "Holocron",
		projectURL: "https://ktetsuyama.github.io/holocron/",
		projectRepo: "https://github.com/ktetsuyama/Holocron",
		projectDescription:
			"This application is a Star Wars themed search engine",
		projectImage: "/holocron.png",
		projectAlt: "a picture of a search engine with a Star Wars theme",
		projectConcepts: ["HTML", "Javascript", "& CSS."],
	},
	{
		projectName: "Janken",
		projectURL: "https://ktetsuyama.github.io/Janken/",
		projectRepo: "https://github.com/ktetsuyama/Janken",
		projectDescription: "This application is a rock paper scissors game.",
		projectImage: "/janken_screenshot.png",
		projectAlt:
			"a picture of a javascript prompt box asking for input to play the game rock paper scissors",
		projectConcepts: ["HTML", "Javascript", "& CSS."],
	},
	{
		projectName: "Work Day Scheduler",
		projectURL: "https://ktetsuyama.github.io/Work-Day-Scheduler/",
		projectRepo: "https://github.com/ktetsuyama/Work-Day-Scheduler",
		projectDescription:
			"This application is an app that allows users to plan out their day, set tasks, and at a glance, see what part of day they are in and what task are coming up.",
		projectImage: "/Work-Day-Scheduler_.png",
		projectAlt: "a day planner with time slots for each hour of the day",
		projectConcepts: ["HTML", "Javascript", "& CSS."],
	},
	{
		projectName: "Weather Dashboard",
		projectURL: "https://ktetsuyama.github.io/Weather-Dashboard/",
		projectRepo: "https://github.com/ktetsuyama/Weather-Dashboard",
		projectDescription:
			"This application is an app that allows users to check the weather in cities around the world. It shows a one day and a five day forecast.",
		projectImage: "/Weather-Dashboard.png",
		projectAlt: "a weather forecast for Tokyo, Japan",
		projectConcepts: ["HTML", "Javascript", "a third party API", "& CSS."],
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
