function Quote(quote, author) {
  this.quote = quote;
  this.author = author;
}

Quote.prototype.setQuote = function(quote) {
  this.quote = quote;
}

Quote.prototype.getQuote = function() {
  return this.quote;
}

Quote.prototype.setAuthor = function(author) {
  this.author = author;
}

Quote.prototype.getAuthor = function() {
  return this.author;
}
