var App = {
  init: function() {
    this.$el = $("#content");
    this.tweets = new TweetCollection();

    this.tweets.fetch().done(function(){
      this.displayTweetList();
    }).bind(this);
  },

  displayTweetList: function() {
    var listView = new TweetListView(this.tweets);
  }
}

$(document).ready = function() {

}
