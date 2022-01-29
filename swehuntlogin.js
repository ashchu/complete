function validateForm() {
  var username = document.forms["Papaisinthehouse"]["fname"].value;
  var password = document.forms["Papaisinthehouse"]["fpassword"].value;
  if (username.toLowerCase() == "iloveswe" && password.toLowerCase() == "mushy") {
    alert("YAY YOU MADE IT!!");
  } else {
    alert("I don't rickroll. Instead I...");
    window.open("https://www.youtube.com/watch?v=y2GYh0bpxd8");
  }
}
