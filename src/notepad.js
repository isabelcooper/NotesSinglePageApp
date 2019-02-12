function Notepad() {
  this.notes = []
}

Notepad.prototype.add = function (body) {
  note  = new Note(body);
  this.notes.push(note)
  return note

};

Notepad.prototype.previewDisplay = function () {
  return this.notes.map( note =>  note.preview() + "<br>" ).join(" ")
};
