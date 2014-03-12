Ember.Handlebars.helper('subtotal', function(price, quantity) {
  return parseFloat(price) * parseFloat(quantity);
});