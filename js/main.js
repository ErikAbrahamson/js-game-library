$(document).on('ready', function() {
  var lib = $('#library'), addBtn = $('#add');
  var $title = $('#title').val();
  var $genre = $('#genre').val();
  var $pic = $('#image').val();
  function Game(title, genre, imgURL) {
    this.title = $title || 'no title';
    this.genre = $genre || 'no genre';
    this.imgURL = $pic || null;
  }
  function GameLibrary(title, games) {
    this.title = title || 'no title';
    this.games = [];
  }
  Game.prototype.render = function() {
    addBtn.on('click', function(event) {
      lib.append('div')
        .text(this.title + ', ' + this.genre)
        .addClass('game');
    });
  };
  GameLibrary.prototype.render = function(event) {
    event.preventDefault();
    span.append
      .addClass('library');
    span.text(this.title + this.genre);
  };


});
