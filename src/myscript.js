// varmista et sivu on latautunut
$(document).ready(function() {
    console.log( "ready" );
    var width = $(window).width();

    // to add new list item use: <li>%TEXT%</li>
    var hetaText = "<ul id='hetaList'><li><h3>Nimi:</h3> Heta Pärssinen</li><li><h3>Puhelin:</h3> Samsung Ace</li><li><h3>Henkilökuvaus:</h3>Moi mun nimi on Heta ja asun Helsingissä. Tykkään soijasta.</li></ul>";
    var sergeiText = "<ul id='sergeiList'><li><h3>Nimi:</h3> Sergei Liski</li><li><h3>Puhelin:</h3> LG G2</li><li><h3>Henkilökuvaus:</h3>Moi mun nimi on Sergei ja asun Leppävaarassa. En tykkää soijasta.</li></ul>";

    // add text
    $("#hetaText").append(hetaText);

    $("#sergeiText").append(sergeiText);
    
    // hetan kuva
     $("#hetaImage").append('<a href="assets/samsungAce.png" data-lightbox="samsungAce" data-title="Heta Pärssinen"><img id="heta" width="10%" height="10%" src="assets/samsungAce_desatur.png" /></a>');
    
    
    //$("#hetaImage").fadeIn(1000);
    
    $('#heta').hover(function() {
        $('#heta').fadeTo(500, 0.5);
    }, function() {
        $('#heta').fadeTo(200, 1);
    });
    
    // sergein kuva
    $("#sergeiImage").append('<a href="assets/lgG2.png" data-lightbox="lgG2" data-title="Sergei Liski"><img id="sergei" width="50%" height="50%" src="assets/lgG2_desatur.png" /></a>');
                  
    //$("#sergeiImage").fadeIn(1000);
    
    $('#sergei').hover(function() {
        $('#sergei').fadeTo(500, 0.5);
    }, function() {
        $('#sergei').fadeTo(200, 1);
    });
    
    console.log(width);
    
});
