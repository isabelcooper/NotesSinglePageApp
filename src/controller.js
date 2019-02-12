var textbox = document.getElementById('textbox');
var submit = document.getElementById('submit');
var previews = document.getElementById('previews');
var notepad = new Notepad;

submit.addEventListener('submit', function(event) { buildList(event) })

// document.getElementById("test").addEventListener("click", function(event) { loadNote(event) })

function loadNote(event, note) {
  event.preventDefault()
  document.getElementById("main").innerHTML =`${note.body}`
}

function getText(event) {
  event.preventDefault()
  if (textbox.value) {
    notepad.add(textbox.value);
    textbox.value = "";
    showPreviews()
  };
};

function showPreviews() {
  previews.innerHTML = notepad.previewDisplay()
}



var counter = 1

function buildList(event){
  event.preventDefault()
  note = addNote(textbox.value)
  previews.innerHTML += addLinkElem(counter,note)
  console.log(document.getElementById(counter))
  document.getElementById(counter).addEventListener('click', function(event){loadNote(event, note)});
  counter ++;
};

function addNote(text){
   if (text) {
    note = notepad.add(text)}

    return note
}

function addLinkElem(num,note){
  return(`<a id=${num} href = "">${note.preview()}</a><br>`)
}
