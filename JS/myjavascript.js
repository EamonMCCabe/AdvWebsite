//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		

//When opening the website higlight button 1 and show Demo 1 area hide the rest.

let allButtons = document.getElementsByClassName("demo-button");
let allDemoAreas = document.getElementsByClassName("demo-box");
let demoAreaColors = ["red","green", "blue", "yellow"];

//When clicking on diffrent demo buttons activets new selection

function showDemo(index)  {
	//Set all the button in white colors
	for (let i=0; i<allButtons.length; i++) {
		allButtons[i].style.backgroundColor = "white";
		// hide all demo boxes
		allDemoAreas[i].style.display = "none";
	}
	
	//highlight the button with index and show its demo box
	allButtons[index].style.backgroundColor = "#FF9633";
	allDemoAreas[index].style.display = "block";
	allDemoAreas[index].style.backgroundColor = demoAreaColors[index];
}

//-----------------------------------------------------------------------------------------


//Defines an array for user name and password storage then sets a default user.

let allAccounts = [{user: "admin", pass: "1234"}];

//Sets user names and password then sotres it to an array

function createAccount() {
	//Get entered data
	let enteredUser = document.getElementById("signup_user").value;
	let enteredPass = document.getElementById("signup_password").value;
	
	//Loop through all users and check if this user exists or not?
	let existing = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user) {
			alert("SORRY! THIS USER ALREADY EXIST!");			
			existing = true;
			break;//quit
		} 
	}
	//Until the en, no existing user
	if (existing == false) {
		//Add a new user by appending it to the array
		allAccounts.push({user: enteredUser, pass: enteredPass});	
		alert("CONGRATS! YOUR ACCOUNT IS CREATED");		
	}	
	document.getElementById("signup_user").value='';
	document.getElementById("signup_password").value='';
}

//Checking entered user is in array and sets appropriate alert to user

function validateAccount() {
	//Get entered data
	let enteredUser = document.getElementById("login_username").value;
	let enteredPass = document.getElementById("login_password").value;
	
	//Verifying the user name and password
	let valid =0;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user) {			
			valid = 1;
			break;//quit
		} 
	}
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredPass == allAccounts[i].pass && valid == 1) {		
			valid = 2;
			break;//quit
		} 
	}
	
	//If the user name and password is correct output a result.
	if (valid == 0) {
		alert("THERE ARE NO USERS BY THAT NAME");	
		document.getElementById("login_password").value='';
		document.getElementById("login_username").value='';
	}
	if (valid == 1) {
		alert("SORRY! INCORRECT PASSWORD");	
		document.getElementById("login_password").value='';
	}

	if (valid == 2) {
		alert("YOU ARE LOGGED IN");	
		document.getElementById("login_password").value='';
		document.getElementById("login_username").value='';
	}	
}	


//--------------------------------------------------------------------//

//Top 5 movies
let topMovies = [{id: 0, title: "The The Shawshank Redemption", year: 1994, image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
				 {id: 1, title: "The Godfather ", year: 1992, image_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "https://m.media-amazon.com/images/M/MV5BMTk0MDEzMjI3NV5BMl5BanBnXkFtZTcwODg4NDc3Mw@@._V1_.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
];

//------
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	//Change the slide_index
	if (slideIndex < topMovies.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
}

function previousSlide() {
	//Change the slide_index
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = topMovies.length - 1;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
}

//------
//Slideshow: Automatic
let autoSlideIndex = 0;
autoSlideShow();

function autoSlideShow() {
//Change the slide_index
	if (autoSlideIndex < topMovies.length - 1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
	document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
	//
	setTimeout(autoSlideShow, 3000);//Auto change slide every 3 seconds
}

//WEB PAGE CUSTOMIZATION
//Change text size
function customizeText() {
	let selectedTextSize = document.getElementById("text-size").value;
	document.getElementById("abstract").style.fontSize = selectedTextSize;
	document.getElementById("detailed").style.fontSize = selectedTextSize;
}

//Change background color		
function changeColor() {
	let selectedBGColor = document.getElementById("colorOption").value;
  document.getElementById("page_content").style.backgroundColor = selectedBGColor;
}

//-------------------------------------------------------

//Read More/less function
function expandText() {
	//Find the expandBtn element on HTML file
	let expandBtn = document.getElementById("expandBtn");
	
	//Check whether to expand or collapse text based on the text display on the button
	if (expandBtn.value.toLowerCase() == "more") {
		document.getElementById("detailed").style.display = "block";
		expandBtn.value = "LESS";
		expandBtn.textContent = "LESS";
	} else {
		document.getElementById("detailed").style.display = "none";
		expandBtn.value = "MORE";
		expandBtn.textContent = "MORE";
	}	
}	



//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{name: "Ian", comment: "Recommended, good one"},
				   {name: "Aman", comment: "I don't like the color"},
				   {name: "John", comment: "Love it"},
				  ];	
				  
//----------
//Load all existing comments and display them on HTML
function loadComments() {
	//Loop through all comments in the array "allComments"
	for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment = allComments[i].comment;		
		//
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)			
		let parrent_node = document.getElementById("comment-list");//Get the id of parent node "comment-list"		
		parrent_node.appendChild(node);//Append the above child HTML node to the parent node
	}
}


//---------------------------------------------------------------

//Add new products 


 loadComments();

//----------
//Add a new comment
function addComment() {	
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;	
	
	//Add this new comment to the array
	allComments.push({name: enteredCommentName, comment: enteredCommentText});	
	alert("Thank you for your comment!");
	
	//Display this new comment on HTML page	
	//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
	let node = document.createElement("P");
	//Create a new TextNode
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	//Append the content (created TextNode) to the HTML Node (child)
	node.appendChild(textnode);	
	//Get the id of parent node "comment-list"
	let parrent_node = document.getElementById("comment-list");
	//Append the above child HTML node to the parent node
	parrent_node.appendChild(node);
	
	//Clear comment box
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
}


//-----------------------------------------

function loadJSONFile() {
	 //1: Use CORS API website as proxy to retrieve XML file
	 let proxy = 'https://cors-anywhere.herokuapp.com/';
	 //Declare the URL indicates the location of the XML file
	 let url = "http://danieldangs.com/itwd6-408/json/contact-eit.json";
	 //2: Create XMLHttpRequest object
	 let ourRequest = new XMLHttpRequest();
	 //Set ourRequest to URL to get data (not send data)
	 ourRequest.open('GET', proxy + url, true);
	 //Send XMLHttpRequest object or ourRequest to URL
	 ourRequest.send();

	 //3: Receive response (reply) from URL and Process that data
	 ourRequest.onload = function() {
		 //Check if the response status is OK (o error), render data on web page
		 if (ourRequest.status >= 200 && ourRequest.status < 400) {
		 //
		 let receivedData = JSON.parse(ourRequest.responseText);
		 //Build an html string which will be rendered on browser as an html-formated element
		 let htmlString = "";

		 //Retrieve question and relevant answer
		 for (var i = 0; i < receivedData.length; i++) {
		 //Add a <div> open tag
		 htmlString += `<div style="background-color: yellow; margin: 10px; padding: 5px;">`;
		 //Get name
		 htmlString += "<h4>" + receivedData[i].name + "</h4>";
		 //Get email
		 htmlString += "<p4>" + receivedData[i].email + "</p4>";
		 //Add the closing tag of div
		 htmlString += "</div>";
		 }

		 //Render the whole htmlString to web page
		 let faqContainer = document.getElementById("json-data");
		 faqContainer.innerHTML = htmlString;

		 //Add style to the html elements: add the <div> tag
		 } else {
		 //Exception handling
		 console.log("Connected to the server successfully but it returned an error!");
		 }
	 };
}

function loadJSONQA() {
	 //1: Use CORS API website as proxy to retrieve XML file
	 let proxy = 'https://cors-anywhere.herokuapp.com/';
	 //Declare the URL indicates the location of the XML file
	 let url = "http://danieldangs.com/itwd6-408/json/faqs.json";
	 //2: Create XMLHttpRequest object
	 let ourRequest = new XMLHttpRequest();
	 //Set ourRequest to URL to get data (not send data)
	 ourRequest.open('GET', proxy + url, true);
	 //Send XMLHttpRequest object or ourRequest to URL
	 ourRequest.send();

	 //3: Receive response (reply) from URL and Process that data
	 ourRequest.onload = function() {
		 //Check if the response status is OK (o error), render data on web page
		 if (ourRequest.status >= 200 && ourRequest.status < 400) {
		 //
		 let receivedData = JSON.parse(ourRequest.responseText);
		 //Build an html string which will be rendered on browser as an html-formated element
		 let htmlString = "";

		 //Retrieve question and relevant answer
		 for (var i = 0; i < receivedData.length; i++) {
		 //Add a <div> open tag
		 htmlString += `<div style="background-color: yellow; margin: 10px; padding: 5px;">`;
		 //Get name
		 htmlString += "<h4>" + receivedData[i].question + "</h4>";
		 //Get email
		 htmlString += "<p4>" + receivedData[i].answer + "</p4>";
		 //Add the closing tag of div
		 htmlString += "</div>";
		 }

		 //Render the whole htmlString to web page
		 let faqContainer = document.getElementById("json-data2");
		 faqContainer.innerHTML = htmlString;

		 //Add style to the html elements: add the <div> tag
		 } else {
		 //Exception handling
		 console.log("Connected to the server successfully but it returned an error!");
		 }
	 };
}

function loadJSONFRUIT() {
	 //1: Use CORS API website as proxy to retrieve XML file
	 let proxy = 'https://cors-anywhere.herokuapp.com/';
	 //Declare the URL indicates the location of the XML file
	 let url = "http://danieldangs.com/itwd6-408/json/fruit.json";
	 //2: Create XMLHttpRequest object
	 let ourRequest = new XMLHttpRequest();
	 //Set ourRequest to URL to get data (not send data)
	 ourRequest.open('GET', proxy + url, true);
	 //Send XMLHttpRequest object or ourRequest to URL
	 ourRequest.send();

	 //3: Receive response (reply) from URL and Process that data
	 ourRequest.onload = function() {
		 //Check if the response status is OK (o error), render data on web page
		 if (ourRequest.status >= 200 && ourRequest.status < 400) {
		 //
		 let receivedData = JSON.parse(ourRequest.responseText);
		 //Build an html string which will be rendered on browser as an html-formated element
		 let htmlString = "";

		 //Retrieve question and relevant answer
		 for (var i = 0; i < receivedData.length; i++) {
		 //Add a <div> open tag
		 htmlString += `<div style="background-color: yellow; margin: 10px; padding: 5px;">`;
		 //Get name
		 htmlString += "<h4>" + receivedData[i].fruit + "</h4>";
		 //Get email
		 htmlString += "<img src='" + receivedData[i].img_url + "' width='400px'";
		 //Add the closing tag of div
		 htmlString += "</div>";
		 }

		 //Render the whole htmlString to web page
		 let faqContainer = document.getElementById("json-data3");
		 faqContainer.innerHTML = htmlString;

		 //Add style to the html elements: add the <div> tag
		 } else {
		 //Exception handling
		 console.log("Connected to the server successfully but it returned an error!");
		 }
	 };
}