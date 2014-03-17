App.CheckoutRoute = Ember.Route.extend({
  actions: {
      complete: function (attributes) {

        var completedOrder = this.store.createRecord("completedOrder", attributes);
        var self = this
        completedOrder.save().then(
          function (completedOrder) {
            self.transitionTo('completedOrder', completedOrder);
          },
          function (error) {
            completedOrder.deleteRecord();
            alert(error.responseText)
          }
        )

      }
    },
  model: function () {
    return {};
  }
})