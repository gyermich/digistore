App.Order = DS.Model.extend({
  orderitems: DS.hasMany("orderitem", {async: true}),
  total: function(){
    var orderitems = this.get('orderitems');
    var subtotals = orderitems.map(function(orderitem) {
      return orderitem.get('subtotal');
    });
    var total = subtotals.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    return total;
  }.property('orderitems.@each.subtotal')

  // created_at: DS.attr("date")
})

// App.Order.FIXTURES = [
//   {
//     id: 1,
//     orderitems: [1]
//   }
// ]