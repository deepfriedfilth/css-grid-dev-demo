jQuery(document).ready(function($) {

	// aminated wordplay, yo

	setTimeout(function() {


		// Homegrown... 
		//$('#displayProp').html('grid');

		var typed = new Typed('#displayProp', {
			strings: ['', 'display<span>:</span> <strong>grid</strong><span>;</span>'],
			typeSpeed: 100,
			smartBackspace: true
		});
	}, 300);

	var waypoints = $('code').waypoint(function(dir) {
        if(dir == 'down') {

        	var el = $('#'+$(this)[0].element.id);
        	var eld = '#'+el.find('div').attr('id');
        	var finalString = $(eld).html();

        	// if(!el.hasClass('html')) { // check if <code> has inner <div>
        		console.log('data-typed='+$(eld).attr('data-typed'));
	        	if($(eld).attr('data-typed') == 'false' && $(eld).attr('data-typing') == 'false') {// !$(eld).data('typed')
	        		$(eld).html(''); //reset content
	        		$(el).addClass('show');

		        	var typeThis = new Typed(eld, {
		        		strings: ['', finalString],
		        		typeSpeed: 200,
		        		onStart: function() {
		        			$(eld).attr('data-typing',true);
		        			console.log(eld+' has started being typed');
		        		},
		        		onComplete: function() {
		        			console.log(eld+' has been typeded');
		        			$(eld).attr('data-typing',false);
		        			$(eld).attr('data-typed',true);
		        			console.log('data-typed='+$(eld).attr('data-typed'));
		        			//$(eld).data('typed',true);
		        		}
		        	});
		        } else {
		        	console.log('already typed '+eld);
		        }
	    	// } else {
	    	// 	console.log('no inner divs, yo')
	    	// }
        }
      }, {
        offset: 200
      });
	

	
});