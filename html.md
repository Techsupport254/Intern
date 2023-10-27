### HTML
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
			integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>
		<link rel="stylesheet" href="styles.css" />
		<title>Victor Quaint</title>
	</head>
	<body>
		<div class="container">
			<!-- Sidebar -->
			<aside class="sidebar">
				<!-- Slack profile image -->
				<img
					src="https://ca.slack-edge.com/T05FFAA91JP-U05RBDZKTT4-0e92189f9407-512"
					alt="Victor Quaint"
					data-testid="slackDisplayImage"
				/>
				<!-- User details -->
				<div class="userDetails">
					<h1 data-testid="slackUserName">Victor Kirui</h1>
					<p data-testid="myTrack">MERN Stack Developer</p>
					<!-- GitHub link -->
					<a
						href="https://github.com/Techsupport254/Intern"
						data-testid="githubURL"
					>
						<i class="fab fa-github fa-inverse"></i> Github
					</a>
				</div>
				<!-- Theme switch -->
				<div class="theme-switch-wrapper">
					<label class="switch">
						<input
							type="checkbox"
							onchange="toggleTheme(this)"
							id="themeSwitch"
						/>
						<span class="slider round"></span>
					</label>
					<p>Theme</p>
				</div>
				<!-- Visit count -->
				<div class="VisitCount">
					<p data-testid="visitCount">
						<i class="fas fa-user"></i> <span id="visitCount">0</span>
					</p>
				</div>
				<button class="ClearStorage" id="ClearStorage">
					<i class="fas fa-trash"></i> Clear Storage
				</button>
				<!-- clear Color preferences -->
				<div class="ResetPreference">
					<button
						class="ResetPreference"
						id="ResetPreference"
						onclick="setColorPreference('light')"
					>
						<i class="fas fa-undo"></i>
						Reset preference
					</button>
				</div>
				<section class="bottom">
					<p data-testid="currentDayOfTheWeek">
						<span id="dayOfWeek"></span>
					</p>
					<p data-testid="time">
						<span id="time"></span>
					</p>
				</section>
			</aside>
			<!-- Main Content -->
			<main class="content">
				<section class="contentContainer" id="contentContainer">
					<!-- User details section -->
					<aside class="aside">
						<!-- User profile image -->
						<img
							src="https://ca.slack-edge.com/T05FFAA91JP-U05RBDZKTT4-0e92189f9407-512"
							alt="Victor Kirui"
						/>
						<!-- User details -->
						<div class="userDetails">
							<h1>Victor Kirui</h1>
							<p>MERN Stack Developer</p>
							<!-- Portfolio link -->
							<a href="https://quaint.kitchen360.co.ke/">
								<i class="fas fa-globe"></i> Portfolio
							</a>
						</div>
					</aside>
					<!-- Description and links section -->
					<section class="details">
						<p>
							I'm Victor Kirui, a Full Stack Developer with expertise in MERN
							stack and a Machine Learning Engineer. I combine my passion for
							building robust web applications with my knowledge of machine
							learning algorithms to create innovative solutions. Explore my
							work and projects to see how I bring creativity and technical
							expertise together.
						</p>
						<!-- Social media links -->
						<div class="links" id="links">
							<a
								href="https://www.instagram.com/kirui.dev/"
								data-testid="instagramURL"
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a href="https://twitter.com/Woo_quaint" data-testid="twitterURL">
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/victor-kirui-193aa4222/"
								data-testid="linkedinURL"
							>
								<i class="fab fa-linkedin"></i>
							</a>
							<a
								href="https://app.slack.com/client/T05FFAA91JP/C05QU2Y9SSY/rimeto_profile/U05RBDZKTT4"
								data-testid="slackURL"
							>
								<i class="fab fa-slack"></i>
							</a>
						</div>
						<!-- Add User button -->
						<div class="AddUser" id="AddUser">
							<button onclick="openModal()">Add User</button>
						</div>
						<!-- User modal -->
						<div class="modal" id="modal" data-testid="modal">
							<div class="modal-content">
								<span class="close" onclick="closeModal()">&times;</span>
								<form action="" id="form">
									<div class="FormContainer">
										<div class="FormLeft">
											<div class="InputField">
												<label for="name">Name</label>
												<input
													type="text"
													name="name"
													id="name"
													placeholder="Enter your name"
												/>
											</div>
											<div class="InputField">
												<label for="email">Reg No</label>
												<input
													type="text"
													name="regNo"
													id="email"
													placeholder="Enter your registration number"
												/>
											</div>
											<div class="dropzone" id="dropzone">
												<span>
													<i class="fas fa-cloud-upload-alt"></i>
													Choose Image
												</span>
											</div>
										</div>
										<!-- Image preview -->
										<div class="FormRight">
											<div class="imagePreview" id="imagePreview">
												<img
													src="https://ca.slack-edge.com/T05FFAA91JP-U05RBDZKTT4-0e92189f9407-512"
													alt="Image Preview"
													id="previewImage"
												/>
											</div>
										</div>
									</div>
									<button
										type="button"
										id="submit"
										onclick="handleSubmit(event)"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
						<section class="users">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Reg No</th>
										<th>Image</th>
									</tr>
								</thead>
								<tbody id="tbody"></tbody>
							</table>
						</section>
					</section>
					<!-- get users and display table -->
				</section>
			</main>
		</div>
		<!-- JavaScript script -->
		<script src="/script.js">
			// Function to update the current day of the week and time
			const updateDateTime = () => {
				const now = new Date();

				const daysOfWeek = [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				];
				const dayOfWeek = daysOfWeek[now.getDay()];
				document.getElementById("dayOfWeek").textContent = dayOfWeek;

				const time = now.toLocaleTimeString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: true,
				});
				document.getElementById("time").textContent = time;
			};

			// Update the time immediately on page load
			updateDateTime();

			// Update the time every second (1000 milliseconds)
			setInterval(updateDateTime, 1000);

			// Function to toggle the theme
			const toggleTheme = (e) => {
				if (e.target.checked) {
					setTheme("dark");
				} else {
					setTheme("light");
				}
			};

			// Function to change the background color based on the selected theme
			const changeBackgroundColor = () => {
				const theme = localStorage.getItem("theme");
				document.documentElement.classList.toggle("dark", theme === "dark");

				const contentContainer = document.getElementById("contentContainer");
				contentContainer.classList.toggle("dark", theme === "dark");

				const links = document
					.getElementById("links")
					.getElementsByTagName("a");
				for (let i = 0; i < links.length; i++) {
					links[i].classList.toggle("dark", theme === "dark");
				}
			};

			// Function to set the theme in local storage
			const setTheme = (themeName) => {
				localStorage.setItem("theme", themeName);
				changeBackgroundColor();
			};

			// Retrieve the current theme from local storage, default to "light" if not set
			const currentTheme = localStorage.getItem("theme") || "light";

			// Set the initial theme and update the toggle switch accordingly
			setTheme(currentTheme);
			document.getElementById("themeSwitch").checked = currentTheme === "dark";

			// Function to initialize visit count and theme on page load
			const initialize = () => {
				if (localStorage) {
					const count = localStorage.getItem("visitCount") || 0;
					const newCount = parseInt(count) + 1;
					localStorage.setItem("visitCount", newCount);
					updateDOM();
				}
			};

			// Function to update visit count and theme on the page
			const updateDOM = () => {
				const count = localStorage.getItem("visitCount") || 0;
				const theme = localStorage.getItem("theme");
				document.getElementById(
					"visitCount"
				).textContent = `Visit count ${count}`;
				document.getElementById("themeSwitch").checked = theme === "dark";
			};

			// Function to set the theme when a color preference is selected
			const setColorPreference = (color) => {
				setTheme(color);
			};

			// Attach the initialize function to the window's onload event
			window.onload = initialize;

			// Function to open the modal
			function openModal() {
				const modal = document.getElementById("modal");
				modal.style.display = "block";
			}

			// Function to close the modal
			function closeModal() {
				const modal = document.getElementById("modal");
				modal.style.display = "none";
			}

			// Open file dialog when the dropzone area is clicked
			const dropzone = document.getElementById("dropzone");
			dropzone.addEventListener("click", () => {
				const fileInput = document.createElement("input");
				fileInput.type = "file";
				fileInput.id = "fileInput";
				fileInput.accept = "image/*";
				fileInput.addEventListener("change", (event) => {
					handleFileUpload(event.target.files);
				});
				fileInput.click();
			});

			// Function to preview the uploaded image file
			function previewImage(file) {
				const preview = document.getElementById("previewImage");
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onloadend = () => {
					preview.src = reader.result;
				};
			}

			// Function to handle the file upload
			function handleFileUpload(files) {
				const file = files[0];
				if (file) {
					previewImage(file);
				}
			}

			// Function to handle the form submission
			function handleSubmit(event) {
				event.preventDefault();
				const name = document.getElementById("name").value;
				const regNo = document.getElementById("email").value;
				const image = document.getElementById("previewImage").src;

				// Create an object with the form data
				const user = {
					name: name,
					regNo: regNo,
					image: image,
				};

				// Save the user data to local storage
				const users = JSON.parse(localStorage.getItem("users")) || [];
				users.push(user);
				localStorage.setItem("users", JSON.stringify(users));
				console.log(users);

				// Close the modal
				closeModal();
			}

			// Add an event listener to handle form submission
			const submitButton = document.getElementById("submit");
			submitButton.addEventListener("click", handleSubmit);

			// Add an event listener to close the modal when the close button is clicked
			const closeButton = document.querySelector(".close");
			closeButton.addEventListener("click", closeModal);

			// Function to display the users in a table
			const displayUsers = () => {
				const users = JSON.parse(localStorage.getItem("users")) || [];
				const tbody = document.getElementById("tbody");
				tbody.innerHTML = "";
				users.forEach((user) => {
					const tr = document.createElement("tr");
					const td1 = document.createElement("td");
					const td2 = document.createElement("td");
					const td3 = document.createElement("td");
					const img = document.createElement("img");
					img.src = user.image;
					img.alt = user.name;
					img.width = 100;
					img.height = 100;
					td1.textContent = user.name;
					td2.textContent = user.regNo;
					td3.appendChild(img);
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tbody.appendChild(tr);
				});
			};

			// Add an event listener to the window to display the users when the page loads
			window.addEventListener("load", displayUsers);
		</script>
	</body>
</html>
```