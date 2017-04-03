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

	
	// modal login user

 	$('.esqueceu').on('click', function(e) {
		$('.modal-content.modal-login').addClass("display");
		$('.modal-content.modal-forgot').removeClass("display");
		e.preventDefault();
    });

    $('.confirmar').on('click', function(e) {
		$('.modal-content.modal-forgot').addClass("display");
		$('.modal-content.modal-verify').removeClass("display");
		e.preventDefault();
    });

    $('.verificar').on('click', function(e) {
		$('.modal-content.modal-verify').addClass("display");
		$('.modal-content.modal-login').removeClass("display");
		e.preventDefault();
    });

    $('.cancelar').on('click', function(e) {
   		$('#previewModal').modal('hide');
   		e.preventDefault();
    });

    $('.modal-click').on('click', function(e) {
		$('.modal-content.modal-forgot').addClass("display");
		$('.modal-content.modal-verify').addClass("display");
		$('.modal-content.modal-login').removeClass("display");
		e.preventDefault();
    });

});