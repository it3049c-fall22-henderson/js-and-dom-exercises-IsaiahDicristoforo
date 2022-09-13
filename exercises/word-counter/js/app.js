// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.getElementById("text")
const statLabel = document.getElementById("stat") 

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

textArea.addEventListener("input", function(e){

    const totalWords = textArea.value.split(" ").length
    const totalCharacters = textArea.value.length

    statLabel.innerText = `You've written ${totalWords} words and ${totalCharacters} characters.`

})