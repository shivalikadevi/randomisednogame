let computerGuess;
let userGuessUpdate=document.getElementById("textOutput");
let userGuess=[];
let audio=new Audio();
let userNumberUpdate=document.getElementById("inputBox");
const init = () => {
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};
const startGame = () =>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
};

const newGameBegin= () =>{
    audio.play();
    window.location.reload();
};
const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
} ;
const compareGuess  = () =>{audio.play();
    const userNumber=Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    if(userGuess.length<maxGuess){
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML="Your Guess is High ";
        userNumberUpdate.value= "";}
        else if(userNumber<computerGuess)
      {userGuessUpdate.innerHTML="Your Guess is Low";
      userNumberUpdate.value= "";}
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value="";
        startNewGame();
    }}
    else{if(userNumber>computerGuess){
        userGuessUpdate.innerHTML=`You loose!! Correct no was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();}
        else if(userNumber<computerGuess)
      {userGuessUpdate.innerHTML=`You loose!! Correct no was ${computerGuess}`;
       userNumberUpdate.value="";
    startNewGame();}
    else{
        userGuessUpdate.innerHTML="It's Correct";
        userNumberUpdate.value="";
        startNewGame();

    }}
    document.getElementById("attempts").innerHTML= userGuess.length;};
const easyMode = ()  =>{
    audio.play();
    maxGuess=10;
    startGame();};
const hardMode = () =>{audio.play();
    maxGuess=5;
    startGame();};