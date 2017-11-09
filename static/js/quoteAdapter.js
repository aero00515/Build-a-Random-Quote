function QuoteAdapter() {
}

function QuoteAdapter(quote) {
  this.quote = quote;
}

QuoteAdapter.prototype.setQuote = function(quote) {
  this.quote = quote;
}

QuoteAdapter.prototype.getQuote = function() {
  return this.quote;
}

QuoteAdapter.prototype.notifyDataChanged = function() {
  quote = this.quote;
  $(".quote-text").animate({
		  opacity: 0
		}, 500,
		function() {
		  $(this).animate({
		    opacity: 1
		  }, 500);
		  $('#text').text(quote.quote);
	});

	$(".quote-author").animate({
		  opacity: 0
		}, 300,
		function() {
		  $(this).animate({
		    opacity: 1
		  }, 300);
		  $('#author').text(quote.author);
	});
}
