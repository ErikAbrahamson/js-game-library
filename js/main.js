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

var killer7 = new Game('Killer7', 'Action', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Killer7boxnew.jpg/250px-Killer7boxnew.jpg');
var gtav = new Game('GTAV', 'RP', 'http://australianmuslimtimes.com/wp-content/uploads/2014/12/500px-CoverArt-GTAV3.png');
var sh2 = new Game('Silent Hill 2', 'Horror', 'https://upload.wikimedia.org/wikipedia/en/9/95/Silent_Hill_2.jpg');
var gt5 = new Game('GT5', 'Racing', 'http://ps3media.ign.com/ps3/image/object/857/857126/gran_turismo_5_ps3_esrb.jpg');
var hl = new Game('Half-Life', 'FPS', 'https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg');
library.addGame(killer7);
library.addGame(gtav);
library.addGame(sh2);
library.addGame(hl);
library.addGame(gt5);
killer7.render();
gtav.render();
hl.render();
sh2.render();
gt5.render();

