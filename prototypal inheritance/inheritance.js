Function.prototype.inherits = function(SuperClass){
    const fn = this;
    debugger
    function Surrogate() { };
    debugger
    Surrogate.prototype = SuperClass.prototype;
    debugger
    Surrogate.prototype = SuperClass.prototype;
    fn.prototype = new Surrogate();
    fn.prototype.constructor = fn;
};

function MovingObject(){ 
    const name = "Jupiter";
    // MovingObject.prototype.sayHello = function(){
    //     console.log("hello");
    // }
};

function Ship() { }
Ship.inherits(MovingObject);


function Asteroid() { }
Asteroid.inherits(MovingObject);

MovingObject.prototype.sayHello = function() {
    console.log("hello from space!");
};

sayHello()