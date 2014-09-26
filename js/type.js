var blockType = {
	header: {
		elementClass: 'informer-header',
		template: "<h3 />",
		fill: function (header) {
			$(this).html(header);
		}	
	},
	text: {
		elementClass: 'informer-text',
		template: "<div />",
		fill: function(text) {
			$(this).html(text);
		}
	},
	image: {
		elementClass: 'informer-image',
		template: "<div><img /></div>",
		fill: function(image) {
			$(this).find("img").attr("src", image.src);
			$(this).find("img").attr("alt", image.alt);
		}
	}
};