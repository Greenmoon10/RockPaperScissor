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
  const container = document.querySelector('#container');
  container.setAttribute('style','border:3px solid black; background:pink; max-width:1100px; margin: 0 auto; padding: 0 30px;');
  if(playerSelection == 'rock' && computerSelection == 'Paper')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'You lose! , Paper beats rock!';
    container.appendChild(resultado);
    return 1;
  }

  else if(playerSelection == 'rock' && computerSelection == 'Scissor')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'You win! , Rock beats scissor';
    container.appendChild(resultado);
    return 2;
  }

  else if(playerSelection == 'rock' && computerSelection == 'Rock')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'Is a tie (Rock tie)';
    container.appendChild(resultado);
    return 0;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Rock')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'You win!, Paper beats Rock';
    container.appendChild(resultado);
    return 2;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Scissor')
  { 
    const resultado = document.createElement('div');
    resultado.textContent = 'You lose!, Scissor beats Paper';
    container.appendChild(resultado);
    return 1;
  }

  else if(playerSelection == 'paper' && computerSelection == 'Paper')
  { 
    const resultado = document.createElement('div');
    resultado.textContent = 'Is a tie (Paper tie)';
    container.appendChild(resultado);
    return 0;
  }

  else if(playerSelection == 'scissor' && computerSelection == 'Paper')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'You win!, Scissor beats Paper';
    container.appendChild(resultado);
    return 2;
  }

  else if(playerSelection == 'scissor' && computerSelection == 'Rock')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'You lose!, Rock beats Scissor';
    container.appendChild(resultado);
    return 1;
  }

  else if(playerSelection == 'scissor' && computerSelection == 'Scissor')
  {
    const resultado = document.createElement('div');
    resultado.textContent = 'Is a tie (Scissor tie)';
    container.appendChild(resultado);
    return 0;
  }

}
let contadorPlayer = 0;
let contadorComputadora = 0;

for(let i = 1 ; i <= 5 ; i++)
{
  let playerSelection;
  const computerSelection = getComputerChoice();

  const btnrock = document.querySelector('#rock');
  btnrock.onclick = () => playRound(playerSelection = 'rock', computerSelection);

  const btnpaper = document.querySelector('#paper');
  btnpaper.onclick = () => playRound(playerSelection = 'paper', computerSelection);

  const btnscissor = document.querySelector('#scissor');
  btnscissor.onclick = () => playRound(playerSelection = 'scissor', computerSelection);
  

  
  if(playRound(playerSelection, computerSelection) == 1)
  {
  contadorComputadora++;
  }
  else if(playRound(playerSelection, computerSelection) == 2)
  {
  contadorPlayer++;
  }
 console.log(contadorComputadora);
}


/*TIE == 0 ////// LOSE == 1 ////// WIN == 2*/

