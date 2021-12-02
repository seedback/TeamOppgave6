updateView();
function updateView(){
	let html = '';

	html += '<button class="attackButton" onclick="doTurn();">Angrip</button>';

	html += `<div class="poHpBar">Po<br/>${model.po.health}<br/><progress max="${100}" value="${model.po.health}"></progress></div>`;
	html += `<img class="poImg" src="./img/po.png"/>`
	html += `<div class="pinkSpiderHpBar">Pink Spider<br/>${model.pinkSpider.health}<br/><progress max="${150}" value="${model.pinkSpider.health}"></progress> </div>`;
	html += `<img class="pinkSpiderImg" src="./img/pinkSpider.png"/>`
	html += `<div class="winTextDiv">${model.winTxt}</div>`;
  html += `<div class="versusDiv">VS</div>`;

	document.getElementById("app").innerHTML = html;
}

