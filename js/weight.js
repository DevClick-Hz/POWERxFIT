function Bmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  if (weight === "" || height === "") {
    document.getElementById("resault").innerHTML = `Please fill Values`;
  } else {
    let wmenu = document.getElementById("wmenu");
    let hmenu = document.getElementById("hmenu");
    let wm = wmenu.options[wmenu.selectedIndex].text;
    let hm = hmenu.options[hmenu.selectedIndex].text;
    if (wm === "Kg") {
      weight = weight;
    } else {
      weight = weight * 0.45359237;
    }
    if (hm === "Cm") {
      height = height / 100;
    } else {
      height = height;
    }
    let bm = Math.round(weight / (height * height));
    if (bm >= 18.5 && bm <= 24.9) {
      document.getElementById(
        "resault"
      ).innerHTML = `Your Body Mass Index is ${bm} this is considered Normal`;
    } else if (bm > 24.9) {
      document.getElementById(
        "resault"
      ).innerHTML = `Your Body Mass Index is ${bm} this is considered overweight`;
    } else {
      document.getElementById(
        "resault"
      ).innerHTML = `Your Body Mass Index is ${bm} this is considered underweight`;
    }
  }
}
let calcuBtn = document.getElementById("calcu-btn");
calcuBtn.addEventListener("click", function() {
  Bmi();
});
