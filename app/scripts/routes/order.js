App.OrderRoute = Ember.Route.extend({
  actions: {
     more: function (orderitem) {
       orderitem.incrementProperty('quantity');
     },
     less: function (orderitem) {
       var quantity = orderitem.get('quantity');

        if (quantity > 0) {
          orderitem.decrementProperty('quantity');
        }
     },
     removeItem: function (orderitem) {
           this.store.find("order", localStorage.order_id).then(function (order){
             order.get("orderitems").then(function(orderitems){
               orderitems.removeObject(orderitem);
             })
             orderitem.deleteRecord();
           });
        }
   },
 model: function () {
   return this.modelFor("application");
 }
})