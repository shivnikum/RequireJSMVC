define(function(){
     
    function User(name){
        this.name = name || 'Default name';
    }
     
    User.prototype = {};
    User.prototype.constructor = User;
    return User;
});