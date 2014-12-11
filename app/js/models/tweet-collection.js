function TweetCollection() {
  this.model = Tweet;
  this.models = [];
}

TweetCollection.prototype.fetch = function() {
  this.models = [];

  _.map(SAMPLE_TWEETS, function(tweet_data) {
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
    return tweet.searchByText(searchText) || tweet.searchByUser(searchText);
  }, this);
};
