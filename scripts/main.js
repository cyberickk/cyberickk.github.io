let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile.jpg') {
      myImage.setAttribute('src', 'images/profile2.jpg');
    } else {
      myImage.setAttribute('src', 'images/profile.jpg');
    }
}

/* username
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your id.');
	if(!myName || myName === null) {
		setUsername();
	} else {

		localStorage.setItem('name',myName);
		myHeading.textContent = 'cool ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'cool ' + storedName;

}

myButton.onclick = function() {
	setUserName();
}

*/

