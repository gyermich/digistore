App.ItemRoute = Ember.Route.extend({
  actions: {
    addToCart: function (item) {
      this.store.createRecord('orderitem', {
        cart: 1,
        item: item,
        quantity: 1
      });
      this.transitionTo("order")
    }
  },
  model: function (params) {
    return this.store.find("item", params.item_id)
  }
})