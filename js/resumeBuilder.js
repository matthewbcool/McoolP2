
//Greetings instructor! Welcome to my attempt at project 2! 

var bio = {
    "name": "Matt Cool",
    "role": "Mandarin Speaking Flight Attendant",
    "contacts": {
        "mobile": "555-869-5657",
        "email": "matthewbcool@gmail.com",
        "github": "matthewbcool",
        "twitter": "@spirtualwuran",
        "location": "Chicago"
    },
    "welcomeMsg": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "skills": [
        " Whistling",
        " Running away bravely",
        " Chinese",
        " Smash Brothers",
    ],
    "bioPic": "images/me.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "American Airlines",
			"title": "Chinese Speaking Flight Attendant",
			"dates": "June 2013 - Present",
			"location": "Chicago, IL",
			"description": "Ensure the safety and comfort of passengers and provide interpretation for mandarin speaking passengers."
		},
		{
			"employer": "Da Lian Wan Da",
			"title": "Language Consultant",
			"dates": "October 2011 - January 2013",
			"location": "Beijing, China",
			"description": "Edit and write documents for social media, edit scripts, interpret for clients in the U.S and coach actors with English lines."		
		},
		{
			"employer": "Chinese Academy of Sciences",
			"title": "Instructor",
			"dates": "September 2010 - September 2012",
			"location": "Beijing, China",
			"description": "Taught classes to graduate students in writing, U.S culture, and spoken English."
		},
		{
			"employer": "Cornerstone Education",
			"title": "Computer Instructor",
			"dates": "August 2009 - August 2010",
			"location": "Zhengzhou, China",
			"description": "Taught classes in basic computer use.", 
		}
	]	
}

var education = {
	"schools": [
		{
		"name": "San Francisco State University",
		"city": "San Francisco, CA",
		"degree": "BA",
		"major": "International Relations",
		"date": "2008",
		"location": "San Francisco, CA",
		},
		{
		"name": "Udacity",
		"city": "Online",
		"degree": "Nanodegree",
		"major": "Front-End Devoloper",
		"date": "2015",
		"location": "Pacific Grove, CA",
		}
	]
}

var project = {
	"projects": [
	    {
	    	"title": "Non-Rev Travel Planner",
	    	"dates": "TBA",
	    	"description": "NRTP is an app for Android and IOS that allows AA flight attendants to easily book their nonRev travel.",
	    	"image": "images/nrpt.jpg",
	    },
	    {
	    	"title": "AutoBook24",
	    	"dates": "TBA",
	    	"description": "AutoBook24 is a chrome extension that automatically logs into NRTP and confirms your listed flight 24 hours before scheduled departure.",
	    	"image": "images/autobook.jpg",
	    },
	]
}


var formattedName = HTMLheaderName.replace(
	"%data%", bio.name);
var formattedrole = HTMLheaderRole.replace(
	"%data%", bio.role);
var formattedwelcomeMsg = HTMLWelcomeMsg.replace(
	"%data%", bio.welcomeMsg)
var formattedskills = HTMLskills.replace(
	"%data%", bio.skills);
var formattedmobile = HTMLmobile.replace(
	"%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace(
	"%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace(
	"%data%", bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace(
	"%data%", bio.contacts.github);
var formattedlocation = HTMLlocation.replace(
	"%data%", bio.contacts.location);
var formattedbioPic = HTMLbioPic.replace(
	"%data%", bio.bioPic);

function displayProjects() {
	for (proj in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace(
		"%data%", project.projects[proj].title);
		$(".project-entry:last").append(formattedprojectTitle);
		var formattedprojectDates = HTMLprojectDates.replace(
			"%data%", project.projects[proj].dates);
		$(".project-entry:last").append(formattedprojectDates);
		var formattedprojectDescription = HTMLprojectDescription.replace(
			"%data%", project.projects[proj].description);
		$(".project-entry:last").append(formattedprojectDescription);
		var formattedprojectImage = HTMLprojectImage.replace(
			"%data%", project.projects[proj].image);
		$(".project-entry:last").append(formattedprojectImage);
	}	
}

function displayEdu() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace(
			"%data%", education.schools[school].name)
		var formattedschoolDegree = HTMLschoolDegree.replace(
			"%data%", education.schools[school].degree)
		var formattedEducationDegree = 
		formattedschoolName + formattedschoolDegree;
		$(".education-entry:last").append(
			formattedEducationDegree)
		var formattedschoolLocation = HTMLschoolLocation.replace(
			"%data%", education.schools[school].city)
		$(".education-entry:last").append(
			formattedschoolLocation);
		var formattedschoolMajor = HTMLschoolMajor.replace(
			"%data%", education.schools[school].major)
		$(".education-entry:last").append(
			formattedschoolMajor);
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(
		"%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(
		"%data%", work.jobs[job].title);
		var formattedEmployerTitle = 
		formattedEmployer + formattedTitle;
		$(".work-entry:last").append(
		formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace(
		"%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace(
		"%data%", work.jobs[job].location)
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace(
		"%data%", work.jobs[job].description)
		$(".work-entry:last").append(
			formattedDescription);
	}	
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase(); +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];	
}


$("#header").prepend(formattedrole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedskills);
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
//$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
//$("#bottomContacts").append(formattedtwitter);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedlocation);
displayWork();
displayEdu();
displayProjects();
$("#mapDiv").append(googleMap);







