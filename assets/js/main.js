
function mobiletoggle(){
  document.getElementById("mobile-nav").style.width = "100%";
  document.getElementById("mobile-nav").style.left = "0";
  document.getElementById("mobile-nav").style.top = "0";
}

function mobiletoggleOFF(){
  console.log(1)

  document.getElementById("mobile-nav").style.display = "block";
  document.getElementById("mobile-nav").style.width = "0%";
  document.getElementById("mobile-nav").style.left = "-200px";
}
