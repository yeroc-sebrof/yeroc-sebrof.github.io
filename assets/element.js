//JQ
$(document).ready(function () {
	"use strict";
	$("#gHeader").load("/assets/navbar.html");
	$("#gFooter").load("/assets/footer.html");
	
	$(".contact").hide();
	
	$("#contact").click(function () {
		$(".contact").toggle(500);
		$('html, body').animate({scrollTop: '+=400px'}, 450);
	});
	
	$("#headerPadding").click(function () {
		$('html, body').animate({scrollTop: '+=' + window.innerHeight + 'px'}, 450);
	});
});
