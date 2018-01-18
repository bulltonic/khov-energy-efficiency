// Scroll to links that don't have URL

function scrollToLinks () {
	
	$('a[href*=\\#]:not([href=\\#])').on("click", function(e) {
		
		e.preventDefault();
		
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				// window.location.hash=$(this).attr('href');
			}
		}

	});

}