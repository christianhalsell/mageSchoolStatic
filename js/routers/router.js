APP.Router = Backbone.Router.extend({

	routes: {
		"login" : "loginRoute",
		"battle" : "battleRoute",
		"players": "playersRoute" // when the route localhost:3000/#players is hit, fire the function in the router called playerssRoute
	},

	loginRoute: function() {
		APP.playerModel = new APP.Player();
			var loginView = new APP.LoginView({
				model: APP.playerModel
			});
			loginView.render();
			$('#container').html(loginView.$el);
	},

	battleRoute: function() {
		APP.playerCollection1 = new APP.PlayerCollections();
		APP.playerCollection1.fetch({
			success: function(collection){
				var battleView = new APP.BattleView({
					model: collection.get(2)
				});
				battleView.render();
				$('#container').html(battleView.$el);
			}
		});
	},

	playersRoute: function() {
		APP.playerCollection1 = new APP.PlayerCollections();
		APP.playerCollection1.fetch({
			success: function(collection) {
				var viewInstance = new APP.PlayerView({
					collection: collection
				});
				viewInstance.render();
				$(document.body).html(viewInstance.$el);
			}
		});
	}
});

APP.router = new APP.Router();
Backbone.history.start({
	root: "/"
});