var gameData = {
  copper: 0,
  copperPerClick: 1,
  copperPerClickCost: 10,
  copperPerClickUpgradeNum: 0,
  bronze: 0,
  bronzePerClick: 1
}



function minecopper() {
  gameData.copper += gameData.copperPerClick
  document.getElementById("copperMined").innerHTML = gameData.copper
  document.getElementById("copperperClickUpgrade").innerHTML = "Upgrade Copper Pickaxe (Currently Level " + gameData.copperPerClick + ") Cost: " + gameData.copperPerClickCost + " copper"
}

function buycopperPerClick() {
	document.getElementById("copperMined").innerHTML = gameData.copper
    document.getElementById("copperperClickUpgrade").innerHTML = "Upgrade Copper Pickaxe (Currently Level " + gameData.copperPerClick + ") Cost: " + gameData.copperPerClickCost + " copper"

  if (gameData.copper >= gameData.copperPerClickCost) {
    gameData.copper -= gameData.copperPerClickCost
    gameData.copperPerClick += 1
	gameData.copperPerClickUpgradeNum += 1
    gameData.copperPerClickCost *= 2
  }
}

var mainGameLoop = window.setInterval(function() {
  minecopper()
  document.getElementById("copperMinedPerSecond").innerHTML = gameData.copperPerClick
  $( document ).ready(function(){
  if (copperPerClickUpgradeNum >= 10){
	  document.getElementById("bronze").style.display="table-cell";
	  document.getElementById("bronzeMined").style.display="table-cell";
	  document.getElementById("bronzePerClick").style.display="table-cell";
  }
  })
}, 1000)

var savegame = JSON.parse(localStorage.getItem("copperMinerSave"))
if (savegame !== null) {
  gameData = savegame
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('copperMinerSave', JSON.stringify(gameData))
}, 15000)

function save() {
    let dec = decimalToString(game);
    let str = JSON.stringify(dec);
    localStorage.setItem("Factorygamesave", str);
	document.getElementById("Save").style.justifyContent = "center";
}

function load() {
    let str = localStorage.getItem("Factorygamesave");
    if (str == undefined || str == "undefined" || str == null) return;
    let sav = stringToDecimal(JSON.parse(str));
}

function ClearSave() {
	localStorage.clear();
	window.location.reload();
    localStorage.setItem("Factorygamesave", "0");
	let str = localStorage.getItem("Factorygamesave");
    if (str == undefined || str == "undefined" || str == null) return;
	let sav = stringToDecimal(JSON.parse(str));
}