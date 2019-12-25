//JQ
$(document).ready(function () {
    "use strict";
    $("#gHeader").load("/assets/navbar.html");

    $(".contact").hide();

    $("#contact").click(function () {
        $(".contact").toggle(500);
        $('html, body').animate({scrollTop: '+=400px'}, 450);
    });
});
