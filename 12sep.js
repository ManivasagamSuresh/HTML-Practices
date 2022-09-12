document.getElementById("txt").addEventListener("keyup",(event)=>{
    console.log(event.key);


});
let a = document.getElementById("txt");
a.addEventListener("keyup",fun);

function fun(event){
    console.log(event.key)
}