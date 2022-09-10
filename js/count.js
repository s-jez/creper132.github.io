$.getJSON("https://api.countapi.xyz/hit/creper132.github.io/visits", function(response) {
    $("#visits").text("Tak ogólnie ta strona została odwiedzona " + response.value + " razy!");
});