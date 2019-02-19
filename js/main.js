"use strict";

// Get the rigth photo to swipe
let knap = "";
let del = "";
let overdele = [];
let underdele = [];

// hent all data og gem i listerne
fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    overdele = json.overdel;
    underdele = json.underdel;
  });

function continueF() {
  // reset - append again
  appendOverdel();
  appendUnderdel();

  let imageURL = document.querySelector("#blah").src;
  appendSelectedImage(imageURL);
  showPage("outfitfinder");
}

function uploadOverdel() {
  del = "overdel";
  showPage("popover");
  document.querySelector("#popoverheader").innerHTML = "Upload overdel";
}

function uploadUnderdel() {
  del = "underdel";
  showPage("popover");
  document.querySelector("#popoverheader").innerHTML = "Upload underdel";
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

// Billedet browses og indlæses
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(200)
        .height(200);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function appendSelectedImage(imageURL) {
  let html = `
  <div class="carousel-item active">
    <img src="${imageURL}" class="d-block w-100">
  </div>
  `;
  if (del === "overdel") {
    console.log(html);
    document.querySelector("#overdelCarousel").innerHTML = html;
  } else {
    document.querySelector("#underdelCarousel").innerHTML = html;
  }
}

function appendOverdel() {
  let html = "";
  let isFirst = true;
  for (let image of overdele) {
    if (isFirst) {
      // hvis det er først element skal carousel-item være active
      html += `
        <div class="carousel-item active">
          <img src="${image}" class="d-block w-100">
        </div>
      `;
      isFirst = false;
    } else {
      html += `
        <div class="carousel-item">
          <img src="${image}" class="d-block w-100">
        </div>
      `;
    }
  }
  document.querySelector("#overdelCarousel").innerHTML = html;
}

function appendUnderdel() {
  let html = "";
  let isFirst = true;
  for (let image of underdele) {
    if (isFirst) {
      // hvis det er først element skal carousel-item være active
      html += `
        <div class="carousel-item active">
          <img src="${image}" class="d-block w-100">
        </div>
      `;
      isFirst = false;
    } else {
      html += `
        <div class="carousel-item">
          <img src="${image}" class="d-block w-100">
        </div>
      `;
    }
  }
  document.querySelector("#underdelCarousel").innerHTML = html;

}
