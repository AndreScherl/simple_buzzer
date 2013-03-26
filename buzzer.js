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
			$(".buzzerlight").text("✗");
			buzzered = false;
		}
		
		if(e.keyCode == "37" && !buzzered) { // left arrow
			$("#blue").addClass("pressed");
			buzzered = true;
		}
		if(e.keyCode == "38" && !buzzered) { // up arrow
			$("#orange").addClass("pressed");
			buzzered = true;
		}
		if(e.keyCode == "39" && !buzzered) { // right arrow
			$("#green").addClass("pressed");
			buzzered = true;
		}
		if(e.keyCode == "40" && !buzzered) { // down arrow
			$("#red").addClass("pressed");
			buzzered = true;
		}
    });
});