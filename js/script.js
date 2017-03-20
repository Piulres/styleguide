$( document ).ready(function() {
	
	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	// Popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
	
	// Toggle Page Live Preview 
	$( ".toggle-page-1, .toggle-page-2, .toggle-page-3, .toggle-page-4" ).click(function() {
		$(this).toggleClass('active');
	});


	// datepicker
	$('.input-datepicker').datepicker()
	.on('changeDate', function(ev){
		$(this).datepicker('hide'); 
	});

	// this works 
	// $('.input-datepicker').datepicker()

});



