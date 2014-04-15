//Jquery smooth scroll without plugin

//bind click function to all links in ul
$(".navigation a").click(function(){
	//get contents of the href attribute and store in variable
	var navlinkId = $(this).attr("href");
//select body and use animate method - takes two parameters
//scroll to the top  a specified number of pixels
//top offset
//html, body for compatibility
	$("html, body").animate({scrollTop: $(navlinkId).offset().top}, 2000);
	return false;

});

$(".story a").click(function(){
	var storylinkId = $(this).attr("href");
	$("html, body").animate({scrollTop: $(storylinkId).offset().top}, 2000);
	return false;

});

$(".intro a").click(function(){
	var introlinkId = $(this).attr("href");
	$("html, body").animate({scrollTop: $(introlinkId).offset().top}, 2000);
	return false;

});