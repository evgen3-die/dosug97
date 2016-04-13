(function () {
	var $advanced = $('.filters__row_advanced'),
		$buttonHide = $('.filters__hide-button'),
		$buttonShow = $('.filters__show-button');

	$buttonShow.on('click', function (e) {
		e.preventDefault();

		$advanced.slideDown("fast");
		$buttonShow.hide();
		$buttonHide.show();
	});

	$buttonHide.on('click', function (e) {
		e.preventDefault();

		$advanced.slideUp("fast");
		$buttonHide.hide();
		$buttonShow.show();
	});

})();
