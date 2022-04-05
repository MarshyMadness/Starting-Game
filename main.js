var gameData = {
	GameVersion: "v0.0.4",
	foodAmount: 0,
	foodPerClick: 1,
	foodPerClickCost: 50,
	wood: 0,
	woodPerClick: 1,
	woodPerClickCost: 50,
	copper: 0,
	copperPerClick: 1,
	copperPerClickCost: 50,
	copperPerClickUpgradeNum: 0,
	bronze: 0,
	bronzePerClick: 1,
	bronzePerClickUpgradeNum: 0
};

var SAVE_KEY = gameData;

/*$(function() {
            $("#GatherFoodProgressBar").progressbar({
                value: 90
  
            });
        });
*/

function FixBorder(){
	$("#Buildings").parent("div").hide();
}
$(document).ready(function() {
    $(".ResourceButtons").click(function(){
    });
});

$(document).ready(function() {
	
	$("#gatherFoodButton").click(function(){
		gatherFood();
		
		
		/*
		var currValue = $( "#gatherFoodButton" ).data("value");
        currValue = parseInt(currValue) ? parseInt(currValue) : 0;
        if(currValue <= 100) {
            $( "#gatherFoodButton" ).progressbar({
              value: currValue+1
            }).data("value",currValue+1);
            $("#gatherFoodButton").html("Gather Food " + (currValue+1)+"%");
        }  
		*/
		
		
		/*
		var progress = 0;

		//change button to progress button, and add progress bar
		$('#gatherFoodButton').addClass('progress').html('<span id="gatherFoodButton"></span>');

		//update progress bar every 0.5 second
		setInterval(function(){
			$('#gatherFoodButton').width(progress);
			progress++;
			document.getElementsById('gatherFood').innerHTML = "Gather food " + progress + "%"
		}, 10);
		*/
		  $( function() {
			var progressbar = $( "#gatherFoodProgressBar" ),
			  progressLabel = $( "#gatherFoodButtonLabel" );
		 
			progressbar.progressbar({
			  value: false,
			  change: function() {
				progressLabel.text( progressbar.progressbar( "value" ) + "%" );
			  },
			  complete: function() {
				progressLabel.text( "Complete!" );
			  }
			});
		 
			function progress() {
			  var val = progressbar.progressbar( "value" ) || 0;
		 
			  progressbar.progressbar( "value", val + 2 );
		 
			  if ( val < 99 ) {
				setTimeout( progress, 80 );
			  }
			  if (val == 100) {
				  
			  }
			}
			
		  } );
				
		
		

	});
	$("#cutWoodButton").click(function(){ cutWood(); });
	$("#mineCopperButton").click(function(){ minecopper(); });
	
	$(".close").click(function(){
		//onclick="this.parentElement.style.display='none'"
		$("#Buildings").parent("div").hide();
		$("#People").parent("div").hide();
	});
	
    $("#Peoplebutton").click(function(){
	var i, tabcontent, tablinks;

	  // Get all elements with class="tabcontent" and hide them
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].classList.add("Hidden"); //.display = "none";
		tabcontent[i].classList.remove("visibleblock");
	  }

	    $("#People").parent("div").show();
		$('#People').addClass('visibleblock');
		$('#Peoplebutton').addClass('active');
		$('#Peoplebutton').removeClass('Hidden');
	});
	
	$("#Buildingsbutton").click(function(){
	var i, tabcontent, tablinks;
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].classList.add("Hidden"); //.display = "none";
		tabcontent[i].classList.remove("visibleblock");
	}
		$("#Buildings").parent("div").show();
		$('#Buildings').addClass('visibleblock');
		$('#Buildingsbutton').addClass('active');
		$('#Buildingsbutton').removeClass('Hidden');
		
	});	
	
	
	
	
	$("#SaveButton").click(function(){
		save(gameData);
	});
});


function openTab(TabNames) {
	  // Declare all variables
	  var i, tabcontent, tablinks;
	  console.log(TabNames);

	  // Get all elements with class="tabcontent" and hide them
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].classList.add("Hidden"); //.display = "none";
		tabcontent[i].classList.remove("visibleblock");
	  }

	  // Get all elements with class="tablinks" and remove the class "active"
	  //tablinks = document.getElementsByClassName("tablinks");
	  //for (i = 0; i < tablinks.length; i++) {
		//tablinks[i].className = tablinks[i].className.replace(" active", "");
	  //}

	  // Show the current tab, and add an "active" class to the button that opened the tab
		//document.getElementById(TabName).setAttribute("style", "display: block;"); //.style.display = "block");
		$(TabNames).addClass('Visibleblock');
		$(TabNames).removeClass('Hidden');
		//document.getElementById(TabName).classList.add('active');
		//TabNames.className += " active";

		//var element = document.getElementById("defaultOpen");
		//element.classList.add("dblock");
		//element.classList.remove("dnone");
} 

function gatherFood() {
	  gameData.foodAmount += gameData.foodPerClick
	  document.getElementById("foodGathered").innerHTML = gameData.foodAmount
	  document.getElementById("foodPerClickUpgrade").innerHTML = "Upgrade Hatchet (Currently Level " + gameData.foodPerClick + ") Cost: " + gameData.foodPerClickCost + " copper"
}

function cutWood() {
	  gameData.wood += gameData.woodPerClick
	  document.getElementById("woodCut").innerHTML = gameData.wood
	  document.getElementById("woodPerClickUpgrade").innerHTML = "Upgrade Hatchet (Currently Level " + gameData.copperPerClick + ") Cost: " + gameData.copperPerClickCost + " copper"
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

 $( document ).ready(function(){
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
 })
 
var mainGameLoop = window.setInterval(function() {
  //minecopper(); cutWood(); gatherFood();
	document.getElementById("foodGathered").innerHTML = gameData.foodAmount
  
  	document.getElementById("gameVersion").innerHTML = "Version " + gameData.GameVersion
	//document.getElementById("copperMinedPerSecond").innerHTML = gameData.copperPerClick
  
  
	if(gameData.foodAmount >= 50){
	  document.getElementById("foodPerClickUpgrade").style.display="inline-block";
	}
   if(gameData.wood >= 50){
	  document.getElementById("woodPerClickUpgrade").style.display="inline-block";
  }
  
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

function save(gameData) {
   // let dec = decimalToString(game);
    //let str = JSON.stringify(dec);
    //localStorage.setItem("Factorygamesave", str);
	//document.getElementById("Save").style.justifyContent = "center";
	window.localStorage.setItem(SAVE_KEY, JSON.stringify(gameData));
}

function load() {
    //let str = localStorage.getItem("Factorygamesave");
    //if (str == undefined || str == "undefined" || str == null) return;
    //let sav = stringToDecimal(JSON.parse(str));
	gameData = JSON.parse(window.localStorage.getItem(SAVE_KEY));
}

function ClearSave() {
	localStorage.clear();
	window.location.reload();
    //localStorage.setItem("Factorygamesave", "0");
	//let str = localStorage.getItem("Factorygamesave");
    //if (str == undefined || str == "undefined" || str == null) return;
	//let sav = stringToDecimal(JSON.parse(str));
}