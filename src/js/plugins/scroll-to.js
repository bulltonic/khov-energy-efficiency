// Scroll to links that don't have URL

function scrollToLinks() {
	
	$('.navigation a[href*=\\#]:not([href=\\#])').on("click", function(e) {
		
		e.preventDefault();
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			
			var target = $(this.hash);
			
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			if (target.length) {

				$('body').addClass('moving');
				
				if ( target.hasClass('toggle-section') ) {
					$('.toggle-section').removeClass('active-section');
					target.addClass('active-section');
				}

				$('.section').removeClass('current-section');
				target.addClass('current-section');
				
				$('html,body').animate({
					
					scrollTop: target.offset().top

				}, 1000, function() {
				    
				    $('body').removeClass('moving');
				    
				 });

				$('.navigation a').removeClass('current-nav');
				$(this).addClass('current-nav');

				
				// window.location.hash=$(this).attr('href');
			}
		}

	});

}