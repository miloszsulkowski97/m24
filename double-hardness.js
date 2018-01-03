var hardness;

function setHardness() {


	hardness = $('.group_17 td:eq(1)').text();
	hardness = hardness.replace(/[^\/\d]/g, '');
	hardness = hardness.split("");

	$.each(hardness, function(k, v){
		var color = $('.twardosc li:nth-child('+v+')').css("border-color");

		$('.twardosc li:nth-child('+v+')').addClass('selected');
		$('.elementy li:nth-child('+v+')').css('background-color', color);

		if ($('.wybrany li:nth-child('+v+')').hasClass('selected'))
			$('.wybrany li:nth-child('+v+')').append('<i class="icon icon-2x icon-chevron-up"></i>');
	});
	if ($('.wybrany .selected i').length > 1) {
		$('.info_2').show();
	}
};
