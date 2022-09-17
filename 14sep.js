let button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("row1","row2","row3");
button.addEventListener("click",funny);
document.body.append(button);
function funny()
{
    console.log("hello")
}

let text = document.createElement("textarea");
button.setAttribute("type","button");
button.classList.add("row1","row2","row3");
text.addEventListener("keyup",fun);
document.body.append(text);
let ans=[];
function fun(event)
{
    
    ans.push(event.key);
    console.log(...ans);
}

let mouse = document.querySelector("p");
mouse.addEventListener("mouseover",mouses);
function mouses(even)
{
    console.log(even.target);
}