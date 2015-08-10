function Game(title, genre, image) {
  this.title = $('#title').val();
  this.genre = $('#genre').val();
  this.image = $('#image').val() || null;
}
function GameLibrary(title) {
  this.title = title;
  this.games = [];
}
Game.prototype.render = function() {
  var game = $('div')
    .append('<strong>' + this.title + '</strong>')
    .append('<p>' + this.genre + '</p>')
    .addClass('game');
  if (this.image !== null) {
    game.append('<img src="' + this.image + '">');
  }
  this.$element = $('div')
    .append(game);
  return this.$element;
};
GameLibrary.prototype.render = function() {
  var showGames = this.games.map(function(i) {
    return i.render();
  });
};
