$( document ).ready(function() {
	
	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	// Popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
	
	// datepicker
	$('.input-datepicker').datepicker()
	.on('changeDate', function(ev){
		$(this).datepicker('hide'); 
	});

	// this works 
	// $('.input-datepicker').datepicker()

	$('.esqueceu').on('click', function(e) {
      $('.modal-content').toggleClass("display"); //you can list several class names 
      e.preventDefault();
    });

    $('.cancel').on('click', function(e) {
      $('.modal-content').toggleClass("display"); //you can list several class names 
      e.preventDefault();
    });

});



