#Informer Widget v0.0~dev

Informer Widget is a widget based on jQuery-UI. It helps to create infromers using model, type and content.

##Example

To create a simple informer you need:

* Create an informer model.
```
var blockModel = {
	header: "header",
	photo: "image",
	description: "text"
};
```
* Define type of content. You can set template and fill-function.
```
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
```
* Set some content.
```
var blockContent = [
	{
		header:	"Lambda-class T-4a shuttle",
		photo:	{	
			src: "img/1.png",
			alt: "Lambda-class T-4a shuttle (Imperial Shuttle)"
		},
		description: "The Lambda-class T-4a ... individuals."
	},
	{
		header: "Imperial II-class Star Destroyer",
		photo: {
			src: "img/2.png",
			alt: "Imperial II-class Star Destroyer (Imperial Star Destroyer)"
		},
		description: "The Imperial II-class Star Destroyer, also known as ... Star Destroyer."
	}
];
```
* Add attach widget to element.
```
$("#myBlock").informer({
	model: blockModel,
	content: blockContent,
	type: blockType,
	rotate: true,
	timeout: 10000,
});
```
JS-file with script of Informer widget is js/widget/informer.js
