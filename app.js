
// Total questions
  let questionTotal = 7;

// Question Counter (which question are we on)
  let questionCounter = 0;

// Variable Solicitations:
  let solicitation = `Please enter a`;
  let questionArray = [
    `${solicitation} animal noun ("horse", "mouse" etc)`,
    `${solicitation} different animal noun`,
    `${solicitation} adjective ("quickly", "amazingly" etc)`,
    `${solicitation} verb (infinitive form)`,
    `${solicitation} noun`,
    `${solicitation} verb (past tense)`,
    `${solicitation} place noun`,
  ];

// User Prompts
let userInputs = [];
for (let i = questionTotal; i >= 0; i--) {
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    questionTotal--;
  }

// Original story
let originalStory = `<h2>There was once a ${userInputs[0]} who was friends with a ${userInputs[1]}. One day, he challenged the ${userInputs[1]} to a race. Seeing how ${userInputs[3]} the ${userInputs[1]} was going, the ${userInputs[0]} thought he will ${userInputs[4]} this easily. So he took a ${userInputs[5]} while the ${userInputs[1]} kept on going. When the ${userInputs[0]} ${userInputs[6]}, he saw that the ${userInputs[1]} was already at the ${userInputs[7]}. Much to his chagrin, the ${userInputs[1]} won the race while he was busy sleeping."</h2>`;
console.log(originalStory);

// Alert
 alert(
    "All done! Ready for your totally-accurate, not-at-all confusing story??"
  );

 // Output
  console.log(originalStory);
  document.write(originalStory);
};
