/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between harry potter and
     voldemort.
*/ 

let harryAttack = 25;
let voldemortAttack = 45;

if (harryAttack > voldemortAttack) {
    console.log(`harry has the better attack`);
} else if (harryAttack < voldemortAttack){
    console.log(`voldemort has the better attack`);
} else if (harryAttack === voldemortAttack){
    console.log(`expelli-kadavra`);
}

let harryHealth = 100;
let voldemortHealth = 120;

if (harryHealth <= 0) {
    console.log(`its super effective - harry got clapped`)
} else {
    harryHealth -=  voldemortAttack;
    console.log(`harry health: ${harryHealth}`);
}

let ronHealth = 75;

if ((harryHealth + ronHealth) >= 100) {
    harryHealth = 100;
    console.log(`new harry health, thanks to ron: ${harryHealth}`)
} else {
    harryHealth += ronHealth;
    console.log(`new harry health: ${harryHealth}`)
}

let coinHeads = true;

if (coinHeads === true) {
    console.log(`the fight continues`);
} else if (coinHeads !== true) {
    console.log(`harry has apparated away from the danger`);
}


while (harryHealth > 0) {
    harryHealth -= voldemortAttack;
    console.log(`harry health ${harryHealth}`);
}

// for(let i = 0; i < 100; i +=1){
//     harryHealth -= voldemortAttack;
//     console.log(`uh oh: ${harryHealth}`);
//     if(harryHealth < 0){
//         harryHealth += ronHealth;
//         console.log(`ron, again, saves the day - harry health: ${harryHealth}`)
//     } else {
//         console.log(`frick, voldy wins`);
//     }
// }



// for(let i = 0; i < 5; i += 1){
//     anakinHealth -= dookuAttack;
//     console.log(`anakin health: ${anakinHealth}`)
// }