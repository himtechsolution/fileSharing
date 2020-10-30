const dropZone=document.querySelector(".drop-zone");
const browseButton=document.querySelector("browseButton")
const fileInput=document.querySelector("#fileInput");

dropZone.addEventListener("dragover" ,(e)=>{
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
    dropZone.classList.add("dragged")
  }
});
dropZone.addEventListener("dragleave" ,()=>{
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged")
});

browseButton.addEventListener("click" , ()=>{
    fileInput.click();
})


