let data_div = document.getElementById("fatchedProducts");
let price = 0;
let realPrice = 0;
let saved = 0;
let oTotalPrice = 0;
let overallSaving = 0;
let finallySaving = document.getElementById("save_price");
let oTotPrice = document.getElementById('o_total_price');
let myCartCount = document.getElementById('myCart111');
let total = document.getElementById('t_price');
let realPr = document.getElementById('sub_price');
let savedPrice = document.getElementById('s_price');


let cartItem = 0;
let indId = 0;
function createElement(el) {
  indId++;
  cartItem++;
    let individualProDiv = document.createElement("div");
    individualProDiv.setAttribute("id", "fDiv");
    let img = document.createElement("img");
    img.src = el.image;
  
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imgDiv");

    img.setAttribute('id', 'fImage');
  
    let p_name = document.createElement('p');
    p_name.setAttribute("id","proName")
  p_name.textContent = el.name;

  // Remove The Item Start ---------
   let p_remove = document.createElement('p');
    p_remove.setAttribute("id","proRemove")
    p_remove.textContent = "Remove";
      p_remove.addEventListener("click", function () {
      removeItem(el);
      });
  p_name.append(p_remove);
  
  // Remove The Item End ---------

  
    let allPricesSpan = document.createElement('span');
    allPricesSpan.setAttribute("id","floatAll")
    allPricesSpan.innerHTML = ` <h3 id = "h333">${el.price}</h3> <p id = "priceAndSymbol">&#x20B9 </p>  <br> <br> <p id = "redColor">${el.discount}% off</p>  <p id ="opacity">${el.priceWithDis}</p>`

    realPrice += +el.priceWithDis;
    
    total.innerHTML = `₹${realPrice}`;

    price += +el.price;
  
    realPr.innerHTML = `₹${price}`;
    
    saved = realPrice - price;
    savedPrice.innerHTML = `-₹${saved}`
  
  oTotalPrice = price + 49;
  oTotPrice.innerHTML = `₹${oTotalPrice}`
  overallSaving = saved;
  finallySaving.innerHTML = `₹${overallSaving}`
  
  myCartCount.innerHTML = `My Cart(${cartItem})`;
  
    imageDiv.append(img);
    individualProDiv.append(imageDiv, p_name, p_remove, allPricesSpan);
    data_div.append(individualProDiv);
}

function updatePriceWithoutAddItemAgain(el) {
  cartItem++;
  realPrice += +el.priceWithDis;
    
  total.innerHTML = `₹${realPrice}`;

  price += +el.price;
  
  realPr.innerHTML = `₹${price}`;
    
  saved = realPrice - price;
  savedPrice.innerHTML = `-₹${saved}`
  
  oTotalPrice = price + 49;
  oTotPrice.innerHTML = `₹${oTotalPrice}`
  overallSaving = saved;
  finallySaving.innerHTML = `₹${overallSaving}`
  
  myCartCount.innerHTML = `My Cart(${cartItem})`;
}




function fatchProducts(d) {
  let data = d;
    data_div.innerHTML = null;
  let array = [];
  data.forEach(function (el) {
    if (array.length == 0) {
      array.push(el);
      createElement(el);
      // console.log('first item')
    } else {
      let f = false;
      array.forEach((element) => {
        if (el.id == element.id) {
          f = true;
          updatePriceWithoutAddItemAgain(el);
        } 
      })
      if (f == false) {
        array.push(el);
        createElement(el);
        // console.log('new item')
      }
    }
    
    
    })
}
fatchProducts(JSON.parse(localStorage.getItem('cart')));


// shop more functionality

function shopMore() {
  window.location.href = "ProductPage.html";
}


// // code for apply coupon
let CouponDisc = 0;
let couponDiscountt = document.getElementById("c");
let couponInput = document.getElementById("couponInput");
let countForDis = 0;
function takeInput() {
  
  if (couponInput.value == "PURPLLE30" && countForDis == 0) {
    countForDis++;
    alert("Coupon Applied Successfully")
    couponInput.value = "Coupon Applied";
    CouponDisc = Math.ceil(price * (30 / 100));
    console.log('CouponDisc:', CouponDisc)
    
    couponDiscountt.textContent = `₹${CouponDisc}`;
    oTotalPrice -= CouponDisc;
    oTotPrice.innerHTML = `₹${oTotalPrice}`;
    overallSaving = saved + CouponDisc;
    finallySaving.innerHTML = `₹${overallSaving}`
  } else if (couponInput.value == "PURPLLE30") {
     alert("Coupon already used");
  }
  else {
    alert("Please enter a valid Coupon code");
    couponInput.value = null;
  }
}


//Place order & go to address page

function checkout() {
  function sendDataToAddressPage(rp,  som, tp, sc, ot, ts, cartItemCount) {
    this.realPrice = rp;
    this.saveOnMrp = tp;
    this.totalPrice = som;
    this.shipCharges = sc;
    this.orderTotal = ot;
    this.totalSaved = ts;
    this.productCount = cartItemCount;
  }

  let orderData = new sendDataToAddressPage(
    realPrice, price, saved, 49, oTotalPrice, overallSaving, cartItem
  )

  let arr;
  arr = localStorage.getItem('order');
  

  if (arr == null) {
    arr = [];
  } else {
    arr = []
  }
  console.log(arr)
  arr.push(orderData);
  localStorage.setItem('order', JSON.stringify(arr));
  if (cartItem != 0) {
    window.location.href = "addressPage.html"
  } else {
    alert("Please add some item to Cart first")
  }
  
}

//Place order & go to address page End



// Remove the item functionality Start --------------

function removeItem(obj) {
  let data = JSON.parse(localStorage.getItem('cart'));
  couponInput.value = null;
  couponDiscountt.textContent = "APPLY COUPON";
  countForDis = 0;
  
  // data.splice(0, 1)
  let cnt = 0;
  data.forEach((els) => {
  
    if (obj.name == els.name) {
      cnt++;
    }
    
  })
  console.log('cnt: ', cnt)
  // let d 

  let d = data.filter(function (el) {
    if (cnt >= 2 && obj.name == el.name) {
      cnt--;
      console.log('el :', el.name, obj.name)
      // data.splice(idx, 1);
      return el;
    }
    else {
      return el.name != obj.name;
    }
    
  })
  // console.log(d);

  localStorage.setItem('cart', JSON.stringify(d))

console.log("d ", d)

  data_div.innerHTML = null;

  console.log('length:', d.length)

  cartItem = 0;
  price = 0;
  realPrice = 0;
  saved = 0;
  oTotalPrice = 0;
  overallSaving = 0;

  // d.forEach(function (element) {
      //  updatePriceWithoutAddItemAgain(el);
      // createElement(element);
    fatchProducts(d)
    // })
  
  if (d.length == 0) {
     cartItem = 0;
  price = 0;
  realPrice = 0;
  saved = 0;
  oTotalPrice = 0;
  overallSaving = 0;
    total.innerHTML = `₹${realPrice}`;
    realPr.innerHTML = `₹${price}`;
    savedPrice.innerHTML = `-₹${saved}`
    oTotPrice.innerHTML = `₹${oTotalPrice}`
    finallySaving.innerHTML = `₹${saved}`
    myCartCount.innerHTML = `My Cart(${cartItem})`;
  }

}

// Remove the item functionality Start --------------


// Move to Home Page by Nav Logo Start - Bhanu ---------------------

let homePageNavigation = document.getElementById("homePageNavigation");

homePageNavigation.addEventListener('click', function () {
  window.location.href = "LandingPage.html";
})

// Move to Home Page by Nav Logo End - Bhanu ---------------------

