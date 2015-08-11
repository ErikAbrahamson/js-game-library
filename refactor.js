function Game(title, genre, img) {
  this.title = title;
  this.genre = genre;
  this.img = img || null;
}
function GameLibrary() {
  this.games = [];
}
GameLibrary.prototype.addGame = function(newGame) {
  this.games.push(newGame);
};
Game.prototype.render = function() {
  var game = $('<div>').append('<strong>' + this.title + '</strong>').append('<p>' + this.genre + '</p>').addClass('game');
  if (this.img !== null) {
    game.append('<img src="' + this.image + '">');
  }
  this.$element = $('#library').append(game);
  $('#add').on('click', function(event) {
    event.preventDefault();
    return game.$element;
  })
};

