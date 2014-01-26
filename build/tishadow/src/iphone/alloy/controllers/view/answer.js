function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view/answer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.answer = Ti.UI.createView({
        width: "660dp",
        height: "60dp",
        bottom: "160dp",
        layout: "horizontal",
        visible: false,
        id: "answer"
    });
    $.__views.answer && $.addTopLevelView($.__views.answer);
    $.__views.yes = Ti.UI.createButton({
        width: "200dp",
        height: "60dp",
        backgroundColor: "black",
        color: "white",
        font: {
            fontSize: "40dp",
            fontFamily: "Aracne Regular"
        },
        id: "yes",
        title: "Si"
    });
    $.__views.answer.add($.__views.yes);
    $.__views.no = Ti.UI.createButton({
        width: "200dp",
        height: "60dp",
        backgroundColor: "black",
        color: "white",
        font: {
            fontSize: "40dp",
            fontFamily: "Aracne Regular"
        },
        left: "30dp",
        id: "no",
        title: "No"
    });
    $.__views.answer.add($.__views.no);
    $.__views.maybe = Ti.UI.createButton({
        width: "200dp",
        height: "60dp",
        backgroundColor: "black",
        color: "white",
        font: {
            fontSize: "40dp",
            fontFamily: "Aracne Regular"
        },
        left: "30dp",
        id: "maybe",
        title: "Tal vez"
    });
    $.__views.answer.add($.__views.maybe);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.show = function() {
        return $.answer.visible = true;
    };
    exports.hide = function() {
        return $.answer.visible = false;
    };
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;