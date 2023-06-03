// Création de l'objet Products
function Products(name, purchasePrice, sellingPrice, description) {
    this.name = name,
    this.purchasePrice = purchasePrice,
    this.sellingPrice = sellingPrice,
    this.description = description

    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: crypto.randomUUID()
        },
        margin: {
            get() {
                return this.sellingPrice - this.purchasePrice;
            },
            set(value) {
                this.sellingPrice = this.purchasePrice + value;
            }
        },
        ref: {
            value: this.name + "-" + Date.now()
        }
    });
}

const playstation = new Products("ps5", 500, 600, "console");


// Création d'un proxy 
const playstationProxy = new Proxy(playstation, {
    get(obj, prop) {
        if (prop === "purchasePrice" || prop === "sellingPrice") {
            return obj[prop].toFixed(2) + "€";
        };

        if (prop === "description" && obj[prop].length >= 100) {
            return obj[prop].slice(0, 99) + "...";
        };
    },
    set(obj, prop, value) {
        if (prop === "purchasePrice" || prop === "sellingPrice") {
            if (value < 0) {
                throw new Error("Must be a positive number");
            }
        };

        if (prop === "sellingPrice" && value < obj.purchasePrice) {
            throw new Error(`sellingPrice must be greater than or equal to ${obj.purchasePrice.toFixed(2)} €`);
        };

        if (prop === "purchasePrice" && value > obj.sellingPrice) {
            throw new Error(`purchasePrice must be less or equal to ${obj.sellingPrice.toFixed(2)} €`);
        }
    }
});

console.log(playstation);
console.log(playstation.margin);
console.log(playstation.ref);
console.log("-------------");
playstationProxy.sellingPrice = 200;
console.log(playstationProxy.purchasePrice);
console.log(playstationProxy.sellingPrice);