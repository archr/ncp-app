var callbacks, disconnect, io, socket;

io = __p.require("socket.io");

socket = null;

callbacks = {};

exports.emitter = function(name, data) {
    if (socket) return socket.emit(name, data);
};

exports.on = function(name, callback) {
    if (socket) return socket.on(name, callback);
};

exports.connect = function(callback) {
    socket && disconnect();
    socket = io.connect("http://172.200.6.41:4000");
    return socket.on("init", function(e) {
        return callback.init(e);
    });
};

exports.disconnect = disconnect = function() {
    __log.info("disconnect");
    if (socket) return socket.disconnect();
};