function Tweet (tweet_data) {
  this.id = tweet_data.id;
  this.id_str = tweet_data.id_str;
  this.text = tweet_data.text;
  this.user = {
    name: tweet_data.user.name,
    screen_name: tweet_data.user.screen_name
  };
  this.urls = tweet_data.entities.urls;
  this.created_at = tweet_data.created_at;
}

Tweet.prototype.searchByText = function(searchText) {
  var downcasedSearchText = searchText.toLowerCase();
  return this.text.toLowerCase().indexOf(downcasedSearchText) !== -1;
};
