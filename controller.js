

function doTurn(chosenAttack) {
	if (model.po.health > 0 && model.pinkSpider.health > 0) {
		model.po.info = '';
		model.pinkSpider.info = '';
		// Angrep -1 er skip
		if (chosenAttack == -1) {
			if (model.po.turnTimer == 0) {
				if (!confirm("Du har ingen valgte angrep, ønsker du å skippe allikevell?")) {
					return;
				}
			}

			model.po.turnTimer--;
			model.pinkSpider.turnTimer--;
			if (model.po.turnTimer == 0) {
				model.po.info = attack(model.po, model.pinkSpider, model.po.currentAttack);

				if(model.po.health <= 0){
					model.po.health = 0;
				}
				if(model.pinkSpider.health <= 0){
					model.pinkSpider.health = 0;
				}

				updateView();
				return;
			}
		}
		else {
			if (model.po.turnTimer == 0) {
				model.po.currentAttack = chosenAttack;
				model.po.turnTimer = model.po.attacks[chosenAttack].turns;
			}
			else {
				if (!confirm("Ditt forrige angrep er ikke fullført, ønsker du å bytte til dette nye angrepet?")) {
					return;
				}
				else {
					model.po.currentAttack = chosenAttack;
					model.po.turnTimer = model.po.attacks[chosenAttack].turns + 1;
				}
			}

			model.pinkSpider.turnTimer--;
		}			
		if(model.pinkSpider.turnTimer <= 0){
			console.log("test");
			model.pinkSpider.info = attack(model.pinkSpider, model.po, model.pinkSpider.currentAttack);
			model.pinkSpider.turnTimer = Math.floor(Math.random() * 4 + 2);
		}
	}

	if (model.po.health <= 0) {
		model.po.health = 0;
		model.winTxt = 'Pink Spider won!'
	}
	if (model.pinkSpider.health <= 0) {
		model.pinkSpider.health = 0;
		model.winTxt = 'Po won!'
	}

	if(model.po.health <= 0){
		model.po.health = 0;
	}
	if(model.pinkSpider.health <= 0){
		model.pinkSpider.health = 0;
	}
	if(model.po.health < 15){
		document.body.style.backgroundColor = 'red';
	}
	else{document.body.style.backgroundColor = 'white';}

	if(model.po.turnTimer <= 0){
		model.po.turnTimer = 0;
	}
	if(model.pinkSpider.turnTimer <= 0){
		model.pinkSpider.turnTimer = 0;
	}

	updateView();
}


function attack(attacker, defender, attack) {
	if (attacker.health > 0 && defender.health > 0) {
		let rand = Math.random() * 100; // tilfeldig tall mellom 0 og 100

		console.log(attacker.name, rand);

		console.log(attacker, attack);

		if (attacker.attacks[attack].missChance > rand) {
			console.log("MISS!");
			return "MISS!";
		}

		rand = Math.random() * 100;

		if (attacker.attacks[attack].critChance > rand) {
			console.log("CRIT!");
			defender.health -= attacker.attacks[attack].attackPower * 2;
			return "CRIT!";
		}
		else {
			defender.health -= attacker.attacks[attack].attackPower;
			return "HIT!";
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

/* function toggleButtonColor(buttonID, toggleState) {
	if(buttonID == 0){
		if(toggleState == true){
			model.attackButton1Color='rgb(114, 103, 187)'; 
		}
		else {
			model.attackButton1Color='white';
		}
	}
	



	updateView();
} */