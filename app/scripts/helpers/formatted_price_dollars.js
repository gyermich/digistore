// formattedPriceDollars: function() {
//   var price = this.get('price'),
//     formatted = parseFloat(price, 10).toFixed(2);

//   return '$' + formatted;
// }.property('price')

Ember.Handlebars.helper('money', function(value, options) {
    return accounting.formatMoney(value, (options.hash.symbol || '$'), (options.hash.precision || 0));
});