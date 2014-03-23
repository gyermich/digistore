App.Item = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  price: DS.attr("number")
})

// App.Item.FIXTURES = [
//   {
//     id: 1,
//     name: "The Most Boring Book Ever Written",
//     image: "http://kerkhoven.files.wordpress.com/2011/12/boringbook41.jpg?w=208&h=300",
//     description: "The Most Boring Book Ever Written is now free at Amazon.com and other fine retailers and should remain so indefinitely.",
//     price: 0,
//     orderitem: 1
//   }, {
//     id: 2,
//     name: "Codex Seraphinianus",
//     image: "http://www.abebooks.com/images/RareBooks/codex/llama-croodile.jpg?w=208&h=300",
//     description: "Some people think it's one of the weirdest books ever published. An art book unlike any other art book. A unique and disturbing surreal parody. Grotesque and beautiful. It's very hard to describe.",
//     price: 12500.00
//   }
// ]