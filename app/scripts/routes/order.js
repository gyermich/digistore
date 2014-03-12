App.OrderRoute = Ember.Route.extend({
  actions: {
     more: function (orderitem) {
       orderitem.incrementProperty('quantity');
     },
     less: function (orderitem) {
       orderitem.decrementProperty('quantity');
     }
   },
  model: function () {
    return this.store.find("order", 1);


  }
})