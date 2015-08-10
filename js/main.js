function Game(title, genre, image) {
  this.title = title;
  this.genre = genre;
  this.image = image || null;
}
function GameLibrary(title) {
  this.title = title;
  this.games = [];
}
Game.prototype.render = function() {
  var game = $('<div>')
    .append('<strong>' + this.title + '</strong>')
    .append('<p>' + this.genre + '</p>')
    .addClass('game');
  if (this.image !== null) {
    game.append('<img src="' + this.image + '">');
  }
  this.$element = $('#library').append(game);
  return this.$element;
};

$('button').on('click', function(event) {
  console.log('Clicked!');
  event.preventDefault();
  var game = new Game($('#title').val(),$('#genre').val(),$('#image').val());
  game.render();

});
