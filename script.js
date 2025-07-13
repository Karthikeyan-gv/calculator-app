
let temp=document.getElementById("temp")

let res1=document.getElementById("res1")
let res2=document.getElementById("res2")

let ac=document.getElementById("ac")
let mod=document.getElementById("mod")
let del=document.getElementById("del")
let divide=document.getElementById("divide")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let multi=document.getElementById("multi")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let sub=document.getElementById("sub")
let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let add=document.getElementById("add")
let zero2=document.getElementById("zero2")
let zero=document.getElementById("zero")
let dot=document.getElementById("dot")
let equal=document.getElementById("equal")

let res
function calculate(a){
    res=(res1.innerHTML=res1.innerHTML+a)
}
function result(b) {
    res2.innerHTML=eval(res)
}
function deletevalue(c) {
    res1.innerHTML=res1.innerHTML.slice(0,-1)
}

let icon=document.getElementById("about")