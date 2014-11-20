function FavoriteListView(collection) {
  this.collection = collection;
  this.template = JST['app/templates/favorite-list.us'];
  this.$el = $(this.template({}));
}

FavoriteListView.prototype.render = function() {

  _.each(this.collection.models, function(tweet) {
    var tweetItem = new TweetItemView(tweet);
    this.$el.filter("#favorites").append(tweetItem.render());
  }, this);

  return this.$el;
};
