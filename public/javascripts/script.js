//alert ('boom')

$(document).ready(function() {

  $('#submit').on('submit', function(d) {
    d.preventDefault();
    
    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
    }).done(function(results) {
      console.log(results);
      $('.current_joke').html(results.value.joke);
    })
  })
});
