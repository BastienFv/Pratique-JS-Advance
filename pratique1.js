// Fonction calculant la moyenne de trois paramètres
const average = new Function("a", "b", "c", "return (a + b + c) / 3");

// Tableau qui contient quatre éléments
const array = new Array(1, 2, 3, 4);

// Objet contenant deux propriétés lastname & firstname, et une méthode qui retourne "Bonjour"
const object = new Object();
object.lastname = "Fauveau";
object.firstname = "Bastien";
object.sayHello = function () {
    return "Bonjour";
};

// Erreur
const error = new Error("What's going on ? And I say heyyyyyy");

console.log(average(15, 16, 8));
console.log(array);
console.log(object);
console.log(object.sayHello());
throw error;