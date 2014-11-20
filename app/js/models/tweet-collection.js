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
