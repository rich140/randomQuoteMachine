$(document).ready(function(){

  var tweetQuote, tweetAuthor;
  getQuote();

  function getQuote(){

    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".quote").html('"' + data.quoteText + '"');
      $(".author").html("-" + data.quoteAuthor);
      tweetQuote = data.quoteText;
      tweetAuthor = data.quoteAuthor;
    });


  };

  $("#newQuote").on("click", function(){
    getQuote();
  });

  $('#tweet').on("click", function(){
    window.open('https://twitter.com/intent/tweet?text='
  + '"' + tweetQuote + '" -' + tweetAuthor)
});

});
