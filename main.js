
const clearButton = document.getElementById("clear")
const rangeSize = document.getElementById("range-size")
const gridContainer =  document.getElementById("grid");
const rainbowButton =  document.getElementById("rainbow");
let widthInput =  document.getElementById("width");
let gridWidth = widthInput.value;

let colorInput = document.getElementById("color");
let lineColor = colorInput.value;

// create grid
function setupGrid() {
	// get grid dimensions
	gridWidth = widthInput.value;

	// set grid columns/rows
	gridContainer.style.gridTemplateColumns = "repeat("+gridWidth+", 1fr)";
	gridContainer.style.gridTemplateRows = "repeat("+gridWidth+", 1fr)";

	// add boxes to page
	let boxHtml = '<div class="box"></div>'
	let totalGridBoxes = gridWidth * gridWidth;
	gridContainer.innerHTML = boxHtml.repeat(totalGridBoxes);
}

// add hover styles
function changeBoxcolor() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => {
		
		box.addEventListener('mouseenter', e => {
			box.style.backgroundColor = lineColor;
		});
	});
}

// set line color
function setLineColor() {
	lineColor = colorInput.value;
}

// change color of line
colorInput.onchange = () => {setLineColor();}

// update grid dimensions on width/height input changes
widthInput.onchange = () => {initialize()}
widthInput.onmousemove = () => {
	// update text for grid size
	rangeSize.textContent = widthInput.value + " x " + widthInput.value;
}

// Clear grid
clearButton.onclick = () => {
	document.querySelectorAll('.box').forEach(box => {box.style.backgroundColor = "#ffffff"});
}


function initialize() {
	// Initialize Grid/hovers
	setupGrid();
	changeBoxcolor();
}

initialize();