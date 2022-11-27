//Set the characters in the game as variables.

//myMan is the main character variable.
var myMan = new Image();
myMan.src = "resources/Mickey.png"

//Cabinets is the variable that stores the picture of the cabinets.
var cabinets = new Image();
cabinets.src = "resources/cabinet.png"

//Bookshelf is the variable that stores the picture of the bookshelf.
var bookshelf = new Image();
bookshelf.src = "resources/book shelf.png"

//Bookshelf is the variable that stores the picture of the bookshelf.
var bookshelf2 = new Image();
bookshelf2.src = "resources/book shelf.png"

//desks is the variable that stores the picture of the desks.
var desks = new Image();
desks.src = "resources/school desk.png"

//sideDesk1 is the variable that stores the picture of the sideDesk1.
var sideDesk1 = new Image()
sideDesk1.src = "resources/side desk.png"

//sideNewDesk is the variable that stores the picture of the sideNewDesk.
var sideNewDesk = new Image()
sideNewDesk.src = "resources/side desk 2.png"

//sideDesk1 is the variable that stores the picture of the sideDesk1./////
var sideDesk2 = new Image()
sideDesk2.src = "resources/side desk.png"

//sideNewDesk is the variable that stores the picture of the sideNewDesk.//////
var sideNewDesk2 = new Image()
sideNewDesk2.src = "resources/side desk 2.png"

//boxes is the variable that stores the picture of the boxes.
var boxes = new Image()
boxes.src = "resources/boxes.png"

//bookPile is the variable that stores the picture of the bookPile.
var bookPile = new Image();
bookPile.src = "resources/books.png"

//paperPile is the variable that stores the picture of the paperPile.
var paperPile = new Image();
paperPile.src = "resources/paper.png"

//bookPile is the variable that stores the picture of the bookPile.////
var bookPile2 = new Image();
bookPile2.src = "resources/books.png"

//paperPile is the variable that stores the picture of the paperPile.//////
var paperPile2 = new Image();
paperPile2.src = "resources/paper.png"

//garbageCan is the variable that stores the picture of the garbageCan.
var garbageCan = new Image();
garbageCan.src = "resources/garbage can.png"

//garbageCan is the variable that stores the picture of the garbageCan./////
var garbageCan2 = new Image();
garbageCan2.src = "resources/garbage can.png"

//table is the variable that stores the picture of the table.
var table = new Image();
table.src = "resources/table.png"

//carpet is the variable that stores the picture of the carpet.
var carpet = new Image();
carpet.src = "resources/Carpetzz.png"

//plant1 is the variable that stores the picture of the plant1.
var plant1 = new Image();
plant1.src = "resources/plant.png"

//plant2 is the variable that stores the picture of the plant2.
var plant2 = new Image();
plant2.src = "resources/plant.png"

//plant3 is the variable that stores the picture of the plant2.////
var plant3 = new Image();
plant3.src = "resources/plant.png"

//plant4 is the variable that stores the picture of the plant2./////
var plant4 = new Image();
plant4.src = "resources/plant.png"

//note is the variable that stores the picture of the note.
var note = new Image();
note.src = "resources/Sticky Note.png"

//heart is the variable that stores the picture of the heart.
var heart = new Image();
heart.src = "resources/newHeart.png"

//stickyNotes is the variable that stores the picture of the stickyNotes.
var stickyNotes = new Image();
stickyNotes.src = "resources/Sticky Note.png"

//door is the variable that stores the picture of the door.
var door1 = new Image();
door1.src = "resources/doorScene7.png"

//door is the variable that stores the picture of the door.
var door2 = new Image();
door2.src = "resources/doorScene7.png"

//stoneBrick is the variable that stores the picture of the stone bricks.
var stoneBrick = new Image();
stoneBrick.src = "resources/stone brick.jpg"

//These are the arrays that store pictures that are repeated more then once.

//This is the variable array that stores the pictures of the cabinets
var cabArray = [];

//This is the variable array that stores the pictures of the desks, used for a random collision for a random desk index
var deskArray = [];

//This is the variable array that stores the pictures of the boxes
var boxArray = [];

//This is the variable array that stores the pictures of the hearts, used to show the lifes.
var heartsArray = [];

//This is the variable array that stoers the pictures of the sticky notes.
var stickyNoteArray = [];

//This is the variable array that stores the numbers that are inputed by the player.
var randNumsArray = [];

//This variavle is the array that stores the pictures of the stones.
var stoneArray = [];

//These clue variables signal when a clue is found and is used to display the text for the riddle.
var clue1 = true;
var colClue1 = false;
var clue2 = false;
var clue3 = false;

//These clue variables signal when a clue is found and is used to display the text for the riddle for level 2
var lvClue1 = false;
var lvCoClue1 = false;
var lvClue2 = false;
var lvClue3 = false;
var colLvClue3 = false;

//These game clues are used to determine if the game is over or if they have won.
var gameOver = false;
var winGame = false;

//This variable is used to count the number of times the player gets the answer correct
var numCorrect = 0;

//This variable stores the sum of the two randomly chosen numbers
var correct;

//This is the variable that is used to store the input of the player
var perInp;

//This variable is used to keep track of the health
var health = 3;

//This random number variable is used to choose a random chair/desk in the desk array
var randIndex = getRandomInt(0,5);

var randSpot = getRandomInt(0,3);

//These variables controll the game levels
var level1 = true;
var level2 = false;
var level3 = false;

//These variables determine what to display according to the level
var winLvl1 = false;
var winLvl2 = false;

//This is the array and the player input variavles for the questions and answers.
var questArray = [];
var questAnsArray = [];
var quesInp;
var ansInp;

//This stores the pictures for level 2.
var itemsArray = [];

//These are the time control variables.
var timer;

var tim = 300;

//X determines where the pic will go in the bottom display in level 2.
var x = 0;

//This determins the clues found in level 2
var lvNum = 0;

//This makes sure that the clues in level 2 can get collided with eachother if the question is gotten correct.
var gotCorrect = false;

//These are the random numebrs determined in the lock.
var randNum1 = getRandomInt(1,11);
var randNum2 = getRandomInt(1,11);
var randNum3 = getRandomInt(1,11);

//This function is a sequencing function that draws the background
function drawBackground(){
    //Draws the gray floor of the game
    drawFloor();
    //Draws the line that seperates the game board and the score board.
    drawLine();
    //Draws the green score board
    drawScoreBoard();
    //Draws the text in the score board
    drawText();

    drawLvClues();

    //makes sure the level 1 stuff is drawn when it is level 1.
    if (level1 == true){
        //Draws the background of the cabinets of the game
        drawCabinets();
        //Draws the exit door of the classroom
        drawExitDoor();
        //Draws the workplace of the teacher/the black desk
        drawTeachersWorkPlace();
        //Draws the clues depending on which level the game is at.
        drawClues();
        //Draws the "You won" text if the player wins the game if the wingame varibable is true.
        gameWinDraw();
    }

    //The follwoing stuff draws in level 3
    if (level3 == true){
        //Draws the background of the cabinets of the game
        drawCabinets();
        //Draws the exit door of the classroom
        drawExitDoor();
        //Draws the workplace of the teacher/the black desk
        drawTeachersWorkPlace();

        drawTimerText();

        game2WinDraw();

        drawItemsWrongCollidedWith();

        drawItemsCorrectCollidedWith();
    }

    //Draws the game over text if the game over variable is true.
    gameOverDraw();

}

function drawLvClues(){
    var ctx = document.getElementById("canvas").getContext("2d");

    //Draws the riddle for the first clue if the first clue is true.
    if (lvClue1 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("I lay all day", 1035,230);
        ctx.fillText("I let children play",1010,250)
        ctx.fillText("and display beauty for those",970,270)
        ctx.fillText("who stray. What am I?",980,290)
    }

    //Draws the riddle for the second clue if the second clue if true
    if (lvClue2 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("This can be found in your", 980,350);
        ctx.fillText("house. Made of trees I am. ",975,370)
        ctx.fillText("But for some I am a dam.",985,390)
        ctx.fillText("What am I?",1040,410)
    }

    //Draws the riddle for the third clue if the third clue is true.
    if (lvClue3 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("I protect the earth,", 990,490);
        ctx.fillText("by evading the worst.",980,510)
        ctx.fillText("No one cares for me,",980,530)
        ctx.fillText("but I do my job with",980,550)
        ctx.fillText("no fees. What am I?",985,570)
    }
}

function drawTimerText(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "30px Times New Roman";
    ctx.fillText("Time left: " + tim, 480,700);
}

function drawItemsWrongCollidedWith(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "30px Times New Roman";
    ctx.fillText("Items You Collided With: ", 50,720);
}

function drawItemsCorrectCollidedWith(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "30px Times New Roman";
    ctx.fillText("Clues You Found: ", 750,720);
}

//Function that draws the green score board.
function drawScoreBoard(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#08730c";
    ctx.fillRect(950,0,250,650);
    ctx.fillStyle = "#0c6907";
    ctx.fillRect(0,650,1200,200)
}

//Function that draws the gray floor
function drawFloor(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#6b6965";
    ctx.fillRect(0,0,950,650);
}

//Function that draws the line that seperates the score board and the game board
function drawLine(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.moveTo(950, 0);
    ctx.lineTo(950, 650);

    ctx.moveTo(0, 650);
    ctx.lineTo(950, 650);
    ctx.stroke();
}

//Function that draws the background of the cabinet
function drawCabinets(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#bd8e2a";
    ctx.fillRect(0,0,700,50);
}

//Function that draws the exit door
function drawExitDoor(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#ffffff";
    ctx.fillRect(0,500,25,100);
}

//Function that draws the black teacher workplace
function drawTeachersWorkPlace(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.fillRect(450,500,200,50);
    ctx.fillRect(450,550,50,25);

}

//Function that draws the text in the game board
function drawText(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#000000";
    ctx.font = "50px Times New Roman";
    ctx.fillText("Scoring", 1000,60);

    ctx.fillStyle = "#000000"
    ctx.font = "35px Times New Roman";
    ctx.fillText("Clue #1 ", 1030,200);

    ctx.fillStyle = "#000000"
    ctx.font = "35px Times New Roman";
    ctx.fillText("Clue #2 ", 1030,320);

    ctx.fillStyle = "#000000"
    ctx.font = "35px Times New Roman";
    ctx.fillText("Clue #3 ", 1030,470);
}

//Function that draws the riddles in the score board.
function drawClues(){
    var ctx = document.getElementById("canvas").getContext("2d");

    //Draws the riddle for the first clue if the first clue is true.
    if (clue1 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("I do not eat food but I do", 970,230);
        ctx.fillText("enjoy a light meal everyday.",960,250)
        ctx.fillText(" What am I?",1020,270)
    }

    //Draws the riddle for the second clue if the second clue if true
    if (clue2 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("I am a piece of furniture,", 980,350);
        ctx.fillText("At a table I'm found,",990,370)
        ctx.fillText(" But at a desk, I swivel round.",955,390)
        ctx.fillText(" What am I?",1020,410)
    }

    //Draws the riddle for the third clue if the third clue is true.
    if (clue3 == true){
        ctx.fillStyle= "#000000";
        ctx.font = "20px Times New Roman";
        ctx.fillText("I was invented on August 1666", 950,490);
        ctx.fillText("I am a giver knowlege that",970,510)
        ctx.fillText("no one can resist.",1010,530)
        ctx.fillText("For those who come to me,",965,550)
        ctx.fillText("I will asist. What am I?",985,570)
    }
}

//Function that draws the game over text if the gameOver variable is true.
function gameOverDraw(){
    if (gameOver == true){
        var ctx = document.getElementById("canvas").getContext("2d");
        ctx.fillStyle= "#000000";
        ctx.font = "50px Times New Roman";
        ctx.fillText("GAME OVER YOU LOST!", 200,620);
    }
}

//Function that draws the you won the game txt if the winGame variable is trie.
function gameWinDraw(){
    if (winLvl1 == true){
        var ctx = document.getElementById("canvas").getContext("2d");
        ctx.fillStyle= "#000000";
        ctx.font = "50px Times New Roman";
        ctx.fillText("You found a way out of room 1!!", 100,100);
    }
}

function game2WinDraw(){
    if (winLvl2 == true){
        var ctx = document.getElementById("canvas").getContext("2d");
        ctx.fillStyle= "#000000";
        ctx.font = "50px Times New Roman";
        ctx.fillText("YOU WON THE GAME!!!!!", 200,100);
    }
}

//Function that is called when the button "Click to add numbers" if pressed.
function addNumbers(){
    //3.b. i.
    //This is the variable that stores the input put by the player
    perInp = document.getElementById("addButton").value;
    //This pushes those values into the randNumsArray
    randNumsArray.push(perInp);
    //This displays the array with the inputed numbers
    document.getElementById("addedNums").innerHTML = "Your Numbers Are: " + randNumsArray;
}

//Function that is used to initialize the game board when the game is loaded.
function initialize(){
    var ctx = document.getElementById("canvas").getContext("2d");

    //Draws the background first
    drawBackground();

    //Draws the Mickie Mouse picture on the screen.
    myMan = createImage(myMan.src,500,300,50,50);
    ctx.drawImage(myMan,myMan.left,myMan.top,myMan.width,myMan.height);

    //Draws the carpet picture on the screen.////////
    carpet = createImage(carpet.src,720,200,150,300);
    ctx.drawImage(carpet,carpet.left,carpet.top,carpet.width,carpet.height);

    //Draws the first plant picture (It is on the bottom of the screen) on the screen.
    //600,600,50,50
    plant1 = createImage(plant1.src,600,600,50,50);
    ctx.drawImage(plant1,plant1.left,plant1.top,plant1.width,plant1.height);
    itemsArray.push(plant1)


    //Draws the second plant picture (On the top) on the screen.////////
    plant2 = createImage(plant2.src,700,0,50,50);
    ctx.drawImage(plant2,plant2.left,plant2.top,plant2.width,plant2.height);
    itemsArray.push(plant2);

    //Draws the third plant picture (On the top) on the screen.
    plant3 = createImage(plant3.src,600,0,50,50);
    ctx.drawImage(plant3,plant3.left,plant3.top,plant3.width,plant3.height);
    plant3.vis = false;
    itemsArray.push(plant3)


    //Draws the forth plant picture (On the top) on the screen.
    plant4 = createImage(plant4.src,800,600,50,50);
    ctx.drawImage(plant4,plant4.left,plant4.top,plant4.width,plant4.height);
    plant4.vis = false;
    itemsArray.push(plant4)


    //Draws the garbage can on the screen.//////
    garbageCan = createImage(garbageCan.src,850,0,100,100);
    ctx.drawImage(garbageCan,garbageCan.left,garbageCan.top,garbageCan.width,garbageCan.height);

    //Draws the garbage can on the screen.
    garbageCan2 = createImage(garbageCan2.src,0,50,100,100);
    ctx.drawImage(garbageCan2,garbageCan2.left,garbageCan2.top,garbageCan2.width,garbageCan2.height);
    garbageCan2.vis = false;
    itemsArray.push(garbageCan2)

    //Draws the table in the front of the classroom on the screen.
    table = createImage(table.src,150,560,200,100);
    ctx.drawImage(table,table.left,table.top,table.width,table.height);
    itemsArray.push(table)


    //Pushes 3 heart pictures into the heart array.
    heartsArray.push(createImage(heart.src,970,100,50,50))
    heartsArray.push(createImage(heart.src,1050,100,50,50))
    heartsArray.push(createImage(heart.src,1130,100,50,50))
    //For loop that goes through each index in the heart array and draws it on the screen.
    for (i=0;i<heartsArray.length;i++){
        ctx.drawImage(heartsArray[i],heartsArray[i].left,heartsArray[i].top,heartsArray[i].width,heartsArray[i].height);
    }

    //Pushes the 3 sticky note pictures in the sticky note array.
    stickyNoteArray.push(createImage(stickyNotes.src,980,160,50,50))
    stickyNoteArray.push(createImage(stickyNotes.src,980,290,50,50))
    stickyNoteArray.push(createImage(stickyNotes.src,980,430,50,50))
    for (i=0;i<stickyNoteArray.length;i++){
        //for loop that goes through each index and draws it on the screen.
        ctx.drawImage(stickyNoteArray[i],stickyNoteArray[i].left,stickyNoteArray[i].top,stickyNoteArray[i].width,stickyNoteArray[i].height);
    }

    //Pushes the 4 cabinets pictures in the array////////
    cabArray.push(createImage(cabinets.src,0,-75,150,200))
    cabArray.push(createImage(cabinets.src,145,-75,150,200))
    cabArray.push(createImage(cabinets.src,290,-75,150,200))
    cabArray.push(createImage(cabinets.src,440,-75,150,200))
    //For loop that goes through each index and draws it on the screen.
    for (i=0;i<cabArray.length;i++){
        ctx.drawImage(cabArray[i],cabArray[i].left,cabArray[i].top,cabArray[i].width,cabArray[i].height);
    }

    //Draws the bookshelf on the screen///////
    bookshelf = createImage(bookshelf.src,835,500,150,150);
    ctx.drawImage(bookshelf,bookshelf.left,bookshelf.top,bookshelf.width,bookshelf.height);
    itemsArray.push(bookshelf);

    //Draws the bookshelf on the screen
    bookshelf2 = createImage(bookshelf2.src,-40,500,150,150);
    ctx.drawImage(bookshelf2,bookshelf2.left,bookshelf2.top,bookshelf2.width,bookshelf2.height);
    bookshelf2.vis = false;
    itemsArray.push(bookshelf2)

    //Pushes the 6 desks in the array////////
    deskArray.push(createImage(desks.src,100,150,100,75));
    deskArray.push(createImage(desks.src,300,150,100,75));
    deskArray.push(createImage(desks.src,100,300,100,75));
    deskArray.push(createImage(desks.src,300,300,100,75));
    deskArray.push(createImage(desks.src,100,450,100,75));
    deskArray.push(createImage(desks.src,300,450,100,75));
    //Goes though the array using a for loop that geos thorugh each index and draws it.
    for(i=0;i<deskArray.length;i++){
        ctx.drawImage(deskArray[i],deskArray[i].left,deskArray[i].top,deskArray[i].width,deskArray[i].height);
        itemsArray.push(deskArray[i]);
    }

    //Draws the side desk on the screen
    sideDesk1 = createImage(sideDesk1.src,550,150,75,75);
    ctx.drawImage(sideDesk1,sideDesk1.left,sideDesk1.top,sideDesk1.width,sideDesk1.height);
    itemsArray.push(sideDesk1)

    //Draws the second side desk on the screen.
    sideNewDesk = createImage(sideNewDesk.src,550,250,75,75);
    ctx.drawImage(sideNewDesk,sideNewDesk.left,sideNewDesk.top,sideNewDesk.width,sideNewDesk.height);
    itemsArray.push(sideNewDesk)

    //Draws the side desk on the screen
    sideDesk2 = createImage(sideDesk2.src,850,100,75,75);
    ctx.drawImage(sideDesk2,sideDesk2.left,sideDesk2.top,sideDesk2.width,sideDesk2.height);
    sideDesk2.vis = false;
    itemsArray.push(sideDesk2)

    //Draws the second side desk on the screen.
    sideNewDesk2 = createImage(sideNewDesk2.src,850,250,75,75);
    ctx.drawImage(sideNewDesk2,sideNewDesk2.left,sideNewDesk2.top,sideNewDesk2.width,sideNewDesk2.height);
    sideNewDesk2.vis = false;
    itemsArray.push(sideNewDesk2)

    //Pushes the pictures of the boxes in to the array
    boxArray.push(createImage(boxes.src,600,450,50,50))
    boxArray.push(createImage(boxes.src,600,400,50,50))
    boxArray.push(createImage(boxes.src,550,450,50,50))
    boxArray.push(createImage(boxes.src,0,450,50,50))
    //For loop that geos through teach of the index and draws it.
    for (i=0;i<boxArray.length;i++){
        ctx.drawImage(boxArray[i],boxArray[i].left,boxArray[i].top,boxArray[i].width,boxArray[i].height);
        itemsArray.push(boxArray[i])
    }
    boxArray[3].vis = false;

    //Draws the book pile on the screen.
    bookPile = createImage(bookPile.src,880,450,50,50);
    ctx.drawImage(bookPile,bookPile.left,bookPile.top,bookPile.width,bookPile.height);
    itemsArray.push(bookPile)

    //Draws the pile of paper on the screen.
    paperPile = createImage(paperPile.src,880,400,50,50);
    ctx.drawImage(paperPile,paperPile.left,paperPile.top,paperPile.width,paperPile.height);
    itemsArray.push(paperPile)

    //Draws the book pile on the screen.
    bookPile2 = createImage(bookPile2.src,650,600,50,50);
    ctx.drawImage(bookPile2,bookPile2.left,bookPile2.top,bookPile2.width,bookPile2.height);
    bookPile2.vis = false;
    itemsArray.push(bookPile2)

    //Draws the pile of paper on the screen.
    paperPile2 = createImage(paperPile2.src,750,600,50,50);
    ctx.drawImage(paperPile2,paperPile2.left,paperPile2.top,paperPile2.width,paperPile2.height);
    paperPile2.vis = false;
    itemsArray.push(paperPile2)

    stoneArray.push(createImage(stoneBrick.src,0,0,100,50));
    stoneArray.push(createImage(stoneBrick.src, 100,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,200,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,300,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,400,0,100,50));
    stoneArray.push(createImage(stoneBrick.src, 500,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,600,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,700,0,100,50));
    stoneArray.push(createImage(stoneBrick.src,800,0,150,50));

    stoneArray.push(createImage(stoneBrick.src,450,50,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,100,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,150,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,200,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,250,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,300,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,350,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,400,100,50));
    stoneArray.push(createImage(stoneBrick.src,450,450,100,50));
    // for (i=0;i<stoneArray.length;i++){
    //     ctx.drawImage(stoneArray[i],stoneArray[i].left,stoneArray[i].top,stoneArray[i].width,stoneArray[i].height);
    // }

    door1 = createImage(door1.src,150,200,100,200);
    // ctx.drawImage(door1,door1.left,door1.top,door1.width,door1.height);

    door2 = createImage(door2.src,700,200,100,200);
    // ctx.drawImage(door2,door2.left,door2.top,door2.width,door2.height);

    // console.log(itemsArray);

}

//Object that is used to create the image and draw it on the screen according to the desired x and y coordinets and width and height.
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis= true;
    return img;

}

//Function found form jQuery provided by my teacher to move the character.
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    //a key to move left
    if(keycode == 65)
    {
        myMan.left = myMan.left - 50;

    }

    // d key to go right
    if(keycode == 68)
    {
        myMan.left = myMan.left + 50;
    }

    //w key to move up
    if(keycode == 87)
    {
        myMan.top = myMan.top - 50;
    }

    //s key to move down.
    if(keycode == 83)
    {
        myMan.top = myMan.top + 50;
    }

});

//Function that is called when you press the play game button
function startAnimation(){
    //This makes sure to disable the button to make sure the animate function doesn't start again.
    document.getElementById("startButton").disabled = true;
    //This disables the button to move on to the next level
    document.getElementById("nextLevel").disabled = true;
    //Calls the animate function.

    //These make sure that the right buttons and text are not displayed
    document.getElementById("studyCards").disabled = true;
    document.getElementById("studCarQuestion").innerHTML = " ";
    document.getElementById("studCarAns").innerHTML = " ";

    document.getElementById("lockNums").disabled = true;

    animate();
}

//Function that starts the animation and is a sequenced function.
function animate(){
    //This function runs about 40 times per frame which means that it will look like the character is moving.
    a=requestAnimationFrame(animate);

    //Starts by drawing the background
    drawBackground();

    if (level1 == true){

        //For loop that draws the sticky notes in the array on the screen if it's vis variable is true.
        for (i=0;i<stickyNoteArray.length;i++){
            //Draw stuff draws the array
            drawStuff(stickyNoteArray[i]);
        }

        //For loop that draws the hearts picture array on the screen if it's vis variable is true.
        for (i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }


        //For loop that draws the desk pictures in the array on the screen if it's vis variable is true.
        for(i=0;i<deskArray.length;i++){
            //draws the desk array if the vis variable is true
            if (deskArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(deskArray[i]);
            }
        }

        //For loop that draws the cabinet pictures in the array on the screen if it's vis variable is true.
        for (i=0;i<cabArray.length;i++){
            //Draw stuff draws the array
            drawStuff(cabArray[i]);
        }

        //For loop that draws the box pictures in the array on the screen if it's vis variable is true.
        for (i=0;i<boxArray.length;i++){
            //Draw stuff draws the array
            drawStuff(boxArray[i])
        }

        //This function draws all of the other images using the drawStuff function.
        drawOtherNonArrayStuff();
        //Checks the characters collision with the plant
        collideWithPlantAndAskQuestionOne();
        //Checks the characters collision with an random chair
        collideWithRandChairAndAskQuestionTwo();
        //Checks the characters collision with the bookshelf
        collideWithBookShelfAndAskQuestionThree();
    }

    //This happens if the first level is completed
    if (level2 == true){

        for (i=0;i<stickyNoteArray.length;i++){
            //Draw stuff draws the array
            drawStuff(stickyNoteArray[i]);
        }

        //For loop that draws the hearts picture array on the screen if it's vis variable is true.
        for (i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }

        for (i=0;i<stoneArray.length;i++){
            drawStuff(stoneArray[i]);
        }

        drawScene2Stuff();
        checkCollideWithDoorsInLevel2();

    }

    //This happens when the "second level" is done and the correct door is chosen.
    if (level3 == true){
        //For loop that draws the sticky notes in the array on the screen if it's vis variable is true.
        for (i=0;i<stickyNoteArray.length;i++){
            //Draw stuff draws the array
            drawStuff(stickyNoteArray[i]);
        }

        //For loop that draws the hearts picture array on the screen if it's vis variable is true.
        for (i=0;i<heartsArray.length;i++){
            //Draws the heart array if the vis variable is true.
            if (heartsArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(heartsArray[i]);
            }
        }


        //For loop that draws the desk pictures in the array on the screen if it's vis variable is true.
        for(i=0;i<deskArray.length;i++){
            //draws the desk array if the vis variable is true
            if (deskArray[i].vis == true){
                //Draw stuff draws the array
                drawStuff(deskArray[i]);
            }
        }

        //For loop that draws the cabinet pictures in the array on the screen if it's vis variable is true.
        for (i=0;i<cabArray.length;i++){
            //Draw stuff draws the array
            drawStuff(cabArray[i]);
        }

        //For loop that draws the box pictures in the array on the screen if it's vis variable is true.
        for (i=0;i<boxArray.length;i++){
            //Draw stuff draws the array
            drawStuff(boxArray[i])
        }

        drawLvl3Stuff();


        //This function draws all of the other images using the drawStuff function.
        drawOtherNonArrayStuff();

        //This checks the collisions with the objects
        checkCollisionWithCarpet();
        checkCollisionWithCabinets();
        checkCollisionWithGarbageCan();

        checkLvl2CollisionWithNonCollisionObjects();

        //sets the time stuff
        checkTimeLimit();
    }

    //This draws the main character.
    drawStuff(myMan);

    //This function makes sure the character the main player can't go off of the screen.
    confineMickkieWithinGame();
    //Checks to see if the player has won the game or not.
    checkWin();
}

function showTimeEnd(){
    tim = 6;
}

//This function draws the pics when the game is reseted.
function resetImagesForWhenResetButtonIsPressed(){
    myMan.left = 500;
    myMan.top = 300;
    myMan.width = 50;
    myMan.height = 50;

    plant1.left = 600;
    plant1.top = 600;
    plant1.width = 50;
    plant1.height = 50;

    plant2.left = 700;
    plant2.top = 0;
    plant2.width = 50;
    plant2.height = 50;

    plant3.left = 600;
    plant3.top = 0;
    plant3.width = 50;
    plant3.height = 50;
    plant3.vis = false;

    plant4.left = 800;
    plant4.top = 600;
    plant4.width = 50;
    plant4.height = 50;
    plant4.vis = false;

    table.left = 150;
    table.top = 560;
    table.width = 200;
    table.height = 100;

    bookshelf.left = 835;
    bookshelf.top = 500;
    bookshelf.width = 150;
    bookshelf.height = 150;

    bookshelf2.left = -40;
    bookshelf2.top = 500;
    bookshelf2.width = 150;
    bookshelf2.height = 150;
    bookshelf2.vis = false;

    deskArray[0].left = 100;
    deskArray[0].top = 150;
    deskArray[0].width = 100;
    deskArray[0].height = 75;

    deskArray[1].left = 300;
    deskArray[1].top = 150;
    deskArray[1].width = 100;
    deskArray[1].height = 75;

    deskArray[2].left = 100;
    deskArray[2].top = 300;
    deskArray[2].width = 100;
    deskArray[2].height = 75;

    deskArray[3].left = 300;
    deskArray[3].top = 300;
    deskArray[3].width = 100;
    deskArray[3].height = 75;

    deskArray[4].left = 100;
    deskArray[4].top = 450;
    deskArray[4].width = 100;
    deskArray[4].height = 75;

    deskArray[5].left = 300;
    deskArray[5].top = 450;
    deskArray[5].width = 100;
    deskArray[5].height = 75;

    sideDesk1.left = 550;
    sideDesk1.top = 150;
    sideDesk1.width = 75;
    sideDesk1.height = 75;

    sideNewDesk.left = 550;
    sideNewDesk.top = 250;
    sideNewDesk.width = 75;
    sideNewDesk.height = 75;

    sideDesk2.left = 850;
    sideDesk2.top = 100;
    sideDesk2.width = 75;
    sideDesk2.height = 75;
    sideDesk2.vis = false;

    sideNewDesk2.left = 850;
    sideNewDesk2.top = 250;
    sideNewDesk2.width = 75;
    sideNewDesk2.height = 75;
    sideNewDesk2.vis = false;

    boxArray[0].left = 600;
    boxArray[0].top = 450;
    boxArray[0].width = 50;
    boxArray[0].height = 50;

    boxArray[1].left = 600;
    boxArray[1].top = 400;
    boxArray[1].width = 50;
    boxArray[1].height = 50;

    boxArray[2].left = 500;
    boxArray[2].top = 450;
    boxArray[2].width = 50;
    boxArray[2].height = 50;

    boxArray[3].left = 0;
    boxArray[3].top = 450;
    boxArray[3].width = 50;
    boxArray[3].height = 50;
    boxArray[3].vis = false;

    bookPile.left = 880;
    bookPile.top = 450;
    bookPile.width = 50;
    bookPile.height = 50;

    paperPile.left = 880;
    paperPile.top = 400;
    paperPile.width = 50;
    paperPile.height = 50;

    bookPile2.left = 650;
    bookPile2.top = 600;
    bookPile2.width = 50;
    bookPile2.height = 50;
    bookPile2.vis = false;

    paperPile2.left = 750;
    paperPile2.top = 600;
    paperPile2.width = 50;
    paperPile2.height = 50;
    paperPile2.vis = false;

    cabArray[0].left = 0;
    cabArray[0].top = -75;
    cabArray[0].width = 150;
    cabArray[0].height = 200;

    cabArray[1].left = 145;
    cabArray[1].top = -75;
    cabArray[1].width = 150;
    cabArray[1].height = 200;

    cabArray[2].left = 290;
    cabArray[2].top = -75;
    cabArray[2].width = 150;
    cabArray[2].height = 200;

    cabArray[3].left = 440;
    cabArray[3].top = -75;
    cabArray[3].width = 150;
    cabArray[3].height = 200;

    garbageCan.left = 850;
    garbageCan.top = 0;
    garbageCan.width = 100;
    garbageCan.height = 100;

    garbageCan2.left = 0;
    garbageCan2.top = 50;
    garbageCan2.width = 100;
    garbageCan2.height = 100;
    garbageCan2.vis = false;

    carpet.left = 720;
    carpet.top = 200;
    carpet.width = 150;
    carpet.height = 300;
}

//Resets the variables when the reset button is pressed.
function resetGame(){
    // alert("works")

    bookshelf.vis = true;
    plant2.vis = true;
    deskArray[randIndex].vis = true;

    door1.vis = true;
    door2.vis = true;

    resetImagesForWhenResetButtonIsPressed();

    clue1 = true;
    colClue1 = false;
    clue2 = false;
    clue3 = false;

    lvClue1 = false;
    lvCoClue1 = false;
    lvClue2 = false;
    lvClue3 = false;
    colLvClue3 = false;

//These game clues are used to determine if the game is over or if they have won.
    gameOver = false;
    winGame = false;

//This variable is used to count the number of times the player gets the answer correct
    numCorrect = 0;

    health = 3;

//This random number variable is used to choose a random chair/desk in the desk array
    randIndex = getRandomInt(0,5);

    randSpot = getRandomInt(0,3);

    level1 = true;
    level2 = false;
    level3 = false;

    winLvl1 = false;
    winLvl2 = false;

    questArray.splice(0,questArray.length);
    questAnsArray.splice(0,questAnsArray.length);
    randNumsArray.splice(0,randNumsArray.length);

    randNum1 = getRandomInt(1,11);
    randNum2 = getRandomInt(1,11);
    randNum3 = getRandomInt(1,11);

    tim = 300;
    x = 0;
    lvNum = 0;

    gotCorrect = false;

    randNum1 = getRandomInt(1,11);
    randNum2 = getRandomInt(1,11);
    randNum3 = getRandomInt(1,11);

    drawBackground();

    //For loop that draws the sticky notes in the array on the screen if it's vis variable is true.
    for (i=0;i<stickyNoteArray.length;i++){
        //Draw stuff draws the array
        drawStuff(stickyNoteArray[i]);
    }

    heartsArray[0].vis = true;
    heartsArray[1].vis = true;
    heartsArray[2].vis = true;

    //For loop that draws the hearts picture array on the screen if it's vis variable is true.
    for (i=0;i<heartsArray.length;i++){
        //Draws the heart array if the vis variable is true.
        if (heartsArray[i].vis == true){
            //Draw stuff draws the array
            drawStuff(heartsArray[i]);
        }
    }


    //For loop that draws the desk pictures in the array on the screen if it's vis variable is true.
    for(i=0;i<deskArray.length;i++){
        //draws the desk array if the vis variable is true
        if (deskArray[i].vis == true){
            //Draw stuff draws the array
            drawStuff(deskArray[i]);
        }
    }

    //For loop that draws the cabinet pictures in the array on the screen if it's vis variable is true.
    for (i=0;i<cabArray.length;i++){
        //Draw stuff draws the array
        drawStuff(cabArray[i]);
    }

    //For loop that draws the box pictures in the array on the screen if it's vis variable is true.
    for (i=0;i<boxArray.length;i++){
        //Draw stuff draws the array
        drawStuff(boxArray[i])
    }

    //This function draws all of the other images using the drawStuff function.
    drawOtherNonArrayStuff();
    drawLvl3Stuff();

    drawStuff(myMan);

    document.getElementById("result").innerHTML = " ";
    document.getElementById("foundDisp").innerHTML = " ";
    document.getElementById("display").innerHTML = " ";

    document.getElementById("addedNums").innerHTML = "Your Numbers Are: ";
    document.getElementById("dispQuest").innerHTML = "Your questions are: ";

    document.getElementById("studyCards").disabled = false;
    document.getElementById("inform").innerHTML = " ";
    document.getElementById("lockComb").innerHTML = "Your Lock Combination is: ";
    document.getElementById("nextLevel").disabled = false;
    document.getElementById("startButton").disabled = false;

}

//These 2 elemensts remove the last element in the question and answer array.
function removeLastAnsInputed(){
    questAnsArray.pop();
}
function removeLastElementQuest(){
    questArray.pop();
    document.getElementById("dispQuest").innerHTML = "Your questions are: " + questArray;
}

//This shows the questions and its corresponding answers
function studyShowCardsFunction(){

    document.getElementById("studCarQuestion").innerHTML = "The questions are: " + questArray;
    document.getElementById("studCarAns").innerHTML = "The answers are: " + questAnsArray;

}

//This checks if the inputed lock numbers are what they are set as.
function lockNumInput(){
    var lockInp = document.getElementById("inpLockNums").value;

    if (lockInp == randNum1 + "," + randNum2 + "," + randNum3){
        // alert("Ya got it!");
        document.getElementById("inform").innerHTML = "YOU GOT THE COMBINATION CORRECT!"
        winLvl2 = true;
    }else{
        document.getElementById("inform").innerHTML = "YOU GOT THE COMBINATION INCORRECT! One life has been removed."
        health--;
        checkMyManDie(health);
    }

}

//This function checks when the player has collided with non clue objects and
//a question is asked.
function checkLvl2CollisionWithNonCollisionObjects(){
    var rand = getRandomInt(0,questArray.length-1)
    var quest = questArray[rand];
    var ans = questAnsArray[rand];
    correct = ans;

    //goes through array of pics and checks for which pic the player collided with
    for (i=0;i<itemsArray.length;i++){

        if (myMan.left + myMan.width > itemsArray[i].left && myMan.left < itemsArray[i].left + itemsArray[i].width &&
            myMan.top + myMan.height > itemsArray[i].top && myMan.top < itemsArray[i].top + itemsArray[i].height &&
            myMan.vis == true && itemsArray[i].vis == true){

            // alert("Collided With" + itemsArray[i] + ", IF statement works");
            myMan.left -= 50;
            myMan.top -= 50;

            document.getElementById("display").innerHTML = quest;

            itemsArray[i].left = x;
            itemsArray[i].top = 750;
            itemsArray[i].height = 50;
            itemsArray[i].width = 50;

            //draws the item collided with 50 x apart.
            x = x + 50;
        }

    }

}

//This function draws the stuff for level3
function drawLvl3Stuff(){
    if (level3 == true){
        drawStuff(bookshelf2)
        drawStuff(sideDesk2)
        drawStuff(paperPile2)
        drawStuff(plant3)
        drawStuff(plant4)
        drawStuff(garbageCan2)
        drawStuff(sideNewDesk2)
        drawStuff(bookPile2)
    }
}

//These 3 function checks the colision with the clues in level 3.
function checkCollisionWithGarbageCan(){
    // var rand = getRandomInt(0,questArray.length-1)
    // var quest = questArray[rand];
    // var ans = questAnsArray[rand];
    // correct = ans;

    if (myMan.left + myMan.width > garbageCan.left && myMan.left < garbageCan.left + garbageCan.width &&
        myMan.top + myMan.height > garbageCan.top && myMan.top < garbageCan.top + garbageCan.height &&
        myMan.vis == true && garbageCan.vis == true && lvNum == 2 && gotCorrect == true){
        //
        // alert("Collided With Carpet, IF statement works");
        myMan.left -= 50;
        myMan.top -= 50;

        // document.getElementById("display").innerHTML = quest;
        document.getElementById("lockComb").innerHTML = "Your combination number is: " + randNum1 + " , " + randNum2 + " , " + randNum3;
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE LAST CLUE! You have all the info you need. "
        document.getElementById("display").innerHTML = " ";
        document.getElementById("result").innerHTML = " ";

        garbageCan.left = 850;
        garbageCan.top = 750;
        garbageCan.width = 50;
        garbageCan.height = 50;

        lvNum++;

        // console.log(winLvl2);
        // console.log(numCorrect);


    }
}
function checkCollisionWithCabinets(){
    // var rand = getRandomInt(0,questArray.length-1)
    // var quest = questArray[rand];
    // var ans = questAnsArray[rand];
    // correct = ans;

    if (myMan.left + myMan.width > cabArray[randSpot].left && myMan.left < cabArray[randSpot].left + cabArray[randSpot].width &&
        myMan.top + myMan.height > cabArray[randSpot].top && myMan.top < cabArray[randSpot].top + cabArray[randSpot].height &&
        myMan.vis == true && cabArray[randSpot].vis == true && lvNum == 1 && gotCorrect == true){
        //
        // alert("Collided With Carpet, IF statement works");
        myMan.left += 50;
        myMan.top += 50;

        // document.getElementById("display").innerHTML = quest;
        bookshelf2.vis = true;
        sideDesk2.vis = true;
        paperPile2.vis = true;

        document.getElementById("lockComb").innerHTML = "Your first two numbers are: " + randNum1 + " , " + randNum2;
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE SECOND CLUE! Find the last clue."
        document.getElementById("display").innerHTML = " ";
        document.getElementById("result").innerHTML = " ";

        plant4.vis = true;
        sideNewDesk2.vis = true;
        bookPile2.vis = true;
        colLvClue3 = true;

        cabArray[randSpot].left = 800;
        cabArray[randSpot].top = 750;
        cabArray[randSpot].width = 50;
        cabArray[randSpot].height = 50;

        lvNum++;

        lvClue3 = true;


    }
}
function checkCollisionWithCarpet(){
    // var rand = getRandomInt(0,questArray.length-1)
    // var quest = questArray[rand];
    // var ans = questAnsArray[rand];
    // correct = ans;

    if (myMan.left + myMan.width > carpet.left && myMan.left < carpet.left + carpet.width &&
        myMan.top + myMan.height > carpet.top && myMan.top < carpet.top + carpet.height &&
        myMan.vis == true && carpet.vis == true && gotCorrect == true){
        //
        // alert("Collided With Carpet, IF statement works");
        myMan.left -= 50;
        myMan.top -= 50;

        // document.getElementById("display").innerHTML = quest;
        carpet.left = 750;
        carpet.top = 750;
        carpet.width = 50;
        carpet.height = 50;

        document.getElementById("lockComb").innerHTML = "Your first number is: " + randNum1
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE FIRST CLUE! Find the next clue."
        document.getElementById("display").innerHTML = " ";
        document.getElementById("result").innerHTML = " ";

        plant3.vis = true;
        garbageCan2.vis = true;
        boxArray[3].vis = true;

        lvNum++;

        lvClue2 = true;
        lvCoClue1 = true;


    }
}

//These 3 functions control the timer in level 3. Set, run, and check
//set
function startTimer(){
    timer = setInterval(alertFunc, 1000);
}
//run
function alertFunc(){
    tim--;
}
//check
function checkTimeLimit(){
    if (tim <= 0){
        gameOver = true;

        lvClue1 = false;
        lvClue2 = false;
        lvClue3 = false;

        //This displays to the player that they don't have any lives left.
        document.getElementById("result").innerHTML = "You ran out of time!"
        //The background is drawn so that the end looks neat and orginised.
        drawBackground();
        //The animation stops.
        cancelAnimationFrame(a);

        for (i=0;i<stickyNoteArray.length;i++){
            drawStuff(stickyNoteArray[i]);
        }
        for (i=0;i<heartsArray.length;i++){
            drawStuff(heartsArray[i]);
        }
    }
}

//These 2 functions add the inputed question and answers
function addQuestions(){
    quesInp = document.getElementById("inputQues").value;
    questArray.push(quesInp);
    document.getElementById("dispQuest").innerHTML = "Your questions are: " + questArray;
    // console.log(questArray);
}
function submitQuestions(){
    ansInp = document.getElementById("inputAnsToQues").value;
    questAnsArray.push(ansInp);
    // console.log(questAnsArray);
}

//This draws the doors in scene2
function drawScene2Stuff(){
        drawStuff(door1);
        drawStuff(door2);
        // console.log(clue1 + " , " + clue2 + " , " + clue3);
}

//This checks the players collision with the doors in scene2
function checkCollideWithDoorsInLevel2(){
    if (myMan.left + myMan.width > door1.left && myMan.left < door1.left + door1.width &&
        myMan.top + myMan.height > door1.top && myMan.top < door1.top + door1.height &&
        myMan.vis == true && door1.vis ==true){
        // alert("collided with door 1")
        myMan.left += 50;
        myMan.top += 50;
        setUpLevel3();
    }
    if (myMan.left + myMan.width > door2.left && myMan.left < door2.left + door2.width &&
        myMan.top + myMan.height > door2.top && myMan.top < door2.top + door2.height &&
        myMan.vis == true && door2.vis ==true){
        // alert("collided with door 2")
        myMan.left += 50;
        myMan.top += 50;
        endGameOnceCollidedWithDoor2();
    }
}

//This function sets up the variables and text for level 3
function setUpLevel3(){
    level3 = true;
    startTimer();
    door2.vis = false;
    door1.vis = false;

    bookshelf.vis = true;
    plant2.vis = true;
    deskArray[randIndex].vis = true;

    document.getElementById("result").innerHTML = " ";
    document.getElementById("foundDisp").innerHTML = " ";
    document.getElementById("display").innerHTML = " ";
    document.getElementById("lockNums").disabled = false;


    lvClue1 = true;
    level2 = false;
}

//This checks the collision with the wrong door in scene 2 and stops the animation.
function endGameOnceCollidedWithDoor2(){
    gameOver = true;
    //This displays to the player that they don't have any lives left.
    document.getElementById("result").innerHTML = "You chose the wrong door!"

    drawBackground();

    //The background is drawn so that the end looks neat and orginised.
    //The animation stops.
    cancelAnimationFrame(a);

}

//This function checks if the answer to the two ints that are multiplied match the input of the player.
function submitAnswer(){
    // The input of the player
    var inp = document.getElementById("mathQAns").value;
    //Makes sure that the input changes from a string to a integer

    if (level1 == true){
        inp = parseInt(inp);
        //This condition checks if the player input matches the answer to the two ints being multiplied.
        if (inp == correct){
            // alert("correct")
            //This numCorrect goes up by one if the player gets the answer correct.
            numCorrect += 1;

            //This makes sure that the past displayed numbers goes away and are not visible, so it doens't confuse the player
            document.getElementById("display").innerHTML = " ";
            //This displays if the player got the answer correct.
            document.getElementById("result").innerHTML = "You got it correct! You can look for the other clue now";

            if (numCorrect == 3){
                document.getElementById("result").innerHTML = "You got it correct! You can move on to the next level.";
            }

            ///If the Player doesn't get the ans correct then it takes a point out of the health and displays it.
        }else {
            // alert("wrong")
            //Displays the result
            document.getElementById("result").innerHTML = "You got it incorrect! Answer again. You can't find another clue until you get this correct.";
            //Removes one from the health so that the player loses a health if they get it wrong
            health--;
            //This function passes the health variable in the array so that a heart can be taken away.
            checkMyManDie(health);
        }
    }

    if (level3 == true){
        //This condition checks if the player input matches the answer to the two ints being multiplied.
        if (inp == correct){
            // alert("correct")
            // //This numCorrect goes up by one if the player gets the answer correct.
            // numCorrect += 1;

            //This makes sure that the past displayed numbers goes away and are not visible, so it doens't confuse the player
            document.getElementById("display").innerHTML = " ";
            //This displays if the player got the answer correct.
            document.getElementById("result").innerHTML = "You got it correct! You can continue to look for the clues.";
            ///If the Player doesn't get the ans correct then it takes a point out of the health and displays it.

            gotCorrect = true;

            if (lvNum == 3){
                document.getElementById("result").innerHTML = " ";
            }

        }else {

            gotCorrect = false;
            // alert("wrong")
            //Displays the result
            document.getElementById("result").innerHTML = "You got it incorrect! Answer again. You can't find another clue until you get this correct.";
            //Removes one from the health so that the player loses a health if they get it wrong
            health--;
            //This function passes the health variable in the array so that a heart can be taken away.
            checkMyManDie(health);
        }
    }


}

//This function checks if the player has won or not by checking the value of the checkWin variable.
function checkWin(){
    //this condition checks the variable of the numCorrect
    if (numCorrect == 3){
        //If the condition is true then the winGame variable sets to true so that the game won text can be displayed.
        // winGame = true;
        winLvl1 = true;
        //allows the player to decide if they want to move on to the next level.
        document.getElementById("nextLevel").disabled = false;
        numCorrect++;
    }

}

// This function multiplies the numbers that are chosen from the array.
function multiNums(inp1,inp2){
    //The correct variable gets set by the two numbers passed in the function and multiplies it.
    correct = inp1 * inp2;
}
//This function is interconnected with the multiNums function because the number from the array is
//generated in this function and manipulated in the multiNums function.
function collideWithPlantAndAskQuestionOne(){
    //The num1 and num2 gets set as a random int from the ranNumsArray which is the array that the players
    //inputed numbers are stored in.
    var num1 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
    var num2 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
    //This condition is used to check the characters collision with the object (plant) (Teacher given)
    if (myMan.left + myMan.width > plant2.left && myMan.left < plant2.left + plant2.width &&
        myMan.top + myMan.height > plant2.top && myMan.top < plant2.top + plant2.height &&
        myMan.vis == true && plant2.vis ==true){
        // alert("collided with plant")
        //The character moves back when he collides with the object
        myMan.top += 50;
        myMan.left +=50;
        //Displayed corresponding strings
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE FIRST CLUE!";
        document.getElementById("display").innerHTML = num1 + " * " + num2;
        document.getElementById("result").innerHTML = " ";
        //Sets the clue2 and colClue1 to true to signal that the player can now collide with the second object
        clue2 = true;
        colClue1 = true;
        //The ints are passed in a function to be multiplied
        multiNums(num1,num2);
        //The plant goes away so that the player can't collide with them again.
        plant2.vis = false;
    }
}
//This function is similar to the checkCollisionWithObjectOne
function collideWithRandChairAndAskQuestionTwo(){
    //The num1 and num2 gets set as a random int from the ranNumsArray which is the array that the players
    //inputed numbers are stored in.
    var num1 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
    var num2 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
    //This condition is used to check the characters collision with the object (chair) (Teacher given)
    //The deskArray[randIndex] choses a random index in the deskArray to be used as the chair in which
    //the frog collides with.
    if (myMan.left + myMan.width > deskArray[randIndex].left && myMan.left < deskArray[randIndex].left + deskArray[randIndex].width &&
        myMan.top + myMan.height > deskArray[randIndex].top && myMan.top < deskArray[randIndex].top + deskArray[randIndex].height &&
        myMan.vis == true && deskArray[randIndex].vis ==true && colClue1 == true && clue2 == true && numCorrect == 1){
        // console.log("collided with desk: " + randIndex);
        //The character moves back when he collides with the object
        myMan.top += 50;
        myMan.left +=50;
        //Displayed corresponding strings
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE SECOND CLUE!";
        document.getElementById("display").innerHTML = num1 + " * " + num2;
        document.getElementById("result").innerHTML = " ";
        //sets the third clue variable to be true so that the last riddle can be displayed.
        clue3 = true;
        //The specific chosen chair disapers so that the character can't collide with it again.
        deskArray[randIndex].vis = false;
        //The numbers get mutiplied.
        multiNums(num1,num2);

    }

}
//This function is similar to the checkCollisionWithObjectOne
function collideWithBookShelfAndAskQuestionThree(){
    //The num1 and num2 gets set as a random int from the ranNumsArray which is the array that the players
    //inputed numbers are stored in.
    var num1 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
    var num2 = randNumsArray[getRandomInt(0,randNumsArray.length-1)];
//This condition is used to check the characters collision with the object (bookshelf) (Teacher given)
    if (myMan.left + myMan.width > bookshelf.left + 60 && myMan.left < bookshelf.left + bookshelf.width &&
        myMan.top + myMan.height > bookshelf.top && myMan.top < bookshelf.top + bookshelf.height &&
        myMan.vis == true && bookshelf.vis ==true && colClue1 == true && clue2 == true && clue3 == true && numCorrect == 2){
        // alert("collided with bookshelf")
        //The character moves up when he collides with the object
        myMan.top -= 50;
        myMan.left -=50;
        //Displayed corresponding strings
        document.getElementById("foundDisp").innerHTML = "YOU FOUND THE LAST CLUE!";
        document.getElementById("display").innerHTML = num1 + " * " + num2;
        document.getElementById("result").innerHTML = " ";
        //The numbers get mutiplied.
        multiNums(num1,num2);
        //The bookshelf disappers.
        bookshelf.vis = false;
    }
}

//This function gets called when the how to play button gets pressed.
function howToPlay(){
    //This displayes the instructions
    document.getElementById("hTPDisp").innerHTML = "This is a game in which you can study and play a game at the same time. Use the A,W,S,D keys to move Mickie Mouse. You are given the first clue and now you need to find the second and third clues. Input your numbers that you want to add and once you find the first object you answer the question and if you get it right then you can find the next clue. Find all the clues to win the answer game."
}

//This function removes the text that was displayed by the how to play function
function howToPlayLess(){
    //Removes the text.
    document.getElementById("hTPDisp").innerHTML = " ";
}

//This is a teacher given function that finds a random value within the range of the minimun and max values passed
//as parameters.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//This function is used to change the health value if the player dies by going off the screen
//or getting a question wrong.
function checkMyManDie(heal){
     //The process is done in order (SEQUENCING)
    //This heal variable is the health varibale that is being checked if it is still greater then 0
    //checked through SELECTION
    if (heal > 0 && winGame == false) {
        //This IRITATION
        if (gameOver == false){
            for (i = 0; i < heartsArray.length; i++) {
                //This is another selection that is used to remove only the heart corresponding to the
                //heart index that matches the health. Used because the hearts are removed from right to left.
                if (i == heal) {
                    //Makes the heart disappear
                    heartsArray[i].vis = false;
                    //This alerts the player that there is only 1 life left
                    if (i == heal - heal + 1){
                        document.getElementById("result").innerHTML = "WARNING You only have 1 life left!"
                    }
                }
            }
        }
        //If none of these conditions work then this happens.
    }else{
        //If the game is over then this variable is set to true so that the end game text can be displayed.
        gameOver = true;
        //This displays to the player that they don't have any lives left.
        document.getElementById("result").innerHTML = "You ran out of lives!"
        //The background is drawn so that the end looks neat and orginised.
        drawBackground();
        //The animation stops.
        cancelAnimationFrame(a);

        document.getElementById("startButton").disabled = false;
        // //These loops redraw the pictures in the arrays (not the hearts) to make the
        // //end board look neat and clean.
        // for(i=0;i<deskArray.length;i++){
        //     drawStuff(deskArray[i]);
        // }
        // for (i=0;i<cabArray.length;i++){
        //     drawStuff(cabArray[i]);
        // }
        // for (i=0;i<boxArray.length;i++){
        //     drawStuff(boxArray[i])
        // }
        for (i=0;i<stickyNoteArray.length;i++){
            drawStuff(stickyNoteArray[i]);
        }
        // drawOtherNonArrayStuff();
    }
}

//This function makes sure that the main character stays within the game board.
function confineMickkieWithinGame(){
    //This selection statement makes sure that the borders of the character don't pass the game board borders.
    if (myMan.left >= 950 || myMan.left < 0 || myMan.top < 0 || myMan.top >= 650){
        //The character gets reset in a diffrent coordinets.
        myMan.left = 50;
        myMan.top = 100;
        console.log(level2)
        //3.c.ii
        //The health gets removed if the character moves off the screen. Health has 1 removed from it and is
        //passed in the checkMyManDie function to be manipulated and worked with.
        health--;
        checkMyManDie(health);
    }
}

//This function draws the remaining obejects not placed in arrays.
function drawOtherNonArrayStuff(){
//This function is made to reduce the need of having many functions and lines of code, easy abstraction.
    drawStuff(sideDesk1);
    drawStuff(sideNewDesk);
    drawStuff(bookPile);
    drawStuff(paperPile);
    drawStuff(garbageCan);
    drawStuff(table);

    if (bookshelf.vis == true){
        drawStuff(bookshelf);
    }

    drawStuff(carpet);
    drawStuff(plant1);

    if (plant2.vis == true){
        drawStuff(plant2);
    }


}

//This is the abstracted function that draws the item or items that are passed as parameters in this array
//When it is called.
function drawStuff(x){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (x.vis == true){
        ctx.drawImage(x,x.left,x.top,x.width,x.height);
    }

}

//This sets the variales for scene 2.
function startNextLevel(){
    if (level1 == true){
        // clue1 = false;
        // colClue1 = false;
        // clue2 = false;
        // clue3 = false;
        document.getElementById("nextLevel").disabled = true;
        level2 = true;
        level3 = false;
        level1 = false;
    }
}