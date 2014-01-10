APP.PlayerIndividualView = Backbone.View.extend ({
    tagName: "li",
    template: _.template("<h3>Name: <%= name %></h3><p>ID: <%= id %></p><p>Spell Level 1: <%= spellLevel1 %></p><p>Spell Level 2: <%= spellLevel2 %></p><p>Spell Level 3: <%= spellLevel3 %></p><p>Wins: <%= wins %></p><p>Losses: <%= losses %></p>"),

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});