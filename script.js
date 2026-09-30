let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displaymessage=function(message){
    document.querySelector(".message").textContent=message;

}


document.querySelector('.check').addEventListener
('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log( guess,typeof guess);
    // when player no input
    if(!guess)
    {
        displaymessage("put number");
    }
    // when player wins
    else if(guess===number)
    {
        displaymessage(" this is gad dam right");
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";
        document.querySelector('.number').textContent=number;
        if(score>highscore)
        {
            highscore=score;
            document.querySelector(".highscore").textContent=score;
        }
    }

// when the gusse is too higher
else if(guess!==number)
{
    if(score>1)
    {
            displaymessage( guess >number?  "too high":"too low");
            score--;
            document.querySelector(".score").textContent=score;
        }
        else{
        displaymessage("you lose the game man");

        }

    }
    }
//8gdgdgd









 // 

    // when the gusse is too low
    // else if(guess<number)
    // {
    //     if(score>0)
    //     {
    //     document.querySelector(".message").textContent="low number";
    //     score--;
    //     document.querySelector(".score").textContent=score;
    // }
    // else{
    //         document.querySelector(".message").textContent="you llose the game man";

    //     }
    // }

);
document.querySelector(".again").addEventListener("click",function(){
    score=20;
    displaymessage("guess again");
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.check').value="";
    document.querySelector('.guess').value="?";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent=score;
    }
)
