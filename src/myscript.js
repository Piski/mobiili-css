// varmista et sivu on latautunut
$(document).ready(function() {
    console.log( "ready" );
    
    // hetan kuva
    $("#hetaImage").append('<a href="assets/stockImageOne.jpg" data-lightbox="stockImageOne" data-title="Heta Pärssinen"><img id="heta" width="50%" height="50%" src="assets/stockImageOne.jpg" /></a>');
    
    $("#hetaImage").fadeIn(1000);
    
    $('#heta').hover(function() {
        $('#heta').fadeTo(500, 0.5);
    }, function() {
        $('#heta').fadeTo(200, 1);
    });
    
    // sergein kuva
    //$("#sergeiImage").append('<img id="sergei" width="50%" height="50%" src="assets/stockImageTwo.png" />');
    $("#sergeiImage").append('<a href="assets/stockImageTwo.png" data-lightbox="stockImageTwo" data-title="Sergei Liski"><img id="sergei" width="50%" height="50%" src="assets/stockImageTwo.png" /></a>');
    $("#sergeiImage").fadeIn(1000);
    
    $('#sergei').hover(function() {
        $('#sergei').fadeTo(500, 0.5);
    }, function() {
        $('#sergei').fadeTo(200, 1);
    });
    
});
