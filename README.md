# FizzBuzz Project

## About

The project is built on React using npx create-react-app script and includes 2 pages. 
The first page ('/create') prompts user to enter some personal data and an integer (positive / negative / 0). 
If submit form is missing any required data from formDataFields object or integer number fails the rejex check, "Submit" stays disabled.
Upon "Submit" buttom click a user is redirected to Result page ('/result'), that displays all submitted data 
and a "fizz buzz" div. The div block should result in “fizz” string if the input integer is divisible by 3, “buzz” string if the input integer is divisible by 5, and “fizzbuzz” string if the integer is divisible by both 3 & 5. If none of the conditions are true the div remains empty.


## Laptop Setup

### Prerequisites

1. Download and install Node (v14 or higher) and npm
2. Clone the [FizzBuzz repo](https://github.com/NastassiaShauchenka/fizz_buzz.git) from GitHub
3. cd to root directory and run npm install
4. Run npm run start command

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

