console.log("hello");
let products = {
    data: [
      {
          productName: "Ram",
          category: "Angora_Farm",
          price: "7000",
          
        },
        {
          productName: "Sham",
          category: "Chaubatia_Gardens",
          price: "5000",
         
        },
        {
          productName: "Ramesh",
          category: "Angora_Farm",
          price: "4000",
          
        },
        {
          productName: "Suresh",
          category: "Macchi_Tal",
          price: "6000",
          
        },
  
      {
        productName: "Rampal",
        category: "Horticulture_Garden",
        price: "99",
      
      },
      
    ],
  };
  
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // //image div
    // let imgContainer = document.createElement("div");
    // imgContainer.classList.add("image-container");
    // //img tag
    // let image = document.createElement("img");
    // image.setAttribute("src", i.image);
    // imgContainer.appendChild(image);
    // image.className="shop-item-image"
    // card.appendChild(imgContainer);
    //container
    let container = document.createElement("container");
    container.classList.add("container");
    //product name
    let name = document.createElement("product-name");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    name.className="shop-item-title"
    container.appendChild(name);
    //price
    let price = document.createElement("div");
    price.innerText = "Income:" + i.price;
    price.className="shop-item-price"
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)

  function filterProduct(value) {
    //Button class code
    console.log("hello");
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
   
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
   //Initially display all products
   window.onload = () => {
    filterProduct("all");
  };

  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".shop-item-title");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });