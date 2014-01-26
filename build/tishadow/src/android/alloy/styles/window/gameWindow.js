module.exports = [ {
    isApi: true,
    priority: 1000.0021,
    key: "Window",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0022,
    key: "board",
    style: {
        width: "500dp",
        height: "200dp",
        backgroundColor: "white",
        top: "200dp",
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "card",
    style: {
        width: "140dp",
        height: "200dp",
        borderColor: "black",
        borderWidth: 1
    }
}, {
    isClass: true,
    priority: 10000.0027,
    key: "notifications",
    style: {
        backgroundColor: "#DDD",
        width: "80%",
        height: "100dp",
        top: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0024,
    key: "card1",
    style: {
        image: __p.file("images/card1.png")
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "card2",
    style: {
        left: "40dp",
        image: __p.file("images/card2.png")
    }
}, {
    isId: true,
    priority: 100000.0026,
    key: "card3",
    style: {
        left: "40dp",
        image: __p.file("images/card3.png")
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "notificaton",
    style: {
        font: {
            fontSize: "30dp",
            fontFamily: "Aracne Regular"
        },
        text: "notificaton"
    }
} ];