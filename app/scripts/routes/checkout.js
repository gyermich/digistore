App.CheckoutRoute = Ember.Route.extend({
  actions: {
      complete: function (attributes) {
        var self = this;
        var completedOrder = this.store.createRecord("completedOrder", attributes);

            self.store.find("order", localStorage.order_id).then(function(order){
              completedOrder.set("order", order);
              completedOrder.save();
              order.set("order", completedOrder);
              order.save();
            });

        completedOrder.save().then(
          function (completedOrder) {
            self.transitionTo('completedOrder', order.get('id'));
            localStorage.removeItem('order_id');
            var newOrder = self.store.createRecord("order");
            newOrder.save().then(function() {
              localStorage.order_id = newOrder.get('id');
            });
          },
          function (error) {
            completedOrder.deleteRecord().then(function(error){
              alert(error.responseText);
            });
          });
        }
    },

 model: function() {
    return {};
  }
})