"use strict";

const authorCardContent = document.querySelector(".author-card-content");
const container = document.querySelector(".container");
const mobileShareContainer = document.querySelector(".mobile-card");
const dialog = document.querySelector("dialog");

const shareBtnDesktop = document.querySelector(".share-btn-desktop")
const shareBtnMobile = document.querySelector(".share-btn-mobile");
const closeShareMobile = document.querySelector(".close-btn-mobile");

// Share Mobile Segment
shareBtnMobile.addEventListener("click", ()=>{
	authorCardContent.classList.add("hide");
	mobileShareContainer.classList.remove("hide");
});

closeShareMobile.addEventListener("click", ()=>{
	authorCardContent.classList.remove("hide");
	mobileShareContainer.classList.add("hide");
});

container.addEventListener("click", e => {
  const shareDimensions = mobileShareContainer.getBoundingClientRect()
  if (
    e.clientX < shareDimensions.left ||
    e.clientX > shareDimensions.right ||
    e.clientY < shareDimensions.top ||
    e.clientY > shareDimensions.bottom
  ) {
    authorCardContent.classList.remove("hide");
	mobileShareContainer.classList.add("hide");
  }
});

// Share Desktop Modal
shareBtnDesktop.addEventListener("click", ()=>{
	dialog.classList.remove("hide");
	shareBtnDesktop.classList.add("active");
})

container.addEventListener("click", e => {
  const shareDimensions = shareBtnDesktop.getBoundingClientRect()
  if (
    e.clientX < shareDimensions.left ||
    e.clientX > shareDimensions.right ||
    e.clientY < shareDimensions.top ||
    e.clientY > shareDimensions.bottom
  ) {
    dialog.classList.add("hide");
	shareBtnDesktop.classList.remove("active");
  }
});