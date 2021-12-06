updateView();
function updateView(){
	let html = '';

	html += '<button class="attackButton1_" onclick="doTurn(0);">Tungt angrep</button>';
	html += '<button class="attackButton2_" onclick="doTurn(1);">Lett angrep</button>';
	html += '<button class="skipButton_" onclick="doTurn(-1);">Skip</button>';

	html += `<svg class="attackButton1" width="100" height="100">	<circle cx="50" cy="50" r="30" stroke="rgb(114, 103, 187)" stroke-width="4" /> </svg>`;
	html += `<svg class="attackButton2" width="100" height="100">	<circle cx="50" cy="50" r="30" stroke="yellow" stroke-width="4"/> </svg>`;
	html += `<svg class="skipButton" width="100" height="100">	<circle cx="50" cy="50" r="30" stroke="LawnGreen" stroke-width="4"/> </svg>`;


	html += `<div class="poHpBar">Po<br/>${model.po.health}<br/><progress max="${100}" value="${model.po.health}"></progress></div>`;
	html += `<img class="poImg" src="./img/po.png"/>`
	html += `<div class="pinkSpiderHpBar">Pink Spider<br/>${model.pinkSpider.health}<br/><progress max="${150}" value="${model.pinkSpider.health}"></progress> </div>`;
	html += `<img class="pinkSpiderImg" src="./img/pinkSpider.png"/>`
	html += `<div class="winTextDiv">${model.winTxt}</div>`;
    html += `<div class="versusDiv">VS</div>`;
	html += `<div>${model.po.turnTimer}</div>`
	html += `<div style="top: 30px">${model.pinkSpider.turnTimer}</div>`

	document.getElementById("app").innerHTML = html;
}

