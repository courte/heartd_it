var App = {
  init: function() {
    this.$el = $("#content");
    this.tweets = new TweetCollection();
    this.search = new SearchView(this.tweets);

    this.tweets.fetch();
    this.displayTweetList();

    return this.$el;
  },

  displayTweetList: function(tweets) {
    var listView;

    if (tweets) {
      var collection = new TweetCollection();
      collection.models = tweets;
      listView = new FavoriteListView(collection);
    } else {
      listView = new FavoriteListView(this.tweets);
    }

    this.$el.html(listView.render());
  }
};

$(document).ready( function() {
  App.init();
});
