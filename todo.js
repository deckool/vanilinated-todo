function dry(class_,text,done) {
	var newElem= document.createElement("input");
	newElem.type = "checkbox";
	newElem.id = "theDo"+class_;
	newElem.className += class_; 
	newElem.onclick = validate;
	var node=document.createElement("li");
	var textnode=document.createTextNode(text);
	node.id = 'todo';
	node.className += class_;
	node.appendChild(newElem);
	node.appendChild(textnode);
	document.getElementById('taskList').appendChild(node);
	var div = document.createElement('span');
	div.id = 'image';
	div.className += class_; 
	div.onclick = removeText;
	node.appendChild(div);
		if (done === ""){
		document.getElementById("theDo"+class_).checked = false;
		document.getElementById("theDo"+class_).parentNode.setAttribute('rel','');
		return done === "";
		}
		document.getElementById("theDo"+class_).checked = true;
		document.getElementById("theDo"+class_).parentNode.setAttribute('rel','me');
		return done !== "";
};

function validate(){
	var x = this.className;
	var frm = document.getElementById('theDo'+x);
	var parent_ = document.getElementById('theDo'+x).parentNode;
	console.log(x);
	var checked = frm.checked;
	if (!checked){		
		var scores = localStorage.getItem("highscores");
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			if (x == scores[i].time){
				scores[i].done = "";
				localStorage.setItem("highscores", JSON.stringify(scores));
		}else{
		}}
		parent_.setAttribute('rel', '');
		return !checked;
	} else {
		var scores = localStorage.getItem("highscores");
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			if (x == scores[i].time){
				scores[i].done = "pr";
				localStorage.setItem("highscores", JSON.stringify(scores));
		}else{
		}}
		parent_.setAttribute('rel', 'me');
		return checked;
		}
}

function removeElementsByClass(className){
	elements = document.getElementsByClassName(className);
	while(elements.length > 0){
		elements[0].parentNode.removeChild(elements[0]);
    }
}

function loadText(){
		var scores = localStorage.getItem("highscores");
		console.log(scores);
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			dry(scores[i].time,scores[i].toBeDone,scores[i].done);
			console.log(scores);
			console.log(scores[i].toBeDone + " finished in " + scores[i].time);
	}
}
function addText(){
	var input = document.getElementById('input').value;
	console.log(localStorage);
    if (input !== "") {
	var scores = localStorage.getItem("highscores");
	console.log(scores);
	scores = JSON.parse(scores);
	date = new Date();
	var inputStore = {};
		inputStore.time = date.getTime();
		inputStore.toBeDone = input;
		inputStore.done = "";
	console.log(typeof inputStore);
	scores.push(inputStore);
	localStorage.setItem("highscores", JSON.stringify(scores));
        dry(inputStore.time,input,"");
        document.getElementById('input').value = '';
}
}
function toSplice(a){
	var scores = localStorage.getItem("highscores");
	scores = JSON.parse(scores);
	scores.splice(a,1);
	localStorage.setItem("highscores",JSON.stringify(scores));
	console.log(a+"Spliced");
}
function removeText(){
	var remove = this.className;
	var scores = localStorage.getItem("highscores");
	scores = JSON.parse(scores);
	for (i=0;i<scores.length;i++){
		var zzz = parseInt(remove);
		console.log(typeof scores[i].time);
		console.log(typeof zzz);
			if (zzz === scores[i].time){
				toSplice(i);
				removeElementsByClass(zzz.toString());
}else{
	console.log("bleah");
}
	}
}
function setLocalStorage(){
	if (window.localStorage) {
	if (window.localStorage.length !== 0){
		for(var i in window.localStorage){
        		if (i === "highscores"){
				loadText();
			}
		}
	} else {
		var highscores = [];
		localStorage.setItem("highscores",JSON.stringify(highscores));
		console.log("set");
}} else {
console.log("tralala");
}}
