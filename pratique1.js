/* Function calculant la moyenne de 3 paramètres */
const average = new Function("a", "b", "c", "return (a + b + c) / 3");
console.log("Moyenne:", average(10, 15, 8));

/* Tableau contenant 4 éléments */
const array = new Array();
array.push(1, 2, 3, 4);
console.log(array);

/* Objet contenant 2 propriétés et 1 methode */
const object = new Object();
object.firstname = "John";
object.lastname = "Doe";
object.sayHello = new Function("return `Bonjour`");
console.log(object);
console.log(object.sayHello());

/* Erreur */
const error = new Error("What's going on ? And I say heyyyyyy");
throw error;