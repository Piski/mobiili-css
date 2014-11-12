if (typeof jQuery == 'undefined') {  
    console.log("not working")
} else {
    console.log("working")
}


// varmista et sivu on latautunut
$(document).ready(function() {
    console.log( "ready" );
	$("#hetaImage").append('<img id="heta" width="50%" height="50%" src="assets/ace.jpg" />');
	$("#SergeiImage").append('<img id="heta" src="ace.jpg" />');
});