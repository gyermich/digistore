App.ItemsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (item) {
      var order = this.modelFor("application");
      var store = this.store;
      debugger;
      order.get("orderitems").then(function(orderitems){
        return orderitems.find(function(orderitem){
          return orderitem.get("item").get("id") === item.get("id")
        })
      }).then( function (orderitem){
        if (orderitem){
          orderitem.incrementProperty("quantity");
          orderitem.save();

        } else {
            var orderitem = store.createRecord("orderitem", { quantity: 1,
                                            current_price: item.get("price"),
                                            item: item,
                                            order: order,
                                            image: item.get("image"),
                                            name: item.get("name")
                                          })
            order.get("orderitems").pushObject(orderitem);
            item.save();
        }
      })
        // var store = this.store;
        // this.store.find("order", localStorage.order_id).then(function (order){
        //   var orderitem = store.createRecord( "orderitem", { quantity: 1,
        //                                                     current_price: item.get("price"),
        //                                                     item: item,
        //                                                     order: order,
        //                                                     image: item.get("image"),
        //                                                     name: item.get("name")});
        //   orderitem.save().then(function(){
        //     order.get("orderitems").then(function(orderitems){
        //       orderitems.pushObject(orderitem)
        //     });
        //   });
        // });
      this.transitionTo("order");
    }
  },
  model: function () {
    return this.store.find("item")
  }
})