$(document).ready(function(){

	// ==============================================================*/
	// Remove class for other funtions to check if document is ready
	// ==============================================================*/

	$('body').removeClass('loading');

	// ==============================================================*/
	// Menu visibility
	// ==============================================================*/

	$('.menu-button').on('click', function(e){
		e.preventDefault();
		$('body, .navigation, .main-container').toggleClass('open');
	});
	$('.main-container, .navigation a').on('click', function(e){
		$('body, .navigation, .main-container').removeClass('open');
	});

	// ==============================================================*/
	// Range slider configurations
	// ==============================================================*/

	var $document = $(document),
			$selector = '[data-range-slider]',
			$element = $($selector);

	// For ie8 support
	var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

	// Functionality to retrienve value feedback
	function valueOutput(element) {
			var value = element.value;
	}

	$element.rangeslider({

			// Feature detection the default is `true`.
			// Set this to `false` if you want to use
			// the polyfill also in Browsers which support
			// the native <input type="range"> element.
			polyfill: false,

			// Default CSS classes
			rangeClass: 'range-slider',
			disabledClass: 'range-slider-disabled',
			horizontalClass: 'range-slider-horizontal',
			verticalClass: 'range-slider-vertical',
			fillClass: 'range-slider-fill',
			handleClass: 'range-slider-handle',

			// Callback function
			onInit: function() {    

					// Sets the value and adds the arrows to the range handle
					$('.range-slider-handle').attr('data-value', '70').append('<span class="arrows"></span>');

					// If the starting value is between the min and max, 
					// make the .range-content-block active
					$('.range-content-block').each(function(e){

							$this = $(this);

							if ( ( 70 > $this.data('value-min') ) && ( 70 < $this.data('value-max')) ) {
									
									$this.addClass('active');

							} 

					});

			},

			// Callback function for when the range slides
			onSlide: function(position, value) {
					
					// Range object, range values and range value containers
					var $currentRange = this.$element, // Current active range
							$currentRangeValue = this.value; // Current active ranges value
							$newHomeValueContainer = $currentRange.closest('.range-input-container').find($('.new-home-detail .value-amount')), // New home value container
							$oldHomeValueContainer = $currentRange.closest('.range-input-container').find($('.old-home-detail .value-amount')), // Old home value container
							$ratingContainer = $currentRange.closest('.range-input-container').find($('.value-rating')); // HERS rating value
					
					// Updates the value within the range inner circle
					this.$element.next('.range-slider').find('.range-slider-handle').attr('data-value', value);

					// Updates the value within the header in the range content div
					$ratingContainer.text(value);

					// Calculates and updates the values of savings within the range content div if
					// the value/score is "better then" 100. The lower the "score" the better
					if ( $currentRangeValue < 100) {

					 var $newHomeCost = 2335, // New home "starting cost"
							 $newHomeScore = value*17.73247, // New home score
							 $newHomeValue = $newHomeCost - $newHomeScore, // New home cost minus scor
							 $newHomeValue = '$' + $newHomeValue.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); // Convert value into USD currency

							 $oldHomeValueContainer.text('$0'); // Sets old home value to $0
							 $newHomeValueContainer.text($newHomeValue);

					} else {

					 var $oldHomeCost = 125, // Old home "starting cost"
							 $oldHomeScore = value*7.73247, // Old home score
							 $oldHomeValue = $oldHomeCost - $oldHomeScore, // Old home cost minus score
							 $oldHomeValue = '$' + $oldHomeValue.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); // Convert value into USD currency

							$newHomeValueContainer.text('$0'); // Sets new home value to $0
							$oldHomeValueContainer.text($oldHomeValue); // Updates value

					}

					// Disables/enables the text and the beginning of the ranges
					if ( $currentRangeValue < 10) {

						 this.$element.next('.range-slider').addClass('disable-begin-status');

					} else {
								
						 this.$element.next('.range-slider').removeClass('disable-begin-status');

					}

					// Disables/enables the text and the end of the ranges
					if ( $currentRangeValue > 140) {

						 this.$element.next('.range-slider').addClass('disable-end-status');

					} else {
								
						 this.$element.next('.range-slider').removeClass('disable-end-status');

					}

					// Removes the active class from all content wrapper pertaining 
					// the the range input being used
					$currentRange.closest('.range-input-container').find($('.range-content-wrapper .content-block')).removeClass('active');

					// Reset all pie charts to 100% or 0%
					$currentRange.closest('.range-input-container').find($('.pie-chart')).each(function() {
							
						var $this = $(this),
								$circle = $this.find('circle');

						$circle.attr("stroke-dasharray", "100 100");

					});

					// Reset all bar charts to 100% or 0%
					$currentRange.closest('.range-input-container').find($('.bar-chart')).each(function() {

						var $this = $(this),
								$value = $this.data('chart-value'),
								$rectangle = $this.find('rect');
								$valueText = $this.find('.bar-value-text');
						
						$rectangle.attr({'width': '0%'});
						$valueText.css({'left': '0%'});

					});

					// Adds the active class from all content wrapper pertaining 
					// the the range input being used
					$('.range-content-block').each(function(e){

						$rangeContent = $(this);

						if ( ( $currentRangeValue > $rangeContent.data('value-min') ) && ( $currentRangeValue < $rangeContent.data('value-max')) ) {

							$currentRange.closest('.range-input-container').find($rangeContent).addClass('active');

							// Change the active content wrapper chart value to animate to value on .pie element
							$currentRange.closest('.range-input-container').find('.pie-chart').each(function() {
											
								var $this = $(this),
										$value = $this.data('chart-value'),
										$circle = $this.find('circle');
								
								$circle.attr("stroke-dasharray", $value + " 100");

							});

							// Change the active content wrapper chart value to animate to value on .pie element
							$currentRange.closest('.range-input-container').find('.bar-chart').each(function() {
											
								var $this = $(this),
										$value = $this.data('chart-value'),
										$rectangle = $this.find('rect');
										$valueText = $this.find('.bar-value-text');
								
								$rectangle.attr({'width': $value+'%'});
								$valueText.css({'left': $value+'%'});

							});

						} 

					});


			},

			// Callback function for when the range ends changing positions
			onSlideEnd: function(position, value) {

			}

	});

	// ==============================================================*/
	// Chart generation
	// ==============================================================*/

	function createSvgEl(tag) {

			return document.createElementNS('http://www.w3.org/2000/svg', tag);

	}

	$('.pie-chart').each(function() {

		var $this = $(this),
				value = $this.data('chart-value');

		var svg = createSvgEl('svg');
		var circle = createSvgEl('circle');
		var title = createSvgEl('title');

		circle.setAttribute("r", "16");
		circle.setAttribute("cx", "16");
		circle.setAttribute("cy", "16");
		circle.setAttribute("stroke-dasharray", "100 100");

		svg.setAttribute("viewBox", "0 0 32 32");
		svg.append(title);
		svg.append(circle);
		$this.append(svg);

		setTimeout(function(){ 
			circle.setAttribute("stroke-dasharray", value + " 100");
		}, 100);

	});

	$('.bar-chart').each(function() {
		
		var $this = $(this),
				value = $this.data('chart-value'),
				valueText = $this.find('.bar-value-text');

		var svg = createSvgEl('svg');
		var rectangle = createSvgEl('rect');
		var title = createSvgEl('title');
		
		rectangle.setAttribute("height", "100%");
		rectangle.setAttribute("width", "0");
		
		svg.append(title);
		svg.append(rectangle);
		$this.append(svg);
		
		setTimeout(function(){ 
			rectangle.setAttribute("width", value+'%' );
			valueText.css({'left': value+'%'});
		}, 100);

	});

	// ==============================================================*/
	// Chart animation when scrolled to via scrollmonitor.js
	// ==============================================================*/

	var watchers = $('.bar').map(function(i, element) {

		var watcher = scrollMonitor.create( element );

		watcher.lock();

		if (watcher.isInViewport) {

			$('.bar').each(function() {

				$this = $(this);
				var value = $this.data('chart-value');
				var cost = $this.find('.cost');
				var rectangle = $this.find('svg rect');
				setTimeout(function(){
					rectangle.attr({'width': value+'%'});
					cost.css({'left': value+'%'});
				}, 250);
			});
						
		} else if (watcher.isBelowViewport) {

			watcher.fullyEnterViewport(function() {

				$('.bar').each(function() {
					$this = $(this);
					var value = $this.data('chart-value');
					var cost = $this.find('.cost');
					var rectangle = $this.find('svg rect');
					setTimeout(function(){
						rectangle.attr({'width': value+'%'});
						cost.css({'left': value+'%'});
					}, 250);
				});

			});

			watcher.exitViewport(function() {

				$('.bar').each(function() {
					$this = $(this);
					var value = $this.data('chart-value');
					var cost = $this.find('.cost');
					var rectangle = $this.find('svg rect');
						rectangle.attr({'width': '0%'});
						cost.css({'left': '0%'});
				});

			});

		} 

		return watcher;

	});

	// ==============================================================*/
	// Features Carousels
	// ==============================================================*/

	$('.features-section .slides-wrapper').slick({
		slide: '.slide',
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.features-section .slides-navigation-wrapper ul'
	});

	$('.features-section .slides-navigation-wrapper ul').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.features-section .slides-wrapper',
	  dots: false,
	  focusOnSelect: true
	});

	// ==============================================================*/
	// Glossary Carousel
	// ==============================================================*/

	$('.glossary-section .slides-wrapper').slick({
		slide: '.slide',
		arrows: true,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

	// ==============================================================*/
	// Sections toggles
	// ==============================================================*/

	$('.toggle-section').first().addClass('active-section');

	scrollToLinks();

	var $sections = $('.section:visible'), 
		$nav = $('.navigation');

	$(window).on('scroll', function () {

		if ( !$('body').hasClass('moving') ) {

			var $currentPosition = $(this).scrollTop();

			$sections.each(function() {
				
				var $top = $(this).offset().top - 20,
					$bottom = $top + $(this).outerHeight();

				if ($currentPosition >= $top && $currentPosition <= $bottom) {
					
					$sections.removeClass('current-section');
					$(this).addClass('current-section');

					$nav.find('a').removeClass('current-nav');
					$nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current-nav');
				}
			});
		}
	});

});
//# sourceMappingURL=maps/scripts.js.map
