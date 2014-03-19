App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    if (typeof(localStorage.order_id) === "undefined") {
      var newOrder = this.store.createRecord("order");
      newOrder.save().then(function() {
        localStorage.order_id = newOrder.get('id').then(function() {
          return this.store.find("order", localStorage.order_id);
        });
      });
    }
  }
});