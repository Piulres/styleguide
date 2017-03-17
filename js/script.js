$( document ).ready(function() {
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
		
	$( ".toggle-page-1, .toggle-page-2, .toggle-page-3, .toggle-page-4" ).click(function() {
		$(this).toggleClass('active');
	});

});