var App = {
  init: function() {
    this.$el = $("#content");
    this.tweets = new TweetCollection();
    this.search = new SearchView(this.tweets);

    this.fetchTweetList("courteneyervin");

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
  },

  fetchTweetList: function(username) {
    this.tweets.fetch(username)
    .done( function(tweetData) {
      this.tweets.compile(tweetData);
      this.displayTweetList();
    }.bind(this));
  }
};

$(document).ready( function() {
  App.init();
});
