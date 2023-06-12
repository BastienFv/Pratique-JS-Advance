const crypto = require('crypto');

/* Fonction constructeur */
function User(lastname, firstname, email, nickname, age) {
    this.lastname = String(lastname).trim();
    this.firstname = String(firstname).trim();
    this.email = String(email).trim();
    this.nickname = String(nickname).trim();
    this.age = Number(age);
};

/* Création de 2 objets */
const user1 = new User("Doe", "John", "john@doe.com", "JD", 25);
const user2 = new User("Doe", "Jane", "jane@doe.com", "J", 17);

/* Modification du prototype */
User.prototype.role = "visiteur";
User.prototype.enableNSFW = function() {
    return this.age >= 18;
};

User.prototype.randomizeName = function() {
    return this.nickname + "-" + crypto.randomUUID();
}

console.log(user1);
console.log(user1.role);
console.log(user1.randomizeName());
console.log(user2.enableNSFW());

user1.role = "admin";
console.log(user1.role);