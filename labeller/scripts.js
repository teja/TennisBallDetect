let imagesSelected = undefined;
let curImageShown = -1;

function HideId(id) {
  document.getElementById(id).setAttribute("style", "visibility:hidden;");
}
function DisplayId(id) {
  document.getElementById(id).setAttribute("style", "visibility:none;");
}

// Checks if atleast 1 image is selected. 
// If yes, kicks of the tagging process by showing the first image.
function processImageSelection() {
  input = document.querySelector("input");
  let curfiles = input.files;
  if (curfiles.length === 0) {
    document.getElementById("Message").innerHTML = "You've to select atleast 1 image";
    return;
  }
  // Hide the image selection dialogue and show the part which lets user tag images.
  HideId("selector");
  DisplayId("processing");
  imagesSelected = curfiles;
  displayImage(0);
}


// Displays the image at imageIndex.
function displayImage(imageIndex) {
  if (imageIndex >= imagesSelected.length) {
    console.log("Ran out of images");
    return;
  }
  let img = document.getElementById("imgelem");
  img.src = window.URL.createObjectURL(imagesSelected[imageIndex]);
  curImageShown = imageIndex;
}

// Called when tagging of an image is done.
// Record the tagged objects corresponding
function finalizeAndShowNext() {
  // TODO: Save the tags in current image.
  // Ran out of images to show.
  if (curImageShown == imagesSelected.length - 1) {
    HideId("Next");
    DisplayId("Download");
    return;
  }
  displayImage(curImageShown+1);
}



// Download a csv file with all the tagged information.
function DownloadTags() {
  // TODO.
}
