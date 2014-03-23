App.NewItemRoute = Ember.Route.extend({
  model: function() {
    return {};
  },

  actions: {
    createItem: function(attributes) {
      var item = this.store.createRecord("item", attributes);
      var self = this;

      item.save().then(
        function () {
          alert("Product successfully created");
          self.transitionTo("admin");
        },
        function (error) {
          alert(error.responseText);
          item.deleteRecord();
        }
      );
    }
  }
});