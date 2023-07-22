const loadViewSkills = () => {
    showScore.innerText=`asdf`;
    showScore.classList.remove('scoreArea');
    clearInterval(timer);

}

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startTimer() {
  clearInterval(interval);
  interval = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("timer").innerHTML = timeString;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}



var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

var imgOrderOriginal = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var imgOrder = ["1", "3", "2", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();

    }


    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {
            
            if (imgOrder === imgOrderOriginal){
                loadViewSkills();
            }
            console.log(imgOrder);
            console.log(imgOrderOriginal);
            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);


        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }
    startTimer();
}

function dragOver(e) {
    e.preventDefault();
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }
    startTimer();
}

function dragEnter(e) {
    e.preventDefault();
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }
    startTimer();
}

function dragLeave() {
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }
    startTimer();

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }
    startTimer();
}

function dragEnd() {
    if (imgOrder === imgOrderOriginal){
        loadViewSkills();
    }    

    startTimer();

    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
        

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }


}





// home.addEventListener('click', () => {
//     <a href = "file:///C:/elitmus/home/home.html"> </a>
// })



// var rows = 3;
// var columns = 3;

// var curTile;
// var otherTile;

// var turns = 0;

// //var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

// window.onload = function() {
//     for(let r = 0; r < rows; r++){
//         for(let c = 0; c < columns; c++) {
//             let tile = document.createElement("img");
//             tile.id = r.toString() + "-" + c.toString();

//             tile.src = imgOrder.shift() + ".jpg";

//             tile.addEventListener("dragstart", dragStart);  //click an image to drag
//             tile.addEventListener("dragover", dragOver);    //moving image around while clicked
//             tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
//             tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
//             tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
//             tile.addEventListener("dragend", dragEnd); 

//             document.getElementById("board").append(title);
//         } 
        
//     }
// }

// function dragStart(){
//     curTile = this;
// }

// function dragOver(e) {
//     e.preventDefault();

// }

// function dragEnter(e) {
//     e.preventDefault();

// }

// function dragLeave() {


// }

// function dragDrop() {
//     otherTile = this;

// }

// function dragEnd() {
//     let currImg = currTile.src;
//     let otherImg = otherTile.src;

//     currTile.src = otherImg;
//     otherTile.src = currImg;

// }





