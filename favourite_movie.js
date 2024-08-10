const favmovie = "yashoda";
let guess = prompt("Enter your favourite movie: ");
while ( (guess != favmovie) && (guess != "quit")) {
     guess = prompt(" ohh !!! Wrong guess !!! Again try and Enter your favourite movie: ");
}
if(guess == favmovie)
{
    console.log("Congratulations .......You guess right.");
}