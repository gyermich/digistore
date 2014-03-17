App.CompletedOrder = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  ccnumber: DS.attr("number"),
  cvv: DS.attr("number"),
  zip: DS.attr("number"),
  exp: DS.attr("date"),
  status: DS.attr("string")
})

// App.CompletedOrder.FIXTURES = [
//   {
//     id: 1,
//     name: "string",
//     email: "string",
//     ccnumber: 4242424242424242,
//     cvv: 111,
//     zip: 98765 ,
//     exp: 15/20

//   }
// ]