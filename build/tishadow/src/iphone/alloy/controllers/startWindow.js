function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "startWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.startWindow = __ui.createWindow({
        backgroundColor: "white",
        id: "startWindow"
    });
    $.__views.startWindow && $.addTopLevelView($.__views.startWindow);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: "100dp",
            fontFamily: "Aracne Regular"
        },
        top: "130dp",
        color: "#DC0D47",
        id: "title",
        text: "Not Cat Pong"
    });
    $.__views.startWindow.add($.__views.title);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "500dp",
        height: "60dp",
        id: "__alloyId1"
    });
    $.__views.startWindow.add($.__views.__alloyId1);
    $.__views.nickname = Ti.UI.createTextField({
        hintText: "Usuario",
        color: "black",
        font: {
            fontFamily: "Aracne Regular",
            fontSize: "30dp"
        },
        left: 0,
        backgroundColor: "#EEE",
        height: "60dp",
        width: "250dp",
        textAlign: "center",
        id: "nickname"
    });
    $.__views.__alloyId1.add($.__views.nickname);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontFamily: "Aracne Regular",
            fontSize: "30dp"
        },
        right: 0,
        backgroundColor: "black",
        color: "white",
        height: "60dp",
        width: "150dp",
        textAlign: "center",
        text: "Iniciar",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    startGame ? $.__views.__alloyId2.addEventListener("click", startGame) : __defers["$.__views.__alloyId2!click!startGame"] = true;
    $.__views.notification = Ti.UI.createView({
        width: "100%",
        height: "100%",
        visible: false,
        id: "notification"
    });
    $.__views.startWindow.add($.__views.notification);
    $.__views.__alloyId3 = Ti.UI.createView({
        opacity: .5,
        backgroundColor: "black",
        id: "__alloyId3"
    });
    $.__views.notification.add($.__views.__alloyId3);
    $.__views.message = Ti.UI.createLabel({
        font: {
            fontFamily: "Aracne Regular",
            fontSize: "30dp"
        },
        text: "...",
        color: "white",
        id: "message"
    });
    $.__views.notification.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var showInstructions, socket, startGame;
    socket = Alloy.Globals.socket;
    socket.connect({
        init: function() {
            return $.title.color = "black";
        }
    });
    socket.on("nameResult", function(e) {
        if (!e.success) {
            $.message.text = e.message;
            $.notification.visible = true;
            return;
        }
        $.message.text = e.message;
        return $.notification.visible = true;
    });
    socket.on("reta", function(e) {
        Alloy.createController("window/gameWindow", e).getView().open();
        return $.notification.visible = false;
    });
    socket.on("notification", function(e) {
        $.message.text = e.message;
        return $.notification.visible = true;
    });
    showInstructions = function() {
        return Alloy.createController("instructionsWindow").getView().open();
    };
    startGame = function() {
        $.nickname.value || alert("Agrega tu nombre de usuario");
        return socket.emitter("addUser", {
            nickname: $.nickname.value
        });
    };
    $.startWindow.addEventListener("close", function() {
        return socket.disconnect();
    });
    __defers["$.__views.__alloyId2!click!startGame"] && $.__views.__alloyId2.addEventListener("click", startGame);
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;