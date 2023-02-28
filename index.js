
let textInputBox = document.getElementById("inputBox");


let canvasSettings = {
  fontSize: "42",
 fontFamily: "Arial",
 textColor: "#eeeeee",
 backgroundColor: "#800000",
}



const canvasContext = canvas.getContext("2d");
const midXAxis = canvas.width / 2;
const midYAxis = canvas.height / 2;

updateCanvas=()=>{
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = canvasSettings.backgroundColor;
    canvasContext.fillRect(0, 0, 300, 200);
    canvasContext.textAlign = "center";
    canvasContext.textBaseline = "middle";
    canvasContext.font = `${canvasSettings.fontSize + "px"} ${canvasSettings.fontFamily}`;
    canvasContext.fillStyle = canvasSettings.textColor;
    canvasContext.fillText(textInputBox.value, midXAxis, midYAxis);

}
updateFontSize=(selectedFontSize)=>{
    switch (selectedFontSize) {
    case "small":
      canvasSettings.fontSize = "22";
      break;
    case "medium":
      canvasSettings.fontSize = "34";
      break;
    case "large":
      canvasSettings.fontSize = "42";
      break;
  }
  updateCanvas();
};


downloadCanvasImg = (el) => {
  var imageURI = canvas.toDataURL("image/jpg");
  el.href = imageURI;

  console.log("Canvas image downloaded");
};

updateTextColor = (selectedTextColor) => {
  canvasSettings.textColor = selectedTextColor;
  textInputBox.style.color = canvasSettings.textColor;
  updateCanvas();
};
updateBackgroundColor = (selectedColor) => {
  canvasSettings.backgroundColor = selectedColor;
    textInputBox.style.color = canvasSettings.textColor;
    updateCanvas();

};
keyPress = (text) => {
  if (text.length > 13) {
    console.log("maximum number of input is thirteen characters");
  } else {

    updateCanvas();
  }
};

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  
  canvasContext.fillText("Hello world", midXAxis, midYAxis);
});