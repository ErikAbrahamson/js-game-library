function Game(title, genre, image) {
  this.title = title;
  this.genre = genre;
  this.image = image || null;
}

function GameLibrary() {
  this.games = [];
}
GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};
Game.prototype.render = function() {
  var game = $('<div>')
    .append('<strong>' + this.title + '</strong>')
    .append('<p>' + this.genre + '</p>')
    .addClass('game');
  if (this.image !== null) {
    game.append('<img src="' + this.image + '">');
  }
  this.element = $('#library').append(game);
  return this.element;
};

var library = new GameLibrary();

$('#select-genre').change(function(event) {
  event.preventDefault();
  $('.current-genre').text($(this).val());
  for (var i = 0; i < library.games.length; i++) {
    if (library.games[i].genre !== $('.current-genre').text()) {
      $('.game').eq(i).hide();
    } else {
      $('.game').eq(i).show();
    }
  }
  if ($('.current-genre').text() === 'All Games') {
    console.log('test');
    $('#library').children().show();
  }
});

$('#add').on('click', function(event) {
  event.preventDefault();
  var game = new Game($('#title').val(),$('#genre').val(),$('#image').val());
  library.addGame(game);
  game.render();

      $('#select-genre').append('<option value="' + game.genre + '">' + game.genre + '</option>');

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



