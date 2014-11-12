function TwitterService(keys) {
  this.consumerKey = twitterKeys.consumerKey;
  this.consumerSecret = twitterKeys.consumerSecret;
  this.accessToken = twitterKeys.accessToken;
  this.accessTokenSecret = twitterKeys.accessTokenSecret;
  this.apiBase = 'https://api.twitter.com/1.1';
  this.bearerToken = twitterKeys.bearerToken;
}

TwitterService.prototype.encodedAuth = function() {
  return btoa(this.consumerKey + ":" + this.consumerSecret);
};

TwitterService.prototype.auth = function() {
  $.ajax({
    type: 'POST',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'Authorization': 'Basic ' + this.encodedAuth(),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data: {'grant_type': 'client_credentials'},
    dataType: 'json'
  })
  .done( function( response ) {
    if(response.token_type === "bearer") {
      this.bearerToken = response.access_token;
    }
  }.bind(this))
  .fail( function( response ) {
    console.log(response);
    console.log("Your authorization did not go through.");
  });
};

TwitterService.prototype.loadFavorites = function(username, count) {

  $.ajax({
    type: 'GET',
    url: this.apiBase + '/favorites/list.json',
    headers: {
      'Authorization': 'Bearer ' + this.bearerToken
    },
    data: {'username': username, 'count': count},
    dataType: 'JSON'
  })
  .done( function(response) {
  });
};
