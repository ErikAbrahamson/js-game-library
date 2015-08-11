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

$('#add').on('click', function(event) {
  console.log('Clicked!');
  event.preventDefault();
  var game = new Game($('#title').val(),$('#genre').val(),$('#image').val());
  game.render();
  $('input').val(null);
});

$('#remove').on('click', function(event) {
  event.preventDefault();
  var selected = prompt('Which game do you want to remove?');
  console.log(selected);
  for (var i = 0; i < $('strong').length; i++) {
    if (selected == $('strong').eq(i).text()) {
      $('strong').closest('.game').remove();
    }
  }
});
