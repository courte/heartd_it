function TweetCollection() {
  this.model = Tweet;
  this.models = [];
}

TweetCollection.prototype.fetch = function() {
  _.map(SAMPLE_TWEETS, function(tweet_data) {
    this.models.push(new Tweet(tweet_data));
  }, this);

  return this.models;
};

TweetCollection.prototype.find = function(id) {
  return _.find(this.models, function(tweet) {
    return tweet.id === id || tweet.id_str === id;
  }, this);
};
