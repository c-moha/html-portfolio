let colors = ["green", "red", "yellow", "blue"];
let color = $(".btn");
let arr=[];
let start = false;
// this is the count of color sequence pressed by the user
var pres_count=1;
let state =true;


$(document).on("keydown", function(){ 
    if(!start)
    {
        start=true;
        $("h1").text("Level 1");
        getRandColor();
        pres_count=1;
        
    }
});
    
$(".btn").on("mousedown",  function(event){
    if(start){
        console.log(arr.length);
        console.log(pres_count);
        console.log(arr[pres_count-1]);
        console.log($(this).attr("id"));

        if(pres_count <=  arr.length)
        {
            
            if($(this).attr("id")==arr[pres_count-1])
            {
                buttonAnimation($(this));
                if(pres_count == arr.length)
                    {
                      pres_count=1;
                      console.log("we are equal\n");  
                      setTimeout(getRandColor,600);
                      $("h1").text("Level "+ arr.length);
                      return;
                    } 
                pres_count++;
            }

            else{
                gameOver();
            }
        }
        else{
            gameOver();
        }
        
    }
});

function buttonAnimation(element)
{
    col=element.attr("id");
    element.addClass("pressed");
    setTimeout(function(){element.removeClass("pressed");},150);
    let sound = new Audio("./sounds/"+ col + ".mp3");
    sound.play();

}
function wrongAnimation()
{
    let doc = $("body");
    doc.addClass("game-over");
    setTimeout(function(){doc.removeClass("game-over");},150);
    let sound = new Audio("./sounds/wrong.mp3");
    sound.play();


}
function getRandColor()
{
    let rand = Math.floor(4*Math.random());
    console.log("we are in getRandColor"); 
    arr.push(colors[rand]);
    buttonAnimation(color.eq(rand));
}

function gameOver(){
    wrongAnimation();
    arr.length=0;
    start=0;
    $("h1").text("Game Over, press any key to restart.");
}