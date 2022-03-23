//Change rate value when it is inputter
function updateRate() {
  var rate_val = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rate_val;
}

//Actions for compute button
function compute() {
  //get values
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var n = document.getElementById("years").value;

  //calculate interest
  var interest = (p * n * r) / 100;

  //when principal is less than 0
  if (p <= 0) {
    window.alert("Enter a positive number");
    document.focus("principal");
  }
  //when principal is greater than 0
  else if (p > 0) {
    var year = new Date().getFullYear() + parseInt(n);
    document.getElementById("result").innerHTML = interest;
    document.getElementById("word").innerHTML = "If you deposit ";
    document.getElementById("p").innerHTML = p;
    document.getElementById("text").innerHTML = "at an interest rate of ";
    document.getElementById("ratee").innerHTML = r;
    document.getElementById("per").innerHTML = "%";
    document.getElementById("message").innerHTML =
      "You will recieve an amount of ";
    document.getElementById("resultt").innerHTML = interest;
    document.getElementById("textt").innerHTML = "in the year ";
    document.getElementById("year").innerHTML = year;
  }
}
