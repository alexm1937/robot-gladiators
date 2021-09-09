var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
}; 

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    while (playerInfo.health > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
      enemyHealth = Math.max(0, enemyHealth - damage);

      console.log(
        playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };
var startGame = function() { 
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round "+ (i +1 ) );
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);
    
      //If we are not at the last enemy array, then ask shop
      if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        //ask user if they want to use store 
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        } 
      } 
      else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
      }
    }
  }
    endGame();
}
var endGame = function() {
  //if player still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! Now you have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
      startGame();
    }
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  }
var shop = function() {
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  //use switch to execute
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
      } else { window.alert("You don't have enough money!");
      } 
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerInfo.money >= 7 ) {
      window.alert("Upgrading players attack by 6 for 7 dollars."); 
      playerInfo.attack = playerInfo.attack = 6;
      playerInfo.money = playerInfo.money - 7;
      } else { 
        window.alert("You don't have enough money!");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.")
      shop();
      break;
  }

}; 
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
};
//actaul run commands
startGame();
fight ();
