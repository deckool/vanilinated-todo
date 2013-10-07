function dry(class_,text) {
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
   var div = document.createElement('div');
   div.id = 'image';
   div.className += class_; 
   div.onclick = removeText;
   node.appendChild(div);

};

function validate(){
  var x = this.className;
  var frm = document.getElementById('theDo'+x);
  var parent_ = document.getElementById('theDo'+x).parentNode;
  var checked = frm.checked;
  if (!checked){
  parent_.setAttribute('rel', '');
  return !checked;
  }
  parent_.setAttribute('rel', 'me');
  return checked;
}

function removeElementsByClass(className){
    elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function loadText(){
for(var i in window.localStorage){
   val = localStorage.getItem(i);
   dry(i,val);
}};

function addText(){
    var input = document.getElementById('input').value;
    date = new Date();
    var time = date.getTime();
    if (input !== "") {
        localStorage.setItem(time,input);      
        dry(time,input);
        document.getElementById('input').value = '';
}};

function removeText(){
    var remove = this.className;
    removeElementsByClass(remove);
    localStorage.removeItem(remove);
}

