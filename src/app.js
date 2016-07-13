function Inherit(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;    
}

function Animal(name){
    this.localName = name;
    console.log('inside animal ', this.localName);
    
    this.sayAgain = function () {
        console.log('say again');
    }
}

Animal.prototype.say = function () {
    console.log('From animal', this.localName);
}

function Cat() {
    
}

Cat.prototype.say = function () {
    this.say.call(this);
    console.log('From cat', this.localName);
}

Inherit(Cat, Animal);

function Baby(params) {    
    
}

Inherit(Baby, Cat);

(function test() {
    var b = new Baby();
    //Animal.call(b, 'reza');
    b.say();
    //b.sayAgain();
})();

