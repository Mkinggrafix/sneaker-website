// side menu
const sideMenu = document.querySelector('.side-menu');
const sideBar = document.querySelector('.nav-menu');
const closeSideMenu = document.querySelector('.close-side-menu');

sideMenu.addEventListener('click', openSideBar);
closeSideMenu.addEventListener('click', closeSideBar);

function openSideBar(){
    sideBar.classList.add('pad-sideMenu');
    sideBar.style.width = '10rem';
}

function closeSideBar() {
    sideBar.classList.remove('pad-sideMenu');
    sideBar.style.width = '0';
}

// cart-box
const showCart = document.querySelector('.show-cart');
const closeBtn = document.querySelector('.close-cart');
const cartBox = document.querySelector('.cart-box');
console.log(closeBtn)

showCart.addEventListener('click', displayCart);
closeBtn.addEventListener('click', closeCart);

function displayCart(){
    cartBox.classList.add('transition');
    cartBox.style.display = "block";
}

function closeCart(){
    cartBox.style.display = "none";
}


// cart item
// To add and remove item
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const result = document.querySelector('.result');

increment.addEventListener('click', add);
decrement.addEventListener('click', subtract);

function add(){
    result.textContent++;
};


function subtract(){
    if (result.textContent == 0) {
        result.textContent = 0
    }else {
        result.textContent--;
    }
}

// update cart-index
const cartIndex = document.querySelector('.cart-index');

// update cart item
const btn = document.querySelector('.btn');
const cartNo = document.querySelector('.cart-value');

btn.addEventListener('click', (e) => {
    cartNo.textContent = result.textContent;
    cartIndex.textContent = result.textContent;
});


// cart invoice
const shoePrice = document.querySelector('.shoe-price');
const output = document.querySelector('.output');
const calBtn = document.querySelector('.btn-1');

calBtn.addEventListener('click', calculate)

function calculate() {
    output.textContent = result.textContent * shoePrice.textContent;
}

// clear cart
const cartBody = document.querySelector('.cart-body');
const deleteBtn = document.querySelector('.delete-btn');
const clearMsg = document.querySelector('.clear-msg')

deleteBtn.addEventListener('click', clearCart);

function clearCart(){
    cartBody.style.display = 'none';
    calBtn.style.display = 'none';
    clearMsg.classList.add('msg');
    clearMsg.innerHTML = '<h4> Your cart is empty.</h4>'
};

// newsletter
const newsletter = document.querySelector('.newsletter');
const avatar = document.querySelector('.avatar');
const closeNews = document.querySelector('.close-newsletter');

avatar.addEventListener('click', (e) =>{
    newsletter.classList.add('transition');
    newsletter.style.display = 'block';
})

closeNews.addEventListener('click', (e) =>{
    newsletter.style.display = 'none';
})

// Image Gallery
let images = [];

// image list
images[0] = './images/image-product-1.jpg';
images[1] = './images/image-product-2.jpg';
images[2] = './images/image-product-3.jpg';
images[3] = './images/image-product-4.jpg';

// image-function
const thumbnailOne = document.querySelector('.image-thumbnail-one');
const thumbnailTwo = document.querySelector('.image-thumbnail-two');
const thumbnailThree = document.querySelector('.image-thumbnail-three');
const thumbnailFour = document.querySelector('.image-thumbnail-four');


thumbnailOne.addEventListener('click', (e) =>{
    document.gallery.src = images[0];
    document.cartGallery.src = images[0];
});

thumbnailTwo.addEventListener('click', (e) =>{
    document.gallery.src = images[1];
    document.cartGallery.src = images[1];
});

thumbnailThree.addEventListener('click', (e) =>{
    document.gallery.src = images[2];
    document.cartGallery.src = images[2];
});

thumbnailFour.addEventListener('click', (e) =>{
    document.gallery.src = images[3];
    document.cartGallery.src = images[3];
});


// Light-Box
const thumbnailImages = [];

// Image list from line 112
// lightBox function
const lightBoxOne = document.querySelector('.image-lightBox-one');
const lightBoxTwo = document.querySelector('.image-lightBox-two');
const lightBoxThree = document.querySelector('.image-lightBox-three');
const lightBoxFour = document.querySelector('.image-lightBox-four');

lightBoxOne.addEventListener('click', (e) =>{
    document.lightBox.src = images[0];
});

lightBoxTwo.addEventListener('click', (e) =>{
    document.lightBox.src = images[1];
});

lightBoxThree.addEventListener('click', (e) =>{
    document.lightBox.src = images[2];
});

lightBoxFour.addEventListener('click', (e) =>{
    document.lightBox.src = images[3];
});

// grab light box from the dom
const previewBox = document.querySelector('.preview-box');

//open light box
const showCase = document.querySelector('.showcase img');
// add shadow
const shadow = document.querySelector('.shadow')
showCase.addEventListener('click', (e) => {
    previewBox.style.display = 'block';
    shadow.style.display = 'block';
});

// close light box
const closeLightBox = document.querySelector('.close-light-box');
closeLightBox.addEventListener('click', (e) => {
    previewBox.style.display = 'none';
    shadow.style.display = 'none';
});