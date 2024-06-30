const element = document.getElementById("myBtn");

const busImg = document.getElementById("loader");

function hideBus() {
    busImg.style.display = "none";
  }
  
  hideBus();


element.addEventListener("click", myFunction);

function myFunction() {

    let numArr = [];
for (let i = 0; i < 7; i++) {
    let num = Math.floor(Math.random() * 49) + 1;
 // Math.random() * 49 =>  0 -> 48.9999999999999999999999
 // Math.ceil(Math.random() * 49) =>  0 -> 49 => additional checking num != 0
 // Math.floor(Math.random() * 49) => 0 -> 48 => all plus one => 1 - 49 
    if (numArr.indexOf(num) < 0) { 
        // number ok 
        numArr.push(num);
    } else {
        // number repeated
        i--;
    }
}

numArr.sort(function(a, b){return a-b})

    let arr = []

    let count = 0


    arr.push(document.getElementById("lname").value)
    arr.push(document.getElementById("2name").value)
    arr.push(document.getElementById("3name").value)
    arr.push(document.getElementById("4name").value)
    arr.push(document.getElementById("5name").value)
    arr.push(document.getElementById("6name").value)
    arr.push(document.getElementById("7name").value)
    
    for(let ggg=0;ggg<arr.length;ggg++){

    }




 if (arr == ',,,,,,'){
    arr=[]
    for (let i = 0; i < 7; i++) {
        let num2 = Math.floor(Math.random() * 49) + 1;
     // Math.random() * 49 =>  0 -> 48.9999999999999999999999
     // Math.ceil(Math.random() * 49) =>  0 -> 49 => additional checking num != 0
     // Math.floor(Math.random() * 49) => 0 -> 48 => all plus one => 1 - 49 
        if (arr.indexOf(num2) < 0) { 
            // number ok 
            arr.push(num2);
        } else {
            // number repeated
            i--;
        }
    }
    
 }

 arr.sort(function(a, b){return a-b})


for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < numArr.length; j++){
        if(arr[i] == numArr[j]){
            count++
        }
    }
}

let para = document.createElement("div");

para.classList.add("all");

let para1 = document.createElement("div");

para1.classList.add("my");

para1.innerText = "你的選擇 " + arr 

let para2 = document.createElement("div");

para2.classList.add("my");

para2.innerText = "攪珠結果 " + "\n" + numArr

let para3 = document.createElement("div");

para3.classList.add("my");

para3.innerText = "猜中數目 " + "\n" + count 


for(let gg = 0; gg < arr.length;gg++) {

    for (let ggg = gg + 1 ; ggg < arr.length; ggg++) {

       
if(arr[gg] == arr[ggg] || arr[gg]<=0 || arr[gg]>49 || arr[gg] == ''){
    alert('please input correct numbers')
    return;
}else{

    function add(){
    document.getElementById("xyz").appendChild(para).appendChild(para1)
    
    document.getElementById("xyz").appendChild(para).appendChild(para2)
    
    document.getElementById("xyz").appendChild(para).appendChild(para3)
    }

    busImg.style.display = "block";
    setTimeout(add, 1500);
    setTimeout(hideBus, 1500);
    


}
     

    }
}



para.addEventListener("click", removeFunction);

function removeFunction() {
    document.getElementById("xyz").removeChild(para)
}
}















