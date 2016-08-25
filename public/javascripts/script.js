//alert ('boom')

$(document).ready(function() {


  // var joke = $('.current_joke').val()
  // console.log(joke);


  $('#submit').on('submit', function(d) {
    d.preventDefault();
    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
    }).done(function(results) {
      $('.current_joke').html(results.value.joke);
    })
      twitter.post('statuses/update', { status: 'code || die' }, function(err, data, response) {
      console.log(data)
    })
  })

});
