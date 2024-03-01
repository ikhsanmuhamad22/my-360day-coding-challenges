// Day 11

// Rock Paper Scissors

const rps = (p1: string, p2: string) => {
  let message = '';
  if (p1 === 'rock') {
    if (p2 === 'scissors') {
      message = 'Player 1 won!';
    } else if (p2 === 'paper') {
      message = 'Player 2 won!';
    } else {
      message = 'Draw!';
    }
  } else if (p1 === 'scissors') {
    if (p2 === 'rock') {
      message = 'Player 2 won!';
    } else if (p2 === 'paper') {
      message = 'Player 1 won!';
    } else {
      message = 'Draw!';
    }
  } else if (p1 === 'paper') {
    if (p2 === 'scissors') {
      message = 'Player 2 won!';
    } else if (p2 === 'rock') {
      message = 'Player 1 won!';
    } else {
      message = 'Draw!';
    }
  } else {
    message = 'Please follow the instruction game';
  }
  return message;
};

console.log(rps('paper', 'rock'));
