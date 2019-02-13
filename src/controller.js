var notepad = new Notepad();
var counter = 1;
var submit = document.getElementById("submit");
var main = document.getElementById("main");

submit.addEventListener("submit", function(event) {
  buildList(event);
});

function buildList(event) {
  event.preventDefault();
  var textbox = document.getElementById("textbox");
  var note = addNote(textbox.value);
  addLinkElem(counter, note);
  addListener();
  counter++;

  function addListener() {
    document.getElementById(counter).addEventListener("click", function(event) {
      loadNote(event);
    });

    function loadNote(event) {
      event.preventDefault();
      main.innerHTML = `${note.body}`;
    }
  }

  function addNote(text) {
    if (text) {
      note = notepad.add(text);
    }
    return note;
  }

  function addLinkElem(num, note) {
    var previews = document.getElementById("previews");
    previews.innerHTML += `<a id=${num} href = "">${note.preview()}</a><br>`;
  }
}

// var home = document.getElementById('home')
// home.addEventListener('click', function(event) { goHome(event) })

// function goHome(event){
//   event.preventDefault()
//   console.log(notepad.notes)
//    main.innerHTML = `test1 + ${notepad.notes.forEach(note => addLinkElem(1,note))}`
// };
//
//
//   function addLinkElem(num,note){
//     var previews = document.getElementById('previews');
//     previews.innerHTML += (`<a id=${num} href = "">${note.preview()}</a><br>`)
//   }
