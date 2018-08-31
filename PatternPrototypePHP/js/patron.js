function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function HiluxBuilder() { // TOYOTA HILUX
    this.hilux = null;

    this.step1 = function() {
        this.hilux = new Hilux();
    };

    this.step2 = function() {
        this.hilux.addParts();
    };

    this.get = function() {
        return this.hilux;
    };
}

function HiaceBuilder() { // TOYOTA HIACE
    this.hiace = null;

    this.step1 = function() {
        this.hiace = new Hiace();
    };

    this.step2 = function() {
        this.hiace.addParts();
    };

    this.get = function() {
        return this.hiace;
    };
}

function CorollaBuilder() { // TOYOTA COROLLA
    this.corolla = null;

    this.step1 = function() {
        this.corolla = new Corolla();
    };

    this.step2 = function() {
        this.corolla.addParts();
    };

    this.get = function() {
        return this.corolla;
    };
}

function Hilux() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 4;
    };

    this.say = function() {
        log.add("Toyota HILUX SR5 - 2017, " + this.doors + " puertas.");
    };
}

function Hiace() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 3;
    };

    this.say = function() {
        log.add("Toyota HIACE Silver - 2017, " + this.doors + " puertas.");
    };
}

function Corolla() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 4;
    };

    this.say = function() {
        log.add("Toyota Corolla - 2017, " + this.doors + " puertas.");
    };
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function runHilux() 
{
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var marca = "TOYOTA.", modelo = "Hilux SR5 - 2017.", motor = "2.7 litros. Cilindrada / capacidad. 166 @ 5,200. potencia máxima hp@rpm. 4 en línea. ", precio = "$ 32,000.°°";
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pmotor = document.getElementById("motor");
    pprecio = document.getElementById("precio");
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pmotor.innerHTML = "Motor: " + motor;
    pprecio.innerHTML = "Precio: " + precio;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgCars");
    img.innerHTML = '<img src="img/hilux2.png" height="300px" width="350px" />';

    var shop = new Shop();
    var hiluxBuilder = new HiluxBuilder();
    var carHilux = shop.construct(hiluxBuilder);
    
    carHilux.say();
    log.show();
}
function runHiace()
{
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var marca = "TOYOTA.", modelo = "Hiace Silver - 2017.", motor = "Diésel de 2.5 litros 2KD-FTV con turbocompresor e inyección directa D-4D. ", precio = "$ 38,000.°°.";
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pmotor = document.getElementById("motor");
    pprecio = document.getElementById("precio");
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pmotor.innerHTML = "Motor: " + motor;
    pprecio.innerHTML = "Precio: " + precio;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgCars");
    img.innerHTML = '<img src="img/hiace.png" height="300px" width="350px" />';

    var shop = new Shop();
    var hiaceBuilder = new HiaceBuilder();
    var carHiace = shop.construct(hiaceBuilder);

    carHiace.say();
    log.show();
}
function runCorolla()
{
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var marca = "TOYOTA.", modelo = "Corolla - 2017.", motor = "1.8 Litros, 4 cilindros, 16 válvulas, dual VVT-i; 132 hp @ 6,000 RPM.", precio = "$ 30,000.°°.";
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pmotor = document.getElementById("motor");
    pprecio = document.getElementById("precio");
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pmotor.innerHTML = "Motor: " + motor;
    pprecio.innerHTML = "Precio: " + precio;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgCars");
    img.innerHTML = '<img src="img/corolla.jpg" height="300px" width="350px" />';

    var shop = new Shop();
    var corollaBuilder = new CorollaBuilder();
    var carCorolla = shop.construct(corollaBuilder);

    carCorolla.say();
    log.show();
}