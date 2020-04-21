var numOfSquares=9;
var colors = generateRandomColors(numOfSquares);
var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares=3;
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
     resetButton.textContent="New Colors";
     h1.style.backgroundColor="steelblue";
     messageDisplay.textContent="";

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
           squares[i].style.display="none";
        }
    }

})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares=9;
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
     resetButton.textContent="New Colors";
     h1.style.backgroundColor="steelblue";
     messageDisplay.textContent="";


    for(var i=0;i<squares.length;i++){
       
     squares[i].style.backgroundColor=colors[i];
     squares[i].style.display="block";
           
    }
    
})



resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numOfSquares);
     pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";
    this.textContent="New Colors";

    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }

    h1.style.backgroundColor="steelblue";


})


for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        
        var clickedcolor=this.style.backgroundColor;
       

        if(clickedcolor === pickedColor){
            messageDisplay.textContent="Correct";
            resetButton.textContent="Play Again?";
            ChangeColors(pickedColor);
            h1.style.backgroundColor=pickedColor;
            PlaySound();
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again";
        }

  });
}



function ChangeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;

    }
}

function pickColor(){
     return colors[parseInt(Math.random()*colors.length)];
    

}

function generateRandomColors(num){
    var tab=[];
    for(var i=0;i<num;i++){
        tab.push(RandomColor());
    }

    return tab;
}

function RandomColor(){

    var r=parseInt(Math.random()*256);
    var g=parseInt(Math.random()*256);
    var b=parseInt(Math.random()*256);
    return  "rgb("+r+", "+g+", "+b+")";
}

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()

}


