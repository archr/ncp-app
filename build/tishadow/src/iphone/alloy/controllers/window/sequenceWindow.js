function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window/sequenceWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sequenceWindow = __ui.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "sequenceWindow"
    });
    $.__views.sequenceWindow && $.addTopLevelView($.__views.sequenceWindow);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: "700dp",
        height: "300dp",
        backgroundColor: "white",
        top: "100dp",
        layout: "horizontal",
        id: "__alloyId7"
    });
    $.__views.sequenceWindow.add($.__views.__alloyId7);
    $.__views.card1 = Ti.UI.createImageView({
        width: "200dp",
        height: "300dp",
        backgroundColor: "black",
        id: "card1"
    });
    $.__views.__alloyId7.add($.__views.card1);
    $.__views.card2 = Ti.UI.createImageView({
        width: "200dp",
        height: "300dp",
        backgroundColor: "black",
        left: "50dp",
        id: "card2"
    });
    $.__views.__alloyId7.add($.__views.card2);
    $.__views.card3 = Ti.UI.createImageView({
        width: "200dp",
        height: "300dp",
        backgroundColor: "black",
        left: "50dp",
        id: "card3"
    });
    $.__views.__alloyId7.add($.__views.card3);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "60dp",
            fontFamily: "Aracne Regular"
        },
        top: "50dp",
        text: "¿Qué tan raro es?",
        id: "__alloyId8"
    });
    $.__views.sequenceWindow.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: "50px",
        width: "440px",
        height: "80px",
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.sequenceWindow.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        height: "80dp",
        width: "80dp",
        backgroundColor: "black",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        height: "80dp",
        width: "80dp",
        backgroundColor: "black",
        left: "40dp",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        height: "80dp",
        width: "80dp",
        backgroundColor: "black",
        left: "40dp",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        height: "80dp",
        width: "80dp",
        backgroundColor: "black",
        left: "40dp",
        id: "__alloyId13"
    });
    $.__views.__alloyId9.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "30dp",
            fontFamily: "Aracne Regular"
        },
        top: "80dp",
        left: "30dp",
        text: "Regresar",
        id: "__alloyId14"
    });
    $.__views.sequenceWindow.add($.__views.__alloyId14);
    back ? $.__views.__alloyId14.addEventListener("click", back) : __defers["$.__views.__alloyId14!click!back"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var back;
    back = function() {
        Alloy.createController("startWindow").getView().open();
        return $.sequenceWindow.close();
    };
    __defers["$.__views.__alloyId14!click!back"] && $.__views.__alloyId14.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;