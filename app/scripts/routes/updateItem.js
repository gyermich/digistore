App.UpdateItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find("item", params.item_id);
  },

  actions: {
    updateItem: function(item) {
      item.save();
      alert("Product has been updated.");
      this.transitionTo('admin');

    }
  }
});