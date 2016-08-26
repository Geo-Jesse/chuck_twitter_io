$(document).ready(function () {
  getJokes();

  function getJokes() {
    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
     }).done(function(results) {
       console.log(results);
        $mainJoke
       var newLine = $('<li></li>');
      newLine.text(results.value.joke);
      $('main_list').append(newLine);

     })
   }

});
var $mainJoke =$('.joke_move').html(results.value.joke);
