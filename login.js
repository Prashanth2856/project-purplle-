function startLogin(e) {
  e.preventDefault();

  const username = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  //step 2 - check the data
  let usersData = JSON.parse(localStorage.getItem("mobileDetails"));
  var count = 0;
  for (let i = 0; i < usersData.length; i++) {
    let u = usersData[i][0].userMobile;
    let p = usersData[i][0].userPassword;
    //   console.log(u);
    //   console.log(p);

    // console.log(mail);

    if (u === username && p === password) {
      //  alert("Succeed");
      window.location.href = "LandingPage.html";
      document.getElementById("mobile").value = null;
      document.getElementById("password").value = null;
      break;
    } else {
      count++;
    }
  }
  if (count === usersData.length) {
    alert("Invalid Credentials");
    document.getElementById("mobile").value = null;
    document.getElementById("password").value = null;
  }
}

function backToLP() {
  window.location.href = "LandingPage.html";
}
