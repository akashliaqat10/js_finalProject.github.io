/*Name this external file gallery.js*/

function upDate(previewPic) {
   // In this function you should
   // 1) change the url for the background image of the div with the id = "image"
   // to the source file of the preview image
   let img = "url(" + previewPic.src + ")";
   document.getElementById("image").style.backgroundImage = img;
   // 2) Change the text  of the div with the id = "image"
   // to the alt text of the preview image
   let text = previewPic.alt;
   document.getElementById("image").innerHTML = text;
 }
 
 function unDo() {
   //   In this function you should
   // 1) Update the url for the background image of the div with the id = "image"
   //   back to the orginal - image.You can use the css code to see what that original URL was
   document.getElementById("image").style.backgroundImage = "none";
   // 2) Change the text  of the div with the id = "image"
   //   back to the original text.You can use the html code to see what that original text was
   let text = "Hover over an image below to display here.";
   document.getElementById("image").innerHTML = text;
 }

 function imgFocus(previewPic){
  // In this function you should
   // 1) change the url for the background image of the div with the id = "image"
   // to the source file of the preview image
   let img = "url(" + previewPic.src + ")";
   document.getElementById("image").style.backgroundImage = img;
   // 2) Change the text  of the div with the id = "image"
   // to the alt text of the preview image
   let text = previewPic.alt;
   document.getElementById("image").innerHTML = text;
 }
 
 function imgBlur() {
  //   In this function you should
  // 1) Update the url for the background image of the div with the id = "image"
  //   back to the orginal - image.You can use the css code to see what that original URL was
  document.getElementById("image").style.backgroundImage = "none";
  // 2) Change the text  of the div with the id = "image"
  //   back to the original text.You can use the html code to see what that original text was
  let text = "Hover over an image below to display here.";
  document.getElementById("image").innerHTML = text;
}

function imgIndex(){
  let img = document.getElementsByClassName("preview")
  for(i = 0; i < img.length; i++){
    img[i].setAttribute("tabIndex", "0")
  }
}