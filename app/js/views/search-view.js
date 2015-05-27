function SearchView(collection) {
  this.collection = collection;
  this.$el = $('#search');

  this.$el.on('keyup', '#search-text', function() {
    var textInput = $('#search-text').val();
    App.displayTweetList(this.collection.filterContentBy(textInput));
  }.bind(this));
}
