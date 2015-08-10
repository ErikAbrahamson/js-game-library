$(document).on('ready', function() {
  function Game(title, genre) {
    this.title = title || 'no title';
    this.genre = genre || 'no genre';
  }
  function GameLibrary(title, games) {
    this.title = title || 'no title';
    this.games = [];
  }
  Game.prototype.render = function(event) {
    event.preventDefault();
    var span = $('body').append('span')
      .addClass('game');
    span.text(this.title + this.genre);
  };
  GameLibrary.prototype.render = function(event) {
    event.preventDefault();
    var span = $('body').append('span')
      .addClass('library');
    span.text(this.title + this.genre);
  };


});
