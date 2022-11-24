"use strict";

const principalImg = document.querySelector(".not-preview-principal"),
miniImg1 = document.querySelector(".normal-mini1"),
miniImg2 = document.querySelector(".normal-mini2"),
miniImg3 = document.querySelector(".normal-mini3"),
miniImg4 = document.querySelector(".normal-mini4"),
preview = document.querySelector(".preview-bg"),
closePreviewButton = document.getElementById("close-preview"),
body = document.getElementById("body"),
back = document.querySelector(".back"),
backResponsive = document.querySelector(".back-responsive"),
forward = document.querySelector(".forward"),
forwardResponsive = document.querySelector(".forward-responsive"),
principalPreviewImg = document.querySelector(".principal-preview"),
miniImgPreview1 = document.querySelector(".mini-img1"),
miniImgPreview2 = document.querySelector(".mini-img2"),
miniImgPreview3 = document.querySelector(".mini-img3"),
miniImgPreview4 = document.querySelector(".mini-img4"),
cartButton = document.getElementById("cart-button"),
cartMenu = document.getElementById("menu"),
plusBtn = document.getElementById("plus"),
minusBtn = document.getElementById("minus"),
responsiveMenuBtn = document.getElementById("responsive-menu"),
responsiveNav = document.querySelector(".nav-bg"),
responnsiveCloseBtn = document.getElementById("close"),
cartContainer = document.querySelector(".items-container"),
addToCartBtn = document.getElementById("add-button"),
cartCounter = document.getElementById("counter"),
productName = "Fall Limited Edition Sneakers",
productPrice = 125;

let amount = document.getElementById("amount"),
currentAmount = parseInt(amount.innerHTML),

normalMiniatures = [miniImg1,miniImg2,miniImg3,miniImg4],
NormalImg = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"],
previewMiniatures = [miniImgPreview1,miniImgPreview2,miniImgPreview3,miniImgPreview4],
responsiveLimit = matchMedia("(max-width: 700px)");

principalImg.addEventListener("click",()=>{
	(!responsiveLimit.matches) ? (
		principalPreviewImg.src = principalImg.src,
		preview.style.top = `${window.scrollY - 2}px`,
		preview.style.animation = "show 0.4s forwards",
		preview.style.display = "flex",
		body.style.overflow = "hidden"
		)
	: null;
})

for (let i = 0; i < normalMiniatures.length; i++) {
	normalMiniatures[i].addEventListener("click",()=>{
		for (let j = 0; j < normalMiniatures.length; j++) {
			normalMiniatures[j].style.opacity = "1"
			normalMiniatures[j].style.border= "2px solid transparent"
			previewMiniatures[j].style.filter = "none"
			previewMiniatures[j].style.border = "2px solid transparent"
		}
		previewMiniatures[i].style.filter = "brightness(200%) contrast(70%) saturate(80%)";
		previewMiniatures[i].style.border = "2px solid hsl(26, 100%, 55%)";
		normalMiniatures[i].style.border = "2px solid hsl(26, 100%, 55%)";
		normalMiniatures[i].style.opacity = "0.4";
		principalPreviewImg.src = NormalImg[i];
		preview.style.top = `${window.scrollY - 2}px`;
		preview.style.display = "flex";
		preview.style.animation = "show 0.4s forwards";
		body.style.overflow = "hidden";
		principalImg.src = NormalImg[i];
	})
	previewMiniatures[i].addEventListener("click",()=>{
		for (let j = 0; j < previewMiniatures.length; j++) {
			previewMiniatures[j].style.filter = "none";
			previewMiniatures[j].style.border= "2px solid transparent";
		}
		previewMiniatures[i].style.border = "2px solid hsl(26, 100%, 55%)"
		previewMiniatures[i].style.filter = "brightness(200%) contrast(70%) saturate(80%)";
		principalPreviewImg.src = NormalImg[i];
	})
}

closePreviewButton.addEventListener("click",()=> {
	preview.style.display = "none";
	body.style.overflow = "inherit";
})

cartButton.addEventListener("click",(e)=>{
	menu.style.display = "flex";
	e.stopPropagation();
})
cartButton.addEventListener("mouseover",()=> document.querySelector(".cart-btn-color").style.fill ="#000");
cartButton.addEventListener("mouseleave",()=> document.querySelector(".cart-btn-color").style.fill ="#69707D");
menu.addEventListener("click",(e)=>{
	menu.style.display = "flex";
	e.stopPropagation();
})
body.addEventListener("click",()=>menu.style.display = "none")

plus.addEventListener("click",()=>{
	currentAmount++
	amount.innerHTML = currentAmount;
})
minus.addEventListener("click",()=>{
	(currentAmount <= 0) ? null
	: (
		currentAmount--,
		amount.innerHTML = currentAmount
	)
})

responsiveMenuBtn.addEventListener("click",()=>{
	responsiveNav.style.display = "flex";
	body.style.overflow = "hidden";
})

responnsiveCloseBtn.addEventListener("click",()=> {
	responsiveNav.style.display = "none";
	body.style.overflow = "inherit";
})

const changeColor = (element,event,img,type,color) => element.addEventListener(event,()=>img.setAttribute(type,color)),

aplyFilter = (actual,next) => {
	actual.style.filter = "brightness(200%) contrast(70%) saturate(80%)";
	actual.style.border = "2px solid hsl(26, 100%, 55%)";
	next.style.filter = "none";
	next.style.border = "none";
},

changeImgBack = image => {
	if (image.src.includes("image-product-1")) {
		image.src = NormalImg[3]
		aplyFilter(previewMiniatures[3],previewMiniatures[0])
	}
	else if (image.src.includes("image-product-2")) {
		image.src = NormalImg[0]
		aplyFilter(previewMiniatures[0],previewMiniatures[1])
	}
	else if (image.src.includes("image-product-3")) {
		image.src = NormalImg[1]
		aplyFilter(previewMiniatures[1],previewMiniatures[2])
	}
	else if (image.src.includes("image-product-4")) {
		image.src = NormalImg[2];
		aplyFilter(previewMiniatures[2],previewMiniatures[3])
	}
},

changeImgForward = image => {
	if (image.src.includes("image-product-1")) {image.src = NormalImg[1];
		aplyFilter(previewMiniatures[1],previewMiniatures[0])
	}
	else if (image.src.includes("image-product-2")) {image.src = NormalImg[2];
		aplyFilter(previewMiniatures[2],previewMiniatures[1])
	}
	else if (image.src.includes("image-product-3")) {image.src = NormalImg[3];
		aplyFilter(previewMiniatures[3],previewMiniatures[2])
	}
	else if (image.src.includes("image-product-4")) {image.src = NormalImg[0];
		aplyFilter(previewMiniatures[0],previewMiniatures[3])
	}
},
createCartItem = (itemName,itemPrice,itemAmount,itemImg) => {
	const item = document.createElement("div"),
	itemImage = document.createElement("img"),
	itemDescription = document.createElement("div"),
	productName = document.createElement("p"),
	productPriceContainer = document.createElement("div"),
	productPrice = document.createElement("p"),
	producTotal = document.createElement("b"),
	deleteBtn = document.createElement("button"),
	totalItems = document.createElement("input");

	totalItems.setAttribute("type","hidden")
	totalItems.setAttribute("value",`${itemAmount}`)
	totalItems.classList.add("hidden")

	item.classList.add("item")
	itemDescription.classList.add("menu-item")
	deleteBtn.classList.add("delete")

	itemImage.src = itemImg;
	productName.innerHTML = itemName;
	productPrice.innerHTML = `$${itemPrice}.00 x ${itemAmount} `;
	producTotal.innerHTML = `$${itemPrice * itemAmount}.00`;
	deleteBtn.innerHTML = `<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use class="delete-color" fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`;

	productPrice.appendChild(producTotal);
	productPriceContainer.appendChild(productPrice);
	itemDescription.appendChild(productName);
	itemDescription.appendChild(productPriceContainer);

	item.appendChild(itemImage);
	item.appendChild(itemDescription);
	item.appendChild(deleteBtn);
	item.appendChild(totalItems);

	deleteBtn.addEventListener("click",()=> {
		cartContainer.removeChild(item);
		cartContainer.innerHTML = `<p class="inherit-msg">Your cart is empty</p>`;
		document.querySelector(".checkout-button").style.display = "none";
		cartContainer.style.minHeight = "100px";
		counter.innerHTML = 0;
		counter.style.display = "none";
	})
	deleteBtn.addEventListener("mouseover",()=>document.querySelector(".delete-color").style.fill ="#000");
	deleteBtn.addEventListener("mouseleave",()=>document.querySelector(".delete-color").style.fill ="#C3CAD9");

	return item;
}

changeColor(closePreviewButton,"mouseover",document.querySelector(".fill-path"),"fill","hsl(26, 100%, 55%)");
changeColor(closePreviewButton,"mouseleave",document.querySelector(".fill-path"),"fill","#fff");
changeColor(back,"mouseover",document.querySelector(".stroke-path1"),"stroke","hsl(26, 100%, 55%)");
changeColor(back,"mouseleave",document.querySelector(".stroke-path1"),"stroke","#1D2026");
changeColor(forward,"mouseover",document.querySelector(".stroke-path"),"stroke","hsl(26, 100%, 55%)");
changeColor(forward,"mouseleave",document.querySelector(".stroke-path"),"stroke","#1D2026");

back.addEventListener("click",()=> changeImgBack(principalPreviewImg));
forward.addEventListener("click",()=> changeImgForward(principalPreviewImg));
backResponsive.addEventListener("click",()=> changeImgBack(principalImg));
forwardResponsive.addEventListener("click",()=> changeImgForward(principalImg));

addToCartBtn.addEventListener("click",()=>{
	if(currentAmount > 0) {
		if (cartContainer.firstChild.classList === undefined || cartContainer.firstChild.classList === null || cartContainer.firstChild.classList[0] === "inherit-msg") {
			amount.innerHTML = 0;
			cartContainer.innerHTML = "";
			cartContainer.appendChild(createCartItem(productName,productPrice,currentAmount,normalMiniatures[0].src))
			cartCounter.innerHTML = currentAmount;
			cartCounter.style.display = "flex";
			document.querySelector(".checkout-button").style.display = "flex"
			currentAmount = 0;
			cartContainer.style.minHeight = "fit-content";
		}
		else if (cartContainer.firstChild.classList[0] === "item"){
			let newItem = createCartItem(productName,productPrice,currentAmount + parseInt(document.querySelector(".hidden").value),normalMiniatures[1].src);
			cartCounter.innerHTML = currentAmount + parseInt(document.querySelector(".hidden").value);
			amount.innerHTML = 0;
			cartContainer.innerHTML = "";
			currentAmount = 0;
			cartContainer.appendChild(newItem)
			document.querySelector(".checkout-button").style.display = "flex"	
			cartContainer.style.minHeight = "fit-content";
		}
	}
});