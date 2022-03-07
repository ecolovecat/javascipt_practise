let number = document.getElementById("input");
let btn = document.querySelector("#btn_check");
let noti = document.querySelector("#span_result");
btn.onclick = function() {
    if(number.value == null || number.value == "") {
        noti.innerHTML = "Chua nhap du lieu"
    }
    if(number.value % 1 == 0 && number.value > 0) {
        noti.innerHTML = `Day la so nguyen duong ${number.value}`;
    }
    else noti.innerHTML = `Day khong phai so nguyen duong ${number.value}`;
}

// let number_object = {
//     number1 : 30,
//     number2 : 40
// }

// console.log (number_object.number1 + number_object.number2)

// let mang = [1,5,8,10];
// let sum = 0;
// for(let i = 0; i < mang.length;i++) {
//     sum+=mang[i];
// }
// console.log(sum);

// let mang = [1,5,8,10];

// let sum = 0;
// sumfunc = (value) =>  sum+=value
// mang.forEach(sumfunc);

// console.log(
//     sum
// )


// let sum = 0;
// let mang = [1,2,3,4,5];
// mang.map(function(value) {
//     sum += value;
// })
// let mang2 = mang.map(function(value) {
//     return value+1;
// })
// console.log(mang2)
// console.log(sum);

// let mang = [1,2,3,4,5];
// let sum = mang.reduce(function(total,value) {
//     return total + value
// })
// console.log(sum);

// const note = {
//     name : "Tran Phuong Duy",
//     age : 22,
//     country : "Vietnam"
// }

// const {name, age, country} = note;
// console.log(name);
// console.log(age);
// console.log(country);


// let mang=[1,2,3,4];
// const [num1,num2,num3,num4] = mang;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// let mang1 = [1,2,3,4,5];
// const mang2 = [6,7,8,9];
// const mangmoi = [...mang1,...mang2];
// console.log(mangmoi)


const obj = {
    name : "Duy",
    age : 22
}

const obj2 = {...obj};
console.log(obj2)