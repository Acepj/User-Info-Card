
let form = document.getElementById("userForm");
let output = document.getElementById("output");
let status = document.getElementById("status");


form.onsubmit = function (event) {
  event.preventDefault();
  showInfo();
};


function showInfo() {

  
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let birthday = document.getElementById("birthday").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let favoriteColor = document.getElementById("favoriteColor").value;
  let hobby = document.getElementById("hobby").value;
  let favoriteFood = document.getElementById("favoriteFood").value;
  let occupation = document.getElementById("occupation").value;
  let bio = document.getElementById("bio").value;

  
  let genderPick = document.querySelector('input[name="gender"]:checked');
  let gender = "";                 
  if (genderPick !== null) {
    gender = genderPick.value;     
  }

  
  let allInputs = document.querySelectorAll("input");

  
  let info = "";
  info += "<p class='info-line'><strong>Full Name:</strong> " + fullName + "</p>";
  info += "<p class='info-line'><strong>Email Address:</strong> " + email + "</p>";
  info += "<p class='info-line'><strong>Age:</strong> " + age + "</p>";
  info += "<p class='info-line'><strong>Birthday:</strong> " + birthday + "</p>";
  info += "<p class='info-line'><strong>Phone Number:</strong> " + phone + "</p>";
  info += "<p class='info-line'><strong>Address:</strong> " + address + "</p>";
  info += "<p class='info-line'><strong>Favorite Color:</strong> " + favoriteColor + "</p>";
  info += "<p class='info-line'><strong>Gender:</strong> " + gender + "</p>";
  info += "<p class='info-line'><strong>Hobby:</strong> " + hobby + "</p>";
  info += "<p class='info-line'><strong>Favorite Food:</strong> " + favoriteFood + "</p>";
  info += "<p class='info-line'><strong>Occupation:</strong> " + occupation + "</p>";
  info += "<p class='info-line'><strong>Short Bio:</strong> " + bio + "</p>";

  
  output.innerHTML = info;


  let detailLines = document.getElementsByClassName("info-line");


  status.textContent = "Your information is displayed: " + detailLines.length +
    " details read from " + allInputs.length + " input fields.";
}
