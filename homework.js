// Episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
const verdict = declareMurderer();
console.log(verdict);

// "The murderer is Miss Scarlet". Three constants have been declared, each one using the previous.


//   Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error- line 22, attempt to change constant results in error message.



//   Episode 3
  let murderer = 'Professor Plum';
  
  const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
  }
  
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);

//  First verdict: The murderer is Mrs. Peacock. 
// Secton verdict: The murderer is Professor Plum.
// Line 41 declares the variable only for the constant's block of code. Outwith that, the constant remains as established on line 38.

//   Episode 4
  let suspectOne = 'Miss Scarlet';
  let suspectTwo = 'Professor Plum';
  let suspectThree = 'Mrs. Peacock';
  
  const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  }
  
  const suspects = declareAllSuspects();
  console.log(suspects);
  console.log(`Suspect three is ${suspectThree}.`);

//   The suspects are Miss Scarlet, Professor Plum, Colonel Mustartd.
//   Suspect three is Mrs. Peacock.
//  As above, line 61 declares the variable only for that constant's block of code, thus only works when called in line 65-66, and not in line 67, which uses line 58's declaration.

//   Episode 5
  const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

//   The weapon is the revolver
//  Despite scenario being a constant, it has defined an object, which can be changed, which is done in line 88.



//   Episode 6
  let murderer = 'Colonel Mustard';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);

//   The murderer is Mrs White.
// Within the anonymous function changeMurderer, a new function is declared and called that changes the murderer to Mrs White. Thus the murderer is changed first to Mr Green, then to Mrs White. What a plot twist.



//   Episode 7
  let murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      let murderer = 'Colonel Mustard';
  
      const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
      }
  
      unexpectedOutcome();
    }
  
    plotTwist();
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);

//   The murderer is Mr Green. Mr Green was declared as a global variable.


//   Episode 8
  const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

//   The weapon is candle stick. When change scenario is called, the plot twist function takes in the argument dining room and evaluates line 165 to be true, changing the murderer. Then unexpectedOutcome is called, evaluating line 170 to be true, thus changing the weapon to the candle stick.

//   Episode 9
  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   The murderer is Professor Plum. The redefining of the variable in line 195 only has scope for that block of code, which the murderer is declared outside of.
