function TweetCollection() {
  this.model = Tweet;
  this.models = [];
}

TweetCollection.prototype.fetch = function(username) {
  return $.ajax({
    type: 'GET',
    url: '/twitter/' + username,
    data: {'count': 10},
    dataType: 'JSON'
  });
};

TweetCollection.prototype.compile = function(favorites) {
  this.models = [];

  _.map(favorites, function(tweet_data) {
    this.models.push(new this.model(tweet_data));
  }, this);

  return this.models;
};

TweetCollection.prototype.find = function(id) {
  return _.find(this.models, function(tweet) {
    return tweet.id === id || tweet.id_str === id;
  }, this);
};

TweetCollection.prototype.filterContentBy = function(searchText) {
  return _.filter(this.models, function(tweet) {
    return tweet.searchText(searchText) || tweet.searchUser(searchText);
  }, this);
};
