App.ItemsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (item) {
        var store = this.store;
        this.store.find("order", localStorage.order_id).then(function (order){
          var orderitem = store.createRecord( "orderitem", { quantity: 1,
                                                            current_price: item.get("price"),
                                                            item: item,
                                                            order: order});
          orderitem.save().then(function(){
            order.get("orderitems").then(function(orderitems){
              orderitems.pushObject(orderitem)
            });
          });
        });
      this.transitionTo("order")
    }
  },
  model: function () {
    return this.store.find("item")
  }
})