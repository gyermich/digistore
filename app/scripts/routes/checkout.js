App.CheckoutRoute = Ember.Route.extend({
  actions: { //1
      complete: function (attributes) {//2
        var self = this;
        var completedOrder = this.store.createRecord("completedOrder", attributes);

              self.store.find("order", localStorage.order_id).then(function(order){//3
                completedOrder.set("order", order);
                completedOrder.save().then(function (completedOrder) { //4
                  self.transitionTo('completedOrder', order).then(function() { //5
                    localStorage.removeItem('order_id');
                    var order = self.store.createRecord("order");
                    order.save().then(function(order) { //6
                      localStorage.order_id = order.id;
                    }); //6
                  }); //5
                }); //4
              }), //3

            function (error) { //7
              completedOrder.deleteRecord().then(function(error){//8
                alert(error.responseText);
              }); //8
            } //7
        }//2
    },//1

 model: function() {
    return {};
  }
})