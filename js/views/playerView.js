APP.PlayerView = Backbone.View.extend ({
    tagName: "ul",
    className: "playerList",

    render: function(){
        this.collection.each(function(model){
			var playerIndividualView = new APP.PlayerIndividualView({
				model: model
			});

			this.$el.append(playerIndividualView.render().el);
        }, this);
        
        return this;
    }
});