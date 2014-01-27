/* SPELLBOOK */
var spellLevel1Select = "";
var spellLevel2Select = "";
var spellLevel3Select = "";


function spellbookSelect() {
	$('.spellCol button').click(function() {
		var tempTypeLevel = $(this).attr('id');
		
		// Check Fire
		if (tempTypeLevel === 'fire1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1FireSelected');
			$('#spellBarLevel1').removeClass().addClass('level1FireSelected');
			spellLevel1Select = tempTypeLevel;
			console.log(spellLevel1Select);
		}

		if (tempTypeLevel === 'fire2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2FireSelected');
			$('#spellBarLevel2').removeClass().addClass('level2FireSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'fire3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3FireSelected');
			$('#spellBarLevel3').removeClass().addClass('level3FireSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Wood
		if (tempTypeLevel === 'wood1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1WoodSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'wood2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WoodSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'wood3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WoodSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Water
		if (tempTypeLevel === 'water1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1WaterSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'water2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WaterSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'water3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WaterSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Metal
		if (tempTypeLevel === 'metal1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1MetalSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'metal2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2MetalSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'metal3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3MetalSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Earth
		if (tempTypeLevel === 'earth1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1EarthSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'earth2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2EarthSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'earth3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3EarthSelected');
			spellLevel3Select = tempTypeLevel;
		}

		$(this).addClass("selected");
		console.log("Spell Level 1: " + spellLevel1Select);
		console.log("Spell Level 2: " + spellLevel2Select);
		console.log("Spell Level 3: " + spellLevel3Select);
		console.log("");
	});
}

spellbookSelect();