function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view/question";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.question = Ti.UI.createScrollView({
        width: "100%",
        top: "100dp",
        visible: false,
        bottom: "0dp",
        id: "question"
    });
    $.__views.question && $.addTopLevelView($.__views.question);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "90dp",
        bottom: "0dp",
        width: "100%",
        backgroundColor: "#EEE",
        id: "__alloyId4"
    });
    $.__views.question.add($.__views.__alloyId4);
    $.__views.text = Ti.UI.createTextField({
        top: "10dp",
        bottom: "10dp",
        left: "22%",
        width: "56%",
        hintText: "Haz una pregunta",
        backgroundColor: "#EEE",
        tintColor: "black",
        color: "black",
        font: {
            fontSize: "25dp",
            fontFamily: "Aracne Regular"
        },
        id: "text"
    });
    $.__views.__alloyId4.add($.__views.text);
    $.__views.send = Ti.UI.createButton({
        right: "0",
        height: "100%",
        width: "20%",
        backgroundColor: "black",
        color: "white",
        font: {
            fontSize: "30dp",
            fontFamily: "Aracne Regular"
        },
        id: "send",
        title: "Enviar"
    });
    $.__views.__alloyId4.add($.__views.send);
    $.__views.guess = Ti.UI.createButton({
        left: "0",
        height: "100%",
        width: "20%",
        backgroundColor: "black",
        color: "white",
        font: {
            fontSize: "30dp",
            fontFamily: "Aracne Regular"
        },
        id: "guess",
        title: "Adivinar"
    });
    $.__views.__alloyId4.add($.__views.guess);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.show = function() {
        return $.question.visible = true;
    };
    exports.hide = function() {
        return $.question.visible = false;
    };
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;