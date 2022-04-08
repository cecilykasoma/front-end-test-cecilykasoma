const productUrl = "products/products.json";
const productList = document.querySelector(".items");

// Function to fetch all products.
const fetchData = async (url) => {
  const data = await fetch(url);
  // Parsing data to JSON
  const response = await data.json();
  // Calling "showProducts" function
  showProducts(response);
};
// Calling the "fetchData" function
fetchData(productUrl);


/*
the `showProduct` function
This function will create and insert/append the elements needed to display a "page" of 12 products
*/
const showProducts = (list) => {
  //create two variables which will representt the index for the first and last product on the page
  list.forEach(item => {
    // Destructure the items of the returned data
      let {images, designer, name, price} = item;
      // Create the DOM structure
      let product = `
      <li class="product">
        <img src="${images[0]}" class="product-img" alt="${name} image">
        <h3 class="designer">${designer}</h3>
        <p class="product-name">${name}</p>
        <p class="product-price" data-caption="">${price}</p>
      </li>
      `
      // Append the DOM structure created to the productList container
      return productList.insertAdjacentHTML('beforeend', product);
  })
  // Call the "sorting" function passing it the 'productList'
  sorting(productList)
}

/**
 * the loadmore button
 */
const loadMore = document.querySelector('button');
// Get the index of the last item displayed
 let currentItem = 12;
  
//  Create click event on the button
 loadMore.addEventListener('click', e => {
  //  Spread out the products
   let products = [...document.querySelectorAll('#productList .product')];

  //  And loop over them
   for(let i = currentItem; i < currentItem + 12; i++){
    //  displaying ones that are greater than the "currentItem" index
     products[i].style.display = 'inline-block';
   }
  //  Add the indexes to the 'currentItem' untill there are no more items to display
   currentItem += 12;
 })

// Create the "sorting" function
 const sorting = (product) => {
  //  Get the "li" from the "productList"
   let li = Array.from(product.children);
  //  get "select" from the DOM
   let select = document.getElementById('price-select');
  //  Create an empty array to which each li will be pushed
   let arr = [];
// loop through the "li" 
   for(let i of li){
    //  find the last element child of each "li"
     const last = i.lastElementChild;
    //  trim and remove comma 
     const x = last.textContent.trim().replace(/,/g, '');
    //  turn the string to a number
     const y = Number(x.substring(1));
    //  set each "li" data-caption value to the number "y"
     i.setAttribute('data-caption', y);
    //  push each new "li" to the "arr"
     arr.push(i);
   };

  // Create an "onchange" event on the "select" Dom element
  select.addEventListener('change', e => compareValues(product, li, arr, e))
};

// the "compareValues" function
const compareValues = (product, li, arr, e) => {
  // find out if the target is "default"
  if(e.target.value === 'default'){

    while(product.firstChild){
      product.removeChild(product.firstChild)
    }
    product.append(...arr);
  }
  // OR "high"
   if(e.target.value === 'high'){
    itemSort(product, li, false);
   }
  //  OR "low"
   if(e.target.value === 'low'){
     itemSort(product, li, true);
  }
}
// the "itemSort" function
const itemSort = (product, li, ascending) => {
  // Sort the "li"
  let sortLi = li.sort((a,b) => {
    
    const ax = a.getAttribute('data-caption');
    const bx = b.getAttribute('data-caption');
    if(ascending){
      return ax - bx
    }else{
      return bx - ax
    }
  })
  while(product.firstChild){
    product.removeChild(product.firstChild)
  }
  product.append(...sortLi);
}