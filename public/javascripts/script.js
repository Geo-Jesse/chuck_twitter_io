$(document).ready(function () {
  getJokes();

  function getJokes() {

    $.ajax({
      url: 'http://api.icndb.com/jokes/random/'
    }).done(function(data) {
      for (var i = 0; i < data.value.length; i++) {
            var newLine = $('<li></li>');
            newLine.text(data.value[i]);
            $('main_list').append(newLine);

    }
  });
}

});
