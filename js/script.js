$( document ).ready(function() {
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
		
	$( ".toggle-page-1" ).click(function() {
	  $(".page-1").toggleClass( "display" );
	});

	$( ".toggle-page-2" ).click(function() {
	  $(".page-2").toggleClass( "display" );
	});

	$( ".toggle-page-3" ).click(function() {
	  $(".page-3").toggleClass( "display" );
	});

	$( ".toggle-page-4" ).click(function() {
	  $(".page-4").toggleClass( "display" );
	});
});