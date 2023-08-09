let burger = document.querySelector(".burger")
let page = document.querySelector(".page")


let menuBlock = document.createElement("div")
menuBlock.classList.add("menuBlock")

let closeButton = document.createElement("div")
closeButton.classList.add("closeButton")
closeButton.style.backgroundImage = "url(./img/006.svg)"
menuBlock.appendChild(closeButton)

let burgerList = document.createElement("div")
burgerList.classList.add("burgerList")
menuBlock.appendChild(burgerList)

let contactList = document.createElement("div")
contactList.classList.add("contactList")
menuBlock.appendChild(contactList)

let citem1 = document.createElement("span")
let citem2 = document.createElement("span")

citem1.classList.add("contactListItem1")
citem2.classList.add("contactListItem2")

citem1.innerText = "+38 096 111 11 11"
citem2.innerText = "info@devstudio.com"

contactList.appendChild(citem1)
contactList.appendChild(citem2)

let item1 = document.createElement("a")
let item2 = document.createElement("a")
let item3 = document.createElement("a")

item1.classList.add("listItem")
item2.classList.add("listItem")
item3.classList.add("listItem")

item1.setAttribute("href", "index.html")
item2.setAttribute("href", "portfolio.html")

item1.innerText = "Студія"
item2.innerText = "Портфоліо"
item3.innerText = "Контакти"

burgerList.appendChild(item1)
burgerList.appendChild(item2)
burgerList.appendChild(item3)


function openMenu() {
    console.log("working")
    page.appendChild(menuBlock)
}

burger.addEventListener("click", openMenu)

function closeMenu() {
    console.log("closing")
    menuBlock.remove()
}

closeButton.addEventListener("click", closeMenu)





