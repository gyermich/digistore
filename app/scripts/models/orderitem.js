App.Orderitem = DS.Model.extend({
  item: DS.belongsTo("item", { async: true }),
  order: DS.belongsTo("order", { async: true }),
  quantity: DS.attr("number"),
  subtotal: DS.attr("number"),
  // total: functoin(){
  //   return this.get('quantity') * this.get('subtotal')
  // }.property('quantity', 'subtotal')
})

App.Orderitem.FIXTURES = [
  {
    id: 1,
    item: 1,
    order: 1,
    quantity: 3,

  }
]