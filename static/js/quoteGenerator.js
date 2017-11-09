function QuoteGenerator() {
}

QuoteGenerator.prototype.setOnClickListener = function(callback) {
	$("#new-quote").on('click', (v) => {
	    this.genQuote(callback);
	});
}

QuoteGenerator.prototype.genQuote = function(callback) {
	$.ajax({
		headers: {
			"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
			"Accept": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movie",
		success: (response) => {
			var quote = new Quote(response.quote, response.author);
			callback(quote);
		}
	});
}
