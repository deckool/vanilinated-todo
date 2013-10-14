function dry(class_,text,done) {
	var newCheck = document.createElement("div");
		newCheck.className  = "check";
		newCheck.id = "theDo"+class_+"l";
	var newElem= document.createElement("input");
		newElem.type = "checkbox";
		newElem.id = "theDo"+class_;
		newElem.className += class_; 
		newElem.onclick = validate;
	var newlabel = document.createElement("Label");
		newlabel.setAttribute("for","theDo"+class_);
		newlabel.innerHTML = "";
	newCheck.appendChild(newElem);
	newCheck.appendChild(newlabel);
	var node = document.createElement("li");
	var textnode = document.createTextNode(text);
		node.id = 'todo';
		node.className += class_;
	node.appendChild(newCheck);
	node.appendChild(textnode);
	document.getElementById('taskList').appendChild(node);
	var div = document.createElement('span');
		div.id = 'image';
		div.className += class_; 
		div.onclick = removeText;
	node.appendChild(div);
		if (done === ""){
		document.getElementById("theDo"+class_).checked = false;
		document.querySelector('#theDo'+class_+"l").parentNode.classList.remove('done');
		document.querySelector('#theDo'+class_+"l").parentNode.classList.add('active');
		return done === "";
		}
		document.getElementById("theDo"+class_).checked = true;
		document.querySelector('#theDo'+class_+"l").parentNode.classList.add('done');
		document.querySelector('#theDo'+class_+"l").parentNode.classList.remove('active');
		return done !== "";
};

function validate(){
	var x = this.className;
	var frm = document.getElementById('theDo'+x);
	var parent_ = document.getElementById('theDo'+x+"l").parentNode;
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
		document.querySelector('#theDo'+x+"l").parentNode.classList.remove('done');
		document.querySelector('#theDo'+x+"l").parentNode.classList.add('active');
		return !checked;
	} else {
		var scores = localStorage.getItem("highscores");
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			if (x == scores[i].time){
				scores[i].done = ".";
				localStorage.setItem("highscores", JSON.stringify(scores));
		}else{
		}}
		document.querySelector('#theDo'+x+"l").parentNode.classList.add('done');
		document.querySelector('#theDo'+x+"l").parentNode.classList.remove('active');
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
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			dry(scores[i].time,scores[i].toBeDone,scores[i].done);
	}
}
function addText(){
	var input = document.getElementById('input').value;
    if (input !== "") {
	var scores = localStorage.getItem("highscores");
	scores = JSON.parse(scores);
	date = new Date();
	var inputStore = {};
		inputStore.time = date.getTime();
		inputStore.toBeDone = input;
		inputStore.done = "";
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
}
function removeText(){
	var remove = this.className;
	var scores = localStorage.getItem("highscores");
	scores = JSON.parse(scores);
	for (i=0;i<scores.length;i++){
		var zzz = parseInt(remove);
			if (zzz === scores[i].time){
				toSplice(i);
				removeElementsByClass(zzz.toString());
}else{
	console.log("");
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
}} else {
	console.log("tralala");
}};

function getDone(y){
		var scores = localStorage.getItem("highscores");
		scores = JSON.parse(scores);
		for (i=0;i<scores.length;i++){
			if (scores[i].done !== y){
			var x = scores[i].time
			var parent_ = document.getElementById('theDo'+x+"l").parentNode;
			parent_.style.display = 'block';
			console.log(parent_);
			} else {
			var x = scores[i].time
			var parent_ = document.getElementById('theDo'+x+"l").parentNode;
			parent_.style.display = 'none';
			console.log(parent_);
			}
		}
};

/*
Start DRY
----------
var $ = function(z) {
		var scores = localStorage.getItem(z);
		scores = JSON.parse(scores);
		return scores;	
};
function listItems(){
		var scores = localStorage.getItem("highscores");
		scores = JSON.parse(scores);
		return scores;	
}
for (i=0;i<listItems().length;i++){
	console.log(listItems()[i].toBeDone);
}
console.log($('highscores'));
*/
