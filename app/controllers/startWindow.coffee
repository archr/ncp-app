socket = Alloy.Globals.socket

socket.connect 
	init: (e) -> 
		$.title.color = "black"

socket.on 'nameResult', (e) ->
	unless e.success
		$.message.text = e.message
		$.notification.visible = true
		return 

	$.message.text = e.message
	$.notification.visible = true

socket.on 'reta', (e) ->
	Alloy.createController('window/gameWindow', e).getView().open()
	$.notification.visible = false	


socket.on 'notification', (e) ->
	$.message.text = e.message
	$.notification.visible = true

showInstructions = ->
	Alloy.createController('instructionsWindow').getView().open()

startGame = ->
	unless $.nickname.value
		alert('Agrega tu nombre de usuario')

	socket.emitter 'addUser', {nickname: $.nickname.value}

$.startWindow.addEventListener 'close', ->
	socket.disconnect()