APP.LoginView = Backbone.View.extend ({
    tagName: "div",
    className: "logIn",
    template: _.template("<div id='spellbook'><div id='logIn' class='clearfix'><div class='labelWrap'><label>Name:</label><br><input type='text' name='name' id='inputName'></div></div><div id='spellColWrap' class='clearfix'><div class='spellCol fireBG'><h2>Fire</h2><button id='fire1' class='bookTypeFire bookLevel1'></button><h3>Ember</h3><button id='fire2' class='bookTypeFire bookLevel2'></button><h3>Flare</h3><button id='fire3' class='bookTypeFire bookLevel3'></button><h3>Inferno</h3></div><div class='spellCol woodBG'><h2>Wood</h2><button id='wood1' class='bookTypeWood bookLevel1'></button><h3>Twig</h3><button id='wood2' class='bookTypeWood bookLevel2'></button><h3>Splinter</h3><button id='wood3' class='bookTypeWood bookLevel3'></button><h3>Timber</h3></div><div class='spellCol waterBG'><h2>Water</h2><button id='water1' class='bookTypeWater bookLevel1'></button><h3>Shower</h3><button id='water2' class='bookTypeWater bookLevel2'></button><h3>Wave</h3><button id='water3' class='bookTypeWater bookLevel3'></button><h3>Deluge</h3></div><div class='spellCol metalBG'><h2>Metal</h2><button id='metal1' class='bookTypeMetal bookLevel1'></button><h3>Sliver</h3><button id='metal2' class='bookTypeMetal bookLevel2'></button><h3>Shard</h3><button id='metal3' class='bookTypeMetal bookLevel3'></button><h3>Spike</h3></div><div class='spellCol earthBG'><h2>Earth</h2><button id='earth1' class='bookTypeEarth bookLevel1'></button><h3>Rumble</h3><button id='earth2' class='bookTypeEarth bookLevel2'></button><h3>Boulder</h3><button id='earth3' class='bookTypeEarth bookLevel3'></button><h3>Quake</h3></div></div><div id='selectedSpellsWrap'><span id='spellSelected1' class='inactive'></span><span id='spellSelected2' class='inactive'></span><span id='spellSelected3' class='inactive'></span></div><button id='commitSpells' class='submit'>Commit</button></div><script src='/spellbook.js'></script>"),

    events: {
        "click .submit" : "save"
    },

    save: function(e) {
        e.preventDefault();

        var storedValueOfName = $('#inputName').val(); // get and store name
        var storedValueOfSpell1 = spellLevel1Select; // get and store spell1
        var storedValueOfSpell2 = spellLevel2Select; // get and store spell2
        var storedValueOfSpell3 = spellLevel3Select; // get and store spell3
        
        //this.model.save({"name":storedValueOfName, "email": storedValueOfEmail, "spellLevel1": storedValueOfSpell1, "spellLevel2": storedValueOfSpell2, "spellLevel3": storedValueOfSpell3});
        this.model.save({"name":storedValueOfName, "spellLevel1": storedValueOfSpell1, "spellLevel2": storedValueOfSpell2, "spellLevel3": storedValueOfSpell3});
        console.log(this.model);
        Backbone.history.navigate("/battle", {trigger: true});
    },

    render: function(e){
        this.$el.html( this.template(this.model.toJSON()) );
		return this;
    }
});