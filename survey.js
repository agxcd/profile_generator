const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer) => {
  rl.question("What's an activity you like doing?\n", (answer) => {
    rl.question("What do you listen to while doing that?\n", (answer) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
              answers.push(answer);
              console.log(`Thank you for your valuable feedback: ${answers[0]}`);
              console.log(`Thank you! That's the end of the survey.`);
              rl.close();
            });   
            answers.push(answer);         
          });
          answers.push(answer);
        });
        answers.push(answer);
      });
      answers.push(answer);
    });
    answers.push(answer);
  });
  answers.push(answer);
});

// const survey = function(questions){
//   let answers = [];
//   for (const question of questions){
//     rl.question(question, (answer) => {
// console.log(question);
// answers.push(answer);
//     });
//     rl.close(); 
//     console.log(`Thank you for your valuable feedback: ${answers[0]}`);
//   }
// };

// survey(questions);
// const questions = ["What's your name? Nicknames are also acceptable :)",
// "What's an activity you like doing?",
// "What do you listen to while doing that?",
// "Which meal is your favourite (eg: dinner, brunch, etc.)",
// "What's your favourite thing to eat for that meal?",
// "Which sport is your absolute favourite?",
// "What is your superpower? In a few words, tell us what you are amazing at!"];