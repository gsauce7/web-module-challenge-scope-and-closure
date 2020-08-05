// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 ANSWER: counter1 has the count variable declared in the function scope, but counter2 has the count variable outside of the function, in the global scope. 
 * 2. Which of the two uses a closure? How can you tell?
 * ANSWER: They both use closure since all the information they need to run is there either in the function or in the lexical scope. 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * ANSWER: counter1 would be better if you needed to keep the count variable private and counter2 would be better if you needed to have the count variable be available to other functions. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();


// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {

	points =  Math.floor(Math.random() * 3);
	return points;

}  

/*console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, inningsNum){
  
  let final = {
    Home: 0,
    Away: 0
    };
  for (let i = 0; i < inningsNum; i++) {
    final.Home += inning();
    final.Away += inning();
  }
  return final;

}
/* console.log(finalScore(inning, 9)); */

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
/*This calculates and returns the inning score.*/
function getInningScore() {
  let innResult = {
    Home: 0,
    Away: 0
  };
  innResult.Home += inning();
  innResult.Away += inning();
  return innResult;
} 

/* This simulates the scoreboard of a game showing each inning and final score */
function scoreboard(getInningScore, inningScore, numOfInnings) {
  let suffix = "";
  let score = getInningScore();
  let homeArray = []
  let awayArray = []
  for (i = 1; i <= numOfInnings; i++){
    if(i === 1) {
      score.Home = score.Home;
      score.Away = score.Away;
    } else {
    score.Home = score.Home + inningScore();
    score.Away = score.Away + inningScore();
    }
    if (i === 1){
      suffix = "st";
    }
    else if (i === 2) {
      suffix = "nd";
    }
    else if (i === 3) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
    console.log(` ${i}${suffix} inning: Away ${score.Away} - Home ${score.Home}
`);
  }
  
 
  return ` Final Score: Away ${score.Away} - Home ${score.Home} `;
}

/*The two callback functions used here are getInningScore and inning. These have been left in the global scope. */
console.log(scoreboard(getInningScore,inning,9));
