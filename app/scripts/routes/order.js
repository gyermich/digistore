App.OrderRoute = Ember.Route.extend({
  actions: {
     more: function (orderitem) {
       orderitem.incrementProperty('quantity');
     },
     less: function (orderitem) {
       orderitem.decrementProperty('quantity');
     },
     removeItem: function (orderitem) {
           this.store.find("order", 1).then(function (order){
             order.get("orderitems").then(function(orderitems){
               orderitems.removeObject(orderitem);
             })
             orderitem.deleteRecord();
           });
        }
   },
  model: function () {
    return this.store.find("order", 1);
  }
})