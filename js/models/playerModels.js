APP.Player = Backbone.Model.extend({
        urlRoot: "/players",
        defaults: {
                id: null,
                name: "Default Name",
                spellLevel1: null,
                spellLevel2: null,
                spellLevel3: null,
                wins: 0,
                losses: 0
        }
});