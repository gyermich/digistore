App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("items", { path: "items" })
  this.resource("item", { path: ":item_id" })
  this.resource("order", { path: "cart" })
});

