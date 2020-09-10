(function (window){
var helloSpeaker = {};
var speakWord="Hello ";
helloSpeaker.sayHello = function() {
	console.log(speakWord + " " + helloSpeaker.name);
}
            window.helloSpeaker = helloSpeaker;
})(window);