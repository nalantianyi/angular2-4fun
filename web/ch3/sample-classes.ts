/**
 * Created by nalantianyi on 2016/10/20.
 */
class Human {
    static totalPeople = 0;
    _name;

    constructor(name) {
        this._name = name;
        Human.totalPeople += 1;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    talk() {
        return `Hi,I'm ${this.name}!`;
    }
}
class Developer extends Human{
    _languages;
    constructor(name,languages){
        super(name);
        this._languages=languages;
    }
    get languages(){
        return this._languages;
    }
    talk(){
        return `${super.talk()} And I know ${this.languages.join(',')}.`;
    }
}


var human=new Human("foobar");
var dev=new Developer("bar",["JavaScript","PHP","JAVA","NodeJS"]);
console.log(dev.talk());