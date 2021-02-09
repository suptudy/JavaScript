class Car {
    constructor(carInfo) {
        //"가123,소나타,2000,1" => ["가123", "소나타", "2000", "1"]
        let carItems = carInfo.split(',');
        this._cId = carItems[0];
        this._cType = carItems[1];
        this._cPrice = parseFloat(carItems[2]);
        this._cAge = parseFloat(carItems[3]);
        this._cEPrice = this._cPrice * (1-0.1 * this._cAge);
        console.log(carItems);
    }

    get id() {
        return this._cId;
    }

    get type() {
        return this._cType;
    }

    get price() {
        return this._cPrice;
    }

    get age() {
        return this._cAge;
    }

    get ePrice() {
        return this._cEPrice;
    }
}

class CarManagementSystem {
    constructor(carsInfo) {
        this._cars = []; 
        for(let carInfo of carsInfo) {
            this._cars.push(new Car(carInfo));
            // console.log("===carInfo===");
            // console.log(carInfo);

        }
       
    }
    
    getCars() {
        return this._cars;
    }

    sort() {
        function compare(x,y) {
            if(x.ePrice > y.ePrice) {
                return 1;
            } else if (x.ePrice == y.ePrice) {
                return 0;
            } else {
                return -1;
            }
        }
        this._cars.sort(compare);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function() {
        let file = document.getElementById('file').files[0];
        let reader = new FileReader();

        reader.addEventListener('load', function() {
            //console.log(reader.result); //"가123,소나타,200,1\n가325,SM5,2200,2\n"
            let carsInfo = this.result.split('\n');
            console.log(this.result);
            console.log("===carsInfo===");
             console.log(carsInfo);
            
            let carManagementSystem = new CarManagementSystem(carsInfo);
        
            carManagementSystem.sort();
            let cars = carManagementSystem.getCars();
            console.log("cars");
            console.log(cars);
            for(let car of cars) {
                console.log(`${car.id} ${car.type} ${car.price} ${car.age} ${car.ePrice}`);
            }
        });

        reader.addEventListener('error', function() {
            console.log(reader.error.message);
        });

        reader.readAsText(file, 'UTF-8');
    })
})