function displayCartItem(){
    let total = 0;
    const tbody = document.querySelector("tbody");
    const details = document.querySelector(".details");
    tbody.innerHTML = "";
    details.innerHTML = "";
    
   
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(product => {
        total += product.price
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td class = "botao"></td>
        `
        const btnRemover = document.createElement("a");
        btnRemover.href = "#";
        btnRemover.classList = "btn-Remover";
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", e => {
            e.preventDefault();
            remover(product.id);
        });

        tr.querySelector(".botao").append(btnRemover);
        tbody.append(tr);
    })

    if(total > 0){
        details.innerHTML = `
     <h5>DADOS DO PEDIDO:</h5>
     <p>TOTAL: ${total}</p>
     `
     const btnEncerrar = document.createElement("a");
     btnEncerrar.href = "#";
     btnEncerrar.classList = "btn-encerrar";
     btnEncerrar.textContent = "Encerrar Pedido";
     btnEncerrar.addEventListener("click", e => {
        e.preventDefault();
        encerrar();
     })
     details.append(btnEncerrar);

    }
}

function encerrar(){
    localStorage.clear();
    alert ("Pedido Finalizado com Sucesso!");
    displayCartItem();
}

function remover(id){
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter(product => {return product.id !== id});
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Produto Removido.");
    displayCartItem();
}
displayCartItem();