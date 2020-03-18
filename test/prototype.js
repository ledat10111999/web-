function person(name, password){
    this.name = name;
    this.password = password;
}

person.prototype.GetName = function(){
    return this.name;
}
person.prototype.GetPass = function(){
    return this.password;
}

function user (user){
    this.name = user;
}
user.prototype = new person();

var Person = new person("ti", " 123");

var User = new user("teo",'1234');
// console.log(Person.GetName() + Person.GetPass());
console.log(User.GetName());
