APP.BattleView = Backbone.View.extend ({
    tagName: "div",
    className: "battle",
    template: _.template("<div id='arena'><div id='player1Wrap'><div id='player1Name'><%= name %></div><div id='player1HPBarWrap'><div id='player1HPBar'></div></div></div><div id='player2Wrap'><div id='player2Name'>Apprentice</div><div id='player2HPBarWrap'><div id='player2HPBar'></div></div></div><div id='spellBar'><button id='spellBarLevel1' class='<%= spellLevel1 %>'></button><button id='spellBarLevel2' class='<%= spellLevel2 %>'></button><button id='spellBarLevel3' class='<%= spellLevel3 %>'></button></div><div id='battleDisplay'></div></div><script src='/battle.js'></script>"),

    render: function(e){
        console.log(this.model.toJSON());
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});