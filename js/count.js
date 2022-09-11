$.getJSON("https://api.countapi.xyz/hit/creper132site1/visits", function(response) {
    $("#visits").text(response.value);
});