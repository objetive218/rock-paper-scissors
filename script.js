
let player = 0;
let computer = 0;

  const playRound = function(playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    if(playerSelection == "rock" && computerSelection == "paper"){
      computer += 1 ;
      return "You Lose! paper beats rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
      player += 1 ;
      return "You win! rock beats scissors"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
      player += 1 ;
      return "You win! paper beats rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
      computer += 1 ;
      return "You Lose! scissors beats paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
      computer += 1 ;
      return "You Lose! rock beats scissors";
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
      player += 1 ;
      return "You win! scissors beats paper";
    }else if (playerSelection === computerSelection ){
      return "It's a tie!";
    }
  }
  function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    switch(random){
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
        const btn1= document.querySelector("#paper");
        const btn2= document.querySelector("#scissors");
        const btn3= document.querySelector("#rock");
        const container = document.querySelector("#table");
        const result = document.createElement("div");
        result.id = "result"
        container.appendChild(result);
        
        
        const newGame = function(e){
          let a = e.target.id;
            result.textContent = (` ${playRound(a, getComputerChoice())} player: ${player}  - computer: ${computer} `);
            console.log(player,computer)
          if(player === 5){
            result.textContent = "Player win!";
            console.log("win");
          }else if(computer === 5){
            result.textContent = "Computer win!";
            console.log("lose")
          }         
      }
      
        btn1.addEventListener('click',newGame);
        btn2.addEventListener('click',newGame);
        btn3.addEventListener('click',newGame);
            
  /*
console.log(playRound(a, getComputerChoice()));


  function game(){
      let player = 0;
      let computer = 0;
      let contador = 0;
    while(contador < 6){
      let playerSelection = prompt("Rock, paper, or Scissors?");
      let computerSelection = getComputerChoice();
      let a = playRound(playerSelection, computerSelection);
      console.log(playRound(playerSelection, computerSelection))
      if(a === "You win! rock beats scissors" || a === "You win! paper beats rock" || a === "You win! scissors beats paper"){
          player += 1;
          contador += 1;
      }else if (a === "You Lose! paper beats rock" || a === "You Lose! scissors beats paper" || a === "You Lose! rock beats scissors"){
          computer += 1;
          contador += 1;
      }
      console.log(` player: ${player}  - computer: ${computer}`);
    };
    return player >= 3 ? console.log("player win") : console.log("computer win");
  }
  
  console.log(game())
  */