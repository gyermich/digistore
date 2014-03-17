App.AdminRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("item");
  },
  actions: {
    updateItem: function(item){

    },
    deleteItem: function(item){

    },
    createItem: function(){

    }
  }
});