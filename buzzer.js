$(document).ready(function(){
	
	var h = $(window).height();
	var w = $(window).width();
	$("body").height(h);
	$("body").width(w);
	
	var buzzered = false;
	
	$(document).keydown(function(e){
		if(e.keyCode == "37") { // left arrow
			$("#blue").text("✓");
		}
		if(e.keyCode == "38") { // up arrow
			$("#orange").text("✓");;
		}
		if(e.keyCode == "39") { // right arrow
			$("#green").text("✓");;
		}
		if(e.keyCode == "40") { // down arrow
			$("#red").text("✓");
		}
	});
	
	$(document).keyup(function(e) {
        // reset
        if(e.keyCode == "32") { // space bar
			$(".buzzerlight").removeClass("pressed");
			buzzered = false;
		}
		
		if(e.keyCode == "37") { // left arrow
			if(!buzzered){
				$("#blue").addClass("pressed");
				buzzered = true;
			}
			$("#blue").text("✗");
		}
		if(e.keyCode == "38") { // up arrow
			if(!buzzered){
				$("#orange").addClass("pressed");
				buzzered = true;
			}
			$("#orange").text("✗");
		}
		if(e.keyCode == "39") { // right arrow
			if(!buzzered){
				$("#green").addClass("pressed");
				buzzered = true;
			}
			$("#green").text("✗");
		}
		if(e.keyCode == "40") { // down arrow
			if(!buzzered){
				$("#red").addClass("pressed");
				buzzered = true;
			}
			$("#red").text("✗");
		}
    });
});