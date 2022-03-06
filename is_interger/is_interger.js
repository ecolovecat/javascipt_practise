let number = document.getElementById("input");
let btn = document.querySelector("#btn_check");
let noti = document.querySelector("#span_result");
btn.onclick = function() {
    if(number.value % 1 == 0 && number.value > 0) {
        noti.innerHTML = `Day la so nguyen duong ${number.value}`;
    }
    else noti.innerHTML = `Day khong phai so nguyen duong ${number.value}`;
}