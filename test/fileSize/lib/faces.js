var modes = {
	"b" : {
		eyes : "==",
		tongue : "  "
	},
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$",
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
	}
};

function other (options) {
	for (var mode in modes) {
		if (options[mode] === true) {
			return modes[mode];
		}
	}

	return {
		eyes : options.e,
		tongue : options.T
	};
}