$.getJSON("https://api.countapi.xyz/hit/creper132.github.io/visits", function(response) {
    $("#visits").text(response.value);
});