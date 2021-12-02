

function doTurn() {
	attack(model.po, model.pinkSpider);
	attack(model.pinkSpider, model.po);

	if (model.po.health <= 0) {
		model.po.health = 0;
		model.winTxt = 'Pink Spider won!'
	}
	if (model.pinkSpider.health <= 0) {
		model.pinkSpider.health = 0;
		model.winTxt = 'Po won!'
	}

	updateView();
}


function attack(attacker, defender) {
	if (attacker.health > 0 && defender.health > 0) {
		let rand = Math.random() * 100; // tilfeldig tall mellom 0 og 100

		console.log(attacker.name, rand);

		if (attacker.missChance > rand) {
			console.log("MISS!");
			return "miss";
		}

		rand = Math.random() * 100;

		if (attacker.critChance > rand) {
			console.log("CRIT!");
			defender.health -= attacker.attackPower * 2;
			return "crit";
		}
		else {
			defender.health -= attacker.attackPower;
			return "hit";
		}
	}
	else {
		if (model.po.health <= 0) {
			console.warn("Po er død");
		}
		if (model.pinkSpider.health <= 0) {
			console.warn("Pink Spider er død");
		}
		return "dead";
	}
}


function changeHealth(){
	model.po.health = 5;
}