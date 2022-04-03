var gameData = {
  copper: 0,
  copperPerClick: 1,
  copperPerClickCost: 50,
  copperPerClickUpgradeNum: 0,
  bronze: 0,
  bronzePerClick: 1
}

function openTab(Event, TabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(TabName).setAttribute("style", "display: block;"); //.style.display = "block");
	Event.currentTarget.className += " active";

	//var element = document.getElementById("defaultOpen");
	//element.classList.add("dblock");
	//element.classList.remove("dnone");
	} 

function minecopper() {
  gameData.copper += gameData.copperPerClick
  document.getElementById("copperMined").innerHTML = gameData.copper
  document.getElementById("copperperClickUpgrade").innerHTML = "Upgrade Copper Pickaxe (Currently Level " + gameData.copperPerClick + ") Cost: " + gameData.copperPerClickCost + " copper"
}

function minebronze() {
  gameData.bronze += gameData.bronzePerClick
  document.getElementById("bronzeMined").innerHTML = gameData.bronze
  document.getElementById("bronzeperClickUpgrade").innerHTML = "Upgrade Bronze Pickaxe (Currently Level " + gameData.copperPerClick + ") Cost: " + gameData.copperPerClickCost + " copper"
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
  minecopper(); 
  document.getElementById("copperMinedPerSecond").innerHTML = gameData.copperPerClick
  
  if(gameData.copper >= 50){
	  document.getElementById("copperperClickUpgrade").style.display="inline-block";
  }
  
  $( document ).ready(function(){
  if (gameData.copperPerClickUpgradeNum >= 2){
		minebronze();
		$('bronze').css('display', 'table-row');
		document.getElementById("bronze").style.display="table-row";
		document.getElementById("bronzeMined").style.display="table-cell";
		document.getElementById("bronzeMinedPerSecond").style.display="table-cell";
		document.getElementById("bronzeMinedPerSecond").innerHTML = gameData.bronzePerClick
		document.getElementById("minebronzebutton").style.display="flex inline";
  }
  
  if(gameData.bronze >= 50){
	  document.getElementById("bronzeperClickUpgrade").style.display="flex inline";
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