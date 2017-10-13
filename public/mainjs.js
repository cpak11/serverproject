$(function(){

	var frameintro = $('#frameintro');
	var letteranimate = $('.letteranimate');

	// frameintro.on('mouseenter', '.letteranimate', function(){
	// 	console.log(letteranimate:nth-child())
	// 	$(this).css('display','inline-block').addClass('triggerletteranimate');
	// });
	// frameintro.on('mouseleave', '.letteranimate', function(){
	// 	$(this).removeClass('triggerletteranimate');
	// });

	$('.ih11').mouseenter(function(){
		$(this).css('display','inline-block').addClass('triggerletteranimate');
		$('.ih1').slideDown(100);
	})
	$('.ih11').mouseleave(function(){
		$(this).removeClass('triggerletteranimate');
		$('.ih1').slideUp('fast');
	})

	$('.ih22').mouseenter(function(){
		$(this).css('display','inline-block').addClass('triggerletteranimate');
		$('.ih2').slideDown(100);
	})
	$('.ih22').mouseleave(function(){
		$(this).removeClass('triggerletteranimate');
		$('.ih2').slideUp('fast');
	})

	$('.ih33').mouseenter(function(){
		$(this).css('display','inline-block').addClass('triggerletteranimate');
		$('.ih3').slideDown(100);
	})
	$('.ih33').mouseleave(function(){
		$(this).removeClass('triggerletteranimate');
		$('.ih3').slideUp('fast');
	})




})