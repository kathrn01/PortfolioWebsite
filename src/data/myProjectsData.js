import ios from '../assets/AddGrades.mp4';
export default [
	{ 
		id: 0,
		name: "iOS App: GradeTracker",
		media: <video src={ios} controls></video>,
		description:<ul>
			<li>This is an iOS mobile and tablet application that I've been working on. It allows a user to enter courses, with a "goal" grade and syllabus items for each course. The app calculates and displays the target grade for future syllabus items based on the goal grade and already graded items, in order to meet the course goal.</li>
			<li>I'm in the process of designing a new UI and adding an overall GPA calculator. </li>
			<li>It's being built in XCode with Swift, SwiftUI, and Core Data. See the repository with source code and more information <a href="https://github.com/kathrn01/GradeTracker">here</a>.</li></ul>,
		position: 'activeSlide'
	},
	{
		id: 1,
		name: "React App: This website",
		media:"",
		description:<ul>
			<li>This website was built with React, Javascript, HTML, and CSS. GitHub pages is being used to host it. See the source code <a href="https://github.com/kathrn01/PortfolioWebsite">here</a>.</li>
			<li>I'm continually learning and will continue to add features and improvements. I'd appreciate any feedback!</li>
		</ul>,
		position: 'nextSlide'
		
	},
	{ 
		id: 2,
		name: "Android Mobile App: Game Rating System",
		media: "Unfortunately, no preview/demo available. The academic nature of the project prohibits me from sharing.",
		description:
			<ul><li>With a group of four other students in a university Software Engineering course, I helped build, test, and document an Android application where users could rate and review popular video games. </li>
			<li>It was created using Java and HSQLDB, in Android Studio.</li>
			<li>We implemented some Agile development practices such as continuous integration, working in sprints, creating user stories, and peer reviews/retrospectives.</li></ul>,
		position: 'nextSlide'
	},
	{ 
		id: 3,
		name: "React App: Wordsy",
		media: "Coming Soon!",
		description: 
			<ul><li>Wordsy is game project I recently began working on. It's similar to a popular word-guessing game ... except players guess 4 letter words, and there is a points system. Points are taken off for guesses that are not real words, and awarded for correct guesses.</li>
			<li>It's currently being built with React, Javascript, CSS, and HTML, and eventually a database to store score and player information. I hope to have an interactive version available here soon.</li>
			<li>I decided to use the skills I developed while building this website to try and build my own game. I'm enjoying learning more about React and JS as I go.</li></ul>,
		position: 'lastSlide'
	}
]

