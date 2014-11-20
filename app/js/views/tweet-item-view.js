function TweetItemView(model) {
  this.model = model;
  this.template = JST['app/templates/tweet-item.us'];
}

TweetItemView.prototype.render = function() {
  this.$el = $(this.template(this.model));
  return this.$el;
};
