import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Clear errors as the user types
		setErrors({
			...errors,
			[name]: "",
		});
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		validateField(name, value);
	};

	const validateField = (name, value) => {
		let error = "";
		if (!value.trim()) {
			error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
		} else if (name === "email" && !validateEmail(value)) {
			error = "Invalid email address.";
		}
		setErrors({
			...errors,
			[name]: error,
		});
	};

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = formData;

		let formIsValid = true;
		const newErrors = {
			name: "",
			email: "",
			message: "",
		};

		if (!name.trim()) {
			newErrors.name = "Name is required.";
			formIsValid = false;
		}

		if (!email.trim()) {
			newErrors.email = "Email address is required.";
			formIsValid = false;
		} else if (!validateEmail(email)) {
			newErrors.email = "Invalid email address.";
			formIsValid = false;
		}

		if (!message.trim()) {
			newErrors.message = "Message is required.";
			formIsValid = false;
		}

		setErrors(newErrors);

		if (formIsValid) {
			alert("Form submitted successfully!");
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		}
	};

	return (
		<div className="container mt-5">
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.name && (
						<div className="error text-danger">{errors.name}</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.email && (
						<div className="error text-danger">{errors.email}</div>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						id="message"
						name="message"
						rows="3"
						value={formData.message}
						onChange={handleChange}
						onBlur={handleBlur}
					></textarea>
					{errors.message && (
						<div className="error text-danger">{errors.message}</div>
					)}
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<br />
			<br />
			<section>
				<ul>
					<li>
						<strong>Email:</strong>{" "}
						<a href="mailto:kroyal.eisenberg@gmail.com">
							{" "}
							kroyal.eisenberg@gmail.com
						</a>
					</li>
					<li>
						<strong>Github:</strong>{" "}
						<a href="https://github.com/ktetsuyama">
							https://github.com/ktetsuyama
						</a>
					</li>
					<li>
						<strong>LinkedIn:</strong>{" "}
						<a href="https://www.linkedin.com/in/keegan-royal-eisenberg/">
							https://www.linkedin.com/in/keegan-royal-eisenberg/
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Contact;
