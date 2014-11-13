function Tweet (tweet_data) {
  this.id = tweet_data.id;
  this.text = tweet_data.text;
  this.user = {
    name: tweet_data.user.name,
    screen_name: tweet_data.user.screen_name
  };
  this.urls = tweet_data.entities.urls;
  this.created_at = tweet_data.created_at;
}
