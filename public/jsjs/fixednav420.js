$(function(){

	$('#frameadmin').hide();

	$('#fixednav420arrow').on('click', function(){
		$(this).children('svg').toggleClass('fn420arrowactive');
		$('#fixednav420').toggleClass('fn420active');
	});

	$('.adminlink').on('click', function(){
		$('#fixednav420admin').fadeToggle();
	});

	if( $('#pwpw').val() === 'hellogoodbye' ){
		$('#frameadmin').show();
	}

});