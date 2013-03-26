$(document).ready(function(){
	
	var h = $(window).height();
	var w = $(window).width();
	$("body").height(h);
	$("body").width(w);
	
	var playing = {
		blue: false,
		orange: false,
		green: false,
		red: false
	};
	
	var down = {
		blue: false,
		orange: false,
		green: false,
		red: false
	};
	
	var up = {
		blue: false,
		orange: false,
		green: false,
		red: false
	};
	
	var buzzertest = false;
	var any_up = false;
	var all_down = false;
	
	$(document).keydown(function(e){
		if(e.keyCode == "32") { // space bar
			playing = {
				blue: false,
				orange: false,
				green: false,
				red: false
			};
			buzzertest = true;
		}
		
		// buzzer test to set number of players/teams
		if(e.keyCode == "37" && buzzertest) { // left arrow
			playing.blue = true;
			$("#blue").addClass("pressed");
		}
		if(e.keyCode == "38" && buzzertest) { // up arrow
			playing.orange = true;
			$("#orange").addClass("pressed");
		}
		if(e.keyCode == "39" && buzzertest) { // right arrow
			playing.green = true;
			$("#green").addClass("pressed");
		}
		if(e.keyCode == "40" && buzzertest) { // down arrow
			playing.red = true;
			$("#red").addClass("pressed");
		}
		
		// pressing logic
		if(e.keyCode == "37" && !buzzertest) { // left arrow
			down.blue = true;
			up.blue = false;
			$("#blue").removeClass("pressed");
		}
		if(e.keyCode == "38" && !buzzertest) { // up arrow
			down.orange = true;
			up.orange = false;
			$("#orange").removeClass("pressed");
		}
		if(e.keyCode == "39" && !buzzertest) { // right arrow
			down.green = true;
			up.green = false;
			$("#green").removeClass("pressed");
		}
		if(e.keyCode == "40" && !buzzertest) { // down arrow
			down.red = true;
			up.red = false;
			$("#red").removeClass("pressed");
		}
		
		all_down = ((playing.blue && down.blue) || !playing.blue) && ((playing.orange && down.orange) || !playing.orange) && ((playing.green && down.green) || !playing.green) && ((playing.red && down.red) || !playing.red);
		if(all_down){
			any_up = false;
		}
		
		console.log("any_up: "+any_up+", alldown: "+all_down);
	});
	
	$(document).keyup(function(e) {
        if(e.keyCode == "32") { // space bar
			buzzertest = false;
			$(".buzzerlight").removeClass("pressed");
		}
		
		if(e.keyCode == "37" && !any_up && all_down) { // left arrow
			up.blue = true;
			down.blue = false;
			$("#blue").addClass("pressed");
		}
		if(e.keyCode == "38" && !any_up  && all_down) { // up arrow
			up.orange = true;
			down.orange = false;
			$("#orange").addClass("pressed");
		}
		if(e.keyCode == "39" && !any_up  && all_down) { // right arrow
			up.green = true;
			down.green = false;
			$("#green").addClass("pressed");
		}
		if(e.keyCode == "40" && !any_up  && all_down) { // down arrow
			up.red = true;
			down.red = false;
			$("#red").addClass("pressed");
		}
		
		any_up = (playing.blue && up.blue) || (playing.orange && up.orange) || (playing.green && up.green) || (playing.red && up.red);
		
		console.log("any_up: "+any_up+", alldown: "+all_down);
    });
});