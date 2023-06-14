const crypto = require('crypto');

/**
 * Fonction constructeur Product
 */
function Product(name, purchasePrice, sellingPrice, description) {
    this.name = String(name).trim();
    this.purchasePrice = Number(purchasePrice);
    this.sellingPrice = Number(sellingPrice);
    this.description = String(description).trim();

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
            value: this.name.toLocaleUpperCase() + "-" + Date.now()
        }
    });
}

const product1 = new Product("ps5", 200, 300, "console");
console.log(product1);

/**
 * Proxy pour l'objet Product
 */
const productProxy = new Proxy(product1, {
    get(obj, prop) {
        if (prop === "purchasePrice" | prop === "sellingPrice") {
            return obj[prop].toFixed(2) + " €";
        }

        if (prop === "description" && obj[prop].length > 100) {
            return obj[prop].slice(0, 99) + "...";
        }
        return obj[prop];
    },
    set(obj, prop, value) {
        if (prop === "puchasePrice" | prop === "sellingPrice") {
            if (value < 0) {
                throw new Error(`${prop} must be a positive number`);
            }
        }

        if (prop === "sellingPrice" && obj.purchasePrice > value) {
            throw new Error(`sellingPrice must be at least ${obj.purchasePrice}`);
        }

        if (prop === "purchasePrice" && obj.sellingPrice < value) {
            throw new Error(`purchasePrice must be at least ${obj.sellingPrice}`);
        }

        return obj[prop].value;
    }
});

console.log(productProxy.sellingPrice);