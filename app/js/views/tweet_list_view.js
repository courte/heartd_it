function TweetListView(collection) {
  this.collection = collection;
  this.$el = $("#tweet-list-view").html();
  this.template = JST['app/templates/tweet.us'];
}

TweetListView.prototype.render = function() {
  _.each(this.collection, function(tweet){
    this.template(tweet);
  }, this);
};
