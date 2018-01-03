	var cmsList = getTipContent();

	$('.tip').each(function() {
		$(this).on( "mouseover", function(){
			getTipContent();
			addTipContent();

			if ($('.podpowiedz').length > 0) {
				$('.podpowiedz').removeClass('hidden');
			}

		});

		$(this).on( "mouseout", function() {
			$('.podpowiedz').addClass('hidden');
		});
		
	});

	function addTipContent() {

		getTipContent();

		$.each(cmsList, function(k, v) {
			if (v.link_rewrite == $('.tip').attr('data-tooltip') && $('.podpowiedz').length == 0) {
				$('.tip').after('<div class="podpowiedz">' + v.content + '</div>');
			}
		});
	}

	function getTipContent() {

		fetch('http://mirjan24.be/content/category/4-slownik-pojec', { 
			method: 'post', 
			headers: {
				'Authorization': 'Basic '+btoa('admin:admin'), 
				'Content-Type': 'application/x-www-form-urlencoded'
			}, 
			body: 'A=1&B=2'
		}).then(function(resp) {
			return resp.text().then(function(text) {
				cmsList = text;
			}).then(function() {
				cmsList = $.parseHTML(cmsList);
			}).then(function() {
				cmsList = $(cmsList).find('.json').text();
			}).then(function() {
				cmsList = JSON.parse(cmsList);
				return cmsList;
			});
		});

	}


// dynamic load content
function setTipContent() {

	var cmsContentId;
	$('.nav-tooltip.second').on('click', function() {
		cmsContentId = $(this).attr('data-id');
		
		$('#main-content').html($('#'+ cmsContentId +' .content-cms').text());

		$('.nav-tooltip.second').attr('data-id', $('.nav-tooltip.second').attr('data-id')-(-1));
		$('.nav-tooltip.first').attr('data-id', $('.nav-tooltip.first').attr('data-id')-(-1));

		navContent();
	});

	$('.nav-tooltip.first').on('click', function() {
		cmsContentId = $(this).attr('data-id');
		
		$('#main-content').html($('#'+ cmsContentId +' .content-cms').text());

		$('.nav-tooltip.second').attr('data-id', $('.nav-tooltip.second').attr('data-id')-1);
		$('.nav-tooltip.first').attr('data-id', $('.nav-tooltip.first').attr('data-id')-1);

		navContent();
	});

}

function navContent() {

	var cmstitleidfirst, cmstitleidsecond;

	cmstitleidfirst = $('.nav-tooltip.first').attr('data-id');
	cmstitleidsecond = $('.nav-tooltip.second').attr('data-id');

	$('.nav-tooltip.first').text($('#' + cmstitleidfirst + ' .cms-other-title').text());
	$('.nav-tooltip.second').text($('#' + cmstitleidsecond + ' .cms-other-title').text());

}

function hrefContent() {
	var otherid;
	$('.cms-page-other li').on('click', function() {
		otherid = $(this).attr('id');
		
		$('#main-content').attr('data-id', otherid);
		$('#main-content').html($('#' + otherid + ' .content-cms').text());

		$('.nav-tooltip.first').attr('data-id', otherid-1);
		$('.nav-tooltip.second').attr('data-id', otherid-(-1));

		navContent();
	});
}
