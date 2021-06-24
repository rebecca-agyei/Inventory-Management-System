let addItemBtn = document.querySelector('.add_button')
addItemBtn.addEventListener("click", (event) => {
    let name = document.querySelector("#name").value
    let description = document.querySelector("#description").value
    let category = document.querySelector("#category").value
    let quantity = document.querySelector("#quantity").value

    if (name === '' || description === '' || category === '' || quantity === '' ||
        isNaN(quantity)) {
        alert('Please enter valid values')
    }
    else {
        const itemsInfo = {
            name: name,
            description: description,
            category: category,
            quantity: quantity,
        
        }
        if (localStorage.getItem('itemsInfo')) {
            let productsArray = JSON.parse(localStorage.getItem("itemsInfo"));
            productsArray.push(itemsInfo);
            localStorage.setItem('itemsInfo', JSON.stringify(productsArray));
            
        }
        else {

            let productDetails = [itemsInfo]
            console.log(productDetails)
            localStorage.setItem('itemsInfo', JSON.stringify(productDetails));
        }   
    }    
})

let add_button = document.querySelector('.add_button');