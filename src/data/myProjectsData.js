import ios from '../assets/AddGrades.mp4';
import Wordsy from '../assets/wordsy/App.js';
export default [
	{ 
		id: 0,
		name: "React App: Wordsy",
		media: "",
		description: 
			<ul><li>Wordsy is a game project I recently began working on. It's similar to a popular word-guessing game ... except players guess four letter words, and only have four guesses. Currently, there are no player stats, API for words, or points system, but those are features I hope to incorporate in the near future.</li>
			<li>It's being built with React, Javascript, CSS, and HTML, and eventually a database to store score and player information. I'm learning more about React and web development as I go, and will continue to add features and refactor to better adhere to best practices.</li>
			<h3>See next slide to play the game >>></h3><br /> <p><i>***Please note that the version on the next slide is modified to fit the project slide, and some interface elements appear different than the original as a result. For the original game interface, see the README file at the github page, <a href="https://github.com/kathrn01/wordsy-app">here</a>.</i></p></ul>,
		position: 'activeSlide'
	},
	{
		id: 1,
		name: "Wordsy: Interactive",
		media: "",
		description: <Wordsy />,
		position: 'nextSlide'
	},
	{ 
		id: 2,
		name: "iOS App: GradeTracker",
		media: <video src={ios} controls></video>,
		description:<ul>
			<li>This is an iOS mobile and tablet application that I've been working on. It allows a user to enter courses, with a "goal" grade and syllabus items for each course. The app calculates and displays the target grade for future syllabus items based on the goal grade and already graded items, in order to meet the course goal.</li>
			<li>I'm in the process of re-designing the UI and adding an overall GPA calculator. </li>
			<li>It's being built in XCode with Swift, SwiftUI, and Core Data. See the repository with source code and more information <a href="https://github.com/kathrn01/GradeTracker">here</a>.</li></ul>,
		position: 'nextSlide'
	},
	{ 
		id: 3,
		name: "Android Mobile App: Game Rating System",
		media: "Unfortunately, no preview/demo available. The academic nature of the project prohibits me from sharing.",
		description:
			<ul><li>With a group of four other students in a university Software Engineering course, I helped build, test, and document an Android application where users could rate and review popular video games. </li>
			<li>It was created using Java and HSQLDB, in Android Studio.</li>
			<li>We implemented some Agile development practices such as continuous integration, working in sprints, creating user stories, and peer reviews/retrospectives.</li></ul>,
		position: 'nextSlide'
	},
	{
		id: 4,
		name: "React App: This website",
		media:"",
		description:<ul>
			<li>This website was built with React, Javascript, HTML, and CSS. GitHub pages is being used to host it. See the source code <a href="https://github.com/kathrn01/PortfolioWebsite">here</a>.</li>
			<li>I'm continually learning and will continue to add features and improvements. I'd appreciate any feedback!</li>
		</ul>,
		position: 'lastSlide'
		
	}
]

