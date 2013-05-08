Reveal.addEventListener('slidechanged', function(event) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var notes = event.currentSlide.querySelector(".notes");
	if(notes) {
		console.info(notes.innerHTML.replace(/\n\s+/g,'\n'));
	}
});