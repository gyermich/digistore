App.AdminRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("item");
  },
  actions: {
    deleteItem: function(item){
      alert("Are you sure? :(");
           item.deleteRecord();
           item.save();
           alert("Product deleted");
           this.transitionTo('admin');
    }
  }
});