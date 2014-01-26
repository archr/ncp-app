function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "instructionsWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.instructionsWindow = __ui.createWindow({
        backgroundColor: "white",
        id: "instructionsWindow"
    });
    $.__views.instructionsWindow && $.addTopLevelView($.__views.instructionsWindow);
    showSequence ? $.__views.instructionsWindow.addEventListener("click", showSequence) : __defers["$.__views.instructionsWindow!click!showSequence"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "100dp",
            fontFamily: "Aracne Regular"
        },
        text: "Instrucciones",
        id: "__alloyId0"
    });
    $.__views.instructionsWindow.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var showSequence;
    showSequence = function() {
        return $.instructionsWindow.close();
    };
    __defers["$.__views.instructionsWindow!click!showSequence"] && $.__views.instructionsWindow.addEventListener("click", showSequence);
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;