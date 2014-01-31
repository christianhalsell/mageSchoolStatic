/* SPELLBOOK */
var playerName;
var spellLevel1Select;
var spellLevel2Select;
var spellLevel3Select;

function spellbookSelect() {
	$('.spellCol button').click(function() {
		var tempTypeLevel = $(this).attr('id');
		
		// Check Fire
		if (tempTypeLevel === 'fire1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1FireSelected');
			$('#spellBarLevel1').removeClass().addClass('level1FireSelected');
			spellLevel1Select = tempTypeLevel;
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
			$('#spellBarLevel1').removeClass().addClass('level1WoodSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'wood2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WoodSelected');
			$('#spellBarLevel2').removeClass().addClass('level2WoodSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'wood3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WoodSelected');
			$('#spellBarLevel3').removeClass().addClass('level3WoodSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Water
		if (tempTypeLevel === 'water1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1WaterSelected');
			$('#spellBarLevel1').removeClass().addClass('level1WaterSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'water2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2WaterSelected');
			$('#spellBarLevel2').removeClass().addClass('level2WaterSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'water3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3WaterSelected');
			$('#spellBarLevel3').removeClass().addClass('level3WaterSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Metal
		if (tempTypeLevel === 'metal1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1MetalSelected');
			$('#spellBarLevel1').removeClass().addClass('level1MetalSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'metal2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2MetalSelected');
			$('#spellBarLevel2').removeClass().addClass('level2MetalSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'metal3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3MetalSelected');
			$('#spellBarLevel3').removeClass().addClass('level3MetalSelected');
			spellLevel3Select = tempTypeLevel;
		}

		// Check Earth
		if (tempTypeLevel === 'earth1') {
			$('button.bookLevel1').removeClass('selected');
			$('span#spellSelected1').removeClass().addClass('level1EarthSelected');
			$('#spellBarLevel1').removeClass().addClass('level1EarthSelected');
			spellLevel1Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'earth2') {
			$('button.bookLevel2').removeClass('selected');
			$('span#spellSelected2').removeClass().addClass('level2EarthSelected');
			$('#spellBarLevel2').removeClass().addClass('level2EarthSelected');
			spellLevel2Select = tempTypeLevel;
		}

		if (tempTypeLevel === 'earth3') {
			$('button.bookLevel3').removeClass('selected');
			$('span#spellSelected3').removeClass().addClass('level3EarthSelected');
			$('#spellBarLevel3').removeClass().addClass('level3EarthSelected');
			spellLevel3Select = tempTypeLevel;
		}

		$(this).addClass("selected"); // Adds greenbox around spellbook items
		
		console.log("Spell Level 1: " + spellLevel1Select);
		console.log("Spell Level 2: " + spellLevel2Select);
		console.log("Spell Level 3: " + spellLevel3Select);
		console.log("");
	});
}

spellbookSelect();


/* BATTLE */
// Display player and mage data
function Player(hp, baseHp, spell1, spell1Damage, spell2, spell2Damage, spell3, spell3Damage) {
	this.hp = hp;
	this.baseHp = baseHp;
	this.spell1 = spell1;
	this.spell1Damage = spell1Damage;
	this.spell2 = spell2;
	this.spell2Damage = spell2Damage;
	this.spell3 = spell3;
	this.spell3Damage = spell3Damage;
}

var level1List = ['fire1','wood1','water1','metal1','earth1'];
var level2List = ['fire2','wood2','water2','metal2','earth2'];
var level3List = ['fire3','wood3','water3','metal3','earth3'];

/*var level1ListRandom = Math.floor(Math.random()* 5);
var level2ListRandom = Math.floor(Math.random()* 5);
var level3ListRandom = Math.floor(Math.random()* 5);*/

var level1ListRandom = 1;
var level2ListRandom = 1;
var level3ListRandom = 1;

var enemySpell1 = level1List[level1ListRandom];
var enemySpell2 = level2List[level2ListRandom];
var enemySpell3 = level3List[level3ListRandom];

var spellLevel1Damage = 10;
var spellLevel1DamageEnemy = 10;

var spellLevel2Damage = 20;
var spellLevel2DamageEnemy = 20;

var spellLevel3Damage = 30;
var spellLevel3DamageEnemy = 30;

// Spell Damage
//var spellLevel1Damage = Math.floor(Math.random() * 6 + 6);
//var spellLevel1DamageEnemy = Math.floor(Math.random() * 6 + 6);

//var spellLevel2Damage = Math.floor(Math.random() * 12 + 12);
//var spellLevel2DamageEnemy = Math.floor(Math.random() * 12 + 12);

//var spellLevel3Damage = Math.floor(Math.random() * 18 + 18);
//var spellLevel3DamageEnemy = Math.floor(Math.random() * 18 + 18);

// Set up the mages' attributes
var hero = new Player(100, 100, spellLevel1Select, spellLevel1Damage, spellLevel2Select, spellLevel2Damage, spellLevel3Select, spellLevel3Damage);
var enemy = new Player(100, 100, enemySpell1, spellLevel1DamageEnemy, enemySpell2, spellLevel2DamageEnemy, enemySpell3, spellLevel3DamageEnemy);

// Find Strengths
function burst() {
	if (hero.spell1 === "fire1" && enemy.spell1 === "wood1") {hero.spell1Damage = spellLevel1Damage * 2;}
	if (hero.spell1 === "wood1" && enemy.spell1 === "water1") {hero.spell1Damage = spellLevel1Damage * 2;}
	if (hero.spell1 === "water1" && enemy.spell1 === "metal1") {hero.spell1Damage = spellLevel1Damage * 2;}
	if (hero.spell1 === "metal1" && enemy.spell1 === "earth1") {hero.spell1Damage = spellLevel1Damage * 2;}
	if (hero.spell1 === "earth1" && enemy.spell1 === "fire1") {hero.spell1Damage = spellLevel1Damage * 2;}
	
	if (hero.spell2 === "fire2" && enemy.spell2 === "wood2") {hero.spell2Damage = spellLevel2Damage * 2;}
	if (hero.spell2 === "wood2" && enemy.spell2 === "water2") {hero.spell2Damage = spellLevel2Damage * 2;}
	if (hero.spell2 === "water2" && enemy.spell2 === "metal2") {hero.spell2Damage = spellLevel2Damage * 2;}
	if (hero.spell2 === "metal2" && enemy.spell2 === "earth2") {hero.spell2Damage = spellLevel2Damage * 2;}
	if (hero.spell2 === "earth2" && enemy.spell2 === "fire2") {hero.spell2Damage = spellLevel2Damage * 2;}
	
	if (hero.spell3 === "fire3" && enemy.spell3 === "wood3") {hero.spell3Damage = spellLevel3Damage * 2;}
	if (hero.spell3 === "wood3" && enemy.spell3 === "water3") {hero.spell3Damage = spellLevel3Damage * 2;}
	if (hero.spell3 === "water3" && enemy.spell3 === "metal3") {hero.spell3Damage = spellLevel3Damage * 2;}
	if (hero.spell3 === "metal3" && enemy.spell3 === "earth3") {hero.spell3Damage = spellLevel3Damage * 2;}
	if (hero.spell3 === "earth3" && enemy.spell3 === "fire3") {hero.spell3Damage = spellLevel3Damage * 2;}
	
	if (enemy.spell1 === "fire1" && hero.spell1 === "wood1") {enemy.spell1Damage = spellLevel1Damage * 2;}
	if (enemy.spell1 === "wood1" && hero.spell1 === "water1") {enemy.spell1Damage = spellLevel1Damage * 2;}
	if (enemy.spell1 === "water1" && hero.spell1 === "metal1") {enemy.spell1Damage = spellLevel1Damage * 2;}
	if (enemy.spell1 === "metal1" && hero.spell1 === "earth1") {enemy.spell1Damage = spellLevel1Damage * 2;}
	if (enemy.spell1 === "earth1" && hero.spell1 === "fire1") {enemy.spell1Damage = spellLevel1Damage * 2;}
	
	if (enemy.spell2 === "fire2" && hero.spell2 === "wood2") {enemy.spell2Damage = spellLevel2Damage * 2;}
	if (enemy.spell2 === "wood2" && hero.spell2 === "water2") {enemy.spell2Damage = spellLevel2Damage * 2;}
	if (enemy.spell2 === "water2" && hero.spell2 === "metal2") {enemy.spell2Damage = spellLevel2Damage * 2;}
	if (enemy.spell2 === "metal2" && hero.spell2 === "earth2") {enemy.spell2Damage = spellLevel2Damage * 2;}
	if (enemy.spell2 === "earth2" && hero.spell2 === "fire2") {enemy.spell2Damage = spellLevel2Damage * 2;}
	
	if (enemy.spell3 === "fire3" && hero.spell3 === "wood3") {enemy.spell3Damage = spellLevel3Damage * 2;}
	if (enemy.spell3 === "wood3" && hero.spell3 === "water3") {enemy.spell3Damage = spellLevel3Damage * 2;}
	if (enemy.spell3 === "water3" && hero.spell3 === "metal3") {enemy.spell3Damage = spellLevel3Damage * 2;}
	if (enemy.spell3 === "metal3" && hero.spell3 === "earth3") {enemy.spell3Damage = spellLevel3Damage * 2;}
	if (enemy.spell3 === "earth3" && hero.spell3 === "fire3") {enemy.spell3Damage = spellLevel3Damage * 2;}
	
	// Find Weaknesses
	if (hero.spell1 === "fire1" && enemy.spell1 === "earth1") {hero.spell1Damage = spellLevel1Damage / 2;}
	if (hero.spell1 === "wood1" && enemy.spell1 === "fire1") {hero.spell1Damage = spellLevel1Damage / 2;}
	if (hero.spell1 === "water1" && enemy.spell1 === "wood1") {hero.spell1Damage = spellLevel1Damage / 2;}
	if (hero.spell1 === "metal1" && enemy.spell1 === "water1") {hero.spell1Damage = spellLevel1Damage / 2;}
	if (hero.spell1 === "earth1" && enemy.spell1 === "metal1") {hero.spell1Damage = spellLevel1Damage / 2;}
	
	if (hero.spell2 === "fire2" && enemy.spell2 === "earth2") {hero.spell2Damage = spellLevel2Damage / 2;}
	if (hero.spell2 === "wood2" && enemy.spell2 === "fire2") {hero.spell2Damage = spellLevel2Damage / 2;}
	if (hero.spell2 === "water2" && enemy.spell2 === "wood2") {hero.spell2Damage = spellLevel2Damage / 2;}
	if (hero.spell2 === "metal2" && enemy.spell2 === "water2") {hero.spell2Damage = spellLevel2Damage / 2;}
	if (hero.spell2 === "earth2" && enemy.spell2 === "metal2") {hero.spell2Damage = spellLevel2Damage / 2;}
	
	if (hero.spell3 === "fire3" && enemy.spell3 === "earth3") {hero.spell3Damage = spellLevel3Damage / 2;}
	if (hero.spell3 === "wood3" && enemy.spell3 === "fire3") {hero.spell3Damage = spellLevel3Damage / 2;}
	if (hero.spell3 === "water3" && enemy.spell3 === "wood3") {hero.spell3Damage = spellLevel3Damage / 2;}
	if (hero.spell3 === "metal3" && enemy.spell3 === "water3") {hero.spell3Damage = spellLevel3Damage / 2;}
	if (hero.spell3 === "earth3" && enemy.spell3 === "metal3") {hero.spell3Damage = spellLevel3Damage / 2;}
	
	if (enemy.spell1 === "fire1" && hero.spell1 === "earth1") {enemy.spell1Damage = spellLevel1Damage / 2;}
	if (enemy.spell1 === "wood1" && hero.spell1 === "fire1") {enemy.spell1Damage = spellLevel1Damage / 2;}
	if (enemy.spell1 === "water1" && hero.spell1 === "wood1") {enemy.spell1Damage = spellLevel1Damage / 2;}
	if (enemy.spell1 === "metal1" && hero.spell1 === "water1") {enemy.spell1Damage = spellLevel1Damage / 2;}
	if (enemy.spell1 === "earth1" && hero.spell1 === "metal1") {enemy.spell1Damage = spellLevel1Damage / 2;}
	
	if (enemy.spell2 === "fire2" && hero.spell2 === "earth2") {enemy.spell2Damage = spellLevel2Damage / 2;}
	if (enemy.spell2 === "wood2" && hero.spell2 === "fire2") {enemy.spell2Damage = spellLevel2Damage / 2;}
	if (enemy.spell2 === "water2" && hero.spell2 === "wood2") {enemy.spell2Damage = spellLevel2Damage / 2;}
	if (enemy.spell2 === "metal2" && hero.spell2 === "water2") {enemy.spell2Damage = spellLevel2Damage / 2;}
	if (enemy.spell2 === "earth2" && hero.spell2 === "metal2") {enemy.spell2Damage = spellLevel2Damage / 2;}
	
	if (enemy.spell3 === "fire3" && hero.spell3 === "earth3") {enemy.spell3Damage = spellLevel3Damage / 2;}
	if (enemy.spell3 === "wood3" && hero.spell3 === "fire3") {enemy.spell3Damage = spellLevel3Damage / 2;}
	if (enemy.spell3 === "water3" && hero.spell3 === "wood3") {enemy.spell3Damage = spellLevel3Damage / 2;}
	if (enemy.spell3 === "metal3" && hero.spell3 === "water3") {enemy.spell3Damage = spellLevel3Damage / 2;}
	if (enemy.spell3 === "earth3" && hero.spell3 === "metal3") {enemy.spell3Damage = spellLevel3Damage / 2;}
}

$("#battleDisplay").html("BEGIN!");

// Let's rumble
var battle = function() {

	$('#player1HPBar').css('width', "100%");
	$('#player2HPBar').css('width', "100%");

	var playerWin = function() {
		if (enemy.hp <= 0) {
			alert("You WIN!!!");
		}
	};

	var enemyWin = function() {
		if (hero.hp <= 0) {
			alert("You lose.");
		}
	};

	// Level 1 Spells
	$('#spellBarLevel1').click(function() {
		enemy.hp = enemy.hp - hero.spell1Damage;
		var percentWidth = ((enemy.hp / enemy.baseHp) * 100) + "%";
		$('#player2HPBar').css('width', percentWidth);
		$('#spellBarLevel1').addClass('selected');
		$('#battleDisplay').html("You attack with " + hero.spell1 + " for " + hero.spell1Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell1Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel1').removeClass('selected');
				$('#battleDisplay').append("Enemy attacks with " + enemy.spell1 + " for " + enemy.spell1Damage + " damage.<br>");
				enemyWin();
			}, 1000);
		}

	});

	// Level 2 Spells
	$('#spellBarLevel2').click(function() {
		enemy.hp = enemy.hp - hero.spell2Damage;
		var percentWidth = ((enemy.hp / enemy.baseHp) * 100) + "%";
		$('#player2HPBar').css('width', percentWidth);
		$('#spellBarLevel2').addClass('selected');
		$('#battleDisplay').html("You attack with " + hero.spell2 + " for " + hero.spell2Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell2Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel2').removeClass('selected');
				$('#battleDisplay').append("Enemy attacks with " + enemy.spell2 + " for " + enemy.spell2Damage + " damage.<br>");
				enemyWin();
			}, 1000);
		}

	});

	// Level 3 Spells
	$('#spellBarLevel3').click(function() {
		enemy.hp = enemy.hp - hero.spell3Damage;
		var percentWidth = ((enemy.hp / enemy.baseHp) * 100) + "%";
		$('#player2HPBar').css('width', percentWidth);
		$('#spellBarLevel3').addClass('selected');
		$('#battleDisplay').html("You attack with " + hero.spell3 + " for " + hero.spell3Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell3Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel3').removeClass('selected');
				$('#battleDisplay').append("Enemy attacks with " + enemy.spell3 + " for " + enemy.spell3Damage + " damage.<br>");
				enemyWin();
			}, 1000);
		}

	});
};


// Commit spells and hide spellbook
$('#commitSpells').click(function() {
	// Hide spellbook view
	$('#spellbookWrap').addClass('hide');
	
	playerName = $('#inputName').val();
	if (playerName) {
		$('#player1Name').html(playerName);
	} else {
		$('#player1Name').html("Player 1");	
	};
	
	// Assign spells to player
	hero.spell1 = spellLevel1Select;
	hero.spell2 = spellLevel2Select;
	hero.spell3 = spellLevel3Select;
	
	console.log("Player\'s first spell is " + hero.spell1 + ".");
	console.log("Player\'s second spell is " + hero.spell2 + ".");
	console.log("Player\'s third spell is " + hero.spell3 + ".");
	console.log("");
	console.log("Enemy\'s first spell is " + enemy.spell1 + ".");
	console.log("Enemy\'s second spell is " + enemy.spell2 + ".");
	console.log("Enemy\'s third spell is " + enemy.spell3 + ".");
	
	burst();
	battle();
});

