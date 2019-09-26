/*------------------------------------------------------------------
[Master Script]
-------------------------------------------------------------------*/

// load
$(window).on("load", function () {
	$("#_load").fadeOut(1000);
});

$(document).ready(function(){

    /*------------------------------------------------------------------
	Lazy Load
	------------------------------------------------------------------*/
	$('._lazy').lazy();
        
	// $('._lazy').lazy({
	//   effect: "fadeIn",
	//   effectTime: 700,
	//   threshold: 0
    // });

    $('#_body-sync').perfectScrollbar();
    
	$('._scroll').perfectScrollbar();

});