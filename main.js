class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Cada campo es obligatorio");
            return;
        }

        if(this.products.some(item => item.code === code)) {
            console.log("El código tiene que ser único");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price, 
            img, 
            code, 
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;

    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Not found");
        } else {
            console.log("Found");
        }
    }
}


//Testing

//1)
const manager = new ProductManager();

//2)
console.log(manager.getProducts());

//3)
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
manager.addProduct('remeras', 'oversized', 1000, 'No hay pic', 'abc124', 50);
manager.addProduct('buzo', 'deportivo', 2000, 'No hay foto', 'abc125', 30);

//4.1)
console.log(manager.getProducts());

//4.2)
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

//5)
manager.getProductById(2);
manager.getProductById(10);


