function TwitterService(keys) {
  this.consumerKey = twitterKeys.consumerKey;
  this.consumerSecret = twitterKeys.consumerSecret;
  this.accessToken = twitterKeys.accessToken;
  this.accessTokenSecret = twitterKeys.accessTokenSecret;
  this.apiBase = 'https://api.twitter.com/1.1';
  this.bearerToken = "";
}
