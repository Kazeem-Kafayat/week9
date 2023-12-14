//build a simple loop inside a function that
// takes an array and prints to the value of the array
// to the console


function fruitsTypes() {
    const fruits = ['orange', 'apple', 'paw paw', 'pineapple'];

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
};
fruitsTypes();