
/*----------NEW LAUNCHES STRAT-------*/
// navigation funcitonalities]
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

function goToProductPage(){
  window.location.href="ProductPage.html"
}
// ------------------------------------------------------------------


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
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626714490_skinstation-banner-web.png",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626775010_web-home-page-1298-px-_418-px.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705125_tfs_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705285_carmesi_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626705429_garnier_web.jpg",
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
      isClickPrev = true;
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


  // ------------------------------------------------------------------
  /*---------NEW LAUNCHES START--------*/
  var newLaunchSpan = document.getElementsByClassName("newlaunchbutton");
  var newLaunchDiv = document.getElementsByClassName("new_launch_img_div");

  var l = 0;
  newLaunchSpan[1].onclick = () => {
    l++;
    for (var i of newLaunchDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-120px";
      }
      if (l > 1) {
        l = 1;
      }
    }
  };
  newLaunchSpan[0].onclick = () => {
    l--;
    for (var i of newLaunchDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-120px";
      }
      if (l < 0) {
        l = 0;
      }
    }
  };
  /*--------NEW LAUNCHES END-------*/
  /*-------GOOD VIBES START-----*/
  var goodvibesSpan = document.getElementsByClassName("goodvibesbutton");
  var goodvibesDiv = document.getElementsByClassName("goodvibes_img_div");

  var l = 0;
  goodvibesSpan[1].onclick = () => {
    l++;
    for (var i of goodvibesDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l > 11) {
        l = 11;
      }
    }
  };

  goodvibesSpan[0].onclick = () => {
    l--;
    for (var i of goodvibesDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };

  /*------GOOD VIBES END--------*/

  /*-----PURPLLE PICKS START------*/
  var purpllepicksSpan = document.getElementsByClassName("purpllepicksbutton");
  var pirpllepicksDiv = document.getElementsByClassName("purpllepicks_img_div");

  var l = 0;
  purpllepicksSpan[1].onclick = () => {
    l++;
    for (var i of pirpllepicksDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1280px";
      }

      if (l > 5) {
        l = 5;
      }
    }
  };

  purpllepicksSpan[0].onclick = () => {
    l--;
    for (var i of pirpllepicksDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1280px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };

  /*-----PURPLLE PICKS END-------*/

  /*-----TOP BRANDS FOR YOU START-----*/
  var topbrandsSpan = document.getElementsByClassName("topbrandsbutton");
  var topbrandsDiv = document.getElementsByClassName("topbrands_img_div");

  var l = 0;
  topbrandsSpan[1].onclick = () => {
    l++;
    for (var i of topbrandsDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l > 11) {
        l = 11;
      }
    }
  };

  topbrandsSpan[0].onclick = () => {
    l--;
    for (var i of topbrandsDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };

  /*-----TOP BRANDS FOR YOU END-----*/

  /*-----BRAND STORES START-----*/

  var brandstoresSpan = document.getElementsByClassName("brandstoresbutton");
  var brandstoresDiv = document.getElementsByClassName("brandstores_img_div");

  var l = 0;
  brandstoresSpan[1].onclick = () => {
    l++;
    for (var i of brandstoresDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l > 11) {
        l = 11;
      }
    }
  };

  brandstoresSpan[0].onclick = () => {
    l--;
    for (var i of brandstoresDiv) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-290px";
      }
      if (l == 2) {
        i.style.left = "-580px";
      }
      if (l == 3) {
        i.style.left = "-870px";
      }
      if (l == 4) {
        i.style.left = "-1160px";
      }
      if (l == 5) {
        i.style.left = "-1450px";
      }
      if (l == 6) {
        i.style.left = "-1740px";
      }
      if (l == 7) {
        i.style.left = "-2030px";
      }
      if (l == 8) {
        i.style.left = "-2320px";
      }
      if (l == 9) {
        i.style.left = "-2610px";
      }
      if (l == 10) {
        i.style.left = "-2900px";
      }
      if (l == 11) {
        i.style.left = "-3020px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };

  /*-----BRAND STORES END-----*/

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
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626877147_loreal_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626877152_gv-web-banner.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626877148_nybae-web-banner.jpg",
        
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

  // Sliding part start - for 5 images3 - bhanu
    
  function slideImage2() {
    let i = 0;
    let point1 = document.getElementById("point21");
    let point2 = document.getElementById("point22");
    let point3 = document.getElementById("point23");
    let point4 = document.getElementById("point24");
    let point5 = document.getElementById("point25");
    let leftMove = document.getElementById("leftMoveSlider2");
    let rightMove = document.getElementById("rightMoveSlider2");

    let slider_main_div = document.getElementById("slider_main_div2");
  
    let div = document.createElement("div");
    div.setAttribute('class', '.smooth');
    let arr = [
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626873706_mamaearth_web-1.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626873973_store_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626874138_minimalist_web-1.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626890854_kanvar_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626876305_cetaphil_home-page-web.jpg"

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
      }, 7000);
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

    // Slide by clicking on bullet-4
    function point4Fun() {
      i = 3;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-5
    function point5Fun() {
      i = 4;
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
    point4.addEventListener("click", point4Fun)
    point5.addEventListener("click", point5Fun)

    // To Reduce code complexity checking every if sending the color according
    function arrayIndexsAtOnce(i) {
      if (i == 0) { return arr0Index() }
      else if (i == 1) { return arr1Index() }
      else if (i == 2) { return arr2Index() }
      else if (i == 3) { return arr3Index() }
      else if (i == 4) { return arr4Index() }
    }
   

    // Below are function to check, set & remove bullet colors [for array of 5 length]
    function arr0Index() {
      point1.setAttribute('id', 'firstBullet2')
      point2.removeAttribute('id', 'firstBullet2')
      point3.removeAttribute('id', 'firstBullet2')
      point4.removeAttribute('id', 'firstBullet2')
      point5.removeAttribute('id', 'firstBullet2')
    }
    function arr1Index() {
      point1.removeAttribute('id', 'firstBullet2')
      point2.setAttribute('id', 'firstBullet2')
      point3.removeAttribute('id', 'firstBullet2')
      point4.removeAttribute('id', 'firstBullet2')
      point5.removeAttribute('id', 'firstBullet2')
    }
    function arr2Index() {
      point1.removeAttribute('id', 'firstBullet2')
      point2.removeAttribute('id', 'firstBullet2')
      point3.setAttribute('id', 'firstBullet2')
      point4.removeAttribute('id', 'firstBullet2')
      point5.removeAttribute('id', 'firstBullet2')
    }
    function arr3Index() {
      point1.removeAttribute('id', 'firstBullet2')
      point2.removeAttribute('id', 'firstBullet2')
      point3.removeAttribute('id', 'firstBullet2')
      point4.setAttribute('id', 'firstBullet2')
      point5.removeAttribute('id', 'firstBullet2')
    }
    function arr4Index() {
      point1.removeAttribute('id', 'firstBullet2')
      point2.removeAttribute('id', 'firstBullet2')
      point3.removeAttribute('id', 'firstBullet2')
      point4.removeAttribute('id', 'firstBullet2')
      point5.setAttribute('id', 'firstBullet2')
    }

    slider_main_div.append(div);
  }

  slideImage2();
    
    
  // Sliding part image3 end

  // -------------------------------------------------------------------------

  // Sliding part start - for 5 images4 - bhanu
    
  function slideImage3() {
    let i = 0;
    let point1 = document.getElementById("point31");
    let point2 = document.getElementById("point32");
    let point3 = document.getElementById("point33");
    let point4 = document.getElementById("point34");
    let point5 = document.getElementById("point35");
    let leftMove = document.getElementById("leftMoveSlider3");
    let rightMove = document.getElementById("rightMoveSlider3");

    let slider_main_div = document.getElementById("slider_main_div3");
  
    let div = document.createElement("div");
    div.setAttribute('class', '.smooth');
    let arr = [
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626878375_wow_web-2.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626888134_nivea_home-page-web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626874235_lotush_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626890609_sanfe_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626890977_bella-voste_web.jpg"
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
      }, 2000);
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

    // Slide by clicking on bullet-4
    function point4Fun() {
      i = 3;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-5
    function point5Fun() {
      i = 4;
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
    point4.addEventListener("click", point4Fun)
    point5.addEventListener("click", point5Fun)

    // To Reduce code complexity checking every if sending the color according
    function arrayIndexsAtOnce(i) {
      if (i == 0) { return arr0Index() }
      else if (i == 1) { return arr1Index() }
      else if (i == 2) { return arr2Index() }
      else if (i == 3) { return arr3Index() }
      else if (i == 4) { return arr4Index() }
    }
   

    // Below are function to check, set & remove bullet colors [for array of 5 length]
    function arr0Index() {
      point1.setAttribute('id', 'firstBullet3')
      point2.removeAttribute('id', 'firstBullet3')
      point3.removeAttribute('id', 'firstBullet3')
      point4.removeAttribute('id', 'firstBullet3')
      point5.removeAttribute('id', 'firstBullet3')
    }
    function arr1Index() {
      point1.removeAttribute('id', 'firstBullet3')
      point2.setAttribute('id', 'firstBullet3')
      point3.removeAttribute('id', 'firstBullet3')
      point4.removeAttribute('id', 'firstBullet3')
      point5.removeAttribute('id', 'firstBullet3')
    }
    function arr2Index() {
      point1.removeAttribute('id', 'firstBullet3')
      point2.removeAttribute('id', 'firstBullet3')
      point3.setAttribute('id', 'firstBullet3')
      point4.removeAttribute('id', 'firstBullet3')
      point5.removeAttribute('id', 'firstBullet3')
    }
    function arr3Index() {
      point1.removeAttribute('id', 'firstBullet3')
      point2.removeAttribute('id', 'firstBullet3')
      point3.removeAttribute('id', 'firstBullet3')
      point4.setAttribute('id', 'firstBullet3')
      point5.removeAttribute('id', 'firstBullet3')
    }
    function arr4Index() {
      point1.removeAttribute('id', 'firstBullet3')
      point2.removeAttribute('id', 'firstBullet3')
      point3.removeAttribute('id', 'firstBullet3')
      point4.removeAttribute('id', 'firstBullet3')
      point5.setAttribute('id', 'firstBullet3')
    }

    slider_main_div.append(div);
  }

  slideImage3();
    
    
  // Sliding part image4 end

  // -------------------------------------------------------------------------

  // Sliding part start - for 5 images3 - bhanu
    
  function slideImage4() {
    let i = 0;
    let point1 = document.getElementById("point41");
    let point2 = document.getElementById("point42");
    let point3 = document.getElementById("point43");
    let point4 = document.getElementById("point44");
    let point5 = document.getElementById("point45");
    let leftMove = document.getElementById("leftMoveSlider4");
    let rightMove = document.getElementById("rightMoveSlider4");

    let slider_main_div = document.getElementById("slider_main_div4");
  
    let div = document.createElement("div");
    div.setAttribute('class', '.smooth');
    let arr = [
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626874725_sb_web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626711800_elite-37-off-web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626711802_one-one-web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626711804_freebie-ne-web.jpg",
      "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1626711799_cashback-web.jpg"
        
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

    // Slide by clicking on bullet-4
    function point4Fun() {
      i = 3;
      // Function For bullet point
      arrayIndexsAtOnce(i)
      image.src = arr[i];
      div.append(image);
    }

    // Slide by clicking on bullet-5
    function point5Fun() {
      i = 4;
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
    point4.addEventListener("click", point4Fun)
    point5.addEventListener("click", point5Fun)

    // To Reduce code complexity checking every if sending the color according
    function arrayIndexsAtOnce(i) {
      if (i == 0) { return arr0Index() }
      else if (i == 1) { return arr1Index() }
      else if (i == 2) { return arr2Index() }
      else if (i == 3) { return arr3Index() }
      else if (i == 4) { return arr4Index() }
    }
   

    // Below are function to check, set & remove bullet colors [for array of 5 length]
    function arr0Index() {
      point1.setAttribute('id', 'firstBullet4')
      point2.removeAttribute('id', 'firstBullet4')
      point3.removeAttribute('id', 'firstBullet4')
      point4.removeAttribute('id', 'firstBullet4')
      point5.removeAttribute('id', 'firstBullet4')
    }
    function arr1Index() {
      point1.removeAttribute('id', 'firstBullet4')
      point2.setAttribute('id', 'firstBullet4')
      point3.removeAttribute('id', 'firstBullet4')
      point4.removeAttribute('id', 'firstBullet4')
      point5.removeAttribute('id', 'firstBullet4')
    }
    function arr2Index() {
      point1.removeAttribute('id', 'firstBullet4')
      point2.removeAttribute('id', 'firstBullet4')
      point3.setAttribute('id', 'firstBullet4')
      point4.removeAttribute('id', 'firstBullet4')
      point5.removeAttribute('id', 'firstBullet4')
    }
    function arr3Index() {
      point1.removeAttribute('id', 'firstBullet4')
      point2.removeAttribute('id', 'firstBullet4')
      point3.removeAttribute('id', 'firstBullet4')
      point4.setAttribute('id', 'firstBullet4')
      point5.removeAttribute('id', 'firstBullet4')
    }
    function arr4Index() {
      point1.removeAttribute('id', 'firstBullet4')
      point2.removeAttribute('id', 'firstBullet4')
      point3.removeAttribute('id', 'firstBullet4')
      point4.removeAttribute('id', 'firstBullet4')
      point5.setAttribute('id', 'firstBullet4')
    }

    slider_main_div.append(div);
  }

  slideImage4();

    
// Sliding part image5 end

// --------------------------------------------------------------------------
