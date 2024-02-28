var buttons=document.querySelectorAll(".button-1,.button-2,.button-3,.button-4,.button-5,.button-6,.button-7,.button-8,.button-9,.button-0, .button-AC, .button-DEL, .button-mod, .button-div, .button-mul, .button-pls, .button-minus, .button-equal,.button-dot");
var num = document.getElementById("number");
function buttonPressed(val){
    val.classList.add('pressed');
    // console.log(val);
    setTimeout(function(){
        val.classList.remove('pressed');
    },150)
}

buttons.forEach(function(buttton){
    buttton.addEventListener('click',function(e){
        var className=buttton.className;
        buttonPressed(buttton);
        // console.log(buttton.innerHTML);
        // fillValue(className);
    })
});


const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const n8 = document.getElementById("n8");
const n9 = document.getElementById("n9");
const n0 = document.getElementById("n0");
const dot = document.getElementById("dots");
const ac = document.getElementById("AllClear");
const del = document.getElementById("Delete");
const mod = document.getElementById("mod");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");
const equal = document.getElementById("equal");



n1.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = n1.innerText;
    }
    else{
        num.value += n1.innerText;
    }
})
n2.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n2.innerText;
    }
    else{
        num.value += n2.innerText;
    }
})
n3.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n3.innerText;
    }
    else{
        num.value += n3.innerText;
    }
})
n4.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n4.innerText;
    }
    else{
        num.value += n4.innerText;
    }
})
n5.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n5.innerText;
    }
    else{
        num.value += n5.innerText;
    }
})
n6.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n6.innerText;
    }
    else{
        num.value += n6.innerText;
    }
})
n7.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n7.innerText;
    }
    else{
        num.value += n7.innerText;
    }
})
n8.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n8.innerText;
    }
    else{
        num.value += n8.innerText;
    }
})
n9.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n9.innerText;
    }
    else{
        num.value += n9.innerText;
    }
})
n0.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value += n0.innerText;
    }
    else{
        num.value += n0.innerText;
    }

})
dot.addEventListener('click',function(){
    if(num.value === "Error" ){
        num.value = null;
        num.value = '0'+dot.innerText;
    }
    else if(num.value == ''){
        num.value = '0'+dot.innerText;
    }
    else{
        num.value += dot.innerText;
    }
    
})
ac.addEventListener('click',function(){
    num.value = null;
})
del.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
    }
    else{
        if(num.value.length > 0) {
      
            num.value = num.value.slice(0, -1);}
    }
    
})
mod.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = '0'+ mod.innerText; 
    }
    else if(num.value === ''){
        num.value = '0'+ mod.innerText; 
    }
    else{
        num.value += mod.innerText;  
    }
    
})
plus.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = '0'+ plus.innerText;
    }
    else if(num.value === ''){
        num.value = '0'+ plus.innerText; 
    }
    else{
        num.value += plus.innerText; 
    }
})
minus.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = '0'+ minus.innerText;
    }
    else if(num.value === ''){
        num.value = '0'+ minus.innerText; 
    }
    else{
        num.value += minus.innerText; 
    }
})
product.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = '0'+ product.innerText;
    }
    else if(num.value === ''){
        num.value = '0'+ product.innerText; 
    }
    else{
        num.value += product.innerText; 
    }
})
division.addEventListener('click',function(){
    if(num.value == "Error"){
        num.value = null;
        num.value = '0'+ division.innerText;
    }
    else if(num.value === ''){
        num.value = '0'+ division.innerText; 
    }
    else{
        num.value += division.innerText;
    }
})
equal.addEventListener('click',function(){
    try{
        if(num === null){
            num.value=null;

        }
        else if(num.value === ''){

        }
        else if(num.value == "Error"){
            num.value = null;
        }
        else{
        calculation(num);
        }
    }
    catch(error){
    }
})


function calculation(input){
    let finalResult = 0;
    var newValue = input.value;
    var strArray = newValue.split(/[\/\*\+\-\%]/);
    var operators = newValue.split(/[^\/\*\+\-\%]+/).filter(Boolean);
      let flag = false;
      for(let i = 0; i < strArray.length; i++) {
          if(strArray[i] === ''){
              flag = true;
              break;
          }
      }
      if (flag){
              num.value = "Error";
      }
      else{
        
        try {
            finalResult = eval(newValue);
            num.value = finalResult;
        } catch(e) {
            num.value = "Error";
        }
      }
      
}
