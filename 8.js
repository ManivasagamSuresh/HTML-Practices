let a = document.getElementById("hello").textContent;
console.log(a);


let b = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve("hello");
},3000);
});

let c = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("heo");
},1000);
});

let d = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("hlo");
},4000);
});
console.log(b,c,d);
Promise.all([b,c,d]).then(data=>console.log(data)).catch((error)=>console.log(error));
console.log(b);
b.then(data=>console.log(data))