fetch("https://api.mercadolibre.com/sites/MLB/search?q=notebooks&limit=12").then(response => response.json()).then(data => {
    data.results.forEach(products => {
        const card = document.createElement("div");
        card.classList = "col-4";
        card.innerHTML = `
        <div class = "card" style="widht: 18rem">
            <img class="card-img-top" src="${products.thumbnail}" alt="${products.title}">
            <div class="card-body">
             <h5 class="card-title">${products.title}</h5>
             <p class="card-text">${products.price}</p>
            </div>
        </div>
       `
       const btnComprar = document.createElement("a");
       btnComprar.href = "#";
       btnComprar.classList = "btn-comprar";
       btnComprar.textContent = "Comprar";
       btnComprar.addEventListener("click", e => {
        e.preventDefault();
        addToCart(products);
       });
       card.querySelector(".card-body").append(btnComprar);
       document.querySelector(".row").append(card);

    })

})    

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart === null){
        cart = [];        
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto Adicionado com Sucesso!");
}
