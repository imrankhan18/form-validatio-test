function clickNumber() {
  var name = document.getElementById("name").value;
  var num = document.getElementById("number").value;
  document.getElementById("1").innerHTML = " ";
  document.getElementById("2").innerHTML = " ";

  console.log(name, num);
  if (check(name, num)) {
    document.getElementById("1").innerHTML =`Name:${name}  <br>  Number: ${num}`;
    document.getElementById("1").style.color = "black";
  }
}
function check(name, num) {
  var z = 0;
  for (i = 0; i < name.length; i++) {
    var charck = name[i];
    if (
      charck == 1 ||
      charck == 2 ||
      charck == 3 ||
      charck == 4 ||
      charck == 5 ||
      charck == 0 ||
      charck == 6 ||
      charck == 7 ||
      charck == 8 ||
      charck == 9
    ) {
      document.getElementById("name").style.borderColor = "red";
      
    }
    else {
      document.getElementById("name").style.borderColor ="";
      document.getElementById("1").innerHTML = "Enter correct name format";
    }
  }

  if (name == "") {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("1").innerHTML = "Enter correct name<br>";
    document.getElementById("2").innerHTML = "Enter correct number";
    z++;
  }

  if (!isNaN(name)) {
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("1").innerHTML = "Enter correct name<br>";

    z++;
  }
  if (isNaN(num) || num == "" || num.length != "10") {
    document.getElementById("number").style.borderColor = "red";
    document.getElementById("2").innerHTML = "Enter correct number<br>";
    z++;
  }
  if (z == 0) return true;
  return false;
}

//document.getElementById("name").style.color = "red";
