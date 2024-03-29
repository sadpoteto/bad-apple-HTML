let masterContainer = document.querySelector("#container");

let horizontalCount = 160;
let aspectRatio = 4.0/3.0;

let divClass = "row";
let pixelClass = "pixel";

let rowDivs = [];
let checks = [];

for(let i = 0; i < (horizontalCount / aspectRatio); i++) {
    rowDivs[i] = document.createElement("div");
    rowDivs[i].classList += divClass;
    rowDivs[i].id = i;
    masterContainer.append(rowDivs[i]);
}

for(let div of rowDivs) {
    let rowNum = div.id;
    checks[rowNum] = [];
    for(let i = 0; i < horizontalCount; i++) {
        let temp = document.createElement("input");
        temp.type = "checkbox";
        temp.classList += pixelClass;
        checks[rowNum][i] = temp;
        div.append(checks[rowNum][i]); 
    }
}

let blackPixelIdentifier = "#";

function setFrame(frame, checks) {
    for(let row = 0; row < checks.length; row++) {
        let rowRaw = frame[row];
        let rowArrayed = rowRaw.split('');
        for(let col = 0; col < rowArrayed.length; col++) {
            checks[row][col].checked = (rowArrayed[col] == blackPixelIdentifier);
        }
    }
}

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

let frames = PUT NIGHTMAREFUEL.TXT OUTPUT HERE;


currFrame = 0;

function start() {
    setInterval(function() {
        setFrame(frames[currFrame], checks);
        console.log(currFrame);
        currFrame++;
        }, 1000/30);
}
/*
for(let frameNumber = 0; frameNumber < frames.length; frameNumber++) {
    setFrame(frames[frameNumber], checks);
    console.log(frameNumber);
    wait(100)
    masterContainer.style.display = 'none';
    masterContainer.style.display = 'block';
}
*/