let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})

//------------Swiper JS Code
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    }
});

//Dynamic Images

const SectionCenter = document.querySelector(".menu_items_container");
const filterBtns = document.querySelectorAll(".btn-cat");

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.Category == Category){
                return menuItem;
            }
        });
        if(Category=="all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCategory);
        }
    }) 
});

const menu =[
    {
        id: 1,
        title: "Chicken Tandoori",
        Category: "Appetizers",
        price: 200,
        img: "tandoori.jpg"
    },
    {
        id: 2,
        title: "Chicken Manchow Soup",
        Category: "Appetizers",
        price: 250,
        img: "manchow.jpg"
    },
    {
        id: 3,
        title: "Chilly Paneer",
        Category: "Appetizers",
        price: 220,
        img: "panneer.jpg"
    },
    {
        id: 4,
        title: "Paneer Butter Masala",
        Category: "Main Course",
        price: 230,
        img: "butter.jpg"
    },
    {
        id: 5,
        title: "Veg Kadai",
        Category: "Main Course",
        price: 230,
        img: "kadai.jpg"
    },
    {
        id: 6,
        title: "Cashew Tomato",
        Category: "Main Course",
        price: 230,
        img: "kaju.jpg"
    },
    {
        id: 7,
        title: "Vanilla",
        Category: "Desserts",
        price: 140,
        img: "vanilla.jpg"
    },
    {
        id: 8,
        title: "Black Current",
        Category: "Desserts",
        price: 180,
        img: "current.jpg"
    },
    {
        id: 9,
        title: "Butter Scotch",
        Category: "Desserts",
        price: 160,
        img: "scotch.jpg"
    },
]

window.addEventListener("DOMContentLoaded",function(){
    displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map(function(item){
        return `<div class="img_cards">
        <img src=${item.img} alt="" width="360px" height="360px">
        <p class="price">Only on ₹${item.price}</p>
        <p>${item.title}</p>
        </div>`;
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
}

//static counter
const countersEl = document.querySelectorAll(".num");
countersEl.forEach((countersEl)=>{
    countersEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNum = +countersEl.innerText;
        const dataCeil = countersEl.getAttribute("data-ceil");
        const increment = dataCeil/15;
        currentNum = Math.ceil(currentNum+increment);
        if(currentNum<dataCeil){
            countersEl.innerText = currentNum;
            setTimeout(incrementCounter,70);
        }
        else{
            countersEl.innerText = dataCeil;
        }
    }
});

const nav = document.querySelector("header");
window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
});

const Parallax = document.querySelector("#showcase");
window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    Parallax.style.backgroundPositionY = offset*0.7+"px";
});