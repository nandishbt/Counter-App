var plusbtm = document.querySelector("#plus");
var num = document.querySelector("#num");
var minusbtm = document.querySelector("#minus");
var resetbtm = document.querySelector("#reset");
plusbtm.addEventListener('click',function(){
    num.textContent = Number(num.textContent) + 1;
})

minusbtm.addEventListener('click',function(){
    if(Number(num.textContent)!=0){
    num.textContent = Number(num.textContent) - 1;}

    else{
        num.textContent = 0;}
    }
)

resetbtm.addEventListener('click',function(){
    num.textContent = 0;
})