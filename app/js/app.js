var App = {
  init: function() {
    this.$el = $("#content");
    this.tweets = new TweetCollection();

    this.tweets.fetch();
    this.displayTweetList();

    return this.$el;
  },

  displayTweetList: function() {
    var listView = new FavoriteListView(this.tweets);
    this.$el.html(listView.render());
  }
};

$(document).ready( function() {
  App.init();
});
