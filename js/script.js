

    
// }
// const editItem = (index) => {
//     console.log(index)
//     let localStorageProducts = JSON.parse(localStorage.getItem("itemsInfo"));
//     localStorageProducts[index].editItemBtnClicked = true;
//     localStorage.setItem("itemsInfo", JSON.stringify(localStorageProducts));
// }

let labelColor = () => {
    products = JSON.parse(localStorage.getItem("itemsInfo"));
  
  
    for (i = 0; i < products.length; i++) {
      quantity = Number(products[i].quantity);
  
      if (quantity === 0) {
        document.getElementById(`label_color${i}`).style.background = "red"
        document.getElementById(`label_color${i}`).innerText = "Out of Stock"
      }
      else if ((quantity >= 1) && (quantity <= 20)) {
        document.getElementById(`label_color${i}`).style.background = "orange"
        document.getElementById(`label_color${i}`).innerText = "Almost Out of Stock"
      }
      else {
        document.getElementById(`label_color${i}`).style.background = "green"
        document.getElementById(`label_color${i}`).innerText = "In Stock"
      }
    }
  }
  
  const displayItems = () => {
      let itemCode = "";
  
      let localStorageProducts = JSON.parse(localStorage.getItem("itemsInfo"))
    
      const prod = document.getElementById('product-items')
  
  
      if (localStorageProducts) {
          for (let i = 0; i < localStorageProducts.length; i++) {
      
              itemCode += `
              <tr>
              <td>${localStorageProducts[i].name}</td>
              <td>${localStorageProducts[i].description}</td>
              <td class="cat">${localStorageProducts[i].category}</td>
              <td class="num">${localStorageProducts[i].quantity}</div></td>
              <td id='label_color${i}'>Check</td>
              <td><i class="fa fa-pencil" aria-hidden="true" id="upd_${i}" onClick="productGetUpdate(this.id)" href="../html/stockupdate.html"></i> &nbsp;&nbsp; 
              <i id="del_${i}" class="fa fa-trash-o" aria-hidden="true" onclick="deleteModal(this.id)"></i></td>
              </tr>
      `
          }
          prod.innerHTML = itemCode;
      }
  
      labelColor();
  
  }
  displayItems();
  
  const totalNumberofItems = () => {
    let total = document.getElementById('total');
    
    if (localStorage.getItem("itemsInfo")) {
        total.innerText = (JSON.parse(localStorage.getItem("itemsInfo"))).length;
    }
    else total.innerText = '0';
}
totalNumberofItems()

const totalItemsInStock = () => {
    let products = JSON.parse(localStorage.getItem("itemsInfo"));
    let available = [];
    if (products) {
        products.forEach(item => {
            if (parseInt(item.quantity) > 0) {
                available.push(item);
            }
        });
        document.getElementById("itemsInStock").innerText = available.length;
    }
    else {
        document.getElementById("itemsInStock").innerText = '0';
    }

}
totalItemsInStock()

const totalNumberOfCategories = () => {
let products = JSON.parse(localStorage.getItem("itemsInfo"));
let distinctValues = [];
for (i = 0; i < products.length; i++) {
  if (!distinctValues.includes(products[i].category.toLowerCase())) {
    distinctValues.push(products[i].category.toLowerCase());
  }
}

document.getElementById("totalCategories").innerText = distinctValues.length;

} 

totalNumberOfCategories()
  
   


  

 
  
  