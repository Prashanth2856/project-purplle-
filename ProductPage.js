let productListDiv = document.getElementById("productList");

//-------------------------------------------------------------------------

// Nav Bar Wishlist start 

const wishList = document.getElementById("wishList");
const signUP = document.getElementById("signUp");
const basket = document.getElementById("basket");
wishList.addEventListener("click", function () {
  window.location.href = "wishlist.html";
});
basket.addEventListener("click", function () {
  window.location.href = "basket.html";
});
const navMid = document.getElementById("homePageNavigation");
navMid.addEventListener("click", function () {
  window.location.href = "LandingPage.html";
});

// Nav Bar Wishlist End

// -------------------------------------------------------------------------




// Scroll up Button Functionality
const scrolbtn = document.getElementById("btnScrollToTop");
scrolbtn.addEventListener("click", scrolUp);
function scrolUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}


  // -------------------------------------------------------------------------

  // Sliding part start - for 5 images1 - bhanu
    
  function slideImage() {
    let i = 0;
    let point1 = document.getElementById("point1");
    let point2 = document.getElementById("point2");
    let point3 = document.getElementById("point3");
    let point4 = document.getElementById("point4");
    let point5 = document.getElementById("point5");
    let leftMove = document.getElementById("leftMoveSlider");
    let rightMove = document.getElementById("rightMoveSlider");

    let slider_main_div = document.getElementById("slider_main_div");

    let div = document.createElement("div");
    div.setAttribute("class", ".smooth");
      let arr = [
        
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626975444_vlcc_web.jpg",
          "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626973582_loreal_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626973011_faces_home-page-web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626975181_garnier_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626975935_bella-voste_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626973290_colorbar_web.jpg",
    ];
    let image = document.createElement("img");

    // 5 Second interval set here
    function setInt() {
      setInterval(function () {
        i++;
        if (i == arr.length) {
          i = 0;
        }
        // Function For bullet point
        arrayIndexsAtOnce(i);
        image.src = arr[i];
        div.append(image);
      }, 5000);
    }
    setInt();

    // Left Move Slider by Left Arrow
    function leftMoveSlider() {
      i--;
      if (i == -1) {
        i = arr.length - 1;
      }
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Right Move Slider by Right Arrow
    function rightMoveSlider() {
      i++;
      if (i == arr.length) {
        i = 0;
      }
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-1
    function point1Fun() {
      i = 0;
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-2
    function point2Fun() {
      i = 1;
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-3
    function point3Fun() {
      i = 2;
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-4
    function point4Fun() {
      i = 3;
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-5
    function point5Fun() {
      i = 4;
      // Function For bullet point
      arrayIndexsAtOnce(i);
      image.src = arr[i];
      div.append(image);
    }

    // Left & Right Arrow shift
    leftMove.addEventListener("click", leftMoveSlider);
    rightMove.addEventListener("click", rightMoveSlider);

    // Shift by click on code
    point1.addEventListener("click", point1Fun);
    point2.addEventListener("click", point2Fun);
    point3.addEventListener("click", point3Fun);
    point4.addEventListener("click", point4Fun);
    point5.addEventListener("click", point5Fun);

    // To Reduce code complexity checking every if sending the color according
    function arrayIndexsAtOnce(i) {
      if (i == 0) {
        return arr0Index();
      } else if (i == 1) {
        return arr1Index();
      } else if (i == 2) {
        return arr2Index();
      } else if (i == 3) {
        return arr3Index();
      } else if (i == 4) {
        return arr4Index();
      }
    }

    // Below are function to check, set & remove bullet colors [for array of 5 length]
    function arr0Index() {
      point1.setAttribute("id", "firstBullet");
      point2.removeAttribute("id", "firstBullet");
      point3.removeAttribute("id", "firstBullet");
      point4.removeAttribute("id", "firstBullet");
      point5.removeAttribute("id", "firstBullet");
    }
    function arr1Index() {
      point1.removeAttribute("id", "firstBullet");
      point2.setAttribute("id", "firstBullet");
      point3.removeAttribute("id", "firstBullet");
      point4.removeAttribute("id", "firstBullet");
      point5.removeAttribute("id", "firstBullet");
    }
    function arr2Index() {
      point1.removeAttribute("id", "firstBullet");
      point2.removeAttribute("id", "firstBullet");
      point3.setAttribute("id", "firstBullet");
      point4.removeAttribute("id", "firstBullet");
      point5.removeAttribute("id", "firstBullet");
    }
    function arr3Index() {
      point1.removeAttribute("id", "firstBullet");
      point2.removeAttribute("id", "firstBullet");
      point3.removeAttribute("id", "firstBullet");
      point4.setAttribute("id", "firstBullet");
      point5.removeAttribute("id", "firstBullet");
    }
    function arr4Index() {
      point1.removeAttribute("id", "firstBullet");
      point2.removeAttribute("id", "firstBullet");
      point3.removeAttribute("id", "firstBullet");
      point4.removeAttribute("id", "firstBullet");
      point5.setAttribute("id", "firstBullet");
    }

    slider_main_div.append(div);
  }

  slideImage();

  // Sliding part end


/* -------------------------------------------------------------------- */

/* AllProducts Start */

function collectProduct() {
  
    function makeCopies(i, nam, p, d, b, pd) {
        this.image = i;
        this.name = nam;
        this.price = p;
        this.discount = d;
        this.brand = b;
        this.priceWithDis = pd;
        // this.number = n;
    }
    let pro1 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/207907/good-vibes-lightening-face-wash-mulberry-120-ml_1_display_1602905704_3927ad68.jpg","Good Vibes Lightening Face Wash - Mulberry (120 ml)",137, 30, "GoodVibes", 195 )
    let pro2 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/175598/lakme-perfect-radiance-fairness-face-wash-50-g-22_2_display_1565341148_55d46b85.jpg","Lakme Absolute Perfect Radiance Skin Lightening Face Wash...",122, 24, "Lakme" , 160)
    let pro3 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/246933/wow-skin-science-vitamin-c-face-wash-100-ml-17-46_8_display_1626326061_b9e36dba.jpg","WOW Skin Science Vitamin C Foaming Face Wash Pump (150 ml)",349, 5, "Wow", 366 )
    let pro4 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/209635/mamaearth-vitamin-c-foaming-face-wash-with-vitamin-c-and-turmeric-150-ml_1_display_1601362718_aa831917.jpg","Mamaearth Vitamin C Foaming Face Wash with Vitamin C...",399, 15, "Mamaearth", 459 )
    let pro5 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/158107/mamaearth-tea-tree-natural-face-wash-for-acne-and-pimples-wash-100-ml-for-normal-and-dry-skin_1_display_1551694455_91acf102.jpg","Mamaearth Tea Tree Natural Face Wash For Acne & Pimples Wash (100 ml)" ,212, 15, "Mamaearth", 249)
    let pro6 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/201969/wow-skin-science-greek-yoghurt-face-wash-100-ml_1_display_1561448306_366b7545.jpg", "WOW Skin Science Greek Yoghurt Face Wash (100 ml)", 153, 39, "Wow", 249)
    let pro7 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/209622/good-vibes-face-wash-rosemary-200-ml_1_display_1593780645_9e28efc5.jpg", "Good Vibes Hydrating Face Wash - Rosemary (200 ml)", 189, 30, "GoodVibes", 270)
    let pro8 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/205429/lakme-absolute-perfect-radiance-facial-foam-130-ml1-89-19_1_display_1565255331_e206636a.jpg", "Lakme Absolute Perfect Radiance Facial Foam (130 ml)", 398, 25, "Lakme", 530)
    let pro9 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/200887/mamaearth-coco-facewash-with-coffee-and-cocoa-for-skin-awakening-100-ml_1_display_1590732241_68b16512.jpg","Mamaearth CoCo Facewash, with Coffee & Cocoa for Skin Awakening (100 ml)",224, 10, "Mamaearth", 249 )
    let pro10 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/201800/wow-anti-acne-neem-and-tea-tree-face-wash-oil-free-no-parabens-sulphate-silicones-and-color-100-ml_1_display_1569059493_abe294e9.jpg", "WOW Anti Acne Neem & Tea Tree Face Wash (100 ml)", 226, 9, "Wow", 249)
    let pro11 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/230858/lakme-strawberry-clean-up-face-wash-100-g-50_8_display_1625223214_9d6afc1e.jpg", "Lakme Blush & Glow Strawberry Gel Face Wash (100 g)", 183, 15, "Lakme", 215)
    let pro12 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/196243/good-vibes-refreshing-face-wash-vanilla-120-ml_1_display_1583408900_55a77bc7.jpg","Good Vibes Refreshing Face Wash - Vanilla (120 ml)",123, 30, "GoodVibes", 175 )
    let pro13 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/225020/wow-skin-science-charcoal-foaming-face-wash-with-built-in-face-brush-100-ml-12_3_display_1610696567_081ae3c1.jpg", "WOW Skin Science Activated Charcoal Foaming Face Wash With...", 370, 7, "Wow", 399)
    let pro14 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-top_rated_235x235small_1kce6dd9kH.png,ofo-top_right/static/img/product/192765/lakme-blush-and-glow-kiwi-freshness-gel-face-wash-with-kiwi-extracts-100-g_2_display_1565675104_092f1a9d.jpg","Lakme Blush & Glow Kiwi Crush Gel Face Wash (100 g)",191, 15, "Lakme", 225 )
    let pro15 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/212204/wow-skin-science-himalayan-rose-foaming-face-wash-100-ml_2_display_1624861494_f460f34c.jpg","WOW Skin Science Himalayan Rose Foaming Face Wash With Pump(150 ml)",226, 35, "Wow", 349 )
    let pro16 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/207897/good-vibes-foaming-face-wash-tea-tree-150-ml-1_11_display_1625565684_90432233.jpg","Good Vibes Foaming Face Wash - Tea Tree (150 ml)",165, 30, "GoodVibes", 235 )
    let pro17 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/216514/mamaearth-tea-tree-face-wash-with-neem-for-acne-and-pimples-250-ml_1_display_1606132877_6a81710a.jpg", "Mamaearth Tea Tree Face Wash with Neem for Acne & Pimples (250 ml)", 359, 30, "Mamaearth", 399)
    let pro18 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/212962/lakme-blush-and-glow-peach-gel-face-wash-100-g-10_2_display_1624453680_e1a8af19.jpg","Lakme Blush & Glow Peach Gel Face Wash (100 g)",199, 15, "Lakme", 225 )
    let pro19 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/216513/mamaearth-vitamin-c-face-wash-with-vitamin-c-and-turmeric-for-skin-illumination-250-ml_1_display_1606132711_720b85a3.jpg","Mamaearth Vitamin C Face Wash with Vitamin C and Turmeric...",359, 10, "Mamaearth",399 )
    let pro20 = new makeCopies("https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/211592/good-vibes-gentle-cleansing-face-wash-lotus-and-sage-120-ml-1_2_display_1619765916_c433dd77.jpg","Good Vibes Gentle Cleansing Face Wash - Lotus & Sage (120 ml)",137, 30, "GoodVibes", 195 )
    
    let arr = [];

    arr.push(pro1)
    arr.push(pro2)
    arr.push(pro3)
    arr.push(pro4)
    arr.push(pro5)
    arr.push(pro6)
    arr.push(pro7)
    arr.push(pro8)
    arr.push(pro9)
    arr.push(pro10)
    arr.push(pro11)
    arr.push(pro12)
    arr.push(pro13)
    arr.push(pro14)
    arr.push(pro15)
    arr.push(pro16)
    arr.push(pro17)
    arr.push(pro18)
    arr.push(pro19)
    arr.push(pro20)

    console.log("arr ", arr)

    if (localStorage.getItem('productlist') == null) {
        localStorage.setItem('productlist', JSON.stringify(arr));
    }
    
    
}
collectProduct();

function createElement(el) {
    let individualProDiv = document.createElement("div");
    individualProDiv.setAttribute("id", "gDiv");
    let img = document.createElement("img");
    img.src = el.image;

    img.setAttribute('id', 'gridImage');
    console.log(img);

    let addToCart = document.createElement("button");
  addToCart.innerHTML = "ADD TO CART";
  addToCart.setAttribute("id","addToCart")
    addToCart.addEventListener("click", function () {
      add_To_Cart(el);
    });

    let p_name = document.createElement('p');
    p_name.setAttribute("id","proName")
    p_name.textContent = el.name;

    let allPricesSpan = document.createElement('div');
    allPricesSpan.setAttribute("id","floatAll")
    allPricesSpan.innerHTML = `&#x20B9 <h3 id = "h333">${el.price}</h3> &nbsp <p id ="opacity"><s>${el.priceWithDis}</s></p> &nbsp <p id = "redColor">${el.discount}% off</p> `

    
    individualProDiv.append(img, addToCart, p_name, allPricesSpan);
    productListDiv.append(individualProDiv);
}

function fatchProducts(d) {
    let data = d;
    productListDiv.innerHTML = null;

    data.forEach(function (el) {
        createElement(el);
    })
}
fatchProducts(JSON.parse(localStorage.getItem('productlist')));

/* AllProducts End */

/* -------------------------------------------------------------------- */

// To add to cart functionality start

function add_To_Cart(obj) {
  let arr;
  arr = localStorage.getItem("cart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("cart"));
  }
  arr.push(obj);
  localStorage.setItem("cart", JSON.stringify(arr));
}

function showCart() {
  window.location.href = "basket.html";
}

// To add to cart functionality end

 // -------------------------------------------------------------------------

  // Sliding part start - for 3 images2 - bhanu
    
  function slideImage1() {
    let i = 0;
    let point1 = document.getElementById("point11");
    let point2 = document.getElementById("point12");
    let point3 = document.getElementById("point13");
    let leftMove = document.getElementById("leftMoveSlider1");
    let rightMove = document.getElementById("rightMoveSlider1");
    // console.log('rightMove:', rightMove)
  

    let slider_main_div = document.getElementById("slider_main_div1");
  
    let div = document.createElement("div");
    div.setAttribute('class', '.smooth');
    let arr = [
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626975935_bella-voste_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626965228_sugar_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626962563_wow_web.jpg",
        
    ];
    let image = document.createElement("img");

    // 5 Second interval set here
    function setInt() {
      setInterval(function () {
        i++;
        if (i == arr.length) {
          i = 0;
        }
        // Function For bullet point
        arrayIndexsAtOnce(i)
        image.src = arr[i];
        div.append(image);
      }, 3000);
    }
    setInt();

    // Left Move Slider by Left Arrow
    function leftMoveSlider() {
      i--;
      if (i == -1) {
        i = arr.length - 1;
      }
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Right Move Slider by Right Arrow
    function rightMoveSlider() {
      i++;
      if (i == arr.length) {
        i = 0;
      }
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-1
    function point1Fun() {
      i = 0;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-2
    function point2Fun() {
      i = 1;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-3
    function point3Fun() {
      i = 2;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }


    // Left & Right Arrow shift
    leftMove.addEventListener("click", leftMoveSlider);
    rightMove.addEventListener("click", rightMoveSlider);

    // Shift by click on code
    point1.addEventListener("click", point1Fun)
    point2.addEventListener("click", point2Fun)
    point3.addEventListener("click", point3Fun)
    // point5.addEventListener("click", point5Fun)

    // To Reduce code complexity checking every if sending the color according
    function arrayIndexsAtOnce(i) {
      if (i == 0) { return arr0Index() }
      else if (i == 1) { return arr1Index() }
      else if (i == 2) { return arr2Index() }
    }

    // Below are function to check, set & remove bullet colors [for array of 5 length]
    function arr0Index() {
      point1.setAttribute('id', 'firstBullet1')
      point2.removeAttribute('id', 'firstBullet1')
      point3.removeAttribute('id', 'firstBullet1')
    }
    function arr1Index() {
      point1.removeAttribute('id', 'firstBullet1')
      point2.setAttribute('id', 'firstBullet1')
      point3.removeAttribute('id', 'firstBullet1')
    }
    function arr2Index() {
      point1.removeAttribute('id', 'firstBullet1')
      point2.removeAttribute('id', 'firstBullet1')
      point3.setAttribute('id', 'firstBullet1')
    }
     
    slider_main_div.append(div);
  }

  slideImage1();
    
  // Sliding part image2 end

  // -------------------------------------------------------------------------
  function gotobasket(){
    window.location.href="basket.html"
  }

  let productList = JSON.parse(localStorage.getItem("productlist"))

function sortHIghTOLow(){
      productList= productList.sort(function(a,b){
     return b.price- a.price
 })
 fatchProducts(productList)
}

function sortLowTOHigh(){
  productList = productList.sort(function(a,b){
    return a.price - b.price
  })
  fatchProducts(productList)
}

function priceRange(){
   let pr = productList.filter(function(el){
      if(el.price >= 100 && el.price <= 200){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    productListDiv.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
function priceRange1(){
   let pr = productList.filter(function(el){
      if(el.price >= 200 && el.price <= 300){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    console.log("messae",pr)
    productListDiv.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
function priceRange2(){
   let pr = productList.filter(function(el){
      if(el.price >= 300){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    productListDiv.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
// fatchProducts(priceRange(productList))

function discountRange(){
  let pr = productList.filter(function(el){
      if(el.discount >= 10 && el.discount <= 20){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    productListDiv.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}
function discountRange1(){
  let pr = productList.filter(function(el){
      if(el.discount >= 20 && el.discount <= 30){
        // fatchProducts(el)
        return el
      //  console.log(el.price)
      }
    })
    productListDiv.innerHTML = null;
    pr.forEach(function (el) {
        createElement(el);
    })
    fatchProducts(pr)
}

function brandDisplay1(){
  let pr = productList.filter(function(el){
    if(el.brand === "Lakme"){
      console.log(el)
      return el
    }
  })
  productListDiv.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay2(){

  let pr = productList.filter(function(el){
    if(el.brand === "Wow"){
      console.log(el)
      return el
    }
  })
  productListDiv.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay3(){

  let pr = productList.filter(function(el){
    if(el.brand === "Mamaearth"){
      console.log(el)
      return el
    }
  })
  productListDiv.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
function brandDisplay4(){

  let pr = productList.filter(function(el){
    if(el.brand === "GoodVibes"){
      console.log(el)
      return el
    }
  })
  productListDiv.innerHTML = null;
  pr.forEach(function(el){
    createElement(el);
  })
  fatchProducts(pr)
}
// function brandDisplay1(){
//   let pr = productList.filter(function(el){
//     if(el.brand == "Lakme"){
//       return el
//     }
//   })
//   productListDiv.innerHTML = null;
//   pr.forEach(function(el){
//     createElement(el);
//   })
//   fatchProducts(pr)
// }