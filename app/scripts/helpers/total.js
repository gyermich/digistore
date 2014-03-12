Ember.Handlebars.helper('total', function(order) {
  var totalCost = 0;

  orderitems = this.get('orderitems');
  console.log(this.toString);
  // var irderitems = order.get('orderitems');
  // orderitems.then(function(orderitems){
  //   orderitems.forEach(function(orderitem){
  //     totalCost += orderitem.get('quantity') * orderitem.get('subtotal');
  //   });
  // });
  // return totalCost;
  for (var i in orderitems) {
    totalCost += parseFloat(oreritems[i].item.price) * parseFloat(orderitem[i].quantity)
  }
  return totalCost;
});

// total: function() {
//     return this.get('orderitems').reduce(function(subtotal, item) {
//       return subtotal + item.price;
//     }, 0);
//   }.property('items')