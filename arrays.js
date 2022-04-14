/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];
let belt;

backpack.push('mac n cheese', `hatchet`, `water`);
backpack.unshift(`some beef jerky`);
backpack.splice(2, 0, `sleeping back`);
// belt.push(backpack.splice(3, 1));
belt = backpack.splice(3, 1);

let inUse = backpack.pop();

// console.log(backpack);
// console.log(belt);
// console.log(inUse);

backpack.push(inUse);

// console.log(backpack);
// console.log(backpack.length);


let wifePack = backpack.splice(0, 3);
// console.log(wifePack);

wifePack.push(`jacket`, `knife`);
// console.log(wifePack);

for (let i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
}

for (let i = 0; i < wifePack.length; i++) {
    console.log(wifePack[i]);
}