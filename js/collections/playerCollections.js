APP.PlayerCollections = Backbone.Collection.extend({
	model: APP.Player,
	url: "/players"
});