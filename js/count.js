$.getJSON("https://api.countapi.xyz/hit/creper132site/visits", function(response) {
    $("#visits").text(response.value);
});