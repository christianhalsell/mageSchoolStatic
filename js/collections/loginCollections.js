APP.LoginCollections = Backbone.Collection.extend({
	model: APP.Player,
	url: "/login"
});