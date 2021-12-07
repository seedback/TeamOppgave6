updateView();
function updateView(){
	let html = '';

	html += `<div class="bodySubstitute"></div>`

	html += `
					<svg class="attackImg1" width="100" height="100">
						<image onclick="doTurn(1)" href="img/tubby_purse.png" width="46px"
										height="46px" x="25" y="25"/>
					</svg>
					<svg class="attackButton1" width="100" height="100">
						<circle onclick="doTurn(1)" cx="50" cy="50" r="30" stroke="rgb(114, 103, 187)"
										stroke-width="4"/>
					</svg>
					`;
					
	html += `
					<svg class="attackImg2" width="100" height="100">
						<image onclick="doTurn(0)" href="img/tubby_ball.png" width="46px"
										height="46px" x="27" y="27"/>
					</svg>
					<svg class="attackButton2" width="100" height="100">
						<circle onclick="doTurn(0)" cx="50" cy="50" r="30" stroke="yellow" stroke-width="4"/>
					</svg>
					`;
	html += `
					<svg class="skipImg" width="100" height="100">
						<image onclick="doTurn(-1)" href="img/tubby_scooter.png" width="46px"
										height="46px" x="22" y="27"/>
					</svg>
					<svg class="skipButton" width="100" height="100">
						<circle onclick="doTurn(-1)" cx="50" cy="50" r="30" stroke="LawnGreen"
										stroke-width="4"/>
					</svg>`;


	html += `<div class="poHpBar">Po<br/>${model.po.health}<br/><progress max="${100}" value="${model.po.health}"></progress></div>`;
	html += `<img class="poImg" src="./img/po.png"/>`
	html += `<div class="pinkSpiderHpBar">Pink Spider<br/>${model.pinkSpider.health}<br/><progress max="${150}" value="${model.pinkSpider.health}"></progress> </div>`;
	html += `<img class="pinkSpiderImg" src="./img/pinkSpider.png"/>`
	html += `<div class="winTextDiv">${model.winTxt}</div>`;
  html += `<div class="versusDiv">VS</div>`;
	html += `<div class="poTimer">${model.po.turnTimer == 0 ? "Choose your next attack!" : model.po.turnTimer}</div>`;
	html += `<div class="pinkSpiderTimer">${model.pinkSpider.turnTimer}</div>`;
	html += `<div class="poInfo">${model.po.info}</div>`
	html += `<div class="pinkSpiderInfo">${model.pinkSpider.info}</div>`

	document.getElementById("app").innerHTML = html;
}

