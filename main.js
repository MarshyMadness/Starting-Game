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
		bronzePerClickUpgradeNum: 0,
		TotalTime: 0
	};

	var SAVE_KEY = gameData;

	/*$(function() {
				$("#GatherFoodProgressBar").progressbar({
					value: 90
	  
				});
			});
	*/

	function FixBorder(){
		$("#Buildings").parent("div").show();
		$('#Buildings').addClass('visibleblock');
		$('#Buildingsbutton').addClass('active');
		$('#Buildingsbutton').removeClass('Hidden');
		$("#Buildings").parent("div").hide();
		loop.start();
	}
	$(document).ready(function() {
		$(".ResourceButtons").click(function(){
		});
	});

	$(document).ready(function() {
		
		$("#gatherFoodButton").click(function(){
			//$("#foodprogressBar").parent("div").css( "height", "2rem");
			//gatherFood();
			
			var progressBar = $('#foodprogressBar');
			var elem = document.getElementById('foodprogressBar');
			var positionInfo = elem.getBoundingClientRect();
			var height = positionInfo.height;
			var maxwidth = positionInfo.width;
			var width = 0;
			
			$('#foodprogressBar').progressbar({value: 0});
			
			//progressBar.style.width = currentWidth + 'px';
			

			//progressBar.style.width(width);

			var interval = window.setInterval(function() {
			document.getElementById("gatherFoodButton").disabled = true;
				//idth += 10;
				var progressnum= $('#foodprogressBar').progressbar("option", "value");

				progressBar.css('width', progressnum + '%');
				if (width >= 100) {
					clearInterval(interval);
					$('#foodprogressBar').progressbar("option","value", 0);
					width = $('#foodprogressBar').progressbar("option","value");
					gatherFood(); 
				} 
				else{
					//progress = parseInt(progressbar.getAttribute('#foodprogressBar'));
					//progress = ((progress + 1) % 100);
					$('#foodprogressBar').progressbar({value: $("#progressbar").progressbar("value")+10});
					progressnum = $('#foodprogressBar').progressbar("option", "value");
					$( "#foodprogressBar" ).progressbar( "option", "value", width+10 );
					//width = $('#foodprogressBar').progressbar("option","value");
					//width += 50;
					
					/*$( "#foodprogressBar" ).progressbar({
					  change: function( event, ui ) {
						  width = $('#foodprogressBar').progressbar("option","value");
					  }
					});
					elem.style.width = width + '%'; 
					elem.innerHTML = width * 1  + '%';
					*/
				}
			}, 2100);
			document.getElementById("gatherFoodButton").disabled = false;
			
			
			
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
			
			/*
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
			  */
					
			
			

		});
		$("#cutWoodButton").click(function(){ cutWood(); });
		$("#mineCopperButton").click(function(){ minecopper(); });
		
		$(".close").click(function(){
			//onclick="this.parentElement.style.display='none'"
			$("#Buildings").parent("div").hide();
			$("#People").parent("div").hide();
		});
		
		$("#Peoplebutton").click(function(){
		var index, tabcontent, tablinks;

		  // Get all elements with class="tabcontent" and hide them
		  tabcontent = document.getElementsByClassName("tabcontent");
		  
		  for (index = 0; index < tabcontent.length; index++) {
			tabcontent[index].classList.add("Hidden"); //.display = "none	";
			tabcontent[index].classList.remove("visibleblock");
			tabcontent[index].classList.remove('active');
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
			tabcontent[i].classList.remove('active');	
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
			tabcontent[i].classList.add("Hidden'); //.display = "none";
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
	
	
	
	$(function() {
		$( "#foodprogressBar").progressbar({
		value: 00,
		max:100
		});
		var pb = $( "#foodprogressBar" );
		function progress() {
		var v = pb.progressbar( "value" ) || 0;
		pb.progressbar( "value", v + 1 );
		
		}
	});
	
	
	
	const STOPPED = Symbol.for("@@gameloop/stopped");
	const PAUSED = Symbol.for("@@gameloop/paused");
	const RUNNING = Symbol.for("@@gameloop/running");

	class GameLoop {
	  constructor(options = {}) {
		this.state = STOPPED;
			this.options = {
		  step: 1000 / 60,
		  maxUpdates: 300,
		  ...options
		};
		
		this.tick = this.tick.bind(this);
	  }
	  get isStopped() {
		return this.state === STOPPED;
	  }
	  get isPaused() {
		return this.state === PAUSED;
	  }
	  get isRunning() {
		return this.state === RUNNING;
	  }
	  start() {
		if (this.isStopped) {
		  this.state = RUNNING;
		  
		  const lag = 0;
		  const delta = 0;
		  const total = 0;
		  const last = null;
		  
		  this.timing = { last, total, delta, lag };
		  this.frame = requestAnimationFrame(this.tick);
		}
	  }
	  stop() {
		if (this.isRunning || this.isPaused) {
		  this.state = STOPPED;
		  cancelAnimationFrame(this.frame);
		}
	  }
	  pause() {
		if (this.isRunning) {
		  this.state = PAUSED;
		  cancelAnimationFrame(this.frame);
		}
	  }
	  resume() {
		if (this.isPaused) {
		  this.state = RUNNING;
		  this.frame = requestAnimationFrame(this.tick);
		}
	  }
	  tick(time) {
		if (this.timing.last === null) this.timing.last = time;
		this.timing.delta = time - this.timing.last;
		this.timing.total += this.timing.delta;
		this.timing.lag += this.timing.delta;
		this.timing.last = time;
		
		let numberOfUpdates = 0;
		
		while (this.timing.lag >= this.options.step) {
		  this.timing.lag -= this.options.step;
		  this.onUpdate(this.options.step, this.timing.total);
		  this.numberOfUpdates++;
		  if (this.numberOfUpdates >= this.options.maxUpdates) {
			this.onPanic();
			break;
		  }
		}
		
		this.onRender(this.timing.lag / this.options.step);
		
		this.frame = requestAnimationFrame(this.tick);
	  }
	}

	const loop = new GameLoop();

	//let currency = 0;
	//let currency_per_millisecond = 0.003;

	loop.onUpdate = function(dt, t) {
	  //currency += currency_per_millisecond * dt;
	  document.getElementById("Time").innerHTML = "Time Elapsed (Seconds): " + Math.round(t/60);
	  gameData.TotalTime = t;
	};

	loop.onRender = function(i) {
	  //currencyEl.textContent = currency.toFixed(2);
	};

	loop.onPanic = function() {
	  // discard any accumulated lag time and hope for the best
	  this.timing.lag = 0;
	};

	loop.start();