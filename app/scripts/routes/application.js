App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    if (typeof(localStorage.order_id) === "undefined") {
      var newOrder = this.store.createRecord("order");
      newOrder.save().then(function(orderObject) {
        localStorage.order_id = orderObject.get('id');
        return orderObject;
        });
      return newOrder;
      } else {
        return this.store.find("order", localStorage.order_id);
    }
  }
});