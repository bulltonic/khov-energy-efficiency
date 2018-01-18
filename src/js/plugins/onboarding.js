/**
 * Onboarding process
 */

function onboarding(options){

	// Plugin default settings
    var settings = $.extend({
        start: '1'
    }, options );
	
	// Onboarding DOM element with attribute data-onboard
	var $onboardingElement = $('div[data-onboard]');

	// Loop through each "onboading" element the largest/last step by data step value
	var highest = 0,
		step;

	$onboardingElement.each( function(i,v) {
		
		step = parseInt($(this).data('step'));

		if (step > highest) {
			highest = step;
		}

	});

	// If Onboarding DOM element exists
	if ( $onboardingElement.length ) {

		// Sets the current step to either the default settings or over ride it on init of the plugin
		var $currentStep = settings.start;

		// Adds active step to the starting point and declares it as the official "initial step"
		$('div[data-step="'+settings.start+'"]').addClass('active-step initial-step');
		
		// Creates the instance of the onboarding overlay and the instructions
		$('.main').append('<div class="onboarding-instruction"><h2>Step'+$('.active-step').data('step')+'</h2><div class="step-instructions"><p>'+$('.active-step').data('onboard')+'</p></div><div class="step-controls"><a href="#" class="previous-button">Previous</a><a href="#" class="next-button">Next</a><a href="#" class="finished-button">Finished</a></div><a href="#" class="close-button">Close</a></div><div class="onboarding-overlay"></div>');

		// Adds active onboading to the body to display the proper styles with the previous button being hidden at the beginning
		$('body').addClass('active-onboarding disable-previous');

		// Adds a class to the last step to help determine the end
		$('div[data-step="'+highest+'"]').addClass('last-step');

		// Position the onboading instruction to the active step
		$activeOffset = $('.active-step').offset();
		$activeHeight = $('.active-step').outerHeight();
		$activeWidth = $('.active-step').width();

		$('.onboarding-instruction').css({
			'top': $activeOffset.top + $activeHeight,
			'left': $activeOffset.left
		})

	}

	$(document).on('click', '.next-button', function(e){
		
		e.preventDefault();

		// Determine the current and next step by adding 1
		var $currentStep = parseInt($('.active-step').data('step')),
			$nextStep = $currentStep + 1;
		
		// Remove initial step as once next is clicked you can no longer be there
		$('body').removeClass('initial-step');

		// Remove active step from the "currently" active step
		$onboardingElement.removeClass('active-step');

		// Add active step to the next step
		$('div[data-step="'+$nextStep+'"]').addClass('active-step');

		// Change the onboading instructions based on the data of the current step
		$('.onboarding-instruction h2').text('Step '+$('.active-step').data('step'));
		$('.onboarding-instruction .step-instructions p').text($('.active-step').data('onboard'));
		
		// Disable next button if the next step is the last step
		if( $('div[data-step="'+$nextStep+'"]').hasClass('last-step') ) {

			$('body').addClass('disable-next');

		};

		// Enable previous button once past the initial step
		$('body').removeClass('disable-previous');

		// Position the onboading instruction to the active step
		var $activeOffset = $('.active-step').offset(),
			$activeHeight = $('.active-step').outerHeight(),
			$activeWidth = $('.active-step').width();

		$('.onboarding-instruction').css({
			'top': $activeOffset.top + $activeHeight,
			'left': $activeOffset.left
		})


	});

	$(document).on('click', '.previous-button', function(e){
		
		e.preventDefault();

		// Determine the current and previous step by subtracting 1
		var $currentStep = parseInt($('.active-step').data('step')),
			$previousStep = $currentStep - 1;

		// Remove the final step as once previous is clicked you can no longer be there
		$('body').removeClass('disable-next final-step');

		// Remove active step from the "currently" active step
		$onboardingElement.removeClass('active-step');

		// Add active step to the previous step
		$('div[data-step="'+$previousStep+'"]').addClass('active-step');

		// Change the onboading instructions based on the data of the current step
		$('.onboarding-instruction h2').text('Step '+$('.active-step').data('step'));
		$('.onboarding-instruction .step-instructions p').text($('.active-step').data('onboard'));

		if( $('div[data-step="'+$previousStep+'"]').hasClass('initial-step') ) {
			
			$('body').addClass('disable-previous');

		}
		
		// Position the onboading instruction to the active step
		var $activeOffset = $('.active-step').offset(),
			$activeHeight = $('.active-step').outerHeight(),
			$activeWidth = $('.active-step').width();

		$('.onboarding-instruction').css({
			'top': $activeOffset.top + $activeHeight,
			'left': $activeOffset.left
		})
		
	});

	// Removes onboading elements and styles to go along with it
	$(document).on('click', '.finished-button, .close-button', function(e){

		$('.onboarding-instruction').remove();

		$onboardingElement.removeClass('active-step last-step');

		$('body').removeClass('active-onboarding');

		setTimeout(function(){
			$('.onboarding-overlay').remove();
		}, 1000);

	});
}