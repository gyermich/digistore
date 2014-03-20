App.CompletedOrderRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('completedOrder', params.completedOrder_id)
  }
})