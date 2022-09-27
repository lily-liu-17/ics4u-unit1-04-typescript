/*
 * This is Dice Program
 *
 * @author  Lily Liu
 * @version 1.0
 * @since   2022-09-26
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

let loopCounter = 0
let guessInput = 0
const randomNumber = Math.floor(Math.random() * 6 + 1)
do {
  const guessInputString = prompt('Guess an interger between 1 and 6 : ')
  guessInput = parseInt(guessInputString)
  loopCounter = loopCounter + 1

  if (guessInput > randomNumber) {
    console.log('You guessed too high')
    console.log('Try again')
  } else if (guessInput < randomNumber) {
    console.log('You guessed too low')
    console.log('Try again')
  } else if (isNaN(guessInput)) {
    console.log('Invalid Input')
  } else {
    console.log('You guessed right')
    console.log(`It took you ${loopCounter} guesses`)
  }
} while (guessInput !== randomNumber)

console.log('\nDone.')
