	var tag = document.createElement('script');

	// aminated wordplay, yo
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	

	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('vidja', {
			width: '360',
			height: '220',
			videoId: 'SjNM4eItNRA',
			origin: window.location,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	function onPlayerReady(event) {
		// autoplay unecessary..
		// event.target.playVideo();
	}

	var playedOnce = false;
	var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 16000);
			done = true;
			playedOnce = true;
		}
	}
	function stopVideo() {
		player.stopVideo();
	}

jQuery(document).ready(function($) {

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
	

	$('footer').mouseenter(function() {
		console.log('play plz?');
		if(!playedOnce) {
			player.playVideo();
		}
	});


	
});