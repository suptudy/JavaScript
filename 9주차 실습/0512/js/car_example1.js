class Car{
    constructor() {
        this._speed =0;
    }

    start() {
        this._speed = 20;
    }

    accelerate() {
        this._speed = this._speed +30;
    }

    stop() {
        this._speed = 0;
    }

    getSpeed() {
        return this._speed;
    }
    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
}

const myCar = new Car();
myCar.start();
console.log(myCar.speed);
myCar.accelerate();
console.log(myCar.speed);
myCar.stop();
console.log(myCar.speed);