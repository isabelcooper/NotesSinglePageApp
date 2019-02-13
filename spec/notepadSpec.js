describe("Storing notes:", function() {
  var notepad = new Notepad();

  it("should be able to store notes", function() {
    notepad.add("Hello note fans");
    expect(notepad.notes.length).toEqual(1);
  });

  it("should store a note object", function() {
    notepad.add("Hello note fans");
    expect(notepad.notes[0]).beInstanceOf(Note);
  });

  it("can display previews of all the notes", function() {
    notepad.notes = [];
    notepad.add("Hello note fans, this is more than 20 characters");
    notepad.add("Javascript is really annoying and pedantic");
    var display = notepad.previewDisplay();
    expect(display).toEqual(
      "Hello note fans, thi<br> Javascript is really<br>"
    );
  });
});
