io = require 'socket.io'
socket = null
callbacks = {}

exports.emitter = (name, data) ->
	socket.emit name, data if socket


exports.on = (name, callback) ->
	socket.on(name, callback) if socket


exports.connect = (callback) ->
	if socket
		disconnect()

	socket = io.connect("http://172.200.6.41:4000")

	socket.on 'init', (e) -> callback.init(e)

exports.disconnect = disconnect = ->
	Ti.API.info('disconnect')
	socket.disconnect() if socket