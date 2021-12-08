const faveFood = "grapes";

const foodThoughts = function () {
    console.log("Original fave food: " + faveFood); // 1

    const faveFood = "lobster";

    console.log("New fave food: " + faveFood);
}

foodThoughts();

/**
 * 1. ReferenceError: favouriteFood is not defined.
 * Because
 * Andre says: with let and const, no hoisting happens.
 * Does that mean that no Creation phase happens???
 * Or it does happen, but it ends quickly, because no memory allocation happens.
 */