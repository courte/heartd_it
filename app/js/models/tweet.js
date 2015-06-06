function Tweet (tweetData) {
  this.id = tweetData.id;
  this.idStr = tweetData.id_str;
  this.text = tweetData.text;
  this.user = {
    name: tweetData.user.name,
    screenName: tweetData.user.screen_name
  };
  this.urls = tweetData.entities.urls;
  this.createdAt = tweetData.created_at;
}

Tweet.prototype.searchText = function(searchText) {
  var downcasedSearchText = searchText.toLowerCase();
  return this.text.toLowerCase().indexOf(downcasedSearchText) !== -1;
};

Tweet.prototype.searchUser = function(searchText) {
  var downcasedSearchText = searchText.toLowerCase();
  var userDataAsText = this.user.name.toLowerCase() + " " + this.user.screenName.toLowerCase();
  return userDataAsText.indexOf(downcasedSearchText) !== -1;
};
