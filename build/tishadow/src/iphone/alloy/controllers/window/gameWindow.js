function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window/gameWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.gameWindow = __ui.createWindow({
        backgroundColor: "white",
        id: "gameWindow"
    });
    $.__views.gameWindow && $.addTopLevelView($.__views.gameWindow);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#DDD",
        width: "80%",
        height: "100dp",
        top: "50dp",
        id: "__alloyId5"
    });
    $.__views.gameWindow.add($.__views.__alloyId5);
    $.__views.notificaton = Ti.UI.createLabel({
        font: {
            fontSize: "30dp",
            fontFamily: "Aracne Regular"
        },
        text: "notificaton",
        id: "notificaton"
    });
    $.__views.__alloyId5.add($.__views.notificaton);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "500dp",
        height: "200dp",
        backgroundColor: "white",
        top: "200dp",
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.gameWindow.add($.__views.__alloyId6);
    $.__views.card1 = Ti.UI.createImageView({
        width: "140dp",
        height: "200dp",
        borderColor: "black",
        borderWidth: 1,
        image: __p.file("images/card1.png"),
        id: "card1"
    });
    $.__views.__alloyId6.add($.__views.card1);
    $.__views.card2 = Ti.UI.createImageView({
        width: "140dp",
        height: "200dp",
        borderColor: "black",
        borderWidth: 1,
        left: "40dp",
        image: __p.file("images/card2.png"),
        id: "card2"
    });
    $.__views.__alloyId6.add($.__views.card2);
    $.__views.card3 = Ti.UI.createImageView({
        width: "140dp",
        height: "200dp",
        borderColor: "black",
        borderWidth: 1,
        left: "40dp",
        image: __p.file("images/card3.png"),
        id: "card3"
    });
    $.__views.__alloyId6.add($.__views.card3);
    $.__views.answer = Alloy.createController("view/answer", {
        id: "answer",
        __parentSymbol: $.__views.gameWindow
    });
    $.__views.answer.setParent($.__views.gameWindow);
    $.__views.question = Alloy.createController("view/question", {
        id: "question",
        __parentSymbol: $.__views.gameWindow
    });
    $.__views.question.setParent($.__views.gameWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, drawCards, mano;
    args = arguments[0] || {};
    mano = args.data.oponente.mano;
    drawCards = function() {
        $.card1.image = __p.file("images/mazo/nouns/" + mano[0] + ".png");
        $.card2.image = __p.file("images/mazo/verbs/" + mano[1] + ".png");
        return $.card3.image = __p.file("images/mazo/nouns/" + mano[2] + ".png");
    };
    if (args.data.start) {
        $.notificaton.text = "Tu empiezas, pregunta!";
        $.question.show();
    } else {
        $.notificaton.text = "Tu respondes, espera a tu oponente";
        $.answer.show();
        drawCards();
    }
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;