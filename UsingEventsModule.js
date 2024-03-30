const EventEmitter = require("events");
const { multiply } = require("lodash");

const eventObj = new EventEmitter()

eventObj.on("message", (...data) => {
    console.log("THE RECEIVED  MESSAGE IS : ", data);
})

eventObj.once("chat", (data) => {
    console.log("FROM CHAT LISTENER THIS IS ONLY GOING TO BE PRINTED ONCE", data);
})

eventObj.emit("message", "Hello This is my first event", "Muthu Mari")
eventObj.emit("chat", "HELLO WORLD")
eventObj.emit("chat", "HELLO BUDDY")

const add = (a, b) => {
    console.log("ADD", a + b)

}

const sub = (a, b) => {
    console.log("SUB", a + b)
}

const multi = (a, b) => {
    console.log("MULTI", a * b)
}

const div = (a, b) => {
    console.log("DIV", a / b)
}

eventObj.addListener("newEvent", add)
eventObj.on("newEvent", sub)
eventObj.on("newEvent", multi)
eventObj.prependListener("newEvent", div)

eventObj.removeListener("newEvent", sub)
eventObj.emit("newEvent", 2, 3)

console.log("EVENT LISTENERS FOR newEvent", eventObj.listeners("newEvent"))
console.log("EVENT LISTENERS FOR message", eventObj.listeners("message"))