module.exports = [ {
    isApi: true,
    priority: 1000.0004,
    key: "Window",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "start",
    style: {
        font: {
            fontFamily: "Aracne Regular",
            fontSize: "30dp"
        },
        right: 0,
        backgroundColor: "black",
        color: "white",
        height: "60dp",
        width: "150dp",
        textAlign: "center"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "nicknameView",
    style: {
        width: "500dp",
        height: "60dp"
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "shadow",
    style: {
        opacity: .5,
        backgroundColor: "black"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "title",
    style: {
        font: {
            fontSize: "100dp",
            fontFamily: "Aracne Regular"
        },
        top: "130dp",
        color: "#DC0D47"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "nickname",
    style: {
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
        textAlign: "center"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "notification",
    style: {
        width: "100%",
        height: "100%",
        visible: false
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "message",
    style: {
        font: {
            fontFamily: "Aracne Regular",
            fontSize: "30dp"
        },
        text: "...",
        color: "white"
    }
} ];