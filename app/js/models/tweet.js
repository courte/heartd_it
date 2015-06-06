function Tweet (tweet_data) {
  this.id = tweet_data.id;
  this.idStr = tweet_data.id_str;
  this.text = tweet_data.text;
  this.user = {
    name: tweet_data.user.name,
    screenName: tweet_data.user.screen_name
  };
  this.urls = tweet_data.entities.urls;
  this.createdAt = tweet_data.created_at;
}

Tweet.prototype.searchByText = function(searchText) {
  var downcasedSearchText = searchText.toLowerCase();
  return this.text.toLowerCase().indexOf(downcasedSearchText) !== -1;
};

Tweet.prototype.searchByUser = function(searchText) {
  var downcasedSearchText = searchText.toLowerCase();
  var userDataAsText = this.user.name.toLowerCase() + " " + this.user.screenName.toLowerCase();
  return userDataAsText.indexOf(downcasedSearchText) !== -1;
};
