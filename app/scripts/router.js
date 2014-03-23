App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("items", { path: "items" })
  this.resource("item", { path: ":item_id" })
  this.resource("order", { path: "cart" })
  this.resource("checkout", { path: "checkout"})
  this.resource("completedOrder", { path: ":completedOrder_id"})
  this.resource("admin", { path: "admin"})
  this.resource("newItem", {path: "items/new"})
});

