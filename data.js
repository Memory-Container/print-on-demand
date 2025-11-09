function saveProduct(name, url, price, description) {
    let productData = {
        name: name,
        url: url,
        price: price,
        description: description
    }
    localStorage.setItem("productData", JSON.stringify(productData))
}
function loadProduct() {
    let productData = localStorage.getItem("productData");
    productData = JSON.parse(productData);
    document.querySelector("#name").textContent = productData.name
    document.querySelector(".image").style.backgroundImage = `url(${productData.url})`
    document.querySelector("#desc").textContent = productData.description
    document.querySelector("#prices").textContent = `$${productData.price}`
    return productData;
}