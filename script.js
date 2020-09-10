// (function (name) {
// 	console.log("hello " + name);

// })("me");


(function (){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
console.log(names);

for (var i=0; i<names.length; i++){
	var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
  	byeSpeaker.name = names[i];
  	byeSpeaker.sayBye();
  } else {
    helloSpeaker.name = names[i];
  	helloSpeaker.sayHello();
  }
}

})();
