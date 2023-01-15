import ios from './AddGrades.mp4';
export default [
	{ 
		id: 0,
		name: "React App",
		media: "",
		description: <ul className="project-description"><li>This game was built with React, Javascript, CSS, and HTML.</li> <li>I decided to use the skills I developed while building this website to try and build my own game.</li></ul>,
		position: 'activeSlide'
	},
	{ 
		id: 1,
		name: "iOS App: GradeTracker",
		media: <video src={ios} className="media-container" controls></video>,
		description:<ul className="project-description"><li>This is an iOS mobile and tablet application that I've been working on.</li><li>I'm in the process of designing a new UI and adding an overall GPA calculator. </li><li>It's being built in XCode with Swift, SwiftUI, and Core Data.</li></ul>,
		position: 'nextSlide'
	},
	{ 
		id: 2,
		name: "Android Mobile App: Game Rating System",
		media: "",
		description:<ul className="project-description"><li>With a group of four other students in a university SWE course, I helped build, test, and document an Android application where users could rate and review popular video games. </li><li> It was created using Java and HSQLDB in Android Studio.</li></ul>,
		position: 'lastSlide'
	}
]

