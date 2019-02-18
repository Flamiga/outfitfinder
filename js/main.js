"use strict";

// Get the rigth photo to swipe
let knap = "";

function continueF() {
  loadImages();
  console.log(del);
  let imageURL = document.querySelector("#blah").src;
  showPage("outfitfinder");


  if (del == "overdel") {
    document.querySelector("#ovedelcaroul").innerHTML = `
        <div class="carousel-item">
          <img src="${imageURL}" class="d-block w-100" alt="...">
        </div>
      `;
  } else {
    document.querySelector("#underdelcaroul").innerHTML = `
        <div class="carousel-item">
          <img src="${imageURL}" class="d-block w-100" alt="...">
        </div>
      `;
    }
}


// reset
function reset() {
  document.getElementById('ovedelcaroul').innerHTML = `
  <div class="carousel-item active">
    <img id="nr1" src="img/top.png" class="d-block w-100" alt="...">
  </div>`;
  document.getElementById('underdelcaroul').innerHTML = `
  <div class="carousel-item active">
    <img id="nr2" src="img/top.png" class="d-block w-100" alt="...">
  </div>`;

}


// Go to the right page after choosing which style to upload + change of header
let del = "";

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



// popover

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function loadImages(){

fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendImages(json.overdel, "#ovedelcaroul");
    appendImages(json.underdel, "#underdelcaroul");
  });

}

loadImages();

// Adds persons to the DOM by giving parameter, persons
function appendImages(del, element) {
  for (let image of del) { // looping trough all persons
    console.log(image);
    //creating person data, HTML tags and adding to the DOM, the element #gridPersons
    document.querySelector(element).innerHTML += `
        <div class="carousel-item">
          <img src="${image}" class="d-block w-100" alt="...">
        </div>
      `;
  }
}
