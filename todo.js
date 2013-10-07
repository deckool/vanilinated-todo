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
  var validator = localStorage.getItem(x);
  valid = JSON.parse(validator);
  console.log(valid.toBeDone);
  var validate = {"toBeDone":valid.toBeDone,"done":"true, of course"};
  if (!checked){
  parent_.setAttribute('rel', '');
  return !checked;
  }
  parent_.setAttribute('rel', 'me');
  localStorage.setItem(x,JSON.stringify(validate));
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
        var person = localStorage.getItem(i);
        pers = JSON.parse(person);
        dry(i,pers.toBeDone,pers.done);
}};

function addText(){
    var input = document.getElementById('input').value;
    date = new Date();
    var time = date.getTime();
    if (input !== "") {
        var person = {"toBeDone":input,"done":""};
        localStorage.setItem(time,JSON.stringify(person));
        dry(time,input,"");
        document.getElementById('input').value = '';
}};

function removeText(){
    var remove = this.className;
    removeElementsByClass(remove);
    localStorage.removeItem(remove);
}
