import useDeviceType from "../../components/useDeviceType";

export default function About() {
	const isMobile = useDeviceType();
	const styles = {
		container: {
			textAlign: "center", // Center align content on desktop
			maxWidth: "800px", // Limit maximum width for content
			margin: "0 auto", // Center align horizontally
			padding: "20px", // Add some padding for breathing room
		},
		containerMobile: {
			textAlign: "center", // Center align content on mobile
			padding: "20px", // Add some padding for breathing room
		},
		content: {
			display: "flex", // Use flexbox for layout
			alignItems: "center", // Center items vertically
			justifyContent: "center", // Center items horizontally on desktop
			marginTop: "20px", // Add some margin at the top
		},
		contentMobile: {
			display: "flex", // Use flexbox for layout
			flexDirection: "column", // Stack items vertically on mobile
			alignItems: "center", // Center items horizontally and vertically on mobile
			marginTop: "20px", // Add some margin at the top
		},
		image: {
			width: "20%", // Adjust image size as needed
			height: "auto", // Maintain aspect ratio
			marginRight: isMobile ? "0" : "20px", // Margin between image and paragraph on desktop
			marginBottom: isMobile ? "20px" : "0", // Margin below image on mobile
		},
		paragraph: {
			flex: 1, // Allow paragraph to grow and take remaining space
			textAlign: isMobile ? "center" : "left", // Center align text on mobile, left align on desktop
			maxWidth: isMobile ? "100%" : "80%", // Adjust max width based on device type
		},
	};

	return (
		<div style={isMobile ? styles.containerMobile : styles.container}>
			<h1>Keegan Royal-Eisenberg</h1>
			<div style={isMobile ? styles.contentMobile : styles.content}>
				<img
					src="/Ksmall.png"
					alt="Keegan Royal-Eisenberg"
					style={styles.image}
				/>
				<p style={styles.paragraph}>
					After dipping my toes into the legal world of Trademark registration
					and enforcement, I pivoted to a career in Full Stack Web Development.
					When not creating responsive and interesting code solutions for
					clients, I am enjoying my life living in Japan and spending time with
					my family.
				</p>
			</div>
		</div>
	);
}
