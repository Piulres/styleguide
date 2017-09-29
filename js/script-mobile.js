$(document).on('click','#searchIcon',function() {
	var $search = $('#searchIcon');
	if ($search.hasClass('active')) {
		$search.removeClass('active');
		$('.show-searching').hide();
		$('.hide-searching').fadeIn();
	} else {
		$search.addClass('active');
		$('.hide-searching').hide();
		$('.show-searching').fadeIn();
		$('#searchTop').focus();

	}
});

$(document).on('click','#btnSideMenu',function() {
	$('#menu').css('left','-100%').show().animate({'left':'0%'});
	$(document.body).addClass('menu-open');
});

$(document).on('click','#btnCloseMenu',function() {
	$('#menu').animate({'left':'-100%'},function() { $('#menu').hide(); });
	$(document.body).removeClass('menu-open');
});