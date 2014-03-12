App.Order = DS.Model.extend({
  orderitems: DS.hasMany("orderitem", {async: true})

  // created_at: DS.attr("date")
})

App.Order.FIXTURES = [
  {
    id: 1,
    orderitems: [1]
  }
]