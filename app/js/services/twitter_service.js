function TwitterService(keys) {
  this.consumerKey = twitterKeys.consumerKey;
  this.consumerSecret = twitterKeys.consumerSecret;
  this.accessToken = twitterKeys.accessToken;
  this.accessTokenSecret = twitterKeys.accessTokenSecret;
  this.apiBase = 'https://api.twitter.com/1.1';
  this.bearerToken = "";
}

TwitterService.prototype.encodedAuth = function() {
  return window.btoa(this.consumerKey + ":" + this.consumerSecret);
};

function setHeader(xhr) {
  xhr.setRequestHeader('Authorization', 'Basic ' + this.encodedAuth());
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  xhr.withCredentials = true;
}
