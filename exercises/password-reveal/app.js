// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.getElementById("password")
const revealButton = document.getElementById("togglePassword")


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.

revealButton.addEventListener('click', function(e){
	const inputType = passwordInput.getAttribute("type")

	if(inputType != null){
		if (inputType == "password"){
			passwordInput.setAttribute("type", "text")

		}else{
			passwordInput.setAttribute("type", "password")
		}
	}
})

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
