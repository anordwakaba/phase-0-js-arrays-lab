const products = ["Laptop", "Smartphone", "Headphones"];

function logFirstProduct() {
    console.log(products[0]);
}

function updateProductName(index, newName) {
    products[index] = newName;
}

function removeLastProduct() {
    products.pop();
}

function addProduct(product) {
    products.push(product);
}

module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct
}; 