

// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function(superclass){
    function Surrogate() { };
    const fn = this;
    Surrogate.prototype = superclass.prototype;
    // fn.prototype = new Surrogate();
    fn.prototype.constructor = fn;
}

function MovingObject(){ 
    function galaxy(){
        console.log("galaxy");
    }
    
}

function Ship() { }
Ship.inherits(MovingObject);
Ship.galaxy();

function Asteroid() { }
Asteroid.inherits(MovingObject);

