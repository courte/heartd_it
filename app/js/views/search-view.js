function SearchView(collection) {
  this.collection = collection;
  this.$el = $('#search');

  this.$el.on('keyup', '#search-text', function() {
    event.preventDefault();
    var textInput = $('#search-text').val();
    App.displayTweetList(this.collection.filterContentBy(textInput));
  }.bind(this));
}
