"use strict";

// Get the rigth photo to swipe
let knap = "";
function continueF() {
console.log(del);
let imageURL = document.querySelector("#blah").src;
showPage("outfitfinder");


if (del=="overdel"){
document.querySelector("#nr1").src = imageURL;}
else {
document.querySelector("#nr2").src = imageURL;}
}

// Go to the right page after choosing which style to upload + change of header
 let del = "";

 function uploadOverdel(){
   del= "overdel";
   showPage("popover");
   document.querySelector("#popoverheader").innerHTML="Upload overdel";
}

 function uploadUnderdel(){
   del= "underdel";
   showPage("popover");
   document.querySelector("#popoverheader").innerHTML="Upload underdel";
 }


// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
}

// set default page
function setDefaultPage() {
  let page = "upload";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}


setDefaultPage();



// popover

function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#blah')
                   .attr('src', e.target.result)
                   .width(150)
                   .height(200);
           };

           reader.readAsDataURL(input.files[0]);
       }
   }
