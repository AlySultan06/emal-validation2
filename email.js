let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u
let form = document.getElementsByTagName("form")[0]
let email = document.getElementById("n")
let container = document.querySelector(".container")
function check(){
    if(regEx.test(email.value) == true){
      
        email.style.cssText= "border:1px solid green"
    }else{email.style.cssText= "border:1px solid  red; color:red; background:rgba(255,0,0 / 50%)"
}
}

email.onclick = () => {
    email.style.cssText= "border:1px solid grey; color:black"
}


form.onsubmit = (e) => {
    
if(regEx.test(email.value) == true){

container.innerHTML = ""
let img = document.createElement("img")
img.src = "assets/images/icon-list.svg"
img.style.cssText = "width:80px; margin-bottom: 20px;"

container.style.cssText = "max-width:333px; display:block; padding:30px;"
container.append(img)
let h1 = document.createElement("h1")
h1.style.cssText = "margin-bottom:20px; color:hsl(234, 29%, 20%)"
h1.textContent = "Thanks for Subscribing"
container.append(h1)
let p = document.createElement("p")
p.style.cssText = "color:hsl(234, 29%, 20%); margin-bottom:20px; line-height:1.3;"
p.innerHTML = `Thanks for subscribing! A confirmation email has been sent to <span>${email.value} </span> Please open it and click the button inside to confirm your subscription.`
container.append(p)
let btn = document.createElement("button")
btn.style.cssText = " border-radius: 5px; background-color: hsl(234, 29%, 20%);color: white;padding: 15px;border: none;cursor: pointer; width:100%"
btn.textContent = "Dismiss message"
container.append(btn)
}else{e.preventDefault()}


}