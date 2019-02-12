function Note(body) {
  this.body = body
}

Note.prototype.preview = function () {
  return this.body.substr(0, 20)
};
