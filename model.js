
const model = {
	po: {
		name: "Po",
		health: 100,
		attacks: [
			{
				attackPower: 7,
				critChance: 50,
				missChance: 0,
				turns: 3,
			},
			{
				attackPower: 4,
				critChance: 25,
				missChance: 0,
				turns: 1,
			}
		],
		turnTimer: 3,
		currentAttack: 0,
	},
	pinkSpider: {
		name: "Pink Spider",
		health: 150,
		attacks: [
			{
				attackPower: 13,
				critChance: 0,
				missChance: 50,
				turns: 3,
			},
		],
		turnTimer: 3,
		currentAttack: 0,
	},

	winTxt: '',

	attackButton1Color: 'white',
	attackButton2Color: 'white',
	skipButtonColor: 'white',
}


