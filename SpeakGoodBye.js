(function speak(w){
var byeSpeaker ={};
var speakword="Good Bye";
byeSpeaker.sayBye = function() {
	console.log(speakword + " " + byeSpeaker.name);
}
			window.byeSpeaker = byeSpeaker;
})(window);