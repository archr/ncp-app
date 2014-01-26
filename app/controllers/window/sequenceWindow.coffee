back = ->
	Alloy.createController('startWindow').getView().open()
	$.sequenceWindow.close()