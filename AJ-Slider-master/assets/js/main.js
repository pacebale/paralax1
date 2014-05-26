jQuery(document).ready(function($) {
	$('header .menu').click(function(){
		$('.mainnav ul').slideToggle(250);
	});
	
	$('.image-switch').mouseenter(function(){
		$(this).find('.act').fadeIn(500);
	});
	$('.image-switch').mouseleave(function(){
		$(this).find('.act').fadeOut(500);
	});
	
	// $('a#inline').fancybox({
	// 	'hideOnContentClick': true
	// });
	
	var ie = getInternetExplorerVersion();
	
	if(ie <= 7 && ie > 0){
		$('.slider').empty().addClass('ie-replace');
	}
	
	$('.nimble-portfolio-item').mouseenter(function(){
		$(this).find('.overlay').stop().animate({"bottom": "0px"}, 500);
	});
	$('.nimble-portfolio-item').mouseleave(function(){
		$(this).find('.overlay').stop().animate({"bottom": "-230px"}, 500);
	});
});


jQuery(window).load(function(){
	(function($) {
		var ie = getInternetExplorerVersion();
		if(ie > 7 || ie < 0){
			if($('.slider').length > 0){
				$('.slider').fractionSlider({
					'fullWidth': 			true,
					'responsive':           true,
					'dimensions':           '1000,400'
				});
			}
			
			if($('.direction-slider').length > 0){
				$('.direction-slider').fractionSlider();
			}
			
			if($('.bg-slider').length > 0){
				$('.bg-slider').fractionSlider({
					'backgroundAnimation': 			true,
					'backgroundX': 250,
					'backgroundY': 100
				});
			}
			
			if($('.step-slider').length > 0){
				$('.step-slider').fractionSlider();
	 		}
		}
	})(jQuery);
});

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}



