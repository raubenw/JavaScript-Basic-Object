/* Create a car object for demo purposes */

const car = {
    name: "Toyota",
    doors: 4,
    color: "blue",
    wheels: {
        frontLeft: 30,
        frontRight: 30,
        rearLeft: 30,
        rearRight: 30,        
    },
    engineRunning: false,
    switchEngine : function(engineOnOff) {
        this.engineRunning = engineOnOff;
    }
}