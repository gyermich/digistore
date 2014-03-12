Ember.Handlebars.helper('formatted_price', function(price) {
  return "$" + (parseFloat(price)/100).toFixed(2);
});