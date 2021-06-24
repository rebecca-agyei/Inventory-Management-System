
// const colorHandler = (quantity) => {

//     switch (true) {
//         case (quantity == 0):
//             return "red";
//         case (0 < quantity && quantity < 21):
//             return "orange";
//         case (quantity > 20):
//             return "green";
//         default:
//             return "green";
//     }
    
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
              <td><i class="fa fa-pencil" aria-hidden="true" id="upd_${i}" onClick="productGetUpdate(this.id)"></i> &nbsp;&nbsp; 
              <i id="del_${i}" class="fa fa-trash-o" aria-hidden="true" onclick="deleteModal(this.id)"></i></td>
              </tr>
      `
          }
          prod.innerHTML = itemCode;
      }
  
      labelColor();
  
  }
  displayItems();
  
  const updateItem = () => {
      let noi = document.getElementById('noi');
      let numberOfItems = (JSON.parse(localStorage.getItem("itemsInfo")).length);
      
      if (localStorage.getItem("itemsInfo")) {
          noi.innerText = (JSON.parse(localStorage.getItem("itemsInfo"))).length;
      }
      else noi.innerText = '0';
  }
  const countOutOfStock = () => {
      let items = JSON.parse(localStorage.getItem("itemsInfo"));
      let availableItems = [];
      if (items) {
          items.forEach(item => {
              if (parseInt(item.quantity) > 0) {
                  availableItems.push(item);
              }
          });
          document.getElementById("itemsInStock").innerText = availableItems.length;
      }
      else {
          document.getElementById("itemsInStock").innerText = '0';
      }
  
  }
  
  
  let deleteIcons = document.querySelectorAll('.iconDiv2')
  // console.log(deleteIcons);
  
  let modal = document.querySelector("#delete-modal")
  let backdrop = document.querySelector("#backdrop")
  let cancelBtn = modal.querySelector(".btn1--passive")
  let delBtn = modal.querySelector(".btn1--danger")
  
  let clickedItemIndex
  
  const deleteItemHandler = (index) => {
     
      clickedItemIndex = index
  }
  
  
  const deleteHandler = (index) => {
      let localStorageProducts = JSON.parse(localStorage.getItem("itemsInfo"))
      // console.log(localStorageProducts);
      localStorageProducts.splice(index, 1);
      localStorage.setItem('itemsInfo', JSON.stringify(localStorageProducts));
      displayItems();
      updateItem();
      countOutOfStock();
      window.location.href = "/index.html";
  
  
  }
  
  const toggleBackdrop = () => {
      backdrop.classList.toggle("visible")
      modal.classList.add("visible")
  }
  
  const hideBackdrop = () => {
      modal.classList.remove("visible")
      backdrop.classList.remove("visible")
      // deleteHandler(clickedItemIndex)
      // console.log(clickedItemIndex);
  }
  const hideBackdrop2 = () => {
      modal.classList.remove("visible")
      backdrop.classList.remove("visible")
      deleteHandler(clickedItemIndex)
      // console.log(clickedItemIndex);
  }
  
  cancelBtn.addEventListener("click", hideBackdrop)
  delBtn.addEventListener("click", hideBackdrop2)
  backdrop.addEventListener("click", hideBackdrop)
  
  for(let deleteIcon of deleteIcons) {
      deleteIcon.addEventListener("click", toggleBackdrop)
      
  }
  // ToggleHandler
  
  let toggle = document.querySelector('.toggle');
  // console.log(toggle);
  function toggleMenu() {
      let navigation = document.querySelector('.navigation');
      let main = document.querySelector('.main');
      toggle.classList.toggle('active')
      navigation.classList.toggle('active')
      main.classList.toggle('active')
  }
  
  toggle.addEventListener('click', toggleMenu)
  
  updateItem();
  countOutOfStock();
  
  
  
  // const addItemBtn = document.getElementById("btn-add")
  
  // function addItemHandler(){
  //     var table = document.getElementById("table")
  //     var row = document.createElement("tr")
  //     console.log(row)
  //     var td1 = document.createElement("td")
  //     var td2 = document.createElement("td")
  //     var td3 = document.createElement("td")
  //     var td4 = document.createElement("td")
  
  //     td1.innerHTML = document.getElementById("name").value
  //     td2.innerHTML = document.getElementById("description").value
  //     td3.innerHTML = document.getElementById("category").value
  //     td4.innerHTML = document.getElementById("quantity").value
  
  //     row.appendChild(td1)
  //     row.appendChild(td2)
  //     row.appendChild(td3)
  //     row.appendChild(td4)
  
  //     table.children[0].appendChild(row)
  
  // }
  
  // document.getElementById("btn-add").addEventListener('click', addItemHandler)
  
  