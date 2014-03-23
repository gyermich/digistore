App.AdminRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("item");
  },
  actions: {
    updateItem: function(item){
      item.save();
    },
    deleteItem: function(item){
      alert("Are you sure? :(");
           item.deleteRecord();
           item.save();
           alert("Product deleted");
           this.transitionTo('admin');
    },
    createItem: function(){

    }
  }
});