
	
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
	
	var Time = gameData.TotalTime;

	var SAVE_KEY = gameData;

	/*$(function() {
				$("#GatherFoodProgressBar").progressbar({
					value: 90
	  
				});
			});
	*/

	function FixBorder(){
		//$("#Buildings").parent("div").show();
		//$('#Buildings').addClass('visibleblock');
		//$('#Buildingsbutton').addClass('active');
		//$('#Buildingsbutton').removeClass('Hidden');
		$("#Buildings").parent("div").hide();
		loop.start();
	}
	
	$(document).ready(function() {
		
		$( "#GatherFoodprogress_bar" ).progressbar({
			value: 0,
			max:100,
			min:0
		});
	});
	
	$(document).ready(function() {
		$(".ResourceButtons").click(function(){
		});
		
		$( function() {

			$( "#OptionsDialog" ).dialog({
				autoOpen: false,
				show: {
					effect: "blind",
					duration: 1000
				},
				hide: {
					effect: "blind",
					duration: 1000
				},
				width: 500,
				title: "Game Stats"
			});
		
		});
			
		$( "#MenuIcon" ).on( "click", function() {
		  $( "#OptionsDialog" ).dialog( "open" );
		});
		
		$( function() {

			$( "#GatherDialog" ).dialog({
				autoOpen: false,
				show: {
					effect: "blind",
					duration: 1000
				},
				hide: {
					effect: "blind",
					duration: 1000
				},
				width: "auto",
				height: "auto",
				position: { 
				my: "center top", at: "center top", of: window
				},
				title: "Gather",
				resizable: false
			});
		
		});
	});

	$(document).ready(function() {
		$("#start").click(function(){
			if (loop.isPaused) {
				loop.resume();
			}
			
			if (loop.isStopped) {
				loop.start();
			}
		
		});
		
		$("#MenuIcon").click(function(){
		
		});
		
		$("#pause").click(function(){
			loop.pause();
		});
	
		/*
		$("#gatherFoodButton").click(function(){
			let x=0;
			
			
			while (x<=100){
				$( "#GatherFoodprogress_bar" ).progressbar({
					value: x
				});
				document.getElementById("gatherFoodButton").disabled = true;
				x+= 1;
			};
			document.getElementById("gatherFoodButton").disabled = false;
		*/
			
			
			
			
			
			
			
		/*
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
					
					$( "#foodprogressBar" ).progressbar({
					  change: function( event, ui ) {
						  width = $('#foodprogressBar').progressbar("option","value");
					  }
					});
					elem.style.width = width + '%'; 
					elem.innerHTML = width * 1  + '%';
					
				}
			}, 2100);
			document.getElementById("gatherFoodButton").disabled = false;
		*/
			
			
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
					
		$("#cutWoodButton").click(function(){ cutWood(); });
		$("#mineCopperButton").click(function(){ minecopper(); });
		
		$(".close").click(function(){
			//onclick="this.parentElement.style.display='none'"
			$("#Buildings").parent("div").hide();
			$("#People").parent("div").hide();
			$('#Buildingsbutton').removeClass('active');
			$('#People').removeClass('active');
		});
		
		$("#Gatherbutton").on( "click", function(){			
			$( "#GatherDialog" ).dialog( "open" );
		});
		
		$("#Peoplebutton").click(function(){
		//var index, tabcontent, tablinks;

		  // Get all elements with class="tabcontent" and hide them
		  //tabcontent = document.getElementsByClassName("tabcontent");
		  tabcontent = document.getElementsByClassName("tabcontent");
		  //tabcontent = Array.from(tabcontent);
		 // console.log(tabcontent);
		  //console.log(tabcontent.length);
		  //tabcontent = $("#tabcontent").prop("classList");
		  //tabcontent = tabcontent.classList;
		  
		  /*
		  for (index = 0; index < tabcontent.length; index++) {
			tabcontent[index].classList.add("Hidden"); //.display = "none	";
			tabcontent[index].classList.remove("visibleblock");
			tabcontent[index].classList.remove('active');
			$(tabcontent[index]).addClass('Hidden');
			$(tabcontent[index]).removeClass('Active');
			}
			*/
			
			var elems = document.querySelectorAll(".active");
				[].forEach.call(elems, function(el) {
				el.classList.remove("active");
				[].forEach.call(tabcontent, function(el) {
				el.classList.add("Hidden");
			});
			  });
		  

			$("#People").parent("div").show();
			$('#People').addClass('visibleblock');
			$('#Peoplebutton').addClass('active');
			$('#Peoplebutton').removeClass('Hidden');
		});
		
		$("#Buildingsbutton").click(function(){
				var elems = document.querySelectorAll(".active");
					[].forEach.call(elems, function(el) {
					el.classList.remove("active");
					[].forEach.call(tabcontent, function(el) {
					el.classList.add("Hidden");
					});
					});
				
				$("#Buildings").parent("div").show();
				$('#Buildings').addClass('visibleblock');
				$('#Buildingsbutton').addClass('active');
				$('#Buildingsbutton').removeClass('Hidden');
			
		
		}); 
			
		$("#SaveButton").click(function(){
			save(gameData);
		});
	});
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
		  Time = gameData.TotalTime;
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
	  document.getElementById("Time").innerHTML = "Current Playtime: " + "<span class=\"TimeColor\">" + Math.round(t/1000)+" seconds</span>";
	  gameData.TotalTime += dt;
	  document.getElementById("TimeElapsedTotal").innerHTML = "Total Time Played: " + "<span class=\"TimeColor\">" + (Math.round(gameData.TotalTime/60000) + " minutes</span/>");
	};
	

	loop.onRender = function(i) {
	  //currencyEl.textContent = currency.toFixed(2);
	};

	loop.onPanic = function() {
	  // discard any accumulated lag time and hope for the best
	  this.timing.lag = 0;
	};

	loop.start();