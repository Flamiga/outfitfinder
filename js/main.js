"use strict";

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

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function picChange(evt){
//bring selected photo in
}
//get files captured through input
var fileInput = evt.target.files;
if(fileInput.length>0){
//get the file
}
//window url
var windowURL = window.URL || window.webkitURL;
//picture url
var picURL = windowURL.createObjectURL(fileInput[0]);
//get canvas
var canvas = document.getElementById("capturedPhoto");
var ctx = canvas.getContext("2d");
//create image
var img = new Image();
img.onload = function(){
  //draw photo into canvas when ready
  ctx.drawImage(img, 0, 0, 100, 100);
};
//load photo into canvas
img.src = picURL;
//release object url
windowURL.revokeObjectURL(picURL);
