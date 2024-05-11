export default function Home() {
	return (
		<div>
			<h1>Applications</h1>
			<section class="examples-main">
				<section class="card">
					<a
						href="https://ktetsuyama.github.io/semantic-refactor/"
						target="_blank"
						class="card-link"
					>
						<header>Semantic Refactor</header>
						<img
							src="/SR screenshot.jpg"
							alt="screenshot of a webpage with blue elements"
						/>
					</a>
				</section>
			</section>
			<section class="examples">
				<section class="card">
					<a
						href="https://ktetsuyama.github.io/Janken/"
						target="_blank"
						class="card-link"
					>
						<header>Janken</header>
						<img
							src="/janken_screenshot.png"
							alt="a picture of a javascript prompt box asking for input to play the game rock paper scissors"
						/>
					</a>
				</section>
				<section class="card">
					<header>Coming Soon!</header>
					<img
						src="./assets/images/placehold2.jpg"
						alt="isometric design with a rainbow of colors on a black background"
					/>
				</section>
				<section class="card">
					<header>Coming Soon!</header>
					<img
						src="./assets/images/placehold3.jpg"
						alt="futuristic scene of a flying car flying between buildings"
					/>
				</section>
			</section>
		</div>
	);
}
