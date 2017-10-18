$(function(){

	var frameintro = $('#frameintro');
	var letteranimate = $('.letteranimate');

	
	$('.ih11').mouseenter(function(){
		$(this).stop().css('display','inline-block').addClass('triggerletteranimate');
		$('.whitefilter').stop().fadeIn();
		$('.ih1').stop().slideDown(100);
	})
	$('.ih11').mouseleave(function(){
		$(this).stop().removeClass('triggerletteranimate');
		$('.whitefilter').stop().fadeOut(100);
		$('.ih1').stop().slideUp('fast');
	})

	$('.ih22').mouseenter(function(){
		$(this).stop().css('display','inline-block').addClass('triggerletteranimate');
		$('.whitefilter').stop().fadeIn(100);
		$('.ih2').stop().slideDown(100);
	})
	$('.ih22').mouseleave(function(){
		$(this).stop().removeClass('triggerletteranimate');
		$('.whitefilter').stop().fadeOut(100);
		$('.ih2').stop().slideUp('fast');
	})

	$('.ih33').mouseenter(function(){
		$(this).stop().css('display','inline-block').addClass('triggerletteranimate');
		$('.whitefilter').stop().fadeIn(100);
		$('.ih3').stop().slideDown(100);
	})
	$('.ih33').mouseleave(function(){
		$(this).stop().removeClass('triggerletteranimate');
		$('.whitefilter').stop().fadeOut(100);
		$('.ih3').stop().slideUp('fast');
	})


	$('#menuactivate').click(function(){
		$('#fixednav').toggleClass('class2act');
	});



	var servicedd = $('#scheduledevents dd');

	servicedd.hide();
	$('#scheduledevents dt').on('click', function(){
		$(this).next('dd').slideToggle(100);
	});



	$('.donate').on('click', function(e){
		$('#donatemodal').fadeIn();
		// if(e.currentTarget != $('#donatemodal')){
		// 	$('#donatemodal').fadeOut();
		// }
	});
	

});