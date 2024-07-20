const element = document.getElementById("myBtn");

const busImg = document.getElementById("loader");



let number = 0

let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

function hideBus() {

    
    busImg.style.display = "none";
  }
  
  hideBus();

  let amount = 10000

element.addEventListener("click", few);

function few(numArr){

    if(amount>0){

    
   
    numArr = [];

    for (let i = 0; i < 7; i++) {
        let num = Math.floor(Math.random() * 49) + 1;
        if (numArr.indexOf(num) < 0) { 
            numArr.push(num);
        } else {
            i--;
        }
    }
    
    numArr.sort(function(a, b){return a-b})


    document.getElementById("xyz").innerHTML = ""
    let y = document.getElementById("8name").value;
    number += +y
let old = amount
let x = 0
while(x<y){
    myFunction(numArr,old) 
    x++
}}
}


function myFunction(numArr,old) {
    

    amount -= 500

  
   
    
let para = document.createElement("div");

para.classList.add("all");

let para1 = document.createElement("div");

para1.classList.add("my");

let para2 = document.createElement("div");

para2.classList.add("my");

let para3 = document.createElement("div");

para3.classList.add("my");

let count = 0

let arr = []


arr.push(document.getElementById("lname").value)
arr.push(document.getElementById("2name").value)
arr.push(document.getElementById("3name").value)
arr.push(document.getElementById("4name").value)
arr.push(document.getElementById("5name").value)
arr.push(document.getElementById("6name").value)
arr.push(document.getElementById("7name").value)

if (arr == ',,,,,,'){
    arr=[]
    for (let i = 0; i < 7; i++) {
        let num2 = Math.floor(Math.random() * 49) + 1;
        if (arr.indexOf(num2) < 0) { 
            arr.push(num2);
        } else {
            i--;
        }
    }
    
 }

 arr.sort(function(a, b){return a-b})



let right = []


for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < numArr.length; j++){
        if(arr[i] == numArr[j]){
           right.push(arr[i])
            count++
        }
    }
}


right.sort(function(a, b){return a-b})


if(count == 0){
    amount += 0
    count0++
} else if(count == 1){
    amount += 500
    count1++
} else if (count ==2){
    amount += 1000
    count2++
} else if (count ==3){
    amount += 1500
    count3++
}else if (count ==4){
    amount += 5000
    count4++
} else if (count ==5){
    amount += 20000
    count5++
} else if (count ==6){
    amount += 100000
    count6++
} else if (count ==7){
    amount += 1000000
    count7++
}


    para1.innerText = "你的選擇 " + "\n" + arr



para2.innerText = "攪珠結果 " + "\n" + numArr





if(right.length == 0){
    right = "無"
}

para3.innerText = "猜中數目 " + "\n" + count + "(" + right + ")"

function add(){

   

    document.getElementById("xyz").appendChild(para).appendChild(para1)
    
    document.getElementById("xyz").appendChild(para).appendChild(para2)
    
    document.getElementById("xyz").appendChild(para).appendChild(para3)

    document.getElementById("result").innerHTML = "攪珠結果: " + numArr

    document.getElementById("money").innerHTML = "賭本: $" + amount + "($" + (amount-old) + ")"

    document.getElementById("number").innerHTML = "總次數: " + number 
    
    document.getElementById("number0").innerHTML = "中0個次數: " + count0 +"(" + Math.round(count0/number*100) +"%)"
    document.getElementById("number1").innerHTML = "中1個次數: " + count1 +"(" + Math.round(count1/number*100) +"%)"
    document.getElementById("number2").innerHTML = "中2個次數: " + count2 +"(" + Math.round(count2/number*100) +"%)"
    document.getElementById("number3").innerHTML = "中3個次數: " + count3 +"(" + Math.round(count3/number*100) +"%)"
    document.getElementById("number4").innerHTML = "中4個次數: " + count4 +"(" + Math.round(count4/number*100) +"%)"
    document.getElementById("number5").innerHTML = "中5個次數: " + count5 +"(" + Math.round(count5/number*100) +"%)"
    document.getElementById("number6").innerHTML = "中6個次數: " + count6 +"(" + Math.round(count6/number*100) +"%)"
    document.getElementById("number7").innerHTML = "中7個次數: " + count7 +"(" + Math.round(count7/number*100) +"%)"



    }



let invalid = false
for(let gg = 0; gg < arr.length;gg++) {

    for (let ggg = gg + 1 ; ggg < arr.length; ggg++) {

       
if(arr[ggg] == arr[gg] || arr[gg]<=0 || arr[gg]>49 || arr[gg] == ''||arr[ggg]== ''){
    alert('please input correct numbers')
    return invalid = true
}

    }
}

if(!invalid){
busImg.style.display = "block";
setTimeout(add, 1000);
setTimeout(hideBus, 1000);

}



}







