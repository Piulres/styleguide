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

    // Loader Page

    // Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myLoader");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

});