let masterContainer = document.querySelector("#container");

let horizontalCount = 120;
let aspectRatio = 4.0/3.0;

let divClass = "row";
let pixelClass = "pixel";

let rowDivs = [];
let checks = [[]];

for(let i = 0; i < (horizontalCount / aspectRatio); i++) {
    rowDivs[i] = document.createElement("div");
    rowDivs[i].classList += divClass;
    rowDivs[i].id = i;
    masterContainer.append(rowDivs[i]);
}

for(let div of rowDivs) {
    for(let i = 0; i < horizontalCount; i++) {
        let rowNum = div.id;
        let temp = document.createElement("input");
        temp.type = "radio";
        temp.classList += pixelClass;
        checks[rowNum,i] = temp;
        div.append(checks[rowNum,i]); 
    }
}