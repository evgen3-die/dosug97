;(function () {

	var $slider = $('.product-slider');
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [];

	$slider.find($slider.selector + '__item').each(function (index) {
		var t = $(this);

		t.attr('data-gallery-index', index);

		items.push({
			src: t.attr('href'),
			w: 0,
			h: 0
		});

		t.on('click', function (e) {
			e.preventDefault();

			var t = $(this);

			var options = {
				index: +t.data('gallery-index')
			};

			// Initializes and opens PhotoSwipe
			var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

			gallery.listen('gettingData', function(index, item) {
				if (item.w < 1 || item.h < 1) { // unknown size
					var img = new Image();
					img.onload = function() { // will get size after load
						item.w = this.width; // set image width
						item.h = this.height; // set image height
						gallery.invalidateCurrItems(); // reinit Items
						gallery.updateSize(true); // reinit Items
					};
					img.src = item.src; // let's download image
				}
			});

			gallery.init();
		});
	});

	$slider.slick({
		infinite: false,
		slidesToShow: 3
	});



})();
