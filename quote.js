var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var showQuote = '', showAuthor = '';


function getData(cb) {
	

	$.ajax({

		headers: {
	      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
	      Accept: "application/json",
	      "Content-Type": "application/x-www-form-urlencoded"
	    },
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movie",
		success: (response) => {
			
			cb(null,response);
			console.log("In");
		}
	});
} 

getData((err, data) => {
	
	showQuote = data.quote;
	showAuthor = data.author;

	$(".quote-text").animate({
		  opacity: 0
		}, 500,
		function() {
		  $(this).animate({
		    opacity: 1
		  }, 500);
		  $('#text').text(showQuote);
	});

	$(".quote-author").animate({
		  opacity: 0
		}, 500,
		function() {
		  $(this).animate({
		    opacity: 1
		  }, 500);
		  $('#author').text(showAuthor);
	});

});

$(document).ready(function() {
	
	$("#new-quote").on('click', getData);
});