function getComputerChoice()
{
  let eleccioncompu;
  let randomNumber = Math.floor(Math.random()*3) + 1;
  if(randomNumber == 1)
  {
  eleccioncompu = 'Rock';
  }
  else if(randomNumber == 2)
  {
    eleccioncompu = 'Paper';
  }
  else
  {
    eleccioncompu = 'Scissor';
  }
  return eleccioncompu;
}

function playRound(playerSelection, computerSelection)
{
  
  if(playerSelection == 'rock' && computerSelection == 'Paper')
  {
    console.log('You lose! , Paper beats rocks')
    return 1;
  }

  else if(playerSelection == 'rock' && computerSelection == 'Scissor')
  {
    console.log(`You win! , Rock beats scissor`)
    return 2;
  }

  else if(playerSelection == 'rock' && computerSelection == 'Rock')
  {
    console.log(`Is a tie (Rock tie)`);
    return 0;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Rock')
  {
    console.log('You win! , Paper beats Rock');
    return 2;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Scissor')
  {
    console.log('You lose! , Scissor beats Paper');
    return 1;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Paper')
  {
    console.log('Is a tie (Paper tie)');
    return 0;
  }

  else if(playerSelection == 'scissor' && computerSelection == 'Paper')
  {
    console.log('You win! , Scissor beats Paper');
    return 2;
  }

  else if(playerSelection == 'scissor' && computerSelection == 'Rock')
  {
    console.log('You lose! , Rock beats Scissor');
    return 1;
  }

  else
  {
    console.log('Is a tie (Scissor tie)');
    return 0;
  }

}


let contadorPlayer = 0;
let contadorComputadora = 0;
for(let i = 0 ; i<15 ; i++)
{

  let playerSelection = prompt('Type Rock , Paper or Scissor');
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();

  
  if(playRound(playerSelection, computerSelection) == 1)
  {
  contadorComputadora++;
  }
  else if(playRound(playerSelection, computerSelection) == 2)
  {
  contadorPlayer++;
  }

  if(contadorComputadora == 5 || contadorPlayer == 5)
  break;
  
}
console.log(`Conteo del jugador ${contadorPlayer}`);
console.log(`Conteo de la computadora ${contadorComputadora}`);

if(contadorPlayer > contadorComputadora)
{
  alert("Haz ganado!");
}
else
{
  alert("Haz perdido!");
}

/*TIE == 0 ////// LOSE == 1 ////// WIN == 2*/

