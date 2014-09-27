$(document).ready(function() {
	$("#myBlock").informer({
		model: blockModel,
		content: blockContent,
		type: blockType,
		start: 2,
		rotate: true,
		timeout: 10000,
		forward: false,
		randomStart: true,
		
		onCreate: function() {
			this.userVars.number = 10;
		},

		onPrev: function(args) {
			if (this.count >= this.userVars.number) {
				this.stop();
			}
		}
	});
	
	$('#next').click(function() {
		$("#myBlock").informer("stop");
		$("#myBlock").informer("next");
	});
	
	$('#prev').click(function() {
		$("#myBlock").informer("stop");
		$("#myBlock").informer("prev");
	});
});
