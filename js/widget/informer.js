/*
	Informer Widget v0.0~dev
*/
$.widget("bs.informer", {
	options: {
		model: {},
		types: {},
		content: [],
		start: 0,
		randomStart: false,
		rotate: false,
		timeout: 20000,
		forward: true,
		
		onCreate: function() {},
		onFill: function() {},
		onStart: function() {},
		onNext: function() {},
		onPrev: function() {},
		onStop: function() {},
	},
	
	userVars: {},
	
	current: 0,
	timer: null,
	count: 0,
	
	_create: function() {
		var blockNumber =	this.options.randomStart ?
							Math.floor(Math.random() * this.options.content.length) : 
							this.options.start;
		
		this.current = blockNumber;
		
		var model = this.options.model;
		var newElement = null;
		var elementModel = null;
		
		for (name in model) {
			elementModel = this.options.type[model[name]];
			
			newElement = $(elementModel.template).addClass(elementModel.elementClass).addClass(name);
			
			this.element.append(newElement);
		}
		
		this.element.addClass("informer");
		this.fillInformer(blockNumber);
		
		if (this.options.rotate) this.start();
		
		this.options.onCreate.call(this);
	},
	
	fillInformer: function(blockNumber) {
		var model = this.options.model;
		var elementModel = null;
		
		for (name in model) {
			elementModel = this.options.type[model[name]];
			elementModel.fill.call(
				this.element.find("." + elementModel.elementClass +"."+name),
				this.options.content[blockNumber][name]
			);
		}
		
		this.count++;
		
		this.options.onFill.call(this, arguments);
	},
	
	start: function(timeout, forward) {
		timeout = typeof timeout != 'undefined' ? timeout : this.options.timeout;
		this.options.timeout = timeout;
		
		forward = typeof forward != 'undefined' ? forward : this.options.forward;
		this.options.forward = forward;
		
		this.options.rotate = true;
		
		this.timer = setTimeout(
			forward ?	this.next.bind(this) :
						this.prev.bind(this), timeout
		);
		
		this.options.onStart.call(this, arguments);
	},
	
	next: function() {
		this.current = this.current + 1 < this.options.content.length ? this.current + 1 : 0;
			
		this.fillInformer(this.current);
		
		this.options.onNext.call(this, arguments);
			
		if (this.options.rotate) {
			this.timer = setTimeout(this.next.bind(this), this.options.timeout);
		}
	},
	
	prev: function() {
		this.current = this.current < 1 ? this.options.content.length - 1 : this.current - 1;
			
		this.fillInformer(this.current);
		
		this.options.onPrev.call(this, arguments);
			
		if (this.options.rotate) {
			this.timer = setTimeout(this.prev.bind(this), this.options.timeout);
		}
	},
	
	stop: function() {
		clearTimeout(this.timer);
		this.options.rotate = false;
		
		this.options.onStop.call(this, arguments);
	}
});
