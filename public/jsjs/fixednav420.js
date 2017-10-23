$(function(){

	$('#frameadmin').hide();

	$('#fixednav420arrow').on('click', function(){
		$(this).children('svg').toggleClass('fn420arrowactive');
		$('#fixednav420').toggleClass('fn420active');
	});

	$('.adminlink').on('click', function(){
		$('#fixednav420admin').fadeToggle();
	});

	$('#toviewadmin').submit(function(e){
		e.preventDefault();
		var input = $('#pwpw').val();
		if(input === 'hellogoodbye'){
			$('#frameadmin').fadeIn(100);
			$('#fixednav420admin').fadeOut(500);
		} else {
			alert('Nope, not permitted access');
		}
	});

});