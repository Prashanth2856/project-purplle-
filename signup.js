function signUp() {
  let mobile = document.getElementById("mobile").value;
  let mail = document.getElementById("mail").value;
  let password = document.getElementById("password").value;

  if (mobile === "" || mail === "" || password === "") {
    alert("please fill all required details");
    return false;
  }

  let userDetails = [
    {
      userMobile: mobile,
      userMail: mail,
      userPassword: password,
    },
  ];

  let userInformation = localStorage.getItem("mobileDetails");
  if (userInformation == null) {
    userInformation = [];
  } else {
    userInformation = JSON.parse(localStorage.getItem("mobileDetails"));
  }
  userInformation.push(userDetails);
  localStorage.setItem("mobileDetails", JSON.stringify(userInformation));
  alert("Succesfully Registered");
}

function backToLP() {
  window.location.href = "LandingPage.html";
}
