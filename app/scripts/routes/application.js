App.ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
    if (typeof(localStorage.order_id) === "undefined") {
      var newOrder = this.store.createRecord("order");
      newOrder.save().then(function(orderObject) {
        localStorage.order_id = orderObject.get('id');
        return orderObject;
        });
      } else {
        return this.store.find("order", localStorage.order_id);
    }
  }
});