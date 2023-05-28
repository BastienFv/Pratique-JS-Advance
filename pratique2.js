function User(lastname, firstname, email, nickname, age) {
    this.lastname = lastname,
    this.firstname = firstname,
    this.email = email,
    this.nickname = nickname,
    this.age = age
};

const user1 = new User("Fauveau", "Bastien", "bf@test.com", "Le B", 32);
const user2 = new User("Test", "Test", "test@test.com", "test", 17);

User.prototype.role = "visiteur";

User.prototype.enableNSFW = function () {
    return this.age >= 18;
};

User.prototype.randomizeName = function () {
    this.nickname = "azerty*";
};

console.log(user1);
console.log(user2);
console.log(user1.role);
console.log(user1.enableNSFW());

user1.randomizeName();
console.log(user1);

user1.role = "admin";
console.log(user1.role);