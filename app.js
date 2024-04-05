const inputElement = document.querySelector('.name');
const startButton = document.querySelector('.sub');
const mainContainer = document.querySelector('.container');
const gameContainer = document.querySelector('#gameContainer');

let earnings = 0;
let userName = '';
let earnedSum = 0;
const NUM_DAYS = 30;
const MIN_DAILY_EARNINGS = 100;
const MAX_DAILY_EARNINGS = 600;
const END_GOAL = 50000;
const UPGRADE_COSTS = {
  A: 500,
  B: 1500,
  C: 3000,
};

const BASE_DAILY_EARNINGS = {
  B: 1000, // Base daily earnings for option B
  C: 1500, // Base daily earnings for option C
};
const upgradeLevels = {
    A: 1,
    B: 2,
    C: 3,
  };

  let playerObject = {
    playerName: userName,
    bankBalance: currentBank = 0,
    currentDay: day = 1,
    playerLevel:  1,

}
const itemArray = [{itemName: 'Snow Removal Crew', price: 500},{itemName: 'Snow Remover', price: 1500},{itemName: 'Flamethrower', price: 3000}]




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
    Anywho! Your goal is to get us a big ol' truck and some new building upgrades but its gonna run us $50000!
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
    const workButton = document.createElement('button');
    const relaxButton = document.createElement('button');
    const upgradeButton = document.createElement('button');
    const quitButton = document.createElement('button');
    const statementDiv = document.createElement('p');
    

    // Set text content for elements
    workButton.textContent = 'Work';
    relaxButton.textContent = 'Relax';
    upgradeButton.textContent = 'Upgrade';
    quitButton.textContent = 'Quit';



    statementDiv.textContent = `Day ${playerObject['currentDay']}: Do you want to shovel houses today? You currently have $${playerObject['bankBalance']}`;

    // Event listeners for game actions
    workButton.addEventListener('click', () => {
        handleWork();
        clearElement(statementDiv);
        clearElement(mainDiv);
    });

    relaxButton.addEventListener('click', () => {
        handleRelax(day);
        clearElement(statementDiv);
        clearElement(mainDiv);
    });

    upgradeButton.addEventListener('click', () => {
        handleUpgrade(day);
        clearElement(statementDiv);
        clearElement(mainDiv);
    });

    quitButton.addEventListener('click', () => {
        clearElement(statementDiv);
        clearElement(mainDiv);
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

const handleWork = () => {
    const workDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const continueButton = document.createElement('button');
    playerObject['currentDay']++;
    
    

    const dailyEarning =  generateRandomEarnings(playerObject['playerLevel'],currentBank, upgradeLevels);
    continueButton.textContent = 'CONTINUE';
    workDiv.textContent = `You chose to shovel houses today! \n Current Amount: $${playerObject['bankBalance']} \n  You earned $${earnings} today \n Total Amount Earned so far: $${earnedSum}`
    gameContainer.appendChild(workDiv);

    workDiv.appendChild(textDiv);
    workDiv.appendChild(continueButton);

    continueButton.addEventListener('click', () => {
        if(playerObject['currentDay'] <= NUM_DAYS && playerObject['bankBalance'] <= END_GOAL){
            clearElement(workDiv);
            startGame();
        }else{
            clearElement(workDiv);
            endGame();
        }

    });
    
   

}

const handleRelax = (day) => {
   
    const relaxDiv = document.createElement('div')
   const continueButton = document.createElement('button');
    const mainDiv = document.createElement('div');
   continueButton.textContent = "NEXT DAY";
   relaxDiv.textContent = 'You have chosen not to work today and have earned $0.';
   
    gameContainer.append(mainDiv)
   mainDiv.appendChild(relaxDiv);
   mainDiv.appendChild(continueButton);

   continueButton.addEventListener('click', () => {
    if(playerObject['currentDay'] < NUM_DAYS && playerObject['bankBalance'] <= END_GOAL){
        clearElement(mainDiv);
        playerObject['currentDay']++;
        startGame();
    }else {
        clearElement(mainDiv);
        endGame();
    }

});
}

const handleUpgrade = (day) => {
    const upgradeDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const snowRemovalCrewButton = document.createElement('button');
    const snowRemoverButton = document.createElement('button');
    const flameThrowerButton = document.createElement('button');

    snowRemovalCrewButton.textContent = 'Snow Removal Crew - $500';
    snowRemoverButton.textContent = 'Snow Remover - $1500';
    flameThrowerButton.textContent = 'Flamethrower - $3000';
    textDiv.textContent = `You chose to upgrade equipment. \n What would you like? \n You currently have ${playerObject['bankBalance']}`;

    gameContainer.appendChild(upgradeDiv);
    upgradeDiv.appendChild(textDiv);
    upgradeDiv.appendChild(snowRemovalCrewButton);
    upgradeDiv.appendChild(snowRemoverButton);
    upgradeDiv.appendChild(flameThrowerButton);

    snowRemovalCrewButton.addEventListener('click', () => {
        if(playerObject['bankBalance'] >= itemArray[0].price){
            playerObject['bankBalance'] = playerObject['bankBalance'] - itemArray[0].price;
            playerObject['playerLevel'] = 2;
            console.log(playerObject['playerLevel']);
            clearElement(upgradeDiv);
            startGame();
        }else{
            clearElement(upgradeDiv);
            startGame();
            alert('YOU CANT AFFORD THAT');
        }
        
    });
    snowRemoverButton.addEventListener('click', () => {
        if(playerObject['bankBalance'] >= itemArray[1].price){
            playerObject['bankBalance'] = playerObject['bankBalance'] - itemArray[1].price;
            playerObject['playerLevel'] = 3;
            console.log(playerObject['playerLevel']);
            clearElement(upgradeDiv);
            startGame();
        }else{
            clearElement(upgradeDiv);
            startGame();
            alert('YOU CANT AFFORD THAT');
        }
        
    });
    flameThrowerButton.addEventListener('click', () => {
        if(playerObject['bankBalance'] >= itemArray[2].price){
            playerObject['bankBalance'] = playerObject['bankBalance'] - itemArray[2].price;
            playerObject['playerLevel'] = 4;
            console.log(playerObject['playerLevel']);
            clearElement(upgradeDiv);
            startGame();
        }else{
            clearElement(upgradeDiv);
            startGame();
            alert('YOU CANT AFFORD THAT');
        }
        
    });

}

const handleQuit = () => {
    const startingDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const input = document.createElement('input');
    const button = document.createElement('button');

    h1.textContent = 'Welcome to Snow Remover Simulator 2000!';
    h2.textContent = 'What is your name?';
    button.textContent = 'Submit';
    
    gameContainer.appendChild(startingDiv);
    startingDiv.appendChild(h1);
    startingDiv.appendChild(h2);
    startingDiv.appendChild(input);
    startingDiv.appendChild(button);

    button.addEventListener('click', () => {
        userName = inputElement.value;
        clearElement(gameContainer);
        introScreen();
    });
}


const generateRandomEarnings = (level, upgradeLevels) => {
    let minEarnings, maxEarnings,  multiplier = 0;

    switch (level) {
        case 1:
            minEarnings = MIN_DAILY_EARNINGS;
            maxEarnings = MAX_DAILY_EARNINGS;
            break;
        case 2:
            console.log("case2 called")
            minEarnings = BASE_DAILY_EARNINGS["B"] + ((upgradeLevels["B"] ?? 1) - 1) * 250;
            maxEarnings = 1250 + ((upgradeLevels["B"] ?? 1) - 1) * 250;
            break;
        case 3:
            minEarnings = BASE_DAILY_EARNINGS["C"] + (upgradeLevels["C"] ?? 1) * 500;
            maxEarnings = 2000 + ((upgradeLevels["C"] ?? 1)-1) * 500;
            break;
        case 4:
            minEarnings = 1200;
            maxEarnings = 4000;
            break;
        default:
            minEarnings = 0;
            maxEarnings = 0;
    }

    earnings = Math.floor(Math.random() * (maxEarnings - minEarnings + 1)) + minEarnings;
    console.log(earnings);

    let sum = Math.floor(earnings);
    earnedSum += sum;
    playerObject['bankBalance'] += sum;

    console.log(multiplier);
}

const endGame = () => {
    if(playerObject['bankBalance'] >= END_GOAL){
        const endDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = `Congrats, you business mogul! You've made a living removing snow!`
        gameContainer.appendChild(endDiv);
        endDiv.appendChild(h2);

    }else{
        const endDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = `You have failed in business and in life! You MUST file for bankruptcy. I guess this isn't for everyone huh kid?!`
        gameContainer.appendChild(endDiv);
        endDiv.appendChild(h2);

    }
}