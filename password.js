console.log(`Welcome to your password validator`)

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("What is your password", function(answer){
if (answer.length >= 10) {
    console.log('password is valid')
} else {
    console.log('password not valid')
}
})
