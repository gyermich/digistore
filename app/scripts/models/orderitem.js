App.Orderitem = DS.Model.extend({
  item: DS.belongsTo("item", { async: true }),
  order: DS.belongsTo("order", { async: true }),
  quantity: DS.attr("number"),
  current_price: DS.attr("number"),
  subtotal: function(){
    return this.get('quantity') * this.get('current_price')
  }.property('quantity', 'current_price')
})

App.Orderitem.FIXTURES = [
  {
    id: 1,
    item: 1,
    order: 1,
    quantity: 3,
    current_price: 0

  }
]