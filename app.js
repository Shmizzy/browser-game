


const inputElement = document.querySelector('.name');
const submitElement = document.querySelector('.sub');
const mainContainer = document.querySelector('.container')
const gameContainer = document.querySelector('#gameContainer')

// Constants
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



submitElement.addEventListener('click',()=>{
    userName = inputElement.value
    console.log(userName);
    clearElement(gameContainer);
    introScreen();
});







const clearElement = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}


const introScreen = () => {

    const mainDiv = document.createElement('div')

    const introDivElement = document.createElement('div');
    const continueButton = document.createElement('button');

    continueButton.textContent = 'Continue...';

    introDivElement.textContent = `So your name is ${userName} huh?
    Well ${userName}, here's the jazz. Its been a bad winter and has been snowing all year! We need you to get this place up and running in 30 DAYS!
    I'll need you to use your cunning and wit to manage us out of this pickle. You can buy some upgrades as needed but we're dirt broke right now and alls we got is this here shovel.
    Anywho! Your goal is to get us a big ol' truck and some new building upgrades but its gonna run us $100000!
    Well.. I'm off to Florida with the wife. See ya in a month!`;

    
    mainContainer.appendChild(mainDiv);
    mainDiv.appendChild(introDivElement);
    mainDiv.appendChild(continueButton);

    continueButton.addEventListener('click',()=>{
        clearElement(mainDiv);
        startGame();
    });
    
}

const startGame = () => {

    const mainDiv = document.createElement('div')

    const questionParagraph = document.createElement('div')
    const workButton = document.createElement('button');
    const relaxButton = document.createElement('button');
    const upgradeButton = document.createElement('button');
    const quitButton = document.createElement('button');

    workButton.textContent = 'work';
    relaxButton.textContent = 'relax';
    upgradeButton.textContent = 'upgrade';
    quitButton.textContent = 'quit';


    mainContainer.appendChild(mainDiv);

    mainDiv.appendChild(workButton);
    mainDiv.appendChild(relaxButton);
    mainDiv.appendChild(upgradeButton);
    mainDiv.appendChild(quitButton);


    for(let day = 1; day <= NUM_DAYS; day++){
        const prevDay = day - 1;
        const dailyEarnings = handleMission(day, upgradeLevels, currentMoney);
        currentMoney = dailyEarnings;
    }




}














