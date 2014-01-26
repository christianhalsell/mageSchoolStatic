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

var level1ListRandom = Math.floor(Math.random()* 5);
var level2ListRandom = Math.floor(Math.random()* 5);
var level3ListRandom = Math.floor(Math.random()* 5);

var enemySpell1 = level1List[level1ListRandom];
var enemySpell2 = level2List[level2ListRandom];
var enemySpell3 = level3List[level3ListRandom];

// Spell Damage
// var spellLevel1Damage = Math.floor(Math.random() * 6 + 6);
// var spellLevel1DamageEnemy = Math.floor(Math.random() * 6 + 6);

// var spellLevel2Damage = Math.floor(Math.random() * 12 + 12);
// var spellLevel2DamageEnemy = Math.floor(Math.random() * 12 + 12);

// var spellLevel3Damage = Math.floor(Math.random() * 18 + 18);
// var spellLevel3DamageEnemy = Math.floor(Math.random() * 18 + 18);

var spellLevel1Damage = 10;
var spellLevel1DamageEnemy = 10;

var spellLevel2Damage = 20;
var spellLevel2DamageEnemy = 20;

var spellLevel3Damage = 30;
var spellLevel3DamageEnemy = 30;

// Set up the mages' attributes
var hero = new Player(100, 100, spellLevel1Select, spellLevel1Damage, spellLevel2Select, spellLevel2Damage, spellLevel3Select, spellLevel3Damage);
var enemy = new Player(100, 100, enemySpell1, spellLevel1DamageEnemy, enemySpell2, spellLevel2DamageEnemy, enemySpell3, spellLevel3DamageEnemy);

// Find Strengths
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

// $("#battleDisplay").append("Player\'s first spell is " + hero.spell1 + ".<br>");
// $("#battleDisplay").append("Player\'s second spell is " + hero.spell2 + ".<br>");
// $("#battleDisplay").append("Player\'s third spell is " + hero.spell3 + ".<br><br>");

// $("#battleDisplay").append("Enemy\'s first spell is " + enemy.spell1 + ".<br>");
// $("#battleDisplay").append("Enemy\'s second spell is " + enemy.spell2 + ".<br>");
// $("#battleDisplay").append("Enemy\'s third spell is " + enemy.spell3 + ".<br><br>");

$("#battleDisplay").html("BEGIN!");

console.log("Player\'s first spell is " + hero.spell1 + ".");
console.log("Player\'s second spell is " + hero.spell2 + ".");
console.log("Player\'s third spell is " + hero.spell3 + ".");
console.log("");
console.log("Enemy\'s first spell is " + enemy.spell1 + ".");
console.log("Enemy\'s second spell is " + enemy.spell2 + ".");
console.log("Enemy\'s third spell is " + enemy.spell3 + ".");

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
		$('#battleDisplay').html('You attack for ' + hero.spell1Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell1Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel1').removeClass('selected');
				$('#battleDisplay').append('Enemy attacks for ' + enemy.spell1Damage + " damage.<br><br>");
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
		$('#battleDisplay').html('You attack for ' + hero.spell2Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell2Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel2').removeClass('selected');
				$('#battleDisplay').append('Enemy attacks for ' + enemy.spell2Damage + " damage.<br><br>");
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
		$('#battleDisplay').html('You attack for ' + hero.spell3Damage + " damage.<br>");
		playerWin();

		if (enemy.hp > 0) {
		setTimeout(function() {
				hero.hp = hero.hp - enemy.spell3Damage;
				var percentWidth = ((hero.hp / hero.baseHp) * 100) + "%";
				$('#player1HPBar').css('width', percentWidth);
				$('#spellBarLevel3').removeClass('selected');
				$('#battleDisplay').append('Enemy attacks for ' + enemy.spell3Damage + " damage.<br><br>");
				enemyWin();
			}, 1000);
		}

	});
};

battle();