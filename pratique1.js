/* Function calculant la moyenne de 3 paramètres */
const average = new Function("a", "b", "c", "return (a + b + c) / 3");

/* Tableau contenant 4 éléments */
const array = new Array("RS 6", 100000, 700, 10);

/* Objet contenant 2 propriétés et 1 methode */
const object = new Object();
object.firstname = "John";
object.lastname = "Doe";
object.sayHello = function() {
    return "Bonjour";
};

/* Erreur */
const error = new Error("What's going on ? And I say heyyyyyy");

console.log("Moyenne:", average(10, 15, 8));
console.log(array);
console.log(object);
console.log(object.sayHello());
throw error;