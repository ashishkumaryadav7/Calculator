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
    num.value += n1.innerText;
})
n2.addEventListener('click',function(){
    num.value += n2.innerText;
})
n3.addEventListener('click',function(){
    num.value += n3.innerText;
})
n4.addEventListener('click',function(){
    num.value += n4.innerText;
})
n5.addEventListener('click',function(){
    num.value += n5.innerText;
})
n6.addEventListener('click',function(){
    num.value += n6.innerText;
})
n7.addEventListener('click',function(){
    num.value += n7.innerText;
})
n8.addEventListener('click',function(){
    num.value += n8.innerText;
})
n9.addEventListener('click',function(){
    num.value += n9.innerText;
})
n0.addEventListener('click',function(){
    num.value += n0.innerText;
})
dot.addEventListener('click',function(){
    num.value += dot.innerText;
    
})
ac.addEventListener('click',function(){
    num.value = null;
})
del.addEventListener('click',function(){
    if(num.value.length > 0) {
        num.value = num.value.slice(0, -1);}
})
mod.addEventListener('click',function(){
    num.value += mod.innerText;
    
})
plus.addEventListener('click',function(){
    num.value += plus.innerText;
})
minus.addEventListener('click',function(){
    num.value += minus.innerText;
})
product.addEventListener('click',function(){
    num.value += product.innerText;
})
division.addEventListener('click',function(){
    num.value += division.innerText;
})
equal.addEventListener('click',function(){
    num.value += equal.innerText;
})
