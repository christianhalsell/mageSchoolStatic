APP.BattleCollections = Backbone.Collection.extend({
	model: APP.Player,
	url: "/battle"
});