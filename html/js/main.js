jQuery(document).ready(function($) {

	// aminated wordplay, yo

	setTimeout(function() {


		// Homegrown... 
		//$('#displayProp').html('grid');

		var typed = new Typed('#displayProp', {
			strings: ['display<span>:</span>', 'display<span>:</span> <strong>grid</strong><span>;</span>'],
			typeSpeed: 100
		});
	}, 300);
	

	
});