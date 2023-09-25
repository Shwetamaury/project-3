const jsonData = require('./data.json');
    // console.log("jsonData");

// Task 1: List all the food items
console.log("All Food Items:", listAllFoodItems(jsonData));
function listAllFoodItems(data) {
    return data.map(item => item.foodname);
}

// Task 2: List all the food items with category vegetables
console.log("Vegetables:", listVegetables(jsonData, "Vegetable"));
function listVegetables(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
}

// Task 3: List all the food items with category fruit
console.log("Fruits:", listFruits(jsonData, "Fruit"));
function listFruits(data) {
    return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
}

// Task 4: List all the food items with category proteins
console.log("Protien:", listProtiens(jsonData, "Protien"));
function listProtiens(data) {
    return data.filter(item => item.category === 'Protiens').map(item => item.foodname);   
}

// Task 5: List all the food items with category nuts
console.log("Nuts:", listNuts(jsonData, "Nuts"));
function listNuts(data) {
    return data.filter(item => item.category === 'Nuts').map(item => item.foodname);   
}

// Task 6: List all the food items with category grains
console.log("Grain:", listGrains(jsonData, "Grain"));
function listGrains(data) {
    return data.filter(item => item.category === 'Grain').map(item => item.foodname);    
}

// Task 7: List all the food items with category dairy
function listDairy(data) {
    return data.filter(item => item.category === 'Dairy').map(item => item.foodname);
    console.log("Dairy:", listDairy(jsonData, "Dairy"));
}

// Task 8: List all the food items with calorie above 100
function listAbove100Calories(data, threshold) {
    return data.filter(item => item.calorie > threshold).map(item => item.foodname);
    console.log("Above 100 Calories:", listAbove100Calories(jsonData, 100));
}

// Task 9: List all the food items with calorie below 100
function listBelow100Calories(data, threshold) {
    return data.filter(item => item.calorie < threshold).map(item => item.foodname);
    console.log("Below 100 Calories:", listBelow100Calories(jsonData, 100));
}

// Task 10: List all the food items with highest protein content to lowest
console.log("Sorted by Protien (Highest to Lowest):", listSortedByProtien(jsonData));
function listSortedByProtien(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);  
}

// Task 11: List all the food items with lowest carb content to highest
console.log("Sorted by Carb (Lowest to Highest):", listSortedByCarb(jsonData));
function listSortedByCarb(data) {
    return data.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);  
}






