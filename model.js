
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
		turnTimer: 0,
		currentAttack: 0,
		info: '',
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
		turnTimer: Math.floor(Math.random() * 4 + 2),
		currentAttack: 0,
		info: '',
	},

	winTxt: '',

	attackButton1Color: 'white',
	attackButton2Color: 'white',
	skipButtonColor: 'white',
}


