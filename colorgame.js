var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
colors = generateRandomColors(3);
pickedColor = pickcolor();
colorDisplay.textContent = pickedColor;
for(var i = 0;i < squares.length;i++){
    if(colors[i]){
        squares[i].style.background = colors[i]; 
    }
    else{
        squares[i].style.display="none";
    }
}
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    });

resetbutton.addEventListener("click",function(){
    colors= generateRandomColors(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="#232323";
});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      var clickedColor=this.style.backgroundColor ;
      if(clickedColor===pickedColor)
      {
        messageDisplay.textContent="Correct!!";
        resetbutton.textContent="play again !!";
        changeColors(clickedColor);
        h1.style.backgroundColor=clickedColor;
      }
      else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again!!";
      }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
    {
      var random=Math.floor(Math.random() * colors.length);
      return colors[random];
    }

function generateRandomColors(num){
    var arr=[]
    for(var i = 0; i < num; i++)
        {
           arr.push(randomColor())
        }

    return arr;
}

function randomColor()
{
   var r=Math.floor(Math.random() * 256);
   var g=Math.floor(Math.random() * 256);
   var b=Math.floor(Math.random() * 256);
   return "rgb(" + r +", " + g + ", " + b + ")";
}