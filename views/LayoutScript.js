Aria.tplScriptDefinition({
	$classpath : "views.LayoutScript",
	$prototype : {
		onModuleEvent : function (evt) {
			if (evt.name === "stateChange") {
				this.$refresh();
			}
		},

		onModuleEvent : function (evt) {
			if (evt.name === "stateChange") {
				this.$refresh();
			}
		}
	}
});