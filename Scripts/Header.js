/*
    Auteur:     Nick Ketelaars          
    Aanmaakdatum:   06-03-23        
    
    Header Script
*/

const name = "Nick Ketelaars";
const span = document.querySelector("h1 span");

let i = 0;
const typingInterval = setInterval(() => {
	span.textContent += name[i];
	i++;

	if (i === name.length) {
		clearInterval(typingInterval);
	}
}, 150);