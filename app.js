const inputElement = document.getElementById('nameInput');
const startButton = document.getElementById('startButton');
const mainContainer = document.querySelector('.container');
const gameContainer = document.querySelector('#gameContainer');

let currentBank = 0;
let userName = '';
let gameArr = [];
const NUM_DAYS = 30;
const MIN_DAILY_EARNINGS = 100;
const MAX_DAILY_EARNINGS = 600;
const END_GOAL = 100000;
const UPGRADE_COSTS = {
  A: 500,
  B: 1500,
  C: 3000,
};
const UPGRADE_MULTIPLIERS = {
  A: [1, 0.5, 1.5, 3.0],
  B: [1.5, 2.0, 2.5, 3.0], // Adjusted multipliers for option B
  C: [2, 2.5, 3.0, 4.0], // Adjusted multipliers for option C
};
const BASE_DAILY_EARNINGS = {
  B: 1000, // Base daily earnings for option B
  C: 1500, // Base daily earnings for option C
};

// Event listener for the start button
startButton.addEventListener('click', () => {
    userName = inputElement.value;
    clearElement(gameContainer);
    introScreen();
});

const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

const introScreen = () => {
    // Create elements for the intro screen
    const mainDiv = document.createElement('div');
    const introDivElement = document.createElement('div');
    const continueButton = document.createElement('button');

    // Set text content for elements
    introDivElement.textContent = `So your name is ${userName} huh?
    Well ${userName}, here's the jazz. Its been a bad winter and has been snowing all year! We need you to get this place up and running in 30 DAYS!
    I'll need you to use your cunning and wit to manage us out of this pickle. You can buy some upgrades as needed but we're dirt broke right now and alls we got is this here shovel.
    Anywho! Your goal is to get us a big ol' truck and some new building upgrades but its gonna run us $100000!
    Well.. I'm off to Florida with the wife. See ya in a month!`;
    continueButton.textContent = 'Continue...';

    // Append elements to the main container
    mainContainer.appendChild(mainDiv);
    mainDiv.appendChild(introDivElement);
    mainDiv.appendChild(continueButton);

    // Event listener for the continue button
    continueButton.addEventListener('click', () => {
        clearElement(mainDiv);
        startGame();
    });   
}

const startGame = () => {
    // Create elements for the game screen
    const mainDiv = document.createElement('div');
    const questionParagraph = document.createElement('div');
    const workButton = document.createElement('button');
    const relaxButton = document.createElement('button');
    const upgradeButton = document.createElement('button');
    const quitButton = document.createElement('button');
    const statementDiv = document.createElement('p');
    let day = 1;

    // Set text content for elements
    workButton.textContent = 'Work';
    relaxButton.textContent = 'Relax';
    upgradeButton.textContent = 'Upgrade';
    quitButton.textContent = 'Quit';
    statementDiv.textContent = `Day ${day}: Do you want to shovel houses today? You currently have $0`;

    // Event listeners for game actions
    workButton.addEventListener('click', () => {
        handleWork(day);
    });

    relaxButton.addEventListener('click', () => {
        handleRelax(day);
    });

    upgradeButton.addEventListener('click', () => {
        handleUpgrade(day);
    });

    quitButton.addEventListener('click', () => {
        handleQuit();
    });

    // Append elements to the main container
    gameContainer.appendChild(statementDiv);
    gameContainer.appendChild(mainDiv);
    mainDiv.appendChild(workButton);
    mainDiv.appendChild(relaxButton);
    mainDiv.appendChild(upgradeButton);
    mainDiv.appendChild(quitButton);
}

const handleWork = (day) => {
    // Logic for handling work action
}

const handleRelax = (day) => {
    // Logic for handling relax action
}

const handleUpgrade = (day) => {
    // Logic for handling upgrade action
}

const handleQuit = () => {
    // Logic for handling quit action
}

// Function to generate random daily earnings based on level
function generateRandomEarnings(level, upgradeLevels) {
    // Logic for generating random earnings
}