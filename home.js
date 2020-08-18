$(document).ready(function() {
    var favorites = [];
    var counter = 0;
    $('#popups').click(function() {
        ++counter;
        favorites.push("\"" + $(this).text() + " " + counter + "\"");
    });
    
    $('#reveal').click(function() {
       alert(favorites); 
    });
});
