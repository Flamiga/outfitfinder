"use strict";


let knap = "";
function continueF() {
console.log(del);
let imageURL = document.querySelector("#blah").src;
showPage("outfitfinder");
document.querySelector("#nr1").src = imageURL;


}

 let del = "";

 function uploadOverdel(){
   del= "overdel";
   showPage("popover");

 }

 function uploadUnderdel(){
   del= "underdel";
   showPage("popover");
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
